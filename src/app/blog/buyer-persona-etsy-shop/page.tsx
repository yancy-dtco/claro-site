import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How to Build a Buyer Persona for Your Etsy Shop (Free Template) — Claro",
  description: "Most Etsy sellers have never formally defined who buys from them. Here's a step-by-step process — and the free template we wish existed when we started.",
  openGraph: {
    title: "How to Build a Buyer Persona for Your Etsy Shop (Free Template)",
    description: "Most Etsy sellers have never formally defined who buys from them. Here's a step-by-step process — and the free template we wish existed when we started.",
    type: "article",
  },
};

const faqs = [
  {
    q: "What is a buyer persona for an Etsy shop?",
    a: "A buyer persona for an Etsy shop is a detailed profile of your ideal customer — who they are, what motivates them to buy, what language they use, and what stops them from purchasing. Unlike a target market (broad demographic), a buyer persona is specific enough to write your listings, captions, and emails as if you're talking to one real person.",
  },
  {
    q: "How do you find out who buys from your Etsy shop?",
    a: "The most direct sources are your own review section, Reddit communities like r/EtsySellers and r/Etsy, and cross-platform reviews for your product category. Look for the words buyers use to describe what they bought, why they bought it, and what they were searching for before they found you.",
  },
  {
    q: "Does Etsy give you buyer data?",
    a: "Etsy's Shop Stats show traffic sources, views, and conversion rates, but they don't tell you who your buyers are or why they buy. For that, you need to analyze buyer language directly — through your own reviews, community forums, and signals outside of Etsy.",
  },
  {
    q: "How often should I update my buyer persona?",
    a: "At minimum, twice a year. Buyer language, motivations, and search behavior shift over time — especially in trend-sensitive categories. If you're running Claro, your signals refresh monthly automatically.",
  },
  {
    q: "Can I have more than one buyer persona for my Etsy shop?",
    a: "Yes, but start with one. Most shops have a primary buyer type that drives 70-80% of sales. Define that person first, optimize everything for her, then layer in secondary personas. Trying to speak to three buyers at once usually means speaking clearly to none of them.",
  },
];

