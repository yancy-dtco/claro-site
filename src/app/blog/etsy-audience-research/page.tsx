import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How to Do Audience Research for Your Etsy Shop — Claro",
  description: "A practical, step-by-step guide to Etsy shop audience research — using methods that work even if you have no sales yet.",
  openGraph: {
    title: "How to Do Audience Research for Your Etsy Shop",
    description: "A practical, step-by-step guide to Etsy shop audience research — using methods that work even if you have no sales yet.",
    type: "article",
  },
};

const faqs = [
  {
    q: "What is audience research for an Etsy shop?",
    a: "Audience research for an Etsy shop is the process of understanding who buys your products, what language they use to describe what they want, and what motivates or prevents them from making a purchase. It&rsquo;s different from keyword research — keyword research finds search terms, audience research finds the human behind the search.",
  },
  {
    q: "How do I do audience research with no sales yet?",
    a: "Start with competitor research. Find the top-performing shops in your category and read their reviews carefully. Also search Reddit for discussions about your product category, and use Amazon reviews for adjacent products. The buyers in your category are talking — you just need to find where.",
  },
  {
    q: "What&rsquo;s the difference between Etsy audience research and Etsy keyword research?",
    a: "Keyword research tells you what buyers type into a search bar. Audience research tells you who those buyers are, what they value, and what language beyond the search query they use when talking about your products. Both matter, but audience research feeds keyword research — not the other way around.",
  },
  {
    q: "How long does Etsy audience research take?",
    a: "A first-pass audience research session should take 3-4 hours: 1 hour reviewing your own and competitor reviews, 1 hour searching Reddit, 30 minutes with Etsy autocomplete, and 1-1.5 hours synthesizing. This gives you enough to meaningfully improve your listings. Ongoing research can be much lighter — 30 minutes monthly to spot new patterns.",
  },
  {
    q: "Do I need to redo my audience research every year?",
    a: "At minimum, yes. Buyer language shifts, trends change, and new search behaviors emerge. If you&rsquo;re in a trend-sensitive category (home decor, fashion, stationery), revisit quarterly. In stable categories (functional tools, supplies), annually is fine. The goal is to keep your language fresh and accurate.",
  },
];

