import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard — Claro",
};

export default function Dashboard() {
  return (
    <>
      <Nav />
      <main style={{ background: "var(--warm-white)", minHeight: "80vh" }}>
        <section style={{ padding: "120px 40px", maxWidth: "800px", margin: "0 auto" }}>
          <h1 style={{ fontSize: "40px", marginBottom: "16px" }}>Your Claro dashboard</h1>
          <p style={{ fontSize: "18px", color: "var(--ink)", marginBottom: "48px" }}>
            Full dashboard coming soon. In the meantime, your reports are delivered to your email.
          </p>
          <a
            href="/#get-started"
            style={{
              display: "inline-block",
              padding: "14px 28px",
              background: "var(--cobalt)",
              color: "var(--warm-white)",
              borderRadius: "8px",
              fontSize: "15px",
              fontFamily: "Inter, system-ui, sans-serif",
              fontWeight: 600,
              textDecoration: "none",
            }}
          >
            Generate a new report →
          </a>
        </section>
      </main>
      <Footer />
    </>
  );
}
