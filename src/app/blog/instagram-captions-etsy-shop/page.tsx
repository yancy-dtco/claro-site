import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How to Write Instagram Captions for Your Etsy Shop — Claro",
  description: "Instagram captions that convert don't describe the photo. They speak to the person looking at it. Here's how to write them — with examples for Etsy sellers.",
  openGraph: {
    title: "How to Write Instagram Captions for Your Etsy Shop",
    description: "Instagram captions that convert don't describe the photo. They speak to the person looking at it. Here's how to write them — with real examples.",
    type: "article",
  },
};

const faqs = [
  {
    q: "How long should Instagram captions be for an Etsy shop?",
    a: "There&rsquo;s no single right length — it depends on what the caption needs to do. Product launch captions can be longer (150-300 words) to tell the story and include a CTA. Process captions can be shorter (50-100 words) because the video or photo carries the weight. The key rule: every sentence needs to earn its place. If a sentence doesn&rsquo;t add information or pull the reader forward, cut it.",
  },
  {
    q: "Should I use hashtags on Instagram?",
    a: "Yes, but their importance has declined significantly. Instagram&rsquo;s algorithm now prioritizes content quality and engagement over hashtag optimization. Use 5-10 relevant hashtags placed either at the end of the caption or in the first comment. Focus on niche, specific hashtags (5,000-500,000 posts) over massive generic ones (#handmade with 100M+ posts gets you buried).",
  },
  {
    q: "How do I write Instagram captions that drive shop traffic?",
    a: "Include a specific CTA in every selling post: &ldquo;Link in bio to shop,&rdquo; &ldquo;Limited — shop via link in bio,&rdquo; &ldquo;DM me to order.&rdquo; Make the path to purchase explicit. Buyers who want to buy but can&rsquo;t find an easy path will scroll past. Link-in-bio tools (Linktree, Later) let you send people to specific listings.",
  },
  {
    q: "What types of Instagram captions get the most engagement?",
    a: "Questions and incomplete sentences that invite completion both drive comments (which the algorithm rewards). Story-driven captions that open in media res (&ldquo;I almost didn&rsquo;t put this one online&rdquo;) stop the scroll. Specific, concrete captions outperform vague inspirational ones — &ldquo;this candle takes 4 hours to pour&rdquo; beats &ldquo;crafted with love and intention.&rdquo;",
  },
  {
    q: "Should my Instagram voice match my Etsy listing voice?",
    a: "Yes — they should be recognizably from the same brand. Instagram can be slightly more casual and personal, but the core voice attributes (direct, warm, specific, opinionated) should carry through. A buyer who discovers you on Instagram and then visits your Etsy shop should feel like they&rsquo;re in the same place.",
  },
];

