import { Metadata } from "next";
import PageFile from "./pageFile";


export const metadata: Metadata = {
    title: "Calendar Date Generator - Wordiebox.com",
    description:
      `This page allows you to generate random calendar dates using true spontaneity, which for many purposes is better than the pseudo-random number algorithms typically used in computer programs.`,
      icons: {
        icon: 'https://wordiebox.com/icon.png',  // This sets the favicon for this specific page
      },
       openGraph: {
        type: "website",
        siteName: "Wordiebox",
      title: "Calendar Date Generator - Wordiebox.com",
      description:
        "This page allows you to generate random calendar dates using true spontaneity, which for many purposes is better than the pseudo-random number algorithms typically used in computer programs.",
      url: "https://wordiebox.com/date-generator",
      images: [{
        url: 'https://wordiebox.com/seo-card.png',
      }],
    },
    twitter: {
      card: "summary_large_image",
      site: "https://wordiebox.com/date-generator",
      title: "Calendar Date Generator - Wordiebox.com",
      description:
        "This page allows you to generate random calendar dates using true spontaneity, which for many purposes is better than the pseudo-random number algorithms typically used in computer programs.",
        images: [{
          url: 'https://wordiebox.com/seo-card.png',
        }],
    },
  };

  const RandomWord = () => {

    return <PageFile />
    };
    
    export default RandomWord;