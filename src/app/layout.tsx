import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Section/Footer";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Blog Insights | Expert programming and web tutorials.",
    template: "%s | Blog Insights | Expert programming and web tutorials.",
  },
  description: "Discover expert insights and tutorials on programming, web development, and more at Blog Insights. Explore comprehensive articles to enhance your skills and stay updated with the latest in technology",
  keywords: [
    "Blog Insights",
    "programming tutorials, web development articles, technology insights, coding tips, software engineering, IT trends, developer resources",
    "SEO strategies",
    "blogging tips 2024",
  ],
  twitter: {
    site: "@bloginsights",
    card: "summary_large_image",
  },
  openGraph: {
    title: "Blog Insights | Expert programming and web tutorials.",
    description: "Discover expert insights and tutorials on programming, web development, and more at Blog Insights. Explore comprehensive articles to enhance your skills and stay updated with the latest in technology.",
    url: "https://www.bloginsights.com",
    type: "website",
    images: [
      {
        url: `https://www.bloginsights.com`,
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
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
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
        <Analytics />
        <Footer />
      </body>
    </html>
  );
}
