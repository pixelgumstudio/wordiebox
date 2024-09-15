import { Metadata } from "next";
import PageFile from "./pageFile";


export const metadata: Metadata = {
    title: "Random String Generator - Wordiebox",
    description:
      "Get a random string from the english alphabet or any other alphabet of your choice (custom input.)",
      icons: {
        icon: 'https://wordiebox.com/icon.png',  // This sets the favicon for this specific page
      },
       openGraph: {
        type: "website",
        siteName: "Wordiebox",
      title: "Random String Generator - Wordiebox",
      description:
        "Get a random string from the english alphabet or any other alphabet of your choice (custom input.)",
      url: "https://wordiebox.com/string-generator",
      images: [{
        url: 'https://wordiebox.com/seo-card.png',
      }],
    },
    twitter: {
      card: "summary_large_image",
      site: "https://wordiebox.com/string-generator",
      title: "Random String Generator - Wordiebox",
      description:
        "Get a random string from the english alphabet or any other alphabet of your choice (custom input.)",
        images: [{
          url: 'https://wordiebox.com/seo-card.png',
        }],
    },
  };

  const RandomWord = () => {

    return <PageFile />
    };
    
    export default RandomWord;