import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Etsy SEO in 2025: What Actually Works (And What's Outdated) — Claro",
  description: "Etsy's search algorithm has changed significantly. Here's what still moves the needle in 2025 — and what you should stop doing.",
  openGraph: {
    title: "Etsy SEO in 2025: What Actually Works (And What's Outdated)",
    description: "Etsy's search algorithm has changed significantly. Here's what still moves the needle in 2025 — and what you should stop doing.",
    type: "article",
  },
};

const faqs = [
  {
    q: "What are the most important Etsy SEO factors in 2025?",
    a: "In 2025, the highest-impact Etsy SEO factors are: listing title keyword relevance (exact match to buyer search queries), conversion rate (Etsy rewards listings buyers actually buy from), recency signals (fresh listings and recently renewed listings get a temporary boost), and shop quality score (cumulative review score, customer service rating, and policy completeness). Keyword stuffing in tags has declining impact relative to genuine match quality.",
  },
  {
    q: "Does Etsy SEO still use tags?",
    a: "Yes, but tags matter less than they did in 2021-2022. Etsy has stated that title keywords are weighted more heavily than tag keywords. Tags still serve as secondary signals — particularly for long-tail searches and phrase variations your title can&rsquo;t contain. Use all 13 tags, but prioritize getting your best keywords into the title first.",
  },
  {
    q: "How does Etsy decide which listings to show in search in 2025?",
    a: "Etsy&rsquo;s Ranking algorithm considers: query match (how well your listing matches the search), listing quality score (conversion rate, click-through rate, review score), recency, buyer context (their location, prior purchase history), and shop quality score. Etsy has also expanded its use of contextual and semantic search, meaning it increasingly understands meaning — not just keyword matching.",
  },
  {
    q: "Does Google SEO matter for Etsy shops?",
    a: "Increasingly, yes. Etsy has invested heavily in being indexed by Google, and direct Google searches for products frequently surface Etsy listings. This means well-optimized Etsy listings can capture organic Google traffic in addition to Etsy search traffic. Google-optimized listing titles (readable, keyword-rich, natural language) also tend to perform better in Etsy search — both algorithms reward the same behaviors.",
  },
  {
    q: "What Etsy SEO tactics are now outdated or penalized?",
    a: "Keyword stuffing in titles (cramming unrelated keywords together with no coherent description), using repeat keywords across all 13 tags (Etsy has said this doesn&rsquo;t help), buying reviews or using review exchange groups (policy violation with listing removal risk), and ignoring conversion rate optimization (ranking without converting sends negative signals over time).",
  },
];

