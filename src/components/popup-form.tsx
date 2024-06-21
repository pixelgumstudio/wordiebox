"use client"
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Close from "/public/cancel.svg"
import axios from "@/lib/axios";
import Popup from "./popup";

export default function FormPopup({visible, close}: {visible:boolean, close: any}) {
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [error, setError] = useState(false)
  const [status, setStatus] = useState('')
    const [show, setShow] = useState(false)

  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  const closeForm =()=>{
    close(false)
  }

  const closeResponse =()=>{
    setShow(false)
  }

  const send = () => {
    setStatus("thanks"),
    setTimeout(() => {
      close(false);
      setShow(true);
    }, 1000)
    if (email?.match(emailRegex)){
   ( email !== "" && !error) &&
      axios.post('https://word-game-dic.cyclic.app/api/waitlist/join', { email })
        .then(response => {
          // Handle the successful response
          setStatus("thanks"),
          setShow(true)
          close(false)
        })
        .catch(error => {
          // Handle errors
          // console.log('Error:', error.response.data.message);
          if (error.response.data.message.includes("exists")){
          setStatus("used"),
          setShow(true)
          }
          if (error.response.data.message.includes("Failed")){
            setStatus("fail"),
            setShow(true)
            }
        });
  } else{
    setError(true)
  }
  }


  return (
    visible && (
      <div className="w-[100vw] h-[100vh] flex items-center justify-center bg-overlay fixed top-0 left-0 z-20">
        <div className="relative p-6 bg-[#F8F7F1] border text-center border-[#1C1C1C] w-full max-w-[398px]">
        <Image src={Close} onClick={closeForm} alt="" width={20} height={20} className="absolute right-2 top-2"/>
        <h1 className="font-bold text-[#1C1C1C] text-24 tablet:text-32 p-0">
        Suggest an app idea </h1>

        <div className="text-left mt-10">
          <label htmlFor="email" className="font-bold">Your email address</label>
          <input type="email" name="email" placeholder='sample@gmail.com' value={email} onChange={(e) => setEmail(e.target.value)}className={`px-3 py-2 mt-2 outline-none h-fit w-full bg-transparent border-[#1C1C1C] border shadow-darkbox`}  />
        </div>
        <div className="text-left mt-5">
          <label htmlFor="message" className="font-bold">Tell us about your idea </label>
          <textarea name="message" rows={5} placeholder='Type your idea' value={message} onChange={(e) => setMessage(e.target.value)}className={`px-3 py-2  mt-2 outline-none h-fit w-full bg-transparent border-[#1C1C1C] border shadow-darkbox`}  />
        </div>

        <button className='p-2 w-full h-fit bg-[#FFCC00] border-[#1C1C1C] border shadow-darkbox' onClick={send}>Submit your idea</button>
        </div>

        <Popup visible={show} updateView={closeResponse} status={status} email={email} />

      </div>
    )
  );
}
