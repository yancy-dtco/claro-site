import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How to Find the Right Keywords for Your Etsy Shop — Claro",
  description: "Etsy keyword research isn't about finding what people search most — it's about finding what your buyer searches specifically. Here's the method.",
  openGraph: {
    title: "How to Find the Right Keywords for Your Etsy Shop",
    description: "Etsy keyword research isn't about finding what people search most — it's about finding what your buyer searches specifically. Here's the method.",
    type: "article",
  },
};

const faqs = [
  {
    q: "What&rsquo;s the best way to find Etsy keywords?",
    a: "The most reliable method is combining three sources: Etsy autocomplete (reveals real buyer searches), your own Shop Stats (shows which searches already send you traffic), and review language analysis (shows the exact words buyers use to describe what they bought). These three sources together give you buyer-verified keywords rather than theoretical ones.",
  },
  {
    q: "Should I use eRank or Marmalead for Etsy keyword research?",
    a: "Both tools have value for validating search volume and competition. But neither tells you why buyers use the keywords they do, or which keywords are associated with purchase intent vs. browsing. Use them to validate keywords you&rsquo;ve identified through buyer research — not as your primary source of keyword ideas.",
  },
  {
    q: "How many keywords should I target per listing?",
    a: "Focus on 1 primary keyword phrase (your main search target), 2-3 secondary keywords (related searches and phrase variations), and 5-8 contextual keywords in tags (occasions, recipients, styles, materials). Trying to target too many unrelated keywords in one listing dilutes your relevance signal for all of them.",
  },
  {
    q: "What&rsquo;s the difference between high-competition and low-competition Etsy keywords?",
    a: "High-competition keywords (&ldquo;soy candle&rdquo;) have huge search volume but also tens of thousands of competing listings. New shops rarely rank for these. Low-competition keywords (&ldquo;non-toxic soy candle for new mom gift&rdquo;) have lower volume but much more specific intent and far fewer competing listings. For most Etsy sellers, long-tail keywords with moderate competition convert better than broad keywords they can&rsquo;t rank for.",
  },
  {
    q: "How often should I update my Etsy keywords?",
    a: "Revisit your keyword strategy every 3-6 months. Check which search terms are currently driving traffic in your Shop Stats. If a listing is getting traffic but not converting, the keyword may be right but the listing needs work. If a listing isn&rsquo;t getting traffic, the keyword may be wrong or the competition is too high — time to find a better-fit phrase.",
  },
];

