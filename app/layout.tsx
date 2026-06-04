import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AGRI-EYE",
  description: "Platform keterlacakan pangan dan marketplace B2B hasil pertanian untuk petani lokal.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
