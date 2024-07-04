"use client"
import React, { useEffect, useState } from 'react'

import Word_Counter from "/public/word-counter.png"
import Character_Counter from "/public/character-counter.png"
import Word_Day from "/public/word-day.png"
import Random_Word from "/public/random-word.png"
import Card from '../components/card'
import Tap from '../components/tap'

const Cards = () => {
const [pageName, setPageName] =  useState<string | null>('english')
  useEffect(() => {
    const pageName:string | null = localStorage.getItem('language');
    pageName !== null && setPageName(pageName)
  }, []);

  return (
    <div className='w-full bg-[#FBF4EE] '>
       <div id='cards' className='w-full laptop:max-w-[1152px] mx-auto px-4 tablet:px-6 laptop:px-8 desktop:px-0 text-center  pb-[40px] tablet:pb-[80px] laptop:pb-[100px]'>
      <div className='flex flex-wrap gap-5 tablet:gap-[40px] items-center justify-center laptop:justify-start laptop:items-stretch text-center'>
      <Card color="#FFED9D" image={Word_Day} title='Word Of The Day' description='Build your vocabulary, get a new word every day, complete with its definition and fun facts!' link='/word-of-the-day' />
      <Card color="#DFC3FF" image={Random_Word} title='Random Word Generator ' description='Generate a list of random words you can use for your next writing project.' link='random-word-generator' />
      <Card color="#FFC4DF" image={Character_Counter} title='Character Counter' description='Need help counting the characters in your writing project? check this out.' link={`character-counter/${pageName}`} />
      <Card color="#C2FFD9" image={Word_Counter} title='Word Counter' description='Have trouble tracking your word count? check this out.' link={`word-counter/${pageName}`} />
      <Tap />
      </div>
    </div>
  
        </div>
  )
}

export default Cards