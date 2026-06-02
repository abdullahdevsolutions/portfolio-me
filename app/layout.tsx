import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const manrope = Manrope({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "Abdullah Azhar Portfolio",
  description:
    "Full-stack developer crafting polished digital products across PHP, Laravel, and modern JavaScript frameworks.",
  icons: {
    icon: "/icon.jpg",
    shortcut: "/icon.jpg",
    apple: "/icon.jpg",
  },
  openGraph: {
    title: "Abdullah Azhar | Full-Stack Developer",
    description:
      "Portfolio and case studies for Abdullah Azhar, showcasing product-focused engineering across web platforms.",
    url: "https://abdullah-azhar-portfolio.vercel.app",
    siteName: "Abdullah Azhar Portfolio",
    images: [{ url: "/assets/project.jpg" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Abdullah Azhar | Full-Stack Developer",
    description:
      "Selected projects, skills, and experience from the portfolio of Abdullah Azhar.",
    images: ["/assets/project.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${manrope.className} text-slate-100`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
