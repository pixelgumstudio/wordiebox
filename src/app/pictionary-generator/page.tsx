
import { Metadata } from "next";
import PageFile from "./pageFile";

interface Page {
title: string,
description: string,
url: string,
image: string,
}

const data: Page ={
  title: "Pictionary Generator - Wordiebox",
description: "The Pictionary word generator lets you play Pictionary anywhere with a fun mix of Pictionary words. It also has options for charades and catchphrase word generators, making it easy to enjoy these classic games.",
url: "https://wordiebox.com/pictionary-generator",
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