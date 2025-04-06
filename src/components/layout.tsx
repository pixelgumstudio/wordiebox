/* eslint-disable react/no-unescaped-entities */
"use client"
import Cards from '@/sections/cards';
import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google';
import { useRouter } from 'next/navigation';
import React, { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
  title: string;
}

const Layout: React.FC<LayoutProps> = ({ children, title }) => {
  const router = useRouter();

  const handleBack = () => {
    router.back(); // Go back to the previous page
  };

    return (
      <div className='w-full bg-[#FFFFFF] dark:bg-[#1C1C1C]' id='hero'>
      <div className='w-full px-4 tablet:px-6 laptop:px-0 mx-auto py-[50px] tablet:py-[80px] laptop:py-[100px]'>
      <div className="relative text-center mb-8 flex flex-col gap-6 tablet:justify-center dark:text-[#1C1C1C] tablet:items-center">
        <p className='text-[#757575] dark:text-[#FFFFFF] font-medium'><span className='cursor-pointer' onClick={handleBack}>Tools/</span><span className='text-[#1C1C1C] dark:text-[#FFFFFF] capitalize'>{title}</span></p>
          <h1 className='font-bold text-[#1C1C1C] dark:text-[#FFFFFF] mx-auto text-center text-24 tablet:text-32 mt-5 tablet:mt-0 capitalize'>{title}</h1>
         </div>
       {children}
       <div className='w-full max-w-[980px] mx-auto py-[50px] tablet:py-[80px] laptop:py-[100px]'>
       <h1 className='font-bold text-[#1C1C1C] dark:text-[#FFFFFF] text-24 tablet:text-32 px-4 tablet:px-6 laptop:px-8 desktop:px-0 my-5 tablet:my-5 capitalize'>Other Apps</h1>
     <Cards />
     </div>
    </div>
      <GoogleTagManager gtmId="GTM-K8ST54XF" />
      <GoogleAnalytics gaId="G-P8TXFVSRPZ" />
    </div>
      )
}

export default Layout