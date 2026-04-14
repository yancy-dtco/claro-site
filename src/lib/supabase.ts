import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!

// Client-side (uses anon key + RLS)
export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Server-side (uses service role key, bypasses RLS — admin/API routes only)
export const supabaseAdmin = createClient(supabaseUrl, supabaseServiceKey, {
  auth: { autoRefreshToken: false, persistSession: false }
})

// Types
export type SubscriptionTier = 'free' | 'tier1' | 'tier2' | 'tier3'
export type ReportStatus = 'pending' | 'processing' | 'complete' | 'failed'

export interface Profile {
  id: string
  email: string
  full_name?: string
  is_admin: boolean
  admin_role?: string
  onboarding_complete: boolean
  created_at: string
}

export interface Subscription {
  id: string
  user_id: string
  tier: SubscriptionTier
  status: string
  reports_used_this_month: number
  reports_limit: number
  current_period_end?: string
  stripe_customer_id?: string
  stripe_subscription_id?: string
}

export interface Shop {
  id: string
  user_id: string
  etsy_shop_url?: string
  shop_name?: string
  product_category?: string
  is_primary: boolean
}

export interface Report {
  id: string
  user_id: string
  shop_id?: string
  input_shop_url?: string
  input_category?: string
  status: ReportStatus
  signals_total: number
  tier_at_generation: SubscriptionTier
  output_buyer_profile?: Record<string, unknown>
  output_buyer_vocabulary?: Record<string, unknown>
  output_purchase_triggers?: Record<string, unknown>
  output_purchase_barriers?: Record<string, unknown>
  output_content_angles?: Record<string, unknown>
  output_brand_voice?: Record<string, unknown>
  output_positioning?: Record<string, unknown>
  output_content_calendar?: Record<string, unknown>
  created_at: string
  completed_at?: string
}

export const TIER_LIMITS: Record<SubscriptionTier, number> = {
  free: 1,
  tier1: 10,
  tier2: 20,
  tier3: -1, // unlimited
}

export const TIER_LABELS: Record<SubscriptionTier, string> = {
  free: 'Free',
  tier1: 'Know Your Buyer ($49/mo)',
  tier2: 'Build Your Brand ($79/mo)',
  tier3: 'Run Your Brand ($149/mo)',
}
