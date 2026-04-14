-- ============================================================
-- CLARO — Complete Supabase Schema
-- Version: 1.0 · April 2026
-- Run this in Supabase SQL Editor (Dashboard → SQL Editor → New query)
-- ============================================================

-- Enable required extensions
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- ============================================================
-- ENUMS
-- ============================================================

CREATE TYPE subscription_tier AS ENUM ('free', 'tier1', 'tier2', 'tier3');
CREATE TYPE subscription_status AS ENUM ('active', 'trialing', 'past_due', 'canceled', 'incomplete');
CREATE TYPE report_status AS ENUM ('pending', 'processing', 'complete', 'failed');
CREATE TYPE signal_source AS ENUM ('etsy_reviews', 'etsy_listings', 'reddit', 'amazon_reviews', 'google', 'other');
CREATE TYPE admin_role AS ENUM ('super_admin', 'admin', 'viewer');

-- ============================================================
-- PROFILES (extends Supabase Auth users)
-- ============================================================

CREATE TABLE profiles (
  id                UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email             TEXT NOT NULL,
  full_name         TEXT,
  avatar_url        TEXT,
  is_admin          BOOLEAN DEFAULT FALSE,
  admin_role        admin_role,
  onboarding_complete BOOLEAN DEFAULT FALSE,
  created_at        TIMESTAMPTZ DEFAULT NOW(),
  updated_at        TIMESTAMPTZ DEFAULT NOW()
);

-- Auto-create profile on signup
CREATE OR REPLACE FUNCTION handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO profiles (id, email, full_name)
  VALUES (
    NEW.id,
    NEW.email,
    NEW.raw_user_meta_data->>'full_name'
  );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION handle_new_user();

-- ============================================================
-- SUBSCRIPTIONS
-- ============================================================

CREATE TABLE subscriptions (
  id                    UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id               UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  tier                  subscription_tier DEFAULT 'free',
  status                subscription_status DEFAULT 'active',
  stripe_customer_id    TEXT,
  stripe_subscription_id TEXT,
  stripe_price_id       TEXT,
  current_period_start  TIMESTAMPTZ,
  current_period_end    TIMESTAMPTZ,
  cancel_at_period_end  BOOLEAN DEFAULT FALSE,
  trial_end             TIMESTAMPTZ,
  reports_used_this_month INT DEFAULT 0,
  reports_limit         INT DEFAULT 1, -- free: 1, t1: 10, t2: 20, t3: unlimited (-1)
  created_at            TIMESTAMPTZ DEFAULT NOW(),
  updated_at            TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(user_id)
);

-- Auto-create free subscription on profile creation
CREATE OR REPLACE FUNCTION handle_new_profile()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO subscriptions (user_id, tier, status, reports_limit)
  VALUES (NEW.id, 'free', 'active', 1);
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

CREATE TRIGGER on_profile_created
  AFTER INSERT ON profiles
  FOR EACH ROW EXECUTE FUNCTION handle_new_profile();

-- ============================================================
-- SHOPS
-- ============================================================

