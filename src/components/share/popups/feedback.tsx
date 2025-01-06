"use client";
import Image from "next/image";
import React, { useState } from "react";
import Right_Arrow from "/public/arrowRight.svg";
import axios from "axios";

interface FormPopupProps {
  visible: boolean;
  close: (response: any) => void;
}

export default function FeedBack({ visible, close }: FormPopupProps) {
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<Boolean>(false);

  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  const handleClose = () => {
    close({ status: false, congrats: false});
    setEmail("")
    setMessage("")
  };

  const handleBack = () => {
    close({ goBack: true, status: false});
  };


  const handleSend = async () => {
    if (!email.match(emailRegex)) {
      setError("Invalid email format.");
      return;
    }

    const payload = { email, message };
    setLoading(true)
    try {
      await axios.post(
        "/api/feedback",payload,
        { headers: { "Content-Type": "application/json" } }
      );
      close({ status: false, congrats: true});
      setLoading(false)
      setEmail("")
      setMessage("")
      // showNotification("success", 'Your website has been submitted successfully')
     
    } catch (error) {
      console.error("Error submitting form:", error);
      close({ status: false, showPopup: true, email, message: "fail" });
      setLoading(false)
      // showNotification("error", 'There was an error submitting your website')
    }
   
    
  };

  return (
    visible && (
      <div className="w-full h-full flex items-center justify-center bg-overlay fixed top-0 left-0 z-20">
        <div className="relative p-6 pt-20 bg-[#F8F7F1] border text-center w-full max-w-[485px]">
          <Image
            src={Right_Arrow}
            onClick={handleBack}
            alt="close"
            width={40}
            height={40}
            className="absolute left-4 top-8 cursor-pointer rotate-180"
          />
          <h1 className="font-bold text-[#1C1C1C] text-24 tablet:text-32">Give us feedback</h1>
          <div className="text-left mt-10">
            <label htmlFor="email" className="font-bold">Your email address</label>
            <input
              type="email"
              name="email"
              placeholder="sample@gmail.com"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setError(null);
              }}
              className={`px-3 py-2 mt-2 w-full bg-transparent shadow-darkbox border-[#1C1C1C] border ${error && "border-red-500"}`}
            />
            {error && <p className="text-red-500 text-sm">{error}</p>}
          </div>
          <div className="text-left mt-5">
            <label htmlFor="message" className="font-bold">Give us your feedback</label>
            <textarea
              name="message"
              rows={5}
              placeholder="Type your idea"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="px-3 py-2 mt-2 w-full bg-transparent shadow-darkbox border-[#1C1C1C] border"
            />
          </div>
          <button
            className="py-3 px-4 mt-5 text-16 w-full bg-[#FFCC00] border-[#1C1C1C] border shadow-darkbox"
            onClick={handleSend}
          >
            Give us feedback{loading && "..."}
          </button>
          <button
            className="py-3 px-4 mt-5 text-16 w-full bg-white text-[#1c1c1c] border-[#1C1C1C] border shadow-darkbox"
            onClick={handleClose}
          >
            Cancel
          </button>
        </div>
      </div>
    )
  );
}
