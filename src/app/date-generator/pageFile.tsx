/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { ChangeEvent, FC, useState } from "react";

import Layout from "@/components/layout";
import Dropdown from "@/components/dropdown";
import CopyButton from "@/components/copy-content";
import UpArrow from "/public/arrow-up.png";
import DownArrow from "/public/down.png";
import Image from "next/image";
import LanguagesList from "@/components/LanguageList";
import moment from "moment";

const PageFile: FC = () => {
  const [dates, setDates] = useState<string[]>([]);
  const [number, setNumber] = useState<number>(1);
  const [showButton, setShowButton] = useState<boolean>(false);

  const incrementNumber = () => {
    setNumber((prevNumber) => Math.min(prevNumber + 1, 10));
    setDates([]);
    setShowButton(false);
  };

  const decrementNumber = () => {
    setNumber((prevNumber) => Math.max(prevNumber - 1, 1));
    setDates([]);
    setShowButton(false);
  };

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setNumber(parseInt(e.target.value, 10));
  };

  const dateFormat = [
    "31/01/2008",
    "01/31/2008",
    "2008/01/31",
    "31 January 2008",
    "January 31, 2008",
    "2008 January 31",
    "Thursday, 31 January 2008",
    "Thursday, January 31, 2008",
  ];

  const dateFormats = [
    "DD/MM/YYYY",
    "MM/DD/YYYY",
    "YYYY/MM/DD",
    "DD MMMM YYYY",
    "MMMM DD, YYYY",
    "YYYY MMMM DD",
    "dddd, DD MMMM YYYY",
    "dddd, MMMM DD, YYYY",
  ];

  function getRandomDate(
    start: moment.MomentInput,
    end: moment.MomentInput,
    value: string
  ) {
    const startDate = moment(start);
    const endDate = moment(end);
    const randomDate = moment(
      startDate.valueOf() +
        Math.random() * (endDate.valueOf() - startDate.valueOf())
    );

    const position = dateFormat.indexOf(value);
    if (position !== -1) {
      return randomDate.format(dateFormats[position]);
    }
    return randomDate.format("YYYY-MM-DD"); // Default format if invalid option
  }

  const generateDates = (value: string) => {
    const generatedDates = [];
    for (let i = 0; i < number; i++) {
      const randomDate = getRandomDate("2000-01-01", "2023-12-31", value);
      generatedDates.push(randomDate);
    }
    setDates(generatedDates);
    setShowButton(true);
  };

  return (
    <Layout title={`Calendar Date Generator`}>
      <div className="w-full laptop:max-w-[947px] mx-auto">
        {/* Number to Generate */}
<div className="flex justify-center w-full max-w-[500px]  mx-auto items-center text-[#1C1C1C] text-20 tablet:text-24 font-normal whitespace-nowrap text-center mb-6">
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
          random {number <= 1 ? 'date' : "dates"}
        </div>
{/* End  */}

        <Dropdown
          text="Generate Random Date"
          options={dateFormat}
          location={generateDates}
          title="Select Date Format"
          first="Select Date Format"
        />

<div className="flex flex-wrap justify-center w-fit mx-auto gap-5 mt-12">
          {dates.length > 0 &&
            dates.map((date, index) => (
              <div
                key={index}
                className="text-center w-fit inline-block text-black border-[#1C1C1C] bg-[#FFC4DF] border shadow-transparent p-3 tablet:p-4 text-14 capitalize font-normal hover:bg-[#e2c9ff]"
              >
                <h1 className="font-semibold text-20">{date}</h1>
              </div>
            ))}
        </div>

        {showButton &&
           <div className="w-full text-center mt-6 tablet:mt-8">
           <CopyButton
             textToCopy={dates
               .map((date) =>
                 date
               ) 
               .join("; ")} 
             text={`Copy ${number > 1 ? "Dates" : "Date"}`}
           />
         </div>
}
        <div className="mt-[100px] flex flex-col gap-[10px] text-black border border-[#1C1C1C] bg-[#FFFFFF] shadow-darkbox p-4 tablet:p-6 w-full mx-auto my-6">
          <p className="text-16 tablet:text-20 text-left font-semibold">
          What is Random Date Generator </p>
          <p className="text-14 tablet:text-16 text-left">
          Random date Generator allows you to generate random calendar dates. The randomness comes from atmospheric noise, which for many purposes is better than the pseudo-random number algorithms typically used in computer programs.</p>
        </div>
      </div>
    </Layout>
  );
};

export default PageFile;
