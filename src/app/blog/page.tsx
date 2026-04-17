import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog — Claro",
  description: "Buyer research, brand strategy, and content intelligence for small business owners and Etsy sellers.",
};

const posts = [
  {
    slug: "buyer-persona-etsy-shop",
    title: "How to Build a Buyer Persona for Your Etsy Shop (Free Template)",
    excerpt: "Most Etsy sellers have never formally defined who buys from them. Here's a step-by-step process — and the free template we wish existed when we started.",
    category: "Buyer Research",
    readTime: "12 min read",
    date: "April 2026",
  },
  {
    slug: "who-buys-on-etsy",
    title: "Who Buys on Etsy? A Data-Backed Look at the Real Etsy Buyer",
    excerpt: "Etsy has 96 million active buyers. But who are they actually? Demographics, motivations, and buying patterns every seller needs to understand.",
    category: "Buyer Research",
    readTime: "11 min read",
    date: "April 2026",
  },
  {
    slug: "etsy-target-audience",
    title: "How to Find Your Etsy Target Audience (Without Paying for Research)",
    excerpt: "You don't need a $500 research tool to understand who buys from your Etsy shop. Here are the free methods that actually work.",
    category: "Buyer Research",
    readTime: "10 min read",
    date: "April 2026",
  },
  {
    slug: "what-etsy-buyers-want",
    title: "What Etsy Buyers Actually Want: 7 Insights from 10,000 Reviews",
    excerpt: "After analyzing thousands of Etsy reviews across categories, the same patterns emerge. Here are the 7 things buyers consistently want — in their own words.",
    category: "Buyer Research",
    readTime: "13 min read",
    date: "April 2026",
  },
  {
    slug: "etsy-audience-research",
    title: "How to Do Audience Research for Your Etsy Shop",
    excerpt: "A practical, step-by-step guide to Etsy shop audience research — using methods that work even if you have no sales yet.",
    category: "Buyer Research",
    readTime: "12 min read",
    date: "April 2026",
  },
  {
    slug: "etsy-buyer-psychology",
    title: "The Etsy Buyer Psychology Guide: Why People Buy Handmade",
    excerpt: "Understanding why people buy handmade changes how you write, photograph, and price your Etsy products. Here's what's actually driving the purchase.",
    category: "Buyer Research",
    readTime: "14 min read",
    date: "April 2026",
  },
  {
    slug: "etsy-listing-copy-buyer-language",
    title: "How to Write Etsy Listings That Convert (Built From Real Buyer Language)",
    excerpt: "Your listing isn't failing because your product is wrong. It's failing because it's speaking to you, not your buyer. Here's how to fix that.",
    category: "Etsy Growth",
    readTime: "10 min read",
    date: "April 2026",
  },
  {
    slug: "reddit-etsy-buyer-research",
    title: "How to Use Reddit to Understand Your Etsy Buyers",
    excerpt: "Reddit is the most underused buyer research tool available to Etsy sellers. Here's exactly how to use it — subreddits, search methods, and what to look for.",
    category: "Buyer Research",
    readTime: "11 min read",
    date: "April 2026",
  },
  {
    slug: "customer-research-small-business",
    title: "Customer Research for Small Business Owners: The Complete Guide",
    excerpt: "You don't need a market research budget. You need the right methods. Here's the complete customer research playbook for small business owners.",
    category: "Buyer Research",
    readTime: "14 min read",
    date: "April 2026",
  },
  {
    slug: "etsy-listing-title-formula",
    title: "The Best Etsy Listing Title Formula (With Examples)",
    excerpt: "Your Etsy listing title is the most important SEO and conversion element in your shop. Here's the formula that works — with real examples across categories.",
    category: "Etsy Growth",
    readTime: "10 min read",
    date: "April 2026",
  },
  {
    slug: "etsy-shop-description",
    title: "How to Write an Etsy Shop Description That Actually Sells",
    excerpt: "Most Etsy shop descriptions are ignored. Here's how to write one that builds trust, signals quality, and converts first-time visitors into buyers.",
    category: "Etsy Growth",
    readTime: "9 min read",
    date: "April 2026",
  },
  {
    slug: "etsy-seo-2025",
    title: "Etsy SEO in 2025: What Actually Works (And What's Outdated)",
    excerpt: "Etsy's search algorithm has changed significantly. Here's what still moves the needle in 2025 — and what you should stop doing.",
    category: "Etsy Growth",
    readTime: "12 min read",
    date: "April 2026",
  },
  {
    slug: "etsy-keyword-research",
    title: "How to Find the Right Keywords for Your Etsy Shop",
    excerpt: "Etsy keyword research isn't about finding what people search most — it's about finding what your buyer searches specifically. Here's the method.",
    category: "Etsy Growth",
    readTime: "11 min read",
    date: "April 2026",
  },
  {
    slug: "etsy-listings-not-converting",
    title: "Why Your Etsy Listings Aren't Converting (And How to Fix It)",
    excerpt: "Getting traffic but no sales? The problem is almost always one of five fixable issues. Here's how to diagnose and fix each one.",
    category: "Etsy Growth",
    readTime: "12 min read",
    date: "April 2026",
  },
  {
    slug: "etsy-reviews-listing-copy",
    title: "How to Use Buyer Reviews to Write Better Etsy Listings",
    excerpt: "Your best listing copy is already written — by your buyers. Here's exactly how to extract it from reviews and turn it into listings that convert.",
    category: "Etsy Growth",
    readTime: "10 min read",
    date: "April 2026",
  },
  {
    slug: "brand-strategy-small-business",
    title: "How to Build a Brand Strategy for Your Small Business",
    excerpt: "A brand strategy isn't just a logo and color palette. It's the decisions that determine how your business is perceived — and whether buyers choose you.",
    category: "Brand Strategy",
    readTime: "13 min read",
    date: "April 2026",
  },
  {
    slug: "brand-voice-small-business",
    title: "What Is Brand Voice? (And How to Build One That Sounds Like You)",
    excerpt: "Brand voice is what makes your copy sound like a person instead of a template. Here's how to define yours — and apply it consistently.",
    category: "Brand Strategy",
    readTime: "11 min read",
    date: "April 2026",
  },
  {
    slug: "positioning-statement-small-business",
    title: "How to Write a Positioning Statement for Your Small Business",
    excerpt: "A positioning statement is the single sentence that explains who you serve, what you offer, and why buyers should choose you.",
    category: "Brand Strategy",
    readTime: "10 min read",
    date: "April 2026",
  },
  {
    slug: "solopreneur-brand-guide",
    title: "The Solopreneur Brand Guide: How to Sound Like a Real Brand",
    excerpt: "One-person shops can sound as credible as large brands — without faking scale. Here's how to build brand presence that punches above your size.",
    category: "Brand Strategy",
    readTime: "12 min read",
    date: "April 2026",
  },
  {
    slug: "etsy-shop-differentiation",
    title: "How to Differentiate Your Etsy Shop from Competitors",
    excerpt: "When buyers search Etsy, they see hundreds of similar products. Here's how to make your shop the obvious choice — without competing on price.",
    category: "Brand Strategy",
    readTime: "11 min read",
    date: "April 2026",
  },
  {
    slug: "small-business-brand-trust",
    title: "What Makes a Small Business Brand Feel Trustworthy?",
    excerpt: "Trust is the conversion variable that most Etsy sellers underestimate. Here's what actually builds it — and what quietly destroys it.",
    category: "Brand Strategy",
    readTime: "11 min read",
    date: "April 2026",
  },
  {
    slug: "etsy-content-strategy",
    title: "How to Build a Content Strategy for Your Etsy Shop",
    excerpt: "Most Etsy sellers post content reactively and inconsistently. A content strategy changes that — and it's far simpler to build than you think.",
    category: "Content",
    readTime: "11 min read",
    date: "April 2026",
  },
  {
    slug: "content-strategy-solopreneurs",
    title: "Content Strategy for Solopreneurs: How to Create Content That Converts",
    excerpt: "You don't have a content team. You have 4 hours a week and something real to say. Here's the content strategy that works for solopreneurs.",
    category: "Content",
    readTime: "12 min read",
    date: "April 2026",
  },
  {
    slug: "instagram-captions-etsy-shop",
    title: "How to Write Instagram Captions for Your Etsy Shop",
    excerpt: "Instagram captions that convert don't describe the photo. They speak to the person looking at it. Here's how to write them — with examples.",
    category: "Content",
    readTime: "10 min read",
    date: "April 2026",
  },
  {
    slug: "tiktok-for-etsy-shop",
    title: "What to Post on TikTok for Your Etsy Shop (With Examples)",
    excerpt: "TikTok has made Etsy shops overnight successes. Here's what actually works — specific content types, real examples, and the TikTok-to-Etsy conversion path.",
    category: "Content",
    readTime: "11 min read",
    date: "April 2026",
  },
  {
    slug: "30-day-content-calendar-small-business",
    title: "How to Write a 30-Day Content Calendar for Your Small Business",
    excerpt: "A 30-day content calendar is the difference between reactive posting and a system. Here's how to build one in an afternoon.",
    category: "Content",
    readTime: "10 min read",
    date: "April 2026",
  },
  {
    slug: "ai-etsy-buyer-research",
    title: "How AI Can Help You Understand Your Etsy Buyers",
    excerpt: "AI Etsy buyer research is transforming how sellers understand their customers. Here's how to use AI tools to uncover buyer motivations, language, and purchase triggers — without hours of manual work.",
    category: "AI & Tools",
    readTime: "9 min read",
    date: "April 2026",
  },
  {
    slug: "erank-vs-marmalead-vs-claro",
    title: "eRank vs Marmalead vs Claro: What's the Difference?",
    excerpt: "eRank and Marmalead help you rank in search. Claro helps you convert once you're found. Here's an honest breakdown of all three tools and which one solves your actual problem.",
    category: "AI & Tools",
    readTime: "8 min read",
    date: "April 2026",
  },
  {
    slug: "what-is-buyer-intelligence",
    title: "What Is Buyer Intelligence? (And Why Every Small Business Needs It)",
    excerpt: "Buyer intelligence is the systematic practice of understanding who your customers are and why they buy. Here's what it means, why it matters, and how to build it without an enterprise research budget.",
    category: "AI & Tools",
    readTime: "10 min read",
    date: "April 2026",
  },
  {
    slug: "etsy-pricing-strategy",
    title: "How to Price Your Etsy Products (Without Undervaluing Your Work)",
    excerpt: "Most Etsy sellers are charging too little — and it's not an accident. Here's a practical pricing strategy that covers your real costs, reflects your value, and builds a sustainable business.",
    category: "Etsy Growth",
    readTime: "13 min read",
    date: "April 2026",
  },
];

