import type { Metadata } from "next";
import "./globals.css";
import { Barlow_Condensed } from "next/font/google";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

const barlow_condensed = Barlow_Condensed({
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Juice Lab",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={barlow_condensed.className}>
        <Navbar />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
