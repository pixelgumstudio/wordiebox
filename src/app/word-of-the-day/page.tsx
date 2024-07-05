
import { Metadata } from "next";
import PageFile from "./pageFile";

export const metadata: Metadata = {
  title: 'Wordiebox - Word of the Day: Wordiebox | Merriam-Webster',
  description: 'Build your vocabulary: get a new word every day from Merriam-Webster dictionary. Learn the meaning, history, and fun facts.',
  openGraph: {
    title: 'Wordiebox - Word of the Day: Wordiebox | Merriam-Webster',
    description: 'Build your vocabulary: get a new word every day from Merriam-Webster dictionary. Learn the meaning, history, and fun facts.',
    url: 'https://wordiebox.com/word-of-the-day',
    images: [{
      url: 'https://wordiebox.com/icon.png',
    }],
  },
  twitter: {
    title: 'Wordiebox - Word of the Day: Wordiebox | Merriam-Webster',
    description: 'Build your vocabulary: get a new word every day from Merriam-Webster dictionary. Learn the meaning, history, and fun facts.',
    images: [{
      url: 'https://wordiebox.com/icon.png',
    }],
  },
};


const DailyWord = () => {

return <PageFile />
};

export default DailyWord;