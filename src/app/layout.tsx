import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import TopBanner from "@/components/Section/TopBanner";
import Footer from "@/components/Section/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Thug of Blogs",
    template: "%s | Thug of Blogs",
  },
  description: "Thug of Blogs is a blog where you can find articles on various topics like programming, web development, and more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className}`}>
        {/* <TopBanner/> */}
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
