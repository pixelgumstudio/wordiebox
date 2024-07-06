import { Metadata } from "next";
import PageFile from "./pageFile";


export const metadata: Metadata = {
    title: "Random Word Generator - Wordiebox.com",
    description:
      "The free online random word generator tool allows you to create any number of random words you need for your project. Choose the number of random words you want to generate and generate the words",
      icons: {
        icon: 'https://wordiebox.com/icon.png',  // This sets the favicon for this specific page
      },
       openGraph: {
        type: "website",
        siteName: "Wordiebox",
      title: "Random Word Generator - Wordiebox.com",
      description:
        "The free online random word generator tool allows you to create any number of random words you need for your project. Choose the number of random words you want to generate and generate the words",
      url: "https://wordiebox.com/random-word-generator",
      images: [{
        url: 'https://wordiebox.com/seo-card.png',
      }],
    },
    twitter: {
      card: "summary_large_image",
      site: "https://wordiebox.com/random-word-generator",
      title: "Random Word Generator - Wordiebox.com",
      description:
        "The free online random word generator tool allows you to create any number of random words you need for your project. Choose the number of random words you want to generate and generate the words",
        images: [{
          url: 'https://wordiebox.com/seo-card.png',
        }],
    },
  };

  const RandomWord = () => {

    return <PageFile />
    };
    
    export default RandomWord;