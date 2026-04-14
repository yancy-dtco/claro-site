import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

const steps = [
  {
    num: "01",
    title: "You tell Claro about your shop",
    body: "Enter your Etsy shop URL or describe what you sell. No account needed for the free report — just your shop name or product category. Takes ten seconds.",
  },
  {
    num: "02",
    title: "Claro reads what your buyers say",
    body: "Claro pulls signals from the places your buyers actually talk: Reddit communities, product reviews, forums, and related conversations across the web. Not templates. Not generic AI guesses. Real buyer language, at scale.",
  },
  {
    num: "03",
    title: "Claro identifies patterns",
    body: "Our synthesis layer reads thousands of signals and finds what your buyers consistently say: the words they use, what drives their decisions, what stops them, and what makes them choose one shop over another.",
  },
  {
    num: "04",
    title: "Your report arrives",
    body: "In about two minutes, you get a complete Buyer Intelligence Report: a psychographic profile of your buyer, their exact vocabulary, purchase triggers and barriers, and 10 content angles built from what they actually said.",
  },
  {
    num: "05",
    title: "You create content that lands",
    body: "Use your report to rewrite listings, sharpen your social posts, build your brand voice, or just finally understand who you're talking to. The guessing stops here.",
  },
];

const sources = [
  {
    name: "Etsy Reviews",
    description:
      "What buyers say after they buy — the most direct signal of what they valued, what surprised them, and what they'll tell their friends.",
  },
  {
    name: "Reddit Communities",
    description:
      "r/EtsySellers, r/Etsy, and category-specific communities where your buyers ask questions, share experiences, and use their real vocabulary.",
  },
  {
    name: "Product Reviews (Across Platforms)",
    description:
      "Buyers in your category leave signals everywhere — not just on Etsy. Claro reads the cross-platform pattern to build a complete picture.",
  },
  {
    name: "Community Forums & Discussions",
    description:
      "Where your buyers go when they're deciding. What they compare. What they worry about. What finally tips them over to buy.",
  },
];

export default function HowItWorks() {
  return (
    <>
      <Nav />
      <main style={{ background: "var(--warm-white)" }}>

        {/* Hero */}
        <section style={{ paddingTop: "120px", paddingBottom: "80px", padding: "120px 40px 80px", textAlign: "center" }}>
          <div style={{ maxWidth: "680px", margin: "0 auto" }}>
            <h1 style={{ fontSize: "clamp(40px, 5vw, 60px)", marginBottom: "24px" }}>
              You&rsquo;ve been building for someone.{" "}
              <em>Now meet them.</em>
            </h1>
            <p style={{ fontSize: "20px", color: "var(--ink)", lineHeight: 1.6 }}>
              Here&rsquo;s exactly what Claro does — and how it builds a buyer
              picture that no generic AI tool can replicate.
            </p>
          </div>
        </section>

        {/* Step by step */}
        <section style={{ padding: "0 40px 96px", maxWidth: "900px", margin: "0 auto" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
            {steps.map((step, i) => (
              <div
                key={step.num}
                style={{
                  display: "grid",
                  gridTemplateColumns: "80px 1fr",
                  gap: "32px",
                  paddingBottom: "48px",
                  borderLeft: i < steps.length - 1 ? "2px solid var(--sky)" : "2px solid transparent",
                  marginLeft: "40px",
                  paddingLeft: "40px",
                  position: "relative",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    left: "-17px",
                    top: "0",
                    width: "32px",
                    height: "32px",
                    borderRadius: "50%",
                    background: "var(--cobalt)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <span style={{ fontSize: "13px", fontFamily: "Inter, system-ui, sans-serif", fontWeight: 600, color: "var(--warm-white)" }}>
                    {parseInt(step.num)}
                  </span>
                </div>
                <div style={{ paddingLeft: "48px" }}>
                  <h3 style={{ fontSize: "24px", marginBottom: "12px" }}>{step.title}</h3>
                  <p style={{ fontSize: "17px", color: "var(--ink)", lineHeight: 1.7 }}>{step.body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Where Claro gets its signals */}
        <section style={{ background: "var(--midnight)", padding: "96px 40px" }}>
          <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: "64px" }}>
              <h2 style={{ fontSize: "clamp(32px, 4vw, 48px)", color: "var(--warm-white)", marginBottom: "16px" }}>
                Where Claro gets its signals
              </h2>
              <p style={{ fontSize: "18px", color: "var(--sky)" }}>
                Transparent by design. You should know exactly where your buyer
                intelligence comes from.
              </p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "24px" }}>
              {sources.map((s) => (
                <div
                  key={s.name}
                  style={{
                    background: "var(--ink)",
                    borderRadius: "16px",
                    padding: "32px",
                    borderTop: "3px solid var(--cobalt)",
                  }}
                >
                  <h4 style={{ fontSize: "18px", color: "var(--warm-white)", marginBottom: "12px" }}>{s.name}</h4>
                  <p style={{ fontSize: "15px", color: "var(--sky)", lineHeight: 1.6 }}>{s.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Before / After */}
        <section style={{ padding: "96px 40px" }}>
          <div style={{ maxWidth: "900px", margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: "56px" }}>
              <h2 style={{ fontSize: "clamp(32px, 4vw, 48px)", marginBottom: "16px" }}>
                The difference is specific.
              </h2>
              <p style={{ fontSize: "18px", color: "var(--ink)" }}>
                Vague output is worse than nothing. Claro never hedges.
              </p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px" }}>
              {[
                {
                  label: "Generic AI",
                  labelColor: "#e57373",
                  bg: "var(--ice)",
                  border: "#c0392b",
                  text: "var(--ink)",
                  quote: "Your audience values quality and may respond to messaging around craftsmanship.",
                },
                {
                  label: "Claro",
                  labelColor: "var(--gold)",
                  bg: "var(--cobalt)",
                  border: "var(--gold)",
                  text: "var(--warm-white)",
                  quote: "Your buyer Googles 'non-toxic' before she reads the price. Lead with what's in it, not what it looks like.",
                },
              ].map((card) => (
                <div
                  key={card.label}
                  style={{
                    background: card.bg,
                    borderRadius: "16px",
                    padding: "36px",
                    borderTop: `3px solid ${card.border}`,
                  }}
                >
                  <p style={{ fontSize: "11px", fontFamily: "Inter, system-ui, sans-serif", fontWeight: 600, color: card.labelColor, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "20px" }}>
                    {card.label}
                  </p>
                  <p style={{ fontSize: "18px", color: card.text, lineHeight: 1.7, fontStyle: "italic" }}>
                    &ldquo;{card.quote}&rdquo;
                  </p>
                </div>
              ))}
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
              Free report. No credit card. Two minutes.
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
