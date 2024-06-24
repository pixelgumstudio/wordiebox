"use client"
import Image from 'next/image';
import React, { ChangeEvent, FC, useState } from 'react';
import UpArrow from '/public/arrow-up.png';
import DownArrow from '/public/down.png';
import ErrorBoundary from '@/functions/ErrorBoundary';
import BackButton from '@/components/back-button';
import axios from '@/lib/axios';
import useMetadata from '@/functions/metadata';

// interface ApiResponse {
//   word: string[];
// }

const RandomWord: FC = () => {
  const [number, setNumber] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);
  const [words, setWords] = useState<string[]>([]);

  const incrementNumber = () => {
    setNumber((prevNumber) => prevNumber + 1);
  };

  const decrementNumber = () => {
    if (number > 1) {
      setNumber((prevNumber) => prevNumber - 1);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value, 10);
    if (!isNaN(value)) {
      setNumber(value);
    }
  };

  const generate = async () => {
    try {
      setLoading(true);
      const response = await axios.post(`/words/random-word`, { "numWords": number }, {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": true,
        },
      });
      setWords(response.data.words);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error("Error fetching words:", error);
      throw new Error("Failed to generate words");
    }
  };

  
  const metadata = {
    title: 'Random Word Generator - Wordiebox.com',
    description: 'The free online random word generator tool allows you to create any number of random words you need for your project. Choose the number of random words you want to generate and generate the words',
    openGraph: {
      title: 'Random Word Generator - Wordiebox.com',
      description: 'The free online random word generator tool allows you to create any number of random words you need for your project. Choose the number of random words you want to generate and generate the words',
      url: 'https://wordiebox.com/random-word-generator',
      image: 'https://wordiebox.com/icon.png',
    },
    twitter: {
      title: 'Random Word Generator - Wordiebox.com',
      description: 'The free online random word generator tool allows you to create any number of random words you need for your project. Choose the number of random words you want to generate and generate the words',
      image: 'https://wordiebox.com/icon.png',
    },
  };

  useMetadata(metadata);

  return (
    // <ErrorBoundary>
      <div className='w-full ' id='hero'>
        <div className='w-full laptop:max-w-[947px] px-4 tablet:px-6 laptop:px-0 desktop:px-0 mx-auto py-[40px] tablet:py-[80px] laptop:py-[100px]'>
          <div className="relative mb-6 tablet:flex tablet:justify-center tablet:items-center tablet:h-11">
            <BackButton />
            <h1 className='font-bold text-[#1C1C1C] mx-auto text-center text-24 tablet:text-32 mt-5 tablet:mt-0'>Random Word Generator</h1>
          </div>
          <p className='flex justify-center items-center text-[#1C1C1C] text-20 tablet:text-24 font-normal text-center'>
            Generate
            <div className="flex justify-between items-center px-3 py-2 mx-2 outline-none h-9 w-[72px] bg-transparent border-[#1C1C1C] border shadow-darkbox text-center">
              <input
                type="number"
                name="number"
                value={number}
                onChange={handleChange}
                className="outline-none w-8 bg-transparent text-left "
              />
              <div className="right-2 flex flex-col gap-1 items-center mx-auto w-[100px] z-20">
                <button onClick={incrementNumber} className="rounded-lg transition">
                  <Image src={UpArrow} width={12} height={12} alt='' />
                </button>
                <button onClick={decrementNumber} className="rounded-lg transition">
                  <Image src={DownArrow} width={12} height={12} alt='' />
                </button>
              </div>
            </div>
            random words
          </p>

          <p className='p-2 w-full max-w-[360px] cursor-pointer text-center font-medium mx-auto mt-10 h-fit bg-[#FFCC00] border-[#1C1C1C] border shadow-darkbox' onClick={generate}>
            Generate words{loading && "..."}
          </p>

          <div className="flex flex-wrap justify-center w-fit mx-auto gap-5 mt-12">
          {words.length > 0 && words.map((word, index) => (
              <p key={index} className="inline-block text-black border-[#1C1C1C] bg-[#DFC3FF] border shadow-darkbox p-3 tablet:p-4 text-20 tablet:text-24 capitalize font-semibold hover:bg-[#e2c9ff]">
                {word}
              </p>
            ))}
          </div>

          <div className="mt-[100px] flex flex-col gap-[10px] text-black border border-[#1C1C1C] bg-[#FFFFFF] shadow-darkbox p-4 tablet:p-6 w-full mx-auto my-6">
            <p className="text-16 tablet:text-20 text-left font-semibold">What is a random word generator?</p>
            <p className="text-14 tablet:text-16 text-left">Our word generator is a tool designed to produce random words. It has many uses across different areas. For writers, it is a great way to find new ideas and break through creative blocks with unexpected words. In the area of education, it can be used to improve vocabulary lessons and language learning activities. For instance, a writer working on a novel can use the tool to generate names for characters or places. In an educational setting, teachers can use this tool to create interactive and engaging exercises, helping students to expand their vocabulary in a fun way.</p>
            <p className="text-14 tablet:text-16 text-left">To generate a word, simply type in the number of words you’d like to see and click on “generate words”.</p>
          </div>
        </div>
      </div>
    // </ErrorBoundary>
  );
};

export default RandomWord;
