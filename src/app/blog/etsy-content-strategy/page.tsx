import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How to Build a Content Strategy for Your Etsy Shop — Claro",
  description: "Most Etsy sellers post content reactively and inconsistently. A content strategy changes that — and it's far simpler to build than you think.",
  openGraph: {
    title: "How to Build a Content Strategy for Your Etsy Shop",
    description: "Most Etsy sellers post content reactively and inconsistently. A content strategy changes that — here's how to build one that drives real results.",
    type: "article",
  },
};

const faqs = [
  {
    q: "What is a content strategy for an Etsy shop?",
    a: "A content strategy for an Etsy shop is a plan for what content you create, on which platforms, and with what goal — designed to attract buyers, build trust, and drive traffic to your listings. It&rsquo;s the difference between posting whenever inspiration strikes and having a repeatable system that builds audience and converts buyers consistently.",
  },
  {
    q: "Which platforms should Etsy sellers focus on for content?",
    a: "For most Etsy sellers, Instagram and Pinterest are the highest-ROI platforms because they&rsquo;re both visual and shoppable. TikTok is powerful for discoverability. Pinterest drives steady, long-tail traffic to listings in home decor, fashion, and stationery categories. Start with one platform and do it well before expanding to a second.",
  },
  {
    q: "How often should I post content for my Etsy shop?",
    a: "Consistency matters more than frequency. Three posts per week that are consistent, on-brand, and buyer-focused outperform daily posting that&rsquo;s haphazard. A realistic content cadence you can sustain for a year beats an ambitious one you abandon in month two.",
  },
  {
    q: "What types of content perform best for Etsy shops?",
    a: "Process content (&ldquo;how I make this&rdquo;) and behind-the-scenes content consistently outperform product-only shots because they activate the authenticity signal that Etsy buyers specifically value. Seasonal and occasion-based content drives spikes around gift-giving windows. Educational content (&ldquo;how to care for your [product]&rdquo;) builds trust and positions you as an expert.",
  },
  {
    q: "How do I repurpose content across platforms?",
    a: "Create once, distribute adapted. A process video can be: a TikTok (native vertical), a Reel (same video), a Pinterest Idea Pin (add static text overlay), and a caption with still frames on Instagram. The core content is the same; the format and framing adapt to the platform. This multiplies your output without multiplying your time.",
  },
];

