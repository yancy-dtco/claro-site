import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { supabaseAdmin } from "@/lib/supabase";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Your Buyer Report — Claro",
  description: "Your complete buyer intelligence report from Claro.",
};

interface ReportPageProps {
  params: Promise<{ id: string }>;
}

async function getReport(id: string) {
  const { data, error } = await supabaseAdmin
    .from("reports")
    .select("*")
    .eq("id", id)
    .single();
  if (error || !data) return null;
  return data;
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p style={{
      fontSize: "11px",
      fontFamily: "Inter, system-ui, sans-serif",
      fontWeight: 600,
      letterSpacing: "0.12em",
      textTransform: "uppercase",
      color: "var(--horizon)",
      marginBottom: "16px",
    }}>
      {children}
    </p>
  );
}

function Card({ children, style = {} }: { children: React.ReactNode; style?: React.CSSProperties }) {
  return (
    <div style={{
      background: "var(--ice)",
      border: "1px solid var(--sky)",
      borderRadius: "16px",
      padding: "32px",
      ...style,
    }}>
      {children}
    </div>
  );
}

function PillTag({ children }: { children: React.ReactNode }) {
  return (
    <span style={{
      display: "inline-block",
      background: "rgba(44,82,130,0.1)",
      color: "var(--cobalt)",
      fontSize: "13px",
      fontFamily: "Inter, system-ui, sans-serif",
      fontWeight: 500,
      padding: "5px 12px",
      borderRadius: "20px",
      marginRight: "8px",
      marginBottom: "8px",
    }}>
      {children}
    </span>
  );
}

