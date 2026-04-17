import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How to Price Your Etsy Products (Without Undervaluing Your Work) — Claro",
  description: "Most Etsy sellers are charging too little — and it's not an accident. Here's a practical Etsy pricing strategy that covers your costs, reflects your value, and actually makes you money.",
  openGraph: {
    title: "How to Price Your Etsy Products (Without Undervaluing Your Work)",
    description: "Most Etsy sellers are charging too little — and it's not an accident. Here's a practical Etsy pricing strategy that covers your costs, reflects your value, and actually makes you money.",
    type: "article",
  },
};

const faqs = [
  {
    q: "What is a good pricing formula for handmade Etsy items?",
    a: "A reliable starting formula is: (Materials + Labor + Overhead) × 2 = Wholesale price; Wholesale × 2 = Retail price. This is the traditional craft pricing formula. The multipliers ensure you&rsquo;re covering the hidden costs (Etsy fees, packaging, time spent on admin) and building in margin. Many sellers skip the labor component entirely — which is why they&rsquo;re chronically underpriced.",
  },
  {
    q: "How do I figure out what my Etsy competitors are charging?",
    a: "Search Etsy for your product type and sort by &ldquo;Top customer reviews&rdquo; — that surfaces the most-purchased listings, not just the cheapest ones. Note the price range of the top 20 results. Pay attention to sellers with strong reviews and professional photography: they represent the price ceiling your market will accept. Don&rsquo;t price-match the lowest results — those sellers are often running at a loss.",
  },
  {
    q: "Why do Etsy sellers undercharge for handmade items?",
    a: "Several reasons compound: sellers forget to count their own labor as a real cost, they use competitor pricing as a ceiling instead of a data point, they fear buyers will reject higher prices, they don&rsquo;t account for Etsy fees and shipping costs, and many start with a hobbyist mindset where profit isn&rsquo;t the primary goal. The transition from hobby pricing to business pricing is one of the biggest mental shifts in building a sustainable Etsy shop.",
  },
  {
    q: "Does raising prices hurt Etsy sales?",
    a: "Not usually — and sometimes it improves them. Higher prices signal quality and professionalism. Buyers on Etsy are often specifically avoiding the cheapest option because they want something special. The listings with the most reviews are rarely the cheapest in their category. If you raise prices and sales drop, the problem is usually perceived value (photos, copy, presentation) — not the price itself.",
  },
  {
    q: "What Etsy fees do I need to account for in my pricing?",
    a: "Etsy charges a $0.20 listing fee per item, a 6.5% transaction fee on the sale price including shipping, a payment processing fee of 3% + $0.25 (if using Etsy Payments), and a 12–15% Offsite Ads fee if the sale comes from an Etsy ad (mandatory for shops over $10k in sales). Together, fees typically consume 15–20% of your sale price. Most sellers forget the Offsite Ads fee entirely when pricing.",
  },
];

