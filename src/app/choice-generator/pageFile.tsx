/* eslint-disable react/no-unescaped-entities */
"use client";
import CopyButton from "@/components/copy-content";
import GenerateButton from "@/components/generateButton";
import Layout from "@/components/layout";
import React, { useState } from "react";

function PageFile() {
  const [text, setText] = useState<string>("");
  const [choice, setChoice] = useState<string>("");


  const convert = (event: { target: { value: any } }) => {
    const text = event.target.value;
    setText(text);
  };

  const generateString = () => {
    const arrayOfWords = text.split(',') || text.split('-' )
    const randomIndex = Math.floor(Math.random() * arrayOfWords.length);
    setChoice(arrayOfWords[randomIndex]);
  }
  return (
    <Layout title="Random Choice Generator">
      <div className="w-full laptop:max-w-[947px] mx-auto">
        <p className="w-full max-w-[558px] mx-auto text-black text-14 tablet:text-16 text-center mt-[-28px] mb-10">Paste or type the items you want to choose from into the box below, then click the "Random Choice" button. The randomly selected option will appear below the text box.</p>
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
            text="Random Choice Generator"
            task={generateString}
          >
           {choice && (
        <div className="w-fit text-black mx-auto mt-6 border-[#1C1C1C] bg-[#FFD2C2] border shadow-darkbox py-3 px-2 text-16 font-medium">
          <span className="">{choice}</span>
        </div>
      )}
          </GenerateButton>
      {choice !== "" && (
        <div className="mt-10 gap-4 mb-10 w-full max-w-[384px] mx-auto">
          <CopyButton
            text="Copy Choice"
            size="full"
            style="bg-white text-[#1C1C1C]"
            textToCopy={choice}
          />
        </div>
      )}
        </div>
      </div>
      <div className="w-full laptop:max-w-[947px] mx-auto mt-20 laptop:mt-25">
        <div className="flex flex-col gap-[10px] text-black border border-[#1C1C1C] bg-[#FFFFFF] shadow-darkbox p-4 tablet:p-6 w-full mx-auto my-6">
          <p className="text-16 tablet:text-20 text-left font-semibold">
          About the Random Choice Generator          </p>
          <p className="text-14 tablet:text-16 text-left mb-4">
          The Random Choice Generator is a quick and easy tool that helps you make decisions by selecting an item from a list you provide. It's perfect for making random decisions on trivial matters, like whether to continue building a mobile app or take a nap. When you're faced with multiple tasks or can't decide on something minor, let the random picker make the choice for you. However, it's important to note that this tool is meant for fun and minor decisions and definitely not for major life choices!</p>
        </div>
      </div>
    </Layout>
  );
}

export default PageFile;
