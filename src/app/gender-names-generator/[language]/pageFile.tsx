/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { ChangeEvent, FC, useEffect, useState } from "react";

import ErrorBoundary from "@/functions/ErrorBoundary";
import axios from "axios";
import Layout from "@/components/layout";
import Dropdown from "@/components/dropdown";
import CopyButton from "@/components/copy-content";
import UpArrow from "/public/arrow-up.png";
import DownArrow from "/public/down.png";
import Image from "next/image";
import LanguagesList from "@/components/LanguageList";
import { usePathname } from "next/navigation";

interface Name {
  Name: string;
  Transliteration: string;
  Meaning?: string;
  Language?: string;
  Gender?: string;
}
const PageFile: FC = () => {
  const [names, setNames] = useState<Name[]>([]);
  const [number, setNumber] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);
  const [showButton, setShowButton] = useState<boolean>(false);

  const pathname = usePathname();
  const pageName = pathname.split("/")[2]?.replace(/-/g, " ") || "english";

  const incrementNumber = () =>{
    setNumber((prevNumber) => Math.min(prevNumber + 1, 10));
  setNames([]);
  setShowButton(false)
}
  const decrementNumber = () =>{
    setNumber((prevNumber) => Math.max(prevNumber - 1, 1))
  setNames([]);
  setShowButton(false)
}


  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setNumber(parseInt(e.target.value, 10));
  };


const genderOption = [ 'Masculine', 'Feminine']

const generateNames = async (value: string) => {
  const selected =  value === "Select Gender" ? "select" : value === "Masculine" ? "male" : value === "Feminine" ? "female" : value
  if(selected !== "select"){
     try {
    let namesData
      const response = await axios.get<Name[]>(
        `/api/gender?gender=${selected}&number=${number}&language=${pageName}`
      );
      namesData = response.data;
      setNames(namesData);
    setShowButton(true);
  } catch (error) {
    console.error("Error fetching words:", error);
  } finally {
    setLoading(false);
  }
  }
 
};



  return (
    // <ErrorBoundary>
    <Layout title={`${pageName} Names`}>
      <div className="w-full laptop:max-w-[947px] px-4 tablet:px-6 laptop:px-0 desktop:px-0 mx-auto">
        {/* Number to Generate */}
<div className="flex justify-center w-full max-w-[400px]  mx-auto items-center text-[#1C1C1C] text-20 tablet:text-24 font-normal whitespace-nowrap text-center mb-6">
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
            <div className="flex flex-col gap-1 items-center mx-auto w-[20px] z-20">
              <button
                onClick={incrementNumber}
                className="rounded-lg transition"
              >
                <Image src={UpArrow} width={12} height={12} alt="Up Arrow" />
              </button>
              <button
                onClick={decrementNumber}
                className="rounded-lg transition"
              >
                <Image
                  src={DownArrow}
                  width={12}
                  height={12}
                  alt="Down Arrow"
                />
              </button>
            </div>
          </div>
          {number <= 1 ? 'Name' : "Names"}
        </div>
{/* End  */}

        <Dropdown
          text="Generate"
          options={genderOption}
          location={generateNames}
          title="Select Gender"
          first="Select Gender"
        />

<div className="flex flex-wrap justify-center w-fit mx-auto gap-5 mt-12">
          {Array.isArray(names) &&
            names.length > 0 &&
            names.map((name, index) => (
              <div
                key={index}
                className="text-center w-fit inline-block text-black border-[#1C1C1C] bg-[#DFC3FF] border shadow-transparent p-3 tablet:p-4 text-14 capitalize font-normal hover:bg-[#e2c9ff]"
              >
                <h1 className="font-semibold text-20">{name.Name}</h1>
                <p>Language: {name.Language}</p>
                {name.Meaning && <p>Meaning: {name.Meaning}</p>}
                {name.Transliteration && (
                  <p>Transliteration: {name.Transliteration}</p>
                )}
              </div>
            ))}
        </div>

        {showButton &&
           <div className="w-full text-center mt-6 tablet:mt-8">
           <CopyButton
             textToCopy={names
               .map((name) =>
                 name.Transliteration ? `${name.Name} - ${name.Language} - ${name.Meaning} - ${name.Transliteration}` : name.Meaning ? `${name.Name} - ${name.Language} - ${name.Meaning}` : `${name.Name}  - ${name.Language}`
               ) 
               .join(", ")} 
             text={`Copy ${number > 1 ? "names" : "name"}`}
           />
         </div>
}
        <div className="mt-[100px] flex flex-col gap-[10px] text-black border border-[#1C1C1C] bg-[#FFFFFF] shadow-darkbox p-4 tablet:p-6 w-full mx-auto my-6">
          <p className="text-16 tablet:text-20 text-left font-semibold">
          What Is a Name Generator? </p>
          <p className="text-14 tablet:text-16 text-left">
          Our name generator helps you find the perfect name for any occasion. You can either generate random names or guide the process. Names from different backgrounds are available for your use, all you have to do is generate based on your selected language. We have more than 20,000 names in our database that you can choose from. Our robots also use a thesaurus and other word lists to suggest names that are related to words you give us. Some of our tools actually invent names, generating examples that are completely unique.</p>
        </div>
        <LanguagesList
          pageType="gender-names-generator"
          pageName="Names in other languages"
        />
      </div>
    </Layout>
  );
};

export default PageFile;
