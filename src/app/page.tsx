import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

const testimonials = [
  { quote: "I finally feel like I know who I'm talking to.", shop: "ceramics seller, Etsy" },
  { quote: "This is the first tool that told me what to say, not just what to search for.", shop: "candle maker, Etsy" },
  { quote: "It feels like someone did my homework.", shop: "jewelry designer, Etsy" },
];

const steps = [
  {
    num: "01",
    title: "Connect your shop",
    body: "Enter your Etsy shop URL or describe what you sell. Takes 10 seconds.",
  },
  {
    num: "02",
    title: "Claro reads the signals",
    body: "Reddit threads, reviews, forums — the real words your buyers use, analyzed at scale.",
  },
  {
    num: "03",
    title: "Meet your buyer",
    body: "A complete picture of who's been buying, why they chose you, and what to say next.",
  },
];

const tiers = [
  {
    name: "Know Your Buyer",
    price: "$49",
    period: "/mo",
    description:
      "A complete picture of who's buying — built from what they actually say online.",
    features: [
      "Full Buyer Intelligence Report",
      "Buyer psychographic profile",
      "Exact buyer vocabulary",
      "Purchase triggers & barriers",
      "10 content angles, ready to use",
      "Monthly signal refresh",
    ],
    cta: "Get started",
    featured: false,
  },
  {
    name: "Build Your Brand",
    price: "$79",
    period: "/mo",
    description:
      "Everything in Tier 1, plus your brand voice, positioning, and messaging pillars — all built from your actual buyer data.",
    features: [
      "Everything in Know Your Buyer",
      "Brand voice & tone guide",
      "Positioning statement",
      "Messaging pillars",
      "Tagline options",
      "Competitor differentiation",
    ],
    cta: "Get started",
    featured: true,
    badge: "Most popular",
  },
  {
    name: "Run Your Brand",
    price: "$149",
    period: "/mo",
    description:
      "Everything in Tier 2, plus a full content calendar with posts written for your brand — refreshed every month.",
    features: [
      "Everything in Build Your Brand",
      "30-day content calendar",
      "Posts written for IG, TikTok, Pinterest, email",
      "Product listing rewrites",
      "Ad creative briefs",
      "Monthly content refresh",
    ],
    cta: "Get started",
    featured: false,
  },
];

