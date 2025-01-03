/* eslint-disable react/no-unescaped-entities */
"use client";
import ContentCard from "@/components/ContentCard";
import CopyButton from "@/components/copy-content";
import GenerateButton from "@/components/generateButton";
import Layout from "@/components/layout";
import axios from "axios";
import { useState } from "react";

interface Hangman {
  Word: string;
  Name: string;
}
const PageFile = () => {
  const [response, setResponse] = useState<Hangman[]>([]);
  const [length, setLength] = useState(1);

  const generateWords = async () => {
    // setLoading(true);
    try {
      let wordsData;

      
        const response = await axios.get<Hangman[]>(`/api/quotes?number=${length}`);
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
      title: "Motivational Quotes",
      children: <div>
      <p className="text-14 tablet:text-16 text-left">
      If you're looking for some motivational quotes or inspirational quotes to positively influence your day, you've come to the right place. This is exactly what the Random Motivational Quotes Generator is able to do. With over 1000 motivational quotes in the database, you're sure to find more than a few that will inspire you and help uplift your day.
      </p>
      <p className="text-14 tablet:text-16 text-left">
      The best part of using this motivational generator is how simple it is to use. You just need to indicate how many motivational quotes you'd like to see at one time and then use your mouse to click the generate button. You should see a list of motivational and inspirational quotes appear and you'll have all the words you need to help make your day as positive as it can be. For those who would like a list of motivational quotes, you can create one by indicating how many inspirational quotes you'd like to see at one time.
      </p>
      <p className="text-14 tablet:text-16 text-left">
      With so many lists of motivational quotes and even books devoted entirely to them, some people question why there's a need for a random motivational quote generator. While there are actually a number of ways it can be useful, the main one is that it's a different way to digest the information than those other methods. The long lists of inspirational quotes can quickly get overwhelming. With this free quote generator, you get to pick the exact number of motivational quotes you want to see each time. By avoiding the long lists, you have a better chance to digest and retain the encouraging quotes you see. It simply is an alternative way to read the quotes so you can hopefully find more of them that motivate and encourage you each day. If you're not sure if this free tool would benefit you, a good way to decide is to read a few of the ways it's commonly used by others.
      </p>
      </div>
    },
    {
      title: "Begin Your Day Right",
      content:
        "The beginning of the day is vitally important to how the rest of your day is likely to go. If you don’t want to get up on the wrong side of the bed, make it a habit to start your day off with a motivational quote or even more than one. It can help put you in the right frame of mind so that you have a much more positive day than you would've otherwise had. Everyone needs a little help to get the day started on a positive note, and there's nothing better to do this than a good cup of coffee and an inspirational and motivational quote.",
    },
    {
      title: "Encourage Your Friends",
      content:
        "Everyone needs someone on their side to help brighten their day, help them see something in a new way, or start a discussion about something which they hadn’t thought about. Use the motivational quote generator to start this conversation with a friend or family member. You never know how much an inspirational idea from you might help someone else. Maybe they'll continue to pass it on to encourage even more people as well.",
    },
    {
      title: "Write On It",
      content:
        "Using a motivational quote that speaks to you is a great way to start a journal page or begin your writing for the day. Just having that first quote to get the ideas going is an invaluable tool - you never know where that one idea will take you. In addition, sometimes writers tend to pick a quote or subject that they're more familiar with. Since you won’t know what the inspirational quote will be or who the author is beforehand, it may force you to be more creative and think in a new direction about the idea.",
    },
    {
      title: "Make Your Students Write On It",
      content:
        "If you're a teacher and have ever had a student or your own homeschool student complain about not having something to write about, this generator may be the answer. Instead of having them stare at a blank page, provide them with a motivational and encouraging quote to get them started. They can even research the author of the quote to create a built-in history lesson as well.",
    },
    {
      title: "Sleep On It",
      children:<div>
        <p className="text-14 tablet:text-16 text-left">It's always nice to have good thoughts running through your head right before you head off to sleep. Help quiet your busy brain by using the generator to provide a motivational quote for you as you place your head on the pillow. Not only will you go to bed on a positive note, but the thoughts can also often carry through the night so that you wake up feeling positive as well.</p>
      <p className="text-14 tablet:text-16 text-left">The above examples are just a few ways this online tool can be used. We hope that the quotes inspire you to use your imagination for many other ideas! If you find you use this tool in ways not mentioned in this article, please contact us to let us know how you found it useful. Finding out the specific ways the motivational quote generator is being used helps us to find ways to make it better. If you also happen to have ideas on how this generator would be more useful to yourself, or how we can improve it, letting us know would be greatly appreciated.</p></div>,
    },
  ];

  return (
    <Layout title="Motivational Quotes">
      <div className="w-full laptop:max-w-[947px] mx-auto">
        <div className="w-full max-w-[558px] mx-auto flex flex-col gap-8 justify-between">
          <div className="flex w-fit gap-2 items-center mx-auto mb-6">
            <h4 className="text-24 text-grey-900">Number of Quotes</h4>
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
            text="Generate Motivational Quotes"
            task={generateWords}
          >
            {response.length > 0 &&
              response.map((resp, index) => (
                <p
                  key={index}
                  className={`text-center flex flex-col w-fit text-black border-[#1C1C1C] bg-[#FFD2C2] border shadow-darkbox p-3 tablet:p-4 text-15  capitalize font-medium hover:bg-[#e2c9ff]`}
                >
                  <span className="font-semibold">{resp.Word}</span>
                  <span className="font-semibold w-fit mx-auto">-{resp.Name}</span>
                </p>
              ))}
          </GenerateButton>

          <CopyButton
            show={response.length > 0}
            text={response.length == 1 ? "Copy Quote" : "Copy Quotes"}
            size="full"
            style="bg-white text-[#1c1c1c]"
            textToCopy={response.map(
              (resp) => `${resp.Word}-${resp.Name}`
            )}
          />
        </div>
      </div>
      <ContentCard sections={contentSections} />
    </Layout>
  );
};

export default PageFile;
