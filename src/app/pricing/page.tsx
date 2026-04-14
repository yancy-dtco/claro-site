import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing — Claro",
  description: "Three tiers. Each builds on the last. Start with a free buyer report.",
};

const features = [
  { name: "Quick Buyer Snapshot", free: true, t1: true, t2: true, t3: true },
  { name: "Full Buyer Intelligence Report", free: false, t1: true, t2: true, t3: true },
  { name: "Buyer psychographic profile", free: false, t1: true, t2: true, t3: true },
  { name: "Exact buyer vocabulary", free: false, t1: true, t2: true, t3: true },
  { name: "Purchase triggers & barriers", free: false, t1: true, t2: true, t3: true },
  { name: "10 content angles, ready to use", free: false, t1: true, t2: true, t3: true },
  { name: "Monthly signal refresh", free: false, t1: true, t2: true, t3: true },
  { name: "Brand voice & tone guide", free: false, t1: false, t2: true, t3: true },
  { name: "Positioning statement", free: false, t1: false, t2: true, t3: true },
  { name: "Messaging pillars", free: false, t1: false, t2: true, t3: true },
  { name: "Tagline options", free: false, t1: false, t2: true, t3: true },
  { name: "Competitor differentiation", free: false, t1: false, t2: true, t3: true },
  { name: "30-day content calendar", free: false, t1: false, t2: false, t3: true },
  { name: "Written posts (IG, TikTok, Pinterest, email)", free: false, t1: false, t2: false, t3: true },
  { name: "Product listing rewrites", free: false, t1: false, t2: false, t3: true },
  { name: "Ad creative briefs", free: false, t1: false, t2: false, t3: true },
  { name: "Monthly content refresh", free: false, t1: false, t2: false, t3: true },
];

const faqs = [
  {
    q: "What is Claro and how does it work?",
    a: "Claro is a buyer intelligence platform for small business owners and Etsy sellers. You enter your shop URL or describe what you sell. Claro scans real buyer conversations — Reddit threads, product reviews, community forums — and returns a structured report: who your buyer is, what language they use, what drives their decisions, and specific content angles you can use today.",
  },
  {
    q: "How is Claro different from eRank or Marmalead?",
    a: "eRank and Marmalead solve keywords. They tell you what people search for. Claro tells you who's searching and why — the psychology, the vocabulary, the triggers and barriers behind the search. It's a fundamentally different problem. Keyword tools are about discoverability. Claro is about understanding.",
  },
  {
    q: "Does Claro use AI? Is it just ChatGPT?",
    a: "Claro uses AI as a synthesis layer, but the intelligence comes from real signals — actual buyer conversations, reviews, and community posts. Generic AI tools like ChatGPT require you to prompt them yourself, have no access to real-time community data, and produce output that sounds like output. Claro is built specifically for this job, trained on this problem, and connected to the sources that matter.",
  },
  {
    q: "What data does Claro analyze?",
    a: "Claro pulls from Etsy shop reviews and listings, Reddit communities (r/EtsySellers, r/Etsy, and category-specific subs), and cross-platform product reviews in your category. All data is publicly available. Claro synthesizes it into a structured buyer intelligence report.",
  },
  {
    q: "How long does a buyer report take?",
    a: "About two minutes. Claro is running a real-time analysis across multiple sources, not serving a cached template. The time is the intelligence.",
  },
  {
    q: "Can I cancel anytime?",
    a: "Yes. All plans are monthly, no contracts. Cancel from your account settings. No hoops, no penalty.",
  },
  {
    q: "Is Claro affiliated with Etsy?",
    a: "No. Claro is an independent tool. The term 'Etsy' is a trademark of Etsy, Inc. Claro uses the Etsy API but is not endorsed or certified by Etsy, Inc.",
  },
  {
    q: "What if I sell on Shopify or another platform, not Etsy?",
    a: "Claro works for any small business owner or solopreneur. Enter your product category instead of a shop URL and Claro will analyze buyer signals across relevant communities and reviews. Etsy is our beachhead, but the intelligence works for anyone who sells a real product to real people.",
  },
];

function Check({ visible }: { visible: boolean }) {
  return (
    <span style={{ fontSize: "16px", color: visible ? "var(--cobalt)" : "var(--sky)", opacity: visible ? 1 : 0.3 }}>
      {visible ? "✓" : "—"}
    </span>
  );
}

