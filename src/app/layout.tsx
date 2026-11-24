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

const siteTitle = "PUNCHWORX - FIGHTING AGAINST PARKINSON’S";
const description =
  "PUNCHWORX offers specialized exercise programs, including non-contact boxing and aqua-boxing to help individuals with Parkinson's manage symptoms and improve quality of life in Lakeland, FL.";
const ogImage = {
  url: "https://punchworx.org/og-image.png",
  width: 1200,
  height: 630,
  alt: "PunchWorX. Fighting Against Parkinson's.",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://punchworx.org"),
  title: {
    default: siteTitle,
    template: "%s | PUNCHWORX",
  },
  description,
  openGraph: {
    title: siteTitle,
    description,
    url: "https://punchworx.org",
    siteName: "PunchWorX",
    type: "website",
    images: [ogImage],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description,
    images: [ogImage.url],
  },
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
