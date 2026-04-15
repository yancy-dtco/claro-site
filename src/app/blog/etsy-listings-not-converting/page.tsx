import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Why Your Etsy Listings Aren't Converting (And How to Fix It) — Claro",
  description: "Getting traffic but no sales? The problem is almost always one of five fixable issues. Here's how to diagnose and fix each one.",
  openGraph: {
    title: "Why Your Etsy Listings Aren't Converting (And How to Fix It)",
    description: "Getting traffic but no sales? The problem is almost always one of five fixable issues. Here's how to diagnose and fix each one.",
    type: "article",
  },
};

const faqs = [
  {
    q: "What is a good Etsy conversion rate?",
    a: "The average Etsy conversion rate is approximately 1-3%. Under 1% typically indicates a conversion problem — something in the listing is stopping buyers who found you from purchasing. Above 3% is strong. Some categories (consumables, small gifts) can reach 4-6%+ with well-optimized listings. Track yours in Shop Stats (orders ÷ visits × 100).",
  },
  {
    q: "My Etsy listing has traffic but no sales. What&rsquo;s wrong?",
    a: "Traffic without sales is a conversion problem, not an SEO problem. The most common causes: photos that don&rsquo;t build confidence (blurry, dark, or fail to show scale and quality), a description that doesn&rsquo;t address buyer concerns, pricing that feels unexplained or too high for the visual presentation, lack of reviews to provide social proof, or a shipping timeline that scares off deadline-driven buyers.",
  },
  {
    q: "How do I know which specific element of my listing is causing the conversion problem?",
    a: "The fastest diagnostic: compare your listing against the best-performing listings in your category. Open the top 3-5 shops. Compare photo quality, title specificity, review count, description structure, and price point. Where does yours fall short relative to what&rsquo;s converting? That gap is your fix.",
  },
  {
    q: "Can pricing fix a conversion problem?",
    a: "Price can both cause and cure conversion problems — but not in the direction most sellers expect. Under-pricing signals low quality on Etsy (buyers ask &lsquo;why is this so cheap?&rsquo;). Over-pricing without value justification also kills conversions. The fix is usually not a price change alone — it&rsquo;s upgrading the listing to visually and verbally justify your current price.",
  },
  {
    q: "Does Etsy listing age affect conversion rate?",
    a: "Listing age itself is neutral. What matters is how buyers engage with the listing over time. A listing that consistently converts well will rank better over time. A listing that gets traffic but doesn&rsquo;t convert will drop in ranking over time. Age doesn&rsquo;t help a bad listing — but renewals don&rsquo;t fix conversion problems either.",
  },
];

