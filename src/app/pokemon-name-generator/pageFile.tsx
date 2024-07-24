/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState } from "react";
import Layout from "@/components/layout";
import Dropdown from "@/components/dropdown";

const GeneratorForm: React.FC = () => {
  const [type, setType] = useState<string>("any");
  const [number, setNumber] = useState<string>("1");
  const [gender, setGender] = useState<string>("any");
  const [pokemon, setPokemon] = useState<string[]>([]);
  
  const numbers = Array.from({ length: 10 }, (_, i) => (i + 1).toString());
  const types = ["Any", "Normal", "Water", "Fire", "Grass", "Electric", "Ice", "Dragon", "Rock", "Steel"];
  const genders = ["Any", "Male", "Female", "Binary" ];

  const handleTypeChange = (type: string) => setType(type.toLowerCase());
  const handleNumberChange = (number: string) => setNumber(number);
  const handleGenderChange = (gender: string) => setGender(gender.toLowerCase());

  // const generatePokemon = async () => {
  //   try {
  //     const response = await fetch('/api/pokemon', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({ gender, type, number: parseInt(number) }),
  //     });
  //     const data = await response.json();
  //     setPokemon(data);
  //   } catch (error) {
  //     console.error("Error fetching Pokémon:", error);
  //   }
  // };

  return (
    <Layout title="Pokemon Name Generator">
      <div className="w-full laptop:max-w-[947px] mx-auto">
        <div className="w-full max-w-[400px] mx-auto flex flex-col gap-8 justify-between">
          <div className="flex mt-2 text-14 font-semibold h-fit w-fit bg-white !text-[#1C1C1C] border-[#1C1C1C] border shadow-darkbox">
            {genders.map(sex => (
              <p key={sex}
                className={`${gender === sex.toLowerCase() && "bg-[#EDEDED]"} cursor-pointer px-2 py-2 hover:bg-[#EDEDED]`}
                onClick={() => setGender(sex.toLowerCase())}
              >
                {sex}
              </p>
            ))}
          </div>
          <Dropdown
            title="Select Type"
            options={types}
            selected={handleTypeChange} 
            button={false}
            first="Select Type"
            position="ml-0"
          />
          <Dropdown
            title="No of results"
            options={numbers}
            selected={handleNumberChange}
            button={false}
            first="No of results"
            position="ml-0"
          />
          {/* <button onClick={generatePokemon}
            className="w-full max-w-[400px] mt-4 text-[#1C1C1C] border-[#1C1C1C] bg-[#FC0] border shadow-darkbox p-4 text-16 font-medium hover:bg-[#fc9]"
          >
            Generate
          </button> */}
          <div className="flex flex-wrap justify-start w-fit mx-auto gap-5">
            {pokemon.length > 0 && pokemon.map((name, index) => (
              <p
                key={index}
                className="text-center w-fit inline-block text-black border-[#1C1C1C] bg-[#EDEDED] border shadow-transparent p-3 tablet:p-4 text-20 tablet:text-24 capitalize font-semibold hover:bg-[#e2c9ff]"
              >
                {name}
              </p>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full laptop:max-w-[947px] mx-auto mt-20 laptop:mt-25">
        <div className="flex flex-col gap-[10px] text-black border border-[#1C1C1C] bg-[#FFFFFF] shadow-darkbox p-4 tablet:p-6 w-full mx-auto my-6">
          <p className="text-16 tablet:text-20 text-left font-semibold">
            About the Pokemon Name Generator
          </p>
          <p className="text-14 tablet:text-16 text-left mb-4">
            The Pokémon Name Generator is a fun and creative online tool
            designed for fans of the Pokémon franchise. With a simple click, it
            generates unique and imaginative names that capture the spirit of
            the Pokémon universe.
          </p>

          <p className="text-14 tablet:text-16 text-left">
            Whether you're an avid Pokémon trainer, a fan of Pokémon games and
            shows, or just looking to add a touch of whimsy to your creative
            projects, this generator offers a gateway to a world of endless
            possibilities. You can use it to come up with names for your Pokémon
            team, create characters for fanfiction, or simply explore the charm
            of Pokémon-inspired names. Step into the captivating world of
            Pokémon and let this generator spark your imagination as you embark
            on exciting adventures in a universe filled with pocket monsters,
            battles, and friendship.
          </p>
          <p className="text-14 tablet:text-16 text-left mb-4">
            Disclaimer: This Pokémon Name Generator is an unofficial and fan-created tool intended for entertainment and informational purposes only. It is not endorsed by or affiliated with The Pokémon Company, Nintendo, or any other entity associated with the Pokémon franchise. All names and elements related to Pokémon are the intellectual property of their respective owners. The use of names and references from the Pokémon series is not intended to infringe upon any copyrights or trademarks, and no ownership or rights to the Pokémon universe are claimed by the creators of this generator.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default GeneratorForm;
