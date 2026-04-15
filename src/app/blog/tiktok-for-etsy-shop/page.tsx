import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "What to Post on TikTok for Your Etsy Shop (With Examples) — Claro",
  description: "TikTok has made Etsy shops overnight successes and built six-figure businesses. Here's what actually works — with specific content types and real examples.",
  openGraph: {
    title: "What to Post on TikTok for Your Etsy Shop (With Examples)",
    description: "TikTok has made Etsy shops overnight successes. Here's what actually works — specific content types, real examples, and the TikTok-to-Etsy conversion path.",
    type: "article",
  },
};

const faqs = [
  {
    q: "Can TikTok really drive sales to an Etsy shop?",
    a: "Yes — and the results can be dramatic. TikTok&rsquo;s algorithm is uniquely powerful for discoverability: a video from a brand-new account with zero followers can reach hundreds of thousands of people if the content is right. Etsy shops have gone from zero to waitlisted overnight from a single viral video. The key is converting discovery to purchase — which requires a clear path (bio link, link in video, direct to Etsy).",
  },
  {
    q: "What kind of TikTok content works for Etsy sellers?",
    a: "The highest-performing TikTok content for Etsy sellers is process content (making the product in real time), packing orders (oddly satisfying and shows demand), and product reveals (the unwrapping or transformation moment). Educational content about your materials or craft also performs well. Pure product shots without story or process rarely perform on TikTok.",
  },
  {
    q: "How often do I need to post on TikTok for it to work?",
    a: "TikTok rewards consistency and frequency more than any other platform. 3-5 videos per week is the minimum for meaningful growth. The good news: TikTok content doesn&rsquo;t need to be highly produced. A 15-second clip of you pouring candles, filmed vertically on your phone with a trending sound, can outperform a polished production.",
  },
  {
    q: "What&rsquo;s the best way to link my Etsy shop on TikTok?",
    a: "TikTok allows a single link in your bio. Use a link-in-bio tool (Linktree, Later, or Shopify&rsquo;s free option) to link to multiple listings or directly to your Etsy shop. In video descriptions, you can mention &ldquo;link in bio&rdquo; or use TikTok Shop if you&rsquo;re eligible. For high-demand items, DM-to-order also works well.",
  },
  {
    q: "Is TikTok worth it if I&rsquo;m not comfortable on camera?",
    a: "Absolutely. Some of the best-performing Etsy seller TikToks show only hands, the workspace, and the product — no face required. Process videos, packing videos, and product reveals can be filmed without ever appearing on camera. Voice-over narration adds personality if you want it without requiring on-camera presence.",
  },
];

