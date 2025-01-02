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
  Meaning: string;
}
const PageFile = () => {
  const [response, setResponse] = useState<Words[]>([]);
  const [length, setLength] = useState(1);

  const generateWords = async () => {
    try {
      let wordsData;

        const response = await axios.get<Words[]>(`/api/phrase?number=${length}`);
        wordsData = response.data;
   console.log(wordsData)
      setResponse(wordsData);
    } catch (error) {
      console.error("Error fetching words:", error);
    } finally {
    }
  };
  const options = [1, 2];
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setLength(Number(event.target.value));
  };

  const contentSections = [
    {
      title: "What is Random Phrase Generator",
      children:<div>
      <p>There will be times when you may need more than a random word for what you want to accomplish, and this free online tool can help. The use of this tool is quite simple. All you need to do is indicate the number of random phrases you'd like to be displayed and then hit the "Generate Random Phrases" button. Once done, your chosen number of idioms will be displayed along with the meaning of the idiom.</p>
      <p>Idioms are a wonderful part of the English language that gives it a lot of flavor. They force people to know more than the literal meaning of words. Idioms are commonly used phrases that have a meaning completely different than their literal meaning. This can be quite confusing to those who aren't familiar with the idiom and those who are studying English.</p>
      <p>Using this tool can be excellent practice for students studying English as a second language because it gives the literal meaning of each phrase. This allows you to see the phrase and its meaning at the same time. While there are long idiom lists available online, trying to navigate through them on a single page can be daunting. Being able to create the exact number of random idioms which best suits your learning needs is a advantage this tool has over standard phrase list. In this way, this tool provides an excellent way for those learning English to practice their knowledge of English idioms and to learn new ones in the process.</p>
      <p>It can also be a wonderful way for writers to brainstorm and spur more creativity in their writing. The tool can be used to get writing ideas flowing forcing the writer to use more creativity than they would with a single random word. For example, the writer can use the generated phrase to create a new paragraph or story. Since the writer has no idea what will appear, or even if they will be familiar with the idiom, it forces the writer to use creativity to incorporate it into what they're writing.</p>
      <p>Some people may want to use this tool much like they do a new random daily word. Each day you generate a random idiom and the goal is to use it in a conversation at some point during the day. This can be a bit more difficult than using a daily random word, but the benefit is this challenge can greatly expand the vocabulary and the understanding of idioms. It's an especially useful challenge for those learning English.</p>
      <p>The above are a few ways the Random Phrase Generator can be used. However you decide to use this tool, it's always our goal to make the tools we create as useful as possible for those who use them. If you have ideas on how we could make this tool more beneficial to all who use it, please contact us with your idea(s). We'd love to hear them.</p>
    </div>
    },
  ];

  return (
    <Layout title="Random Phrase Generator">
      <div className="w-full laptop:max-w-[947px] mx-auto">
        <div className="w-full max-w-[558px] mx-auto flex flex-col gap-8 justify-between">
          <div className="flex w-fit gap-2 items-center mx-auto mb-6">
            <h4 className="text-24 text-grey-900">Number of Phrase</h4>
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
            text="Generate Random Phrase"
            task={generateWords}
          >
            {response.length > 0 &&
              response.map((resp, index) => (
                <p
                  key={index}
                  className={`text-left flex flex-col w-fit text-black border-[#1C1C1C] bg-[#FFD2C2] border shadow-darkbox p-3 tablet:p-4 text-15  capitalize font-medium hover:bg-[#e2c9ff]`}
                >
                  <span className="font-semibold">Phrase: {resp.Word}</span>
                  <span className="font-semibold">Meaning: {resp.Meaning}</span>
                </p>
              ))}
          </GenerateButton>

          <CopyButton
            show={response.length > 0}
            text="Copy Phrase"
            size="full"
            style="bg-white text-[#1c1c1c]"
            textToCopy={response.map(
              (resp) => `${resp.Word} ${resp.Meaning}`
            )}
          />
        </div>
      </div>
      <ContentCard sections={contentSections} />
    </Layout>
  );
};

export default PageFile;
