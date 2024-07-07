import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Section/Footer";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Blog Insights",
    template: "%s | Blog Insights",
  },
  description: "Blog Insights is a blog where you can find articles on various topics like programming, web development, and more.",
  keywords: [
    "Blog Insights",
    "programming articles",
    "web development tips",
    "technology blog",
    "coding tutorials",
    "software development",
    "tech news",
    "frontend development",
    "backend development",
    "full stack development",
    "JavaScript tutorials",
    "Python programming",
    "HTML and CSS tips",
    "responsive design",
    "SEO strategies",
    "blogging tips 2024",
  ],
  openGraph: {
    title: "Blog Insights",
    description: "Discover articles on programming, web development, and more at Blog Insights.",
    url: "https://www.bloginsights.com",
    type: "website",
    images: [
      {
        url: "https://www.bloginsights.com/og-image.jpg",
        width: 800,
        height: 600,
        alt: "Blog Insights",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-626CD7NXNX"></Script>
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-626CD7NXNX');
          `}
        </Script>
      </head>
      <body className={poppins.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
