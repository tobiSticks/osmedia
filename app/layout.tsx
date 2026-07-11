import type { Metadata } from "next";
import { Playfair_Display, Jost } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
});

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "OSmedia Creation — Commercial & Studio Photography",
  description:
    "OSmedia Creation is a commercial studio photography and film house specializing in studio, maternity, wedding and corporate work — crafting timeless imagery with a modern, editorial eye.",
  keywords: [
    "commercial photographer",
    "studio photography",
    "maternity photography",
    "corporate event photography",
    "wedding photography",
    "videography",
    "OSmedia Creation",
  ],
  openGraph: {
    title: "OSmedia Creation — Commercial & Studio Photography",
    description:
      "Timeless commercial studio, maternity, wedding and corporate photography & film.",
    siteName: "OSmedia Creation",
    type: "website",
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
      className={`${playfair.variable} ${jost.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-paper text-ink">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
