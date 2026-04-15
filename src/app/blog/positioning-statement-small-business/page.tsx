import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How to Write a Positioning Statement for Your Small Business — Claro",
  description: "A positioning statement is the single sentence that explains who you serve, what you offer, and why buyers should choose you. Here's how to write one that's actually specific.",
  openGraph: {
    title: "How to Write a Positioning Statement for Your Small Business",
    description: "A positioning statement is the single sentence that explains who you serve, what you offer, and why buyers should choose you. Here's how to write one that's specific.",
    type: "article",
  },
};

const faqs = [
  {
    q: "What is a positioning statement?",
    a: "A positioning statement is a concise description of who your business serves, what you offer them, and what makes you different from alternatives — written for internal clarity, not for public marketing. It&rsquo;s the reference sentence you check all your copy, decisions, and priorities against. If a decision doesn&rsquo;t serve your positioning statement, it probably isn&rsquo;t right for your business.",
  },
  {
    q: "How is a positioning statement different from a tagline?",
    a: "A positioning statement is internal — it&rsquo;s for you and your team, not for buyers. It&rsquo;s specific, analytical, and complete. A tagline is external — it&rsquo;s a compressed, memorable version of your positioning for marketing use. A positioning statement might be three sentences. A tagline is five words. Both come from the same thinking.",
  },
  {
    q: "Can my positioning statement change over time?",
    a: "Yes, and it should. As your business evolves, as you understand your buyers more deeply, or as you enter new product categories, your positioning should be revisited. A positioning statement that accurately described your shop in year one may be too narrow or too broad by year three. Revisit it annually.",
  },
  {
    q: "What makes a positioning statement bad?",
    a: "Three failure modes: too generic (could apply to any competitor in your category), too aspirational (describes what you want to be, not what you actually are), and too product-focused (describes features instead of buyer value). The best test: show your positioning statement to a competitor. If they could honestly say it about their business too, it needs to be more specific.",
  },
  {
    q: "Do I need to share my positioning statement publicly?",
    a: "No — positioning statements are internal documents. Your shop description, tagline, and listing copy are the public-facing expressions of your positioning. But buyers will feel whether you have a clear positioning or not, even without reading the statement itself.",
  },
];

