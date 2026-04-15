import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Content Strategy for Solopreneurs: How to Create Content That Converts — Claro",
  description: "You don't have a content team. You have 4 hours a week and something real to say. Here's the content strategy that works for solopreneurs — without burning out.",
  openGraph: {
    title: "Content Strategy for Solopreneurs: How to Create Content That Converts",
    description: "You don't have a content team. You have 4 hours a week and something real to say. Here's the content strategy that works for solopreneurs.",
    type: "article",
  },
};

const faqs = [
  {
    q: "What is a realistic content strategy for a solopreneur?",
    a: "A realistic content strategy for a solopreneur is one built around your actual time and energy constraints — not an aspirational posting schedule you&rsquo;ll abandon in month two. Typically this means: one platform done well, 2-3 posts per week, a monthly planning session to batch ideas, and a bank of evergreen content you can pull from when life gets busy.",
  },
  {
    q: "How do I create content that actually converts (not just gets likes)?",
    a: "Converting content has a clear connection to a purchase path — it shows a product in context, uses the language your buyer uses to describe their need, addresses a specific occasion or use case, and has a clear link or CTA. Content that gets likes but no purchases is usually brand-building content that stops short of the conversion moment.",
  },
  {
    q: "What&rsquo;s the most time-efficient way to create content as a solopreneur?",
    a: "Batch creation. Set aside 2-3 hours once a week to create content for the entire week. Take 20 photos at once under the same natural light. Write five captions in one sitting while you&rsquo;re in the writing mindset. Schedule ahead. The switching cost between tasks (stop making, start writing, stop writing, start photographing) is where most solopreneur content time goes.",
  },
  {
    q: "Should I show my face in content as a solopreneur?",
    a: "If you&rsquo;re selling a product with a strong maker story, showing your face is a significant trust and connection builder. Buyers who see the maker convert at higher rates and leave better reviews than buyers who only see the product. You don&rsquo;t need to be constantly on camera — a photo of your hands making, a brief intro video, and occasional updates are enough to activate the &lsquo;real person&rsquo; trust signal.",
  },
  {
    q: "How do I stay consistent with content when I&rsquo;m also doing everything else?",
    a: "Design for your worst week, not your best. If your best week allows daily posting but your average week allows two posts, build your strategy around two posts. Create a content bank — 15-20 pieces of pre-approved, ready-to-post content — so that when you&rsquo;re in a production sprint with no time to create content, you&rsquo;re still posting from the bank.",
  },
];

