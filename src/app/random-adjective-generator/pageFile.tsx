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
    // setLoading(true);
    try {
      let wordsData;

      
        const response = await axios.get<Words[]>(`/api/adjectives?number=${length}`);
        wordsData = response.data;
   

      setResponse(wordsData);
      // setShowButton(true);
    } catch (error) {
      console.error("Error fetching words:", error);
    } finally {
      // setLoading(false);
    }
  };
  const options = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setLength(Number(event.target.value));
  };

  const contentSections = [
    {
      title: "Random Adjective Generator:",
      content: `This random adjective calculator has hundreds of commonly used adjectives which will randomly appear with a click of a mouse depending on the number you would like to generate. Whether you're stuck trying to come up with new ways to describe something or you're just looking for creative adjectives to spice up your writing, the random adjective calculator should be a great help.`,
    },
    {
      title: "Adjectives for Writers:",
      children:<div>
        <p>While there are a number of reasons you may want to create random adjectives, one of the most common is writers looking for new ways to better describe their writing. The great thing about this adjective tool is that it can help spark creative juices just by generating new adjectives. Simply seeing a random adjective can spark the imagination to come up with the perfect vocabulary for your writing. If nothing else, this tool will give you options you likely had never considered which in itself can be a great help.</p>
        <p>This free calculator is also an excellent way to improve your creative writing. A fun and easy way to challenge yourself is to generate a random adjective and then use it in a paragraph. Writers can expand on this and generate 5 to 10 adjectives and write a page or short story using all of them. Since what will be generated is unknown, it forces the writer to use creativity to use the adjectives to make a great paragraph or short story.</p>
        </div>
    },
    {
      title: "Types of Adjectives",
     content: `Did you know that there are actually three types of adjectives in the English language? Can you guess what they are? The following are the three different types of adjectives that are included in the calculator:`
    },
    {
      title: "Descriptive Adjectives",
     content: `Descriptive adjectives are the ones that most people think of when they hear the word "adjective." These are used to describe a specific characteristic of a noun. These are the words that help explain the noun's color, size, and shape among other things. In the sentence, "I walked past a sleek, yellow car on my way home," the words "sleek" and "yellow" are descriptive adjectives.`
    },
    {
      title: "Quantitative' Adjectives",
      children:<div>
      <p>Another type of adjective is the quantitative adjective. When a qualitative adjective is used, it helps to describe an approximate amount (or sometimes the exact amount) of a particular noun. In the sentence, "There were a few cars and many bicycles in front of the store" the words "few" and "many" are quantitative adjectives describing the number of cars and bicycles. Additional examples of quantitative adjectives would be a little, no, and all.</p>
      <p>TNumerical adjectives are a type of quantitative adjective. Instead of a general amount, numerical adjectives give a specific number quantity. Some examples of this would be one, five, ten, second, and twentieth. In the sentence, "There were three cars and thirty bicycles in front of the store" the words "three" and "thirty" are numerical quantitative adjectives.</p>
      </div>
    },
    {
      title: "Demonstrative Adjectives",
      children:<div>
      <p>The third type of adjective is the demonstrative adjective. These are used when "which one?" needs to be answered by specifying a certain noun. In the sentence, "I love the color of this car, but not the color of that one" the words "this" and "that" are demonstrative adjectives describing which car is being referred to. Additional demonstrative adjectives are those and these.</p>
      <p>It's our hope you've found this free tool to be useful. We are always looking for ways to increase the quality of all of our calculators, so if you have a suggestion on how we could improve it, please take the time to contact us. We would love to get your input so we can continue to provide the best possible word generators</p>
      </div>
    },
  ];

  return (
    <Layout title="Random Adjective Generator">
      <div className="w-full laptop:max-w-[947px] mx-auto">
        <div className="w-full max-w-[558px] mx-auto flex flex-col gap-8 justify-between">
          <div className="flex w-fit gap-2 items-center mx-auto mb-6">
            <h4 className="text-24 text-grey-900">Number of Adjectives</h4>
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
            text="Generate Adjectives"
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
            text="Copy Adjectives"
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
