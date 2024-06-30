/* eslint-disable react/no-unescaped-entities */
"use client"
import BackButton from '@/components/back-button'
import useMetadata from '@/functions/metadata';
import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google';
import React, { useState } from 'react'
// import { Metadata } from 'next'

// export const metadata: Metadata = {
//   title: 'Wordiebox - Guess words puzzles from numbers',
//   description: 'Wordiebox is a puzzle word game to guess new words from its meaning, Fill in words based on number representation from the number index before  the time runs down. Compete with your friends to earn points and move top of the leaderboard in no time.',
//   icons: {
//     icon: [
//       {
//         rel: 'icon',
//         media: '(prefers-color-scheme: light)',
//         url: './../../../public/Logo.svg',
//         href: './../../../public/Logo.svg',
//       },
//       {
//         rel: 'icon',
//         media: '(prefers-color-scheme: dark)',
//         url: './../../../public/Logo.svg',
//         href: './../../../public/Logo.svg',
//       },
//     ],
//   },
// }

function WordCount() {

  
  const [text, setText] = useState<string>('');
  const [wordCount, setWordCount] = useState(0);
  const [paragraphCount, setParagraphCount] = useState(0);

  const count = (event: { target: { value: any; }; }) => {
    const newText = event.target.value;
    setText(newText);
    const trimmedText = newText.trim();

  // Check if the trimmed text is empty
  if (trimmedText === '') {
    return 0;
  }

  const words = trimmedText.split(/\s+/).filter((word: string | any[]) => word.length > 0);
    setWordCount(words.length);

    const paragraphs = newText.split('\n');
    setParagraphCount(paragraphs.length);
  };

  const metadata = {
    title: 'Word Counter - Wordiebox.com',
    description: 'Word Counter tool is a free online tool that calculates the number of words in your writing.',
    openGraph: {
      title: 'Word Counter - Wordiebox.com',
      description: 'Word Counter tool is a free online tool that calculates the number of words in your writing.',
      url: 'https://wordiebox.com/word-counter',
      image: 'https://wordiebox.com/icon.png',
    },
    twitter: {
      title: 'Word Counter - Wordiebox.com',
      description: 'Word Counter tool is a free online tool that calculates the number of words in your writing.',
      image: 'https://wordiebox.com/icon.png',
    },
  };

  useMetadata(metadata);

  return (
    <div className='w-full bg-[#FBF4EE]' id='hero'>
    <div className='w-full laptop:max-w-[947px] px-4 tablet:px-6 laptop:px-0 mx-auto py-[50px] tablet:py-[80px] laptop:py-[100px]'>
    <div className="relative mb-6 tablet:flex tablet:justify-center tablet:items-center tablet:h-11">
      <BackButton />
      <h1 className='font-bold text-[#1C1C1C] mx-auto text-center text-24 tablet:text-32 mt-5 tablet:mt-0'>Word Counter</h1>
     </div>
    <div className='flex flex-col tablet:flex-row gap-3  justify-between items-center'>
    <textarea name="message" rows={10} cols={50} placeholder='Start writing or paste text' value={text} onChange={count} className={`px-5 py-5  mt-2 outline-none h-fit w-full bg-transparent !text-[#1C1C1C] border-[#1C1C1C] border shadow-darkbox`}  />
   <div className='flex tablet:flex-col gap-2 text-center'>
   <p className="w-[125px] tablet:w-[145px] text-black border-[#1C1C1C] bg-[#FFC4DF] border shadow-darkbox p-3 text-20 tablet:text-32 capitalize font-bold">{wordCount} <span className="block font-normal text-20 text-center">Words</span></p>
   <p className="w-[125px] tablet:w-[145px] text-black border-[#1C1C1C] bg-[#FFC4DF] border shadow-darkbox p-3 text-20 tablet:text-32 capitalize font-bold">{paragraphCount} <span className="block font-normal text-20 text-center">Lines</span></p>
   </div>
    </div>

     <div className="mt-[100px] flex flex-col gap-[10px] text-black border border-[#1C1C1C] bg-[#FFFFFF] shadow-darkbox p-4 tablet:p-6 w-full mx-auto my-6">
      <p className="text-16 tablet:text-20 text-left font-semibold">What is a word counter?</p>
      <p className="text-14 tablet:text-16 text-left">Our online editor not only counts words and characters, but also improves your word choice and writing style. Additionally, it can detect grammatical errors and plagiarism. To check word count, place your cursor into the text box above and start typing. The number of characters and words will increase or decrease as you type, delete, and edit. 
      You can also copy and paste text from a different program into the online editor above. The Auto-Save feature will ensure you don’t lose any changes while editing, even if you leave the site and come back later. Tip: Bookmark this page now.</p>
      <p className="text-14 tablet:text-16 text-left">Also, word counter displays the top ten keywords and their density in your article. This helps you identify frequently used keywords and their percentages, preventing overuse and ensuring effective keyword distribution in your writing.
      In the details overview, you can see the average speaking and reading time for your text. The reading level indicates the education level needed to understand the words you’re using.</p>
      <p className="text-14 tablet:text-16 text-left">Disclaimer: We strive to make our tools as accurate as possible, but we cannot guarantee their accuracy in all cases.</p>
    </div>
  </div>
  <GoogleTagManager gtmId="GTM-K8ST54XF" />
  <GoogleAnalytics gaId="G-P8TXFVSRPZ" />
</div>
  )
}

export default WordCount