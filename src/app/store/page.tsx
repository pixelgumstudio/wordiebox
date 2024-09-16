
import { Metadata } from "next";
import PageFile from "./pageFile";

export const metadata: Metadata = {
  
  title: 'Wordiebox Store | Word counter | Wordiebox Source code',
  description: 'The wordiebox store contains a directory of resources that customers can purchase. It includes wordiebox integration, word library, name library and many more! ',
  icons: {
    icon: 'https://wordiebox.com/icon.png',  // This sets the favicon for this specific page
  },
  openGraph: {
    type: "website",
    siteName: "Wordiebox",
    title: 'Wordiebox Store | Word counter | Wordiebox Source code',
    description: 'The wordiebox store contains a directory of resources that customers can purchase. It includes wordiebox integration, word library, name library and many more! ',
    url: 'https://wordiebox.com/store',
    images: [{
      url: 'https://wordiebox.com/seo-card.png',
    }],
  },
  twitter: {
    card: "summary_large_image",
    site: 'https://wordiebox.com/store',
    title: 'Wordiebox Store | Word counter | Wordiebox Source code',
    description: 'The wordiebox store contains a directory of resources that customers can purchase. It includes wordiebox integration, word library, name library and many more! ',
    images: [{
      url: 'https://wordiebox.com/seo-card.png',
    }],
  },
};


const DailyWord = () => {

return <PageFile />
};

export default DailyWord;