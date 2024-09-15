
"use client"
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react';
import FormPopup from './popup-form';
import axios from '@/lib/axios';
import Popup from './popup';

const Suggestion = ({setShowform, }) => {

  const [isScaled, setIsScaled] = useState(false);
  const [count, setCount] = useState(0);
  const [userCount, setUserCount] = useState(0);
//   const [showform, setShowform] = useState<boolean>(false);
  const [show, setShow] = useState(false)
  const [status, setStatus] = useState('')
  const [email, setEmail] = useState<string>('');


    // For Total Clicks
   await axios.post(`clicks`, {"clicks": 1}, {
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Credentials": true,
    },
  }); 
    

  };

  const showForm = ()=>{
    setShowform(true)
  }

  const closeForm = (response:any)=>{
    setStatus(response.message);
    setShow(response.showPopup);
    setEmail(response.email);
    console.log(response)
    setShowform(response.status)
  }

  const closeResponse =()=>{
    setShow(false)
  }

    return (
      <>

          <FormPopup visible={showform} close={closeForm}/>

        <Popup visible={show} updateView={closeResponse} status={status} email={email} />

               </>
    )
  }
  
  export default Suggestion



  // tablet:w-[120px] tablet:h-[120px] tablet:border-[6px]