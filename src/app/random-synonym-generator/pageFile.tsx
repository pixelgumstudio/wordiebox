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
  Synonyms: string;
  Synonym: string;
}
const PageFile = () => {
  const [response, setResponse] = useState<Words[]>([]);
  const [length, setLength] = useState(1);

  const generateWords = async () => {
    try {
      let wordsData;

        const response = await axios.get<Words[]>(`/api/synonyms?number=${length}`);
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
      title: "Random Synonyms Generator:",
      children:<div>
        <p>Synonyms are a valuable addition to any vocabulary. For those not familiar with the term, learning English as a second language, or who get a bit mixed up with the meaning of grammatical terms, the first step is to answer the question, "What is a synonym?" A synonym is a word with the same or nearly the same meaning as another.</p>
        <p>The value of synonyms becomes obvious when considering how a phrase or sentence sounds. If you were to describe every rugby player as big and angry then it would get boring by the 3rd team member. However, using words like "humongous, muscular, and buff" paired with "glowering, growling, and intimidating" wouldn't sound so repetitive and also conveys more information about the player. This is the second value of synonyms. Because some synonyms have slightly different meanings, using them can provide more depth or specificity to the situation. For example, if a person is running, they could be jogging casually or sprinting in fear. Using one of these synonyms to running conveys more information about the type of running without having to use more adverbs.</p>
        <p>There are a lot of ways synonyms can be used to expand the meaning of your writing. Describing actions can be improved with synonyms like the example above. Another example is descriptive words. In this instance, a descriptive word is subbed for a synonym with a more accurate representation of how something is being described. For example, instead of "telling a story" someone might be "spinning a yarn" or "recounting an epic tale". When writing a literary analysis, the word "show" can be useful when pointing out what part of a sentence emphasizes the point of the writing. However, using the words "highlight, illuminate, exemplify, and demonstrate" can be more effective at conveying the precise nature of the 'show' action and mixes up the words used in a paragraph.</p>
        <p>Another way synonyms can be very useful is when describing feelings. Happy can be replaced with jubilant for an extremely happy person or pleased for a situation where the person feels small, contained happiness. Feelings are complicated and using synonyms can help convey that complexity. However, it's important to not solely rely on single words for feelings. An author often needs to use visual language and provide metaphors depending on the situation. For example instead of saying "they were happy" you could say "their joy and excitement exploded with tears as their jubilance filled their hearts".</p>
        <p>In addition to synonyms, don't forget about using antonyms. These are the opposite of synonyms: words with meanings exactly opposite or nearly opposite the definition. Using antonyms can be helpful when trying to compare different objects or situations. An example, when juxtaposing siblings one might be described as quiet and tranquil while the other is boisterous and noisy. By using multiple synonyms to describe one and antonyms of those words to describe the other, the author can successfully highlight the differences.</p>
        <p>If you're ready to start writing with synonyms but need a good source for finding them, a good first step is to try this random synonym generator. Maybe you have a set of characters you want to describe or a series of situations you want to compare. This is a good starting place. Even better, you're likely to come across words you weren't thinking about and their synonyms which may spark even better descriptions in your writing. Take a bit of time to explore the random synonym generator and you should soon realize if this is a tool that will be helpful to you in your writing.</p>
        <p>Similarly, this synonym generator can be used as a writing prompt. For a simple warm-up exercise, generate a series of synonyms and use them as a starting place for your new setting, character, or thesis. You can pick a single synonym and weave it into a sentence or paragraph, or you can attempt to use all of the different synonyms given into a short story. This should get your creative writing juices flowing while also expanding your writing vocabulary.</p>
        <p>If you found the random synonym generator useful, please take a moment to let us know about it. We are always curious about exactly how this generator is being used and by understanding better how different people are using it, we can improve it for others. The ultimate goal is to have the best random synonym generator on the Internet, and with your help and suggestions, we can accomplish that.</p>
      </div>
    }
  ];

  return (
    <Layout title="Random Synonym Generator">
      <div className="w-full laptop:max-w-[947px] mx-auto">
        <div className="w-full max-w-[558px] mx-auto flex flex-col gap-8 justify-between">
          <div className="flex w-fit gap-2 items-center mx-auto mb-6">
            <h4 className="text-24 text-grey-900">Number of Synonyms</h4>
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
            text="Generate Synonyms"
            task={generateWords}
          >
            {response.length > 0 &&
              response.map((resp, index) => (
                <p
                  key={index}
                  className={`text-left flex flex-col w-fit text-black border-[#1C1C1C] bg-[#FFD2C2] border shadow-darkbox p-3 tablet:p-4 text-15  capitalize font-medium hover:bg-[#e2c9ff]`}
                >
                  <span className="font-semibold">Word: {resp.Word}</span>
                  <span className="font-semibold">Synonym: {resp.Synonym}</span>
                  <span className="font-semibold">Synonym: {resp.Synonyms}</span>
                </p>
              ))}
          </GenerateButton>

          <CopyButton
            show={response.length > 0}
            text="Copy Synonyms"
            size="full"
            style="bg-white text-[#1c1c1c]"
            textToCopy={response.map(
              (resp) => `${resp.Word}-${resp.Synonym}-${resp.Synonyms}`
            )}
          />
        </div>
      </div>
      <ContentCard sections={contentSections} />
    </Layout>
  );
};

export default PageFile;
