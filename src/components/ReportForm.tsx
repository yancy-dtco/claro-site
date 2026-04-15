"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export function ReportForm() {
  const [input, setInput] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!input.trim() || !email.trim()) {
      setError("Please fill in both fields.");
      return;
    }

    setLoading(true);

    try {
      const isShopUrl = input.includes("etsy.com");
      const body = {
        email: email.trim(),
        shop_url: isShopUrl ? input.trim() : "",
        product_category: !isShopUrl ? input.trim() : "",
      };

      const res = await fetch("/api/report", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      const data = await res.json();

      if (data.report_id) {
        router.push(`/report/${data.report_id}`);
      } else {
        setError(data.error || "Something went wrong. Please try again.");
        setLoading(false);
      }
    } catch {
      setError("Something went wrong. Please try again.");
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ width: "100%" }}>
      <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap", marginBottom: "12px" }}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Your Etsy shop URL or product category"
          disabled={loading}
          style={{
            width: "300px",
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
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your@email.com"
          disabled={loading}
          style={{
            width: "220px",
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
          type="submit"
          disabled={loading}
          style={{
            padding: "14px 28px",
            background: "var(--gold)",
            color: "var(--midnight)",
            borderRadius: "8px",
            fontSize: "15px",
            fontWeight: 600,
            fontFamily: "Inter, system-ui, sans-serif",
            whiteSpace: "nowrap",
            cursor: loading ? "wait" : "pointer",
            opacity: loading ? 0.7 : 1,
            border: "none",
            transition: "all 150ms",
          }}
        >
          {loading ? "Building your report..." : "Get your free report →"}
        </button>
      </div>
      {error && (
        <p style={{ fontSize: "14px", color: "#e53935", textAlign: "center", fontFamily: "Inter" }}>{error}</p>
      )}
      {!error && (
        <p style={{ fontSize: "13px", color: "var(--horizon)", textAlign: "center", fontFamily: "Inter" }}>
          Free. No credit card. Ready in 2 minutes.
        </p>
      )}
    </form>
  );
}
