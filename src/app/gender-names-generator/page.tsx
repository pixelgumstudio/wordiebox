import { Metadata } from "next";
import PageFile from "./[language]/pageFile";


export const metadata: Metadata = {
    title: " English names |  English boy names |  English girl names  -  Wordiebox.com",
    description:
      `The free online English names tool allows you to generate a name and its meaning in the English for male and female`,
      icons: {
        icon: 'https://wordiebox.com/icon.png',  // This sets the favicon for this specific page
      },
       openGraph: {
        type: "website",
        siteName: "Wordiebox",
      title: " English names |  English boy names |  English girl names  -  Wordiebox.com",
      description:
        "The free online English names tool allows you to generate a name and its meaning in the English for male and female",
      url: "https://wordiebox.com/gender-names-generator",
      images: [{
        url: 'https://wordiebox.com/seo-card.png',
      }],
    },
    twitter: {
      card: "summary_large_image",
      site: "https://wordiebox.com/gender-names-generator",
      title: " English names |  English boy names |  English girl names  -  Wordiebox.com",
      description:
        "The free online English names tool allows you to generate a name and its meaning in the English for male and female",
        images: [{
          url: 'https://wordiebox.com/seo-card.png',
        }],
    },
  };

  const RandomWord = () => {

    return <PageFile />
    };
    
    export default RandomWord;