"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Logo } from "./Logo";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        height: "64px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 32px",
        maxWidth: "1200px",
        margin: "0 auto",
        transition: "all 150ms",
      }}
    >
      {/* Full-width sticky bar */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: "64px",
          background: scrolled ? "var(--warm-white)" : "transparent",
          borderBottom: scrolled ? "1px solid var(--ice)" : "1px solid transparent",
          transition: "all 200ms",
          zIndex: 99,
        }}
      />

      {/* Nav content */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: "64px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 40px",
          zIndex: 100,
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {/* Left: Logo */}
        <Link href="/" style={{ fontSize: "22px", textDecoration: "none" }}>
          <Logo />
        </Link>

        {/* Center: Links */}
        <div
          style={{
            display: "flex",
            gap: "32px",
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%)",
          }}
        >
          {[
            { label: "How it works", href: "/how-it-works" },
            { label: "Pricing", href: "/pricing" },
            { label: "Blog", href: "/blog" },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              style={{
                fontSize: "14px",
                fontFamily: "Inter, system-ui, sans-serif",
                color: "var(--ink)",
                fontWeight: 400,
                transition: "color 150ms",
              }}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right: CTA */}
        <Link
          href="/#get-started"
          style={{
            fontSize: "14px",
            fontFamily: "Inter, system-ui, sans-serif",
            fontWeight: 500,
            color: "var(--warm-white)",
            background: "var(--cobalt)",
            padding: "9px 20px",
            borderRadius: "8px",
            transition: "background 150ms",
            textDecoration: "none",
          }}
        >
          Get your free report →
        </Link>
      </div>
    </nav>
  );
}
