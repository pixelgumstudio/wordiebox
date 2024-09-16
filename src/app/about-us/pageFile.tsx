"use client";

import Popup from "@/components/popup";
import FormPopup from "@/components/popup-form";
import { useState } from "react";

const PageFile = () => {
  const [showForm, setShowForm] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [status, setStatus] = useState("");
  const [email, setEmail] = useState<string>("");

    // Handle form visibility
    const handleFormClose = (response: any) => {
      setStatus(response.message);
      setShowPopup(response.showPopup);
      setEmail(response.email);
      setShowForm(response.status);
    };
  
    const handlePopupClose = () => setShowPopup(false);

    
  return (
    <div className="w-full bg-[#FFFFFF] py-[50px] tablet:py-[80px] laptop:py-[100px]">
      <div className="relative px-4 tablet:px-6 laptop:px-8 desktop:px-0 max-w-[1152px] mx-auto text-left mb-8">
        <div className="relative w-full laptop:max-w-[1021px]">
          {/* <p className="text-[#757575] font-medium mb-6 tablet:mb-10">ABOUT US</p> */}
          <h2 className="text-24 laptop:text-48 font-semibold mb-4 text-[#1c1c1c]">
            We are a bunch of indie hackers building products. We built this
            tool directory to help you write, edit and learn new words.
          </h2>
          <p className="text-[#484848] text-16 tablet:text-24 tablet:leading-9 text-left mb-6 tablet:mb-10">
            This is a directory of 20+ free tools that can be used to improve
            your writing. This tool consists of automatic generators, counters
            and word tools to help you with word learning tasks. Feel free to  <span
            onClick={() => setShowForm(true)}
            className="underline cursor-pointer"
          >
            suggest a tool
            </span> to us and also <a className="underline" href="https://olayanjuidris.gumroad.com/l/wordieboxsupport">support us</a> on our journey.
          </p>
          <p className="text-[#484848] text-16 tablet:text-24 tablet:leading-9 text-left mb-6 tablet:mb-10">
            These tools were built by our parent company, <a className="underline" href="https://pixelgumstudio.com">Pixelgum Studio.</a> Pixelgum Studio is a design and development studio that partners
            with founders to build products and offer design support. We have
            created tools like the <a className="underline" href="https://pitchdeck.design">Pitch Deck Design</a> platform, which helps
            founders find inspiration, create pitch decks, and purchase
            templates. Also, we publish the <a className="underline" href="https://indieniche.substack.com/">Indieniche Newsletter,</a> a weekly
            publication that features founder stories, tools, and growth hacks
            to support the entrepreneurial community.
          </p>
          <p className="text-20 tablet:text-32 text-left font-semibold">
            For sponsorships
          </p>
          <p className="text-[#484848] text-16 tablet:text-24 tablet:leading-9 text-left mb-6 tablet:mb-10">
            As we grow, we are always welcome to sponsorships and
            collaborations. To reach us,<br/> please write to <a className="underline" href="mailto:pixelgumstudio@gmail.com">
              Pixelgumstudio@gmail.com
            </a>
          </p>
        </div>
      </div>
      <FormPopup visible={showForm} close={handleFormClose} />
      <Popup visible={showPopup} status={status} email={email} updateView={handlePopupClose} />
    </div>
  );
};

export default PageFile;