export default function Pricing() {
  return (
    <>
      <Nav />
      <main style={{ background: "var(--warm-white)" }}>

        {/* Hero */}
        <section style={{ paddingTop: "120px", paddingBottom: "64px", padding: "120px 40px 64px", textAlign: "center" }}>
          <div style={{ maxWidth: "680px", margin: "0 auto" }}>
            <h1 style={{ fontSize: "clamp(40px, 5vw, 60px)", marginBottom: "20px" }}>
              One system. Three tiers.
            </h1>
            <p style={{ fontSize: "20px", color: "var(--ink)", lineHeight: 1.6, marginBottom: "12px" }}>
              All built on the signals your buyers already leave online.
            </p>
            <p style={{ fontSize: "16px", color: "var(--horizon)", fontFamily: "Inter, system-ui, sans-serif" }}>
              Start free. Upgrade when you&rsquo;re ready.
            </p>
          </div>
        </section>

        {/* Pricing cards */}
        <section style={{ padding: "0 40px 96px" }}>
          <div style={{ maxWidth: "1100px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px", alignItems: "stretch" }}>

            {/* Free */}
            <div style={{ background: "var(--ice)", border: "1px solid var(--sky)", borderRadius: "16px", padding: "36px", display: "flex", flexDirection: "column", gap: "20px" }}>
              <div>
                <p style={{ fontSize: "11px", fontFamily: "Inter, system-ui, sans-serif", fontWeight: 600, color: "var(--horizon)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "8px" }}>Free</p>
                <div style={{ display: "flex", alignItems: "baseline", gap: "4px" }}>
                  <span style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: "40px", color: "var(--midnight)", lineHeight: 1 }}>$0</span>
                </div>
              </div>
              <p style={{ fontSize: "15px", color: "var(--ink)", lineHeight: 1.6, flexGrow: 1 }}>A quick look at who&rsquo;s buying from you. No card, no commitment.</p>
              <a href="/#get-started" style={{ display: "block", padding: "12px 24px", background: "var(--cobalt)", color: "var(--warm-white)", borderRadius: "8px", fontSize: "15px", fontFamily: "Inter, system-ui, sans-serif", fontWeight: 600, textAlign: "center", textDecoration: "none" }}>
                Get free report
              </a>
            </div>

            {/* Tier 1 */}
            <div style={{ background: "var(--ice)", border: "1px solid var(--sky)", borderRadius: "16px", padding: "36px", display: "flex", flexDirection: "column", gap: "20px" }}>
              <div>
                <p style={{ fontSize: "11px", fontFamily: "Inter, system-ui, sans-serif", fontWeight: 600, color: "var(--horizon)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "8px" }}>Know Your Buyer</p>
                <div style={{ display: "flex", alignItems: "baseline", gap: "4px" }}>
                  <span style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: "40px", color: "var(--midnight)", lineHeight: 1 }}>$49</span>
                  <span style={{ fontSize: "15px", color: "var(--ink)", fontFamily: "Inter, system-ui, sans-serif" }}>/mo</span>
                </div>
              </div>
              <p style={{ fontSize: "15px", color: "var(--ink)", lineHeight: 1.6, flexGrow: 1 }}>A complete picture of who&rsquo;s buying — built from what they actually say online.</p>
              <a href="/#get-started" style={{ display: "block", padding: "12px 24px", background: "var(--cobalt)", color: "var(--warm-white)", borderRadius: "8px", fontSize: "15px", fontFamily: "Inter, system-ui, sans-serif", fontWeight: 600, textAlign: "center", textDecoration: "none" }}>
                Get started
              </a>
            </div>

            {/* Tier 2 — featured */}
            <div style={{ background: "var(--cobalt)", borderRadius: "16px", padding: "36px", display: "flex", flexDirection: "column", gap: "20px", boxShadow: "0 8px 32px rgba(44,82,130,0.3)", position: "relative" }}>
              <div style={{ position: "absolute", top: "-14px", left: "50%", transform: "translateX(-50%)", background: "var(--gold)", color: "var(--midnight)", fontSize: "12px", fontFamily: "Inter, system-ui, sans-serif", fontWeight: 700, padding: "4px 16px", borderRadius: "20px", whiteSpace: "nowrap" }}>
                Most popular
              </div>
              <div>
                <p style={{ fontSize: "11px", fontFamily: "Inter, system-ui, sans-serif", fontWeight: 600, color: "var(--sky)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "8px" }}>Build Your Brand</p>
                <div style={{ display: "flex", alignItems: "baseline", gap: "4px" }}>
                  <span style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: "40px", color: "var(--warm-white)", lineHeight: 1 }}>$79</span>
                  <span style={{ fontSize: "15px", color: "var(--sky)", fontFamily: "Inter, system-ui, sans-serif" }}>/mo</span>
                </div>
              </div>
              <p style={{ fontSize: "15px", color: "var(--sky)", lineHeight: 1.6, flexGrow: 1 }}>Everything in Tier 1, plus your brand voice, positioning, and messaging pillars.</p>
              <a href="/#get-started" style={{ display: "block", padding: "12px 24px", background: "var(--warm-white)", color: "var(--cobalt)", borderRadius: "8px", fontSize: "15px", fontFamily: "Inter, system-ui, sans-serif", fontWeight: 700, textAlign: "center", textDecoration: "none" }}>
                Get started
              </a>
            </div>

            {/* Tier 3 */}
            <div style={{ background: "var(--ice)", border: "1px solid var(--sky)", borderRadius: "16px", padding: "36px", display: "flex", flexDirection: "column", gap: "20px" }}>
              <div>
                <p style={{ fontSize: "11px", fontFamily: "Inter, system-ui, sans-serif", fontWeight: 600, color: "var(--horizon)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "8px" }}>Run Your Brand</p>
                <div style={{ display: "flex", alignItems: "baseline", gap: "4px" }}>
                  <span style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: "40px", color: "var(--midnight)", lineHeight: 1 }}>$149</span>
                  <span style={{ fontSize: "15px", color: "var(--ink)", fontFamily: "Inter, system-ui, sans-serif" }}>/mo</span>
                </div>
              </div>
              <p style={{ fontSize: "15px", color: "var(--ink)", lineHeight: 1.6, flexGrow: 1 }}>Everything in Tier 2, plus written content — calendar, posts, listing copy — refreshed monthly.</p>
              <a href="/#get-started" style={{ display: "block", padding: "12px 24px", background: "var(--cobalt)", color: "var(--warm-white)", borderRadius: "8px", fontSize: "15px", fontFamily: "Inter, system-ui, sans-serif", fontWeight: 600, textAlign: "center", textDecoration: "none" }}>
                Get started
              </a>
            </div>
          </div>
        </section>

        {/* Feature comparison table */}
        <section style={{ padding: "0 40px 96px" }}>
          <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
            <h2 style={{ fontSize: "36px", marginBottom: "48px", textAlign: "center" }}>Full comparison</h2>
            <div style={{ background: "var(--ice)", borderRadius: "16px", overflow: "hidden", border: "1px solid var(--sky)" }}>
              {/* Header */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr repeat(4, 100px)", background: "var(--midnight)", padding: "16px 24px" }}>
                <span style={{ fontSize: "13px", color: "var(--sky)", fontFamily: "Inter, system-ui, sans-serif" }}>Feature</span>
                {["Free", "$49/mo", "$79/mo", "$149/mo"].map((h) => (
                  <span key={h} style={{ fontSize: "13px", color: "var(--sky)", fontFamily: "Inter, system-ui, sans-serif", textAlign: "center" }}>{h}</span>
                ))}
              </div>
              {features.map((f, i) => (
                <div
                  key={f.name}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr repeat(4, 100px)",
                    padding: "14px 24px",
                    borderTop: i > 0 ? "1px solid var(--sky)" : "none",
                    background: i % 2 === 0 ? "var(--ice)" : "var(--warm-white)",
                  }}
                >
                  <span style={{ fontSize: "14px", color: "var(--ink)", fontFamily: "Inter, system-ui, sans-serif" }}>{f.name}</span>
                  {[f.free, f.t1, f.t2, f.t3].map((v, j) => (
                    <div key={j} style={{ textAlign: "center" }}>
                      <Check visible={v} />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section style={{ padding: "0 40px 96px", maxWidth: "800px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "36px", marginBottom: "48px", textAlign: "center" }}>Common questions</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
            {faqs.map((faq, i) => (
              <div
                key={i}
                style={{
                  borderTop: "1px solid var(--sky)",
                  padding: "28px 0",
                }}
              >
                <h3 style={{ fontSize: "20px", marginBottom: "12px", color: "var(--midnight)" }}>{faq.q}</h3>
                <p style={{ fontSize: "16px", color: "var(--ink)", lineHeight: 1.7 }}>{faq.a}</p>
              </div>
            ))}
            <div style={{ borderTop: "1px solid var(--sky)" }} />
          </div>
        </section>

        {/* CTA */}
        <section style={{ background: "var(--cobalt)", padding: "80px 40px", textAlign: "center" }}>
          <div style={{ maxWidth: "600px", margin: "0 auto" }}>
            <h2 style={{ fontSize: "clamp(32px, 4vw, 48px)", color: "var(--warm-white)", marginBottom: "20px" }}>
              Start with a free report.
            </h2>
            <p style={{ fontSize: "18px", color: "var(--sky)", marginBottom: "40px" }}>
              No card. No account. Just enter your shop and see your buyer.
            </p>
            <a
              href="/#get-started"
              style={{
                display: "inline-block",
                padding: "16px 36px",
                background: "var(--gold)",
                color: "var(--midnight)",
                borderRadius: "8px",
                fontSize: "16px",
                fontFamily: "Inter, system-ui, sans-serif",
                fontWeight: 700,
                textDecoration: "none",
              }}
            >
              Get your free buyer report →
            </a>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
