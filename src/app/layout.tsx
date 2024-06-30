import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../sections/navbar";
import Footer from "../sections/footer";
import Head from "next/head";
import {GoogleAnalytics, GoogleTagManager} from "@next/third-parties/google"
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Wordiebox - Word counter & Improve Grammar',
  description: 'A number of free word tools to help improve give insight to your writing.',
  icons: {
    icon: '/public/icon.png',  // This sets the favicon for this specific page
  },
  openGraph: {
    type: "website",
    url: "https://wordiebox.com",
    title: "Wordiebox - Word counter & Improve Grammar",
    description: "A number of free word tools to help improve give insight to your writing.",
    siteName: "Wordiebox",
    images: [{
      url: "https://wordiebox.com/icon.png",
    }],
  },
  twitter: {
    card: "summary_large_image",
    site: "https://wordiebox.com",
    images: "https://wordiebox.com/icon.png",
    title: "Wordiebox - Word counter & Improve Grammar",
    description: "A number of free word tools to help improve give insight to your writing."
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
       <Head>
        <title>Wordiebox - Word counter & Improve Grammar</title>
        <link rel="icon" href="/icon.ico" />
        <meta name="description" content="A number of free word tools to help improve give insight to your writing" />
        <meta name="author" content="Wordiebox" />
        <meta property="og:title" content="Wordiebox - Word counter & Improve Grammar" />
        <meta property="og:description" content="A number of free word tools to help improve give insight to your writing" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://wordiebox.com" />
        <meta property="og:image" content="https://yourwebsite.com/default-image.jpg" />
      </Head>
      <body className={`w-full flex flex-col justify-between min-h-[100vh] h-full mx-auto mt-[60px] bg-[#FBF4EE] ${inter.className}`}>
        <Navbar />
        {children}
        <Footer />
        <GoogleTagManager gtmId="GTM-K8ST54XF" />
        <GoogleAnalytics gaId="G-P8TXFVSRPZ" />
      </body>
    </html>
  );
}

