/* eslint-disable react/no-unescaped-entities */

import { Metadata } from 'next';
import PageFile from './[language]/pageFile';

export async function generateMetadata({ params }: { params: { language: string } }): Promise<Metadata> {
  const { language } = params;

  const lang = language !== undefined ? language : "english";
  return {
  title: `Free online ${lang} Character counter - Wordiebox.com`,
  description: `${lang} Character Counter tool is a free online tool that calculates the number of characters in your writing.`,
  icons: {
    icon: 'https://wordiebox.com/icon.png',  // This sets the favicon for this specific page
  },
  openGraph: {
    type: "website",
    siteName: "Wordiebox",
    title: `Free online ${lang} Character counter tool |  Wordiebox`,
    description: `${lang} Character Counter tool is a free online tool that calculates the number of characters in your writing.`,
    url: `https://wordiebox.com/character-counter`,
    images: [{
      url: 'https://wordiebox.com/seo-card.png',
    }],
  },
  twitter: {
    card: "summary_large_image",
    site: `https://wordiebox.com/character-counter`,
    title: `Free online ${lang} Character counter tool |  Wordiebox`,
    description: `${lang} Character Counter tool is a free online tool that calculates the number of characters in your writing.`,
    images: [{
      url: 'https://wordiebox.com/seo-card.png',
    }],
  },
}
}

const CharacterCount = ({ params }: { params: { language: string } }) => {

  return <PageFile />

}
export default CharacterCount