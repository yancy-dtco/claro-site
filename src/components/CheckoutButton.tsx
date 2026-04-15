"use client";
import { useState } from "react";

interface CheckoutButtonProps {
  priceId: string;
  label: string;
  style?: React.CSSProperties;
}

export function CheckoutButton({ priceId, label, style = {} }: CheckoutButtonProps) {
  const [loading, setLoading] = useState(false);

  const handleCheckout = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          price_id: priceId,
          email: "", // will be collected by Stripe Checkout
        }),
      });
      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        alert("Something went wrong. Please try again.");
        setLoading(false);
      }
    } catch {
      alert("Something went wrong. Please try again.");
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handleCheckout}
      disabled={loading}
      style={{
        padding: "14px 24px",
        borderRadius: "8px",
        fontSize: "15px",
        fontFamily: "Inter, system-ui, sans-serif",
        fontWeight: 600,
        cursor: loading ? "wait" : "pointer",
        opacity: loading ? 0.7 : 1,
        transition: "all 150ms",
        border: "none",
        width: "100%",
        ...style,
      }}
    >
      {loading ? "Redirecting..." : label}
    </button>
  );
}
