import { Metadata } from "next";
import PageFile from "./pageFile";


export const metadata: Metadata = {
    title: "List Randomizer - Wordiebox",
    description:
      "This page allows you to randomize lists of strings using true randomness, which for many purposes is better than the pseudo-random number algorithms typically used in computer programs. ",
      icons: {
        icon: 'https://wordiebox.com/icon.png',  // This sets the favicon for this specific page
      },
       openGraph: {
        type: "website",
        siteName: "Wordiebox",
      title: "List Randomizer - Wordiebox",
      description:
        "This page allows you to randomize lists of strings using true randomness, which for many purposes is better than the pseudo-random number algorithms typically used in computer programs. ",
      url: "https://wordiebox.com/randomize-list",
      images: [{
        url: 'https://wordiebox.com/seo-card.png',
      }],
    },
    twitter: {
      card: "summary_large_image",
      site: "https://wordiebox.com/randomize-list",
      title: "List Randomizer - Wordiebox",
      description:
        "This page allows you to randomize lists of strings using true randomness, which for many purposes is better than the pseudo-random number algorithms typically used in computer programs. ",
        images: [{
          url: 'https://wordiebox.com/seo-card.png',
        }],
    },
  };

  const ChoiceGenerator = () => {

    return <PageFile />
    };
    
    export default ChoiceGenerator;