"use client";
import Image from "next/image";
import React, { ChangeEvent, FC, useEffect, useState } from "react";
import UpArrow from "/public/arrow-up.png";
import DownArrow from "/public/down.png";
import ErrorBoundary from "@/functions/ErrorBoundary";
import axios from "@/lib/axios";
import Popup from "@/components/popup";
import Layout from "@/components/layout";
import CopyButton from "@/components/copy-content";

const PageFile: FC = () => {
  const [number, setNumber] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);
  const [words, setWords] = useState<string[]>([]);
  const [copySuccess, setCopySuccess] = useState<boolean>(false);
  const [showButton, setShowButton] = useState<boolean>(false);
  const [copyText, setCopyText] = useState<string>("");

  const incrementNumber = () => {
    if (number < 10) {
      setNumber((prevNumber) => prevNumber + 1);
    }
  };

  const copyToClipboard = () => {
    const word = words.join(", ");
    navigator.clipboard.writeText(word).then(
      () => {
        setCopyText(word);
        setCopySuccess(true);
      },
      (err) => {
        setCopySuccess(false);
      }
    );
  };

  const decrementNumber = () => {
    if (number > 1) {
      setNumber((prevNumber) => prevNumber - 1);
    }
  };

  useEffect(() => {
    if (copySuccess) {
      const timer = setTimeout(() => {
        setCopySuccess(false);
        setCopyText("");
      }, 2000); // Clear the message after 3 seconds

      // Clean up the timer when the component unmounts or when copySuccess changes
      return () => clearTimeout(timer);
    }
  }, [copySuccess]);

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const value = parseInt(e.target.value, 10);
    setNumber(value);
  };

  const generate = async () => {
    try {
      setLoading(true);
      const response = await axios.post(
        `/words/random-word`,
        { numWords: number },
        {
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Credentials": true,
          },
        }
      );
      setShowButton(true);
      setWords(response.data.words);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error("Error fetching words:", error);
      throw new Error("Failed to generate words");
    }
  };

  return (
    // <ErrorBoundary>
    <Layout title="Random Words Generator">
      <div className="w-full laptop:max-w-[947px] px-4 tablet:px-6 laptop:px-0 desktop:px-0 mx-auto">
        <div className="flex justify-center items-center text-[#1C1C1C] text-20 tablet:text-24 font-normal whitespace-nowrap text-center">
          Generate
          <div className="flex justify-between items-center px-3 py-2 mx-2 outline-none h-9 w-[72px] bg-transparent border-[#1C1C1C] border shadow-darkbox text-center">
            <select
              name="number"
              value={number}
              onChange={handleChange}
              className="outline-none w-8 bg-transparent text-left appearance-none"
            >
              {[...Array(10)].map((_, index) => (
                <option key={index + 1} value={index + 1}>
                  {index + 1}
                </option>
              ))}
            </select>
            <div className="right-2 flex flex-col gap-1 items-center mx-auto w-[100px] z-20">
              <button
                onClick={incrementNumber}
                className="rounded-lg transition"
              >
                <Image src={UpArrow} width={12} height={12} alt="" />
              </button>
              <button
                onClick={decrementNumber}
                className="rounded-lg transition"
              >
                <Image src={DownArrow} width={12} height={12} alt="" />
              </button>
            </div>
          </div>
          random words
        </div>

        <p
          className="p-2 w-full max-w-[360px] cursor-pointer text-center font-medium mx-auto mt-10 h-fit bg-[#FFCC00] border-[#1C1C1C] border shadow-darkbox"
          onClick={generate}
        >
          Generate words{loading && "..."}
        </p>

        <div className="flex flex-wrap justify-center w-fit mx-auto gap-5 mt-12">
          {words.length > 0 &&
            words.map((word, index) => (
              <p
                key={index}
                className="text-center w-fit inline-block text-black border-[#1C1C1C] bg-[#DFC3FF] border shadow-transparent p-3 tablet:p-4 text-20 tablet:text-24 capitalize font-semibold hover:bg-[#e2c9ff]"
              >
                {/* <p key={index} className="text-center w-full max-w-[33.333333%] tablet:max-w-[20%] laptop:max-w-[16.666667%] inline-block text-black border-[#1C1C1C] bg-[#DFC3FF] border shadow-darkbox p-3 tablet:p-4 text-20 tablet:text-24 capitalize font-semibold hover:bg-[#e2c9ff]"> */}
                {word}
              </p>
            ))}
        </div>
        {showButton && (
          <div className="w-full text-center mt-6 tablet:mt-8">
            <CopyButton textToCopy={words} text="Copy State" />
          </div>
        )}

        <div className="mt-[100px] flex flex-col gap-[10px] text-black border border-[#1C1C1C] bg-[#FFFFFF] shadow-darkbox p-4 tablet:p-6 w-full mx-auto my-6">
          <p className="text-16 tablet:text-20 text-left font-semibold">
            What is a random word generator?
          </p>
          <p className="text-14 tablet:text-16 text-left">
            Our word generator is a tool designed to produce random words. It
            has many uses across different areas. For writers, it is a great way
            to find new ideas and break through creative blocks with unexpected
            words. In the area of education, it can be used to improve
            vocabulary lessons and language learning activities. For instance, a
            writer working on a novel can use the tool to generate names for
            characters or places. In an educational setting, teachers can use
            this tool to create interactive and engaging exercises, helping
            students to expand their vocabulary in a fun way.
          </p>
          <p className="text-14 tablet:text-16 text-left">
            To generate a word, simply type in the number of words you’d like to
            see and click on “generate words”.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default PageFile;
