import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How to Write a 30-Day Content Calendar for Your Small Business — Claro",
  description: "A 30-day content calendar is the difference between reactive posting and a system. Here's how to build one in an afternoon — with a template you can use immediately.",
  openGraph: {
    title: "How to Write a 30-Day Content Calendar for Your Small Business",
    description: "A 30-day content calendar is the difference between reactive posting and a system. Here's how to build one in an afternoon.",
    type: "article",
  },
};

const faqs = [
  {
    q: "How long does it take to build a 30-day content calendar?",
    a: "With a clear content strategy already defined (platforms, pillars, goal), building a 30-day calendar should take 2-3 hours: 30 minutes for seasonal and date anchoring, 60 minutes for planning individual posts with hooks and angles, and 30-60 minutes for batch-writing captions for the highest-priority pieces. The calendar itself is fast — it&rsquo;s the upstream thinking (strategy, buyer profile, pillars) that takes longer.",
  },
  {
    q: "How specific should each entry in my content calendar be?",
    a: "Specific enough that you know what to create without having to think about it. The minimum useful entry: date + platform + content type + hook or angle. The ideal entry adds the specific visual (what to film/photograph) and a draft first line of copy. If an entry says &ldquo;post something about products&rdquo; it&rsquo;s not specific enough to act on.",
  },
  {
    q: "Should I plan content around seasonal dates and buying windows?",
    a: "Absolutely. The highest-converting content for small businesses is occasion-anchored. Map every major buying window 4-6 weeks ahead: plan content 3 weeks before Mother&rsquo;s Day, 4 weeks before Christmas, 2 weeks before Valentine&rsquo;s Day. Gift-buyer searches spike sharply before these dates — you want content in market when buyers are actively looking.",
  },
  {
    q: "What if I fall behind on my content calendar?",
    a: "Pull from your content bank — a library of pre-created, evergreen posts you can publish anytime. If you don&rsquo;t have one yet, start one today: create 5-10 evergreen posts (process content, educational content, product features that don&rsquo;t reference specific dates) and save them as a buffer. A content calendar with a backup bank is resilient. One without is fragile.",
  },
  {
    q: "Is it better to post daily or less frequently but more consistently?",
    a: "Consistency matters more than frequency. Three posts per week that are consistently on-brand, buyer-focused, and high quality outperform daily posting that degrades in quality or consistency. Build your calendar around a schedule you can sustain indefinitely — not the maximum you could theoretically do if you had no other obligations.",
  },
];