export default function BuyerPersonaPost() {
  return (
    <>
      <Nav />
      <main style={{ background: "var(--warm-white)" }}>

        {/* Article header */}
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
              How to Build a Buyer Persona for Your Etsy Shop
            </h1>
            <p style={{ fontSize: "11px", fontFamily: "Inter, system-ui, sans-serif", color: "var(--horizon)", marginBottom: "8px", letterSpacing: "0.05em" }}>
              By <a href="/about" style={{ color: "var(--cobalt)" }}>the Claro team</a>
            </p>

            <p style={{ fontSize: "20px", color: "var(--ink)", lineHeight: 1.7, marginTop: "32px", marginBottom: "0" }}>
              Most Etsy sellers have never formally defined who buys from them. They have a feeling — &ldquo;women, probably 30s, into home decor&rdquo; — but not a picture. Not a voice. Not a reason.
            </p>
          </div>
        </section>

        {/* Article body */}
        <article style={{ padding: "48px 40px 96px", maxWidth: "740px", margin: "0 auto" }}>

          <p style={{ fontSize: "17px", color: "var(--ink)", lineHeight: 1.8, marginBottom: "24px" }}>
            That gap — between &ldquo;I have a sense of who this is for&rdquo; and &ldquo;I know exactly who this is for&rdquo; — is where most shops bleed. Listings that don&rsquo;t convert. Content that gets ignored. Emails that get deleted. Not because the product is wrong. Because the language is wrong.
          </p>

          <p style={{ fontSize: "17px", color: "var(--ink)", lineHeight: 1.8, marginBottom: "48px" }}>
            A buyer persona fixes this. Here&rsquo;s how to build one — with the specific sources and methods that actually work for Etsy sellers.
          </p>

          {/* Section 1 */}
          <h2 style={{ fontSize: "32px", marginBottom: "20px", marginTop: "64px" }}>What a buyer persona actually is (and isn&rsquo;t)</h2>
          <p style={{ fontSize: "17px", color: "var(--ink)", lineHeight: 1.8, marginBottom: "20px" }}>
            A buyer persona is not a demographic profile. &ldquo;Women, 25–45, household income $50–80K, interested in home decor&rdquo; is a target market. That&rsquo;s useful for ad targeting. It&rsquo;s not useful for writing.
          </p>
          <p style={{ fontSize: "17px", color: "var(--ink)", lineHeight: 1.8, marginBottom: "20px" }}>
            A buyer persona is a portrait of a real decision. It answers: <em>why does this specific person buy this specific thing from a shop like mine?</em>
          </p>

          <div style={{ background: "var(--ice)", border: "1px solid var(--sky)", borderRadius: "12px", padding: "28px 32px", margin: "32px 0" }}>
            <p style={{ fontSize: "15px", fontFamily: "Inter, system-ui, sans-serif", fontWeight: 600, color: "var(--cobalt)", marginBottom: "12px" }}>A useful buyer persona answers:</p>
            <ul style={{ margin: 0, padding: "0 0 0 20px", display: "flex", flexDirection: "column", gap: "8px" }}>
              {[
                "What triggered the search? (What were they looking for before they found you?)",
                "What words did they use? (Specifically — not 'quality' but 'non-toxic' or 'heirloom quality')",
                "What were they afraid of? (Arriving damaged, looking cheap, not matching the photo)",
                "What finally made them buy? (The reviews, the photos, the shop story, the price?)",
                "Who were they buying for? (Themselves, a gift, a specific occasion?)",
              ].map((item) => (
                <li key={item} style={{ fontSize: "16px", color: "var(--ink)", lineHeight: 1.6 }}>{item}</li>
              ))}
            </ul>
          </div>

          <p style={{ fontSize: "17px", color: "var(--ink)", lineHeight: 1.8, marginBottom: "48px" }}>
            When you know these answers, every word you write becomes easier. Your listing title uses their search language. Your photos address their fears. Your copy speaks to their reasons for buying, not the features you&rsquo;re proud of.
          </p>

          {/* Section 2 */}
          <h2 style={{ fontSize: "32px", marginBottom: "20px", marginTop: "64px" }}>Where to find your actual buyer (5 sources)</h2>
          <p style={{ fontSize: "17px", color: "var(--ink)", lineHeight: 1.8, marginBottom: "32px" }}>
            You don&rsquo;t need a survey. Your buyers are already telling you everything you need to know. You just need to know where to look.
          </p>

          {[
            {
              num: "1",
              title: "Your own reviews",
              body: "Start here. Read every review you&rsquo;ve received, especially the 5-star ones. Don&rsquo;t look for praise — look for language. What words do they use? What do they mention first? What did they buy it for? A buyer who writes 'perfect for my daughter&rsquo;s teacher gift' is telling you: gift-giver, specific occasion, thoughtfulness matters more than the object. That&rsquo;s a persona.",
            },
            {
              num: "2",
              title: "Your competitors&rsquo; reviews",
              body: "Look at the 3-star and 4-star reviews on similar shops. This is where buyers say what they wanted but didn&rsquo;t quite get. 'Would have been perfect if...' 'Loved it but...' — these are your competitive openings, stated in buyer language.",
            },
            {
              num: "3",
              title: "Reddit (r/EtsySellers and r/Etsy)",
              body: "r/EtsySellers has 200,000+ members who talk about what they sell, what converts, and what buyers say. r/Etsy has 1M+ members, many of whom are buyers. Search your product category and read the threads. The language buyers use to describe what they want — and what they hate about bad sellers — is pure gold.",
            },
            {
              num: "4",
              title: "Amazon reviews for your category",
              body: "This feels counterintuitive, but Amazon buyers are often the same people who buy on Etsy — and they write longer, more detailed reviews. Search your product category on Amazon, filter to 4 and 5 stars, and read the most helpful reviews. You'll find the vocabulary your buyers use even before they reach Etsy.",
            },
            {
              num: "5",
              title: "Your own conversations",
              body: "Check your Etsy messages. The questions buyers ask before they purchase are a direct window into their fears and decision process. If five buyers have asked 'can this ship in time for [date]?' — urgency and gift deadlines are a dominant trigger for your buyer.",
            },
          ].map((s) => (
            <div key={s.num} style={{ marginBottom: "40px" }}>
              <h3 style={{ fontSize: "24px", marginBottom: "12px", color: "var(--midnight)" }}>{s.num}. {s.title}</h3>
              <p style={{ fontSize: "17px", color: "var(--ink)", lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: s.body }} />
            </div>
          ))}

          {/* Section 3 */}
          <h2 style={{ fontSize: "32px", marginBottom: "20px", marginTop: "64px" }}>How to build the persona (step by step)</h2>

          <p style={{ fontSize: "17px", color: "var(--ink)", lineHeight: 1.8, marginBottom: "32px" }}>
            Spend 2–3 hours on this. Block it off. Here&rsquo;s the exact process.
          </p>

          {[
            {
              step: "Step 1: Read and highlight",
              body: "Go through 50–100 reviews (yours and competitors&rsquo;). Highlight every phrase that describes: (a) a reason for buying, (b) a fear or concern, (c) who the buyer is, or (d) what they&rsquo;ll do with the product.",
            },
            {
              step: "Step 2: Find the clusters",
              body: "Group your highlights into themes. You&rsquo;ll see 4–6 themes emerge — gift-giving occasions, quality concerns, specific use cases, emotional outcomes. Each cluster is a real signal about your buyer.",
            },
            {
              step: "Step 3: Draft the profile",
              body: "Write a one-paragraph description of your buyer using the language from your research. Not your language — their language. If they said 'non-toxic,' write 'non-toxic,' not 'clean ingredients.' If they said 'my daughter&rsquo;s teacher,' write that.",
            },
            {
              step: "Step 4: Add the triggers and barriers",
              body: "List 3–5 things that make this person buy (triggers) and 3–5 things that stop them (barriers). These go directly into your listing copy and FAQ section.",
            },
            {
              step: "Step 5: Name her",
              body: "Give your buyer a name. 'Sarah, the intentional gift-giver' is easier to write for than 'Target Customer Segment A.' This sounds soft. It isn&rsquo;t. It makes every copy decision faster.",
            },
          ].map((s, i) => (
            <div key={i} style={{ marginBottom: "32px", paddingLeft: "24px", borderLeft: "3px solid var(--cobalt)" }}>
              <h4 style={{ fontSize: "20px", marginBottom: "10px", color: "var(--midnight)" }}>{s.step}</h4>
              <p style={{ fontSize: "16px", color: "var(--ink)", lineHeight: 1.7 }}>{s.body}</p>
            </div>
          ))}

          {/* Before/after example */}
          <h2 style={{ fontSize: "32px", marginBottom: "20px", marginTop: "64px" }}>What it looks like in practice</h2>
          <p style={{ fontSize: "17px", color: "var(--ink)", lineHeight: 1.8, marginBottom: "32px" }}>
            Here&rsquo;s the difference between writing without a buyer persona and writing with one. Same product, same listing slot. Different language.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "20px", margin: "32px 0 48px" }}>
            <div style={{ background: "var(--ice)", borderRadius: "12px", padding: "28px", borderTop: "3px solid #c0392b" }}>
              <p style={{ fontSize: "11px", fontFamily: "Inter, system-ui, sans-serif", fontWeight: 700, color: "#e57373", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "16px" }}>
                Without persona
              </p>
              <p style={{ fontSize: "16px", color: "var(--ink)", lineHeight: 1.7, fontStyle: "italic" }}>
                &ldquo;Handmade soy candle, 8oz, made with premium fragrance oils. Great for your home.&rdquo;
              </p>
            </div>
            <div style={{ background: "var(--cobalt)", borderRadius: "12px", padding: "28px", borderTop: "3px solid var(--gold)" }}>
              <p style={{ fontSize: "11px", fontFamily: "Inter, system-ui, sans-serif", fontWeight: 700, color: "var(--gold)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "16px" }}>
                With persona
              </p>
              <p style={{ fontSize: "16px", color: "var(--warm-white)", lineHeight: 1.7 }}>
                &ldquo;Non-toxic soy candle, 8oz — phthalate-free fragrance, clean burn. The thoughtful gift that doesn&rsquo;t smell like everyone else&rsquo;s candle.&rdquo;
              </p>
            </div>
          </div>

          <p style={{ fontSize: "17px", color: "var(--ink)", lineHeight: 1.8, marginBottom: "48px" }}>
            The second version uses the buyer&rsquo;s actual search terms (&ldquo;non-toxic,&rdquo; &ldquo;phthalate-free&rdquo;) and speaks to her actual desire (gift that feels intentional, not generic). This isn&rsquo;t better copywriting. It&rsquo;s the output of better research.
          </p>

          {/* Free template CTA */}
          <div style={{ background: "var(--cobalt)", borderRadius: "16px", padding: "40px", margin: "64px 0", textAlign: "center" }}>
            <h3 style={{ fontSize: "28px", color: "var(--warm-white)", marginBottom: "16px" }}>
              Free buyer persona template
            </h3>
            <p style={{ fontSize: "16px", color: "var(--sky)", marginBottom: "28px", lineHeight: 1.6 }}>
              The exact template we use to build buyer personas. Fillable, section-by-section, with prompts for every field. Enter your email and we&rsquo;ll send it directly.
            </p>
            <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
              <input
                type="email"
                placeholder="your@email.com"
                style={{
                  padding: "13px 18px",
                  background: "rgba(232,241,250,0.15)",
                  border: "1px solid rgba(168,197,232,0.4)",
                  borderRadius: "8px",
                  fontSize: "15px",
                  fontFamily: "Inter, system-ui, sans-serif",
                  color: "var(--warm-white)",
                  width: "260px",
                  outline: "none",
                }}
              />
              <button style={{ padding: "13px 24px", background: "var(--gold)", color: "var(--midnight)", borderRadius: "8px", fontSize: "15px", fontFamily: "Inter, system-ui, sans-serif", fontWeight: 700 }}>
                Send me the template →
              </button>
            </div>
          </div>

          {/* Section 4 */}
          <h2 style={{ fontSize: "32px", marginBottom: "20px", marginTop: "64px" }}>How to use your buyer persona once you have it</h2>
          <p style={{ fontSize: "17px", color: "var(--ink)", lineHeight: 1.8, marginBottom: "32px" }}>
            A persona that lives in a Google Doc and never gets used is a waste of the work you just did. Here&rsquo;s where it goes.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginBottom: "48px" }}>
            {[
              { label: "Listing titles", text: "Use their search vocabulary. If they search 'non-toxic soy candle for gift,' that phrase belongs in your title." },
              { label: "Listing descriptions", text: "Open with their trigger, not your product feature. If they're buying for a gift deadline, address that in line one." },
              { label: "Photos", text: "Show the product in their context. If your buyer is a gift-giver, show the product in a gift context. If she&rsquo;s buying for herself, show it in her home." },
              { label: "Social content", text: "Write the captions your buyer would actually stop scrolling for. Every post angle should connect to a trigger or barrier you found in research." },
              { label: "Emails", text: "Subject lines that use buyer language open. 'Perfect for teacher gifts' outperforms 'New arrivals from our shop' every single time." },
            ].map((item) => (
              <div key={item.label} style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
                <span style={{ background: "var(--cobalt)", color: "var(--warm-white)", fontSize: "12px", fontFamily: "Inter, system-ui, sans-serif", fontWeight: 600, padding: "3px 10px", borderRadius: "6px", whiteSpace: "nowrap", flexShrink: 0, marginTop: "3px" }}>
                  {item.label}
                </span>
                <p style={{ fontSize: "16px", color: "var(--ink)", lineHeight: 1.6 }}>{item.text}</p>
              </div>
            ))}
          </div>

          {/* Claro plug */}
          <div style={{ background: "var(--midnight)", borderRadius: "16px", padding: "40px", margin: "64px 0" }}>
            <p style={{ fontSize: "11px", fontFamily: "Inter, system-ui, sans-serif", fontWeight: 600, color: "var(--horizon)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "16px" }}>
              The faster way
            </p>
            <h3 style={{ fontSize: "26px", color: "var(--warm-white)", marginBottom: "16px" }}>
              Skip the manual work.
            </h3>
            <p style={{ fontSize: "16px", color: "var(--sky)", lineHeight: 1.7, marginBottom: "24px" }}>
              Everything in this guide is what Claro does automatically — in two minutes. Enter your shop URL, Claro scans the signals across reviews, Reddit, and community forums, and returns a structured buyer profile with exact vocabulary, purchase triggers, and 10 content angles.
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

          {/* FAQ Section */}
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
              { title: "How to Write Etsy Listings That Convert", href: "/blog/etsy-listing-copy-buyer-language", label: "Etsy Growth" },
              { title: "How Claro Works", href: "/how-it-works", label: "Product" },
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
              headline: "How to Build a Buyer Persona for Your Etsy Shop (Free Template)",
              author: { "@type": "Organization", name: "Claro" },
              publisher: { "@type": "Organization", name: "Claro", url: "https://meetclaro.ai" },
              datePublished: "2026-04-14",
              description: "Most Etsy sellers have never formally defined who buys from them. Here's a step-by-step process — and the free template we wish existed when we started.",
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
