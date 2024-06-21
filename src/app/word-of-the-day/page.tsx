"use client"
import React, { useEffect, useState } from "react";
import moment from "moment";
import ErrorBoundary from "../../functions/ErrorBoundary";
import BackButton from "../../components/back-button";
import Emails from "../../components/emails";
import axios from "@/lib/axios";
import { LoadingOverlay } from "@/components/loader";
import useMetadata from "@/functions/metadata";


interface ApiResponse {
  message: string;
  word: string;
  meaning: string;
}

const DailyWord = () => {
  const currentDate = moment();
  const [loading, setLoading] = useState<boolean>(false);
  const [word, setWord] = useState<ApiResponse>({
    message: '',
    word: '',
    meaning: '',
  })

  const getWord = async () => {
    setLoading(true);
    try {
      const response = await axios.post(`words/word-of-the-day`);
      setWord(response.data); 
      setLoading(false);
      console.log(response.data); 
    } catch (error) {
      setLoading(false);
      console.error("Error fetching Word:", error);
      throw new Error("Failed to generate word");
    }
  };

  useEffect(()=>{
    getWord()
  },[])

  const metadata = {
    title: 'Wordiebox - Word of the Day: Wordiebox | Merriam-Webster',
    description: 'Build your vocabulary: get a new word every day from Merriam-Webster dictionary. Learn the meaning, history, and fun facts.',
    openGraph: {
      title: 'Wordiebox - Word of the Day: Wordiebox | Merriam-Webster',
      description: 'Build your vocabulary: get a new word every day from Merriam-Webster dictionary. Learn the meaning, history, and fun facts.',
      url: 'https://wordiebox.com/word-of-the-day',
      image: 'https://wordiebox.com/icon.png',
    },
    twitter: {
      title: 'Wordiebox - Word of the Day: Wordiebox | Merriam-Webster',
      description: 'Build your vocabulary: get a new word every day from Merriam-Webster dictionary. Learn the meaning, history, and fun facts.',
      image: 'https://wordiebox.com/icon.png',
    },
  };

  useMetadata(metadata);

  return (
    // <ErrorBoundary>
    <div className="w-full bg-[#FBF4EE]" id="hero">
      <div className="relative w-full min-h-[400px] laptop:max-w-[947px] px-4 tablet:px-6 laptop:px-8 desktop:px-0 mx-auto py-[50px] tablet:py-[80px] laptop:py-[100px]">
      {loading ? <LoadingOverlay/> :
       <>      <div className="relative mb-6 tablet:flex tablet:justify-center tablet:items-center tablet:h-11">
          <BackButton />
          <h1 className='font-bold text-[#1C1C1C] mx-auto text-center text-24 tablet:text-32 mt-5 tablet:mt-0'>
            Word Of The Day
          </h1>
        </div>
        <p className="text-[#1C1C1C] text-24 font-normal text-center">
          {currentDate.format("Do MMMM YYYY")}
        </p>
        <div className="text-black border border-[#1C1C1C] bg-[#FFF5C4] shadow-darkbox p-8 w-full my-6">
          <h2 className="text-48 tablet:text-[90px] tablet:leading-[inherit] font-bold text-center">{word.word}</h2>
        </div>
        <p className="text-center font-semibold text-24 text-[#1C1C1C] mt-10">
          Meaning
        </p>
        <p className="px-4 w-[90%] max-w-[758px] mx-auto text-center mt-6 text-[24px] text-[#1C1C1C]">{word.meaning}</p>
      <Emails />
      </>
}
      </div>

    </div>
    // </ErrorBoundary>
  );
};

export default DailyWord;
