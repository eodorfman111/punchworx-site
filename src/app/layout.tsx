import type { Metadata } from "next";
import { Atkinson_Hyperlegible, Barlow_Semi_Condensed } from "next/font/google";
import { CallBar } from "@/components/call-bar";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import "./globals.css";

const atkinson = Atkinson_Hyperlegible({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-atkinson",
});

const atkinsonBold = Atkinson_Hyperlegible({
  subsets: ["latin"],
  weight: "700",
  variable: "--font-atkinson-bold",
});

const barlow = Barlow_Semi_Condensed({
  subsets: ["latin"],
  weight: "700",
  variable: "--font-barlow",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.punchworx.org"),
  title: {
    default: "PUNCHWORX - FIGHTING AGAINST PARKINSON’S",
    template: "%s | PUNCHWORX",
  },
  description:
    "PUNCHWORX offers specialized exercise programs, including non-contact boxing and aqua-boxing to help individuals with Parkinson's manage symptoms and improve quality of life in Lakeland, FL.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${atkinson.variable} ${atkinsonBold.variable} ${barlow.variable}`}>
      <body className="pb-28 xl:pb-0">
        <a className="skip-link" href="#main">
          Skip to Content
        </a>
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
        <CallBar />
      </body>
    </html>
  );
}
