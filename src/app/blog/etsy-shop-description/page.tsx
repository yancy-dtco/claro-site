import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How to Write an Etsy Shop Description That Actually Sells — Claro",
  description: "Most Etsy shop descriptions are ignored. Here's how to write one that builds trust, signals quality, and converts first-time visitors into buyers.",
  openGraph: {
    title: "How to Write an Etsy Shop Description That Actually Sells",
    description: "Most Etsy shop descriptions are ignored. Here's how to write one that builds trust, signals quality, and converts first-time visitors into buyers.",
    type: "article",
  },
};

const faqs = [
  {
    q: "How long should an Etsy shop description be?",
    a: "200-400 words is the sweet spot. Long enough to convey your shop&rsquo;s story, quality signals, and who you make for. Short enough that a motivated buyer reads it in full. The most important content goes in the first 100 words — that&rsquo;s what&rsquo;s visible before the buyer clicks &lsquo;read more.&rsquo;",
  },
  {
    q: "What should I include in my Etsy shop description?",
    a: "The five elements that belong in every shop description: (1) who you make for (your buyer, stated clearly), (2) what makes your work distinct from alternatives, (3) your materials and process in specific language, (4) your communication and shipping standards, and (5) a brief human story — why you make what you make.",
  },
  {
    q: "Does my Etsy shop description help with SEO?",
    a: "Yes. Etsy indexes shop description text for search. Include your primary product keywords naturally in your description — not stuffed, but genuinely woven in. Google also crawls Etsy shop pages, so a well-written description can contribute to organic search visibility beyond Etsy itself.",
  },
  {
    q: "Should I use bullet points or paragraphs in my Etsy shop description?",
    a: "Use both. Open with 1-2 paragraphs for story and emotional resonance. Use bullets for process details, materials, and shipping information. Paragraphs are for connection. Bullets are for scanning. Buyers who are emotionally hooked will read the paragraphs; buyers who are evaluating logistics will scan the bullets.",
  },
  {
    q: "How do I know if my shop description is working?",
    a: "Check your shop&rsquo;s direct traffic and conversion rate from shop page visits in Etsy analytics. If buyers visit your shop page but don&rsquo;t click into listings, your description isn&rsquo;t compelling them to explore. Ask a friend who&rsquo;s your ideal buyer to read it and tell you: does this make you want to buy something from this shop?",
  },
];

