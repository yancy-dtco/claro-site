import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Claro — Clarity about your buyer. Confidence in your brand.",
  description: "Claro analyzes real conversations, reviews, and communities to build your complete buyer intelligence system — who they are, what drives them, and the exact words that make them buy.",
  metadataBase: new URL("https://meetclaro.ai"),
  verification: {
    google: "eMzeVflQucFWrsmosypPiPEoP4OXcdkSlg9o-gzPufc",
  },
  openGraph: {
    title: "Claro — Clarity about your buyer. Confidence in your brand.",
    description: "Claro analyzes real conversations, reviews, and communities to build your complete buyer intelligence system — who they are, what drives them, and the exact words that make them buy.",
    url: "https://meetclaro.ai",
    siteName: "Claro",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Claro — Clarity about your buyer. Confidence in your brand.",
    description: "Claro analyzes real conversations, reviews, and communities to build your complete buyer intelligence system — who they are, what drives them, and the exact words that make them buy.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
