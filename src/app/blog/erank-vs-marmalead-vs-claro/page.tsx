import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "eRank vs Marmalead vs Claro: What's the Difference? — Claro",
  description: "eRank vs Marmalead is a common comparison for Etsy sellers. But Claro does something different entirely. Here's an honest breakdown of all three tools — what they do, what they don't, and which one is right for you.",
  openGraph: {
    title: "eRank vs Marmalead vs Claro: What's the Difference?",
    description: "eRank vs Marmalead is a common comparison for Etsy sellers. But Claro does something different entirely. Here's an honest breakdown of all three tools — what they do, what they don't, and which one is right for you.",
    type: "article",
  },
};

const faqs = [
  {
    q: "What is the main difference between eRank and Marmalead?",
    a: "Both eRank and Marmalead are Etsy keyword research and SEO tools. The primary difference is price and depth: eRank has a more generous free tier and broader feature set at lower price points, while Marmalead focuses more narrowly on keyword research with deeper trend data. Both are designed to help you find what keywords to use — neither tells you who your buyer is or why they buy.",
  },
  {
    q: "Is Claro a competitor to eRank and Marmalead?",
    a: "Not directly. eRank and Marmalead are SEO and keyword tools — they help you optimize what Etsy's search algorithm sees. Claro is a buyer intelligence tool — it helps you understand who your buyers are, what motivates them, and how to speak to them. Many sellers use keyword tools alongside Claro: keywords get traffic, buyer intelligence converts it.",
  },
  {
    q: "Can I use eRank or Marmalead and Claro together?",
    a: "Yes — and this is actually the recommended approach for serious Etsy sellers. Use eRank or Marmalead to identify high-volume keywords and optimize your listings for search. Use Claro to understand your buyers deeply enough to convert those searchers into customers. The two workflows complement each other rather than overlap.",
  },
  {
    q: "Does Claro do keyword research?",
    a: "No. Claro doesn't do keyword research — that's intentional. Keyword research is a solved problem with good tools already built for it. Claro focuses on the gap those tools leave: buyer psychology, purchase motivations, emotional triggers, and the brand voice that resonates with your specific audience.",
  },
  {
    q: "Which tool is best for a new Etsy seller?",
    a: "It depends on your biggest constraint. If you're getting no traffic, start with eRank (free tier) to identify keywords that can get your listings found. If you're getting traffic but not converting, start with Claro — the free tier gives you a full buyer profile and content angles that can immediately improve your listings.",
  },
];

const tableRows = [
  { feature: "Keyword research", erank: "✓", marmalead: "✓", claro: "✗" },
  { feature: "Search trend data", erank: "✓", marmalead: "✓", claro: "✗" },
  { feature: "Listing SEO audit", erank: "✓", marmalead: "✓", claro: "✗" },
  { feature: "Buyer psychographic profile", erank: "✗", marmalead: "✗", claro: "✓" },
  { feature: "Purchase triggers & barriers", erank: "✗", marmalead: "✗", claro: "✓" },
  { feature: "Buyer vocabulary guide", erank: "✗", marmalead: "✗", claro: "✓" },
  { feature: "Brand voice guide", erank: "✗", marmalead: "✗", claro: "✓ (T2+)" },
  { feature: "Content angles", erank: "✗", marmalead: "✗", claro: "✓" },
  { feature: "Listing rewrites", erank: "✗", marmalead: "✗", claro: "✓ (T3)" },
  { feature: "Price", erank: "$9–30/mo", marmalead: "$19/mo", claro: "Free–$149/mo" },
];

