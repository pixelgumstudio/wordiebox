/* eslint-disable react/no-unescaped-entities */
"use client";
import React, {  useState } from "react";
import Layout from "@/components/layout";
import Dropdown from "@/components/dropdown";
import axios from "axios";
import CopyButton from "@/components/copy-content";
import ContentCard from "@/components/ContentCard";
import GenerateButton from "@/components/generateButton";

interface Pokemon {
  question: string;
  choice: string;
}

const GeneratorPokemon: React.FC = () => {
  const [type, setType] = useState<string>("Truth");
  const [response, setResponse] = useState<Pokemon[]>([]);


  const handleTypeChange = (type: string) => setType(type);

  const choices = ['Truth', "Dare"]
  const generatePokemon = async () => {
    try {
      const response = await axios.get<Pokemon[]>(`/api/truthOrDare?choice=${type}`);
      setResponse(response.data);
    } catch (error) {
      console.error("Failed to fetch Pokémon:", error);
    }
  };

  const contentSections = [
    {
      title: "What is Never Have i ever Questions",
      content:
        "The Never Have I Ever Questions has hundreds of questions for you to choose from including entertainment, funny, good, for kids, embarrassing, gross, food, rule-breaking, drinking, and dirty. You simply need to choose which of the categories of questions you want to use for your group and then click the button. Once done, a random Never Have I Ever question will appear and the game can begin.",
    },
    {
      title: "How Do You Play Never Have I Ever?",
      content:
        "Playing Never Have I Ever is quite simple, but the results can bring out a lot of fun, laughter and sometimes even shock. In the classic game, one person will say an experience that they have never had. If anyone in the group has done the stated activity, they take a shot or take a drink (this can be modified for the group playing, but it originated as a drinking game). If nobody has done the stated action, then the person who made the Never Have I Ever statement must take the shot or drink (or agreed upon action). If only a single person out of the entire group has done the action, they're usually required to elaborate and give details about how the action came about. That's all there is to this game.",
    },
    {
      title: "What Are the Rules to Never Have I Ever?",
      content:
        "Above gives the basic ways on how to play Never Have I Ever, but the Never Have I Ever rules can be easily adjusted to what the entire group agrees upon. One common adjustment is instead of each person coming up with a Never Have I Ever question, the groups uses a Never Have I Ever generator. This often makes the game go more quickly and provides questions that are sure to bring fun and excitement to the game. While it's common for people in the group to drink when they have done the experience, this isn't the main point of the game. The main point is to learn more about the people in the group, so whatever action the person takes to indicate they have had the experience can be negotiated among the group.",
    },
  ];

  return (
    <Layout title="Truth or Dare Questions">
      <div className="w-full laptop:max-w-[947px] mx-auto">
        <div className="w-full max-w-[400px] mx-auto flex flex-col gap-8 justify-between">
          
          <Dropdown
            title="Select a question type"
            options={choices}
            selected={handleTypeChange}
            button={false}
            first="Any"
            width="25"
            position="ml-0"
          />
         
         <GenerateButton text="Generate Question" task={generatePokemon} >
            {response.length > 0 &&
              response.map((resp, index) => (
                <p
                  key={index}
                  className={`text-center flex flex-col w-fit text-black border-[#1C1C1C] bg-[#FFD2C2] border shadow-darkbox p-3 tablet:p-4 text-15  capitalize font-medium hover:bg-[#e2c9ff]`}
                >
                  <span className="font-semibold">{resp.question}</span>
                </p>
              ))}
          </GenerateButton>

          <CopyButton
            show={response.length > 0}
            text="Copy Letter"
            size="full"
            style="bg-white text-[#1c1c1c]"
            textToCopy={response.map(
              (resp) => `${resp.question}`
            )}
          />
        </div>
      </div>
      <ContentCard sections={contentSections} />
    </Layout>
  );
};

export default GeneratorPokemon;
