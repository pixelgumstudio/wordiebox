/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { FC } from "react";

import ErrorBoundary from "@/functions/ErrorBoundary";
import Layout from "@/components/layout";
import StringGenerator from "./StringGenerator";

const PageFile: FC = () => {
  return (
    // <ErrorBoundary>
    <Layout title="Random String Generator">
      <div className="w-full laptop:max-w-[947px] px-4 tablet:px-6 laptop:px-0 desktop:px-0 mx-auto">
        <StringGenerator />
        <div className="mt-[100px] flex flex-col gap-[10px] text-black border border-[#1C1C1C] bg-[#FFFFFF] shadow-darkbox p-4 tablet:p-6 w-full mx-auto my-6">
          <p className="text-16 tablet:text-20 text-left font-semibold">
          What Is Random String Generator?      </p>
          <p className="text-14 tablet:text-16 text-left">
          The Random String Generator creates strings from the English alphabet or any set of characters, including symbols. You can input custom characters to generate random string sequences based on your needs.</p>
          <p className="text-16 tablet:text-20 text-left font-semibold">
          How to Generate random string
          </p>
          <p className="text-14 tablet:text-16 text-left">
          It’s easy to generate random strings, Just follow these instructions:</p>
          <ul className="pl-4 list-decimal">
            <li className="text-14 tablet:text-16 text-left">Specify which alphabet to use</li>
            <li className="text-14 tablet:text-16 text-left">Select whether the output should be capitalized or not</li>
            <li className="text-14 tablet:text-16 text-left">Select to get only unique characters in your string</li>
            <li className="text-14 tablet:text-16 text-left">Press the "generate random string" button to essentially perform multiple dice roll</li>
          </ul>
          <p className="text-16 tablet:text-20 text-left font-semibold">
          How to generate a set of random strings</p>
          <p className="text-14 tablet:text-16 text-left">
          The String Generator lets you create a set of random strings. For a raffle, you can enable the "Unique strings only" option to ensure each string is unique. If uniqueness isn’t needed, simply set the desired number of strings (up to 10,000) and press the button. To retrieve the generated strings, select all (Ctrl+A on a PC) and copy (Ctrl+C on a PC).
          </p>
          <p className="text-16 tablet:text-20 text-left font-semibold">
          Applications of a random string generator</p>
          <p className="text-14 tablet:text-16 text-left">
          Random strings have many uses, particularly in games and raffles. For instance, in a charity lottery, you can generate unique random strings to distribute as tokens to donors. Then, use our randomizer to determine who receives each prize or the order in which prizes are awarded.</p>
        </div>
      </div>
    </Layout>
  )
};

export default PageFile;