export default function EtsyShopDescriptionPost() {
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
                9 min read · April 2026
              </span>
            </div>

            <h1 style={{ fontSize: "clamp(36px, 5vw, 56px)", lineHeight: 1.1, marginBottom: "24px" }}>
              How to Write an Etsy Shop Description That Actually Sells
            </h1>
            <p style={{ fontSize: "11px", fontFamily: "Inter, system-ui, sans-serif", color: "var(--horizon)", marginBottom: "8px", letterSpacing: "0.05em" }}>
              By <a href="/about" style={{ color: "var(--cobalt)" }}>the Claro team</a>
            </p>

            <p style={{ fontSize: "20px", color: "var(--ink)", lineHeight: 1.7, marginTop: "32px", marginBottom: "0" }}>
              Most Etsy shop descriptions either tell the seller&rsquo;s entire life story or say nothing meaningful at all. The description that actually converts is neither. It&rsquo;s short, specific, and focused entirely on making the buyer feel like they&rsquo;ve found the right place.
            </p>
          </div>
        </section>

        <article style={{ padding: "48px 40px 96px", maxWidth: "740px", margin: "0 auto" }}>

          <p style={{ fontSize: "17px", color: "var(--ink)", lineHeight: 1.8, marginBottom: "24px" }}>
            Your shop description is read by two audiences: the buyer who lands on your shop page before deciding whether to explore your listings, and Google (which indexes your page and uses the description for organic search). Write it for the buyer first. The SEO value follows naturally from writing well.
          </p>

          <p style={{ fontSize: "17px", color: "var(--ink)", lineHeight: 1.8, marginBottom: "48px" }}>
            Here&rsquo;s what goes in, what comes out, and what the whole thing should look like when you&rsquo;re done.
          </p>

          <h2 style={{ fontSize: "32px", marginBottom: "20px", marginTop: "64px" }}>The five elements of a shop description that converts</h2>

          {[
            {
              num: "1",
              title: "Who you make for (stated in their language)",
              body: "Don&rsquo;t describe your products — describe your buyer. &ldquo;For the person who wants their home to feel like a deliberate choice, not a showroom.&rdquo; &ldquo;For gift-givers who want to give something the recipient will actually remember.&rdquo; When buyers read a description that sounds like them, they lean in.",
            },
            {
              num: "2",
              title: "What makes your work different",
              body: "One specific thing. Not &ldquo;quality and care&rdquo; — everyone claims that. Pick the one thing that genuinely separates your work: the sourcing, the process, the limitation on what you&rsquo;ll accept. &ldquo;I only work with fiber sourced from family farms in the US — no imported wool.&rdquo; That&rsquo;s a differentiator.",
            },
            {
              num: "3",
              title: "Your process and materials, specifically",
              body: "Two or three sentences. Concrete, specific, sensory. Not &ldquo;made with love and attention to detail&rdquo; — that&rsquo;s noise. &ldquo;Every piece is wheel-thrown, bisque-fired, and glazed by hand in my Oakland studio&rdquo; — that&rsquo;s real.",
            },
            {
              num: "4",
              title: "Your communication and shipping standards",
              body: "Buyers want to know what to expect before they commit. Include: typical processing time, shipping speed, your responsiveness promise, and whether you offer customization or returns.",
            },
            {
              num: "5",
              title: "The brief human moment",
              body: "One or two sentences about why you make what you make. Not your entire biography — just the moment of truth. Why this? Why now? This is what makes your shop a shop, not a store.",
            },
          ].map((s) => (
            <div key={s.num} style={{ marginBottom: "36px" }}>
              <h3 style={{ fontSize: "24px", marginBottom: "12px", color: "var(--midnight)" }}>{s.num}. {s.title}</h3>
              <p style={{ fontSize: "17px", color: "var(--ink)", lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: s.body }} />
            </div>
          ))}

          <h2 style={{ fontSize: "32px", marginBottom: "20px", marginTop: "64px" }}>What most shop descriptions get wrong</h2>

          <p style={{ fontSize: "17px", color: "var(--ink)", lineHeight: 1.8, marginBottom: "24px" }}>
            The most common failures — and what to do instead:
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "20px", marginBottom: "48px" }}>
            {[
              {
                wrong: "Opening with &ldquo;Welcome to my shop!&rdquo;",
                right: "Open with a statement about who you make for or what makes your work worth their attention. No one reads past a generic welcome.",
              },
              {
                wrong: "A long autobiographical narrative",
                right: "Your buyer wants to know what your work means for them — not your full backstory. Include the human detail, but keep it to one or two specific sentences.",
              },
              {
                wrong: "Vague quality language (&ldquo;carefully crafted,&rdquo; &ldquo;made with love,&rdquo; &ldquo;highest quality materials&rdquo;)",
                right: "Every single Etsy shop uses these phrases. They&rsquo;ve become invisible. Replace with specifics: what material, what process, what standard.",
              },
              {
                wrong: "No mention of the buyer",
                right: "Your description should reference the person buying at least twice — in who you make for, and in who this is right for as a gift or self-purchase.",
              },
            ].map((item, i) => (
              <div key={i} style={{ background: "var(--ice)", border: "1px solid var(--sky)", borderRadius: "12px", padding: "24px" }}>
                <p style={{ fontSize: "14px", fontFamily: "Inter, system-ui, sans-serif", fontWeight: 700, color: "#e57373", marginBottom: "8px" }}>✗ {item.wrong}</p>
                <p style={{ fontSize: "15px", color: "var(--ink)", lineHeight: 1.6 }}>✓ {item.right}</p>
              </div>
            ))}
          </div>

          <h2 style={{ fontSize: "32px", marginBottom: "20px", marginTop: "64px" }}>Before and after: a real shop description rewrite</h2>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "20px", margin: "32px 0 48px" }}>
            <div style={{ background: "var(--ice)", borderRadius: "12px", padding: "28px", borderTop: "3px solid #c0392b" }}>
              <p style={{ fontSize: "11px", fontFamily: "Inter, system-ui, sans-serif", fontWeight: 700, color: "#e57373", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "16px" }}>
                Before
              </p>
              <p style={{ fontSize: "15px", color: "var(--ink)", lineHeight: 1.7 }}>
                &ldquo;Welcome to my shop! I&rsquo;m Sarah, and I love making beautiful handmade pottery. All my pieces are lovingly crafted by hand in my home studio. I started this shop in 2019 because I wanted to share my passion for ceramics with the world. All items are made with high quality materials and fired in my kiln. Please message me with any questions! I ship within 3-5 business days.&rdquo;
              </p>
            </div>
            <div style={{ background: "var(--cobalt)", borderRadius: "12px", padding: "28px", borderTop: "3px solid var(--gold)" }}>
              <p style={{ fontSize: "11px", fontFamily: "Inter, system-ui, sans-serif", fontWeight: 700, color: "var(--gold)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "16px" }}>
                After
              </p>
              <p style={{ fontSize: "15px", color: "var(--warm-white)", lineHeight: 1.7 }}>
                &ldquo;Handmade ceramics for people who want their table to look like a choice, not a catalog. Every piece is wheel-thrown, trimmed, and hand-glazed in my Portland studio — no two are identical, and that&rsquo;s the point. I work exclusively with stoneware clay and food-safe glazes. Orders ship within 3 business days, packed well enough to arrive intact. I respond to messages within 24 hours.&rdquo;
              </p>
            </div>
          </div>

          <p style={{ fontSize: "17px", color: "var(--ink)", lineHeight: 1.8, marginBottom: "48px" }}>
            The second version speaks to a specific buyer (&ldquo;people who want their table to look like a choice, not a catalog&rdquo;), uses concrete process language (&ldquo;wheel-thrown, trimmed, hand-glazed&rdquo;), acknowledges the handmade uniqueness as a feature, and gives specific operational information without being clinical about it.
          </p>

          <div style={{ background: "var(--midnight)", borderRadius: "16px", padding: "40px", margin: "64px 0" }}>
            <p style={{ fontSize: "11px", fontFamily: "Inter, system-ui, sans-serif", fontWeight: 600, color: "var(--horizon)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "16px" }}>
              Know who you&rsquo;re writing for
            </p>
            <h3 style={{ fontSize: "26px", color: "var(--warm-white)", marginBottom: "16px" }}>
              Write your shop description from buyer insights.
            </h3>
            <p style={{ fontSize: "16px", color: "var(--sky)", lineHeight: 1.7, marginBottom: "24px" }}>
              The language in the &ldquo;after&rdquo; version above came from understanding who the buyer is — their values, vocabulary, and what they hate about generic alternatives. Claro gives you that understanding in two minutes. See <a href="/pricing" style={{ color: "var(--gold)" }}>pricing</a>.
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
              { title: "How to Write Etsy Listings That Convert", href: "/blog/etsy-listing-copy-buyer-language", label: "Etsy Growth" },
              { title: "How to Build a Brand Strategy for Your Small Business", href: "/blog/brand-strategy-small-business", label: "Brand Strategy" },
              { title: "What Is Brand Voice? (And How to Build One That Sounds Like You)", href: "/blog/brand-voice-small-business", label: "Brand Strategy" },
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
                <span style={{ fontSize: "17px", color: "var(--midnight)", fontFamily: "'DM Serif Display', Georgia, serif" }}>
                  {link.title}
                </span>
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
              headline: "How to Write an Etsy Shop Description That Actually Sells",
              author: { "@type": "Organization", name: "Claro" },
              publisher: { "@type": "Organization", name: "Claro", url: "https://meetclaro.ai" },
              datePublished: "2026-04-15",
              description: "Most Etsy shop descriptions are ignored. Here's how to write one that builds trust, signals quality, and converts first-time visitors into buyers.",
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
