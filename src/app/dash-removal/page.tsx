import { Metadata } from "next";
import PageFile from "./pageFile";


export const metadata: Metadata = {
    title: "Remove EM dashes",
    description:
      "Simplify your AI-generated text with this handy app that quickly removes em dashes, creating cleaner, more streamlined content. Ideal for writers, editors, or anyone aiming to refine their text with ease.",
      icons: {
        icon: 'https://wordiebox.com/icon.png',  // This sets the favicon for this specific page
      },
       openGraph: {
        type: "website",
        siteName: "Wordiebox",
      title: "Remove EM dashes |  Wordiebox",
      description:
        "Simplify your AI-generated text with this handy app that quickly removes em dashes, creating cleaner, more streamlined content. Ideal for writers, editors, or anyone aiming to refine their text with ease.!",
      url: "https://wordiebox.com/dash-removal",
      images: [{
        url: 'https://wordiebox.com/seo-card.png',
      }],
    },
    twitter: {
      card: "summary_large_image",
      site: "https://wordiebox.com/dash-removal",
      title: "Remove EM dashes |  Wordiebox",
      description:
        "Simplify your AI-generated text with this handy app that quickly removes em dashes, creating cleaner, more streamlined content. Ideal for writers, editors, or anyone aiming to refine their text with ease.",
        images: [{
          url: 'https://wordiebox.com/seo-card.png',
        }],
    },
  };

  const MorseCode = () => {

    return <PageFile />
    };
    
    export default MorseCode;