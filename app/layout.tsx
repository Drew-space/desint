import type { Metadata } from "next";
import { Host_Grotesk } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const hostGrotesk = Host_Grotesk({
  variable: "--font-host-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Desint || Interior Design Agency",
  description:
    "Desint is an interior design agency website built with Next.js  and GSAP, showcasing elegant spaces, creative designs, and seamless user experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${hostGrotesk.className}  antialiased`}>
        <main className="m-h-screen">
          <Header />
          {children}
        </main>
      </body>
    </html>
  );
}
