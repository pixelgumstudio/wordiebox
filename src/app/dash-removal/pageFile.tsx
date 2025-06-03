/* eslint-disable react/no-unescaped-entities */
"use client";
import CopyButton from "@/components/copy-content";
import GenerateButton from "@/components/generateButton";
import Layout from "@/components/layout";
import Cards from "@/sections/cards";
import React, { useState } from "react";

function PageFile() {
  const [text, setText] = useState<string>("");
  const [cleanedText, setCleanedText] = useState<string>("");
  const [cleaned, setCleaned] = useState<boolean>(false);

  const removeEmDash = (text: string): string => {
  return text.replace(/[—–-]/g, " ");
  };

  const convert = () => {
    const newText = removeEmDash(text);
    setCleanedText(newText);
    setCleaned(true);
  };

  return (
    <Layout title="Remove Em dashes">
      <div className="w-full laptop:max-w-[947px] mx-auto">
        <div className="w-full max-w-[558px] mx-auto flex flex-col gap-8 justify-between">
          <div>
            <p
              className="w-fit text-black border-[#1C1C1C] bg-[#FFD2C2] border shadow-darkbox py-2 px-2 text-16 font-medium"
            >
              {cleaned ? "Output" : "Input"}
            </p>

            <textarea
              name="message"
              rows={10}
              cols={50}
              placeholder="Start typing or paste text"
              value={cleaned ? cleanedText : text}
              onChange={(e) => {
                setText(e.target.value);
                setCleaned(false); // Reset cleaned state when typing
              }}
              className="px-5 py-5 mt-2 outline-none text-16 h-fit w-full bg-white !text-[#1C1C1C] border-[#1C1C1C] border shadow-darkbox"
            /> 
            <GenerateButton text="Remove EM dashes" task={convert} />

          <CopyButton show={cleanedText !== ""} textToCopy={cleanedText} text="Copy Your Text" style="text-center mx-auto" />
          </div>
         
        </div>
      </div>
         {/* <Cards /> */}

      <div className="w-full laptop:max-w-[947px] mx-auto mt-20 laptop:mt-25">
        <div className="flex flex-col gap-[10px] text-black border border-[#1C1C1C] bg-[#FFFFFF] dark:bg-[#1c1c1c] dark:text-[#ffffff] dark:border-[#ffffff] shadow-darkbox p-4 tablet:p-6 w-full mx-auto my-6">
          <p className="text-16 tablet:text-20 text-left font-semibold">
            How to Use Remove Em dashes
          </p>
          <p className="text-14 tablet:text-16 text-left mb-4">
            To eliminate em dashes, insert your text into the provided box, press the button to remove them, and copy the edited text once you're done.
          </p>
          <p className="text-16 tablet:text-20 text-left font-semibold">What Is Remove Em dashes</p>
          <p className="text-14 tablet:text-16 text-left mb-4">
            Simplify your AI-generated text with this handy app that quickly removes em dashes. Just paste your text into the box, click the button to remove em dashes, and copy the polished result when you're done. Ideal for writers, editors, or anyone aiming to refine their text with ease.
          </p>
        </div>
      </div>
    </Layout>
  );
}

export default PageFile;
