import { Metadata } from 'next';
import PageFile from './pageFile';

export async function generateMetadata({ params }: { params: { language: string } }): Promise<Metadata> {
  const { language } = params;

  const capitalizedLang = (language || "").replace(/-/g, " "); 
  const lang = capitalizedLang.charAt(0).toUpperCase() + capitalizedLang.slice(1);
  
  return {
    title: `Random ${lang} Word Generator  |  Random ${lang} word - Wordiebox.com`,
    description: `The free online ${lang} random word generator tool allows you to create any number of random words you need for your project. Choose the number of random words you want to generate and generate the ${lang} words`,
    icons: {
      icon: 'https://wordiebox.com/icon.png',  // This sets the favicon for this specific page
    },
    openGraph: {
      type: "website",
      siteName: "Wordiebox",
      title: `Random ${lang} Word Generator  |  Random ${lang} word - Wordiebox.com`,
      description: `The free online ${lang} random word generator tool allows you to create any number of random words you need for your project. Choose the number of random words you want to generate and generate the ${lang} words`,
      url: `https://wordiebox.com/random-word-generator/${lang}`,
      images: [{
        url: 'https://wordiebox.com/seo-card.png',
      }],
    },
    twitter: {
      card: "summary_large_image",
      site: `https://wordiebox.com/random-word-generator/${lang}`,
      title: `Random ${lang} Word Generator  |  Random ${lang} word - Wordiebox.com`,
      description: `The free online ${lang} random word generator tool allows you to create any number of random words you need for your project. Choose the number of random words you want to generate and generate the ${lang} words`,
      images: [{
        url: 'https://wordiebox.com/seo-card.png',
      }],
    },
  };
}

const WordCounter = ({ params }: { params: { language: string } }) => {
  return <PageFile />;
};

export default WordCounter;
