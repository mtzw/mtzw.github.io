import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "mtzw.jp",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  )
}