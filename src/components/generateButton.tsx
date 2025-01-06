import React, { useEffect, useState } from "react";
import Support from "./share/popups/support";
import FeedBack from "./share/popups/feedback";

interface Generate {
  text: string;
  response?: string | string[];
  task: () => void;
  children?: any;
}

const GenerateButton: React.FC<Generate> = ({
  text,
  response,
  task,
  children,
}) => {
  const setWithExpiry = (key: string, value: string, expiryInHours: number) => {
    const now = new Date();

    // Create an item with the value and expiry timestamp
    const item = {
      value,
      // expiry: now.getTime() + expiryInHours * 1000, // Convert hours to milliseconds
      expiry: now.getTime() + expiryInHours * 60 * 60 * 1000, // Convert hours to milliseconds
    };

    localStorage.setItem(key, JSON.stringify(item));
  };

  const getWithExpiry = (key: string) => {
    const itemStr = localStorage.getItem(key);

    // If the item doesn't exist, return null
    if (!itemStr) return null;

    const item = JSON.parse(itemStr);
    const now = new Date();

    // Compare the current time with the expiry time
    if (now.getTime() > item.expiry) {
      // If the item is expired, remove it from storage
      localStorage.removeItem(key);
      return null;
    }

    return item.value;
  };

  const [showPopup, setShowPopup] = useState(false);
  const [showFeedBack, setShowFeedBack] = useState(false);

  const handlePopup = () => {
    const popupShown = getWithExpiry("popupShown");
 // Call the task function
      task();
    if (!popupShown) {
      // Show the popup for the first time
      setShowPopup(true);

      // Set the popup as shown with a 24-hour expiry
      setWithExpiry("popupShown", "true", 12);

     
    } else {
      // Subsequent calls: Do not show the popup
      console.log("Popup has already been shown.");
    }
  };

const support =(res:any)=>{
  console.log(res.status)
  setShowFeedBack(res.status)
  setShowPopup(res.popup)
}
const feedback =(res:any)=>{
  console.log(res.status)
  setShowFeedBack(res.status)
  setShowPopup(res.goBack)
}

  return (
    <>
      <button
        onClick={handlePopup}
        className={`w-fit mx-auto text-black border-[#1C1C1C] bg-[#FC0] border shadow-darkbox py-3 px-15 text-16 font-medium hover:bg-[#edba00]`}
      >
        {text}
      </button>
      <Support visible={showPopup} updateView={support} />
       <FeedBack visible={showFeedBack} close={feedback} />
      {response ? (
        <div className="w-fit text-black mx-auto mt-6 border-[#1C1C1C] bg-[#FFD2C2] border shadow-darkbox py-3 px-2 text-16 font-medium">
          <span className="">{response}</span>
        </div>
      ) : (
        <div className="flex flex-wrap justify-center w-fit mt-3 mx-auto gap-5">
          {children}
        </div>
      )}
    </>
  );
};

export default GenerateButton;