export default function EtsyPricingStrategyPost() {
  return (
    <>
      <Nav />
      <main style={{ background: "var(--warm-white)" }}>

        <section style={{ paddingTop: "100px", paddingBottom: "0", padding: "100px 40px 0" }}>
          <div style={{ maxWidth: "740px", margin: "0 auto" }}>
            <div style={{ display: "flex", gap: "12px", alignItems: "center", marginBottom: "24px", flexWrap: "wrap" }}>
              <span style={{ fontSize: "12px", fontFamily: "Inter, system-ui, sans-serif", fontWeight: 600, color: "var(--cobalt)", background: "rgba(44,82,130,0.1)", padding: "4px 12px", borderRadius: "12px" }}>
                Listings &amp; Conversion
              </span>
              <span style={{ fontSize: "13px", color: "var(--horizon)", fontFamily: "Inter, system-ui, sans-serif" }}>
                13 min read · April 2026
              </span>
            </div>

            <h1 style={{ fontSize: "clamp(36px, 5vw, 56px)", lineHeight: 1.1, marginBottom: "24px" }}>
              How to Price Your Etsy Products (Without Undervaluing Your Work)
            </h1>
            <p style={{ fontSize: "11px", fontFamily: "Inter, system-ui, sans-serif", color: "var(--horizon)", marginBottom: "8px", letterSpacing: "0.05em" }}>
              By <a href="/about" style={{ color: "var(--cobalt)" }}>the Claro team</a>
            </p>

            <p style={{ fontSize: "20px", color: "var(--ink)", lineHeight: 1.7, marginTop: "32px", marginBottom: "0" }}>
              Most Etsy sellers are charging too little — and it&rsquo;s not an accident. It&rsquo;s the predictable result of a pricing process that starts in the wrong place. Here&rsquo;s how to build a pricing strategy that covers your real costs, reflects the actual value you deliver, and gives you a business instead of an expensive hobby.
            </p>
          </div>
        </section>

        <article style={{ padding: "48px 40px 96px", maxWidth: "740px", margin: "0 auto" }}>

          <p style={{ fontSize: "17px", color: "var(--ink)", lineHeight: 1.8, marginBottom: "24px" }}>
            The single most common reason Etsy shops fail isn&rsquo;t traffic. It&rsquo;s not SEO. It&rsquo;s not even photography. It&rsquo;s pricing. Specifically, it&rsquo;s sellers who price their products based on what they&rsquo;d feel comfortable paying — rather than what the product actually costs to make, what the market will bear, and what communicates value to a buyer who&rsquo;s never met them.
          </p>

          <p style={{ fontSize: "17px", color: "var(--ink)", lineHeight: 1.8, marginBottom: "48px" }}>
            This post is about building a real Etsy pricing strategy — one that starts with your costs, layers in market data and buyer psychology, and ends with prices you can defend and feel good about.
          </p>

          <h2 style={{ fontSize: "32px", marginBottom: "20px", marginTop: "64px" }}>Why Etsy sellers chronically undercharge</h2>

          <p style={{ fontSize: "17px", color: "var(--ink)", lineHeight: 1.8, marginBottom: "24px" }}>
            Before we get to the mechanics, let&rsquo;s name what&rsquo;s actually happening. Underpricing on Etsy isn&rsquo;t random — it follows predictable patterns. If you&rsquo;ve ever thought &ldquo;I can&rsquo;t charge that much,&rdquo; you&rsquo;ve probably been here:
          </p>

          {[
            {
              label: "The hobby-to-business transition",
              detail: "Many sellers start making things because they love it. When they open a shop, they price based on what they&rsquo;d pay as a buyer — not what running a business actually costs. The hobby mindset treats labor as free. A business mindset doesn&rsquo;t.",
            },
            {
              label: "Competitor price anchoring",
              detail: "Sellers scan Etsy for similar products, find the lowest prices, and match or beat them. This turns the least sustainable sellers in your category into your pricing ceiling. It&rsquo;s a race to the bottom that rewards no one.",
            },
            {
              label: "Fear of rejection",
              detail: "Higher prices feel like a statement: &ldquo;I think my work is worth this.&rdquo; That&rsquo;s vulnerable. Especially if the shop is new and you don&rsquo;t have a track record of sales to lean on. So sellers hedge — they charge less to reduce the emotional risk of being told no.",
            },
            {
              label: "Missing costs",
              detail: "Etsy fees, packaging, shipping supplies, photography equipment, subscriptions — these add up. Most sellers only track material costs. The invisible overhead quietly erodes their margin without them realizing it.",
            },
          ].map((item, i) => (
            <div key={i} style={{ marginBottom: "28px", paddingLeft: "24px", borderLeft: "3px solid var(--cobalt)" }}>
              <h3 style={{ fontSize: "20px", marginBottom: "10px", color: "var(--midnight)" }}>{item.label}</h3>
              <p style={{ fontSize: "16px", color: "var(--ink)", lineHeight: 1.7 }}>{item.detail}</p>
            </div>
          ))}

          <p style={{ fontSize: "17px", color: "var(--ink)", lineHeight: 1.8, marginBottom: "48px" }}>
            None of these are character flaws. They&rsquo;re predictable behavioral patterns that pricing strategy is designed to override with a system. Let&rsquo;s build that system.
          </p>

          <h2 style={{ fontSize: "32px", marginBottom: "20px", marginTop: "64px" }}>Step 1: Cost-based pricing — your floor</h2>

          <p style={{ fontSize: "17px", color: "var(--ink)", lineHeight: 1.8, marginBottom: "24px" }}>
            Cost-based pricing tells you the minimum you can charge without losing money. It&rsquo;s your floor — not your final price, but the number below which everything else is pointless.
          </p>

          <div style={{ background: "var(--ice)", border: "1px solid var(--sky)", borderRadius: "12px", padding: "28px 32px", margin: "32px 0" }}>
            <p style={{ fontSize: "15px", fontFamily: "Inter, system-ui, sans-serif", fontWeight: 600, color: "var(--cobalt)", marginBottom: "16px" }}>The full cost inventory:</p>
            <ul style={{ margin: 0, padding: "0 0 0 20px", display: "flex", flexDirection: "column", gap: "10px" }}>
              {[
                "Materials: every component that goes into one unit (including waste/shrinkage)",
                "Labor: your time to make one unit, priced at the hourly rate you want to earn",
                "Packaging: boxes, tissue, stickers, ribbon, inserts — per unit",
                "Etsy fees: $0.20 listing + 6.5% transaction + ~3.25% payment processing = ~10–12% of sale price",
                "Offsite Ads fee: 12–15% if you&rsquo;re over $10k in annual sales (mandatory)",
                "Overhead: a proportional share of software, tools, workspace, shipping supplies",
                "Shipping costs: if you offer free shipping, these are absorbed into your price",
              ].map((item, i) => (
                <li key={i} style={{ fontSize: "16px", color: "var(--ink)", lineHeight: 1.6 }}>{item}</li>
              ))}
            </ul>
          </div>

          <p style={{ fontSize: "17px", color: "var(--ink)", lineHeight: 1.8, marginBottom: "24px" }}>
            Add all of those up. That&rsquo;s your cost of goods sold (COGS) per unit. Any price below that number means you&rsquo;re paying to work.
          </p>

          <p style={{ fontSize: "17px", color: "var(--ink)", lineHeight: 1.8, marginBottom: "24px" }}>
            The traditional handmade pricing formula from this floor is:
          </p>

          <div style={{ background: "var(--midnight)", borderRadius: "12px", padding: "28px 32px", margin: "32px 0" }}>
            <p style={{ fontSize: "16px", color: "var(--sky)", fontFamily: "Inter, system-ui, sans-serif", marginBottom: "12px" }}>Materials + Labor + Overhead = <strong style={{ color: "var(--warm-white)" }}>Base Cost</strong></p>
            <p style={{ fontSize: "16px", color: "var(--sky)", fontFamily: "Inter, system-ui, sans-serif", marginBottom: "12px" }}>Base Cost × 2 = <strong style={{ color: "var(--warm-white)" }}>Wholesale Price</strong></p>
            <p style={{ fontSize: "16px", color: "var(--sky)", fontFamily: "Inter, system-ui, sans-serif", marginBottom: "0" }}>Wholesale × 2 = <strong style={{ color: "var(--gold)" }}>Retail Price</strong></p>
          </div>

          <p style={{ fontSize: "17px", color: "var(--ink)", lineHeight: 1.8, marginBottom: "48px" }}>
            The 2× multipliers exist because your materials cost isn&rsquo;t your only cost — and your time isn&rsquo;t free. The formula builds margin into every layer. If your math says your retail price should be $48 and your gut says that&rsquo;s too high, that&rsquo;s a signal to check your cost inputs — not to lower the price.
          </p>

          <h2 style={{ fontSize: "32px", marginBottom: "20px", marginTop: "64px" }}>Step 2: Competitor research — your market context</h2>

          <p style={{ fontSize: "17px", color: "var(--ink)", lineHeight: 1.8, marginBottom: "24px" }}>
            Once you know your floor, you need to understand the market. Competitor research answers a different question than cost-based pricing: not &ldquo;what does it cost me?&rdquo; but &ldquo;what does the market believe this is worth?&rdquo;
          </p>

          <p style={{ fontSize: "17px", color: "var(--ink)", lineHeight: 1.8, marginBottom: "24px" }}>
            Here&rsquo;s how to do it without letting it distort your pricing:
          </p>

          {[
            "Search Etsy for your product type. Sort by \"Top customer reviews\" — this surfaces the most-purchased listings, not just the cheapest.",
            "Note the price range of the top 20–30 results. What&rsquo;s the floor? The ceiling? The cluster in the middle?",
            "Pay attention to what differentiates the higher-priced listings: professional photography, strong brand presentation, detailed descriptions, clear policies, lots of reviews.",
            "Identify where you sit relative to those markers. If your photography and presentation match the $60 sellers, you should be at $60 — not at $32 because someone else is.",
            "Ignore outliers in both directions. The $12 sellers are probably unsustainable. The $150 sellers with 2,000 reviews have earned a premium you haven&rsquo;t yet.",
          ].map((item, i) => (
            <div key={i} style={{ display: "flex", gap: "12px", alignItems: "flex-start", marginBottom: "16px" }}>
              <span style={{ background: "var(--cobalt)", color: "var(--warm-white)", fontSize: "12px", fontFamily: "Inter, system-ui, sans-serif", fontWeight: 700, width: "24px", height: "24px", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: "2px" }}>
                {i + 1}
              </span>
              <p style={{ fontSize: "16px", color: "var(--ink)", lineHeight: 1.7 }}>{item}</p>
            </div>
          ))}

          <p style={{ fontSize: "17px", color: "var(--ink)", lineHeight: 1.8, marginBottom: "48px", marginTop: "24px" }}>
            The goal of competitor research is to find your market&rsquo;s price range — then position yourself within it based on your actual value proposition, not based on fear.
          </p>

          <h2 style={{ fontSize: "32px", marginBottom: "20px", marginTop: "64px" }}>Step 3: Perceived value — the gap between cost and price</h2>

          <p style={{ fontSize: "17px", color: "var(--ink)", lineHeight: 1.8, marginBottom: "24px" }}>
            Here&rsquo;s something most pricing guides don&rsquo;t say clearly enough: buyers don&rsquo;t care what it cost you to make something. They care about what it&rsquo;s worth to them.
          </p>

          <p style={{ fontSize: "17px", color: "var(--ink)", lineHeight: 1.8, marginBottom: "24px" }}>
            Perceived value is the buyer&rsquo;s subjective sense of what the product is worth before they buy it. It&rsquo;s built entirely from signals — and all of those signals are in your control.
          </p>

          {[
            {
              signal: "Photography",
              detail: "A product shot on a clean white background with professional lighting communicates higher value than the same product photographed on a kitchen table. Buyers anchor perceived value to image quality before they read a single word.",
            },
            {
              signal: "Listing copy",
              detail: "Specific, sensory, confident writing signals that you know your product and take it seriously. Vague descriptions (&ldquo;great gift!&rdquo;) signal that the seller isn&rsquo;t sure either. Buyers extend trust to sellers who seem to know what they&rsquo;re talking about.",
            },
            {
              signal: "Packaging and presentation",
              detail: "If your product arrives in a plain mailer with no tissue, it feels worth $12. If it arrives in branded packaging with a handwritten note and tissue paper, it feels worth $45. The packaging is part of the product — and buyers will pay for the experience.",
            },
            {
              signal: "Review count and recency",
              detail: "Hundreds of reviews with recent dates are social proof that other people paid this price and were happy. Zero reviews require the buyer to take the risk alone. Early on, building reviews is as important as setting the right price.",
            },
            {
              signal: "Story and provenance",
              detail: "Handmade items carry meaning. Why you make what you make, how you make it, what materials you use — these aren&rsquo;t filler content. They&rsquo;re the reason buyers pay a premium for handmade over mass-produced. Tell the story.",
            },
          ].map((item, i) => (
            <div key={i} style={{ marginBottom: "32px", paddingLeft: "24px", borderLeft: "3px solid var(--cobalt)" }}>
              <h3 style={{ fontSize: "20px", marginBottom: "10px", color: "var(--midnight)" }}>{item.signal}</h3>
              <p style={{ fontSize: "16px", color: "var(--ink)", lineHeight: 1.7 }}>{item.detail}</p>
            </div>
          ))}

          <p style={{ fontSize: "17px", color: "var(--ink)", lineHeight: 1.8, marginBottom: "48px" }}>
            The practical upshot: before you lower your price, ask whether you&rsquo;ve done everything possible to raise the perceived value. Improving your photos often does more for conversion than dropping your price by $5.
          </p>

          <h2 style={{ fontSize: "32px", marginBottom: "20px", marginTop: "64px" }}>Step 4: Psychological pricing — the details that close sales</h2>

          <p style={{ fontSize: "17px", color: "var(--ink)", lineHeight: 1.8, marginBottom: "24px" }}>
            Once you have a target price, a handful of psychological pricing principles can help you present it effectively. These aren&rsquo;t tricks — they&rsquo;re the same principles every retail brand uses.
          </p>

          {[
            {
              tactic: "Charm pricing ($X.95 or $X.99)",
              detail: "Prices ending in .95 or .99 are perceived as meaningfully lower than the round number — even when the difference is minimal. $39.95 reads as &ldquo;in the $30s&rdquo; while $40 reads as &ldquo;$40.&rdquo; This works best in mid-range price points. At very high price points, round numbers ($95, $120) can signal premium quality.",
            },
            {
              tactic: "Anchoring with bundles or tiers",
              detail: "Offering two or three product options at different price points anchors buyer perception. The $65 option feels more reasonable next to the $95 option. The single product at $65 with nothing to compare to has to stand alone. Bundles also increase average order value: a $45 single item becomes a $75 bundle of two.",
            },
            {
              tactic: "Price framing in your listing copy",
              detail: "How you describe your price matters. &ldquo;A $75 candle&rdquo; and &ldquo;a candle that lasts 80 hours, made from hand-poured soy wax with essential oils, in a reusable glass vessel — $75&rdquo; are the same price but very different value propositions. Build the case before you name the number.",
            },
            {
              tactic: "Free shipping vs. shipping costs",
              detail: "Etsy&rsquo;s own data shows that listings with free shipping convert better. The psychological effect of &ldquo;$45 + $8 shipping&rdquo; vs. &ldquo;$53 free shipping&rdquo; strongly favors free shipping — even though the buyer pays the same amount. If your margin supports it, build shipping into the price.",
            },
          ].map((item, i) => (
            <div key={i} style={{ marginBottom: "32px" }}>
              <h3 style={{ fontSize: "22px", marginBottom: "12px", color: "var(--midnight)" }}>{item.tactic}</h3>
              <p style={{ fontSize: "16px", color: "var(--ink)", lineHeight: 1.7 }}>{item.detail}</p>
            </div>
          ))}

          <h2 style={{ fontSize: "32px", marginBottom: "20px", marginTop: "64px" }}>Putting it all together: a pricing checklist</h2>

          <p style={{ fontSize: "17px", color: "var(--ink)", lineHeight: 1.8, marginBottom: "24px" }}>
            Run every new product through this before you hit publish:
          </p>

          <div style={{ background: "var(--ice)", border: "1px solid var(--sky)", borderRadius: "12px", padding: "28px 32px", margin: "32px 0" }}>
            {[
              "Have I calculated every cost — materials, labor, packaging, fees, overhead, shipping?",
              "Is my price above the cost floor (all costs × 2)?",
              "Have I researched the top-reviewed competitors in my category and identified the market range?",
              "Is my price positioned appropriately within that range given my presentation and value?",
              "Have I done everything reasonable to maximize perceived value (photos, copy, packaging, story)?",
              "Am I using charm pricing or free shipping where appropriate?",
              "Do I have a bundle or tiered offer that anchors perception of the base product?",
              "Does this price feel uncomfortable? (If yes: is that discomfort based on real data, or just fear?)",
            ].map((item, i) => (
              <div key={i} style={{ display: "flex", gap: "12px", alignItems: "flex-start", marginBottom: "14px" }}>
                <span style={{ color: "var(--cobalt)", fontSize: "18px", flexShrink: 0, marginTop: "-2px" }}>☐</span>
                <p style={{ fontSize: "16px", color: "var(--ink)", lineHeight: 1.6, margin: 0 }}>{item}</p>
              </div>
            ))}
          </div>

          <h2 style={{ fontSize: "32px", marginBottom: "20px", marginTop: "64px" }}>When (and how) to raise your prices</h2>

          <p style={{ fontSize: "17px", color: "var(--ink)", lineHeight: 1.8, marginBottom: "24px" }}>
            If you&rsquo;ve been undercharging, a price increase feels scary. Here&rsquo;s how to do it without derailing your shop:
          </p>

          {[
            "Raise prices gradually on new listings, not retroactively on established bestsellers with lots of reviews at the old price.",
            "Test price increases on your lower-volume listings first. If conversion rate holds, roll it out to your bestsellers.",
            "Use the price increase as a trigger to improve your presentation. Update photos, refine your description, improve packaging. The price increase and the value increase go together.",
            "Don&rsquo;t announce price increases. Quietly updating prices rarely triggers buyer backlash. Most buyers never knew your old price.",
            "Watch your conversion rate, not your sales volume. If you raise prices by 20% and your conversion rate stays flat, you&rsquo;re making 20% more revenue — even if you sell fewer units.",
          ].map((item, i) => (
            <div key={i} style={{ display: "flex", gap: "12px", alignItems: "flex-start", marginBottom: "16px" }}>
              <span style={{ background: "var(--cobalt)", color: "var(--warm-white)", fontSize: "12px", fontFamily: "Inter, system-ui, sans-serif", fontWeight: 700, width: "24px", height: "24px", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: "2px" }}>
                {i + 1}
              </span>
              <p style={{ fontSize: "16px", color: "var(--ink)", lineHeight: 1.7 }}>{item}</p>
            </div>
          ))}

          <p style={{ fontSize: "17px", color: "var(--ink)", lineHeight: 1.8, marginBottom: "24px", marginTop: "32px" }}>
            The hardest part of raising prices is psychological. You&rsquo;re not asking buyers to pay more for the same thing — you&rsquo;re charging what the thing was worth all along.
          </p>

          <div style={{ background: "var(--midnight)", borderRadius: "16px", padding: "40px", margin: "64px 0" }}>
            <p style={{ fontSize: "11px", fontFamily: "Inter, system-ui, sans-serif", fontWeight: 600, color: "var(--horizon)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "16px" }}>
              Understand what your buyers value — then price to match
            </p>
            <h3 style={{ fontSize: "26px", color: "var(--warm-white)", marginBottom: "16px" }}>
              Your pricing should reflect your buyers&rsquo; perception of value.
            </h3>
            <p style={{ fontSize: "16px", color: "var(--sky)", lineHeight: 1.7, marginBottom: "24px" }}>
              Claro analyzes real buyer language — from reviews, forums, and purchase behavior — to surface what your customers actually care about and how they describe value. That insight directly informs pricing, positioning, and listing copy. See <a href="/pricing" style={{ color: "var(--gold)" }}>pricing</a>.
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
              { title: "Why Your Etsy Listings Aren&rsquo;t Converting (And How to Fix It)", href: "/blog/etsy-listings-not-converting", label: "Etsy Growth" },
              { title: "How to Write Etsy Listings That Convert (Built From Real Buyer Language)", href: "/blog/etsy-listing-copy-buyer-language", label: "Etsy Growth" },
              { title: "How to Differentiate Your Etsy Shop from Competitors", href: "/blog/etsy-shop-differentiation", label: "Brand Strategy" },
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
              headline: "How to Price Your Etsy Products (Without Undervaluing Your Work)",
              author: { "@type": "Organization", name: "Claro" },
              publisher: { "@type": "Organization", name: "Claro", url: "https://meetclaro.ai" },
              datePublished: "2026-04-17",
              description: "Most Etsy sellers are charging too little — and it's not an accident. Here's a practical Etsy pricing strategy that covers your costs, reflects your value, and actually makes you money.",
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
