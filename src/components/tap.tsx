"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import FormPopup from "./popup-form";
import axios from "@/lib/axios";
import Popup from "./popup";

const Tap = () => {
  const [isScaled, setIsScaled] = useState(false);
  const [count, setCount] = useState(0);
  const [userCount, setUserCount] = useState(0);
  const [showForm, setShowForm] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [status, setStatus] = useState("");
  const [email, setEmail] = useState<string>("");

  // Fetch total clicks from API
  const getClicks = async () => {
    try {
      const response = await axios.get(`clicks`);
      setCount(response.data.data.totalClicks);
    } catch (error) {
      console.error("Error fetching total clicks:", error);
    }
  };

  // Initial effect to load clicks count
  useEffect(() => {
    getClicks();
  }, []);

  // Handle button click event
  const handleClick = async () => {
    setIsScaled(true);
    setTimeout(() => setIsScaled(false), 100);

    setCount((prev) => prev + 1);

    if (userCount < 1) {
      setUserCount((prev) => prev + 1);
      // Increment total users count
      await axios.post("clicks/clicked-users", { users: 1 });
    }

    // Increment total clicks
    await axios.post("clicks", { clicks: 1 });
  };

  // Handle form visibility
  const handleFormClose = (response: any) => {
    setStatus(response.message);
    setShowPopup(response.showPopup);
    setEmail(response.email);
    setShowForm(response.status);
  };

  const handlePopupClose = () => setShowPopup(false);

  return (
    <div className="w-full max-w-[669px] laptop:w-[60%] mx-auto p-8 border border-[#EDEDED] text-16 font-medium laptop:flex laptop:flex-col laptop:justify-center">
      <div className="flex gap-5 laptop:items-center text-left mb-[10px]">
        <p
          onClick={handleClick}
          className={`flex-none w-[80px] h-[80px] laptop:w-[80px] laptop:h-[80px] border-[3px] rounded-full bg-[#FFCC00] shadow-tap-shadow border-white transform transition-transform duration-300 ${
            isScaled ? "scale-110" : "scale-100"
          }`}
        ></p>
        <p className="w-full max-w-[300px] text-24 text-[#484848]">
          This button has been tapped{" "}
          <span className="text-[#C19700] font-semibold">{count} times</span>{" "}
          today!
        </p>
      </div>

      <div className="py-2">
        <p className="text-16 font-normal text-left text-[#484848] laptop:text-20">
          We use this button to track how many users visit this page and use our
          apps. Feel free to explore it. If you like our apps and want us to
          create more, please{" "}
          <Link
            target="_blank"
            href="https://olayanjuidris.gumroad.com/l/wordieboxsupport"
            className="font-semibold border-b border-b-[#64645F]"
          >
            support us.
          </Link>
          <br />
          Have a Word app idea?{" "}
          <span
            onClick={() => setShowForm(true)}
            className="font-semibold cursor-pointer border-b border-b-[#64645F]"
          >
            Suggest it to us.
          </span>
        </p>
      </div>

      <FormPopup visible={showForm} close={handleFormClose} />
      <Popup visible={showPopup} status={status} email={email} updateView={handlePopupClose} />
    </div>
  );
};

export default Tap;
