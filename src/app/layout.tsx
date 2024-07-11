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
  metadataBase: new URL("https://www.bloginsights.com"), // Set the base URL for Open Graph and Twitter images
  title: {
    default: "Expert programming and web tutorials - Blog Insights",
    template: "%s - Blog Insights",
  },
  description: "Discover expert insights and tutorials on programming, web development, and more at Blog Insights. Explore comprehensive articles to enhance your skills and stay updated with the latest in technology",
  keywords: [
    "Blog Insights",
    "programming tutorials, web development articles, technology insights, coding tips, software engineering, IT trends, developer resources",
    "SEO strategies",
    "blogging tips 2024",
  ],
  authors: [
    { name: 'Hamza' },
    { name: 'Hamza Malik', url: 'https://github.com/hamzadevlpr/' },
  ],
  publisher: 'Hamza Malik',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
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
        url: "/opengraph-image.jpg",
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
