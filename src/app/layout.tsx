import type { Metadata } from "next";
import { Inter, Barlow } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const barlow = Barlow({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-heading" });

export const metadata: Metadata = {
  title: {
    default: "SmartKAB - Smart Energy Storage Cabinet Solutions",
    template: "%s | SmartKAB",
  },
  description: "Your trusted partner for customized and pre-integrated outdoor ESS cabinets. Leading supplier of smart energy storage solutions.",
  keywords: ["ESS cabinet", "energy storage", "outdoor cabinet", "smart cabinet", "battery enclosure"],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://smartkab.com",
    siteName: "SmartKAB",
    title: "SmartKAB - Smart Energy Storage Cabinet Solutions",
    description: "Your trusted partner for customized and pre-integrated outdoor ESS cabinets.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${barlow.variable}`}>
      <body className="font-sans antialiased">
        <Header />
        <main className="pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