export default function InstagramCaptionsEtsyShopPost() {
  return (
    <>
      <Nav />
      <main style={{ background: "var(--warm-white)" }}>

        <section style={{ paddingTop: "100px", paddingBottom: "0", padding: "100px 40px 0" }}>
          <div style={{ maxWidth: "740px", margin: "0 auto" }}>
            <div style={{ display: "flex", gap: "12px", alignItems: "center", marginBottom: "24px", flexWrap: "wrap" }}>
              <span style={{ fontSize: "12px", fontFamily: "Inter, system-ui, sans-serif", fontWeight: 600, color: "var(--cobalt)", background: "rgba(44,82,130,0.1)", padding: "4px 12px", borderRadius: "12px" }}>Content</span>
              <span style={{ fontSize: "13px", color: "var(--horizon)", fontFamily: "Inter, system-ui, sans-serif" }}>10 min read · April 2026</span>
            </div>
            <h1 style={{ fontSize: "clamp(36px, 5vw, 56px)", lineHeight: 1.1, marginBottom: "24px" }}>
              How to Write Instagram Captions for Your Etsy Shop
            </h1>
            <p style={{ fontSize: "11px", fontFamily: "Inter, system-ui, sans-serif", color: "var(--horizon)", marginBottom: "8px", letterSpacing: "0.05em" }}>
              By <a href="/about" style={{ color: "var(--cobalt)" }}>the Claro team</a>
            </p>
            <p style={{ fontSize: "20px", color: "var(--ink)", lineHeight: 1.7, marginTop: "32px", marginBottom: "0" }}>
              Most Etsy sellers write Instagram captions that describe what&rsquo;s in the photo. &ldquo;New arrival — hand-poured soy candle in our studio.&rdquo; The buyer can already see what&rsquo;s in the photo. The caption needs to do something the photo can&rsquo;t: speak to the person looking at it.
            </p>
          </div>
        </section>

        <article style={{ padding: "48px 40px 96px", maxWidth: "740px", margin: "0 auto" }}>

          <p style={{ fontSize: "17px", color: "var(--ink)", lineHeight: 1.8, marginBottom: "48px" }}>
            A caption that speaks to the buyer&rsquo;s situation, occasion, or desire — in language that resonates — stops the scroll and moves toward a purchase. Here&rsquo;s how to write it.
          </p>

          <h2 style={{ fontSize: "32px", marginBottom: "20px", marginTop: "64px" }}>The caption structure that works</h2>

          {[
            {
              part: "Line 1: The scroll-stopper",
              detail: "The first line appears before &ldquo;more&rdquo; is clicked — it&rsquo;s your headline. It needs to either create curiosity, state a specific benefit, or open with an observation your ideal buyer will recognize. Don&rsquo;t open with your product name.",
            },
            {
              part: "Lines 2-5: The body",
              detail: "Expand on what you opened with. Tell the story, share the process, describe the occasion. This is where buyer language matters — use the words your buyers use, not feature-speak.",
            },
            {
              part: "CTA: The close",
              detail: "Every selling post needs an explicit CTA. &ldquo;Link in bio to shop.&rdquo; &ldquo;DM me to check availability.&rdquo; &ldquo;Last 6 in stock — link in bio.&rdquo; Make the next step obvious.",
            },
          ].map((item, i) => (
            <div key={i} style={{ marginBottom: "24px", paddingLeft: "24px", borderLeft: "3px solid var(--cobalt)" }}>
              <h4 style={{ fontSize: "19px", marginBottom: "8px", color: "var(--midnight)" }}>{item.part}</h4>
              <p style={{ fontSize: "16px", color: "var(--ink)", lineHeight: 1.7 }}>{item.detail}</p>
            </div>
          ))}

          <h2 style={{ fontSize: "32px", marginBottom: "20px", marginTop: "64px" }}>Before/after examples across caption types</h2>

          {[
            {
              type: "Product launch caption",
              before: "New item! Hand-poured soy candle, 8oz, available in our shop now. Link in bio.",
              after: "For the person who said &ldquo;I can always tell when a candle is cheap.&rdquo; This one won&rsquo;t let you down. Phthalate-free fragrance, 50-hour burn, poured to order. Link in bio — limited stock this batch.",
            },
            {
              type: "Process caption",
              before: "Behind the scenes in our studio! Making a new batch of candles today.",
              after: "Every batch starts at 6am before the house wakes up. There&rsquo;s something about morning light and wax that makes the whole thing feel like the right job. This batch ships Friday.",
            },
            {
              type: "Gift occasion caption",
              before: "Looking for a gift? Check out our candles! Great for any occasion.",
              after: "If you&rsquo;re stuck on what to give the person who &ldquo;doesn&rsquo;t want anything&rdquo; — candles still work. Especially when they smell like this. Ships gift-ready, arrives in time if you order by Sunday. Link in bio.",
            },
          ].map((ex, i) => (
            <div key={i} style={{ marginBottom: "48px" }}>
              <h3 style={{ fontSize: "20px", marginBottom: "16px", color: "var(--midnight)" }}>{ex.type}</h3>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "16px" }}>
                <div style={{ background: "var(--ice)", borderRadius: "10px", padding: "20px", borderTop: "3px solid #c0392b" }}>
                  <p style={{ fontSize: "11px", fontFamily: "Inter, system-ui, sans-serif", fontWeight: 700, color: "#e57373", marginBottom: "10px" }}>BEFORE</p>
                  <p style={{ fontSize: "15px", color: "var(--ink)", lineHeight: 1.6, fontStyle: "italic" }}>{ex.before}</p>
                </div>
                <div style={{ background: "var(--cobalt)", borderRadius: "10px", padding: "20px", borderTop: "3px solid var(--gold)" }}>
                  <p style={{ fontSize: "11px", fontFamily: "Inter, system-ui, sans-serif", fontWeight: 700, color: "var(--gold)", marginBottom: "10px" }}>AFTER</p>
                  <p style={{ fontSize: "15px", color: "var(--warm-white)", lineHeight: 1.6 }} dangerouslySetInnerHTML={{ __html: ex.after }} />
                </div>
              </div>
            </div>
          ))}

          <h2 style={{ fontSize: "32px", marginBottom: "20px", marginTop: "64px" }}>The buyer language shortcut</h2>

          <p style={{ fontSize: "17px", color: "var(--ink)", lineHeight: 1.8, marginBottom: "24px" }}>
            The fastest way to write Instagram captions that resonate is to use your buyer&rsquo;s language. Read your reviews. Read Reddit threads in your category. Notice the specific phrases buyers use to describe what they wanted, what they found, and what they loved.
          </p>

          <p style={{ fontSize: "17px", color: "var(--ink)", lineHeight: 1.8, marginBottom: "48px" }}>
            A buyer who says &ldquo;doesn&rsquo;t smell fake&rdquo; is handing you your caption hook. A buyer who says &ldquo;perfect for my daughter&rsquo;s teacher&rdquo; is handing you your occasion frame. Use the language your buyers use and your captions will naturally resonate with more buyers like them.
          </p>

          <div style={{ background: "var(--midnight)", borderRadius: "16px", padding: "40px", margin: "64px 0" }}>
            <p style={{ fontSize: "11px", fontFamily: "Inter, system-ui, sans-serif", fontWeight: 600, color: "var(--horizon)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "16px" }}>Better captions from buyer intelligence</p>
            <h3 style={{ fontSize: "26px", color: "var(--warm-white)", marginBottom: "16px" }}>Get your buyer&rsquo;s vocabulary for content.</h3>
            <p style={{ fontSize: "16px", color: "var(--sky)", lineHeight: 1.7, marginBottom: "24px" }}>
              Claro gives you the exact phrases your buyers use — organized by purchase trigger and occasion. Use them directly in captions. See <a href="/pricing" style={{ color: "var(--gold)" }}>pricing</a>.
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
              { title: "Content Strategy for Solopreneurs", href: "/blog/content-strategy-solopreneurs", label: "Content" },
              { title: "What to Post on TikTok for Your Etsy Shop", href: "/blog/tiktok-for-etsy-shop", label: "Content" },
              { title: "How to Build a Content Strategy for Your Etsy Shop", href: "/blog/etsy-content-strategy", label: "Content" },
            ].map((link) => (
              <a key={link.href} href={link.href} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", background: "var(--ice)", border: "1px solid var(--sky)", borderRadius: "12px", padding: "20px 24px", textDecoration: "none" }}>
                <span style={{ fontSize: "17px", color: "var(--midnight)", fontFamily: "'DM Serif Display', Georgia, serif" }}>{link.title}</span>
                <span style={{ fontSize: "13px", color: "var(--cobalt)", fontFamily: "Inter, system-ui, sans-serif" }}>{link.label} →</span>
              </a>
            ))}
          </div>

        </article>

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Article", headline: "How to Write Instagram Captions for Your Etsy Shop", author: { "@type": "Organization", name: "Claro" }, publisher: { "@type": "Organization", name: "Claro", url: "https://meetclaro.ai" }, datePublished: "2026-04-15", description: "Instagram captions that convert don't describe the photo. They speak to the person looking at it. Here's how to write them — with examples for Etsy sellers." }) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.q, acceptedAnswer: { "@type": "Answer", text: faq.a } })) }) }} />

      </main>
      <Footer />
    </>
  );
}
