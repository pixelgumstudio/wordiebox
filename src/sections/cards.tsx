"use client"
import React, { useEffect, useState } from 'react'

import Word_Counter from "/word-counter.png"
import Character_Counter from "/character-counter.png"
import Word_Day from "/word-day.png"
import Random_Word from "/random-word.png"
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
      description: "Build your vocabulary, get a new word every day, complete with its definition and fun facts!",
      link: "/word-of-the-day",
    },
    {
      color: "#DFC3FF",
      image: "/word-generator.png",
      title: 'Random Word Generator',
      description: "Generate a list of random words you can use for your next writing project.",
      link: "random-word-generator",
    },
    {
      color: "#FFC4DF",
      image: "/character-counter.png",
      title: 'Character Counter',
      description: "Need help counting the characters in your writing project? check this out.",
      link: `character-counter/${pageName ? createSlug(pageName) : pageName}`,
    },
    {
      color: "#C2FFD9",
      image: "/word-counter.png",
      title: 'Word Counter',
      description: "Have trouble tracking your word count? check this out.",
      link: `word-counter/${pageName ? createSlug(pageName) : pageName}`,
    },
    {
      color: "#C2FFD9",
      image: "/morse-code.png",
      title: 'Morse Code Translator',
      description: "Need help counting the characters in your writing project? check out character counter.",
      link: "morse-code-translator",
    },
    // {
    //   color: "#C2FFD9",
    //   image: "/pokemon.png",
    //   title: 'Pokemon Name Generator',
    //   description: 'Creating random Pokemon names is easy with our tool. Just select the options you want above and then click &quot;',
    //   link: "pokemon-name-generator",
    // },
    {
      color: "#C2FFD9",
      image: "/word-counter.png",
      title: 'Cursive Text Generator',
      description: 'Creating random Pokemon names is easy with our tool. Just select the options you want above and then click &quot;',
      link: "cursive-text-generator",
    },
    {
      color: "#C2FFD9",
      image: "/capitalize-my-title.png",
      title: 'Capitalization Tool',
      description: "In need of a creative spark? check out random word generator!",
      link: "capitalization-tool",
    },
    {
      color: "#C2FFD9",
      image: "/strikethrough.png",
      title: 'Strikethrough Text Generator',
      description: "Need help counting the characters in your writing project? check out character counter.",
      link: "strikethrough-text-generator",
    },
    {
      color: "#C2FFD9",
      image: "/random-state-generator.png",
      title: 'Random State Generator',
      description: "Have trouble tracking your word count? check this out.",
      link: "random-state-generator",
    },
    {
      color: "#C2FFD9",
      image: "/password-generator.png",
      title: 'Password Generator',
      description: "Have trouble tracking your word count? check this out.",
      link: "password-generator",
    },
    {
      color: "#C2FFD9",
      image: "/random-country-generator.png",
      title: 'Random Country Generator',
      description: "Have trouble tracking your word count? check this out.",
      link: "random-country-generator",
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