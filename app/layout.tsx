import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AGRI-EYE",
  description: "Digital food traceability and B2B agrimarketplace for local farmers.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
