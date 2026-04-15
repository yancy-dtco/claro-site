import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How to Build a Brand Strategy for Your Small Business — Claro",
  description: "A brand strategy isn't just a logo and color palette. It's the decisions that determine how your business is perceived — and whether buyers choose you. Here's how to build one.",
  openGraph: {
    title: "How to Build a Brand Strategy for Your Small Business",
    description: "A brand strategy isn't just a logo and color palette. It's the decisions that determine how your business is perceived. Here's how to build one that works.",
    type: "article",
  },
};

const faqs = [
  {
    q: "What is a brand strategy for a small business?",
    a: "A brand strategy is the set of decisions that define how your business is perceived: who you serve, what you stand for, how you communicate, what makes you different from alternatives, and what experience you promise. For small businesses, brand strategy is not a luxury — it&rsquo;s the difference between a shop that competes on price (a race to the bottom) and one that commands a premium because buyers understand its specific value.",
  },
  {
    q: "Do I need a brand strategy if I&rsquo;m just a one-person Etsy shop?",
    a: "Especially if you&rsquo;re a one-person shop. Small shops without a clear brand strategy get commoditized — buyers compare them on price alone because they have no other differentiator. A clear brand strategy gives buyers a reason to choose you that has nothing to do with being cheapest.",
  },
  {
    q: "How long does it take to build a brand strategy?",
    a: "A working brand strategy document can be built in one focused day — typically 4-6 hours of structured thinking. This isn&rsquo;t a one-time document, though. It should be revisited twice a year as your business and buyer understanding evolve.",
  },
  {
    q: "What&rsquo;s the difference between brand strategy and marketing strategy?",
    a: "Brand strategy defines what you are and who you&rsquo;re for. Marketing strategy decides how you communicate that to buyers. Brand strategy is upstream of marketing — you can&rsquo;t build an effective marketing strategy without a clear brand strategy, because you don&rsquo;t yet know what to say or to whom.",
  },
  {
    q: "How do I know if my brand strategy is working?",
    a: "Three signals: (1) buyers describe your shop in the same terms you use to describe it — your positioning is landing; (2) your repeat purchase rate is increasing — buyers who understand your brand come back; (3) you can explain in one sentence why someone should buy from you instead of a cheaper alternative — and that sentence is believable.",
  },
];

