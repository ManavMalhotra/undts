import "./globals.css";

import type { Metadata } from "next";
import { EB_Garamond, Raleway } from "next/font/google"

import { cn } from "@/lib/utils"

const eb_garamond = EB_Garamond({
  subsets: ["latin"],
  variable: "--font-eb-garamond",
})

const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-raleway",
})

export const metadata: Metadata = {
  title: "UNDTS",
  description: "Construction and Corrosion Prevention Services",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="light">
      <body className={`${eb_garamond.variable} ${raleway.variable}`}>{children}</body>
    </html>
  );
}
