import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Borisova Natali | Product Marketing & Monetization",
  description: "Personal website of Borisova Natali - Product Marketing Manager & Growth Specialist.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} dark`}>
        <Navbar />
        <main className="pt-20 min-h-screen">
          {children}
        </main>
        <footer className="border-t border-border/40 py-12 mt-20">
          <div className="max-w-7xl mx-auto px-6 text-center text-sm text-foreground/60">
            © {new Date().getFullYear()} Borisova Natali. Built with Next.js.
          </div>
        </footer>
      </body>
    </html>
  );
}