export default function Home() {
  return (
    <>
      <Nav />

      <main style={{ background: "var(--warm-white)" }}>

        {/* ── HERO ── */}
        <section
          style={{
            paddingTop: "120px",
            paddingBottom: "96px",
            paddingLeft: "24px",
            paddingRight: "24px",
            textAlign: "center",
          }}
        >
          <div style={{ maxWidth: "760px", margin: "0 auto" }}>
            <h1
              style={{
                fontSize: "clamp(44px, 6vw, 68px)",
                lineHeight: 1.08,
                marginBottom: "28px",
                color: "var(--midnight)",
              }}
            >
              You&rsquo;ve been building for someone.{" "}
              <em style={{ fontStyle: "italic" }}>Now meet them.</em>
            </h1>

            <p
              style={{
                fontSize: "20px",
                lineHeight: 1.6,
                color: "var(--ink)",
                maxWidth: "580px",
                margin: "0 auto 48px",
              }}
            >
              Claro analyzes real conversations, reviews, and communities to build
              your complete buyer intelligence system — who they are, what drives
              them, and the exact words that make them buy.
            </p>

            {/* CTA form */}
            <div
              id="get-started"
              style={{
                display: "flex",
                gap: "12px",
                justifyContent: "center",
                flexWrap: "wrap",
                marginBottom: "16px",
              }}
            >
              <input
                type="text"
                placeholder="Your Etsy shop URL or product category"
                style={{
                  width: "320px",
                  padding: "14px 18px",
                  background: "var(--ice)",
                  border: "1px solid var(--sky)",
                  borderRadius: "8px",
                  fontSize: "15px",
                  fontFamily: "Inter, system-ui, sans-serif",
                  color: "var(--midnight)",
                  outline: "none",
                }}
              />
              <button
                style={{
                  padding: "14px 28px",
                  background: "var(--gold)",
                  color: "var(--midnight)",
                  borderRadius: "8px",
                  fontSize: "15px",
                  fontWeight: 600,
                  fontFamily: "Inter, system-ui, sans-serif",
                  whiteSpace: "nowrap",
                  transition: "background 150ms",
                }}
              >
                Get your free report →
              </button>
            </div>
            <p
              style={{
                fontSize: "13px",
                color: "var(--horizon)",
                fontFamily: "Inter, system-ui, sans-serif",
              }}
            >
              Free. No credit card. Ready in 2 minutes.
            </p>
          </div>

          {/* Social proof strip */}
          <div
            style={{
              maxWidth: "900px",
              margin: "64px auto 0",
              display: "flex",
              gap: "16px",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            {testimonials.map((t, i) => (
              <div
                key={i}
                style={{
                  background: "var(--ice)",
                  border: "1px solid var(--sky)",
                  borderRadius: "12px",
                  padding: "20px 24px",
                  maxWidth: "280px",
                  textAlign: "left",
                }}
              >
                <p
                  style={{
                    fontSize: "13px",
                    color: "var(--gold)",
                    marginBottom: "8px",
                    letterSpacing: "0.05em",
                  }}
                >
                  ★★★★★
                </p>
                <p
                  style={{
                    fontSize: "15px",
                    color: "var(--midnight)",
                    fontStyle: "italic",
                    marginBottom: "10px",
                    lineHeight: 1.5,
                  }}
                >
                  &ldquo;{t.quote}&rdquo;
                </p>
                <p
                  style={{
                    fontSize: "12px",
                    color: "var(--horizon)",
                    fontFamily: "Inter, system-ui, sans-serif",
                  }}
                >
                  — {t.shop}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── PROBLEM / SOLUTION ── */}
        <section
          style={{
            padding: "96px 40px",
            maxWidth: "1200px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "24px",
          }}
        >
          {/* Problem */}
          <div
            style={{
              background: "var(--ice)",
              borderRadius: "16px",
              padding: "48px 40px",
              border: "1px solid var(--sky)",
            }}
          >
            <p
              style={{
                fontSize: "11px",
                fontFamily: "Inter, system-ui, sans-serif",
                fontWeight: 500,
                letterSpacing: "0.1em",
                color: "var(--horizon)",
                textTransform: "uppercase",
                marginBottom: "20px",
              }}
            >
              The problem
            </p>
            <h2
              style={{
                fontSize: "28px",
                marginBottom: "20px",
                color: "var(--midnight)",
              }}
            >
              You built something real.
            </h2>
            <p style={{ fontSize: "17px", lineHeight: 1.7, color: "var(--ink)" }}>
              But you&rsquo;ve been guessing who it&rsquo;s for, what to say
              about it, and why your content isn&rsquo;t landing.
            </p>
            <p
              style={{
                fontSize: "17px",
                lineHeight: 1.7,
                color: "var(--ink)",
                marginTop: "16px",
              }}
            >
              That&rsquo;s not a talent problem.{" "}
              <strong style={{ color: "var(--midnight)" }}>
                It&rsquo;s an intelligence problem.
              </strong>
            </p>
          </div>

          {/* Solution */}
          <div
            style={{
              background: "var(--cobalt)",
              borderRadius: "16px",
              padding: "48px 40px",
            }}
          >
            <p
              style={{
                fontSize: "11px",
                fontFamily: "Inter, system-ui, sans-serif",
                fontWeight: 500,
                letterSpacing: "0.1em",
                color: "var(--sky)",
                textTransform: "uppercase",
                marginBottom: "20px",
              }}
            >
              The solution
            </p>
            <h2
              style={{
                fontSize: "28px",
                marginBottom: "20px",
                color: "var(--warm-white)",
              }}
            >
              Claro reads the signals your buyers leave.
            </h2>
            <p style={{ fontSize: "17px", lineHeight: 1.7, color: "var(--sky)" }}>
              Reviews, forums, communities — the real words your buyers use across
              the web, turned into a complete system: who your buyer is, how to
              sound, and what to create.
            </p>
          </div>
        </section>

        {/* ── HOW IT WORKS ── */}
        <section
          style={{
            padding: "96px 40px",
            background: "var(--warm-white)",
          }}
        >
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: "64px" }}>
              <h2
                style={{
                  fontSize: "clamp(32px, 4vw, 48px)",
                  marginBottom: "16px",
                }}
              >
                Three steps. Complete clarity.
              </h2>
              <p
                style={{
                  fontSize: "18px",
                  color: "var(--ink)",
                  maxWidth: "480px",
                  margin: "0 auto",
                }}
              >
                From shop URL to buyer intelligence in under two minutes.
              </p>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: "24px",
              }}
            >
              {steps.map((step) => (
                <div
                  key={step.num}
                  style={{
                    background: "var(--ice)",
                    border: "1px solid var(--sky)",
                    borderRadius: "16px",
                    padding: "40px 32px",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  <span
                    style={{
                      position: "absolute",
                      top: "16px",
                      right: "24px",
                      fontSize: "64px",
                      fontFamily: "'DM Serif Display', Georgia, serif",
                      color: "var(--sky)",
                      opacity: 0.4,
                      lineHeight: 1,
                      userSelect: "none",
                    }}
                  >
                    {step.num}
                  </span>
                  <h3
                    style={{
                      fontSize: "22px",
                      marginBottom: "16px",
                      color: "var(--midnight)",
                    }}
                  >
                    {step.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "16px",
                      color: "var(--ink)",
                      lineHeight: 1.6,
                    }}
                  >
                    {step.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── BEFORE / AFTER (WOW MOMENT) ── */}
        <section
          style={{
            background: "var(--midnight)",
            padding: "96px 40px",
          }}
        >
          <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: "64px" }}>
              <h2
                style={{
                  fontSize: "clamp(32px, 4vw, 48px)",
                  color: "var(--warm-white)",
                  marginBottom: "16px",
                }}
              >
                This is what it looks like when guesswork ends.
              </h2>
              <p style={{ fontSize: "18px", color: "var(--sky)" }}>
                A real example of what Claro returns.
              </p>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                gap: "24px",
                marginBottom: "64px",
              }}
            >
              {/* Before */}
              <div
                style={{
                  background: "var(--ink)",
                  borderRadius: "16px",
                  padding: "36px",
                  borderTop: "3px solid #c0392b",
                }}
              >
                <p
                  style={{
                    fontSize: "11px",
                    fontFamily: "Inter, system-ui, sans-serif",
                    fontWeight: 600,
                    letterSpacing: "0.1em",
                    color: "#e57373",
                    textTransform: "uppercase",
                    marginBottom: "20px",
                  }}
                >
                  Generic AI output
                </p>
                <p
                  style={{
                    fontSize: "17px",
                    color: "var(--sky)",
                    lineHeight: 1.7,
                    fontStyle: "italic",
                  }}
                >
                  &ldquo;Your audience values quality and may respond to messaging
                  around craftsmanship.&rdquo;
                </p>
              </div>

              {/* After */}
              <div
                style={{
                  background: "var(--cobalt)",
                  borderRadius: "16px",
                  padding: "36px",
                  borderTop: "3px solid var(--gold)",
                }}
              >
                <p
                  style={{
                    fontSize: "11px",
                    fontFamily: "Inter, system-ui, sans-serif",
                    fontWeight: 600,
                    letterSpacing: "0.1em",
                    color: "var(--gold)",
                    textTransform: "uppercase",
                    marginBottom: "20px",
                  }}
                >
                  Claro output
                </p>
                <p
                  style={{
                    fontSize: "17px",
                    color: "var(--warm-white)",
                    lineHeight: 1.7,
                  }}
                >
                  &ldquo;Your buyer Googles &lsquo;non-toxic&rsquo; before she
                  reads the price. Lead with what&rsquo;s in it, not what it looks
                  like.&rdquo;
                </p>
              </div>
            </div>

            {/* Gold stat */}
            <div style={{ textAlign: "center" }}>
              <p
                style={{
                  fontFamily: "'DM Serif Display', Georgia, serif",
                  fontSize: "64px",
                  color: "var(--gold)",
                  lineHeight: 1,
                  marginBottom: "8px",
                }}
              >
                2,400+
              </p>
              <p
                style={{
                  fontSize: "16px",
                  color: "var(--sky)",
                  fontFamily: "Inter, system-ui, sans-serif",
                }}
              >
                buyer signals analyzed per report
              </p>
            </div>
          </div>
        </section>

        {/* ── PRICING / THREE TIERS ── */}
        <section
          style={{
            padding: "96px 40px",
            background: "var(--warm-white)",
          }}
        >
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: "64px" }}>
              <h2
                style={{
                  fontSize: "clamp(32px, 4vw, 48px)",
                  marginBottom: "16px",
                }}
              >
                The system that compounds.
              </h2>
              <p
                style={{
                  fontSize: "18px",
                  color: "var(--ink)",
                  maxWidth: "440px",
                  margin: "0 auto",
                }}
              >
                Each tier builds on the last. Start where you are.
              </p>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                gap: "24px",
                alignItems: "stretch",
              }}
            >
              {tiers.map((tier) => (
                <div
                  key={tier.name}
                  style={{
                    background: tier.featured ? "var(--cobalt)" : "var(--ice)",
                    border: tier.featured
                      ? "none"
                      : "1px solid var(--sky)",
                    borderRadius: "16px",
                    padding: "40px 36px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "24px",
                    boxShadow: tier.featured
                      ? "0 8px 32px rgba(44,82,130,0.3)"
                      : "none",
                    position: "relative",
                  }}
                >
                  {tier.badge && (
                    <div
                      style={{
                        position: "absolute",
                        top: "-14px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        background: "var(--gold)",
                        color: "var(--midnight)",
                        fontSize: "12px",
                        fontFamily: "Inter, system-ui, sans-serif",
                        fontWeight: 600,
                        padding: "4px 14px",
                        borderRadius: "20px",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {tier.badge}
                    </div>
                  )}

                  <div>
                    <p
                      style={{
                        fontSize: "13px",
                        fontFamily: "Inter, system-ui, sans-serif",
                        fontWeight: 500,
                        color: tier.featured ? "var(--sky)" : "var(--horizon)",
                        marginBottom: "8px",
                        letterSpacing: "0.05em",
                        textTransform: "uppercase",
                      }}
                    >
                      {tier.name}
                    </p>
                    <div style={{ display: "flex", alignItems: "baseline", gap: "4px" }}>
                      <span
                        style={{
                          fontFamily: "'DM Serif Display', Georgia, serif",
                          fontSize: "44px",
                          color: tier.featured ? "var(--warm-white)" : "var(--midnight)",
                          lineHeight: 1,
                        }}
                      >
                        {tier.price}
                      </span>
                      <span
                        style={{
                          fontSize: "16px",
                          color: tier.featured ? "var(--sky)" : "var(--ink)",
                          fontFamily: "Inter, system-ui, sans-serif",
                        }}
                      >
                        {tier.period}
                      </span>
                    </div>
                  </div>

                  <p
                    style={{
                      fontSize: "15px",
                      color: tier.featured ? "var(--sky)" : "var(--ink)",
                      lineHeight: 1.6,
                    }}
                  >
                    {tier.description}
                  </p>

                  <ul
                    style={{
                      listStyle: "none",
                      padding: 0,
                      margin: 0,
                      display: "flex",
                      flexDirection: "column",
                      gap: "12px",
                      flexGrow: 1,
                    }}
                  >
                    {tier.features.map((f) => (
                      <li
                        key={f}
                        style={{
                          fontSize: "14px",
                          fontFamily: "Inter, system-ui, sans-serif",
                          color: tier.featured ? "var(--warm-white)" : "var(--ink)",
                          display: "flex",
                          alignItems: "flex-start",
                          gap: "10px",
                        }}
                      >
                        <span
                          style={{
                            color: tier.featured ? "var(--sky)" : "var(--horizon)",
                            marginTop: "1px",
                            flexShrink: 0,
                          }}
                        >
                          ✓
                        </span>
                        {f}
                      </li>
                    ))}
                  </ul>

                  <button
                    style={{
                      padding: "14px 24px",
                      background: tier.featured ? "var(--warm-white)" : "var(--cobalt)",
                      color: tier.featured ? "var(--cobalt)" : "var(--warm-white)",
                      borderRadius: "8px",
                      fontSize: "15px",
                      fontFamily: "Inter, system-ui, sans-serif",
                      fontWeight: 600,
                      transition: "all 150ms",
                    }}
                  >
                    {tier.cta}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FINAL CTA ── */}
        <section
          style={{
            background: "var(--cobalt)",
            padding: "96px 40px",
            textAlign: "center",
          }}
        >
          <div style={{ maxWidth: "720px", margin: "0 auto" }}>
            <h2
              style={{
                fontSize: "clamp(36px, 5vw, 56px)",
                color: "var(--warm-white)",
                marginBottom: "20px",
              }}
            >
              Your buyer has been trying to tell you something.
            </h2>
            <p
              style={{
                fontSize: "22px",
                color: "var(--sky)",
                marginBottom: "48px",
              }}
            >
              Claro helps you hear it.
            </p>

            <div
              style={{
                display: "flex",
                gap: "12px",
                justifyContent: "center",
                flexWrap: "wrap",
                marginBottom: "16px",
              }}
            >
              <input
                type="text"
                placeholder="Your Etsy shop URL or product category"
                style={{
                  width: "320px",
                  padding: "14px 18px",
                  background: "rgba(232,241,250,0.15)",
                  border: "1px solid rgba(168,197,232,0.4)",
                  borderRadius: "8px",
                  fontSize: "15px",
                  fontFamily: "Inter, system-ui, sans-serif",
                  color: "var(--warm-white)",
                  outline: "none",
                }}
              />
              <button
                style={{
                  padding: "14px 28px",
                  background: "var(--gold)",
                  color: "var(--midnight)",
                  borderRadius: "8px",
                  fontSize: "15px",
                  fontWeight: 700,
                  fontFamily: "Inter, system-ui, sans-serif",
                  whiteSpace: "nowrap",
                }}
              >
                Get your free report →
              </button>
            </div>
            <p
              style={{
                fontSize: "13px",
                color: "var(--sky)",
                fontFamily: "Inter, system-ui, sans-serif",
              }}
            >
              Free. No credit card. Ready in 2 minutes.
            </p>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}