export default function ContentStrategySolopreneursPost() {
  return (
    <>
      <Nav />
      <main style={{ background: "var(--warm-white)" }}>

        <section style={{ paddingTop: "100px", paddingBottom: "0", padding: "100px 40px 0" }}>
          <div style={{ maxWidth: "740px", margin: "0 auto" }}>
            <div style={{ display: "flex", gap: "12px", alignItems: "center", marginBottom: "24px", flexWrap: "wrap" }}>
              <span style={{ fontSize: "12px", fontFamily: "Inter, system-ui, sans-serif", fontWeight: 600, color: "var(--cobalt)", background: "rgba(44,82,130,0.1)", padding: "4px 12px", borderRadius: "12px" }}>Content</span>
              <span style={{ fontSize: "13px", color: "var(--horizon)", fontFamily: "Inter, system-ui, sans-serif" }}>12 min read · April 2026</span>
            </div>
            <h1 style={{ fontSize: "clamp(36px, 5vw, 56px)", lineHeight: 1.1, marginBottom: "24px" }}>
              Content Strategy for Solopreneurs: How to Create Content That Converts
            </h1>
            <p style={{ fontSize: "11px", fontFamily: "Inter, system-ui, sans-serif", color: "var(--horizon)", marginBottom: "8px", letterSpacing: "0.05em" }}>
              By <a href="/about" style={{ color: "var(--cobalt)" }}>the Claro team</a>
            </p>
            <p style={{ fontSize: "20px", color: "var(--ink)", lineHeight: 1.7, marginTop: "32px", marginBottom: "0" }}>
              Every content strategy guide you&rsquo;ve read was written for businesses with content teams. This one isn&rsquo;t. This is for sellers who are making the product, photographing it, writing the listings, managing orders, and somehow also supposed to &ldquo;build a content presence.&rdquo;
            </p>
          </div>
        </section>

        <article style={{ padding: "48px 40px 96px", maxWidth: "740px", margin: "0 auto" }}>

          <p style={{ fontSize: "17px", color: "var(--ink)", lineHeight: 1.8, marginBottom: "24px" }}>
            The content strategy that works for solopreneurs is radically different from what a brand manager would build. Less ambitious. More systematic. Designed for sustainability over performance metrics.
          </p>

          <p style={{ fontSize: "17px", color: "var(--ink)", lineHeight: 1.8, marginBottom: "48px" }}>
            Here&rsquo;s what it actually looks like.
          </p>

          <h2 style={{ fontSize: "32px", marginBottom: "20px", marginTop: "64px" }}>The solopreneur content constraint: time, not ideas</h2>

          <p style={{ fontSize: "17px", color: "var(--ink)", lineHeight: 1.8, marginBottom: "24px" }}>
            Most solopreneurs don&rsquo;t struggle to know what to post. They struggle to find time to post consistently. The constraint isn&rsquo;t creativity — it&rsquo;s bandwidth.
          </p>

          <p style={{ fontSize: "17px", color: "var(--ink)", lineHeight: 1.8, marginBottom: "24px" }}>
            A content strategy built on this constraint looks completely different from one built on the assumption of unlimited time:
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "20px", margin: "24px 0 48px" }}>
            <div style={{ background: "var(--ice)", borderRadius: "12px", padding: "28px", borderTop: "3px solid #c0392b" }}>
              <p style={{ fontSize: "11px", fontFamily: "Inter, system-ui, sans-serif", fontWeight: 700, color: "#e57373", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "16px" }}>Aspirational strategy (fails)</p>
              <p style={{ fontSize: "16px", color: "var(--ink)", lineHeight: 1.7 }}>
                Daily posting, multiple platforms, stories + reels + static posts, weekly blog updates, email newsletter.
              </p>
            </div>
            <div style={{ background: "var(--cobalt)", borderRadius: "12px", padding: "28px", borderTop: "3px solid var(--gold)" }}>
              <p style={{ fontSize: "11px", fontFamily: "Inter, system-ui, sans-serif", fontWeight: 700, color: "var(--gold)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "16px" }}>Realistic strategy (works)</p>
              <p style={{ fontSize: "16px", color: "var(--warm-white)", lineHeight: 1.7 }}>
                One platform. 3 posts/week. 2-hour weekly batch session. Content bank of 20 pre-approved posts to pull from when time runs short.
              </p>
            </div>
          </div>

          <h2 style={{ fontSize: "32px", marginBottom: "20px", marginTop: "64px" }}>The five content types that convert for Etsy sellers</h2>

          {[
            {
              type: "Process content",
              converts: "High",
              why: "Shows authenticity. Activates the &ldquo;I like supporting a real maker&rdquo; buyer psychology. Answers the question &ldquo;is this actually handmade?&rdquo; before it&rsquo;s asked.",
              example: "Time-lapse of pouring a batch of candles. Hands-trimming leather edges. Clay centering on a wheel.",
            },
            {
              type: "Occasion-anchored product content",
              converts: "Very High",
              why: "Meets buyers exactly where they are in their purchase journey. A gift guide post for &ldquo;Mother&rsquo;s Day for the mom who has everything&rdquo; reaches buyers already in gift-buying mode.",
              example: "&ldquo;What I&rsquo;d buy a first-time homeowner&rdquo; featuring your products. &ldquo;5 teacher appreciation gifts that aren&rsquo;t a mug&rdquo;.",
            },
            {
              type: "Social proof content",
              converts: "High",
              why: "Third-party validation at scale. Sharing reviews, buyer photos, and unboxing videos is social proof without self-promotion — the trust value is much higher.",
              example: "Screenshot of a great review with the product photo. Reshare a buyer&rsquo;s unboxing video. &ldquo;What customers say about [product].&rdquo;",
            },
            {
              type: "Education content",
              converts: "Medium (slow burn)",
              why: "Positions you as an expert in your category. Builds audience trust over time. Lower immediate conversion but highest sharing rate.",
              example: "&ldquo;Why soy wax burns cleaner than paraffin.&rdquo; &ldquo;How to care for natural fiber textiles.&rdquo; &ldquo;What makes sterling silver tarnish and how to prevent it.&rdquo;",
            },
            {
              type: "Behind-the-scenes",
              converts: "Medium",
              why: "Creates parasocial connection. Buyers who feel like they know you buy from you more readily and more loyally.",
              example: "New material arriving. Studio setup. Seasonal prep. A mistake and how you fixed it.",
            },
          ].map((item, i) => (
            <div key={i} style={{ marginBottom: "32px", paddingLeft: "24px", borderLeft: "3px solid var(--cobalt)" }}>
              <div style={{ display: "flex", gap: "12px", alignItems: "center", marginBottom: "8px", flexWrap: "wrap" }}>
                <h3 style={{ fontSize: "20px", color: "var(--midnight)", margin: 0 }}>{item.type}</h3>
                <span style={{ fontSize: "12px", fontFamily: "Inter, system-ui, sans-serif", fontWeight: 600, color: "var(--cobalt)", background: "rgba(44,82,130,0.1)", padding: "2px 10px", borderRadius: "10px" }}>Converts: {item.converts}</span>
              </div>
              <p style={{ fontSize: "15px", color: "var(--ink)", lineHeight: 1.6, marginBottom: "8px" }} dangerouslySetInnerHTML={{ __html: item.why }} />
              <p style={{ fontSize: "14px", color: "var(--horizon)", fontFamily: "Inter, system-ui, sans-serif", fontStyle: "italic" }} dangerouslySetInnerHTML={{ __html: `Example: ${item.example}` }} />
            </div>
          ))}

          <h2 style={{ fontSize: "32px", marginBottom: "20px", marginTop: "64px" }}>The 2-hour batch creation session</h2>

          <p style={{ fontSize: "17px", color: "var(--ink)", lineHeight: 1.8, marginBottom: "24px" }}>
            Block 2 hours once a week. Here&rsquo;s how to use them:
          </p>

          {[
            { time: "0:00–0:30", task: "Photo session. Set up your best natural light spot. Photograph 10-15 product shots, 3-5 process shots, 2-3 lifestyle/behind-the-scenes shots. Batch everything in one session — setup and teardown cost is real." },
            { time: "0:30–1:15", task: "Write all captions for the week. With photos in front of you and your buyer profile nearby, write 3-4 captions. Include your primary CTA (link in bio, shop now, limited stock). Use your buyer&rsquo;s language." },
            { time: "1:15–1:45", task: "Schedule everything. Use a scheduler (Later, Buffer, or Instagram&rsquo;s native scheduler) to queue posts for the week. Optimal posting times vary by platform — mid-morning weekdays for most." },
            { time: "1:45–2:00", task: "Add 2-3 posts to your content bank (evergreen posts you can publish anytime). These are your insurance policy for busy weeks." },
          ].map((item, i) => (
            <div key={i} style={{ display: "flex", gap: "16px", marginBottom: "16px", alignItems: "flex-start" }}>
              <span style={{ background: "var(--cobalt)", color: "var(--warm-white)", fontSize: "13px", fontFamily: "Inter, system-ui, sans-serif", fontWeight: 700, padding: "4px 10px", borderRadius: "6px", whiteSpace: "nowrap", flexShrink: 0 }}>{item.time}</span>
              <p style={{ fontSize: "15px", color: "var(--ink)", lineHeight: 1.7 }}>{item.task}</p>
            </div>
          ))}

          <div style={{ background: "var(--midnight)", borderRadius: "16px", padding: "40px", margin: "64px 0" }}>
            <p style={{ fontSize: "11px", fontFamily: "Inter, system-ui, sans-serif", fontWeight: 600, color: "var(--horizon)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "16px" }}>Content from buyer intelligence</p>
            <h3 style={{ fontSize: "26px", color: "var(--warm-white)", marginBottom: "16px" }}>Know your buyer. Write better content in less time.</h3>
            <p style={{ fontSize: "16px", color: "var(--sky)", lineHeight: 1.7, marginBottom: "24px" }}>
              Claro generates 10 specific content angles based on your buyer profile — so you never start from blank. See <a href="/pricing" style={{ color: "var(--gold)" }}>pricing</a>.
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
              { title: "How to Build a Content Strategy for Your Etsy Shop", href: "/blog/etsy-content-strategy", label: "Content" },
              { title: "How to Write a 30-Day Content Calendar for Your Small Business", href: "/blog/30-day-content-calendar-small-business", label: "Content" },
              { title: "How to Write Instagram Captions for Your Etsy Shop", href: "/blog/instagram-captions-etsy-shop", label: "Content" },
            ].map((link) => (
              <a key={link.href} href={link.href} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", background: "var(--ice)", border: "1px solid var(--sky)", borderRadius: "12px", padding: "20px 24px", textDecoration: "none" }}>
                <span style={{ fontSize: "17px", color: "var(--midnight)", fontFamily: "'DM Serif Display', Georgia, serif" }}>{link.title}</span>
                <span style={{ fontSize: "13px", color: "var(--cobalt)", fontFamily: "Inter, system-ui, sans-serif" }}>{link.label} →</span>
              </a>
            ))}
          </div>

        </article>

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Article", headline: "Content Strategy for Solopreneurs: How to Create Content That Converts", author: { "@type": "Organization", name: "Claro" }, publisher: { "@type": "Organization", name: "Claro", url: "https://meetclaro.ai" }, datePublished: "2026-04-15", description: "You don't have a content team. You have 4 hours a week and something real to say. Here's the content strategy that works for solopreneurs — without burning out." }) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.q, acceptedAnswer: { "@type": "Answer", text: faq.a } })) }) }} />

      </main>
      <Footer />
    </>
  );
}
