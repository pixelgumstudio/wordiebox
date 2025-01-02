"use client";
import ContentCard from "@/components/ContentCard";
import CopyButton from "@/components/copy-content";
import GenerateButton from "@/components/generateButton";
import Layout from "@/components/layout";
import axios from "axios";
import { useState } from "react";

interface Hangman {
  Word: string;
}
const PageFile = () => {
  const [response, setResponse] = useState<Hangman[]>([]);
  const [length, setLength] = useState(1);

  const generateWords = async () => {
    // setLoading(true);
    try {
      let wordsData;

      
        const response = await axios.get<Hangman[]>(`/api/hangman?number=${length}`);
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
      title: "What is Hangman word?",
      content: `Hangman is a great game for plenty of occasions. It's a great way for kids to entertain themselves in the car on a long trip or if you need to keep them occupied for a bit before dinner. A group of students can entertain themselves if there is extra time at the end of class. It's a good suggestion for friends who "have nothing to do." In fact, it's a fun game to play for anyone at any time they have some free time and aren't sure what to do to fill it. Hangman can even be used to reveal a surprise like a question or exciting news.`,
    },
    {
      title: "How to Play Hangman",
      content:
        "Hangman is a word game that requires guessing the letters to a word or phrase. The person who comes up with the word to be guessed draws blanks to show how many letters there are in that word. The catch is that the players who are guessing letters have a limited number of guesses based on the hangman. The player who created the word or phrase draws a body part of a stick figure hanging from a gallows every time an incorrect letter is guessed. Traditionally the hangman is drawn with a head, torso, arms, and legs (or six incorrect guesses). However, in more complicated games the drawer can add feet, hands, and a hat giving more guesses. If the person guessing can guess the word before all the body parts are drawn, the guesser wins. If the guesser doesn't guess the word before all the body parts are drawn, the guesser loses",
    },
  ];

  return (
    <Layout title="Hangman words">
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
            text="Generate Hangman Words"
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
            text={response.length == 1 ? "Copy Word" : "Copy Words"}
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
