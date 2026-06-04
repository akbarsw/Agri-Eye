import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "./logo.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "AGRI-EYE",
  description:
    "Platform keterlacakan pangan dan marketplace B2B hasil pertanian untuk petani lokal.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={`${inter.className} bg-slate-50 text-slate-900 antialiased`}>
        {children}
      </body>
    </html>
  );
}
