"use client"
import React, { useEffect, useState } from 'react'
import Card from '../components/card'
import Tap from '../components/tap'
import { createSlug } from '@/components/slug'

const Cards = () => {
const [pageName, setPageName] =  useState<string | null>('')
  useEffect(() => {
    const pageName:string | null = localStorage.getItem('language');
    pageName !== null && setPageName(pageName)
  }, []);

  const links = [
    {
      color: "#FFED9D",
      image:"/word-day.png",
      title: 'Word Of The Day',
      description: "Build your vocabulary with word of the day, get a new word every day, complete with its definition and fun facts!",
      link: "/word-of-the-day",
    },
    {
      color: "#C2FFD9",
      image: "/capitalize-my-title.png",
      title: 'Capitalize My Title',
      description: "Convert your text to capital letters automatically. Our tool can convert your text to Title Case, sentence case, UPPERCASE and lowercase",
      link: "capitalization-tool",
    },
    {
      color: "#C2FFD9",
      image: "/random-country-generator.png",
      title: 'Random Country Generator',
      description: "Random Country will generate a new random country from the continent you have selected.",
      link: "random-country-generator",
    },
    {
      color: "#C2FFD9",
      image: "/morse-code.png",
      title: 'Morse Code Translator',
      description: "The morse code translator can translate text from ordinary text into morse code text. ",
      link: "morse-code-translator",
    },
    {
      color: "#C2FFD9",
      image: "/random-state-generator.png",
      title: 'Random State Generator',
      description: "Have trouble tracking your word count? check this out.",
      link: "random-state-generator",
    },
    {
      color: "#FFC4DF",
      image: "/character-counter.png",
      title: 'Character Counter',
      description: "Need help counting the characters in your writing project? check out character counter.",
      link: `character-counter/${pageName ? createSlug(pageName) : pageName}`,
    },
    {
      color: "#C2FFD9",
      image: "/cursive-text.png",
      title: 'Cursive Text Generator',
      description: 'The cursive text translator converts normal text to cursive text.',
      link: "cursive-text-generator",
    },
    {
      color: "#C2FFD9",
      image: "/word-counter.png",
      title: 'Word Counter',
      description: "Have trouble tracking your word count? check out word counter.",
      link: `word-counter/${pageName ? createSlug(pageName) : pageName}`,
    },
    {
      color: "#DFC3FF",
      image: "/word-generator.png",
      title: 'Random Word Generator',
      description: "In need of a creative spark? check out random word generator!",
      link: "random-word-generator",
    },
    {
      color: "#C2FFD9",
      image: "/strikethrough.png",
      title: 'Strikethrough Text',
      description: "Enter text below and get a strikethrough text as response.",
      link: "strikethrough-text-generator",
    },
    {
      color: "#C2FFD9",
      image: "/password-generator.png",
      title: 'Password Generator',
      description: "Create a secure password using our password generator tool.",
      link: "password-generator",
    },
   
    {
      color: "#C2FFD9",
      image: "/pokemon.png",
      title: 'Pokemon Name Generator',
      description: 'Generate a pokemon name from our pokemon name generator',
      link: "generate-pokemon-name",
    },
    {
      color: "#C2FFD9",
      image: "/name-generator.png",
      title: 'Random Name Generator',
      description: 'Generate a random name and their meaning in any language that you selected',
      link: "random-name-generator",
    },
    {
      color: "#C2FFD9",
      image: "/letter-generator.png",
      title: 'Random Letter Generator',
      description: 'Need help getting a random letter from the English alphabet or any other alphabet of your choice.',
      link: "letter-generator",
    },
    {
      color: "#C2FFD9",
      image: "/color-generator.png",
      title: 'Random Color Generator',
      description: 'Need help generating colors that can serve a number of purposes? From web development to artistic quests!',
      link: "color-generator",
    },
    {
      color: "#C2FFD9",
      image: "/date-generator.png",
      title: 'Random Date Generator',
      description: 'Need help generating random calendar dates using true randomness, which can be used in computer programs.',
      link: "date-generator",
    },
    {
      color: "#C2FFD9",
      image: "/choice-generator.png",
      title: 'Random Choice Generator',
      description: 'Need help creating a random choice from your text options. It will generate random choices from your personal list.',
      link: "choice-generator",
    },
    {
      color: "#C2FFD9",
      image: "/list-randomizer.png",
      title: 'List Randomizer',
      description: 'This allows you to randomize lists of strings using true randomness, which is used in computer programs.',
      link: "randomize-list",
    },
    {
      color: "#C2FFD9",
      image: "/string-generator.png",
      title: 'Random String Generator',
      description: 'Need help getting a random string from the English alphabet or any other alphabet of your choice.',
      link: "string-generator",
    },
    {
      color: "#C2FFD9",
      image: "/georgian-names.png",
      title: 'Male and Female Names',
      description: 'Need help generating a list of names in which the usage is Georgian.',
      link: "gender-names-generator",
    }

  ];
  return (
    <div className='w-full'>
       <div id='cards' className='w-full laptop:max-w-[1152px] mx-auto px-4 tablet:px-6 laptop:px-8 desktop:px-0 text-center  pb-[40px] tablet:pb-[80px] laptop:pb-[100px]'>
      <div className='flex flex-wrap gap-5 tablet:gap-8 items-center justify-center laptop:justify-start laptop:items-stretch text-center'>
     {links.map((link)=>
      <Card key={link.title} color={link.color} image={link.image} title={link.title} description={link.description} link={link.link} />
    )}
  
      </div> 
        <Tap />
    </div>
  
        </div>
  )
}

export default Cards