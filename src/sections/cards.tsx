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
    },

// New Pages To be created

//     {
//       color: "#C2FFD9",
//       image: "/georgian-names.png",
//       title: 'Random Paragraph Generator',
//       description: 'Need help generating paragraph that can be used for writing and content development',
//       link: "random-paragraph-generator",
//     },
//     {
//       color: "#C2FFD9",
//       image: "/georgian-names.png",
//       title: 'Weird Words',
//       description: 'This page explores some of the craziest words in English, including strange words, crazy words, and weird English words, ',
//       link: "weird-words",
//     },
//     {
//       color: "#C2FFD9",
//       image: "/georgian-names.png",
//       title: 'Fake word generator',
//       description: 'A random word generator page allows you to create fictional words and names.',
//       link: "fake-word-generator",
//     },
//     {
//       color: "#C2FFD9",
//       image: "/georgian-names.png",
//       title: 'Random Noun Generator',
//       description: 'This page allows you to generate up to 1000+ random nouns including proper, common, countable, uncountable, collective nouns',
//       link: "random-noun-generator",
//     },
//     {
//       color: "#C2FFD9",
//       image: "/georgian-names.png",
//       title: 'Charades',
//       description: 'The Charades word generator lets you play Charades anytime, anywhere',
//       link: "charades",
//     },
//     {
//       color: "#C2FFD9",
//       image: "/georgian-names.png",
//       title: 'Random Verb Generator',
//       description: 'It sifts through over 1,000 verbs to pick out the number of random verbs you need for your particular project.',
//       link: "random-verb-generator",
//     },
//     {
//       color: "#C2FFD9",
//       image: "/georgian-names.png",
//       title: 'Random Adjective Generator',
//       description: 'This page serves as an adjective generator that  allows you to generate 1000+ random adjectives including common adjectives.',
//       link: "random-adjective-generator",
//     },
//     {
//       color: "#C2FFD9",
//       image: "/georgian-names.png",
//       title: 'Writing Prompts',
//       description: 'Explore hundreds of creative writing prompts and story prompts to spark your imagination. kickstart your writing journey today!',
//       link: "writing-prompts",
//     },
// {
//       color: "#C2FFD9",
//       image: "/georgian-names.png",
//       title: 'Pictionary Generator',
//       description: 'The Pictionary word generator lets you play Pictionary anywhere with a fun mix of Pictionary words. ',
//       link: "pictionary-generator",
//     },
//     {
//       color: "#C2FFD9",
//       image: "/georgian-names.png",
//       title: 'Random Phrase Generator',
//       description: 'The Random Phrase Generator gives you over 1000 random phrases and idioms, along with their definitions.',
//       link: "random-phrase-generator",
//     },
//     {
//       color: "#C2FFD9",
//       image: "/georgian-names.png",
//       title: 'Random Sentence Generator',
//       description: 'It offers over 1,000 unique random sentences, created just for this free writing tool and not found anywhere else.',
//       link: "random-sentence-generator",
//     },
//     {
//       color: "#C2FFD9",
//       image: "/georgian-names.png",
//       title: 'Yes or No Oracle',
//       description: 'Get a free Yes/No Oracle reading with the Yes No Oracle.',
//       link: "yes-or-no-oracle",
//     },
//     {
//       color: "#C2FFD9",
//       image: "/georgian-names.png",
//       title: 'Truth or Dare Questions',
//       description: "Whether you're after good dares, creative dares for truth or dare, or juicy truth questions",
//       link: "truth-or-dare-questions",
//     },
//     {
//       color: "#C2FFD9",
//       image: "/georgian-names.png",
//       title: 'Vocabulary Words',
//       description: 'This page lists 1,000 challenging words that are commonly used in academic and business writing',
//       link: "vocabulary-words",
//     },
//     {
//       color: "#C2FFD9",
//       image: "/georgian-names.png",
//       title: 'Random Questions',
//       description: 'This page lets you ask over 1000 random questions making it easy and fun to explore new questions with the question generator.',
//       link: "random-questions",
//     },
//     {
//       color: "#C2FFD9",
//       image: "/georgian-names.png",
//       title: 'Decision Maker',
//       description: 'Let the Easy Decision Maker be your go-to choice maker, helping you make random decisions with ease.',
//       link: "decision-maker",
//     },
//     {
//       color: "#C2FFD9",
//       image: "/georgian-names.png",
//       title: 'Motivational Quotes',
//       description: 'A free online tool that will generate random motivational quotes including uplifting quotes, inspirational quotes, and interesting quotes',
//       link: "motivational-quotes",
//     },
//     {
//       color: "#C2FFD9",
//       image: "/georgian-names.png",
//       title: 'Hangman Words',
//       description: "Whether you want to learn how to pick the best Hangman words or just need a list of hard, good, or tricky words for Hangman, we've got you covered!",
//       link: "hangman-words",
//     },
//     {
//       color: "#C2FFD9",
//       image: "/georgian-names.png",
//       title: 'Would you rather Questions',
//       description: 'Discover 100 fun "Would You Rather" questions for kids! You can get free printable cards or a one-page printable.',
//       link: "would-you-rather-questions",
//     },
//     {
//       color: "#C2FFD9",
//       image: "/georgian-names.png",
//       title: 'Never have i ever questions',
//       description: "Whether it's a sleepover, a group dinner, or just free time between classes, we've put together a ton of Never Have I Ever questions",
//       link: "never-have-i-ever-questions",
//     }


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