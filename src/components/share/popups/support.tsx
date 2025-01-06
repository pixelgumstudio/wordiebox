import Image from "next/image";
import React, { useEffect, useState } from "react";
import Close from "/public/cancel.svg";


interface PopupProps {
  visible: boolean;
  updateView: (response: any) => void;
}


export default function Support({ visible, updateView }: PopupProps) {
  const handleClose = () => {
    updateView({ status: false, popup: false});
  };


  return (
   visible &&
      <div className="w-full h-full flex items-center justify-center bg-overlay fixed top-0 left-0 z-20">
        <div className="relative p-6 pt-20 bg-[#F8F7F1] border text-center w-full max-w-[485px]">
        <Image
            src={Close}
            onClick={handleClose}
            alt="close"
            width={32}
            height={32}
            className="absolute right-4 top-8 cursor-pointer"
          />
          <h2 className={`text-32 font-bold`}>
          Enjoying our app? Share your feedback or Support us with a small token! ❤️
          </h2>
        <div className="flex flex-col gap-6 mt-10 ">
        <a href="https://olayanjuidris.gumroad.com/l/wordieboxsupport" target="_blank" rel="norefferer"
              onClick={() => updateView({status: false, popup: false})}
              className="cursor-pointer bg-[#FC0] hover:bg-[#EDBA00] shadow-darkbox border-[#1C1C1C] border py-3 px-4 mt-5 text-16 font-medium"
            >
              Support us with a token
            </a>
            <button
              onClick={() => updateView({status: true, popup: true})}
              className="cursor-pointer bg-[#1C1C1C] hover:bg-[#1C1C1C] shadow-darkbox border-[#1C1C1C] text-white border py-3 px-4 mt-5 text-16 font-medium"
            >
              Give us feedback 
            </button>
        </div>
           
        </div>
      </div>
  );
}