export default function EtsyListingsNotConvertingPost() {
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
              Why Your Etsy Listings Aren&rsquo;t Converting (And How to Fix It)
            </h1>
            <p style={{ fontSize: "11px", fontFamily: "Inter, system-ui, sans-serif", color: "var(--horizon)", marginBottom: "8px", letterSpacing: "0.05em" }}>
              By <a href="/about" style={{ color: "var(--cobalt)" }}>the Claro team</a>
            </p>

            <p style={{ fontSize: "20px", color: "var(--ink)", lineHeight: 1.7, marginTop: "32px", marginBottom: "0" }}>
              You&rsquo;re getting visits. Buyers are finding your listings. And then they&rsquo;re leaving. No purchase, no message, nothing. This is one of the most frustrating positions in Etsy selling — because you know the demand is there. You just can&rsquo;t close it.
            </p>
          </div>
        </section>

        <article style={{ padding: "48px 40px 96px", maxWidth: "740px", margin: "0 auto" }}>

          <p style={{ fontSize: "17px", color: "var(--ink)", lineHeight: 1.8, marginBottom: "24px" }}>
            The good news: conversion problems are almost always one of five fixable issues. You don&rsquo;t need a new product. You don&rsquo;t need more traffic. You need to remove whatever friction is standing between an interested buyer and a completed purchase.
          </p>

          <p style={{ fontSize: "17px", color: "var(--ink)", lineHeight: 1.8, marginBottom: "48px" }}>
            Here&rsquo;s how to diagnose which one you have — and how to fix it.
          </p>

          <h2 style={{ fontSize: "32px", marginBottom: "20px", marginTop: "64px" }}>First: confirm it&rsquo;s actually a conversion problem</h2>

          <p style={{ fontSize: "17px", color: "var(--ink)", lineHeight: 1.8, marginBottom: "24px" }}>
            Check your Etsy Shop Stats. Look at visits vs. orders. Your conversion rate is: (orders ÷ visits) × 100.
          </p>

          <div style={{ background: "var(--ice)", border: "1px solid var(--sky)", borderRadius: "12px", padding: "28px 32px", margin: "32px 0" }}>
            <p style={{ fontSize: "15px", fontFamily: "Inter, system-ui, sans-serif", fontWeight: 600, color: "var(--cobalt)", marginBottom: "12px" }}>Interpreting your conversion rate:</p>
            <ul style={{ margin: 0, padding: "0 0 0 20px", display: "flex", flexDirection: "column", gap: "8px" }}>
              {[
                "Under 0.5%: Severe conversion problem — listing fundamentally needs work",
                "0.5-1.0%: Below average — likely one or two fixable issues",
                "1-3%: Average — room for improvement but not an emergency",
                "3-5%: Strong — focus on traffic growth, not conversion",
                "5%+: Excellent — scaling traffic will directly scale revenue",
              ].map((item, i) => (
                <li key={i} style={{ fontSize: "16px", color: "var(--ink)", lineHeight: 1.6 }}>{item}</li>
              ))}
            </ul>
          </div>

          <p style={{ fontSize: "17px", color: "var(--ink)", lineHeight: 1.8, marginBottom: "48px" }}>
            If your conversion rate is under 1.5%, you have a conversion problem. Here are the five most common causes.
          </p>

          <h2 style={{ fontSize: "32px", marginBottom: "20px", marginTop: "64px" }}>Problem 1: Your photos aren&rsquo;t doing the job</h2>

          <p style={{ fontSize: "17px", color: "var(--ink)", lineHeight: 1.8, marginBottom: "24px" }}>
            Photos are the primary conversion tool on Etsy. Buyers can&rsquo;t touch your product, smell your candle, or feel the weight of your ceramic mug. Photos are all they have. If your photos don&rsquo;t answer every visual question the buyer has, they leave.
          </p>

          <p style={{ fontSize: "17px", color: "var(--ink)", lineHeight: 1.8, marginBottom: "24px" }}>
            The questions your photos need to answer:
          </p>

          <ul style={{ padding: "0 0 0 24px", margin: "0 0 24px", display: "flex", flexDirection: "column", gap: "10px" }}>
            {[
              "What does this actually look like in real life? (Natural light, accurate color)",
              "How big is it? (Photo with a hand, common object, or measuring tape)",
              "What does the detail look like? (Macro or close-up of texture, finish, print quality)",
              "What does it look like in use or context? (In a home, being worn, in a gift context)",
              "What does the packaging look like? (Critical for gift buyers)",
            ].map((item, i) => (
              <li key={i} style={{ fontSize: "16px", color: "var(--ink)", lineHeight: 1.7 }}>{item}</li>
            ))}
          </ul>

          <p style={{ fontSize: "17px", color: "var(--ink)", lineHeight: 1.8, marginBottom: "48px" }}>
            If your first photo is a white-background product shot with no scale reference, you&rsquo;re starting the buyer relationship with uncertainty. Uncertainty kills conversions.
          </p>

          <h2 style={{ fontSize: "32px", marginBottom: "20px", marginTop: "64px" }}>Problem 2: Your description doesn&rsquo;t answer buyer questions</h2>

          <p style={{ fontSize: "17px", color: "var(--ink)", lineHeight: 1.8, marginBottom: "24px" }}>
            Every question a buyer has that your listing doesn&rsquo;t answer is a reason to bounce. Check your pre-purchase messages — the questions buyers ask you are the questions your listing failed to answer.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "20px", margin: "32px 0 48px" }}>
            <div style={{ background: "var(--ice)", borderRadius: "12px", padding: "28px", borderTop: "3px solid #c0392b" }}>
              <p style={{ fontSize: "11px", fontFamily: "Inter, system-ui, sans-serif", fontWeight: 700, color: "#e57373", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "16px" }}>
                Description that creates friction
              </p>
              <p style={{ fontSize: "16px", color: "var(--ink)", lineHeight: 1.7 }}>
                &ldquo;Beautiful handmade candle, great for gifts. Ships within 1-2 weeks.&rdquo;
              </p>
            </div>
            <div style={{ background: "var(--cobalt)", borderRadius: "12px", padding: "28px", borderTop: "3px solid var(--gold)" }}>
              <p style={{ fontSize: "11px", fontFamily: "Inter, system-ui, sans-serif", fontWeight: 700, color: "var(--gold)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "16px" }}>
                Description that removes friction
              </p>
              <p style={{ fontSize: "16px", color: "var(--warm-white)", lineHeight: 1.7 }}>
                &ldquo;Non-toxic soy candle, 8oz — 50-hour burn. Phthalate-free fragrance. Ships within 2 business days, typically arrives in 5-7 days for US orders. Gift wrapping available — add a note at checkout.&rdquo;
              </p>
            </div>
          </div>

          <h2 style={{ fontSize: "32px", marginBottom: "20px", marginTop: "64px" }}>Problem 3: No social proof (or stale social proof)</h2>

          <p style={{ fontSize: "17px", color: "var(--ink)", lineHeight: 1.8, marginBottom: "24px" }}>
            Reviews are the dominant trust signal on Etsy. A shop with zero reviews is asking a buyer to trust a stranger. A shop with 3 reviews averaging 5 stars has minimal proof. A shop whose most recent review is from 14 months ago looks dormant.
          </p>

          <p style={{ fontSize: "17px", color: "var(--ink)", lineHeight: 1.8, marginBottom: "24px" }}>
            If you have fewer than 20 reviews or no recent reviews, getting more reviews should be your top conversion priority. Tactics that help:
          </p>

          <ul style={{ padding: "0 0 0 24px", margin: "0 0 48px", display: "flex", flexDirection: "column", gap: "10px" }}>
            {[
              "Include a thank-you card with every order that mentions leaving a review",
              "Send a follow-up message 7-10 days after delivery asking if everything arrived well",
              "Respond publicly to every review — it shows an active, engaged seller",
              "Make sure your packaging and product experience are review-worthy",
            ].map((item, i) => (
              <li key={i} style={{ fontSize: "16px", color: "var(--ink)", lineHeight: 1.7 }}>{item}</li>
            ))}
          </ul>

          <h2 style={{ fontSize: "32px", marginBottom: "20px", marginTop: "64px" }}>Problem 4: Your price point isn&rsquo;t justified by your presentation</h2>

          <p style={{ fontSize: "17px", color: "var(--ink)", lineHeight: 1.8, marginBottom: "24px" }}>
            On Etsy, price and perceived value must be aligned. If your listing looks like a $12 product but is priced at $40, buyers won&rsquo;t buy at $40 — they&rsquo;ll feel ripped off even before purchasing.
          </p>

          <p style={{ fontSize: "17px", color: "var(--ink)", lineHeight: 1.8, marginBottom: "48px" }}>
            The fix is almost never to lower your price. It&rsquo;s to upgrade your presentation to match your price. Better photos, more specific material descriptions, process details, and social proof together create the visual and textual case for your price point.
          </p>

          <h2 style={{ fontSize: "32px", marginBottom: "20px", marginTop: "64px" }}>Problem 5: Shipping creates last-minute friction</h2>

          <p style={{ fontSize: "17px", color: "var(--ink)", lineHeight: 1.8, marginBottom: "24px" }}>
            Cart abandonment often happens at the moment a buyer sees the shipping cost or timeline for the first time. If your shipping costs are high, surface them early in the listing description. If your processing time is long, address this proactively — especially for gift buyers with deadlines.
          </p>

          <p style={{ fontSize: "17px", color: "var(--ink)", lineHeight: 1.8, marginBottom: "48px" }}>
            Offering free shipping on orders above a threshold (even if you&rsquo;ve built the cost into your price) measurably improves conversion for most Etsy shops.
          </p>

          <div style={{ background: "var(--midnight)", borderRadius: "16px", padding: "40px", margin: "64px 0" }}>
            <p style={{ fontSize: "11px", fontFamily: "Inter, system-ui, sans-serif", fontWeight: 600, color: "var(--horizon)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "16px" }}>
              Diagnose your specific problem
            </p>
            <h3 style={{ fontSize: "26px", color: "var(--warm-white)", marginBottom: "16px" }}>
              Know exactly what your buyers need before they buy.
            </h3>
            <p style={{ fontSize: "16px", color: "var(--sky)", lineHeight: 1.7, marginBottom: "24px" }}>
              Claro identifies the specific concerns and conversion barriers for your shop&rsquo;s buyer — so you know which of the five problems above to fix first. See <a href="/pricing" style={{ color: "var(--gold)" }}>pricing</a>.
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
              { title: "What Etsy Buyers Actually Want: 7 Insights from 10,000 Reviews", href: "/blog/what-etsy-buyers-want", label: "Buyer Research" },
              { title: "The Etsy Buyer Psychology Guide: Why People Buy Handmade", href: "/blog/etsy-buyer-psychology", label: "Buyer Research" },
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
              headline: "Why Your Etsy Listings Aren't Converting (And How to Fix It)",
              author: { "@type": "Organization", name: "Claro" },
              publisher: { "@type": "Organization", name: "Claro", url: "https://meetclaro.ai" },
              datePublished: "2026-04-15",
              description: "Getting traffic but no sales? The problem is almost always one of five fixable issues. Here's how to diagnose and fix each one.",
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
