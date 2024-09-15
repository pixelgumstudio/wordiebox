import { Metadata } from "next";
import PageFile from "./pageFile";


export const metadata: Metadata = {
    title: "Random Color Generator |  Color Picker - Wordiebox",
    description:
      "The color generator offers a wide range of uses, from web development to artistic purposes.",
      icons: {
        icon: 'https://wordiebox.com/icon.png',  // This sets the favicon for this specific page
      },
       openGraph: {
        type: "website",
        siteName: "Wordiebox",
      title: "Random Color Generator |  Color Picker - Wordiebox",
      description:
        "The color generator offers a wide range of uses, from web development to artistic purposes.",
      url: "https://wordiebox.com/letter-generator",
      images: [{
        url: 'https://wordiebox.com/seo-card.png',
      }],
    },
    twitter: {
      card: "summary_large_image",
      site: "https://wordiebox.com/letter-generator",
      title: "Random Color Generator |  Color Picker - Wordiebox",
      description:
        "The color generator offers a wide range of uses, from web development to artistic purposes.",
        images: [{
          url: 'https://wordiebox.com/seo-card.png',
        }],
    },
  };

  const RandomLetter = () => {

    return <PageFile />
    };
    
    export default RandomLetter;