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
    slug: "etsy-listing-copy-buyer-language",
    title: "How to Write Etsy Listings That Convert: A Guide Built From Real Buyer Language",
    excerpt: "Your listing isn't failing because your product is wrong. It's failing because it's speaking to you, not your buyer. Here's how to fix that.",
    category: "Etsy Growth",
    readTime: "10 min read",
    date: "April 2026",
  },
];

const categories = ["All", "Buyer Research", "Brand Strategy", "Content", "Etsy Growth"];

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
