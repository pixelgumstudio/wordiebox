import { Metadata } from 'next';
import PageFile from './pageFile';

export async function generateMetadata({ params }: { params: { language: string } }): Promise<Metadata> {
  const { language } = params;

  return {
    title: `Free online ${language} word counter - Wordiebox.com`,
    description: `${language} Word Counter tool is a free online tool that calculates the number of words in your writing.`,
    openGraph: {
      title: `Free online ${language} word counter tool | Wordiebox`,
      description: `${language} Word Counter tool is a free online tool that calculates the number of words in your writing.`,
      url: `https://wordiebox.com/word-counter/${language}`,
      images: [{
        url: 'https://wordiebox.com/icon.png',
      }],
    },
    twitter: {
      title: `Free online ${language} word counter tool | Wordiebox`,
      description: `${language} Word Counter tool is a free online tool that calculates the number of words in your writing.`,
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
