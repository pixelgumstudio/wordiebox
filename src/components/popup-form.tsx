"use client";
import Image from "next/image";
import React, { useState } from "react";
import Close from "/public/cancel.svg";
import axios from "@/lib/axios";

interface FormPopupProps {
  visible: boolean;
  close: (response: any) => void;
}

export default function FormPopup({ visible, close }: FormPopupProps) {
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<Boolean>(false);

  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  const handleClose = () => {
    close({ status: false, showPopup: false, email });
  };

  const handleSend = async () => {
    if (!email.match(emailRegex)) {
      setError("Invalid email format.");
      return;
    }

    const payload = { email, idea: message };
    setLoading(true)
    try {
      await axios.post("suggestion", payload);
      close({ status: false, showPopup: true, email, message: "thanks" });
      setLoading(false)

    } catch (error) {
      close({ status: false, showPopup: true, email, message: "fail" });
      setLoading(false)
    }
    
  };

  return (
    visible && (
      <div className="w-full h-full flex items-center justify-center bg-overlay fixed top-0 left-0 z-20">
        <div className="relative p-6 bg-[#F8F7F1] border text-center w-full max-w-[398px]">
          <Image
            src={Close}
            onClick={handleClose}
            alt="close"
            width={20}
            height={20}
            className="absolute right-2 top-2 cursor-pointer"
          />
          <h1 className="font-bold text-[#1C1C1C] text-24 tablet:text-32">Suggest an app idea</h1>
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
              className={`px-3 py-2 mt-2 w-full bg-transparent border-[#1C1C1C] border ${error && "border-red-500"}`}
            />
            {error && <p className="text-red-500 text-sm">{error}</p>}
          </div>
          <div className="text-left mt-5">
            <label htmlFor="message" className="font-bold">Tell us about your idea</label>
            <textarea
              name="message"
              rows={5}
              placeholder="Type your idea"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="px-3 py-2 mt-2 w-full bg-transparent border-[#1C1C1C] border"
            />
          </div>
          <button
            className="p-2 mt-5 w-full bg-[#FFCC00] border-[#1C1C1C] border"
            onClick={handleSend}
          >
            Submit your idea{loading && "..."}
          </button>
        </div>
      </div>
    )
  );
}