export default function EtsyContentStrategyPost() {
  return (
    <>
      <Nav />
      <main style={{ background: "var(--warm-white)" }}>

        <section style={{ paddingTop: "100px", paddingBottom: "0", padding: "100px 40px 0" }}>
          <div style={{ maxWidth: "740px", margin: "0 auto" }}>
            <div style={{ display: "flex", gap: "12px", alignItems: "center", marginBottom: "24px", flexWrap: "wrap" }}>
              <span style={{ fontSize: "12px", fontFamily: "Inter, system-ui, sans-serif", fontWeight: 600, color: "var(--cobalt)", background: "rgba(44,82,130,0.1)", padding: "4px 12px", borderRadius: "12px" }}>Content</span>
              <span style={{ fontSize: "13px", color: "var(--horizon)", fontFamily: "Inter, system-ui, sans-serif" }}>11 min read · April 2026</span>
            </div>
            <h1 style={{ fontSize: "clamp(36px, 5vw, 56px)", lineHeight: 1.1, marginBottom: "24px" }}>
              How to Build a Content Strategy for Your Etsy Shop
            </h1>
            <p style={{ fontSize: "11px", fontFamily: "Inter, system-ui, sans-serif", color: "var(--horizon)", marginBottom: "8px", letterSpacing: "0.05em" }}>
              By <a href="/about" style={{ color: "var(--cobalt)" }}>the Claro team</a>
            </p>
            <p style={{ fontSize: "20px", color: "var(--ink)", lineHeight: 1.7, marginTop: "32px", marginBottom: "0" }}>
              &ldquo;I know I should be posting more consistently.&rdquo; This is the most common thing Etsy sellers say about their content. The problem isn&rsquo;t motivation. It&rsquo;s the absence of a system. A content strategy is the system — and it&rsquo;s simpler to build than most people think.
            </p>
          </div>
        </section>

        <article style={{ padding: "48px 40px 96px", maxWidth: "740px", margin: "0 auto" }}>

          <p style={{ fontSize: "17px", color: "var(--ink)", lineHeight: 1.8, marginBottom: "48px" }}>
            A content strategy for an Etsy shop doesn&rsquo;t need to be complicated. It needs to answer three questions: What do I create? Where do I post it? What am I trying to accomplish? When those three are defined, every individual content decision becomes faster and the whole thing becomes sustainable.
          </p>

          <h2 style={{ fontSize: "32px", marginBottom: "20px", marginTop: "64px" }}>Step 1: Define your content goal</h2>

          <p style={{ fontSize: "17px", color: "var(--ink)", lineHeight: 1.8, marginBottom: "24px" }}>
            Most Etsy sellers treat content as a performance for social media. That&rsquo;s the wrong frame. Content is a tool with a specific job. Define yours:
          </p>

          {[
            { goal: "Drive listing traffic", how: "Content that links to or directly features specific listings. Product-forward content with CTAs. Pinterest boards organized by product category." },
            { goal: "Build trust and credibility", how: "Process content, behind-the-scenes, maker story. Content that makes the human behind the shop real and trustworthy." },
            { goal: "Grow an audience off Etsy", how: "Educational content, tips, tutorials related to your product category. Content that gives value to your buyer type beyond just showing your product." },
            { goal: "Seasonal conversion spikes", how: "Gift guide content, limited-availability announcements, deadline-specific shipping content. Timed to buying windows." },
          ].map((item, i) => (
            <div key={i} style={{ display: "flex", gap: "16px", alignItems: "flex-start", marginBottom: "16px" }}>
              <span style={{ background: "var(--cobalt)", color: "var(--warm-white)", fontSize: "12px", fontFamily: "Inter, system-ui, sans-serif", fontWeight: 600, padding: "4px 10px", borderRadius: "6px", whiteSpace: "nowrap", flexShrink: 0, marginTop: "2px" }}>{item.goal}</span>
              <p style={{ fontSize: "15px", color: "var(--ink)", lineHeight: 1.6 }}>{item.how}</p>
            </div>
          ))}

          <h2 style={{ fontSize: "32px", marginBottom: "20px", marginTop: "64px" }}>Step 2: Choose your primary platform</h2>

          <p style={{ fontSize: "17px", color: "var(--ink)", lineHeight: 1.8, marginBottom: "32px" }}>
            Platform choice should follow buyer behavior and your category. Where do your buyers spend time?
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "20px", marginBottom: "48px" }}>
            {[
              { platform: "Pinterest", best: "Home decor, stationery, fashion, weddings, craft supplies. Long-tail SEO traffic that compounds over time. Pins have multi-year shelf life.", commitment: "3-5 pins/week, consistently organized boards" },
              { platform: "Instagram", best: "Jewelry, fashion, art, candles, bath/beauty. Visual brand-building. Community and repeat buyer relationship.", commitment: "3-4 posts/week + regular Stories" },
              { platform: "TikTok", best: "Any category where the making process is visually compelling. Highest discoverability of any platform but lowest conversion without a strong follow-through path.", commitment: "3-5 videos/week — quantity matters more here" },
            ].map((item, i) => (
              <div key={i} style={{ background: "var(--ice)", border: "1px solid var(--sky)", borderRadius: "12px", padding: "24px" }}>
                <p style={{ fontSize: "16px", fontFamily: "Inter, system-ui, sans-serif", fontWeight: 700, color: "var(--midnight)", marginBottom: "8px" }}>{item.platform}</p>
                <p style={{ fontSize: "15px", color: "var(--ink)", lineHeight: 1.6, marginBottom: "8px" }}><strong>Best for:</strong> {item.best}</p>
                <p style={{ fontSize: "14px", color: "var(--horizon)", fontFamily: "Inter, system-ui, sans-serif" }}><strong>Commitment:</strong> {item.commitment}</p>
              </div>
            ))}
          </div>

          <h2 style={{ fontSize: "32px", marginBottom: "20px", marginTop: "64px" }}>Step 3: Define your content pillars</h2>

          <p style={{ fontSize: "17px", color: "var(--ink)", lineHeight: 1.8, marginBottom: "24px" }}>
            Content pillars are the 3-5 recurring content categories you rotate through. They prevent content fatigue (both yours and your audience&rsquo;s) and ensure your content serves multiple goals.
          </p>

          <p style={{ fontSize: "17px", color: "var(--ink)", lineHeight: 1.8, marginBottom: "24px" }}>
            A candle shop&rsquo;s content pillars might look like:
          </p>

          <ol style={{ padding: "0 0 0 24px", margin: "0 0 48px", display: "flex", flexDirection: "column", gap: "12px" }}>
            {[
              "Process content: how I pour, why I choose these ingredients, the studio",
              "Product features: specific listing highlights with occasion framing",
              "Education: how to care for your candle, why soy vs paraffin matters",
              "Behind the scenes: new scent development, seasonal prep, packaging",
              "Social proof: sharing reviews, buyer photos, unboxing content",
            ].map((item, i) => (
              <li key={i} style={{ fontSize: "16px", color: "var(--ink)", lineHeight: 1.7 }}>{item}</li>
            ))}
          </ol>

          <h2 style={{ fontSize: "32px", marginBottom: "20px", marginTop: "64px" }}>Step 4: Create your content calendar</h2>

          <p style={{ fontSize: "17px", color: "var(--ink)", lineHeight: 1.8, marginBottom: "24px" }}>
            Map your pillars to a weekly cadence and anchor them to seasonal buying windows. A simple framework:
          </p>

          <div style={{ background: "var(--ice)", border: "1px solid var(--sky)", borderRadius: "12px", padding: "28px 32px", margin: "24px 0 48px" }}>
            <p style={{ fontSize: "15px", fontFamily: "Inter, system-ui, sans-serif", fontWeight: 600, color: "var(--cobalt)", marginBottom: "16px" }}>Weekly rhythm (3 posts/week):</p>
            <ul style={{ margin: 0, padding: "0 0 0 20px", display: "flex", flexDirection: "column", gap: "10px" }}>
              {[
                "Monday: Process or education content (builds trust, not selling)",
                "Wednesday: Product feature with listing link (selling, but with context)",
                "Friday: Behind-the-scenes or social proof (brand warmth, community)",
              ].map((item, i) => (
                <li key={i} style={{ fontSize: "16px", color: "var(--ink)", lineHeight: 1.6 }}>{item}</li>
              ))}
            </ul>
          </div>

          <div style={{ background: "var(--midnight)", borderRadius: "16px", padding: "40px", margin: "64px 0" }}>
            <p style={{ fontSize: "11px", fontFamily: "Inter, system-ui, sans-serif", fontWeight: 600, color: "var(--horizon)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "16px" }}>Content rooted in buyer intelligence</p>
            <h3 style={{ fontSize: "26px", color: "var(--warm-white)", marginBottom: "16px" }}>The best content angles come from buyer research.</h3>
            <p style={{ fontSize: "16px", color: "var(--sky)", lineHeight: 1.7, marginBottom: "24px" }}>
              Claro generates 10 specific content angles from your buyer profile — what to post, what angle to take, and what language to use. See <a href="/pricing" style={{ color: "var(--gold)" }}>pricing</a>.
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
              { title: "How to Write Instagram Captions for Your Etsy Shop", href: "/blog/instagram-captions-etsy-shop", label: "Content" },
              { title: "How to Write a 30-Day Content Calendar for Your Small Business", href: "/blog/30-day-content-calendar-small-business", label: "Content" },
              { title: "Content Strategy for Solopreneurs", href: "/blog/content-strategy-solopreneurs", label: "Content" },
            ].map((link) => (
              <a key={link.href} href={link.href} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", background: "var(--ice)", border: "1px solid var(--sky)", borderRadius: "12px", padding: "20px 24px", textDecoration: "none" }}>
                <span style={{ fontSize: "17px", color: "var(--midnight)", fontFamily: "'DM Serif Display', Georgia, serif" }}>{link.title}</span>
                <span style={{ fontSize: "13px", color: "var(--cobalt)", fontFamily: "Inter, system-ui, sans-serif" }}>{link.label} →</span>
              </a>
            ))}
          </div>

        </article>

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Article", headline: "How to Build a Content Strategy for Your Etsy Shop", author: { "@type": "Organization", name: "Claro" }, publisher: { "@type": "Organization", name: "Claro", url: "https://meetclaro.ai" }, datePublished: "2026-04-15", description: "Most Etsy sellers post content reactively and inconsistently. A content strategy changes that — and it's far simpler to build than you think." }) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.q, acceptedAnswer: { "@type": "Answer", text: faq.a } })) }) }} />

      </main>
      <Footer />
    </>
  );
}