export default function EtsyAudienceResearchPost() {
  return (
    <>
      <Nav />
      <main style={{ background: "var(--warm-white)" }}>

        <section style={{ paddingTop: "100px", paddingBottom: "0", padding: "100px 40px 0" }}>
          <div style={{ maxWidth: "740px", margin: "0 auto" }}>
            <div style={{ display: "flex", gap: "12px", alignItems: "center", marginBottom: "24px", flexWrap: "wrap" }}>
              <span style={{ fontSize: "12px", fontFamily: "Inter, system-ui, sans-serif", fontWeight: 600, color: "var(--cobalt)", background: "rgba(44,82,130,0.1)", padding: "4px 12px", borderRadius: "12px" }}>
                Buyer Research
              </span>
              <span style={{ fontSize: "13px", color: "var(--horizon)", fontFamily: "Inter, system-ui, sans-serif" }}>
                12 min read · April 2026
              </span>
            </div>

            <h1 style={{ fontSize: "clamp(36px, 5vw, 56px)", lineHeight: 1.1, marginBottom: "24px" }}>
              How to Do Audience Research for Your Etsy Shop
            </h1>
            <p style={{ fontSize: "11px", fontFamily: "Inter, system-ui, sans-serif", color: "var(--horizon)", marginBottom: "8px", letterSpacing: "0.05em" }}>
              By <a href="/about" style={{ color: "var(--cobalt)" }}>the Claro team</a>
            </p>

            <p style={{ fontSize: "20px", color: "var(--ink)", lineHeight: 1.7, marginTop: "32px", marginBottom: "0" }}>
              Every Etsy seller knows they should &ldquo;understand their audience.&rdquo; Almost none of them have a structured process for actually doing it. This is that process — concrete, repeatable, and designed for sellers who are running a real business without a research team.
            </p>
          </div>
        </section>

        <article style={{ padding: "48px 40px 96px", maxWidth: "740px", margin: "0 auto" }}>

          <p style={{ fontSize: "17px", color: "var(--ink)", lineHeight: 1.8, marginBottom: "24px" }}>
            Audience research for an Etsy shop is fundamentally different from audience research for a brand with a marketing budget. You don&rsquo;t have access to focus groups or customer panels. What you have is a massive amount of organic buyer data — in reviews, forums, and search behavior — that most sellers completely ignore.
          </p>

          <p style={{ fontSize: "17px", color: "var(--ink)", lineHeight: 1.8, marginBottom: "48px" }}>
            Here&rsquo;s how to use it.
          </p>

          <h2 style={{ fontSize: "32px", marginBottom: "20px", marginTop: "64px" }}>Before you start: define what you&rsquo;re trying to learn</h2>

          <p style={{ fontSize: "17px", color: "var(--ink)", lineHeight: 1.8, marginBottom: "24px" }}>
            Audience research without a clear goal produces a pile of notes that never gets used. Before you start, decide what you&rsquo;re trying to answer. The most actionable questions for Etsy sellers:
          </p>

          <ul style={{ padding: "0 0 0 24px", margin: "0 0 48px", display: "flex", flexDirection: "column", gap: "12px" }}>
            {[
              "What exact phrases do my buyers use when searching for products like mine?",
              "What occasions or life moments trigger the purchase?",
              "What fears or hesitations do buyers have before buying?",
              "What do they say publicly after they receive it?",
              "Who are they buying for — themselves or someone else?",
            ].map((item, i) => (
              <li key={i} style={{ fontSize: "16px", color: "var(--ink)", lineHeight: 1.7 }}>{item}</li>
            ))}
          </ul>

          <h2 style={{ fontSize: "32px", marginBottom: "20px", marginTop: "64px" }}>Phase 1: Mine your own data (60 minutes)</h2>

          <p style={{ fontSize: "17px", color: "var(--ink)", lineHeight: 1.8, marginBottom: "24px" }}>
            If you have sales, start here. If you don&rsquo;t, skip to Phase 2.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "24px", marginBottom: "48px" }}>
            {[
              {
                source: "Your reviews",
                instructions: "Read every review and copy the text into a document. Highlight: (a) the reason they bought, (b) who they bought for, (c) specific language about what they liked, (d) any surprise or delight moments. Organize your highlights by theme.",
              },
              {
                source: "Your Etsy messages",
                instructions: "Look at your pre-purchase messages. What do buyers ask before buying? These questions are your conversion barriers — each one is something a hesitant buyer needed answered before they felt safe clicking buy. Address each one in your listing.",
              },
              {
                source: "Your Shop Stats",
                instructions: "Look at your traffic sources. What are buyers searching to find your listings? The search terms Etsy shows you are gold — they&rsquo;re real phrases that converted to a visit. Check if your listing title contains those terms.",
              },
            ].map((item, i) => (
              <div key={i} style={{ paddingLeft: "24px", borderLeft: "3px solid var(--cobalt)" }}>
                <h4 style={{ fontSize: "20px", marginBottom: "8px", color: "var(--midnight)" }}>{item.source}</h4>
                <p style={{ fontSize: "16px", color: "var(--ink)", lineHeight: 1.7 }}>{item.instructions}</p>
              </div>
            ))}
          </div>

          <h2 style={{ fontSize: "32px", marginBottom: "20px", marginTop: "64px" }}>Phase 2: Competitor review analysis (60 minutes)</h2>

          <p style={{ fontSize: "17px", color: "var(--ink)", lineHeight: 1.8, marginBottom: "24px" }}>
            Open Etsy and search for your primary product. Sort by &ldquo;Top customer reviews&rdquo; and click into the top 5 shops. For each shop:
          </p>

          <ol style={{ padding: "0 0 0 24px", margin: "0 0 32px", display: "flex", flexDirection: "column", gap: "16px" }}>
            {[
              "Read the 20 most recent 5-star reviews — note what buyers specifically praise",
              "Read all 3-star reviews — note what buyers wanted that fell short",
              "Look for repeated phrases or words across reviews",
              "Note the occasions and use cases buyers mention",
            ].map((item, i) => (
              <li key={i} style={{ fontSize: "16px", color: "var(--ink)", lineHeight: 1.7 }}>{item}</li>
            ))}
          </ol>

          <div style={{ background: "var(--ice)", border: "1px solid var(--sky)", borderRadius: "12px", padding: "28px 32px", margin: "32px 0" }}>
            <p style={{ fontSize: "15px", fontFamily: "Inter, system-ui, sans-serif", fontWeight: 600, color: "var(--cobalt)", marginBottom: "12px" }}>What you&rsquo;re building:</p>
            <p style={{ fontSize: "16px", color: "var(--ink)", lineHeight: 1.7 }}>
              A vocabulary list. The specific words buyers use to describe what they love, what they want, what they feared, and what delighted them. This vocabulary belongs in your listing titles, descriptions, and tags — in your buyers&rsquo; own language, not yours.
            </p>
          </div>

          <h2 style={{ fontSize: "32px", marginBottom: "20px", marginTop: "64px" }}>Phase 3: Reddit research (45 minutes)</h2>

          <p style={{ fontSize: "17px", color: "var(--ink)", lineHeight: 1.8, marginBottom: "24px" }}>
            Reddit is where buyers talk to each other — not to sellers. That makes it uniquely honest.
          </p>

          <p style={{ fontSize: "17px", color: "var(--ink)", lineHeight: 1.8, marginBottom: "24px" }}>
            Search Google for:
          </p>

          <ul style={{ padding: "0 0 0 24px", margin: "0 0 24px", display: "flex", flexDirection: "column", gap: "8px" }}>
            {[
              "site:reddit.com [product] recommendation",
              "site:reddit.com best [product category] Etsy",
              "site:reddit.com [product] gift ideas",
              "site:reddit.com [product] worth it",
            ].map((item, i) => (
              <li key={i} style={{ fontSize: "16px", fontFamily: "Inter, system-ui, sans-serif", color: "var(--cobalt)", lineHeight: 1.7, fontStyle: "italic" }}>{item}</li>
            ))}
          </ul>

          <p style={{ fontSize: "17px", color: "var(--ink)", lineHeight: 1.8, marginBottom: "24px" }}>
            Read the threads. Copy any buyer language that captures: what they&rsquo;re looking for, what frustrates them about what&rsquo;s available, and what they value in sellers they&rsquo;ve had good experiences with.
          </p>

          <p style={{ fontSize: "17px", color: "var(--ink)", lineHeight: 1.8, marginBottom: "48px" }}>
            Also browse r/Etsy directly. Search your product category within the subreddit. You&rsquo;ll find both seller discussions (useful for understanding what others have learned) and buyer discussions (useful for hearing the customer perspective unfiltered).
          </p>

          <h2 style={{ fontSize: "32px", marginBottom: "20px", marginTop: "64px" }}>Phase 4: Search behavior research (30 minutes)</h2>

          <p style={{ fontSize: "17px", color: "var(--ink)", lineHeight: 1.8, marginBottom: "24px" }}>
            Two tools, both free, both powerful:
          </p>

          {[
            {
              tool: "Etsy autocomplete",
              how: "Type your product into Etsy&rsquo;s search bar and let autocomplete finish your thoughts. Every suggestion is a real buyer search query. Test multiple starting phrases: just the product name, the product + &ldquo;for&rdquo;, the product + &ldquo;gift&rdquo;, the product + a material or style modifier.",
            },
            {
              tool: "Google &ldquo;People also ask&rdquo;",
              how: "Search your product category on Google and look at the &ldquo;People also ask&rdquo; box. These are real questions buyers have. Each one is a content angle for your listing, your FAQ section, or your social media.",
            },
          ].map((item, i) => (
            <div key={i} style={{ marginBottom: "32px", paddingLeft: "24px", borderLeft: "3px solid var(--cobalt)" }}>
              <h4 style={{ fontSize: "20px", marginBottom: "8px", color: "var(--midnight)" }}>{item.tool}</h4>
              <p style={{ fontSize: "16px", color: "var(--ink)", lineHeight: 1.7 }} dangerouslySetInnerHTML={{ __html: item.how }} />
            </div>
          ))}

          <h2 style={{ fontSize: "32px", marginBottom: "20px", marginTop: "64px" }}>Phase 5: Synthesis — turning research into a usable profile (60 minutes)</h2>

          <p style={{ fontSize: "17px", color: "var(--ink)", lineHeight: 1.8, marginBottom: "24px" }}>
            Now you have 3-4 pages of notes. The synthesis is where the value gets unlocked.
          </p>

          {[
            {
              step: "Group by theme",
              body: "Cluster all your notes: use cases (gift vs. self-purchase), occasions (birthday, wedding, holiday), fears (size, quality, shipping), values (handmade, non-toxic, sustainable), and vocabulary (exact words that recurred).",
            },
            {
              step: "Rank by frequency",
              body: "The themes that appeared most often are your primary audience signals. A theme that showed up once is interesting. A theme that showed up twelve times is your listing copy.",
            },
            {
              step: "Write the profile",
              body: "In two paragraphs, describe your buyer using the language from your research. Who they are, what occasion triggered the search, what they fear, and what they&rsquo;re hoping for.",
            },
            {
              step: "Pull the vocabulary list",
              body: "From your synthesis, extract 10-15 specific phrases that appeared in buyer language. These go directly into your listing titles, descriptions, tags, and social captions.",
            },
          ].map((s, i) => (
            <div key={i} style={{ marginBottom: "28px", paddingLeft: "24px", borderLeft: "3px solid var(--cobalt)" }}>
              <h4 style={{ fontSize: "20px", marginBottom: "8px", color: "var(--midnight)" }}>{s.step}</h4>
              <p style={{ fontSize: "16px", color: "var(--ink)", lineHeight: 1.7 }}>{s.body}</p>
            </div>
          ))}

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "20px", margin: "48px 0" }}>
            <div style={{ background: "var(--ice)", borderRadius: "12px", padding: "28px", borderTop: "3px solid #c0392b" }}>
              <p style={{ fontSize: "11px", fontFamily: "Inter, system-ui, sans-serif", fontWeight: 700, color: "#e57373", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "16px" }}>
                Without research
              </p>
              <p style={{ fontSize: "16px", color: "var(--ink)", lineHeight: 1.7 }}>
                Listing title: &ldquo;Handmade beeswax candle, natural scented&rdquo;
              </p>
            </div>
            <div style={{ background: "var(--cobalt)", borderRadius: "12px", padding: "28px", borderTop: "3px solid var(--gold)" }}>
              <p style={{ fontSize: "11px", fontFamily: "Inter, system-ui, sans-serif", fontWeight: 700, color: "var(--gold)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "16px" }}>
                After research
              </p>
              <p style={{ fontSize: "16px", color: "var(--warm-white)", lineHeight: 1.7 }}>
                Listing title: &ldquo;Pure beeswax candle — non-toxic, long-burning, clean scent | cozy home gift&rdquo;
              </p>
            </div>
          </div>

          <p style={{ fontSize: "17px", color: "var(--ink)", lineHeight: 1.8, marginBottom: "48px" }}>
            The research-backed version uses the exact words buyers search for — &ldquo;non-toxic,&rdquo; &ldquo;clean scent,&rdquo; &ldquo;cozy home gift&rdquo; — pulled directly from what buyers say in reviews and Reddit. Not invented. Found.
          </p>

          <div style={{ background: "var(--midnight)", borderRadius: "16px", padding: "40px", margin: "64px 0" }}>
            <p style={{ fontSize: "11px", fontFamily: "Inter, system-ui, sans-serif", fontWeight: 600, color: "var(--horizon)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "16px" }}>
              The automated version
            </p>
            <h3 style={{ fontSize: "26px", color: "var(--warm-white)", marginBottom: "16px" }}>
              Claro runs this research automatically.
            </h3>
            <p style={{ fontSize: "16px", color: "var(--sky)", lineHeight: 1.7, marginBottom: "24px" }}>
              The four phases above are exactly what Claro automates — review analysis, competitor signals, Reddit language, search behavior. Enter your shop URL and get a full audience profile in two minutes instead of four hours. Check <a href="/pricing" style={{ color: "var(--gold)" }}>pricing</a> — it pays for itself in one listing update.
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
              { title: "How to Build a Buyer Persona for Your Etsy Shop", href: "/blog/buyer-persona-etsy-shop", label: "Buyer Research" },
              { title: "How to Use Reddit to Understand Your Etsy Buyers", href: "/blog/reddit-etsy-buyer-research", label: "Buyer Research" },
              { title: "What Etsy Buyers Actually Want: 7 Insights from 10,000 Reviews", href: "/blog/what-etsy-buyers-want", label: "Buyer Research" },
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
              headline: "How to Do Audience Research for Your Etsy Shop",
              author: { "@type": "Organization", name: "Claro" },
              publisher: { "@type": "Organization", name: "Claro", url: "https://meetclaro.ai" },
              datePublished: "2026-04-15",
              description: "A practical, step-by-step guide to Etsy shop audience research — using methods that work even if you have no sales yet.",
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