export default async function ReportPage({ params }: ReportPageProps) {
  const { id } = await params;
  const report = await getReport(id);

  if (!report) notFound();

  // Still processing
  if (report.status === "pending" || report.status === "processing") {
    return (
      <>
        <Nav />
        <main style={{ background: "var(--warm-white)", minHeight: "80vh" }}>
          <section style={{ padding: "120px 40px", textAlign: "center" }}>
            <div style={{ maxWidth: "560px", margin: "0 auto" }}>
              <h1 style={{ fontSize: "40px", marginBottom: "24px" }}>
                Claro is reading the signals your buyers left.
              </h1>
              <p style={{ fontSize: "18px", color: "var(--ink)", marginBottom: "48px" }}>
                This takes about 2 minutes. We&rsquo;re scanning thousands of real conversations.
              </p>

              {/* Progress steps */}
              <div style={{ display: "flex", flexDirection: "column", gap: "16px", textAlign: "left", marginBottom: "48px" }}>
                {[
                  "Reading your listings and reviews",
                  "Scanning buyer communities",
                  "Identifying buyer patterns",
                  "Building your report",
                ].map((step, i) => (
                  <div key={step} style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                    <div style={{
                      width: "32px", height: "32px", borderRadius: "50%",
                      background: i === 0 ? "var(--cobalt)" : "var(--ice)",
                      border: i === 0 ? "none" : "2px solid var(--sky)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      flexShrink: 0,
                    }}>
                      <span style={{ fontSize: "13px", color: i === 0 ? "var(--warm-white)" : "var(--horizon)", fontFamily: "Inter" }}>
                        {i === 0 ? "✓" : `${i + 1}`}
                      </span>
                    </div>
                    <p style={{ fontSize: "16px", color: i === 0 ? "var(--cobalt)" : "var(--ink)", fontFamily: "Inter" }}>{step}</p>
                  </div>
                ))}
              </div>

              <p style={{ fontSize: "14px", color: "var(--horizon)", fontFamily: "Inter" }}>
                Your report will be emailed to you when complete. You can also refresh this page.
              </p>

              {/* Auto-refresh */}
              <script dangerouslySetInnerHTML={{
                __html: `setTimeout(() => window.location.reload(), 15000);`
              }} />
            </div>
          </section>
        </main>
        <Footer />
      </>
    );
  }

  // Failed
  if (report.status === "failed") {
    return (
      <>
        <Nav />
        <main style={{ background: "var(--warm-white)", minHeight: "80vh" }}>
          <section style={{ padding: "120px 40px", textAlign: "center" }}>
            <div style={{ maxWidth: "560px", margin: "0 auto" }}>
              <h1 style={{ fontSize: "40px", marginBottom: "24px" }}>Something went wrong.</h1>
              <p style={{ fontSize: "18px", color: "var(--ink)", marginBottom: "40px" }}>
                We weren&rsquo;t able to generate your report. This sometimes happens with unusual shop URLs.
              </p>
              <a href="/#get-started" style={{
                display: "inline-block", padding: "14px 28px",
                background: "var(--cobalt)", color: "var(--warm-white)",
                borderRadius: "8px", fontSize: "15px",
                fontFamily: "Inter", fontWeight: 600, textDecoration: "none",
              }}>
                Try again →
              </a>
            </div>
          </section>
        </main>
        <Footer />
      </>
    );
  }

  // Complete — render the full report
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const profile = report.output_buyer_profile as any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const vocabulary = report.output_buyer_vocabulary as any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const triggers = report.output_purchase_triggers as any[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const barriers = report.output_purchase_barriers as any[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const angles = report.output_content_angles as any[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const gaps = report.output_competitor_gaps as any[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const brandVoice = report.output_brand_voice as any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const positioning = report.output_positioning as any;
  const tier = report.tier_at_generation;

  return (
    <>
      <Nav />
      <main style={{ background: "var(--warm-white)" }}>

        {/* Report header */}
        <section style={{ background: "var(--cobalt)", padding: "80px 40px 48px" }}>
          <div style={{ maxWidth: "900px", margin: "0 auto" }}>
            <p style={{ fontSize: "13px", fontFamily: "Inter", color: "var(--sky)", marginBottom: "12px", fontWeight: 500, letterSpacing: "0.08em", textTransform: "uppercase" }}>
              Buyer Intelligence Report
            </p>
            <h1 style={{ fontSize: "clamp(36px, 5vw, 52px)", color: "var(--warm-white)", marginBottom: "16px" }}>
              {report.input_shop_url || report.input_category || "Your Shop"}
            </h1>
            <div style={{ display: "flex", gap: "24px", flexWrap: "wrap" }}>
              {[
                `${report.signals_total || 0} buyer signals analyzed`,
                `Generated ${new Date(report.created_at).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}`,
              ].map((item) => (
                <p key={item} style={{ fontSize: "14px", fontFamily: "Inter", color: "var(--sky)" }}>{item}</p>
              ))}
            </div>
          </div>
        </section>

        <div style={{ maxWidth: "900px", margin: "0 auto", padding: "48px 40px 96px" }}>

          {/* Section 1: Who your buyer is */}
          {profile && (
            <section style={{ marginBottom: "56px" }}>
              <SectionLabel>Who Your Buyer Is</SectionLabel>
              <Card>
                {profile.persona_name && (
                  <h2 style={{ fontSize: "28px", marginBottom: "8px" }}>{String(profile.persona_name)}</h2>
                )}
                {profile.summary && (
                  <p style={{ fontSize: "17px", color: "var(--ink)", lineHeight: 1.7, marginBottom: "28px" }}>
                    {String(profile.summary)}
                  </p>
                )}
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: "16px" }}>
                  {[
                    { label: "Age range", value: profile.age_range },
                    { label: "Income", value: profile.income_range },
                    { label: "Primary motivation", value: profile.primary_motivation },
                    { label: "Shopping behavior", value: profile.shopping_behavior },
                  ].filter(item => item.value).map((item) => (
                    <div key={item.label} style={{ background: "var(--warm-white)", borderRadius: "10px", padding: "16px" }}>
                      <p style={{ fontSize: "11px", fontFamily: "Inter", color: "var(--horizon)", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "6px" }}>{item.label}</p>
                      <p style={{ fontSize: "15px", color: "var(--midnight)", fontFamily: "Inter", fontWeight: 500 }}>{String(item.value)}</p>
                    </div>
                  ))}
                </div>
                {Array.isArray(profile.values) && profile.values.length > 0 && (
                  <div style={{ marginTop: "20px" }}>
                    <p style={{ fontSize: "12px", fontFamily: "Inter", color: "var(--horizon)", marginBottom: "8px" }}>VALUES</p>
                    <div>
                      {(profile.values as string[]).map((v) => <PillTag key={v}>{v}</PillTag>)}
                    </div>
                  </div>
                )}
              </Card>
            </section>
          )}

          {/* Section 2: Their exact words */}
          {vocabulary && (
            <section style={{ marginBottom: "56px" }}>
              <SectionLabel>Their Exact Words</SectionLabel>
              <Card>
                <h2 style={{ fontSize: "24px", marginBottom: "8px" }}>
                  These are the words your buyers use. Use them back.
                </h2>
                <p style={{ fontSize: "15px", color: "var(--ink)", marginBottom: "24px" }}>
                  These phrases came directly from buyers in your category. They&rsquo;re the words that close sales when you use them in your listings.
                </p>
                {Array.isArray(vocabulary.phrases) && vocabulary.phrases.length > 0 && (
                  <div style={{ marginBottom: "20px" }}>
                    <p style={{ fontSize: "12px", fontFamily: "Inter", color: "var(--horizon)", marginBottom: "10px" }}>BUYER PHRASES</p>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                      {(vocabulary.phrases as string[]).map((phrase) => (
                        <span key={phrase} style={{
                          background: "var(--warm-white)",
                          border: "1px solid var(--sky)",
                          borderLeft: "3px solid var(--cobalt)",
                          borderRadius: "6px",
                          padding: "8px 14px",
                          fontSize: "14px",
                          fontFamily: "Inter",
                          color: "var(--midnight)",
                          fontStyle: "italic",
                        }}>
                          &ldquo;{phrase}&rdquo;
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                {Array.isArray(vocabulary.search_terms) && vocabulary.search_terms.length > 0 && (
                  <div style={{ marginBottom: "12px" }}>
                    <p style={{ fontSize: "12px", fontFamily: "Inter", color: "var(--horizon)", marginBottom: "8px" }}>SEARCH TERMS THEY USE</p>
                    <div>{(vocabulary.search_terms as string[]).map((t) => <PillTag key={t}>{t}</PillTag>)}</div>
                  </div>
                )}
                {Array.isArray(vocabulary.emotional_words) && vocabulary.emotional_words.length > 0 && (
                  <div>
                    <p style={{ fontSize: "12px", fontFamily: "Inter", color: "var(--horizon)", marginBottom: "8px" }}>EMOTIONAL TRIGGERS</p>
                    <div>{(vocabulary.emotional_words as string[]).map((w) => <PillTag key={w}>{w}</PillTag>)}</div>
                  </div>
                )}
              </Card>
            </section>
          )}

          {/* Section 3: Purchase Triggers */}
          {triggers && triggers.length > 0 && (
            <section style={{ marginBottom: "56px" }}>
              <SectionLabel>Why They Buy</SectionLabel>
              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                {triggers.map((trigger, i) => (
                  <Card key={i}>
                    <div style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
                      <span style={{
                        fontFamily: "'DM Serif Display', Georgia, serif",
                        fontSize: "40px",
                        color: "var(--sky)",
                        lineHeight: 1,
                        flexShrink: 0,
                        opacity: 0.5,
                      }}>{i + 1}</span>
                      <div>
                        <h3 style={{ fontSize: "20px", marginBottom: "8px", color: "var(--midnight)" }}>{trigger.name}</h3>
                        <p style={{ fontSize: "15px", color: "var(--ink)", lineHeight: 1.6, marginBottom: "12px" }}>{trigger.description}</p>
                        {trigger.implication && (
                          <div style={{ background: "var(--warm-white)", borderRadius: "8px", padding: "12px 16px", borderLeft: "3px solid var(--cobalt)" }}>
                            <p style={{ fontSize: "13px", fontFamily: "Inter", fontWeight: 600, color: "var(--cobalt)", marginBottom: "4px" }}>What this means for you</p>
                            <p style={{ fontSize: "14px", color: "var(--ink)", fontFamily: "Inter" }}>{trigger.implication}</p>
                          </div>
                        )}
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </section>
          )}

          {/* Section 4: Purchase Barriers */}
          {barriers && barriers.length > 0 && (
            <section style={{ marginBottom: "56px" }}>
              <SectionLabel>What Stops Them</SectionLabel>
              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                {barriers.map((barrier, i) => (
                  <Card key={i}>
                    <h3 style={{ fontSize: "20px", marginBottom: "8px", color: "var(--midnight)" }}>{barrier.name}</h3>
                    <p style={{ fontSize: "15px", color: "var(--ink)", lineHeight: 1.6, marginBottom: "12px" }}>{barrier.description}</p>
                    {barrier.how_to_remove && (
                      <div style={{ background: "var(--warm-white)", borderRadius: "8px", padding: "12px 16px", borderLeft: "3px solid var(--horizon)" }}>
                        <p style={{ fontSize: "13px", fontFamily: "Inter", fontWeight: 600, color: "var(--horizon)", marginBottom: "4px" }}>How to remove it</p>
                        <p style={{ fontSize: "14px", color: "var(--ink)", fontFamily: "Inter" }}>{barrier.how_to_remove}</p>
                      </div>
                    )}
                  </Card>
                ))}
              </div>
            </section>
          )}

          {/* Section 5: Content Angles */}
          {angles && angles.length > 0 && (
            <section style={{ marginBottom: "56px" }}>
              <SectionLabel>Content Angles — Built From Your Buyers</SectionLabel>
              <h2 style={{ fontSize: "28px", marginBottom: "8px" }}>
                {angles.length} content angles — written from what your buyers actually said.
              </h2>
              <p style={{ fontSize: "16px", color: "var(--ink)", marginBottom: "32px" }}>
                Ready to use in listings, captions, or emails.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                {angles.map((angle, i) => (
                  <Card key={i} style={{ borderLeft: "3px solid var(--cobalt)" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "12px", flexWrap: "wrap", gap: "8px" }}>
                      <h3 style={{ fontSize: "18px", color: "var(--midnight)" }}>{i + 1}. {angle.title}</h3>
                      {angle.platform && (
                        <span style={{ fontSize: "12px", fontFamily: "Inter", fontWeight: 600, color: "var(--cobalt)", background: "rgba(44,82,130,0.1)", padding: "3px 10px", borderRadius: "12px" }}>
                          {angle.platform}
                        </span>
                      )}
                    </div>
                    {angle.hook && (
                      <div style={{ background: "var(--midnight)", borderRadius: "8px", padding: "14px 18px", marginBottom: "12px" }}>
                        <p style={{ fontSize: "13px", fontFamily: "Inter", fontWeight: 600, color: "var(--horizon)", marginBottom: "6px" }}>HOOK</p>
                        <p style={{ fontSize: "15px", color: "var(--warm-white)", fontStyle: "italic" }}>&ldquo;{angle.hook}&rdquo;</p>
                      </div>
                    )}
                    {angle.why_it_works && (
                      <p style={{ fontSize: "14px", color: "var(--ink)", fontFamily: "Inter", lineHeight: 1.5 }}>
                        <strong style={{ color: "var(--midnight)" }}>Why it works:</strong> {angle.why_it_works}
                      </p>
                    )}
                  </Card>
                ))}
              </div>
            </section>
          )}

          {/* Section 6: Competitor Gaps */}
          {gaps && gaps.length > 0 && (
            <section style={{ marginBottom: "56px" }}>
              <SectionLabel>Competitive Openings</SectionLabel>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "16px" }}>
                {gaps.map((gap, i) => (
                  <Card key={i}>
                    <p style={{ fontSize: "13px", fontFamily: "Inter", fontWeight: 600, color: "var(--horizon)", marginBottom: "8px" }}>GAP {i + 1}</p>
                    <h4 style={{ fontSize: "17px", color: "var(--midnight)", marginBottom: "10px" }}>{gap.gap}</h4>
                    <p style={{ fontSize: "14px", color: "var(--ink)", fontFamily: "Inter", lineHeight: 1.5 }}>{gap.opportunity}</p>
                  </Card>
                ))}
              </div>
            </section>
          )}

          {/* Section 7: Brand Voice (Tier 2+) */}
          {brandVoice && (
            <section style={{ marginBottom: "56px" }}>
              <SectionLabel>Your Brand Voice</SectionLabel>
              <Card>
                {Array.isArray(brandVoice.tone_descriptors) && (
                  <div style={{ marginBottom: "20px" }}>
                    <p style={{ fontSize: "12px", fontFamily: "Inter", color: "var(--horizon)", marginBottom: "8px" }}>TONE</p>
                    <div>{(brandVoice.tone_descriptors as string[]).map(t => <PillTag key={t}>{t}</PillTag>)}</div>
                  </div>
                )}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                  {brandVoice.do_say && Array.isArray(brandVoice.do_say) && (
                    <div style={{ background: "rgba(76,175,80,0.08)", borderRadius: "10px", padding: "16px" }}>
                      <p style={{ fontSize: "12px", fontFamily: "Inter", fontWeight: 700, color: "#4caf50", marginBottom: "10px" }}>DO SAY</p>
                      {(brandVoice.do_say as string[]).map(s => <p key={s} style={{ fontSize: "14px", color: "var(--ink)", fontFamily: "Inter", marginBottom: "6px" }}>✓ {s}</p>)}
                    </div>
                  )}
                  {brandVoice.dont_say && Array.isArray(brandVoice.dont_say) && (
                    <div style={{ background: "rgba(244,67,54,0.08)", borderRadius: "10px", padding: "16px" }}>
                      <p style={{ fontSize: "12px", fontFamily: "Inter", fontWeight: 700, color: "#f44336", marginBottom: "10px" }}>DON&rsquo;T SAY</p>
                      {(brandVoice.dont_say as string[]).map(s => <p key={s} style={{ fontSize: "14px", color: "var(--ink)", fontFamily: "Inter", marginBottom: "6px" }}>✕ {s}</p>)}
                    </div>
                  )}
                </div>
                {brandVoice.sample_caption && (
                  <div style={{ marginTop: "20px", background: "var(--midnight)", borderRadius: "10px", padding: "20px" }}>
                    <p style={{ fontSize: "12px", fontFamily: "Inter", fontWeight: 600, color: "var(--horizon)", marginBottom: "8px" }}>SAMPLE CAPTION</p>
                    <p style={{ fontSize: "16px", color: "var(--warm-white)", lineHeight: 1.6, fontStyle: "italic" }}>&ldquo;{String(brandVoice.sample_caption)}&rdquo;</p>
                  </div>
                )}
              </Card>
            </section>
          )}

          {/* Section 8: Positioning (Tier 2+) */}
          {positioning && (
            <section style={{ marginBottom: "56px" }}>
              <SectionLabel>Your Positioning</SectionLabel>
              <Card>
                {positioning.statement && (
                  <div style={{ marginBottom: "20px" }}>
                    <p style={{ fontSize: "12px", fontFamily: "Inter", color: "var(--horizon)", marginBottom: "8px" }}>POSITIONING STATEMENT</p>
                    <p style={{ fontSize: "18px", color: "var(--midnight)", lineHeight: 1.6, fontStyle: "italic" }}>&ldquo;{String(positioning.statement)}&rdquo;</p>
                  </div>
                )}
                {Array.isArray(positioning.tagline_options) && (
                  <div>
                    <p style={{ fontSize: "12px", fontFamily: "Inter", color: "var(--horizon)", marginBottom: "8px" }}>TAGLINE OPTIONS</p>
                    <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                      {(positioning.tagline_options as string[]).map((t, i) => (
                        <div key={t} style={{ display: "flex", gap: "12px", alignItems: "center" }}>
                          {i === 0 && <span style={{ fontSize: "11px", fontFamily: "Inter", fontWeight: 700, color: "var(--gold)", background: "rgba(201,168,76,0.15)", padding: "2px 8px", borderRadius: "6px" }}>TOP PICK</span>}
                          <p style={{ fontSize: "16px", color: "var(--midnight)", fontFamily: "Inter" }}>{t}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </Card>
            </section>
          )}

          {/* Upgrade CTA */}
          {(tier === "free" || tier === "tier1") && (
            <section style={{ background: "var(--cobalt)", borderRadius: "16px", padding: "48px 40px", textAlign: "center" }}>
              <h2 style={{ fontSize: "32px", color: "var(--warm-white)", marginBottom: "16px" }}>
                {tier === "free" ? "This is just the surface." : "Ready to build your brand?"}
              </h2>
              <p style={{ fontSize: "18px", color: "var(--sky)", marginBottom: "32px", maxWidth: "480px", margin: "0 auto 32px" }}>
                {tier === "free"
                  ? "Tier 1 gives you the full picture — monthly-refreshed buyer intelligence, deeper signals, and a complete content strategy."
                  : "Tier 2 turns your buyer intelligence into a brand voice, positioning statement, and messaging pillars — all built from your actual buyer data."
                }
              </p>
              <a
                href="/pricing"
                style={{
                  display: "inline-block",
                  padding: "16px 36px",
                  background: "var(--gold)",
                  color: "var(--midnight)",
                  borderRadius: "8px",
                  fontSize: "16px",
                  fontFamily: "Inter",
                  fontWeight: 700,
                  textDecoration: "none",
                }}
              >
                {tier === "free" ? "Upgrade to Know Your Buyer — $49/mo →" : "Upgrade to Build Your Brand — $79/mo →"}
              </a>
              <p style={{ fontSize: "13px", color: "var(--sky)", marginTop: "16px", fontFamily: "Inter" }}>Cancel anytime. Billed monthly.</p>
            </section>
          )}

        </div>
      </main>
      <Footer />
    </>
  );
}
