import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How to Write Etsy Listings That Convert (Built From Real Buyer Language) — Claro",
  description: "Your listing isn't failing because your product is wrong. It's failing because it's speaking to you, not your buyer. Here's how to fix that.",
  openGraph: {
    title: "How to Write Etsy Listings That Convert (Built From Real Buyer Language)",
    description: "Your listing isn't failing because your product is wrong. It's failing because it's speaking to you, not your buyer. Here's how to fix that.",
    type: "article",
  },
};

const faqs = [
  {
    q: "What makes an Etsy listing convert?",
    a: "A converting Etsy listing does four things: it uses the buyer&rsquo;s own search language in the title, it addresses the buyer&rsquo;s primary fear in the first two sentences of the description, it provides enough visual evidence (photos) to make the purchase feel safe, and it answers every common pre-purchase question without requiring the buyer to message you first.",
  },
  {
    q: "How long should an Etsy listing description be?",
    a: "Long enough to answer every question, short enough to stay readable. In practice, most converting Etsy descriptions are 150-300 words. The first paragraph is the most important — most buyers don&rsquo;t read beyond it. Lead with the benefit or occasion, not the material or process.",
  },
  {
    q: "What should go in the first sentence of an Etsy listing?",
    a: "Your buyer&rsquo;s reason for buying, not your product&rsquo;s features. If your buyers are mostly gift-givers, the first sentence should reflect a gift scenario. If they&rsquo;re buying for themselves, lead with the emotional outcome or experience. &ldquo;The candle people always ask about when they walk into your home&rdquo; is a better first sentence than &ldquo;Hand-poured soy candle made with premium fragrance oils.&rdquo;",
  },
  {
    q: "Should Etsy listing descriptions be written for SEO or for buyers?",
    a: "Both, but prioritize buyers. Etsy&rsquo;s algorithm rewards engagement signals — clicks and conversions — above pure keyword density. A listing that ranks for a search term but doesn&rsquo;t convert actually signals to Etsy that it&rsquo;s a poor match. Write for your buyer first, include your target keywords naturally, and you&rsquo;ll outperform keyword-stuffed listings over time.",
  },
  {
    q: "How do I know if my Etsy listing copy is working?",
    a: "Track your conversion rate in Etsy Shop Stats (visits to orders). A healthy conversion rate is 1-3%+ depending on category. If you have traffic but low conversion, the listing is the problem. If you have low traffic, the title and SEO are the problem. The two issues have different fixes.",
  },
];