export default function EtsyKeywordResearchPost() {
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
                11 min read · April 2026
              </span>
            </div>

            <h1 style={{ fontSize: "clamp(36px, 5vw, 56px)", lineHeight: 1.1, marginBottom: "24px" }}>
              How to Find the Right Keywords for Your Etsy Shop
            </h1>
            <p style={{ fontSize: "11px", fontFamily: "Inter, system-ui, sans-serif", color: "var(--horizon)", marginBottom: "8px", letterSpacing: "0.05em" }}>
              By <a href="/about" style={{ color: "var(--cobalt)" }}>the Claro team</a>
            </p>

            <p style={{ fontSize: "20px", color: "var(--ink)", lineHeight: 1.7, marginTop: "32px", marginBottom: "0" }}>
              Most Etsy keyword guides tell you to find the highest-volume searches. That&rsquo;s the wrong goal. The right keywords are the ones your buyer — specifically your buyer, not the entire Etsy market — actually searches before they buy something like yours.
            </p>
          </div>
        </section>

        <article style={{ padding: "48px 40px 96px", maxWidth: "740px", margin: "0 auto" }}>

          <p style={{ fontSize: "17px", color: "var(--ink)", lineHeight: 1.8, marginBottom: "24px" }}>
            &ldquo;Soy candle&rdquo; gets enormous search volume on Etsy. It also has hundreds of thousands of competing listings. A new shop targeting &ldquo;soy candle&rdquo; will rank somewhere around page 40. A shop targeting &ldquo;non-toxic soy candle gift for new mom&rdquo; will face a fraction of the competition and reach a buyer with very specific, very high purchase intent.
          </p>

          <p style={{ fontSize: "17px", color: "var(--ink)", lineHeight: 1.8, marginBottom: "48px" }}>
            Keyword research for Etsy is about finding the intersection of: what your buyer searches, what you actually sell, and where you can realistically rank. Here&rsquo;s how to find that intersection.
          </p>

          <h2 style={{ fontSize: "32px", marginBottom: "20px", marginTop: "64px" }}>Step 1: Start with buyer language, not search tools</h2>

          <p style={{ fontSize: "17px", color: "var(--ink)", lineHeight: 1.8, marginBottom: "24px" }}>
            Before you open eRank or Marmalead, spend 30 minutes doing buyer language research. This is the foundation that makes everything else more accurate.
          </p>

          <p style={{ fontSize: "17px", color: "var(--ink)", lineHeight: 1.8, marginBottom: "24px" }}>
            Read 30-50 reviews in your product category — yours if you have them, competitors&rsquo; if you don&rsquo;t. Write down every specific phrase buyers use to describe the product, the occasion, or the person they bought for. These are buyer-verified keywords. They come directly from the people who found and bought from similar listings.
          </p>

          <div style={{ background: "var(--ice)", border: "1px solid var(--sky)", borderRadius: "12px", padding: "28px 32px", margin: "32px 0" }}>
            <p style={{ fontSize: "15px", fontFamily: "Inter, system-ui, sans-serif", fontWeight: 600, color: "var(--cobalt)", marginBottom: "12px" }}>Example review language (hand-poured candles):</p>
            <ul style={{ margin: 0, padding: "0 0 0 20px", display: "flex", flexDirection: "column", gap: "8px" }}>
              {[
                "\"non-toxic\" → search term: non-toxic soy candle",
                "\"smells so natural, not synthetic\" → search term: natural scented candle",
                "\"perfect teacher gift\" → search term: teacher appreciation gift candle",
                "\"shipped so fast, arrived before the baby shower\" → search term: baby shower gift candle",
                "\"clean burn, no black smoke\" → search term: clean burning soy candle",
              ].map((item, i) => (
                <li key={i} style={{ fontSize: "15px", color: "var(--ink)", lineHeight: 1.6, fontStyle: "italic" }}>{item}</li>
              ))}
            </ul>
          </div>

          <h2 style={{ fontSize: "32px", marginBottom: "20px", marginTop: "64px" }}>Step 2: Use Etsy autocomplete to validate and expand</h2>

          <p style={{ fontSize: "17px", color: "var(--ink)", lineHeight: 1.8, marginBottom: "24px" }}>
            Take the phrases from your buyer language research and test them in Etsy&rsquo;s search bar. The autocomplete suggestions show you what buyers actually type — and give you phrase variations you may not have thought of.
          </p>

          <p style={{ fontSize: "17px", color: "var(--ink)", lineHeight: 1.8, marginBottom: "24px" }}>
            Try these patterns for each core keyword:
          </p>

          <ul style={{ padding: "0 0 0 24px", margin: "0 0 48px", display: "flex", flexDirection: "column", gap: "10px" }}>
            {[
              "[product] + [nothing] — see top autocomplete suggestions",
              "[product] for [who?] — surfaces recipient/occasion framing",
              "[product] gift — surfaces gift-specific search behavior",
              "[material/style] [product] — surfaces material-first searches",
              "personalized [product] — captures customization searches",
            ].map((item, i) => (
              <li key={i} style={{ fontSize: "16px", fontFamily: "Inter, system-ui, sans-serif", color: "var(--cobalt)", lineHeight: 1.7, fontStyle: "italic" }}>{item}</li>
            ))}
          </ul>

          <h2 style={{ fontSize: "32px", marginBottom: "20px", marginTop: "64px" }}>Step 3: Check your own Shop Stats</h2>

          <p style={{ fontSize: "17px", color: "var(--ink)", lineHeight: 1.8, marginBottom: "24px" }}>
            If you have any sales history, your Shop Stats are the most reliable keyword data available. They show you the exact searches that led buyers to your listings — real searches, not estimated volumes.
          </p>

          <p style={{ fontSize: "17px", color: "var(--ink)", lineHeight: 1.8, marginBottom: "24px" }}>
            Go to Etsy Shop Manager → Stats → Traffic Sources → Search Terms. Document every search term that&rsquo;s sent you traffic in the last 30 days. Then check:
          </p>

          <ul style={{ padding: "0 0 0 24px", margin: "0 0 48px", display: "flex", flexDirection: "column", gap: "12px" }}>
            {[
              "Is this search term in your listing title? If not, add it.",
              "Is it driving visits but not purchases? Your listing conversion needs work for that query.",
              "Is it a phrase you hadn&rsquo;t expected? It might reveal a buyer use case you&rsquo;re underserving.",
            ].map((item, i) => (
              <li key={i} style={{ fontSize: "16px", color: "var(--ink)", lineHeight: 1.7 }} dangerouslySetInnerHTML={{ __html: item }} />
            ))}
          </ul>

          <h2 style={{ fontSize: "32px", marginBottom: "20px", marginTop: "64px" }}>Step 4: Evaluate competition before committing</h2>

          <p style={{ fontSize: "17px", color: "var(--ink)", lineHeight: 1.8, marginBottom: "24px" }}>
            Search your candidate keyword phrase in Etsy. Look at the results page and ask: how many listings are competing for this term? What do the top-ranked listings look like? Can you realistically create a listing that&rsquo;s better than what&rsquo;s currently ranking?
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "16px", margin: "24px 0 32px" }}>
            {[
              { range: "< 5,000 results", assessment: "Low competition. Target this phrase directly.", color: "#27ae60" },
              { range: "5,000–50,000 results", assessment: "Moderate competition. Target with a strong listing.", color: "var(--cobalt)" },
              { range: "50,000–500,000 results", assessment: "High competition. Use as a secondary keyword, not primary.", color: "var(--gold)" },
              { range: "500,000+ results", assessment: "Saturated. Only viable with a very strong shop quality score.", color: "#e57373" },
            ].map((item, i) => (
              <div key={i} style={{ background: "var(--ice)", borderRadius: "10px", padding: "20px", borderTop: `3px solid ${item.color}` }}>
                <p style={{ fontSize: "16px", fontFamily: "Inter, system-ui, sans-serif", fontWeight: 700, color: item.color, marginBottom: "8px" }}>{item.range}</p>
                <p style={{ fontSize: "14px", color: "var(--ink)", lineHeight: 1.5 }}>{item.assessment}</p>
              </div>
            ))}
          </div>

          <h2 style={{ fontSize: "32px", marginBottom: "20px", marginTop: "64px" }}>Putting it together: the keyword priority stack</h2>

          <p style={{ fontSize: "17px", color: "var(--ink)", lineHeight: 1.8, marginBottom: "24px" }}>
            For each listing, build a keyword priority stack:
          </p>

          {[
            { level: "Primary keyword (in title, first 55 chars)", desc: "The single most specific, buyer-verified phrase for this listing. Buyer-validated, moderate competition." },
            { level: "Secondary keywords (in title, later)", desc: "2-3 modifier phrases: material, occasion, recipient. These capture related searches." },
            { level: "Tags (phrase variations)", desc: "Up to 13 tags for related searches, style names, alternate phrasings, and long-tail variations." },
            { level: "Description keywords (natural language)", desc: "Weave your primary and secondary keywords naturally into your description. Google will index them." },
          ].map((item, i) => (
            <div key={i} style={{ display: "flex", gap: "16px", marginBottom: "20px", alignItems: "flex-start" }}>
              <span style={{ background: "var(--cobalt)", color: "var(--warm-white)", fontSize: "13px", fontFamily: "Inter, system-ui, sans-serif", fontWeight: 700, padding: "4px 10px", borderRadius: "6px", whiteSpace: "nowrap", flexShrink: 0, marginTop: "2px" }}>
                {i + 1}
              </span>
              <div>
                <p style={{ fontSize: "16px", fontFamily: "Inter, system-ui, sans-serif", fontWeight: 600, color: "var(--midnight)", marginBottom: "4px" }}>{item.level}</p>
                <p style={{ fontSize: "15px", color: "var(--ink)", lineHeight: 1.6 }}>{item.desc}</p>
              </div>
            </div>
          ))}

          <div style={{ background: "var(--midnight)", borderRadius: "16px", padding: "40px", margin: "64px 0" }}>
            <p style={{ fontSize: "11px", fontFamily: "Inter, system-ui, sans-serif", fontWeight: 600, color: "var(--horizon)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "16px" }}>
              Buyer-verified keywords
            </p>
            <h3 style={{ fontSize: "26px", color: "var(--warm-white)", marginBottom: "16px" }}>
              Skip the guesswork. Get your buyer&rsquo;s search vocabulary.
            </h3>
            <p style={{ fontSize: "16px", color: "var(--sky)", lineHeight: 1.7, marginBottom: "24px" }}>
              Claro extracts the exact phrases your buyers use from reviews, Reddit, and search behavior — and organizes them by purchase trigger and intent. Your keyword research in two minutes. See <a href="/pricing" style={{ color: "var(--gold)" }}>pricing</a>.
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
              { title: "Etsy SEO in 2025: What Actually Works", href: "/blog/etsy-seo-2025", label: "Etsy Growth" },
              { title: "The Best Etsy Listing Title Formula (With Examples)", href: "/blog/etsy-listing-title-formula", label: "Etsy Growth" },
              { title: "How to Do Audience Research for Your Etsy Shop", href: "/blog/etsy-audience-research", label: "Buyer Research" },
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
              headline: "How to Find the Right Keywords for Your Etsy Shop",
              author: { "@type": "Organization", name: "Claro" },
              publisher: { "@type": "Organization", name: "Claro", url: "https://meetclaro.ai" },
              datePublished: "2026-04-15",
              description: "Etsy keyword research isn't about finding what people search most — it's about finding what your buyer searches specifically. Here's the method.",
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
