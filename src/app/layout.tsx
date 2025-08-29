import type { Metadata } from "next";
import { Inter_Tight } from "next/font/google";
import { SiteThemeProvider } from '@/components/sections/ThemeProvider';
import "./globals.css";

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "MemePulse Coin",
  description: "Create a playful, easy-to-navigate landing page for a memecoin with clear buying steps and tokenomics.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <SiteThemeProvider theme={{ styleVariant: "funAndTrendy", colorTemplate: 1, textAnimation: "slide" }}>
        <body className={`${interTight.variable} antialiased`}>{children}</body>
      </SiteThemeProvider>
    </html>
  );
}
