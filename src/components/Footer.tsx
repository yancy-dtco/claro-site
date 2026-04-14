import Link from "next/link";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer
      style={{
        background: "var(--midnight)",
        padding: "48px 40px",
        marginTop: "0",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          gap: "32px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            flexWrap: "wrap",
            gap: "24px",
          }}
        >
          {/* Left: Logo + tagline */}
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <span style={{ fontSize: "24px", color: "var(--warm-white)" }}>
              <Logo />
            </span>
            <p
              style={{
                fontSize: "14px",
                color: "var(--sky)",
                fontStyle: "italic",
                maxWidth: "280px",
              }}
            >
              Clarity about your buyer. Confidence in your brand.
            </p>
          </div>

          {/* Right: Links */}
          <div style={{ display: "flex", gap: "32px", flexWrap: "wrap" }}>
            {[
              { label: "How it works", href: "/how-it-works" },
              { label: "Pricing", href: "/pricing" },
              { label: "Blog", href: "/blog" },
              { label: "About", href: "/about" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  fontSize: "14px",
                  color: "var(--sky)",
                  fontFamily: "Inter, system-ui, sans-serif",
                }}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Legal */}
        <div
          style={{
            borderTop: "1px solid var(--ink)",
            paddingTop: "24px",
            display: "flex",
            flexDirection: "column",
            gap: "8px",
          }}
        >
          <p style={{ fontSize: "12px", color: "var(--horizon)" }}>
            © {new Date().getFullYear()} Claro. All rights reserved.
          </p>
          <p style={{ fontSize: "12px", color: "var(--horizon)", maxWidth: "600px" }}>
            The term &ldquo;Etsy&rdquo; is a trademark of Etsy, Inc. This application uses the Etsy API but is not endorsed or certified by Etsy, Inc.
          </p>
        </div>
      </div>
    </footer>
  );
}
