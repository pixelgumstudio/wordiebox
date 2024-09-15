import { Metadata } from "next";
import PageFile from "./pageFile";


export const metadata: Metadata = {
    title: "Random Letter Generator - Wordiebox",
    description:
      "Get a random letter from the English alphabet or any other alphabet of your choice (custom input) or generate a sequence of random letters of a desired length.",
      icons: {
        icon: 'https://wordiebox.com/icon.png',  // This sets the favicon for this specific page
      },
       openGraph: {
        type: "website",
        siteName: "Wordiebox",
      title: "Random Letter Generator - Wordiebox",
      description:
        "Get a random letter from the English alphabet or any other alphabet of your choice (custom input) or generate a sequence of random letters of a desired length.",
      url: "https://wordiebox.com/letter-generator",
      images: [{
        url: 'https://wordiebox.com/seo-card.png',
      }],
    },
    twitter: {
      card: "summary_large_image",
      site: "https://wordiebox.com/letter-generator",
      title: "Random Letter Generator - Wordiebox",
      description:
        "Get a random letter from the English alphabet or any other alphabet of your choice (custom input) or generate a sequence of random letters of a desired length.",
        images: [{
          url: 'https://wordiebox.com/seo-card.png',
        }],
    },
  };

  const RandomLetter = () => {

    return <PageFile />
    };
    
    export default RandomLetter;