CREATE TABLE shops (
  id            UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id       UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  etsy_shop_url TEXT,
  etsy_shop_id  TEXT,
  shop_name     TEXT,
  product_category TEXT, -- fallback if no Etsy shop URL
  is_primary    BOOLEAN DEFAULT TRUE,
  etsy_oauth_token TEXT, -- encrypted, only set for paid tiers
  last_synced_at TIMESTAMPTZ,
  created_at    TIMESTAMPTZ DEFAULT NOW(),
  updated_at    TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================================
-- REPORTS
-- ============================================================

CREATE TABLE reports (
  id              UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id         UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  shop_id         UUID REFERENCES shops(id) ON DELETE SET NULL,

  -- Input
  input_shop_url  TEXT,
  input_category  TEXT,
  input_raw       TEXT, -- raw user input

  -- Status
  status          report_status DEFAULT 'pending',
  started_at      TIMESTAMPTZ,
  completed_at    TIMESTAMPTZ,
  failed_reason   TEXT,

  -- Signal counts
  signals_etsy_reviews   INT DEFAULT 0,
  signals_reddit         INT DEFAULT 0,
  signals_other          INT DEFAULT 0,
  signals_total          INT DEFAULT 0,

  -- Output (structured JSON)
  output_buyer_profile        JSONB, -- psychographic profile
  output_buyer_vocabulary     JSONB, -- exact words/phrases
  output_purchase_triggers    JSONB, -- what makes them buy
  output_purchase_barriers    JSONB, -- what stops them
  output_content_angles       JSONB, -- 10 content ideas
  output_competitor_gaps      JSONB, -- competitive openings
  output_brand_voice          JSONB, -- tier 2+
  output_positioning          JSONB, -- tier 2+
  output_messaging_pillars    JSONB, -- tier 2+
  output_content_calendar     JSONB, -- tier 3
  output_listing_rewrites     JSONB, -- tier 3
  output_raw_llm_response     TEXT,  -- full LLM output for debugging

  -- Metadata
  tier_at_generation          subscription_tier DEFAULT 'free',
  llm_model                   TEXT DEFAULT 'claude-3-5-sonnet-20241022',
  llm_tokens_used             INT,
  processing_time_ms          INT,

  is_archived     BOOLEAN DEFAULT FALSE,
  created_at      TIMESTAMPTZ DEFAULT NOW(),
  updated_at      TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================================
-- REPORT SIGNALS (raw data pulled per report)
-- ============================================================

CREATE TABLE report_signals (
  id          UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  report_id   UUID NOT NULL REFERENCES reports(id) ON DELETE CASCADE,
  source      signal_source NOT NULL,
  source_url  TEXT,
  source_id   TEXT, -- platform-specific ID
  content     TEXT NOT NULL,
  metadata    JSONB, -- author, date, upvotes, rating, etc.
  relevance_score FLOAT, -- 0-1, assigned during synthesis
  used_in_report BOOLEAN DEFAULT TRUE,
  created_at  TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================================
-- ADMIN NOTES (CRM layer)
-- ============================================================

CREATE TABLE admin_notes (
  id          UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id     UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  admin_id    UUID NOT NULL REFERENCES profiles(id),
  note        TEXT NOT NULL,
  is_pinned   BOOLEAN DEFAULT FALSE,
  created_at  TIMESTAMPTZ DEFAULT NOW(),
  updated_at  TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================================
-- WAITLIST (pre-launch email capture)
-- ============================================================

CREATE TABLE waitlist (
  id              UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  email           TEXT NOT NULL UNIQUE,
  shop_url        TEXT,
  product_category TEXT,
  source          TEXT DEFAULT 'homepage', -- homepage, blog, reddit
  converted       BOOLEAN DEFAULT FALSE,
  converted_at    TIMESTAMPTZ,
  created_at      TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================================
-- EMAIL EVENTS (track email funnel)
-- ============================================================

CREATE TABLE email_events (
  id          UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id     UUID REFERENCES profiles(id) ON DELETE CASCADE,
  email       TEXT,
  event_type  TEXT NOT NULL, -- sent, opened, clicked, unsubscribed
  template    TEXT, -- report_ready, day3_followup, day7_convert
  metadata    JSONB,
  created_at  TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================================
-- INDEXES
-- ============================================================

CREATE INDEX idx_reports_user_id ON reports(user_id);
CREATE INDEX idx_reports_status ON reports(status);
CREATE INDEX idx_reports_created_at ON reports(created_at DESC);
CREATE INDEX idx_report_signals_report_id ON report_signals(report_id);
CREATE INDEX idx_subscriptions_user_id ON subscriptions(user_id);
CREATE INDEX idx_subscriptions_stripe_customer ON subscriptions(stripe_customer_id);
CREATE INDEX idx_subscriptions_tier ON subscriptions(tier);
CREATE INDEX idx_admin_notes_user_id ON admin_notes(user_id);
CREATE INDEX idx_waitlist_email ON waitlist(email);
CREATE INDEX idx_email_events_user_id ON email_events(user_id);

-- ============================================================
-- UPDATED_AT TRIGGERS
-- ============================================================

CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_profiles_updated_at BEFORE UPDATE ON profiles FOR EACH ROW EXECUTE FUNCTION update_updated_at();
CREATE TRIGGER update_subscriptions_updated_at BEFORE UPDATE ON subscriptions FOR EACH ROW EXECUTE FUNCTION update_updated_at();
CREATE TRIGGER update_shops_updated_at BEFORE UPDATE ON shops FOR EACH ROW EXECUTE FUNCTION update_updated_at();
CREATE TRIGGER update_reports_updated_at BEFORE UPDATE ON reports FOR EACH ROW EXECUTE FUNCTION update_updated_at();
CREATE TRIGGER update_admin_notes_updated_at BEFORE UPDATE ON admin_notes FOR EACH ROW EXECUTE FUNCTION update_updated_at();

-- ============================================================
-- ROW LEVEL SECURITY (RLS)
-- ============================================================

ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE subscriptions ENABLE ROW LEVEL SECURITY;
ALTER TABLE shops ENABLE ROW LEVEL SECURITY;
ALTER TABLE reports ENABLE ROW LEVEL SECURITY;
ALTER TABLE report_signals ENABLE ROW LEVEL SECURITY;
ALTER TABLE admin_notes ENABLE ROW LEVEL SECURITY;
ALTER TABLE waitlist ENABLE ROW LEVEL SECURITY;
ALTER TABLE email_events ENABLE ROW LEVEL SECURITY;

-- Helper: is current user an admin?
CREATE OR REPLACE FUNCTION is_admin()
RETURNS BOOLEAN AS $$
  SELECT COALESCE(
    (SELECT is_admin FROM profiles WHERE id = auth.uid()),
    FALSE
  );
$$ LANGUAGE sql SECURITY DEFINER;

-- PROFILES
CREATE POLICY "Users can view own profile" ON profiles FOR SELECT USING (auth.uid() = id OR is_admin());
CREATE POLICY "Users can update own profile" ON profiles FOR UPDATE USING (auth.uid() = id);
CREATE POLICY "Admins can view all profiles" ON profiles FOR SELECT USING (is_admin());
CREATE POLICY "Admins can update all profiles" ON profiles FOR UPDATE USING (is_admin());

-- SUBSCRIPTIONS
CREATE POLICY "Users can view own subscription" ON subscriptions FOR SELECT USING (auth.uid() = user_id OR is_admin());
CREATE POLICY "Admins can update subscriptions" ON subscriptions FOR UPDATE USING (is_admin());
CREATE POLICY "System can insert subscriptions" ON subscriptions FOR INSERT WITH CHECK (TRUE);

-- SHOPS
CREATE POLICY "Users can manage own shops" ON shops FOR ALL USING (auth.uid() = user_id OR is_admin());

-- REPORTS
CREATE POLICY "Users can view own reports" ON reports FOR SELECT USING (auth.uid() = user_id OR is_admin());
CREATE POLICY "Users can create reports" ON reports FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "System can update reports" ON reports FOR UPDATE USING (auth.uid() = user_id OR is_admin());

-- REPORT SIGNALS (admin only for direct access)
CREATE POLICY "Admins can view all signals" ON report_signals FOR SELECT USING (is_admin());
CREATE POLICY "System can insert signals" ON report_signals FOR INSERT WITH CHECK (TRUE);

-- ADMIN NOTES
CREATE POLICY "Admins can manage notes" ON admin_notes FOR ALL USING (is_admin());

-- WAITLIST (public insert, admin read)
CREATE POLICY "Public can join waitlist" ON waitlist FOR INSERT WITH CHECK (TRUE);
CREATE POLICY "Admins can view waitlist" ON waitlist FOR SELECT USING (is_admin());

-- EMAIL EVENTS
CREATE POLICY "Admins can view all email events" ON email_events FOR SELECT USING (is_admin());
CREATE POLICY "System can insert email events" ON email_events FOR INSERT WITH CHECK (TRUE);

-- ============================================================
-- VIEWS (for admin dashboard)
-- ============================================================

CREATE OR REPLACE VIEW admin_user_overview AS
SELECT
  p.id,
  p.email,
  p.full_name,
  p.created_at AS joined_at,
  s.tier,
  s.status AS subscription_status,
  s.reports_used_this_month,
  s.reports_limit,
  s.current_period_end,
  s.stripe_customer_id,
  COUNT(r.id) AS total_reports,
  MAX(r.created_at) AS last_report_at,
  sh.shop_name,
  sh.etsy_shop_url
FROM profiles p
LEFT JOIN subscriptions s ON s.user_id = p.id
LEFT JOIN reports r ON r.user_id = p.id
LEFT JOIN shops sh ON sh.user_id = p.id AND sh.is_primary = TRUE
WHERE p.is_admin = FALSE OR p.is_admin IS NULL
GROUP BY p.id, p.email, p.full_name, p.created_at, s.tier, s.status, s.reports_used_this_month, s.reports_limit, s.current_period_end, s.stripe_customer_id, sh.shop_name, sh.etsy_shop_url;

CREATE OR REPLACE VIEW admin_report_overview AS
SELECT
  r.id,
  r.created_at,
  r.status,
  r.tier_at_generation,
  r.signals_total,
  r.processing_time_ms,
  r.input_shop_url,
  r.input_category,
  p.email AS user_email,
  p.id AS user_id
FROM reports r
JOIN profiles p ON p.id = r.user_id
ORDER BY r.created_at DESC;

-- ============================================================
-- SEED: Make first user an admin (run after creating your account)
-- UPDATE profiles SET is_admin = TRUE, admin_role = 'super_admin'
-- WHERE email = 'your@email.com';
-- ============================================================
