import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Rusti Shack",
  description: "Beach and dive gear for Apo Island and beyond.",
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
