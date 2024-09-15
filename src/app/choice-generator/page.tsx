import { Metadata } from "next";
import PageFile from "./pageFile";


export const metadata: Metadata = {
    title: "Random Choice Generator | random selection - Wordiebox",
    description:
      "Create a random choice from your text options. It will generate random choices from your personal list. Quickly make decisions with this free random pick tool.",
      icons: {
        icon: 'https://wordiebox.com/icon.png',  // This sets the favicon for this specific page
      },
       openGraph: {
        type: "website",
        siteName: "Wordiebox",
      title: "Random Choice Generator | random selection - Wordiebox",
      description:
        "Create a random choice from your text options. It will generate random choices from your personal list. Quickly make decisions with this free random pick tool.",
      url: "https://wordiebox.com/choice-generator",
      images: [{
        url: 'https://wordiebox.com/seo-card.png',
      }],
    },
    twitter: {
      card: "summary_large_image",
      site: "https://wordiebox.com/choice-generator",
      title: "Random Choice Generator | random selection - Wordiebox",
      description:
        "Create a random choice from your text options. It will generate random choices from your personal list. Quickly make decisions with this free random pick tool.",
        images: [{
          url: 'https://wordiebox.com/seo-card.png',
        }],
    },
  };

  const ChoiceGenerator = () => {

    return <PageFile />
    };
    
    export default ChoiceGenerator;