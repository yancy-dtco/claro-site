import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — Claro",
  description: "Claro was built for small business owners who deserve the same audience intelligence that major brands take for granted.",
};

export default function About() {
  return (
    <>
      <Nav />
      <main style={{ background: "var(--warm-white)" }}>

        {/* Hero */}
        <section style={{ paddingTop: "120px", paddingBottom: "80px", padding: "120px 40px 80px" }}>
          <div style={{ maxWidth: "720px", margin: "0 auto" }}>
            <h1 style={{ fontSize: "clamp(40px, 5vw, 60px)", marginBottom: "32px", lineHeight: 1.1 }}>
              Built for people who make real things,<br />
              <em>for real people.</em>
            </h1>
            <p style={{ fontSize: "20px", color: "var(--ink)", lineHeight: 1.7, marginBottom: "24px" }}>
              Claro was built by someone who spent years helping consumer brands understand their audiences at scale — and kept watching small business owners do it with nothing.
            </p>
            <p style={{ fontSize: "20px", color: "var(--ink)", lineHeight: 1.7, marginBottom: "24px" }}>
              Not because the problem was small. Because the tools didn&rsquo;t exist.
            </p>
            <p style={{ fontSize: "20px", color: "var(--ink)", lineHeight: 1.7 }}>
              Every existing tool solved keywords. None of them solved the human. Claro does.
            </p>
          </div>
        </section>

        {/* What Claro is */}
        <section style={{ background: "var(--midnight)", padding: "96px 40px" }}>
          <div style={{ maxWidth: "1100px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "48px", alignItems: "start" }}>
            <div>
              <h2 style={{ fontSize: "clamp(32px, 4vw, 48px)", color: "var(--warm-white)", marginBottom: "32px" }}>What Claro is.</h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                {[
                  "A strategic partner — arrives with answers, not frameworks",
                  "Editorially intelligent — reads like something authoritative",
                  "Warm without being cute — respects the user's livelihood",
                  "Specific and sharp — the more precise, the more powerful",
                  "Confident, never arrogant — knows it delivers",
                  "Built on real signals — not templates, not guesses",
                ].map((item) => (
                  <div key={item} style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
                    <span style={{ color: "var(--cobalt)", marginTop: "3px", flexShrink: 0 }}>✓</span>
                    <p style={{ fontSize: "16px", color: "var(--sky)", lineHeight: 1.6 }}>{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 style={{ fontSize: "clamp(32px, 4vw, 48px)", color: "var(--warm-white)", marginBottom: "32px" }}>What Claro is not.</h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                {[
                  "Dry or clinical (the hard no — fight this at every decision point)",
                  "Generic AI output (never feels like a ChatGPT wrapper)",
                  "An SEO keyword tool (not eRank, not Marmalead)",
                  "Hustle-culture energy (no 'crush it,' no 'dominate')",
                  "A template factory (output feels built for you)",
                  "A content scheduler (Claro does strategy, not publishing logistics)",
                ].map((item) => (
                  <div key={item} style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
                    <span style={{ color: "#e57373", marginTop: "3px", flexShrink: 0 }}>✕</span>
                    <p style={{ fontSize: "16px", color: "var(--sky)", lineHeight: 1.6 }}>{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* The wow moment */}
        <section style={{ padding: "96px 40px" }}>
          <div style={{ maxWidth: "720px", margin: "0 auto", textAlign: "center" }}>
            <h2 style={{ fontSize: "clamp(32px, 4vw, 48px)", marginBottom: "32px" }}>The north star.</h2>
            <div style={{ background: "var(--ice)", borderRadius: "16px", padding: "48px 40px", border: "1px solid var(--sky)", textAlign: "left" }}>
              <p style={{ fontSize: "18px", color: "var(--ink)", lineHeight: 1.8, fontStyle: "italic" }}>
                &ldquo;The first time a user sees their buyer described back to them — their actual words, their actual fears, their actual reasons for buying — they stop guessing. Their vision sharpens. Their business starts feeling possible in a new way.
              </p>
              <p style={{ fontSize: "18px", color: "var(--midnight)", lineHeight: 1.8, fontWeight: 600, marginTop: "16px" }}>
                That moment is what Claro is built for.&rdquo;
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{ background: "var(--cobalt)", padding: "80px 40px", textAlign: "center" }}>
          <div style={{ maxWidth: "600px", margin: "0 auto" }}>
            <h2 style={{ fontSize: "clamp(32px, 4vw, 48px)", color: "var(--warm-white)", marginBottom: "20px" }}>
              Ready to meet your buyer?
            </h2>
            <p style={{ fontSize: "18px", color: "var(--sky)", marginBottom: "40px" }}>
              Free. No credit card. Two minutes.
            </p>
            <a
              href="/#get-started"
              style={{
                display: "inline-block",
                padding: "16px 36px",
                background: "var(--gold)",
                color: "var(--midnight)",
                borderRadius: "8px",
                fontSize: "16px",
                fontFamily: "Inter, system-ui, sans-serif",
                fontWeight: 700,
                textDecoration: "none",
              }}
            >
              Get your free buyer report →
            </a>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
