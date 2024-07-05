/* eslint-disable react/no-unescaped-entities */

import { Metadata } from 'next';
import PageFile from './[language]/pageFile';

export async function generateMetadata({ params }: { params: { language: string } }): Promise<Metadata> {
  const { language } = params;

  const lang = language !== undefined ? language : "english";
  return {
  title: `Free online ${lang} Character counter - Wordiebox.com`,
  description: `${lang} Character Counter tool is a free online tool that calculates the number of characters in your writing.`,
  openGraph: {
    title: `Free online ${lang} Character counter tool |  Wordiebox`,
    description: `${lang} Character Counter tool is a free online tool that calculates the number of characters in your writing.`,
    url: `https://wordiebox.com/character-counter/${lang}`,
    images: [{
      url: 'https://wordiebox.com/icon.png',
    }],
  },
  twitter: {
    title: `Free online ${lang} Character counter tool |  Wordiebox`,
    description: `${lang} Character Counter tool is a free online tool that calculates the number of characters in your writing.`,
    images: [{
      url: 'https://wordiebox.com/icon.png',
    }],
  },
}
}

const CharacterCount = ({ params }: { params: { language: string } }) => {

  return <PageFile />

}
export default CharacterCount