"use client";
import ContentCard from "@/components/ContentCard";
import CopyButton from "@/components/copy-content";
import GenerateButton from "@/components/generateButton";
import Layout from "@/components/layout";
import { useState } from "react";

interface HangmanObject {
  name: string;
  character: number;
}
const PageFile = () => {
  const [response, setResponse] = useState<HangmanObject[]>([]);
  const [length, setLength] = useState(1);

  const generatedQuestions = () => {
    setResponse([
      { name: "wizard", character: 10 },
      { name: "wizard", character: 10 },
    ]);
  }; 
  const options = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setLength(Number(event.target.value));
  };

  const contentSections = [
    {
      title: "What is weird word?",
      content: `Weird can be used as an adjective to describe something that is strange or unusual. It can also be used to describe something that is supernatural or mystical. The word “weird” is also often used to describe something that is eccentric or peculiar. In more archaic sense, it can also mean fate or destiny.`,
    },
    {
      title: "How to use a random weird words",
      children: <ul className="list-inside list-disc">
            <li className="text-14 tablet:text-16 text-left">
            Select the numbers of words you want to generate
            </li>
            <li className="text-14 tablet:text-16 text-left">
            Enter text first and last letter into input box
            </li>
            <li className="text-14 tablet:text-16 text-left">
            Choose from the word length options
            </li>
            <li className="text-14 tablet:text-16 text-left">
            Copy your generated word(s) and use
            </li>
          </ul>
    },
  ];

  return (
    <Layout title="Weird Words">
      <div className="w-full laptop:max-w-[947px] mx-auto">
        <div className="w-full max-w-[558px] mx-auto flex flex-col gap-8 justify-between">
          <div className="flex w-fit gap-2 items-center mx-auto mb-6">
            <h4 className="text-24 text-grey-900">Number of Words</h4>
            <div className="relative inline-block w-[72px] shadow-darkbox">
              <select
                value={length}
                onChange={handleChange}
                className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 shadow leading-tight focus:outline-none focus:shadow-outline"
              >
                {options.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M5 8l5-5 5 5H5zm10 4H5l5 5 5-5z" />
                </svg>
              </div>
            </div>
          </div>

          <GenerateButton
            text="Generate Weird Words"
            task={generatedQuestions}
          >
            {response.length > 0 &&
              response.map((resp, index) => (
                <p
                  key={index}
                  className={`text-center flex flex-col w-fit text-black border-[#1C1C1C] bg-[#FFD2C2] border shadow-darkbox p-3 tablet:p-4 text-15  capitalize font-medium hover:bg-[#e2c9ff]`}
                >
                  <span className="font-semibold">{resp.name}</span>
                  <span>Character: {resp.character}</span>
                </p>
              ))}
          </GenerateButton>

          <CopyButton
            show={response.length > 0}
            text="Copy Letter"
            size="full"
            style="bg-white text-[#1c1c1c]"
            textToCopy={response.map(
              (resp) => `${resp.name} ${resp.character}`
            )}
          />
        </div>
      </div>
      <ContentCard sections={contentSections} />
    </Layout>
  );
};

export default PageFile;
