/* eslint-disable react/no-unescaped-entities */
"use client";
import ContentCard from "@/components/ContentCard";
import CopyButton from "@/components/copy-content";
import GenerateButton from "@/components/generateButton";
import Layout from "@/components/layout";
import axios from "axios";
import { useState } from "react";

interface Words {
  Word: string;
}
const PageFile = () => {
  const [response, setResponse] = useState<Words[]>([]);
  const [length, setLength] = useState(1);

  const generateWords = async () => {
    try {
      let wordsData;

        const response = await axios.get<Words[]>(`/api/noun?number=${length}`);
        wordsData = response.data;
   
      setResponse(wordsData);
    } catch (error) {
      console.error("Error fetching words:", error);
    } finally {
    }
  };
  const options = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setLength(Number(event.target.value));
  };

  const contentSections = [
    {
      title: "Random Noun Generator:",
      content: `There may be times when you'll want to generate a random list of a particular part of speech rather than all words in general. For example, you may want to create a random list of just nouns. That's exactly what the random noun generator does.`,
      children:<div>
        <p>A noun is a word that functions as the name of some specific thing, people or place. Nouns are one of the main parts of speech and sentence. They most often occur as the main word in the subject of a clause or the object of a verb.</p>
        <p>Even if there is no exact agreed upon number of nouns in the English language, a rough calculation suggests there are at least hundreds of thousands of them, and likely more than one million. If we estimate there are approximately 2 million words in the English language, and a look at any dictionary shows approximately 75% of them are nouns, then we can estimate there should be around 1,500,000 nouns in the English language. This goes to show how important nouns are in English and why you may want to create a random list of just them in particular.</p>
        <p>It's important to note that not all nouns are the same. They can be classified into a number of different categories. Here are some of the type of nouns that exist:</p>
      </div>
    },
    {
      title: "Classification of Nouns",
      children: <ul className="list-inside list-disc">
            <li className="text-14 tablet:text-16 text-left">
            <span className="font-semibold">Proper Nouns</span> are unique nouns and usually capitalized. Examples: Germany, January, Nebraska, White House.
            </li>
            <li className="text-14 tablet:text-16 text-left">
            <span className="font-semibold">Common Nouns</span> refer to general, unspecific categories of entities. Examples: country, month, university.
            </li>
            <li className="text-14 tablet:text-16 text-left">
            <span className="font-semibold">Countable Nouns</span> are all nouns which can be pluralized. Examples: bike, dog, car, university.
            </li>
            <li className="text-14 tablet:text-16 text-left">
            <span className="font-semibold">Uncountable Nouns</span> (also known as Mass Nouns) are nouns which don't have plurals. Examples: weather, happiness, milk, air.
            </li>
            <li className="text-14 tablet:text-16 text-left">
            <span className="font-semibold">Collective Nouns</span> are nouns that refer to a group of something. Examples: gaggle, bevy, team, faculty.
            </li>
            <li className="text-14 tablet:text-16 text-left">
            <span className="font-semibold">Concrete Nouns</span> refer to real things that can be touched, smelled, seen or tasted. Examples: animal, flower, computer, car.
            </li>
            <li className="text-14 tablet:text-16 text-left">
            <span className="font-semibold">Abstract Nouns</span> refer to theoretical concepts. Examples: freedom, love, brightness.
            </li>
            <li className="text-14 tablet:text-16 text-left">
            <span className="font-semibold">Pronouns</span> are types of nouns that can be used instead of nouns. Examples: he, she, them.
            </li>
          </ul>
    },
    {
      content: "There are a great many ways you may want to use the random noun generator. Here are a few examples:",
      children: <ul className="list-inside list-disc">
            <li className="text-14 tablet:text-16 text-left">
            to help form new concepts, ideas, and products
            </li>
            <li className="text-14 tablet:text-16 text-left">
            to stimulate creativity through nouns you may have never considered
            </li>
            <li className="text-14 tablet:text-16 text-left">
            to brainstorm marketing slogans and product names
            </li>
            <li className="text-14 tablet:text-16 text-left">
            to form unique domain names or product names
            </li>
            <li className="text-14 tablet:text-16 text-left">
            to spur you to think in unexpected ways
            </li>
          </ul>
    },
    {
      content: "This is not an exhaustive list, but the above list does give a few ideas on how some people might use random nouns to help them solve issues. The best way to see the possibilities is to actually create a number of random lists with this tool and consider how the generated words might be able to help you with your current projects.",
    },
    {
      content: "We hope that you find this tool useful. If you have any ideas on how we may improve it, please feel free to contact us with your input as we always strive to provide the best generators possible.",
    },
  ];

  return (
    <Layout title="Random Nouns Generator">
      <div className="w-full laptop:max-w-[947px] mx-auto">
        <div className="w-full max-w-[558px] mx-auto flex flex-col gap-8 justify-between">
          <div className="flex w-fit gap-2 items-center mx-auto mb-6">
            <h4 className="text-24 text-grey-900">Number of Nouns</h4>
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
            text="Generate Noun"
            task={generateWords}
          >
            {response.length > 0 &&
              response.map((resp, index) => (
                <p
                  key={index}
                  className={`text-center flex flex-col w-fit text-black border-[#1C1C1C] bg-[#FFD2C2] border shadow-darkbox p-3 tablet:p-4 text-15  capitalize font-medium hover:bg-[#e2c9ff]`}
                >
                  <span className="font-semibold">{resp.Word}</span>
                </p>
              ))}
          </GenerateButton>

          <CopyButton
            show={response.length > 0}
            text="Copy Noun"
            size="full"
            style="bg-white text-[#1c1c1c]"
            textToCopy={response.map(
              (resp) => `${resp.Word}`
            )}
          />
        </div>
      </div>
      <ContentCard sections={contentSections} />
    </Layout>
  );
};

export default PageFile;
