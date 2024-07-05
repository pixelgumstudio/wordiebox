import { Metadata } from 'next';
import PageFile from './[language]/pageFile';

export async function generateMetadata({ params }: { params: { language: string } }): Promise<Metadata> {
  const { language } = params;

  const lang = language !== undefined ? language : "english";

  return {
    title: `Free online ${lang} word counter - Wordiebox.com`,
    description: `${lang} Word Counter tool is a free online tool that calculates the number of words in your writing.`,
    openGraph: {
      title: `Free online ${lang} word counter tool | Wordiebox`,
      description: `${lang} Word Counter tool is a free online tool that calculates the number of words in your writing.`,
      url: `https://wordiebox.com/word-counter/${lang}`,
      images: [{
        url: 'https://wordiebox.com/icon.png',
      }],
    },
    twitter: {
      title: `Free online ${lang} word counter tool | Wordiebox`,
      description: `${lang} Word Counter tool is a free online tool that calculates the number of words in your writing.`,
      images: [{
        url: 'https://wordiebox.com/icon.png',
      }],
    },
  };
}

const WordCounter = ({ params }: { params: { language: string } }) => {
  return <PageFile />;
};

export default WordCounter;
