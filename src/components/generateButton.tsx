import React, { useEffect, useState } from "react";
import Support from "./share/popups/support";
import FeedBack from "./share/popups/feedback";
import FeedBackCongrats from "./share/popups/feedbackComplete";

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
    const item = {
      value,
      expiry: now.getTime() + expiryInHours * 60 * 60 * 1000, // Convert hours to milliseconds
    };
    localStorage.setItem(key, JSON.stringify(item));
  };

  const getWithExpiry = (key: string) => {
    const itemStr = localStorage.getItem(key);
    if (!itemStr) return null;

    const item = JSON.parse(itemStr);
    const now = new Date();

    if (now.getTime() > item.expiry) {
      localStorage.removeItem(key);
      return null;
    }

    return item.value;
  };

  const [popupVisibility, setPopupVisibility] = useState({
    support: false,
    feedback: false,
    congrats: false,
  });

  const handlePopup = () => {
    const popupShown = getWithExpiry("popupShown");
    task(); // Call the task function

    if (!popupShown) {
      setPopupVisibility((prev) => ({ ...prev, support: true }));
      setWithExpiry("popupShown", "true", 12); // 12-hour expiry
    } else {
      console.log("Popup has already been shown.");
    }
  };

  const handleSupport = (res: { status: boolean; popup: boolean }) => {
    setPopupVisibility((prev) => ({
      ...prev,
      feedback: res.status,
      support: res.popup,
    }));
  };

  const handleFeedback = (res: {
    status: boolean;
    goBack: boolean;
    congrats: boolean;
  }) => {
    setPopupVisibility((prev) => ({
      ...prev,
      feedback: res.status,
      support: res.goBack,
      congrats: res.congrats,
    }));
  };

  const handleClosePopup = (res: { status: boolean }) => {
    setPopupVisibility({ support: false, feedback: false, congrats: false });
  };

  useEffect(() => {
    if (!popupVisibility.congrats) return;

    const timeout = setTimeout(() => {
      setPopupVisibility((prev) => ({ ...prev, congrats: false }));
    }, 3000);

    return () => clearTimeout(timeout);
  }, [popupVisibility.congrats]);

  return (
    <>
      <button
        onClick={handlePopup}
        className={`w-fit mx-auto text-black border-[#1C1C1C] bg-[#FC0] border shadow-darkbox py-3 px-15 text-16 font-medium hover:bg-[#edba00]`}
      >
        {text}
      </button>
      <Support
        visible={popupVisibility.support}
        updateView={handleSupport}
      />
      <FeedBack
        visible={popupVisibility.feedback}
        close={handleFeedback}
      />
      <FeedBackCongrats
        visible={popupVisibility.congrats}
        updateView={handleClosePopup}
      />
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
