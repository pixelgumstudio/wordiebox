
import { Metadata } from "next";
import PageFile from "./pageFile";

interface Page {
title: string,
description: string,
url: string,
image: string,
}

const data: Page ={
  title: "Random Phrase Generator - Wordiebox",
description: "The Random Phrase Generator gives you over 1000 random phrases and idioms, along with their definitions. It's a fun way to learn new idioms and improve your English!",
url: "https://wordiebox.com/random-phrase-generator",
image: "https://wordiebox.com/seo-card.png"
}
export const metadata: Metadata = {
  

  title: data.title,
  description: data.description,
  icons: {
    icon: 'https://wordiebox.com/icon.png',  // This sets the favicon for this specific page
  },
  openGraph: {
    type: "website",
    siteName: "Wordiebox",
    title: data.title,
    description: data.description,
    url: data.url,
    images: [{
      url: data.image,
    }],
  },
  twitter: {
    card: "summary_large_image",
    site: data.url,
    title: data.title,
    description: data.description,
    images: [{
      url: data.image,
    }],
  },
};


const Page = () => {

return <PageFile />
};

export default Page;