export default function EtsySeo2025Post() {
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
                12 min read · April 2026
              </span>
            </div>

            <h1 style={{ fontSize: "clamp(36px, 5vw, 56px)", lineHeight: 1.1, marginBottom: "24px" }}>
              Etsy SEO in 2025: What Actually Works (And What&rsquo;s Outdated)
            </h1>
            <p style={{ fontSize: "11px", fontFamily: "Inter, system-ui, sans-serif", color: "var(--horizon)", marginBottom: "8px", letterSpacing: "0.05em" }}>
              By <a href="/about" style={{ color: "var(--cobalt)" }}>the Claro team</a>
            </p>

            <p style={{ fontSize: "20px", color: "var(--ink)", lineHeight: 1.7, marginTop: "32px", marginBottom: "0" }}>
              A lot of the Etsy SEO advice floating around online was written in 2021 or 2022. Etsy&rsquo;s algorithm has changed significantly since then. Here&rsquo;s what actually moves the needle today — and what to stop spending time on.
            </p>
          </div>
        </section>

        <article style={{ padding: "48px 40px 96px", maxWidth: "740px", margin: "0 auto" }}>

          <p style={{ fontSize: "17px", color: "var(--ink)", lineHeight: 1.8, marginBottom: "24px" }}>
            Etsy&rsquo;s search is no longer a simple keyword matching system. It&rsquo;s a ranking algorithm that weighs buyer signals, listing quality, and contextual relevance together. Tactics that worked on the old system — tag stuffing, title cram-packing — not only don&rsquo;t help as much, they actively hurt your conversion rate which then hurts your ranking.
          </p>

          <p style={{ fontSize: "17px", color: "var(--ink)", lineHeight: 1.8, marginBottom: "48px" }}>
            Here&rsquo;s what&rsquo;s worth your attention in 2025.
          </p>

          <h2 style={{ fontSize: "32px", marginBottom: "20px", marginTop: "64px" }}>What Etsy SEO actually is in 2025</h2>

          <p style={{ fontSize: "17px", color: "var(--ink)", lineHeight: 1.8, marginBottom: "24px" }}>
            Etsy describes their ranking as a function of &ldquo;query relevance&rdquo; and &ldquo;listing quality score.&rdquo; In plain language: does your listing match what the buyer searched, and do buyers who see it actually buy it?
          </p>

          <div style={{ background: "var(--ice)", border: "1px solid var(--sky)", borderRadius: "12px", padding: "28px 32px", margin: "32px 0" }}>
            <p style={{ fontSize: "15px", fontFamily: "Inter, system-ui, sans-serif", fontWeight: 600, color: "var(--cobalt)", marginBottom: "16px" }}>The Etsy ranking formula (simplified):</p>
            <ul style={{ margin: 0, padding: "0 0 0 20px", display: "flex", flexDirection: "column", gap: "10px" }}>
              {[
                "Query relevance: title, tags, attributes, description keywords",
                "Listing quality score: conversion rate + click-through rate + review score",
                "Recency: newly listed and recently renewed listings get a temporary boost",
                "Shop quality: policy completeness, customer service record, fulfillment rate",
                "Buyer context: their location, device, purchase history",
              ].map((item, i) => (
                <li key={i} style={{ fontSize: "16px", color: "var(--ink)", lineHeight: 1.6 }}>{item}</li>
              ))}
            </ul>
          </div>

          <p style={{ fontSize: "17px", color: "var(--ink)", lineHeight: 1.8, marginBottom: "48px" }}>
            The key insight: your listing quality score matters as much as your keywords. A listing that ranks but doesn&rsquo;t convert will drop in ranking over time. A listing that converts well will be shown to more buyers over time. SEO and conversion are now the same problem.
          </p>

          <h2 style={{ fontSize: "32px", marginBottom: "20px", marginTop: "64px" }}>What still works in 2025</h2>

          {[
            {
              tactic: "Exact-match keyword phrases in titles",
              detail: "Etsy&rsquo;s algorithm gives the most weight to title text. The first 40-55 characters carry the most weight. Your primary keyword — the exact phrase a buyer would type to find your product — must be in your title, ideally near the beginning. Use Etsy autocomplete to find real buyer search terms.",
            },
            {
              tactic: "Conversion rate optimization",
              detail: "In 2025, your listing&rsquo;s conversion rate is a direct ranking signal. Etsy tracks: do buyers who land on this listing buy it? Improving your conversion rate is improving your SEO. This means better photos, clearer descriptions, faster shipping options, and pre-answering buyer questions.",
            },
            {
              tactic: "Complete and accurate attributes",
              detail: "Etsy&rsquo;s attribute fields (material, style, occasion, recipient) are used in faceted search filtering. Buyers who filter by &ldquo;material: silver&rdquo; won&rsquo;t find your sterling silver necklace if you haven&rsquo;t filled in that attribute. Complete every applicable attribute field.",
            },
            {
              tactic: "Tags as phrase variations",
              detail: "Tags are now primarily useful for capturing phrase variations that can&rsquo;t fit in your title. Use your 13 tags for: secondary keywords, occasion terms, style descriptors, and recipient language. Don&rsquo;t repeat your title keywords in tags — you&rsquo;re not double-counting, you&rsquo;re wasting tag slots.",
            },
            {
              tactic: "Google SEO for Etsy listings",
              detail: "Etsy listings increasingly appear in Google search results. This means your listing title and description also need to be readable and keyword-rich by Google standards. Natural language that reads well performs better on Google, which sends more traffic to your listing, which improves your Etsy ranking. The virtuous cycle rewards good writing.",
            },
          ].map((item, i) => (
            <div key={i} style={{ marginBottom: "36px", paddingLeft: "24px", borderLeft: "3px solid var(--cobalt)" }}>
              <h3 style={{ fontSize: "22px", marginBottom: "12px", color: "var(--midnight)" }}>✓ {item.tactic}</h3>
              <p style={{ fontSize: "16px", color: "var(--ink)", lineHeight: 1.7 }}>{item.detail}</p>
            </div>
          ))}

          <h2 style={{ fontSize: "32px", marginBottom: "20px", marginTop: "64px" }}>What&rsquo;s outdated or counterproductive</h2>

          {[
            {
              tactic: "Keyword stuffing in titles",
              detail: "A title like &ldquo;Candle Soy Candle Handmade Candle Gift Candle Natural Candle&rdquo; harms your click-through rate (it reads like noise) which harms your listing quality score which harms your ranking. Readable titles that happen to contain keywords outperform unreadable keyword lists.",
            },
            {
              tactic: "Repeating the same keyword in all 13 tags",
              detail: "Etsy has explicitly stated that repeating keywords doesn&rsquo;t improve your ranking. Using all 13 tag slots for variations of &ldquo;soy candle&rdquo; wastes tags that could capture completely different buyer searches.",
            },
            {
              tactic: "Renewing listings constantly for the recency boost",
              detail: "The recency boost from renewals is real but small and short-lived. Sellers who spend money auto-renewing every few days for SEO are likely getting minimal return. One genuinely optimized listing beats a frequently-renewed poor one every time.",
            },
            {
              tactic: "Ignoring photo quality as an SEO concern",
              detail: "Photos drive click-through rate. Click-through rate is a ranking signal. Bad photos that reduce click-throughs reduce your ranking over time. Investing in photo quality is an SEO investment.",
            },
          ].map((item, i) => (
            <div key={i} style={{ marginBottom: "32px", paddingLeft: "24px", borderLeft: "3px solid #e57373" }}>
              <h3 style={{ fontSize: "22px", marginBottom: "12px", color: "var(--midnight)" }}>✗ {item.tactic}</h3>
              <p style={{ fontSize: "16px", color: "var(--ink)", lineHeight: 1.7 }}>{item.detail}</p>
            </div>
          ))}

          <h2 style={{ fontSize: "32px", marginBottom: "20px", marginTop: "64px" }}>The keyword research process that works</h2>

          <p style={{ fontSize: "17px", color: "var(--ink)", lineHeight: 1.8, marginBottom: "24px" }}>
            In 2025, the best Etsy keyword research starts with buyer behavior, not search volume numbers.
          </p>

          {[
            "Etsy autocomplete: type your product and document every suggestion — these are real searches",
            "Google autocomplete and &ldquo;People also ask&rdquo;: surfaces questions buyers ask before buying",
            "Your own Shop Stats: which keywords are already driving traffic? Double down on them.",
            "Competitor title analysis: what phrases do top-ranking shops use? Are they in your category&rsquo;s vocabulary?",
            "Review language: what words do buyers use to describe your product after they receive it?",
          ].map((item, i) => (
            <div key={i} style={{ display: "flex", gap: "12px", alignItems: "flex-start", marginBottom: "16px" }}>
              <span style={{ background: "var(--cobalt)", color: "var(--warm-white)", fontSize: "12px", fontFamily: "Inter, system-ui, sans-serif", fontWeight: 700, width: "24px", height: "24px", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: "2px" }}>
                {i + 1}
              </span>
              <p style={{ fontSize: "16px", color: "var(--ink)", lineHeight: 1.7 }}>{item}</p>
            </div>
          ))}

          <div style={{ background: "var(--midnight)", borderRadius: "16px", padding: "40px", margin: "64px 0" }}>
            <p style={{ fontSize: "11px", fontFamily: "Inter, system-ui, sans-serif", fontWeight: 600, color: "var(--horizon)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "16px" }}>
              Better SEO starts with better buyer understanding
            </p>
            <h3 style={{ fontSize: "26px", color: "var(--warm-white)", marginBottom: "16px" }}>
              Get the keywords your buyers actually search for.
            </h3>
            <p style={{ fontSize: "16px", color: "var(--sky)", lineHeight: 1.7, marginBottom: "24px" }}>
              Claro surfaces the exact search vocabulary your buyers use — directly from reviews, forums, and search behavior analysis. The output feeds directly into your title and tag strategy. See <a href="/pricing" style={{ color: "var(--gold)" }}>pricing</a>.
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
              { title: "How to Find the Right Keywords for Your Etsy Shop", href: "/blog/etsy-keyword-research", label: "Etsy Growth" },
              { title: "The Best Etsy Listing Title Formula (With Examples)", href: "/blog/etsy-listing-title-formula", label: "Etsy Growth" },
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
              headline: "Etsy SEO in 2025: What Actually Works (And What's Outdated)",
              author: { "@type": "Organization", name: "Claro" },
              publisher: { "@type": "Organization", name: "Claro", url: "https://meetclaro.ai" },
              datePublished: "2026-04-15",
              description: "Etsy's search algorithm has changed significantly. Here's what still moves the needle in 2025 — and what you should stop doing.",
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