export default function EtsyListingCopyBuyerLanguagePost() {
  return (
    <>
      <Nav />
      <main style={{ background: "var(--warm-white)" }}>

        <section style={{ paddingTop: "100px", paddingBottom: "0", padding: "100px 40px 0" }}>
          <div style={{ maxWidth: "740px", margin: "0 auto" }}>
            <div style={{ display: "flex", gap: "12px", alignItems: "center", marginBottom: "24px", flexWrap: "wrap" }}>
              <span style={{ fontSize: "12px", fontFamily: "Inter, system-ui, sans-serif", fontWeight: 600, color: "var(--cobalt)", background: "rgba(44,82,130,0.1)", padding: "4px 12px", borderRadius: "12px" }}>
                Etsy Growth
              </span>
              <span style={{ fontSize: "13px", color: "var(--horizon)", fontFamily: "Inter, system-ui, sans-serif" }}>
                10 min read · April 2026
              </span>
            </div>

            <h1 style={{ fontSize: "clamp(36px, 5vw, 56px)", lineHeight: 1.1, marginBottom: "24px" }}>
              How to Write Etsy Listings That Convert (Built From Real Buyer Language)
            </h1>
            <p style={{ fontSize: "11px", fontFamily: "Inter, system-ui, sans-serif", color: "var(--horizon)", marginBottom: "8px", letterSpacing: "0.05em" }}>
              By <a href="/about" style={{ color: "var(--cobalt)" }}>the Claro team</a>
            </p>

            <p style={{ fontSize: "20px", color: "var(--ink)", lineHeight: 1.7, marginTop: "32px", marginBottom: "0" }}>
              Most Etsy listing copy is written from the seller&rsquo;s perspective: what you made, how you made it, what it&rsquo;s made of. Your buyer doesn&rsquo;t search for any of that. She searches for what she wants to feel, what problem she&rsquo;s solving, and what occasion she&rsquo;s shopping for.
            </p>
          </div>
        </section>

        <article style={{ padding: "48px 40px 96px", maxWidth: "740px", margin: "0 auto" }}>

          <p style={{ fontSize: "17px", color: "var(--ink)", lineHeight: 1.8, marginBottom: "24px" }}>
            The gap between seller language and buyer language is where conversion dies. Your listing might be entirely accurate — and still completely wrong. Accurate to what you made. Wrong for who you&rsquo;re selling to.
          </p>

          <p style={{ fontSize: "17px", color: "var(--ink)", lineHeight: 1.8, marginBottom: "48px" }}>
            This guide is about closing that gap. Every technique here is derived from analyzing what actual Etsy buyers say in reviews, search queries, and community forums — not from copywriting theory.
          </p>

          <h2 style={{ fontSize: "32px", marginBottom: "20px", marginTop: "64px" }}>The fundamental shift: stop describing your product, start addressing your buyer</h2>

          <p style={{ fontSize: "17px", color: "var(--ink)", lineHeight: 1.8, marginBottom: "24px" }}>
            The single most transformative thing you can do for your listing conversion is change what you&rsquo;re doing in the first two sentences of your description.
          </p>

          <p style={{ fontSize: "17px", color: "var(--ink)", lineHeight: 1.8, marginBottom: "24px" }}>
            Most sellers use those sentences to describe the product. The buyer already knows vaguely what the product is — they found it. What they need to know is: <em>is this for someone like me, for an occasion like mine?</em>
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "20px", margin: "32px 0 48px" }}>
            <div style={{ background: "var(--ice)", borderRadius: "12px", padding: "28px", borderTop: "3px solid #c0392b" }}>
              <p style={{ fontSize: "11px", fontFamily: "Inter, system-ui, sans-serif", fontWeight: 700, color: "#e57373", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "16px" }}>
                Product-first opening
              </p>
              <p style={{ fontSize: "16px", color: "var(--ink)", lineHeight: 1.7, fontStyle: "italic" }}>
                &ldquo;Hand-poured soy wax candle made with premium fragrance oils in our small batch studio. 8 oz, 50-hour burn time.&rdquo;
              </p>
            </div>
            <div style={{ background: "var(--cobalt)", borderRadius: "12px", padding: "28px", borderTop: "3px solid var(--gold)" }}>
              <p style={{ fontSize: "11px", fontFamily: "Inter, system-ui, sans-serif", fontWeight: 700, color: "var(--gold)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "16px" }}>
                Buyer-first opening
              </p>
              <p style={{ fontSize: "16px", color: "var(--warm-white)", lineHeight: 1.7 }}>
                &ldquo;The candle for people who hate fake-smelling candles. Non-toxic soy wax, real fragrance — not perfumey. Ships in a gift-ready box. 50-hour burn time.&rdquo;
              </p>
            </div>
          </div>

          <p style={{ fontSize: "17px", color: "var(--ink)", lineHeight: 1.8, marginBottom: "48px" }}>
            The second version addresses a specific buyer (someone who&rsquo;s been burned by cheap candles), uses her language (&ldquo;fake-smelling,&rdquo; &ldquo;perfumey&rdquo;), answers a key concern (non-toxic), and addresses the gift-buyer segment in one sentence. Same product. Completely different approach.
          </p>

          <h2 style={{ fontSize: "32px", marginBottom: "20px", marginTop: "64px" }}>The listing title: four elements that convert</h2>

          <p style={{ fontSize: "17px", color: "var(--ink)", lineHeight: 1.8, marginBottom: "24px" }}>
            Your title does two jobs simultaneously: it gets you found in search (SEO) and it earns the click (conversion). Most titles fail at the second job because they read like a keyword list rather than a coherent description.
          </p>

          <div style={{ background: "var(--ice)", border: "1px solid var(--sky)", borderRadius: "12px", padding: "28px 32px", margin: "32px 0" }}>
            <p style={{ fontSize: "15px", fontFamily: "Inter, system-ui, sans-serif", fontWeight: 600, color: "var(--cobalt)", marginBottom: "16px" }}>A converting Etsy listing title includes:</p>
            <ol style={{ margin: 0, padding: "0 0 0 24px", display: "flex", flexDirection: "column", gap: "10px" }}>
              {[
                "Primary search keyword (what buyers search for — their language, not yours)",
                "A specific modifier (material, occasion, style, or use case)",
                "A differentiator (what makes this one different)",
                "Optional: occasion or recipient framing (&ldquo;gift for mom,&rdquo; &ldquo;anniversary gift&rdquo;)",
              ].map((item, i) => (
                <li key={i} style={{ fontSize: "16px", color: "var(--ink)", lineHeight: 1.6 }}>{item}</li>
              ))}
            </ol>
          </div>

          <p style={{ fontSize: "17px", color: "var(--ink)", lineHeight: 1.8, marginBottom: "24px" }}>
            Example: <strong>&ldquo;Non-toxic soy candle — hand-poured in small batches | clean scent, gift-ready | 50-hour burn&rdquo;</strong>
          </p>

          <p style={{ fontSize: "17px", color: "var(--ink)", lineHeight: 1.8, marginBottom: "48px" }}>
            That title covers the primary keyword (&ldquo;non-toxic soy candle&rdquo;), a differentiator (&ldquo;hand-poured in small batches&rdquo;), a quality signal (&ldquo;clean scent&rdquo;), a gift trigger (&ldquo;gift-ready&rdquo;), and a specific product fact (&ldquo;50-hour burn&rdquo;). It reads like a human wrote it, not a keyword tool.
          </p>

          <h2 style={{ fontSize: "32px", marginBottom: "20px", marginTop: "64px" }}>The description: structure that converts</h2>

          <p style={{ fontSize: "17px", color: "var(--ink)", lineHeight: 1.8, marginBottom: "32px" }}>
            Here&rsquo;s the structure that consistently converts for Etsy listings:
          </p>

          {[
            {
              section: "Paragraph 1: Address the buyer&rsquo;s reason for being here",
              detail: "Who is this for? What occasion, emotion, or need? One to three sentences. This should feel like you&rsquo;re acknowledging the buyer&rsquo;s situation before you describe the product.",
            },
            {
              section: "Paragraph 2: The product details (specific, not vague)",
              detail: "Exact dimensions, materials, process specifics. &ldquo;Premium quality&rdquo; means nothing. &ldquo;Full-grain vegetable-tanned leather from a tannery in Italy&rdquo; means something.",
            },
            {
              section: "Paragraph 3: Address the top conversion barrier",
              detail: "What&rsquo;s the thing buyers most often hesitate about? Answer it directly. If shipping time is the barrier, address it here. If sizing is the question, address it.",
            },
            {
              section: "Paragraph 4: Logistics",
              detail: "Shipping timeline, processing time, gift wrapping options. Specific dates when possible. &ldquo;Ships within 3 business days, typically arrives in 5-8 days for US orders&rdquo; is better than &ldquo;ships in 1-2 weeks.&rdquo;",
            },
          ].map((item, i) => (
            <div key={i} style={{ marginBottom: "28px", paddingLeft: "24px", borderLeft: "3px solid var(--cobalt)" }}>
              <h4 style={{ fontSize: "20px", marginBottom: "8px", color: "var(--midnight)" }} dangerouslySetInnerHTML={{ __html: item.section }} />
              <p style={{ fontSize: "16px", color: "var(--ink)", lineHeight: 1.7 }}>{item.detail}</p>
            </div>
          ))}

          <h2 style={{ fontSize: "32px", marginBottom: "20px", marginTop: "64px" }}>Where to get buyer language (if you don&rsquo;t have it yet)</h2>

          <p style={{ fontSize: "17px", color: "var(--ink)", lineHeight: 1.8, marginBottom: "24px" }}>
            The language for your listings should come from your buyers — not your intuition. Specific sources:
          </p>

          <ul style={{ padding: "0 0 0 24px", margin: "0 0 48px", display: "flex", flexDirection: "column", gap: "12px" }}>
            {[
              "Your reviews: copy and highlight every phrase buyers use to describe what they liked",
              "Competitor reviews: especially 3-4 star reviews that describe what was missing",
              "Reddit: search your product category and read how buyers naturally describe what they want",
              "Etsy autocomplete: type your product and document every suggestion",
              "Your own pre-purchase messages: what questions do buyers ask before buying?",
            ].map((item, i) => (
              <li key={i} style={{ fontSize: "16px", color: "var(--ink)", lineHeight: 1.7 }}>{item}</li>
            ))}
          </ul>

          <div style={{ background: "var(--midnight)", borderRadius: "16px", padding: "40px", margin: "64px 0" }}>
            <p style={{ fontSize: "11px", fontFamily: "Inter, system-ui, sans-serif", fontWeight: 600, color: "var(--horizon)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "16px" }}>
              Write listings that convert
            </p>
            <h3 style={{ fontSize: "26px", color: "var(--warm-white)", marginBottom: "16px" }}>
              Get the buyer language your listings are missing.
            </h3>
            <p style={{ fontSize: "16px", color: "var(--sky)", lineHeight: 1.7, marginBottom: "24px" }}>
              Claro analyzes reviews, Reddit, and competitor signals to give you the exact vocabulary your buyers use — structured by purchase trigger, objection, and occasion. Use it directly in your listings. See <a href="/pricing" style={{ color: "var(--gold)" }}>pricing</a>.
            </p>
            <a
              href="/#get-started"
              style={{
                display: "inline-block",
                padding: "13px 24px",
                background: "var(--gold)",
                color: "var(--midnight)",
                borderRadius: "8px",
                fontSize: "15px",
                fontFamily: "Inter, system-ui, sans-serif",
                fontWeight: 700,
                textDecoration: "none",
              }}
            >
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
              { title: "The Best Etsy Listing Title Formula (With Examples)", href: "/blog/etsy-listing-title-formula", label: "Etsy Growth" },
              { title: "How to Use Buyer Reviews to Write Better Etsy Listings", href: "/blog/etsy-reviews-listing-copy", label: "Etsy Growth" },
              { title: "Why Your Etsy Listings Aren&rsquo;t Converting (And How to Fix It)", href: "/blog/etsy-listings-not-converting", label: "Etsy Growth" },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  background: "var(--ice)",
                  border: "1px solid var(--sky)",
                  borderRadius: "12px",
                  padding: "20px 24px",
                  textDecoration: "none",
                }}
              >
                <span style={{ fontSize: "17px", color: "var(--midnight)", fontFamily: "'DM Serif Display', Georgia, serif" }} dangerouslySetInnerHTML={{ __html: link.title }} />
                <span style={{ fontSize: "13px", color: "var(--cobalt)", fontFamily: "Inter, system-ui, sans-serif" }}>
                  {link.label} →
                </span>
              </a>
            ))}
          </div>

        </article>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              headline: "How to Write Etsy Listings That Convert (Built From Real Buyer Language)",
              author: { "@type": "Organization", name: "Claro" },
              publisher: { "@type": "Organization", name: "Claro", url: "https://meetclaro.ai" },
              datePublished: "2026-04-15",
              description: "Your listing isn't failing because your product is wrong. It's failing because it's speaking to you, not your buyer. Here's how to fix that.",
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: faqs.map((faq) => ({
                "@type": "Question",
                name: faq.q,
                acceptedAnswer: { "@type": "Answer", text: faq.a },
              })),
            }),
          }}
        />

      </main>
      <Footer />
    </>
  );
}
