/* eslint-disable react/no-unescaped-entities */
"use client";
import CopyButton from "@/components/copy-content";
import Layout from "@/components/layout";
import React, { useState } from "react";

function PageFile() {
  const [text, setText] = useState<string>("");
  const [cleanedText, setCleanedText] = useState<string>("");


  const removeEmDash = (text: string): string => {
    return text.replace(/—/g, ' ');
};

const convert = (event: { target: { value: any } }) => {
    const newText = event.target.value;
    setText(newText);
    setCleanedText(removeEmDash(newText));
};

  return (
    <Layout title="Clean Your Text">
      <div className="w-full laptop:max-w-[947px] mx-auto">
        <div className="w-full max-w-[558px] mx-auto flex flex-col gap-8 justify-between">
          <div className="">
            <p
              className={`w-fit text-black border-[#1C1C1C] bg-[#FFD2C2] border shadow-darkbox py-2 px-2 text-16 font-medium`}
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
          <div className="">
            <div className="flex justify-between w-full items-center">
              <p
                className={`w-fit text-black border-[#1C1C1C] bg-[#FFD2C2] border shadow-darkbox py-2 px-2 text-16 font-medium`}
              >
                Output
              </p>
              <CopyButton show={cleanedText !== ""} textToCopy={cleanedText} text="Copy cleaned Text" />
              
            </div>
            <textarea
              disabled
              name="translate"
              rows={10}
              cols={50}
              placeholder={`Start typing your  or paste text`}
              value={cleanedText}
              className={`px-5 py-5  mt-2 outline-none text-16 h-fit w-full bg-white !text-[#1C1C1C] border-[#1C1C1C] border shadow-darkbox`}
            />
          </div>
        </div>
      </div>
      <div className="w-full laptop:max-w-[947px] mx-auto mt-20 laptop:mt-25">
        <div className="flex flex-col gap-[10px] text-black border border-[#1C1C1C] bg-[#FFFFFF] shadow-darkbox p-4 tablet:p-6 w-full mx-auto my-6">
          <p className="text-16 tablet:text-20 text-left font-semibold">
          What Is Dash Removal?
          </p>
          <p className="text-14 tablet:text-16 text-left mb-4">
          Dash removal is a simple text transformation that replaces dashes (—) with spaces. Similar to formatting styles like bold, italic, and strikethrough, dash removal ensures clean and readable text, especially when copying and pasting from different sources.
          Many text editors, websites, and documents automatically insert em dashes (—) in place of regular dashes (-). While this can improve readability, it may also introduce unwanted formatting issues. By using a dash remover, you can quickly clean up text for better presentation.          </p>

          <p className="text-16 tablet:text-20 text-left font-semibold">
          How to Remove Dashes in Text
          </p>
          <p className="text-14 tablet:text-16 text-left">
          Removing dashes from text is easy! Just follow these steps:</p>
          <ol className="pl-4 list-decimal">
            <li className="text-14 tablet:text-16 text-left">Copy the text containing em dashes (—).</li>
            <li className="text-14 tablet:text-16 text-left">Use a dash removal tool or script to process the text.</li>
            <li className="text-14 tablet:text-16 text-left">The dashes (—) will be replaced with spaces, making your text cleaner and easier to read.</li>
          </ol>
         
        </div>
      </div>
    </Layout>
  );
}

export default PageFile;
