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

        const response = await axios.get<Words[]>(`/api/verb?number=${length}`);
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
      title: "Random Verb Generator:",
      children:<div>
        <p>The Random Verb Generator is exactly the tool you need. It sifts through over 1,000 verbs to pick out the number of random verbs you need for your particular project.</p>
        <p>For those who need a quick refresher, a verb is a word of action, occurrence or state of being. Below you'll find examples of the different verb types.</p>
        <p><span className="font-semibold">Action Verbs</span>  (these are also known as "dynamic verbs") are the ones that can be performed or you can ask someone to demonstrate that action. Some examples of action verbs would be words such as deliver, run, kick, and push.</p>
        <p><span className="font-semibold">State of Being Verbs</span>  are usually more difficult to identify. These don't describe a type of action but instead describe a position or property. Some examples of "state of being" verbs are the words be, exist, belong, and depend.</p>
      </div>
    },
    {
      title: "How to Use Random Verbs",
      children: <div>
            <p className="text-14 tablet:text-16 text-left">
            There are any number of reasons you may need to use a random verb. One example would be a writer who is trying to push their creativity. Having an unanticipated verb generated creates a situation where a writer must use their creativity to work the verb into their writing. This could be as simple as putting together a paragraph on a particular topic utilizing the verb, or as complex as creating an entire story around the verb. The key is that it's unexpected so the writer has to use their wits to create a piece of writing that utilizes it.
            </p>
            <p className="text-14 tablet:text-16 text-left">
            Generating a random verb can also be a great way to expand the description of a product or service one may be offering. After it's generated, try to think of all the ways that this verb may be used to describe your particular product. This brainstorming may allow you to flush out beneficial characteristics you may not have ever considered in the past. It may also allow you to use more beneficial actions to associate with your product and service than you may have thought of on your own.
            </p>
            <p className="text-14 tablet:text-16 text-left">
            The above are just a few ways the Random Verb Generation could be helpful to you or your project, but it's not an exhaustive list. For anyone who is trying to expand their creativity, using this tool can be an excellent way to achieve that goal. Give it a try to see how a variety of new verbs can get numerous ideas flowing.
            </p>
            <p className="text-14 tablet:text-16 text-left">
            We are always attempting to produce the best tools out there. If you have an idea or suggestion on how we can make this particular generation tool better, please feel free to contact us to let us know. We do take suggestions seriously, and we try to implement those ideas we feel will add value to our tools.
            </p>
           
          </div>
    }
  ];

  return (
    <Layout title="Random Verb Generator">
      <div className="w-full laptop:max-w-[947px] mx-auto">
        <div className="w-full max-w-[558px] mx-auto flex flex-col gap-8 justify-between">
          <div className="flex w-fit gap-2 items-center mx-auto mb-6">
            <h4 className="text-24 text-grey-900">Number of Verb</h4>
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
            text="Generate Verb"
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
            text="Copy Verb"
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
