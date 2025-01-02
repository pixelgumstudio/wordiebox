"use client";
import ContentCard from "@/components/ContentCard";
import CopyButton from "@/components/copy-content";
import GenerateButton from "@/components/generateButton";
import Layout from "@/components/layout";
import NumberSelector from "@/components/numberSelector";
import axios from "axios";
import { useState } from "react";


interface Words {
  Word: string;
}

const PageFile = () => {
  const [response, setResponse] = useState<Words[]>([]);
  const [length, setLength] = useState(1);

  const lengths = (length:number) => {
    setLength(length)
  };

  const generateWords = async () => {
    try {
      let wordsData;

        const response = await axios.get<Words[]>(`/api/fake?number=${length}`);
        wordsData = response.data;
   
      setResponse(wordsData);
    } catch (error) {
      console.error("Error fetching words:", error);
    } finally {
    }
  };

  const contentSections = [
    {
      title: "What is fake word?",
      content: `Fake words are simply made up words that appear to be real, but actually don't exist and don't have any meaning. They initially appear real because they can be pronounced which makes it seem like they would be real words. This leads to the question of why in the world would anyone needs to find fake words or use a fake word generator? It does seem a bit strange at first, but there are actually a number of legitimate reasons why people find this free nonsense word tool useful. Below we list a few of the more common reasons that people might want to generate random pseudo words.`,
    },
    {
      title: "How to use a random fake words generator:",
      children: <ul className="list-inside list-disc">
            <li className="text-14 tablet:text-16 text-left">
            Select the numbers of words you want to generate
            </li>
            <li className="text-14 tablet:text-16 text-left">
            Enter text first and last letter into input box
            </li>
            <li className="text-14 tablet:text-16 text-left">
            Choose from the word length options
            </li>
            <li className="text-14 tablet:text-16 text-left">
            Copy your generated word(s) and use
            </li>
          </ul>
    },
    {
      header: "Why random fake words generator:",
      title: "Creativity",
      content: `If you're in need of some creative inspiration, using nonsense words can be a great way to get the creative juices flowing. Simply generate a fake word and then come up with a definition of what that word could mean. Since it's not a real word, there's no right or wrong answer. You can let your imagination go wild and that should help to get the creative juices flowing. It's a great way to use a made up word generator.`,
    },
    {
      title: "Writing Challenges",
      content: `Fake words can be an excellent way for writers to begin putting words to paper. Whether they're looking to overcome a bit of writer's block or just need a quality way to begin writing each day, having a random pseudo word generated can be an ideal way to do this. Once the writer has a created a random fake word using the fake word generator, he or she can attempt to write a paragraph about the meaning of that nonsense word, or simply come up with a definition, and then use the word in a sentence. Since the words aren't real, it should help overcome writer's block and help to make it an easy way to begin writing each day.`,
    },    
    {
      title: "Naming Projects",
      content: `If you're in a situation where you need to come up with a name for a project or some other entity, using a fake word generator can be a great way to begin. While none of the random fake words will likely be the exact word you ultimately decide to use, they can be a good beginning point to create the perfect new word for your needs. Generate random nonsense words and begin saying them out loud. This should help you find the sounds you like and it can ultimately help you create the perfect new word for your project.`,
    },
    {
      title: "Codewords",
      content: `If you and your friends want to be able to tell each other information without anyone else being able to know what you're talking about, creating a set of pseudo words is a great way to do this. You and your friends come up with a definition of each of the fake words and you can say them anytime with anyone listening. While you'll know what you're talking about, nobody else around you will understand the nonsense words coming out of your mouths. You now have secret codewords that you can use at any time!`,
    },
    {
      title: "Improve Your Gibberish",
      content: `A wonderful way to improve your gibberish is to find fake words and pronounce them so they easily roll off your tongue. All those nonsense words coming out of your mouth are now your own gibberish language. The more pseudo words and made up words you can use when speaking without hesitation will improve your overall gibberish. This is a skill that every baby you meet will absolutely love!`,
    },
    {
      content: `We appreciate you taking the time to use our fake word generator. While we know some of the ways that this tool is being used, if you happen to be using it for another reason not listed above, we'd love to hear from you. We know from experience that the tools we create are sometimes used in ways we never anticipated. When this happens, it helps us a lot to know these unique ways the fake word generator is being used as it can help us make improvements to the tool when we make updates. If you have any ideas or suggestions on how to make this made up word generator more useful, please send us an email to let us know.`,
    },
  ];

  return (
    <Layout title="Fake word generator">
      <div className="w-full laptop:max-w-[947px] mx-auto">
        <div className="w-full max-w-[558px] mx-auto flex flex-col gap-8 justify-between">
         
         <NumberSelector selected={lengths} text="Fake Word"/>

          <GenerateButton
            text="Generate Fake Words"
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
            text="Copy Fake Word"
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
