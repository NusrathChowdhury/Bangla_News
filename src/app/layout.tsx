import type { Metadata } from "next";
import { Noto_Serif_Bengali } from "next/font/google";
import "./globals.css";
import Header from "./componets/Header";
import Marquee from "@/components/Marquee";

const notoSerifBengali = Noto_Serif_Bengali({
  variable: "--font-noto-serif-bengali",
  subsets: ["bengali", "latin"],
});

export const metadata: Metadata = {
  title: "Bangla News 24",
  description: "Bangla News 24",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="bn"
      className={`${notoSerifBengali.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        <Marquee />
        <main className="max-w-7xl mx-auto">

        {children}
        </main>
        </body>
    </html>
  );
}
