import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "JJA Investment",
  description:
    "JJA Investment Company | Exceptional Management for Growth-Focused Investors ",
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
