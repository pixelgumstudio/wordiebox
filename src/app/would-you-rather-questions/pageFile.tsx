"use client";
import ContentCard from "@/components/ContentCard";
import CopyButton from "@/components/copy-content";
import GenerateButton from "@/components/generateButton";
import Layout from "@/components/layout";
import { useState } from "react";

const PageFile = () => {
  const [letters, setLetters] = useState("");
  const [length, setLength] = useState(1);

  const generatedQuestions = () => {
    setLetters("Never have I ever I blamed a pet for something I did.");
  };
  const options = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setLength(Number(event.target.value));
  };

  const contentSections = [
    {
      title: "What is Would you rather questions",
      content:
        "With over 500 Would You Rather questions appearing randomly, you're sure to find plenty of questions to make you think long and hard about which you'd prefer. You can decide to generate one random question at a time or several and choose the one that you like best. No matter how you decide to use the generator, you're bound to have a lot of fun deciding which option you would choose with these Would You Rather questions.",
    },
    {
      title: "How Do You Play Would You Rather?",
      content:
        "Even though playing Would You Rather is quite easy, it can produce a lot of laughter and give you situations where you have to critically think about which of the two choices is the best alternative. You play by having one person pose a question giving two alternatives and the other people in the group have to choose which one of the two alternatives they would prefer. There aren't points given in this game. It's more of a discussion with each player giving their reasoning why they prefer one option over the other. The key aspect to make a successful Would You Rather question is to pose two alternatives that are equally as good or bad so it's difficult for the person to pick one over the other.",
    },
    {
      title: "What Are the Rules to Would You Rather?",
      content:
        "The only rule to Would You Rather is that you have to give two alternatives in the question for the others to choose from. While this rule is quite broad, it can be quite difficult to actually create quality Would You Rather questions. While it's not part of the rules, you can tell if you have asked a good Would You Rather question by how long it takes for the other players to answer. If they are able to answer immediately, then the question wasn't as good as it could have been. If they have to ponder and go back and forth multiple times before finally deciding, then you have created a good question. A general rule of thumb is the longer it takes for the other players to decide, and the more discussion of which of the alternatives should be chosen, the better the question.",
    },
  ];
  
  return (
    <Layout title="Would you rather questions">
      <div className="w-full laptop:max-w-[947px] mx-auto">
        <div className="w-full max-w-[558px] mx-auto flex flex-col gap-8 justify-between">
          <div className="flex w-fit gap-2 items-center mx-auto mb-6">
            <h4 className="text-24 text-grey-900">Number of Questions</h4>
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
    
          <GenerateButton text="Generate Random Questions" task={generatedQuestions} response={letters} />

          <CopyButton
            show={letters !== ""}
            text="Copy Letter"
            size="full"
            style="bg-white text-[#1c1c1c]"
            textToCopy={letters}
          />
        </div>
      </div>
      <ContentCard sections={contentSections} />
    </Layout>
  );
};

export default PageFile;