export default function TiktokForEtsyShopPost() {
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
              What to Post on TikTok for Your Etsy Shop (With Examples)
            </h1>
            <p style={{ fontSize: "11px", fontFamily: "Inter, system-ui, sans-serif", color: "var(--horizon)", marginBottom: "8px", letterSpacing: "0.05em" }}>
              By <a href="/about" style={{ color: "var(--cobalt)" }}>the Claro team</a>
            </p>
            <p style={{ fontSize: "20px", color: "var(--ink)", lineHeight: 1.7, marginTop: "32px", marginBottom: "0" }}>
              TikTok is the only platform where a brand-new account with zero followers can reach 200,000 people in 48 hours. For Etsy sellers, that asymmetry is worth understanding — and exploiting deliberately.
            </p>
          </div>
        </section>

        <article style={{ padding: "48px 40px 96px", maxWidth: "740px", margin: "0 auto" }}>

          <p style={{ fontSize: "17px", color: "var(--ink)", lineHeight: 1.8, marginBottom: "24px" }}>
            The TikTok-to-Etsy pipeline is real and it&rsquo;s been responsible for some of the fastest-growing handmade businesses of the last five years. The question isn&rsquo;t whether it works — it&rsquo;s what to post, how to structure the content, and how to convert views into buyers.
          </p>

          <p style={{ fontSize: "17px", color: "var(--ink)", lineHeight: 1.8, marginBottom: "48px" }}>
            Here&rsquo;s the concrete answer.
          </p>

          <h2 style={{ fontSize: "32px", marginBottom: "20px", marginTop: "64px" }}>Why TikTok works for Etsy sellers specifically</h2>

          <p style={{ fontSize: "17px", color: "var(--ink)", lineHeight: 1.8, marginBottom: "24px" }}>
            TikTok&rsquo;s algorithm doesn&rsquo;t care about follower count. It cares about watch time, completion rate, and engagement. A new account posting genuinely interesting content can reach a massive audience before they have a single follower.
          </p>

          <p style={{ fontSize: "17px", color: "var(--ink)", lineHeight: 1.8, marginBottom: "24px" }}>
            For Etsy sellers, this matters because: (1) the making process is inherently visual and satisfying to watch, (2) handmade products tell a story that TikTok users respond to, and (3) the Etsy buyer demographic overlaps heavily with TikTok&rsquo;s primary demographic (Millennial and Gen Z women).
          </p>

          <div style={{ background: "var(--ice)", border: "1px solid var(--sky)", borderRadius: "12px", padding: "28px 32px", margin: "32px 0" }}>
            <p style={{ fontSize: "15px", fontFamily: "Inter, system-ui, sans-serif", fontWeight: 600, color: "var(--cobalt)", marginBottom: "12px" }}>The TikTok-to-Etsy funnel:</p>
            <ol style={{ margin: 0, padding: "0 0 0 24px", display: "flex", flexDirection: "column", gap: "8px" }}>
              {[
                "TikTok video surfaces via For You Page → watch time, completion, comments",
                "Viewer clicks profile → profile links to bio link → bio link to Etsy listing or shop",
                "Etsy listing converts the viewer to buyer",
                "Review is left → feeds future Etsy SEO and social proof",
              ].map((item, i) => (
                <li key={i} style={{ fontSize: "16px", color: "var(--ink)", lineHeight: 1.6 }}>{item}</li>
              ))}
            </ol>
          </div>

          <h2 style={{ fontSize: "32px", marginBottom: "20px", marginTop: "64px" }}>The 6 content types that perform for Etsy sellers on TikTok</h2>

          {[
            {
              type: "Process videos",
              performance: "⭐⭐⭐⭐⭐",
              detail: "Show the making. Pouring candles. Throwing clay. Cutting leather. Embroidering a hoop. The making process is inherently satisfying to watch and activates the authenticity trigger that makes Etsy buyers want to support the maker.",
              hook: "Hook idea: &ldquo;I pour every single one of these by hand, and here&rsquo;s what that actually looks like&rdquo;",
            },
            {
              type: "Pack an order with me",
              performance: "⭐⭐⭐⭐⭐",
              detail: "Show the full packing process — from completed product to sealed package. Demonstrates demand (people are ordering!), shows your packaging quality, and has massive completion rates because it has a natural endpoint.",
              hook: "Hook idea: &ldquo;Packing orders for the week&rdquo; with satisfying transitions between steps",
            },
            {
              type: "Product reveal / transformation",
              performance: "⭐⭐⭐⭐",
              detail: "The before/during/after of the making process, compressed. Raw materials to finished piece. This works especially well for categories with visual transformation: candle pouring, soap cutting, ceramic glazing.",
              hook: "Hook idea: Start with raw materials or unfinished piece, end with the completed, packaged product",
            },
            {
              type: "Responding to common buyer questions",
              performance: "⭐⭐⭐⭐",
              detail: "Use comments or stitches to answer buyer questions in video format. &ldquo;A lot of people ask me why my candles are more expensive than the ones at TJ Maxx&rdquo; — then explain in 30 seconds. This converts skeptics into believers.",
              hook: "Hook idea: Read a comment or DM out loud, then answer it directly with specifics",
            },
            {
              type: "Day in the life as a maker",
              performance: "⭐⭐⭐",
              detail: "The behind-the-scenes reality of running a handmade shop. Morning studio time, fulfilling orders, dealing with suppliers. This builds parasocial connection that drives loyal buyers and repeat purchases.",
              hook: "Hook idea: &ldquo;Day in the life: running a one-person candle shop from my garage&rdquo;",
            },
            {
              type: "Seasonal and occasion anchoring",
              performance: "⭐⭐⭐⭐ (seasonal)",
              detail: "Tie your products to upcoming buying occasions. Before Mother&rsquo;s Day, Valentine&rsquo;s Day, holiday season — create content specifically framing your products as the gift. Seasonal content with a deadline (shipping cutoff, stock limit) drives immediate action.",
              hook: "Hook idea: &ldquo;Shipping cutoff for Mother&rsquo;s Day is [date] — here&rsquo;s what I&rsquo;d get if I were you&rdquo;",
            },
          ].map((item, i) => (
            <div key={i} style={{ marginBottom: "36px" }}>
              <div style={{ display: "flex", gap: "12px", alignItems: "center", marginBottom: "10px", flexWrap: "wrap" }}>
                <h3 style={{ fontSize: "21px", color: "var(--midnight)", margin: 0 }}>{item.type}</h3>
                <span style={{ fontSize: "14px" }}>{item.performance}</span>
              </div>
              <p style={{ fontSize: "16px", color: "var(--ink)", lineHeight: 1.7, marginBottom: "8px" }}>{item.detail}</p>
              <p style={{ fontSize: "14px", color: "var(--cobalt)", fontFamily: "Inter, system-ui, sans-serif", fontStyle: "italic" }} dangerouslySetInnerHTML={{ __html: item.hook }} />
            </div>
          ))}

          <div style={{ background: "var(--midnight)", borderRadius: "16px", padding: "40px", margin: "64px 0" }}>
            <p style={{ fontSize: "11px", fontFamily: "Inter, system-ui, sans-serif", fontWeight: 600, color: "var(--horizon)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "16px" }}>Content that speaks to your buyer</p>
            <h3 style={{ fontSize: "26px", color: "var(--warm-white)", marginBottom: "16px" }}>Know your buyer before you post.</h3>
            <p style={{ fontSize: "16px", color: "var(--sky)", lineHeight: 1.7, marginBottom: "24px" }}>
              The content that performs on TikTok is content that resonates with your specific buyer&rsquo;s values and vocabulary. Claro gives you that buyer profile. See <a href="/pricing" style={{ color: "var(--gold)" }}>pricing</a>.
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
              { title: "Content Strategy for Solopreneurs", href: "/blog/content-strategy-solopreneurs", label: "Content" },
              { title: "How to Build a Content Strategy for Your Etsy Shop", href: "/blog/etsy-content-strategy", label: "Content" },
            ].map((link) => (
              <a key={link.href} href={link.href} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", background: "var(--ice)", border: "1px solid var(--sky)", borderRadius: "12px", padding: "20px 24px", textDecoration: "none" }}>
                <span style={{ fontSize: "17px", color: "var(--midnight)", fontFamily: "'DM Serif Display', Georgia, serif" }}>{link.title}</span>
                <span style={{ fontSize: "13px", color: "var(--cobalt)", fontFamily: "Inter, system-ui, sans-serif" }}>{link.label} →</span>
              </a>
            ))}
          </div>

        </article>

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Article", headline: "What to Post on TikTok for Your Etsy Shop (With Examples)", author: { "@type": "Organization", name: "Claro" }, publisher: { "@type": "Organization", name: "Claro", url: "https://meetclaro.ai" }, datePublished: "2026-04-15", description: "TikTok has made Etsy shops overnight successes and built six-figure businesses. Here's what actually works — with specific content types and real examples." }) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.q, acceptedAnswer: { "@type": "Answer", text: faq.a } })) }) }} />

      </main>
      <Footer />
    </>
  );
}
