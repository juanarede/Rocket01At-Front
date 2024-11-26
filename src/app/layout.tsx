import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/navbar/Navbar";
import { poppins } from "@/components/fonts/Fonts"
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={poppins.variable}> 
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