export default function ContentCalendarSmallBusinessPost() {
  return (
    <>
      <Nav />
      <main style={{ background: "var(--warm-white)" }}>

        <section style={{ paddingTop: "100px", paddingBottom: "0", padding: "100px 40px 0" }}>
          <div style={{ maxWidth: "740px", margin: "0 auto" }}>
            <div style={{ display: "flex", gap: "12px", alignItems: "center", marginBottom: "24px", flexWrap: "wrap" }}>
              <span style={{ fontSize: "12px", fontFamily: "Inter, system-ui, sans-serif", fontWeight: 600, color: "var(--cobalt)", background: "rgba(44,82,130,0.1)", padding: "4px 12px", borderRadius: "12px" }}>Content</span>
              <span style={{ fontSize: "13px", color: "var(--horizon)", fontFamily: "Inter, system-ui, sans-serif" }}>10 min read · April 2026</span>
            </div>
            <h1 style={{ fontSize: "clamp(36px, 5vw, 56px)", lineHeight: 1.1, marginBottom: "24px" }}>
              How to Write a 30-Day Content Calendar for Your Small Business
            </h1>
            <p style={{ fontSize: "11px", fontFamily: "Inter, system-ui, sans-serif", color: "var(--horizon)", marginBottom: "8px", letterSpacing: "0.05em" }}>
              By <a href="/about" style={{ color: "var(--cobalt)" }}>the Claro team</a>
            </p>
            <p style={{ fontSize: "20px", color: "var(--ink)", lineHeight: 1.7, marginTop: "32px", marginBottom: "0" }}>
              A 30-day content calendar isn&rsquo;t just a planning document. It&rsquo;s a decision system. It moves you from &ldquo;what should I post today?&rdquo; to &ldquo;post this specific thing, with this specific angle, for this specific reason.&rdquo; That shift is the difference between inconsistent posting and a content presence that builds.
            </p>
          </div>
        </section>

        <article style={{ padding: "48px 40px 96px", maxWidth: "740px", margin: "0 auto" }}>

          <p style={{ fontSize: "17px", color: "var(--ink)", lineHeight: 1.8, marginBottom: "48px" }}>
            Here&rsquo;s how to build a 30-day calendar in one afternoon — with a structure that actually works for small business owners who are also making, shipping, and running everything else.
          </p>

          <h2 style={{ fontSize: "32px", marginBottom: "20px", marginTop: "64px" }}>Before you build the calendar: three prerequisites</h2>

          {[
            { prereq: "Your content platform(s)", detail: "One primary platform done consistently is better than three done poorly. Know which platform you&rsquo;re building for before you plan content." },
            { prereq: "Your content pillars", detail: "The 3-5 content categories you rotate through. Process, product features, education, social proof, behind-the-scenes. Without pillars, every post is a blank slate decision." },
            { prereq: "Your buyer profile", detail: "Who you&rsquo;re creating for, what occasions they buy around, and what language resonates with them. The calendar is only as good as the buyer understanding it&rsquo;s built on." },
          ].map((item, i) => (
            <div key={i} style={{ display: "flex", gap: "16px", alignItems: "flex-start", marginBottom: "16px" }}>
              <span style={{ background: "var(--cobalt)", color: "var(--warm-white)", fontSize: "13px", fontFamily: "Inter, system-ui, sans-serif", fontWeight: 700, padding: "4px 10px", borderRadius: "6px", whiteSpace: "nowrap", flexShrink: 0, marginTop: "2px" }}>{i + 1}</span>
              <div>
                <p style={{ fontSize: "16px", fontFamily: "Inter, system-ui, sans-serif", fontWeight: 600, color: "var(--midnight)", marginBottom: "4px" }}>{item.prereq}</p>
                <p style={{ fontSize: "15px", color: "var(--ink)", lineHeight: 1.6 }}>{item.detail}</p>
              </div>
            </div>
          ))}

          <h2 style={{ fontSize: "32px", marginBottom: "20px", marginTop: "64px" }}>Step 1: Map your seasonal anchors</h2>

          <p style={{ fontSize: "17px", color: "var(--ink)", lineHeight: 1.8, marginBottom: "24px" }}>
            Open your calendar. Mark every relevant buying occasion in the next 30 days. For most small businesses, this includes:
          </p>

          <ul style={{ padding: "0 0 0 24px", margin: "0 0 32px", display: "flex", flexDirection: "column", gap: "10px" }}>
            {[
              "National holidays (Mother&rsquo;s Day, Father&rsquo;s Day, etc.) — mark 3 weeks before and 1 week before",
              "Local or niche occasions relevant to your product category",
              "Your own shop milestones (anniversary, product launch, restock)",
              "Shipping cutoff dates (when orders need to be placed to arrive in time)",
            ].map((item, i) => (
              <li key={i} style={{ fontSize: "16px", color: "var(--ink)", lineHeight: 1.7 }} dangerouslySetInnerHTML={{ __html: item }} />
            ))}
          </ul>

          <p style={{ fontSize: "17px", color: "var(--ink)", lineHeight: 1.8, marginBottom: "48px" }}>
            These anchors are your highest-converting content opportunities. Plan your best content for these windows — your most compelling products, strongest hooks, and clearest CTAs.
          </p>

          <h2 style={{ fontSize: "32px", marginBottom: "20px", marginTop: "64px" }}>Step 2: Fill the rhythm slots</h2>

          <p style={{ fontSize: "17px", color: "var(--ink)", lineHeight: 1.8, marginBottom: "24px" }}>
            For a 3-post/week cadence on Instagram, your 30-day calendar has about 13 post slots. Fill them with your content pillar rotation:
          </p>

          <div style={{ background: "var(--ice)", border: "1px solid var(--sky)", borderRadius: "12px", padding: "28px 32px", margin: "24px 0 32px" }}>
            <p style={{ fontSize: "15px", fontFamily: "Inter, system-ui, sans-serif", fontWeight: 600, color: "var(--cobalt)", marginBottom: "16px" }}>Sample 4-week rotation:</p>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {[
                { week: "Week 1", posts: "Process content | Product feature (occasion-anchored) | Behind-the-scenes" },
                { week: "Week 2", posts: "Social proof | Education | Product feature (specific listing)" },
                { week: "Week 3", posts: "Process content | Gift occasion content | Behind-the-scenes" },
                { week: "Week 4", posts: "Education | Product feature | Seasonal/deadline content" },
              ].map((item, i) => (
                <div key={i} style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                  <span style={{ fontSize: "13px", fontFamily: "Inter, system-ui, sans-serif", fontWeight: 600, color: "var(--cobalt)", minWidth: "60px" }}>{item.week}</span>
                  <p style={{ fontSize: "15px", color: "var(--ink)", lineHeight: 1.6 }}>{item.posts}</p>
                </div>
              ))}
            </div>
          </div>

          <h2 style={{ fontSize: "32px", marginBottom: "20px", marginTop: "64px" }}>Step 3: Write the specific hook for each slot</h2>

          <p style={{ fontSize: "17px", color: "var(--ink)", lineHeight: 1.8, marginBottom: "24px" }}>
            For each post slot, write a specific hook — the first line or concept of the post. This is what makes the calendar actually useful instead of just a list of content types.
          </p>

          <div style={{ background: "var(--ice)", border: "1px solid var(--sky)", borderRadius: "12px", padding: "28px 32px", margin: "24px 0 48px" }}>
            <p style={{ fontSize: "15px", fontFamily: "Inter, system-ui, sans-serif", fontWeight: 600, color: "var(--cobalt)", marginBottom: "16px" }}>Example calendar entries:</p>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {[
                { vague: "May 5 — Process content", specific: "May 5 — Process: time-lapse of pouring. Hook: &ldquo;Every batch takes 4 hours and I still love doing it.&rdquo;" },
                { vague: "May 7 — Product feature", specific: "May 7 — Teacher Gift listing. Hook: &ldquo;Last day to order for Teacher Appreciation Week delivery.&rdquo; CTA: Link in bio." },
                { vague: "May 9 — Education", specific: "May 9 — Why soy burns cleaner. Hook: &ldquo;The answer to &lsquo;why is your candle more expensive than TJ Maxx.&rsquo;&rdquo;" },
              ].map((item, i) => (
                <div key={i} style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
                  <div style={{ background: "rgba(192,57,43,0.08)", borderRadius: "8px", padding: "12px" }}>
                    <p style={{ fontSize: "12px", color: "#e57373", fontFamily: "Inter, system-ui, sans-serif", fontWeight: 600, marginBottom: "6px" }}>Vague</p>
                    <p style={{ fontSize: "14px", color: "var(--ink)", lineHeight: 1.5 }}>{item.vague}</p>
                  </div>
                  <div style={{ background: "rgba(44,82,130,0.08)", borderRadius: "8px", padding: "12px" }}>
                    <p style={{ fontSize: "12px", color: "var(--cobalt)", fontFamily: "Inter, system-ui, sans-serif", fontWeight: 600, marginBottom: "6px" }}>Specific</p>
                    <p style={{ fontSize: "14px", color: "var(--ink)", lineHeight: 1.5 }} dangerouslySetInnerHTML={{ __html: item.specific }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div style={{ background: "var(--midnight)", borderRadius: "16px", padding: "40px", margin: "64px 0" }}>
            <p style={{ fontSize: "11px", fontFamily: "Inter, system-ui, sans-serif", fontWeight: 600, color: "var(--horizon)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "16px" }}>Never start from blank again</p>
            <h3 style={{ fontSize: "26px", color: "var(--warm-white)", marginBottom: "16px" }}>Claro generates 10 specific content angles from your buyer profile.</h3>
            <p style={{ fontSize: "16px", color: "var(--sky)", lineHeight: 1.7, marginBottom: "24px" }}>
              Buyer-rooted content angles you can slot directly into your calendar — no blank staring required. See <a href="/pricing" style={{ color: "var(--gold)" }}>pricing</a>.
            </p>
            <a href="/#get-started" style={{ display: "inline-block", padding: "13px 24px", background: "var(--gold)", color: "var(--midnight)", borderRadius: "8px", fontSize: "15px", fontFamily: "Inter, system-ui, sans-serif", fontWeight: 700, textDecoration: "none" }}>
              Get your free buyer report →
            </a>
          </div>

          <h2 style={{ fontSize: "32px", marginBottom: "32px", marginTop: "64px" }}>Frequently asked questions</h2>
          <div style={{ display: "flex", flexDirection: "column" }}>
            {faqs.map((faq, i) => (
              <div key={i} style={{ borderTop: "1px solid var(--sky)", padding: "24px 0" }}>
                <h3 style={{ fontSize: "20px", marginBottom: "12px", color: "var(--midnight)" }}>{faq.q}</h3>
                <p style={{ fontSize: "16px", color: "var(--ink)", lineHeight: 1.7 }} dangerouslySetInnerHTML={{ __html: faq.a }} />
              </div>
            ))}
            <div style={{ borderTop: "1px solid var(--sky)" }} />
          </div>

          <h2 style={{ fontSize: "28px", marginBottom: "24px", marginTop: "64px" }}>Related reading</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {[
              { title: "Content Strategy for Solopreneurs", href: "/blog/content-strategy-solopreneurs", label: "Content" },
              { title: "How to Build a Content Strategy for Your Etsy Shop", href: "/blog/etsy-content-strategy", label: "Content" },
              { title: "How to Write Instagram Captions for Your Etsy Shop", href: "/blog/instagram-captions-etsy-shop", label: "Content" },
            ].map((link) => (
              <a key={link.href} href={link.href} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", background: "var(--ice)", border: "1px solid var(--sky)", borderRadius: "12px", padding: "20px 24px", textDecoration: "none" }}>
                <span style={{ fontSize: "17px", color: "var(--midnight)", fontFamily: "'DM Serif Display', Georgia, serif" }}>{link.title}</span>
                <span style={{ fontSize: "13px", color: "var(--cobalt)", fontFamily: "Inter, system-ui, sans-serif" }}>{link.label} →</span>
              </a>
            ))}
          </div>

        </article>

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Article", headline: "How to Write a 30-Day Content Calendar for Your Small Business", author: { "@type": "Organization", name: "Claro" }, publisher: { "@type": "Organization", name: "Claro", url: "https://meetclaro.ai" }, datePublished: "2026-04-15", description: "A 30-day content calendar is the difference between reactive posting and a system. Here's how to build one in an afternoon — with a template you can use immediately." }) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.q, acceptedAnswer: { "@type": "Answer", text: faq.a } })) }) }} />

      </main>
      <Footer />
    </>
  );
}
