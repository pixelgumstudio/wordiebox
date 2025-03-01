import type { Metadata } from "next";
import { Bricolage_Grotesque, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../sections/navbar";
import Footer from "../sections/footer";
import Head from "next/head";
import {GoogleAnalytics, GoogleTagManager} from "@next/third-parties/google"
import Advert from "@/components/advert";
import { CSPostHogProvider } from "@/lib/providers";
// import useScrollToTop from "@/components/ScrollToTop";
const Bricolage = Bricolage_Grotesque({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Wordiebox - Word counter & Improve Grammar',
  description: 'A number of free word tools to help improve give insight to your writing.',
  icons: {
    icon: 'https://wordiebox.com/icon.png',  // This sets the favicon for this specific page
  },
  openGraph: {
    type: "website",
    url: "https://wordiebox.com",
    title: "Wordiebox - Word counter & Improve Grammar",
    description: "A number of free word tools to help improve give insight to your writing.",
    siteName: "Wordiebox",
    images: [{
      url: "https://wordiebox.com/seo-card.png",
    }],
  },
  twitter: {
    card: "summary_large_image",
    site: "https://wordiebox.com",
    images: [{
      url: 'https://wordiebox.com/seo-card.png',
    }],
    title: "Wordiebox - Word counter & Improve Grammar",
    description: "A number of free word tools to help improve give insight to your writing."
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // useScrollToTop();
  return (
    <html lang="en">
      <CSPostHogProvider>
      <body className={`w-full flex flex-col justify-between min-h-[100vh] h-full mx-auto mt-[60px] bg-[#ffffff] dark:!bg-black dark:!text-white ${Bricolage.className}`}>
        {/* <ScrollToTop /> */}
        <Navbar />
        {/* <Advert product="landingvault" label="Go to landingvault" url="https://www.google.com" />
        <Advert product="indie niche" label="Go to Indie niche" url="https://www.google.com" /> */}
        {children}
        <Footer />
        <GoogleTagManager gtmId="GTM-K8ST54XF" />
        <GoogleAnalytics gaId="G-P8TXFVSRPZ" />
        <script 
          data-grow-initializer=""
          dangerouslySetInnerHTML={{
            __html: `!(function(){window.growMe||((window.growMe=function(e){window.growMe.push(e)}),(window.growMe=[]));var e=document.createElement("script");(e.type="text/javascript"),(e.src="https://faves.grow.me/main.js"),(e.defer=!0),e.setAttribute("data-grow-faves-site-id","U2l0ZTo2MDZlMjhjNC1mZTgxLTQ4ZDMtODdjOS1kOThhZDJkNWY4Njg=");var t=document.getElementsByTagName("script")[0];t.parentNode.insertBefore(e,t)})();`
          }}
        />
      </body>
      </CSPostHogProvider>
    </html>
  );
}

