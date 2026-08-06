import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Atticer — Design Studio | Branding, Logos & Web Management",
  description:
    "Atticer is a freelance design studio crafting logos, brand identities and websites that make businesses impossible to forget. Based in India.",
  keywords: [
    "design studio",
    "brand identity",
    "logo design",
    "web management",
    "freelance designer",
    "India",
  ],
  openGraph: {
    title: "Atticer — Design Studio",
    description:
      "We craft logos, brand identities and websites that make businesses impossible to forget.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} antialiased scroll-smooth`}>
      <body className="min-h-screen selection:bg-green/30 selection:text-white">
        {children}
      </body>
    </html>
  );
}
