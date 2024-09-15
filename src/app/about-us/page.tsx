
import { Metadata } from "next";
import PageFile from "./pageFile";

export const metadata: Metadata = {
  
  title: 'Wordiebox About us',
  description: 'Wordiebox offers a wide range of learning tools designed to improve your learning experience. It includes a random word generator, word counter, character counter and so much more!',
  icons: {
    icon: 'https://wordiebox.com/icon.png',  // This sets the favicon for this specific page
  },
  openGraph: {
    type: "website",
    siteName: "Wordiebox",
    title: 'Wordiebox About us',
    description: 'Wordiebox offers a wide range of learning tools designed to improve your learning experience. It includes a random word generator, word counter, character counter and so much more!',
    url: 'https://wordiebox.com/about-us',
    images: [{
      url: 'https://wordiebox.com/seo-card.png',
    }],
  },
  twitter: {
    card: "summary_large_image",
    site: 'https://wordiebox.com/about-us',
    title: 'Wordiebox About us',
    description: 'Wordiebox offers a wide range of learning tools designed to improve your learning experience. It includes a random word generator, word counter, character counter and so much more!',
    images: [{
      url: 'https://wordiebox.com/seo-card.png',
    }],
  },
};


const DailyWord = () => {

return <PageFile />
};

export default DailyWord;