export default function ERankVsMarmalead() {
  return (
    <>
      <Nav />
      <main style={{ background: "var(--warm-white)" }}>

        {/* Article header */}
        <section style={{ paddingTop: "100px", paddingBottom: "0", padding: "100px 40px 0" }}>
          <div style={{ maxWidth: "740px", margin: "0 auto" }}>
            <div style={{ display: "flex", gap: "12px", alignItems: "center", marginBottom: "24px", flexWrap: "wrap" }}>
              <span style={{ fontSize: "12px", fontFamily: "Inter, system-ui, sans-serif", fontWeight: 600, color: "var(--cobalt)", background: "rgba(44,82,130,0.1)", padding: "4px 12px", borderRadius: "12px" }}>
                AI &amp; Tools
              </span>
              <span style={{ fontSize: "13px", color: "var(--horizon)", fontFamily: "Inter, system-ui, sans-serif" }}>
                8 min read · April 2026
              </span>
            </div>

            <h1 style={{ fontSize: "clamp(36px, 5vw, 56px)", lineHeight: 1.1, marginBottom: "24px" }}>
              eRank vs Marmalead vs Claro: What&rsquo;s the Difference?
            </h1>
            <p style={{ fontSize: "11px", fontFamily: "Inter, system-ui, sans-serif", color: "var(--horizon)", marginBottom: "8px", letterSpacing: "0.05em" }}>
              By <a href="/about" style={{ color: "var(--cobalt)" }}>the Claro team</a>
            </p>

            <p style={{ fontSize: "20px", color: "var(--ink)", lineHeight: 1.7, marginTop: "32px", marginBottom: "0" }}>
              If you&rsquo;ve been searching for Etsy seller tools, you&rsquo;ve seen the eRank vs Marmalead debate everywhere. But the honest answer is: comparing those two to Claro is comparing the wrong things. They solve different problems entirely.
            </p>
          </div>
        </section>

        {/* Article body */}
        <article style={{ padding: "48px 40px 96px", maxWidth: "740px", margin: "0 auto" }}>

          <p style={{ fontSize: "17px", color: "var(--ink)", lineHeight: 1.8, marginBottom: "24px" }}>
            eRank and Marmalead are both excellent tools. They help you answer: <em>what keywords should I use so Etsy&rsquo;s algorithm finds my listings?</em> That&rsquo;s a real and important question.
          </p>

          <p style={{ fontSize: "17px", color: "var(--ink)", lineHeight: 1.8, marginBottom: "48px" }}>
            Claro answers a different question: <em>who is my buyer, why do they buy, and what language makes them convert?</em> These tools aren&rsquo;t substitutes for each other. They address different layers of the same growth problem. Here&rsquo;s an honest breakdown of all three.
          </p>

          {/* eRank section */}
          <h2 style={{ fontSize: "32px", marginBottom: "20px", marginTop: "64px" }}>What eRank does</h2>
          <p style={{ fontSize: "17px", color: "var(--ink)", lineHeight: 1.8, marginBottom: "20px" }}>
            eRank is Etsy&rsquo;s most widely used third-party analytics and SEO tool. Its core function is keyword research: given a product or category, eRank shows you which search terms have high volume and manageable competition on Etsy. It also offers:
          </p>
          <ul style={{ margin: "0 0 24px", padding: "0 0 0 24px", display: "flex", flexDirection: "column", gap: "10px" }}>
            {[
              "Listing audits — grade your listings against SEO best practices",
              "Trend tracking — see how keyword demand changes month to month",
              "Competitor analysis — view top tags and keywords from competitor shops",
              "Rank tracking — monitor where your listings appear in search results",
              "Shop dashboard — overview of your shop health metrics",
            ].map((item, i) => (
              <li key={i} style={{ fontSize: "17px", color: "var(--ink)", lineHeight: 1.7 }}>{item}</li>
            ))}
          </ul>
          <p style={{ fontSize: "17px", color: "var(--ink)", lineHeight: 1.8, marginBottom: "48px" }}>
            eRank&rsquo;s free tier is genuinely useful — one of the more generous free plans in the space. Paid tiers ($9–30/month) unlock deeper keyword data and more listings per analysis.
          </p>

          {/* Marmalead section */}
          <h2 style={{ fontSize: "32px", marginBottom: "20px", marginTop: "64px" }}>What Marmalead does</h2>
          <p style={{ fontSize: "17px", color: "var(--ink)", lineHeight: 1.8, marginBottom: "20px" }}>
            Marmalead is also an Etsy keyword and SEO tool, with a tighter focus than eRank. It&rsquo;s built specifically around keyword research and listing optimization. Key features include:
          </p>
          <ul style={{ margin: "0 0 24px", padding: "0 0 0 24px", display: "flex", flexDirection: "column", gap: "10px" }}>
            {[
              "Keyword comparison — compare multiple keywords head to head",
              "Engagement data — see estimated search engagement, not just volume",
              "Seasonality trends — identify when demand for your keywords peaks",
              "Grade & optimize — score your listings and suggest improvements",
            ].map((item, i) => (
              <li key={i} style={{ fontSize: "17px", color: "var(--ink)", lineHeight: 1.7 }}>{item}</li>
            ))}
          </ul>
          <p style={{ fontSize: "17px", color: "var(--ink)", lineHeight: 1.8, marginBottom: "48px" }}>
            Marmalead is priced at $19/month with no free tier. Many sellers prefer its interface for deep keyword research sessions. The trade-off is fewer ancillary features compared to eRank&rsquo;s broader dashboard.
          </p>

          {/* Claro section */}
          <h2 style={{ fontSize: "32px", marginBottom: "20px", marginTop: "64px" }}>What Claro does (and why it&rsquo;s different)</h2>
          <p style={{ fontSize: "17px", color: "var(--ink)", lineHeight: 1.8, marginBottom: "20px" }}>
            Claro is not a keyword tool. It doesn&rsquo;t grade your listings against Etsy&rsquo;s algorithm. It won&rsquo;t tell you that &ldquo;boho wall art&rdquo; has 12,000 monthly searches.
          </p>
          <p style={{ fontSize: "17px", color: "var(--ink)", lineHeight: 1.8, marginBottom: "20px" }}>
            What Claro does: it analyzes your buyers — through reviews, community forums, and behavioral signals — to build a complete psychological profile of who buys from you and why. The output includes:
          </p>

          <div style={{ background: "var(--ice)", borderLeft: "4px solid var(--cobalt)", borderRadius: "0 12px 12px 0", padding: "24px 28px", margin: "32px 0" }}>
            <p style={{ fontSize: "15px", fontFamily: "Inter, system-ui, sans-serif", fontWeight: 600, color: "var(--cobalt)", marginBottom: "10px" }}>What a Claro report contains</p>
            <ul style={{ margin: 0, padding: "0 0 0 20px", display: "flex", flexDirection: "column", gap: "8px" }}>
              {[
                "Buyer vocabulary — the exact words and phrases your buyers use",
                "Purchase triggers — what makes them decide to buy",
                "Purchase barriers — what stops them from buying",
                "Psychographic profile — values, identity, lifestyle context",
                "10 content angles — ready-to-use ideas for listings, social, and email",
                "Brand voice guide (T2+) — tone, vocabulary, and messaging principles",
                "Listing rewrites (T3) — your actual listings rewritten in buyer language",
              ].map((item, i) => (
                <li key={i} style={{ fontSize: "16px", color: "var(--ink)", lineHeight: 1.6 }}>{item}</li>
              ))}
            </ul>
          </div>

          <p style={{ fontSize: "17px", color: "var(--ink)", lineHeight: 1.8, marginBottom: "48px" }}>
            The insight is different in kind, not just degree. eRank tells you &ldquo;use the keyword &lsquo;personalized gift&rsquo;.&rdquo; Claro tells you &ldquo;your buyer is a 35-year-old woman buying for her mother, who describes what she wants as thoughtful and non-generic — here&rsquo;s how to write for her.&rdquo;
          </p>

          {/* Comparison table */}
          <h2 style={{ fontSize: "32px", marginBottom: "24px", marginTop: "64px" }}>Feature comparison</h2>
          <p style={{ fontSize: "17px", color: "var(--ink)", lineHeight: 1.8, marginBottom: "32px" }}>
            Here&rsquo;s a direct comparison of what each tool covers. Notice that the overlap is minimal — these tools address different parts of the growth picture.
          </p>

          <div style={{ overflowX: "auto", margin: "0 0 48px" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontFamily: "Inter, system-ui, sans-serif", fontSize: "15px" }}>
              <thead>
                <tr style={{ borderBottom: "2px solid var(--cobalt)" }}>
                  <th style={{ textAlign: "left", padding: "12px 16px", color: "var(--midnight)", fontWeight: 700 }}>Feature</th>
                  <th style={{ textAlign: "center", padding: "12px 16px", color: "var(--midnight)", fontWeight: 700 }}>eRank</th>
                  <th style={{ textAlign: "center", padding: "12px 16px", color: "var(--midnight)", fontWeight: 700 }}>Marmalead</th>
                  <th style={{ textAlign: "center", padding: "12px 16px", color: "var(--cobalt)", fontWeight: 700 }}>Claro</th>
                </tr>
              </thead>
              <tbody>
                {tableRows.map((row, i) => (
                  <tr key={i} style={{ borderBottom: "1px solid var(--sky)", background: i % 2 === 0 ? "transparent" : "rgba(232,241,250,0.3)" }}>
                    <td style={{ padding: "13px 16px", color: "var(--ink)", fontWeight: row.feature === "Price" ? 600 : 400 }}>{row.feature}</td>
                    <td style={{ padding: "13px 16px", textAlign: "center", color: row.erank === "✓" ? "#2d7a2d" : row.erank === "✗" ? "#999" : "var(--ink)" }}>{row.erank}</td>
                    <td style={{ padding: "13px 16px", textAlign: "center", color: row.marmalead === "✓" ? "#2d7a2d" : row.marmalead === "✗" ? "#999" : "var(--ink)" }}>{row.marmalead}</td>
                    <td style={{ padding: "13px 16px", textAlign: "center", color: row.claro.startsWith("✓") ? "var(--cobalt)" : row.claro === "✗" ? "#999" : "var(--midnight)", fontWeight: row.claro.startsWith("✓") ? 600 : 400 }}>{row.claro}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Before/after */}
          <h2 style={{ fontSize: "32px", marginBottom: "20px", marginTop: "64px" }}>The traffic vs. conversion problem</h2>
          <p style={{ fontSize: "17px", color: "var(--ink)", lineHeight: 1.8, marginBottom: "32px" }}>
            Here&rsquo;s the clearest way to understand which tool solves which problem:
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "20px", margin: "32px 0 48px" }}>
            <div style={{ background: "var(--ice)", borderRadius: "12px", padding: "28px", borderTop: "3px solid var(--cobalt)" }}>
              <p style={{ fontSize: "13px", fontFamily: "Inter, system-ui, sans-serif", fontWeight: 700, color: "var(--cobalt)", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "16px" }}>
                Traffic problem → eRank or Marmalead
              </p>
              <p style={{ fontSize: "15px", color: "var(--ink)", lineHeight: 1.7 }}>
                &ldquo;My listings aren&rsquo;t getting found. I need to know which keywords to use and how to rank higher in Etsy search.&rdquo;
              </p>
            </div>
            <div style={{ background: "var(--cobalt)", borderRadius: "12px", padding: "28px", borderTop: "3px solid var(--gold)" }}>
              <p style={{ fontSize: "13px", fontFamily: "Inter, system-ui, sans-serif", fontWeight: 700, color: "var(--gold)", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "16px" }}>
                Conversion problem → Claro
              </p>
              <p style={{ fontSize: "15px", color: "var(--warm-white)", lineHeight: 1.7 }}>
                &ldquo;My listings get traffic but visitors don&rsquo;t buy. I need to understand my buyer deeply enough to write listings that convert.&rdquo;
              </p>
            </div>
          </div>

          {/* Section: who should use what */}
          <h2 style={{ fontSize: "32px", marginBottom: "20px", marginTop: "64px" }}>Which tool is right for you?</h2>

          {[
            {
              profile: "New seller, no traffic yet",
              rec: "Start with eRank&rsquo;s free tier. Get your listings optimized for search before worrying about conversion. Once you have consistent traffic (100+ views/week), layer in Claro to improve what you do with that traffic.",
            },
            {
              profile: "Established seller, good traffic, low conversion",
              rec: "This is Claro&rsquo;s core use case. If people are finding your listings but not buying, the problem is usually messaging — not keywords. Claro identifies exactly why buyers hesitate and what language converts them.",
            },
            {
              profile: "High-volume seller optimizing at scale",
              rec: "Use all three. eRank or Marmalead for ongoing keyword tracking. Claro for quarterly buyer intelligence refreshes and new product launches. The combination gives you both search visibility and conversion depth.",
            },
            {
              profile: "Seller launching a new product line",
              rec: "Run Claro first to understand who your buyer is and what they want. Use that insight to inform your keyword research in eRank or Marmalead. Starting with buyer intelligence makes your keyword strategy more precise.",
            },
          ].map((s, i) => (
            <div key={i} style={{ marginBottom: "32px", paddingLeft: "24px", borderLeft: "3px solid var(--cobalt)" }}>
              <h4 style={{ fontSize: "20px", marginBottom: "10px", color: "var(--midnight)" }}>{s.profile}</h4>
              <p style={{ fontSize: "16px", color: "var(--ink)", lineHeight: 1.7 }} dangerouslySetInnerHTML={{ __html: s.rec }} />
            </div>
          ))}

          {/* Claro plug */}
          <div style={{ background: "var(--midnight)", borderRadius: "16px", padding: "40px", margin: "64px 0" }}>
            <p style={{ fontSize: "11px", fontFamily: "Inter, system-ui, sans-serif", fontWeight: 600, color: "var(--horizon)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "16px" }}>
              Try Claro free
            </p>
            <h3 style={{ fontSize: "26px", color: "var(--warm-white)", marginBottom: "16px" }}>
              Get your buyer profile in 2 minutes.
            </h3>
            <p style={{ fontSize: "16px", color: "var(--sky)", lineHeight: 1.7, marginBottom: "24px" }}>
              No credit card required. Enter your Etsy shop URL and Claro returns a complete buyer intelligence report — psychographic profile, purchase triggers, buyer vocabulary, and 10 content angles. Free tier, always.
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

          {/* FAQ */}
          <h2 style={{ fontSize: "32px", marginBottom: "32px", marginTop: "64px" }}>Frequently asked questions</h2>
          <div style={{ display: "flex", flexDirection: "column" }}>
            {faqs.map((faq, i) => (
              <div key={i} style={{ borderTop: "1px solid var(--sky)", padding: "24px 0" }}>
                <h3 style={{ fontSize: "20px", marginBottom: "12px", color: "var(--midnight)" }}>{faq.q}</h3>
                <p style={{ fontSize: "16px", color: "var(--ink)", lineHeight: 1.7 }}>{faq.a}</p>
              </div>
            ))}
            <div style={{ borderTop: "1px solid var(--sky)" }} />
          </div>

          {/* Related reading */}
          <h2 style={{ fontSize: "28px", marginBottom: "24px", marginTop: "64px" }}>Related reading</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {[
              { title: "How AI Can Help You Understand Your Etsy Buyers", href: "/blog/ai-etsy-buyer-research", label: "AI & Tools" },
              { title: "What Is Buyer Intelligence?", href: "/blog/what-is-buyer-intelligence", label: "AI & Tools" },
              { title: "How to Build a Buyer Persona for Your Etsy Shop", href: "/blog/buyer-persona-etsy-shop", label: "Buyer Research" },
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

        {/* JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              headline: "eRank vs Marmalead vs Claro: What's the Difference?",
              author: { "@type": "Organization", name: "Claro" },
              publisher: { "@type": "Organization", name: "Claro", url: "https://meetclaro.ai" },
              datePublished: "2026-04-15",
              description: "eRank vs Marmalead is a common comparison for Etsy sellers. But Claro does something different entirely. Here's an honest breakdown of all three tools.",
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