export default function PositioningStatementSmallBusinessPost() {
  return (
    <>
      <Nav />
      <main style={{ background: "var(--warm-white)" }}>

        <section style={{ paddingTop: "100px", paddingBottom: "0", padding: "100px 40px 0" }}>
          <div style={{ maxWidth: "740px", margin: "0 auto" }}>
            <div style={{ display: "flex", gap: "12px", alignItems: "center", marginBottom: "24px", flexWrap: "wrap" }}>
              <span style={{ fontSize: "12px", fontFamily: "Inter, system-ui, sans-serif", fontWeight: 600, color: "var(--cobalt)", background: "rgba(44,82,130,0.1)", padding: "4px 12px", borderRadius: "12px" }}>Brand Strategy</span>
              <span style={{ fontSize: "13px", color: "var(--horizon)", fontFamily: "Inter, system-ui, sans-serif" }}>10 min read · April 2026</span>
            </div>
            <h1 style={{ fontSize: "clamp(36px, 5vw, 56px)", lineHeight: 1.1, marginBottom: "24px" }}>
              How to Write a Positioning Statement for Your Small Business
            </h1>
            <p style={{ fontSize: "11px", fontFamily: "Inter, system-ui, sans-serif", color: "var(--horizon)", marginBottom: "8px", letterSpacing: "0.05em" }}>
              By <a href="/about" style={{ color: "var(--cobalt)" }}>the Claro team</a>
            </p>
            <p style={{ fontSize: "20px", color: "var(--ink)", lineHeight: 1.7, marginTop: "32px", marginBottom: "0" }}>
              Most small business owners can describe what they sell. Far fewer can articulate in one sentence why their business exists specifically — who it&rsquo;s for, what problem it solves, and why it&rsquo;s better than the alternative. That one sentence is your positioning statement. And it changes everything downstream.
            </p>
          </div>
        </section>

        <article style={{ padding: "48px 40px 96px", maxWidth: "740px", margin: "0 auto" }}>

          <p style={{ fontSize: "17px", color: "var(--ink)", lineHeight: 1.8, marginBottom: "24px" }}>
            Your positioning statement isn&rsquo;t a tagline. It&rsquo;s not for your shop. It&rsquo;s an internal document — a reference point that every piece of copy, every product decision, and every pricing choice should be checked against.
          </p>

          <p style={{ fontSize: "17px", color: "var(--ink)", lineHeight: 1.8, marginBottom: "48px" }}>
            When you have a clear positioning statement, decision-making gets faster. A new product idea either fits your positioning or it doesn&rsquo;t. A listing rewrite either reflects your positioning or it doesn&rsquo;t. The statement becomes a filter for everything.
          </p>

          <h2 style={{ fontSize: "32px", marginBottom: "20px", marginTop: "64px" }}>The positioning statement formula</h2>

          <p style={{ fontSize: "17px", color: "var(--ink)", lineHeight: 1.8, marginBottom: "24px" }}>
            The classic formula (adapted for small businesses):
          </p>

          <div style={{ background: "var(--cobalt)", borderRadius: "12px", padding: "28px 32px", margin: "24px 0 32px" }}>
            <p style={{ fontSize: "16px", color: "var(--warm-white)", lineHeight: 1.8 }}>
              For <em>[specific buyer]</em>, <em>[your business name]</em> is the <em>[category or product type]</em> that <em>[key benefit or differentiator]</em>, because <em>[reason this is credible / proof point]</em>. Unlike <em>[primary alternative]</em>, which <em>[what the alternative lacks or does differently]</em>.
            </p>
          </div>

          <p style={{ fontSize: "17px", color: "var(--ink)", lineHeight: 1.8, marginBottom: "48px" }}>
            This looks formal on paper. When you fill it in specifically, it becomes your clearest articulation of why your business exists.
          </p>

          <h2 style={{ fontSize: "32px", marginBottom: "20px", marginTop: "64px" }}>Filling in each element</h2>

          {[
            {
              element: "Specific buyer",
              detail: "This is the most important field. &ldquo;Small business owners&rdquo; is too broad. &ldquo;Etsy sellers who are frustrated that their listings aren&rsquo;t converting despite good products&rdquo; is specific. The more specific your buyer, the more resonant your positioning.",
            },
            {
              element: "Category or product type",
              detail: "What shelf do you sit on in your buyer&rsquo;s mind? Not just the product, but the category. &ldquo;Home fragrance&rdquo; is a category. &ldquo;Artisan soy candles&rdquo; is a category. The category frames the alternatives and sets the expectation.",
            },
            {
              element: "Key benefit or differentiator",
              detail: "What you do better, differently, or for whom that matters most. This should be one specific thing — not a list. The more you try to say here, the weaker each claim becomes.",
            },
            {
              element: "Reason to believe",
              detail: "Why should buyers trust that this differentiator is real? Your process, your materials, your certifications, your track record. Something verifiable.",
            },
            {
              element: "Primary alternative",
              detail: "What would your buyer buy instead? Not a specific competitor — a type of solution. &ldquo;Department store candles,&rdquo; &ldquo;mass-produced gift boxes,&rdquo; &ldquo;other Etsy jewelry shops&rdquo;.",
            },
          ].map((item, i) => (
            <div key={i} style={{ marginBottom: "28px", paddingLeft: "24px", borderLeft: "3px solid var(--cobalt)" }}>
              <h4 style={{ fontSize: "20px", marginBottom: "8px", color: "var(--midnight)" }}>{item.element}</h4>
              <p style={{ fontSize: "16px", color: "var(--ink)", lineHeight: 1.7 }} dangerouslySetInnerHTML={{ __html: item.detail }} />
            </div>
          ))}

          <h2 style={{ fontSize: "32px", marginBottom: "20px", marginTop: "64px" }}>Three examples across different shop types</h2>

          {[
            {
              shop: "Non-toxic soy candle shop",
              statement: "For health-conscious buyers who want their home to smell beautiful without compromising indoor air quality, Root & Ember makes non-toxic soy candles with phthalate-free fragrance — because every ingredient is listed and verifiable. Unlike department store candles, which use synthetic fragrance and don&rsquo;t disclose ingredients.",
            },
            {
              shop: "Personalized jewelry shop",
              statement: "For people buying a meaningful gift for a life milestone, Goldthread makes personalized fine jewelry that tells the story of the moment — because every piece is made to order with the specific detail that makes it irreplaceable. Unlike mass-market jewelry, which is interchangeable.",
            },
            {
              shop: "Hand-dyed textile shop",
              statement: "For interior designers and home decor buyers who want textiles that look like design decisions rather than catalog selections, Studio Indigo makes hand-dyed linen in colorways that don&rsquo;t exist commercially — because each batch is dyed by hand and limited to 20 pieces. Unlike mass-produced textile brands, which repeat colorways season after season.",
            },
          ].map((ex, i) => (
            <div key={i} style={{ background: "var(--ice)", border: "1px solid var(--sky)", borderRadius: "12px", padding: "24px 28px", marginBottom: "24px" }}>
              <p style={{ fontSize: "13px", fontFamily: "Inter, system-ui, sans-serif", fontWeight: 600, color: "var(--cobalt)", marginBottom: "12px" }}>{ex.shop}</p>
              <p style={{ fontSize: "16px", color: "var(--ink)", lineHeight: 1.7, fontStyle: "italic" }}>&ldquo;{ex.statement}&rdquo;</p>
            </div>
          ))}

          <h2 style={{ fontSize: "32px", marginBottom: "20px", marginTop: "64px" }}>The specificity test</h2>

          <p style={{ fontSize: "17px", color: "var(--ink)", lineHeight: 1.8, marginBottom: "24px" }}>
            Once you&rsquo;ve drafted your positioning statement, apply this test: could your closest competitor honestly say the same thing?
          </p>

          <p style={{ fontSize: "17px", color: "var(--ink)", lineHeight: 1.8, marginBottom: "48px" }}>
            If yes, your positioning isn&rsquo;t specific enough. Either your buyer definition is too broad, your differentiator is too generic, or your reason to believe is too vague. Tighten until only your shop can honestly claim it.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "20px", margin: "32px 0 48px" }}>
            <div style={{ background: "var(--ice)", borderRadius: "12px", padding: "28px", borderTop: "3px solid #c0392b" }}>
              <p style={{ fontSize: "11px", fontFamily: "Inter, system-ui, sans-serif", fontWeight: 700, color: "#e57373", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "16px" }}>Fails the test</p>
              <p style={{ fontSize: "16px", color: "var(--ink)", lineHeight: 1.7 }}>
                &ldquo;For people who love handmade gifts, we make beautiful jewelry with high quality materials.&rdquo; (Any Etsy jewelry shop could say this.)
              </p>
            </div>
            <div style={{ background: "var(--cobalt)", borderRadius: "12px", padding: "28px", borderTop: "3px solid var(--gold)" }}>
              <p style={{ fontSize: "11px", fontFamily: "Inter, system-ui, sans-serif", fontWeight: 700, color: "var(--gold)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "16px" }}>Passes the test</p>
              <p style={{ fontSize: "16px", color: "var(--warm-white)", lineHeight: 1.7 }}>
                &ldquo;For buyers of milestone gifts, we make 14k gold-fill personalized jewelry with a 5-day delivery guarantee — because we hold pre-fabricated blanks for rapid personalization.&rdquo; (Specific, credible, not everyone can claim it.)
              </p>
            </div>
          </div>

          <div style={{ background: "var(--midnight)", borderRadius: "16px", padding: "40px", margin: "64px 0" }}>
            <p style={{ fontSize: "11px", fontFamily: "Inter, system-ui, sans-serif", fontWeight: 600, color: "var(--horizon)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "16px" }}>Know your buyer first</p>
            <h3 style={{ fontSize: "26px", color: "var(--warm-white)", marginBottom: "16px" }}>The best positioning starts with buyer intelligence.</h3>
            <p style={{ fontSize: "16px", color: "var(--sky)", lineHeight: 1.7, marginBottom: "24px" }}>
              Writing a specific positioning statement requires knowing your buyer deeply. Claro builds that foundation in two minutes. See <a href="/pricing" style={{ color: "var(--gold)" }}>pricing</a>.
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
              { title: "How to Build a Brand Strategy for Your Small Business", href: "/blog/brand-strategy-small-business", label: "Brand Strategy" },
              { title: "How to Differentiate Your Etsy Shop from Competitors", href: "/blog/etsy-shop-differentiation", label: "Brand Strategy" },
              { title: "What Makes a Small Business Brand Feel Trustworthy?", href: "/blog/small-business-brand-trust", label: "Brand Strategy" },
            ].map((link) => (
              <a key={link.href} href={link.href} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", background: "var(--ice)", border: "1px solid var(--sky)", borderRadius: "12px", padding: "20px 24px", textDecoration: "none" }}>
                <span style={{ fontSize: "17px", color: "var(--midnight)", fontFamily: "'DM Serif Display', Georgia, serif" }}>{link.title}</span>
                <span style={{ fontSize: "13px", color: "var(--cobalt)", fontFamily: "Inter, system-ui, sans-serif" }}>{link.label} →</span>
              </a>
            ))}
          </div>

        </article>

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Article", headline: "How to Write a Positioning Statement for Your Small Business", author: { "@type": "Organization", name: "Claro" }, publisher: { "@type": "Organization", name: "Claro", url: "https://meetclaro.ai" }, datePublished: "2026-04-15", description: "A positioning statement is the single sentence that explains who you serve, what you offer, and why buyers should choose you. Here's how to write one that's actually specific." }) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.q, acceptedAnswer: { "@type": "Answer", text: faq.a } })) }) }} />

      </main>
      <Footer />
    </>
  );
}