export default function BrandStrategySmallBusinessPost() {
  return (
    <>
      <Nav />
      <main style={{ background: "var(--warm-white)" }}>

        <section style={{ paddingTop: "100px", paddingBottom: "0", padding: "100px 40px 0" }}>
          <div style={{ maxWidth: "740px", margin: "0 auto" }}>
            <div style={{ display: "flex", gap: "12px", alignItems: "center", marginBottom: "24px", flexWrap: "wrap" }}>
              <span style={{ fontSize: "12px", fontFamily: "Inter, system-ui, sans-serif", fontWeight: 600, color: "var(--cobalt)", background: "rgba(44,82,130,0.1)", padding: "4px 12px", borderRadius: "12px" }}>
                Brand Strategy
              </span>
              <span style={{ fontSize: "13px", color: "var(--horizon)", fontFamily: "Inter, system-ui, sans-serif" }}>
                13 min read · April 2026
              </span>
            </div>
            <h1 style={{ fontSize: "clamp(36px, 5vw, 56px)", lineHeight: 1.1, marginBottom: "24px" }}>
              How to Build a Brand Strategy for Your Small Business
            </h1>
            <p style={{ fontSize: "11px", fontFamily: "Inter, system-ui, sans-serif", color: "var(--horizon)", marginBottom: "8px", letterSpacing: "0.05em" }}>
              By <a href="/about" style={{ color: "var(--cobalt)" }}>the Claro team</a>
            </p>
            <p style={{ fontSize: "20px", color: "var(--ink)", lineHeight: 1.7, marginTop: "32px", marginBottom: "0" }}>
              Most small business owners think brand strategy is about visuals — logo, colors, fonts. It isn&rsquo;t. Brand strategy is about decisions. Specifically, the decisions that determine whether a buyer who encounters your business understands what it is, who it&rsquo;s for, and why it&rsquo;s worth choosing over the alternatives.
            </p>
          </div>
        </section>

        <article style={{ padding: "48px 40px 96px", maxWidth: "740px", margin: "0 auto" }}>

          <p style={{ fontSize: "17px", color: "var(--ink)", lineHeight: 1.8, marginBottom: "24px" }}>
            A logo is the output of brand strategy. Brand strategy is the thinking that makes the logo mean something. Without it, you&rsquo;re building visual assets that have no foundation — and your buyers can feel that.
          </p>

          <p style={{ fontSize: "17px", color: "var(--ink)", lineHeight: 1.8, marginBottom: "48px" }}>
            Here&rsquo;s how to build a brand strategy for a small business — without consultants, without weeks of workshopping, and without getting lost in frameworks designed for companies 100x your size.
          </p>

          <h2 style={{ fontSize: "32px", marginBottom: "20px", marginTop: "64px" }}>The four questions your brand strategy must answer</h2>

          <p style={{ fontSize: "17px", color: "var(--ink)", lineHeight: 1.8, marginBottom: "32px" }}>
            Strip away all the brand strategy jargon and you&rsquo;re left with four questions. If you can answer all four with specificity and confidence, you have a brand strategy.
          </p>

          {[
            {
              q: "Who is this for — specifically?",
              a: "Not a demographic. A specific type of person making a specific kind of purchase decision. &ldquo;Women 25-45&rdquo; is a demographic. &ldquo;Gift-givers who want to give something memorable, not generic — who are specifically trying to avoid department store purchases&rdquo; is a buyer. You can write for a buyer. You can&rsquo;t write for a demographic.",
            },
            {
              q: "What do we make, and why does it matter to them?",
              a: "The intersection of what you do and what it means to your buyer. Not features — outcomes. Not &ldquo;we make soy candles&rdquo; but &ldquo;we make candles that make your home smell like a choice, not a showroom.&rdquo; The product plus the meaning it creates.",
            },
            {
              q: "What makes us different?",
              a: "One specific thing. Not &ldquo;quality and passion&rdquo; — every small business claims that. Something you actually do differently: a material you won&rsquo;t compromise on, a process no one else uses, a standard you hold that alternatives don&rsquo;t. Specificity is credibility.",
            },
            {
              q: "What&rsquo;s our promise?",
              a: "What can a buyer count on every single time? Consistency at a specific level. &ldquo;Every piece ships within 48 hours, packaged well enough to arrive as a gift.&rdquo; That&rsquo;s a promise. It&rsquo;s also a commitment — and the commitment is what builds trust over time.",
            },
          ].map((item, i) => (
            <div key={i} style={{ marginBottom: "36px", paddingLeft: "24px", borderLeft: "3px solid var(--cobalt)" }}>
              <h3 style={{ fontSize: "22px", marginBottom: "12px", color: "var(--midnight)" }}>{item.q}</h3>
              <p style={{ fontSize: "17px", color: "var(--ink)", lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: item.a }} />
            </div>
          ))}

          <h2 style={{ fontSize: "32px", marginBottom: "20px", marginTop: "64px" }}>The positioning statement: one sentence that does everything</h2>

          <p style={{ fontSize: "17px", color: "var(--ink)", lineHeight: 1.8, marginBottom: "24px" }}>
            Once you&rsquo;ve answered the four questions, you can write your positioning statement — the single sentence that captures what your brand is and who it&rsquo;s for. This sentence is the test of whether your brand strategy is working.
          </p>

          <p style={{ fontSize: "17px", color: "var(--ink)", lineHeight: 1.8, marginBottom: "24px" }}>
            The format:
          </p>

          <div style={{ background: "var(--cobalt)", borderRadius: "12px", padding: "28px 32px", margin: "24px 0 32px" }}>
            <p style={{ fontSize: "17px", color: "var(--warm-white)", lineHeight: 1.7 }}>
              For [specific buyer], [your brand] is the [product category] that [key differentiator] — unlike [alternative], which [what alternatives don&rsquo;t do].
            </p>
          </div>

          <p style={{ fontSize: "17px", color: "var(--ink)", lineHeight: 1.8, marginBottom: "48px" }}>
            Example: &ldquo;For intentional gift-givers who want to avoid generic presents, Root & Ember makes non-toxic soy candles that smell real and arrive gift-ready — unlike department store candles, which use synthetic fragrance and arrive in plain boxes.&rdquo;
          </p>

          <h2 style={{ fontSize: "32px", marginBottom: "20px", marginTop: "64px" }}>Where brand strategy actually shows up</h2>

          <p style={{ fontSize: "17px", color: "var(--ink)", lineHeight: 1.8, marginBottom: "24px" }}>
            Brand strategy is useless if it lives in a document. Here&rsquo;s where it must show up in your business:
          </p>

          {[
            { place: "Listing titles and descriptions", how: "Your buyer language and differentiator appear in every listing. Buyers immediately understand who you&rsquo;re for." },
            { place: "Shop description", how: "Your buyer, your promise, and your differentiator are all stated in the first 100 words." },
            { place: "Photos", how: "Your visual direction reflects your brand position. A &ldquo;clean, non-toxic&rdquo; brand uses natural materials in photos, not styled maximalism." },
            { place: "Packaging", how: "Your packaging experience is an extension of your brand promise. If you promise gift-ready, every package looks gift-ready." },
            { place: "Responses to messages and reviews", how: "Your tone in customer communication is consistent with your brand voice. A warm, artisan brand and a terse, perfunctory message response don&rsquo;t coexist." },
          ].map((item, i) => (
            <div key={i} style={{ display: "flex", gap: "16px", alignItems: "flex-start", marginBottom: "16px" }}>
              <span style={{ background: "var(--cobalt)", color: "var(--warm-white)", fontSize: "12px", fontFamily: "Inter, system-ui, sans-serif", fontWeight: 600, padding: "4px 10px", borderRadius: "6px", whiteSpace: "nowrap", flexShrink: 0, marginTop: "2px" }}>{item.place}</span>
              <p style={{ fontSize: "16px", color: "var(--ink)", lineHeight: 1.6 }}>{item.how}</p>
            </div>
          ))}

          <h2 style={{ fontSize: "32px", marginBottom: "20px", marginTop: "64px" }}>Before/after: brand strategy in the listing</h2>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "20px", margin: "32px 0 48px" }}>
            <div style={{ background: "var(--ice)", borderRadius: "12px", padding: "28px", borderTop: "3px solid #c0392b" }}>
              <p style={{ fontSize: "11px", fontFamily: "Inter, system-ui, sans-serif", fontWeight: 700, color: "#e57373", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "16px" }}>No brand strategy</p>
              <p style={{ fontSize: "16px", color: "var(--ink)", lineHeight: 1.7 }}>
                &ldquo;Handmade soy candle. Great for gifts. Many scents available. Shop our full collection.&rdquo;
              </p>
            </div>
            <div style={{ background: "var(--cobalt)", borderRadius: "12px", padding: "28px", borderTop: "3px solid var(--gold)" }}>
              <p style={{ fontSize: "11px", fontFamily: "Inter, system-ui, sans-serif", fontWeight: 700, color: "var(--gold)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "16px" }}>With brand strategy</p>
              <p style={{ fontSize: "16px", color: "var(--warm-white)", lineHeight: 1.7 }}>
                &ldquo;Non-toxic soy candle for people who care what&rsquo;s in the air they breathe. Phthalate-free, clean-burning. The candle gift that doesn&rsquo;t feel like a default.&rdquo;
              </p>
            </div>
          </div>

          <div style={{ background: "var(--midnight)", borderRadius: "16px", padding: "40px", margin: "64px 0" }}>
            <p style={{ fontSize: "11px", fontFamily: "Inter, system-ui, sans-serif", fontWeight: 600, color: "var(--horizon)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "16px" }}>Build on buyer intelligence</p>
            <h3 style={{ fontSize: "26px", color: "var(--warm-white)", marginBottom: "16px" }}>Brand strategy starts with knowing your buyer.</h3>
            <p style={{ fontSize: "16px", color: "var(--sky)", lineHeight: 1.7, marginBottom: "24px" }}>
              Before you can answer the four brand strategy questions, you need to know your buyer deeply. Claro gives you that foundation in two minutes. See <a href="/pricing" style={{ color: "var(--gold)" }}>pricing</a>.
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
              { title: "What Is Brand Voice? (And How to Build One That Sounds Like You)", href: "/blog/brand-voice-small-business", label: "Brand Strategy" },
              { title: "How to Write a Positioning Statement for Your Small Business", href: "/blog/positioning-statement-small-business", label: "Brand Strategy" },
              { title: "How to Differentiate Your Etsy Shop from Competitors", href: "/blog/etsy-shop-differentiation", label: "Brand Strategy" },
            ].map((link) => (
              <a key={link.href} href={link.href} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", background: "var(--ice)", border: "1px solid var(--sky)", borderRadius: "12px", padding: "20px 24px", textDecoration: "none" }}>
                <span style={{ fontSize: "17px", color: "var(--midnight)", fontFamily: "'DM Serif Display', Georgia, serif" }}>{link.title}</span>
                <span style={{ fontSize: "13px", color: "var(--cobalt)", fontFamily: "Inter, system-ui, sans-serif" }}>{link.label} →</span>
              </a>
            ))}
          </div>

        </article>

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Article", headline: "How to Build a Brand Strategy for Your Small Business", author: { "@type": "Organization", name: "Claro" }, publisher: { "@type": "Organization", name: "Claro", url: "https://meetclaro.ai" }, datePublished: "2026-04-15", description: "A brand strategy isn't just a logo and color palette. It's the decisions that determine how your business is perceived — and whether buyers choose you." }) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.q, acceptedAnswer: { "@type": "Answer", text: faq.a } })) }) }} />

      </main>
      <Footer />
    </>
  );
}
