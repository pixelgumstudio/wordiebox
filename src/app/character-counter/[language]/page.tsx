/* eslint-disable react/no-unescaped-entities */

import { Metadata } from 'next';
import PageFile from './pageFile';

export async function generateMetadata({ params }: { params: { language: string } }): Promise<Metadata> {
  const { language } = params;

  return {
  title: `Free online ${language} Character counter - Wordiebox.com`,
  description: `${language} Character Counter tool is a free online tool that calculates the number of characters in your writing.`,
  openGraph: {
    title: `Free online ${language} Character counter tool |  Wordiebox`,
    description: `${language} Character Counter tool is a free online tool that calculates the number of characters in your writing.`,
    url: `https://wordiebox.com/character-counter/${language}`,
    images: [{
      url: 'https://wordiebox.com/icon.png',
    }],
  },
  twitter: {
    title: `Free online ${language} Character counter tool |  Wordiebox`,
    description: `${language} Character Counter tool is a free online tool that calculates the number of characters in your writing.`,
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