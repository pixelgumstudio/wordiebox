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

        const response = await axios.get<Words[]>(`/api/charade?number=${length}`);
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
      title: "Charades",
      children:<div>
        <p>One of the biggest problems when playing the game of charades is coming up with quality charades words to use in the game. The random charade words generator completely takes this issue away and makes playing charades with family or friends super easy whenever the desire to play happens.</p>
        <p>There are two simple steps to get you going. The first step is to choose the difficulty of the charade words you want to use. These range from easy to extremely hard. By being able to choose the difficulty of the words allows you to adjust the game words to the people you are playing with. This can make the game a lot more fun and a challenge compared to just random words with no difficulty level assigned to them. The last step is choosing the number of charade words you want to be generated each time. Again, this can depend on who you are playing the game with and how difficult you want to make the game. Once you have chosen the difficulty level and the number of words to show each time, all you have to do is click on the generate button and you have a random charades word to begin playing.</p>
      </div>
    },
    {
      title: "How Do You Play Charades?",
      content: `Charades is a gesture and acting game. One person gets a word or phrase and then has to try to act and use gestures without making any sounds to indicate what that word or phrase is to their teammates. If the teammates are able to decipher the word through the gestures and acting, the team wins a point. What makes the game of charades so much fun is that even though the rules and concept of the game are simple when it comes to attempting to convey the word through gestures to your teammates can often be far more difficult than you imagined. This dichotomy of it appearing simple but actually being quite difficult will bring about a lot of entertainment, fun, and laughter to the game.`,
    },
    {
      title: "How many people can play charades at one time?",
      content: `There really isn't a maximum number of people that can play charades at one time. While it's possible to play charades with as few as two people, there needs to be a minimum of three if you want a truly competitive game of charades.`,
    },
    {
      title: "How do you make teams in charades?",
      content: `There are two common ways to split people up when playing charades. The first is when each person is their own team. In this case, one person will do the charade and all the others will try and guess the correct answer. The first person to guess correctly wins a point. Another option is to break into teams with each team having two or more players. In this case, the team gets a point when the person on their team is able to get one of the other teammates to guess the charade being done before a time limit expires. There are also a number of ways to combine these two for those who want to get creative while playing the game.`,
    },
    {
      title: "What rules are there in charades?",
      content: `The rules for playing charades are pretty easy and straightforward. A player for each team is chosen to try to gesture and act out a random word or phrase from the random charades word generator. The person doing this isn't allowed to make any noises or say any words out loud. If a player from the team guesses the word, the team gets a point. If the team fails to guess the word in the allotted time limit, there's no point awarded. Each team does this and the team with the most points after the designated number of rounds is declared the winning team.`,
    },
    {
      title: "How long do players have to guess in charades?",
      content: `The general default time period to guess a charade word is 3 minutes. This isn't set in stone. You can adjust the time period to less or more depending on the group you're playing with and how difficult you want to make the game. As long as all teams abide by the same time period, any designated time limit is acceptable when playing charades.`,
    },
  ];

  return (
    <Layout title="Charades">
      <div className="w-full laptop:max-w-[947px] mx-auto">
        <div className="w-full max-w-[558px] mx-auto flex flex-col gap-8 justify-between">
          <div className="flex w-fit gap-2 items-center mx-auto mb-6">
            <h4 className="text-24 text-grey-900">Number of Charades</h4>
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
            text="Generate Charades"
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
            text="Copy Charades"
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
