import type { Metadata } from "next";

import {
  Geist,
  Geist_Mono,
  Fraunces,
  Poppins,
  
  EB_Garamond
} from "next/font/google";
import "./globals.css";
import { IntroProvider } from "@/context/IntroContext";
import Navbar from "@/components/layout/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const garamound = EB_Garamond({
  variable: "--font-garamound-serif",
  subsets: ["latin"],
  weight: ["400"],
});


const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// 2. Configure Fraunces
const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"], 
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://siyaf.engineering"),
  title: "Siyaf. — Digital Architecture & Motion",
  description: "The digital index and portfolio of Siyaf. Specializing in full-stack architecture, WebGL, and frame-perfect motion.",
  openGraph: {
    title: "Siyaf. — Digital Architecture & Motion",
    description: "Full-stack architecture // Frame-perfect motion.",
    url: "https://siyaf.engineering",
    siteName: "Siyaf.engineering",
    images: [
      {
        url: "/opengraph-image.png", 
        width: 1200,
        height: 630,
        alt: "Siyaf.engineering - Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Siyaf. — Digital Architecture & Motion",
    description: "Full-stack architecture // Frame-perfect motion.",
    images: ["/opengraph-image.png"], 
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${garamound.variable} ${fraunces.variable} ${poppins.variable} antialiased`}
    >
      {/* UPDATED: Applied the global cinematic colors to the body */}
      <body className="bg-[#1a1a1a] text-[#f4efe6] font-sans antialiased overflow-x-hidden selection:bg-[#d4c3b3] selection:text-black">
        <IntroProvider>
          <Navbar />
          {children}
        </IntroProvider>
      </body>
    </html>
  );
}