import "./globals.css";

import type { Metadata } from "next";
import { EB_Garamond, Raleway } from "next/font/google"

import { cn } from "@/lib/utils"
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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
      <body className={`${eb_garamond.variable} ${raleway.variable}`}>
        <main className="grid grid-cols-4 gap-4 mx-4 md:grid-cols-8 md:mx-16">
          <Navbar />
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
