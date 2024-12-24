"use client";
import ContentCard from "@/components/ContentCard";
import CopyButton from "@/components/copy-content";
import GenerateButton from "@/components/generateButton";
import Layout from "@/components/layout";
import axios from "axios";
import { useState } from "react";


interface Hangman {
  Sentence: string;
}
const PageFile = () => {
  const [response, setResponse] = useState<Hangman[]>([]);
  const [length, setLength] = useState(1);

  const generateWords = async () => {
    // setLoading(true);
    try {
      let wordsData;

      
        const response = await axios.get<Hangman[]>(`/api/never-have-i?number=${length}`);
        wordsData = response.data;
   

      setResponse(wordsData);
      // setShowButton(true);
    } catch (error) {
      console.error("Error fetching words:", error);
    } finally {
      // setLoading(false);
    }
  };
  const options = [1, 2];
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setLength(Number(event.target.value));
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
    <Layout title="Never have i ever Questions">
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
    
          <GenerateButton text="Generate Random Questions" task={generateWords} >
            {response.length > 0 &&
              response.map((resp, index) => (
                <p
                  key={index}
                  className={`text-center flex flex-col w-fit text-black border-[#1C1C1C] bg-[#FFD2C2] border shadow-darkbox p-3 tablet:p-4 text-15  capitalize font-medium hover:bg-[#e2c9ff]`}
                >
                  <span className="font-semibold">{resp.Sentence}</span>
                </p>
              ))}
          </GenerateButton>

          <CopyButton
            show={response.length > 0}
            text="Copy Letter"
            size="full"
            style="bg-white text-[#1c1c1c]"
            textToCopy={response.map(
              (resp) => `${resp.Sentence}`
            )}
          />
        </div>
      </div>
      <ContentCard sections={contentSections} />
    </Layout>
  );
};

export default PageFile;
