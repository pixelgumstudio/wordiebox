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
  const [type, setType] = useState<string>("");
  const [typeCopy, setTypeCopy] = useState<string>("");
  const [response, setResponse] = useState<Pokemon[]>([]);


  const handleTypeChange = (type: string) => setType(type);

  const choices = ['Truth', "Dare"]
  const generateQuestion = async () => {
    try {
      const response = await axios.get<Pokemon[]>(`/api/truthOrDare?choice=${type}`);
      setResponse(response.data);
      setTypeCopy(type)
    } catch (error) {
      console.error("Failed to fetch Pokémon:", error);
    }
  };

  const contentSections = [
    {
      title: "Truth or Dare Questions",
      content:
        "Playing Truth or Dare is a right of passage for anyone growing up. It's a game that's fun, exciting and a bit nerve-wracking at the same time. One of the most difficult parts of the game is coming up with good truth questions and good dare questions when playing. That's where the Truth or Dare Questions generator comes in. It contains over 1000 good Truth or Dare questions for 2024 so that the game will always be interesting without all the players having to spend time during the game trying to think of good questions to ask. The game of Truth or Dare is a timeless classic that can entertain for hours. Friendships can be forged in the silly and wild or dramatic and moving outcomes that come from the simple question 'truth or dare?'",
    },
    {
      title: "How Do You Play Truth or Dare?",
      content:
        "Truth or Dare is a game played verbally with no equipment or cards necessary. A minimum of two people play the game wherein one person chooses to tell a truthful answer to a question set by another player or to perform a challenge usually of bizarre or difficult nature -- a dare. One gameplay option includes using a Truth or Dare generator that'll produce random questions for each player's turn. This ensures that all players have an equal chance of performing an embarrassing task or answering a difficult question. Another optional rule can be to allow players to skip a certain number of truths or dares after verbalization. This rule is valuable if the game is more casual so that a player doesn't have to do anything too far past their comfort zone. A more serious alternative is to only be allowed the choice between the given dare or truth. For example, if the player chooses dare and decides they don't want to do that dare then they must answer a truth provided by the same person even if they don't want to do that either.",
    },
    {
      title: "Dare Questions",
      content:
        "Playing Truth or Dare can be a great way to have a good time at a gathering. It can be fun to do silly things you might never have the courage to do without a little push from someone else. It can also be a blast to watch your friends do some crazy things or to come up with the wild dares you want to see your friends do. A good dare should be something that gets the person a bit out of their comfort zone but not so bad that the person refuses to do it. It can be a tricky balance coming up with these ideas on your own on the fly and that's where a Truth or Dare questions generator can provide good dares for Truth or Dare games. When coming up with dares on your own, remember to always keep dares safe and never do anything that could hurt someone or upset someone's feelings.",
    },
    {
      title: "Truth Questions",
      content:
        "The truth portion of this game at parties can be a fun time too. Maybe it's time to see which teacher your classmates like the most or who believes in the wildest conspiracy theory. Asking who someone likes can be fun at a party but if you want to keep the topic away from romance, there are many other truth questions that can be asked. For example, you can ask instead which movie star they think is the most attractive. Again, coming up with good truth questions for Truth or Dare can be difficult during the game and that's where using a Truth or Dare generator can be quite helpful. It's also important to not forget that certain truths can be hurtful so be careful not to ask people something that could be derisive towards someone you know.",
    },
    {
      title: "Truth or Dare Game",
      children:
    <div>
      <p>At the end of the day, Truth or Dare is a fun game that can be played in a lot of settings with a lot of different groups. It can be a fun way to learn more about your friends or a new companion. This game can also be a great way to be goofy without feeling too self-conscious. Just remember to always play nicely and never intentionally try to offend anyone.</p>
      <p>If you found this tool useful for your game of Truth or Dare, we'd love to hear about it. We'd also be interested to hear from you if you have truth questions or dare questions that you believe are particularly good that we can add to this generator. We're always looking for great new questions to add to our database that everyone would find fun and entertaining, so please contact us if you have ones you particularly like when playing the game.</p>
    </div>
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
         
         <GenerateButton text="Generate Question" task={generateQuestion} >
            {response.length > 0 &&
              response.map((resp, index) => (
                <p
                  key={index}
                  className={` flex flex-col w-fit text-black border-[#1C1C1C] bg-[#FFD2C2] border shadow-darkbox p-3 tablet:p-4 text-15  capitalize font-medium hover:bg-[#e2c9ff]`}
                >
                  <span className="font-semibold">{resp.choice}</span>
                  <span className="font-semibold">{resp.question}</span>
                </p>
              ))}
          </GenerateButton>

          <CopyButton
            show={response.length > 0}
            text={`Copy ${response.map(resp => resp.choice)}`}
            size="full"
            style="bg-white text-[#1c1c1c]"
            textToCopy={response.map(
              (resp) => `${resp.choice}, ${resp.question}`
            )}
          />
        </div>
      </div>
      <ContentCard sections={contentSections} />
    </Layout>
  );
};

export default GeneratorPokemon;
