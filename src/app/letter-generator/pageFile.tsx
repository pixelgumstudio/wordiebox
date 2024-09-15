/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { FC } from "react";

import ErrorBoundary from "@/functions/ErrorBoundary";
import Layout from "@/components/layout";
import LetterGenerator from "./LetterGenerator";

const PageFile: FC = () => {
  return (
    // <ErrorBoundary>
    <Layout title="Random Letter Generator">
      <div className="w-full laptop:max-w-[947px] px-4 tablet:px-6 laptop:px-0 desktop:px-0 mx-auto">
        <LetterGenerator />
        <div className="mt-[100px] flex flex-col gap-[10px] text-black border border-[#1C1C1C] bg-[#FFFFFF] shadow-darkbox p-4 tablet:p-6 w-full mx-auto my-6">
          <p className="text-16 tablet:text-20 text-left font-semibold">
          What Is Random Letter Generator?          </p>
          <p className="text-14 tablet:text-16 text-left">
          The Random Letter Generator provides a random letter from the English alphabet or generates a sequence of random letters. You can also input a custom alphabet to create random letter sequences based on your specifications.          </p>
          <p className="text-16 tablet:text-20 text-left font-semibold">
          How to Generate Random Letter Generator          </p>
          <p className="text-14 tablet:text-16 text-left">
          It’s easy to generate random letters, Just follow these instructions:          </p>
          <ul className="pl-4 list-decimal">
            <li className="text-14 tablet:text-16 text-left">Specify which alphabet to use</li>
            <li className="text-14 tablet:text-16 text-left">Select whether the output should be capitalized or not</li>
            <li className="text-14 tablet:text-16 text-left">press the "generate random letter" button to essentially perform multiple dice roll</li>
          </ul>
          <p className="text-16 tablet:text-20 text-left font-semibold">
          How to generate a Random letter sequence         </p>
          <p className="text-14 tablet:text-16 text-left">
          To generate a sequence of letters instead of a single letter, adjust the "sequence length" field in the generator interface. If you want the sequence to contain only unique letters, enable the "unique letters in sequence" checkbox. Keep in mind that the maximum sequence length is limited by the number of letters in your provided alphabet. For instance, with the English alphabet, the generator cannot produce a unique sequence longer than 26 letters.
          </p>
          <p className="text-16 tablet:text-20 text-left font-semibold">
          Applications of a Random Letter generator        </p>
          <ul className="pl-4 list-decimal">
            <li className="text-14 tablet:text-16 text-left">Word Games</li>
            <li className="text-14 tablet:text-16 text-left">Using a random letter generator, you can randomly pick a letter</li>
            <li className="text-14 tablet:text-16 text-left">Alphabet Game</li>
          </ul>
        </div>
      </div>
    </Layout>
  )
};

export default PageFile;