import ClientLayout from "@/components/Auth/ClientLayout";
import GoTop from "@/components/GoTop";
import StoreProvider from "@/store/StoreProvider";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Script from "next/script";
import NextTopLoader from "nextjs-toploader";
import React, { Suspense } from "react";
import { Toaster } from "react-hot-toast";
import "./globals.css";


const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.bloginsights.com"),
  title: {
    default: "Blog Insights | Expert programming and web tutorials.",
    template: "%s | Blog Insights",
  },
  description: "Discover expert insights and tutorials on programming, web development, and more at Blog Insights. Explore comprehensive articles to enhance your skills and stay updated with the latest in technology",
  keywords: [
    "Blog Insights",
    "programming tutorials, web development articles, technology insights, coding tips, software engineering, IT trends, developer resources",
    "SEO strategies", "blogging tips 2024",
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
        url: `/opengraph-image.jpg`,
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
      {/* <head>
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-626CD7NXNX"></Script>
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-626CD7NXNX');
          `}
        </Script>
        <meta name="msvalidate.01" content="8D003752D10EFAB1C98FD841D4CA0657" />
      </head> */}
      <body className={`relative ${poppins.className}`}>
        <StoreProvider>
          <Suspense>
            <ClientLayout>
              {children}
            </ClientLayout>
            <GoTop />
          </Suspense>
          <Toaster />
          <NextTopLoader />
        </StoreProvider>
      </body>
    </html>
  );
}
