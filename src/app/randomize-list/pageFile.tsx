/* eslint-disable react/no-unescaped-entities */
"use client";
import CopyButton from "@/components/copy-content";
import GenerateButton from "@/components/generateButton";
import Layout from "@/components/layout";
import React, { useState } from "react";

function PageFile() {
  const [text, setText] = useState<string>("");
  const [shuffle, setShuffle] = useState<string[]>([]);
  const [showButton, setShowButton] = useState<boolean>(false);


  const convert = (event: { target: { value: any } }) => {
    const text = event.target.value;
    setText(text);
  };

  const generateString = () => {
    const arrayOfWords = text.split(',') || text.split('-');
    setShowButton(true);
    const shuffledArray = arrayOfWords.sort(() => Math.random() - 0.5);
    setShuffle(shuffledArray);
  };
  
  return (
    <Layout title="List Randomizer">
      <div className="w-full laptop:max-w-[947px] mx-auto">
        <p className="w-full max-w-[558px] mx-auto text-black text-14 tablet:text-16 text-center mt-[-28px] mb-10">This form lets you arrange items in a list randomly. Enter your words separated by commas.</p>
        <div className="w-full max-w-[558px] mx-auto flex flex-col gap-8 justify-between">
          <div className="">
            <p
              className={`w-fit text-black border-[#1C1C1C] bg-[#FFF5C4] border shadow-darkbox py-2 px-2 text-16 font-medium`}
            >
              Input
            </p>
            <textarea
              name="message"
              rows={10}
              cols={50}
              placeholder={`Start typing your  or paste text`}
              value={text}
              onChange={convert}
              className={`px-5 py-5  mt-2 outline-none text-16  h-fit w-full bg-white !text-[#1C1C1C] border-[#1C1C1C] border shadow-darkbox`}
            />
          </div>

          <GenerateButton
            text="Randomize list"
            task={generateString}
          >
         <div className="flex flex-wrap justify-start w-fit mx-auto gap-5">
            {shuffle.length > 0 && shuffle.map((shuffle, index) => (
              <p
                key={index}
                className="text-center w-fit inline-block text-black border-[#1C1C1C] bg-[#FFC4DF] border shadow-transparent p-3 tablet:p-4 text-20 tablet:text-24 capitalize font-semibold hover:bg-[#e2c9ff]"
              >
                {index}. {shuffle}
              </p>
            ))
            }
          </div>
          </GenerateButton>
     
      {showButton && (
        <div className="mt-10 gap-4 mb-10 w-full max-w-[384px] mx-auto">
          <CopyButton
          show={showButton}
            text="Copy List"
            size="full"
            style="bg-white text-[#1C1C1C]"
            textToCopy={shuffle.map(shuffle => shuffle)}
          />
        </div>
      )}
        </div>
      </div>
      <div className="w-full laptop:max-w-[947px] mx-auto mt-20 laptop:mt-25">
        <div className="flex flex-col gap-[10px] text-black border border-[#1C1C1C] bg-[#FFFFFF] shadow-darkbox p-4 tablet:p-6 w-full mx-auto my-6">
          <p className="text-16 tablet:text-20 text-left font-semibold">
          How to Use our List Randomizer</p>
          <p className="text-14 tablet:text-16 text-left mb-4">
          Using our list randomizer is really easy. Enter your items in the field below, each on a separate line. Items can be numbers, names, email addresses, etc. A maximum of 10,000 items are allowed. Do not enter any information you would consider confidential.</p>
          <p className="text-16 tablet:text-20 text-left font-semibold">
          What Is List Randomizer?</p>
          <p className="text-14 tablet:text-16 text-left mb-4">
          The List Randomizer shuffles items in a list into a random order. It's perfect for creating random sequences, drawing lots, or mixing things up quickly and easily.
</p>
        </div>
      </div>
    </Layout>
  );
}

export default PageFile;
