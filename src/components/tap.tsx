
"use client"
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react';
import FormPopup from './popup-form';
import axios from '@/lib/axios';

const Tap = () => {

  const [isScaled, setIsScaled] = useState(false);
  const [count, setCount] = useState(0);
  const [userCount, setUserCount] = useState(0);
  const [showform, setShowform] = useState<boolean>(false);


  const getClicks = async () => {
    try {
      const response = await axios.get(`clicks`);
      setCount(response.data.data.totalClicks)
    } catch (error) {
      console.error("Error fetching Word:", error);
    }
  };

  useEffect(() => {
    getClicks();
  }, []);

  const handleClick = async () => {
    setIsScaled(true);
    setTimeout(() => {
      setIsScaled(false);
    }, 100); // 2000ms = 2 seconds

    setCount(prevCount => prevCount + 1);

    if (userCount < 1){
      setUserCount(prevCount => prevCount + 1);-
      // For Total Clicks
      await axios.post(`clicks/clicked-users`, {"users": 1}); 
    }

    // For Total Clicks
   await axios.post(`clicks`, {"clicks": 1}); 
    

  };

  const showForm = ()=>{
    setShowform(true)
  }
  const closeForm = (response:boolean)=>{
    setShowform(response)
  }

    return (
      <div className='w-full  laptop:w-[65.66666%] py-[7px] px-[5px] text-16 font-medium focus:outline-none mb-6'>
        <div className={`flex gap-5  items-center text-left w-full h-[160px] p-5 mb-[10px] relative`}>
        <p
      onClick={handleClick}
      className={`w-[120px] h-[120px] rounded-full bg-[#FFCC00] border-[6px] shadow-tap-shadow border-white transform transition-transform linear ${isScaled ? 'scale-[1.2] duration-300' : 'scale-100 duration-300'}`}
    ></p>
          <p className='w-full max-w-[316px] font-normal leading-[22px] text-[24px] text-[#2E2E27] mb-2 tablet:text-[20px] tablet:leading-[28px] tablet:tracking-[-0.8px] laptop:text-[24px] laptop:leading-8 '>This button has been tapped <span className='text-[#C19700]'>{count} times today!</span></p>
        </div>
        <div className='px-4 py-2'>
          <p className='text-[16px] leading-[22px] text-[#64645F] laptop:text-[20px] laptop:leading-[28px] text-left'>We use this button to track how many users visit this page and use our apps. Feel free to explore it. If you like our apps and want us to create more, Please <Link target='_blank' href='https://olayanjuidris.gumroad.com/l/wordieboxsupport' className="font-semibold border-b border-b-[#64645F]" >Support us.</Link> Have a Word app idea? <span onClick={showForm} className="font-semibold border-b border-b-[#64645F]">Suggest it to us.</span>  </p>
          </div>

          <FormPopup visible={showform} close={closeForm}/>
               </div>
    )
  }
  
  export default Tap