const categories = ["All", "Buyer Research", "Brand Strategy", "Content", "Etsy Growth", "AI & Tools"];

export default function Blog() {
  return (
    <>
      <Nav />
      <main style={{ background: "var(--warm-white)" }}>

        {/* Hero */}
        <section style={{ paddingTop: "120px", paddingBottom: "64px", padding: "120px 40px 64px", textAlign: "center" }}>
          <div style={{ maxWidth: "600px", margin: "0 auto" }}>
            <h1 style={{ fontSize: "clamp(40px, 5vw, 56px)", marginBottom: "20px" }}>
              Intelligence for small business owners.
            </h1>
            <p style={{ fontSize: "18px", color: "var(--ink)" }}>
              Buyer research, brand strategy, and content built from real signals — not templates.
            </p>
          </div>
        </section>

        {/* Category filter */}
        <div style={{ padding: "0 40px 48px", display: "flex", justifyContent: "center", gap: "12px", flexWrap: "wrap" }}>
          {categories.map((cat) => (
            <button
              key={cat}
              style={{
                padding: "8px 18px",
                background: cat === "All" ? "var(--cobalt)" : "var(--ice)",
                color: cat === "All" ? "var(--warm-white)" : "var(--ink)",
                border: "1px solid var(--sky)",
                borderRadius: "20px",
                fontSize: "13px",
                fontFamily: "Inter, system-ui, sans-serif",
                fontWeight: 500,
                cursor: "pointer",
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Posts grid */}
        <section style={{ padding: "0 40px 96px", maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: "24px" }}>
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                style={{ textDecoration: "none" }}
              >
                <article
                  style={{
                    background: "var(--ice)",
                    border: "1px solid var(--sky)",
                    borderRadius: "16px",
                    padding: "32px",
                    height: "100%",
                    transition: "box-shadow 150ms",
                    display: "flex",
                    flexDirection: "column",
                    gap: "16px",
                  }}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span
                      style={{
                        fontSize: "12px",
                        fontFamily: "Inter, system-ui, sans-serif",
                        fontWeight: 600,
                        color: "var(--cobalt)",
                        background: "rgba(44,82,130,0.1)",
                        padding: "4px 10px",
                        borderRadius: "12px",
                      }}
                    >
                      {post.category}
                    </span>
                    <span style={{ fontSize: "12px", color: "var(--horizon)", fontFamily: "Inter, system-ui, sans-serif" }}>
                      {post.readTime}
                    </span>
                  </div>

                  <h2 style={{ fontSize: "22px", color: "var(--midnight)", lineHeight: 1.3, flexGrow: 1 }}>
                    {post.title}
                  </h2>

                  <p style={{ fontSize: "15px", color: "var(--ink)", lineHeight: 1.6 }}>
                    {post.excerpt}
                  </p>

                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span style={{ fontSize: "13px", color: "var(--horizon)", fontFamily: "Inter, system-ui, sans-serif" }}>
                      {post.date}
                    </span>
                    <span style={{ fontSize: "14px", color: "var(--cobalt)", fontFamily: "Inter, system-ui, sans-serif", fontWeight: 500 }}>
                      Read →
                    </span>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
