import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Best Etsy Listing Title Formula (With Examples) — Claro",
  description: "Your Etsy listing title is the most important SEO and conversion element in your shop. Here's the formula that works — with real examples across categories.",
  openGraph: {
    title: "The Best Etsy Listing Title Formula (With Examples)",
    description: "Your Etsy listing title is the most important SEO and conversion element in your shop. Here's the formula that works — with real examples across categories.",
    type: "article",
  },
};

const faqs = [
  {
    q: "How long should an Etsy listing title be?",
    a: "Etsy allows 140 characters. Use as many as you need — ideally 100-140 characters. The first 40-55 characters are what appear in search results before truncation, so put your most important keyword and differentiator there. Don&rsquo;t waste the remaining characters — use them for secondary keywords, occasion framing, and specificity.",
  },
  {
    q: "Should I use all caps, title case, or sentence case in Etsy titles?",
    a: "Avoid ALL CAPS in titles — it reads as shouting and doesn&rsquo;t improve search ranking. Title Case (capitalizing most words) is the most common and readable format for Etsy. Some sellers use sentence case for a more editorial feel. The most important thing is readability — titles that read coherently click better than titles that look like keyword lists.",
  },
  {
    q: "What are the most important keywords to include in an Etsy title?",
    a: "Your primary keyword should be the exact phrase your buyer searches for — not the name you call your product. Use Etsy autocomplete to find real search queries. Secondary keywords should be modifiers: material, style, occasion, recipient, or use case. Don&rsquo;t just stuff keywords — integrate them so the title still reads naturally.",
  },
  {
    q: "Should I include my shop name or brand in the Etsy listing title?",
    a: "No. Your shop name appears separately in search results. Using title space for your brand name wastes characters that could contain buyer search keywords. Exception: if your brand name is also a descriptive keyword (e.g., &ldquo;Clean Candle Co.&rdquo;), there&rsquo;s a marginal case for including it, but it&rsquo;s rarely worth it.",
  },
  {
    q: "How often should I update my Etsy listing titles?",
    a: "Revisit titles every 3-6 months, and after any significant seasonal shift. Buyer search language changes over time. Check your Shop Stats to see which search terms are driving traffic to each listing — if the top traffic keyword isn&rsquo;t in your title, it should be. Track conversion rate before and after any title change to validate the improvement.",
  },
];

