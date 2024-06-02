import "./globals.css";

import type { Metadata } from "next";
import { EB_Garamond, Raleway, Lora } from "next/font/google"

import { cn } from "@/lib/utils"
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const lora = Lora({
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
      <body className={`${lora.variable} ${raleway.variable}`}>
        <main className="grid grid-cols-4 gap-4 mx-4 md:grid-cols-8 md:mx-16">
          <Navbar />
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
