import type { Metadata, Viewport } from "next";
import type { CSSProperties, ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "OtterWay — Intelligent Travel Prototype",
  description: "Mobile-first stakeholder prototype for OtterWay and Jojo."
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#F9F6F6"
};

const fontVariables = {
  "--font-geist": "Arial, Helvetica, sans-serif",
  "--font-geist-mono": "SFMono-Regular, Menlo, Monaco, Consolas, monospace"
} as CSSProperties;

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body style={fontVariables}>{children}</body>
    </html>
  );
}