export default function EtsyListingTitleFormulaPost() {
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
              The Best Etsy Listing Title Formula (With Examples)
            </h1>
            <p style={{ fontSize: "11px", fontFamily: "Inter, system-ui, sans-serif", color: "var(--horizon)", marginBottom: "8px", letterSpacing: "0.05em" }}>
              By <a href="/about" style={{ color: "var(--cobalt)" }}>the Claro team</a>
            </p>

            <p style={{ fontSize: "20px", color: "var(--ink)", lineHeight: 1.7, marginTop: "32px", marginBottom: "0" }}>
              Your Etsy title is doing two jobs at once: getting you found in search and earning the click. Most titles fail at one or both. Here&rsquo;s the formula that does both well — with real examples you can apply today.
            </p>
          </div>
        </section>

        <article style={{ padding: "48px 40px 96px", maxWidth: "740px", margin: "0 auto" }}>

          <p style={{ fontSize: "17px", color: "var(--ink)", lineHeight: 1.8, marginBottom: "24px" }}>
            The title is the first thing Etsy&rsquo;s algorithm reads and the first thing a buyer reads. It needs to contain the right keywords for ranking — and the right language for clicking. These are related but distinct requirements, and most title formulas sacrifice one for the other.
          </p>

          <p style={{ fontSize: "17px", color: "var(--ink)", lineHeight: 1.8, marginBottom: "48px" }}>
            The formula below is built from reverse-engineering titles that rank and convert — not from SEO theory.
          </p>

          <h2 style={{ fontSize: "32px", marginBottom: "20px", marginTop: "64px" }}>How Etsy uses your title (and what that means for you)</h2>

          <p style={{ fontSize: "17px", color: "var(--ink)", lineHeight: 1.8, marginBottom: "24px" }}>
            Etsy&rsquo;s algorithm gives title text significant weight in search ranking. The closer a phrase in your title is to a buyer&rsquo;s search query, the better your chances of appearing. This is why keyword matching matters — your title needs to contain the exact phrases buyers search for.
          </p>

          <p style={{ fontSize: "17px", color: "var(--ink)", lineHeight: 1.8, marginBottom: "24px" }}>
            But Etsy also considers engagement signals: click-through rate and conversion rate both influence ranking. A listing that appears in search but rarely gets clicked or purchased will rank lower over time. This is why titles that read like keyword lists underperform — even if they rank initially, their engagement signals kill them.
          </p>

          <div style={{ background: "var(--ice)", border: "1px solid var(--sky)", borderRadius: "12px", padding: "28px 32px", margin: "32px 0" }}>
            <p style={{ fontSize: "15px", fontFamily: "Inter, system-ui, sans-serif", fontWeight: 600, color: "var(--cobalt)", marginBottom: "12px" }}>The two-job rule:</p>
            <p style={{ fontSize: "16px", color: "var(--ink)", lineHeight: 1.7 }}>
              Job 1: Include the exact phrase your buyer searches. Job 2: Make the title readable and specific enough that the buyer clicks it when they see it. A title that does job 1 and not job 2 ranks but doesn&rsquo;t convert. A title that does job 2 and not job 1 doesn&rsquo;t rank to begin with.
            </p>
          </div>

          <h2 style={{ fontSize: "32px", marginBottom: "20px", marginTop: "64px" }}>The formula</h2>

          <p style={{ fontSize: "17px", color: "var(--ink)", lineHeight: 1.8, marginBottom: "32px" }}>
            Here&rsquo;s the core structure:
          </p>

          <div style={{ background: "var(--cobalt)", borderRadius: "12px", padding: "32px", margin: "0 0 32px" }}>
            <p style={{ fontSize: "18px", color: "var(--warm-white)", lineHeight: 1.7, fontFamily: "'DM Serif Display', Georgia, serif" }}>
              [Primary keyword] — [specific modifier] | [differentiator or occasion] | [secondary keyword or use case]
            </p>
          </div>

          <p style={{ fontSize: "17px", color: "var(--ink)", lineHeight: 1.8, marginBottom: "32px" }}>
            Breaking this down:
          </p>

          {[
            {
              element: "Primary keyword",
              explain: "The exact phrase buyers search for. Find this by typing your product into Etsy&rsquo;s search bar and using the autocomplete suggestions. Choose the phrase with the highest search intent — usually the most specific phrase that accurately describes your product.",
              example: "Non-toxic soy candle",
            },
            {
              element: "Specific modifier",
              explain: "What makes this specific? Material, size, scent, style, process. Be concrete. &ldquo;Handmade&rdquo; is weak. &ldquo;Hand-poured in small batches&rdquo; is stronger. &ldquo;100% beeswax&rdquo; is specific. Specificity builds trust before the buyer even clicks.",
              example: "hand-poured small batch",
            },
            {
              element: "Differentiator or occasion",
              explain: "Why would someone choose this over the alternatives? Or: who is it for and when? Gift framing, unique qualities, and specific use cases all work here.",
              example: "birthday gift for her",
            },
            {
              element: "Secondary keyword or use case",
              explain: "A secondary search term that captures a different buyer intent, or a specific use case that adds relevance.",
              example: "cozy home scent, 50hr burn",
            },
          ].map((item, i) => (
            <div key={i} style={{ marginBottom: "32px", paddingLeft: "24px", borderLeft: "3px solid var(--cobalt)" }}>
              <h4 style={{ fontSize: "20px", marginBottom: "8px", color: "var(--midnight)" }}>{item.element}</h4>
              <p style={{ fontSize: "16px", color: "var(--ink)", lineHeight: 1.7, marginBottom: "8px" }}>{item.explain}</p>
              <p style={{ fontSize: "14px", fontFamily: "Inter, system-ui, sans-serif", color: "var(--cobalt)", fontStyle: "italic" }}>Example: &ldquo;{item.example}&rdquo;</p>
            </div>
          ))}

          <h2 style={{ fontSize: "32px", marginBottom: "20px", marginTop: "64px" }}>The formula in action: 5 real examples</h2>

          {[
            {
              category: "Candles",
              before: "Handmade Soy Candle Natural Aromatherapy Candle Home Scent Gift",
              after: "Non-Toxic Soy Candle — Hand-Poured, Clean Scent | Birthday Gift for Her | 50-Hour Burn Time",
              note: "Before reads like keywords. After reads like a product with a buyer in mind.",
            },
            {
              category: "Jewelry",
              before: "Gold Necklace Dainty Jewelry Personalized Name Necklace Gift",
              after: "Dainty Gold Initial Necklace — Personalized, 14k Gold Fill | Meaningful Gift for Mom or Best Friend",
              note: "The after version includes the recipient framing and specific material that converts gift-buyers.",
            },
            {
              category: "Stationery",
              before: "Planner Sticker Pack Cute Stickers Bullet Journal Stickers",
              after: "Botanical Planner Sticker Pack — 120 Stickers for Bullet Journal or Planner | Aesthetic Desk Setup",
              note: "Specific count (120), specific aesthetic (botanical), specific use context (bullet journal OR planner).",
            },
            {
              category: "Home Decor",
              before: "Wooden Sign Custom Sign Home Decor Wood Wall Art",
              after: "Custom Family Name Sign — Personalized Walnut Wood, Housewarming Gift | Ready to Hang",
              note: "Material specificity (walnut), occasion framing (housewarming), functional detail (ready to hang).",
            },
            {
              category: "Clothing",
              before: "Linen Shirt Women Linen Top Natural Fabric Sustainable",
              after: "Relaxed Linen Button Shirt — Breathable, Pre-Washed Soft | Coastal Grandmother, Summer Vacation",
              note: "&lsquo;Pre-washed soft&rsquo; addresses a texture concern. Aesthetic language (&lsquo;coastal grandmother&rsquo;) captures a style-aware buyer segment.",
            },
          ].map((ex, i) => (
            <div key={i} style={{ marginBottom: "48px" }}>
              <h3 style={{ fontSize: "22px", marginBottom: "16px", color: "var(--midnight)" }}>{ex.category}</h3>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "16px", marginBottom: "12px" }}>
                <div style={{ background: "var(--ice)", borderRadius: "10px", padding: "20px", borderTop: "3px solid #c0392b" }}>
                  <p style={{ fontSize: "11px", fontFamily: "Inter, system-ui, sans-serif", fontWeight: 700, color: "#e57373", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "10px" }}>Before</p>
                  <p style={{ fontSize: "15px", color: "var(--ink)", lineHeight: 1.6 }}>{ex.before}</p>
                </div>
                <div style={{ background: "var(--cobalt)", borderRadius: "10px", padding: "20px", borderTop: "3px solid var(--gold)" }}>
                  <p style={{ fontSize: "11px", fontFamily: "Inter, system-ui, sans-serif", fontWeight: 700, color: "var(--gold)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "10px" }}>After</p>
                  <p style={{ fontSize: "15px", color: "var(--warm-white)", lineHeight: 1.6 }}>{ex.after}</p>
                </div>
              </div>
              <p style={{ fontSize: "14px", color: "var(--horizon)", fontFamily: "Inter, system-ui, sans-serif", fontStyle: "italic" }} dangerouslySetInnerHTML={{ __html: ex.note }} />
            </div>
          ))}

          <h2 style={{ fontSize: "32px", marginBottom: "20px", marginTop: "64px" }}>Common title mistakes and how to fix them</h2>

          {[
            {
              mistake: "Keyword stuffing without natural flow",
              fix: "Read your title out loud. If it sounds like a list instead of a description, buyers will read it that way too. A title that flows naturally while containing keywords outperforms a keyword dump every time.",
            },
            {
              mistake: "Generic modifiers (&ldquo;beautiful,&rdquo; &ldquo;unique,&rdquo; &ldquo;high quality&rdquo;)",
              fix: "Replace with specifics. Not &ldquo;high quality leather&rdquo; — &ldquo;full-grain leather.&rdquo; Not &ldquo;beautiful floral design&rdquo; — &ldquo;hand-painted wildflower pattern.&rdquo; Specificity builds trust and is what buyers actually search for.",
            },
            {
              mistake: "Wasting the first 55 characters",
              fix: "The first 55 characters appear before Etsy truncates in search. Your most important keyword and your best differentiator must both fit in that window. Test your title in Etsy search to see what buyers actually see.",
            },
          ].map((item, i) => (
            <div key={i} style={{ marginBottom: "28px", paddingLeft: "24px", borderLeft: "3px solid var(--cobalt)" }}>
              <h4 style={{ fontSize: "20px", marginBottom: "8px", color: "var(--midnight)" }} dangerouslySetInnerHTML={{ __html: `Mistake: ${item.mistake}` }} />
              <p style={{ fontSize: "16px", color: "var(--ink)", lineHeight: 1.7 }} dangerouslySetInnerHTML={{ __html: `Fix: ${item.fix}` }} />
            </div>
          ))}

          <div style={{ background: "var(--midnight)", borderRadius: "16px", padding: "40px", margin: "64px 0" }}>
            <p style={{ fontSize: "11px", fontFamily: "Inter, system-ui, sans-serif", fontWeight: 600, color: "var(--horizon)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "16px" }}>
              Better titles, faster
            </p>
            <h3 style={{ fontSize: "26px", color: "var(--warm-white)", marginBottom: "16px" }}>
              Get the buyer language your titles are missing.
            </h3>
            <p style={{ fontSize: "16px", color: "var(--sky)", lineHeight: 1.7, marginBottom: "24px" }}>
              Claro tells you exactly what language your buyers use when searching for products like yours — so your titles use their vocabulary, not yours. See <a href="/pricing" style={{ color: "var(--gold)" }}>pricing</a>.
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
              { title: "Etsy SEO in 2025: What Actually Works", href: "/blog/etsy-seo-2025", label: "Etsy Growth" },
              { title: "How to Find the Right Keywords for Your Etsy Shop", href: "/blog/etsy-keyword-research", label: "Etsy Growth" },
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
              headline: "The Best Etsy Listing Title Formula (With Examples)",
              author: { "@type": "Organization", name: "Claro" },
              publisher: { "@type": "Organization", name: "Claro", url: "https://meetclaro.ai" },
              datePublished: "2026-04-15",
              description: "Your Etsy listing title is the most important SEO and conversion element in your shop. Here's the formula that works — with real examples across categories.",
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
