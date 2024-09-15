import React, { useEffect, useState } from "react";

interface PopupProps {
  visible: boolean;
  status: string;
  email: string;
  updateView: (value: boolean) => void;
}

type Feedback = {
  status: string;
  title: string;
  body: string;
};

export default function Popup({ visible, status, email, updateView }: PopupProps) {
  const [content, setContent] = useState<Feedback | null>(null);

  const feedbackData: Feedback[] = [
    {
      status: "success",
      title: "Congrats",
      body: `Your email address ${email} has been added to our waitlist successfully.`,
    },
    {
      status: "thanks",
      title: "Thank You",
      body: "Your idea has been received successfully. We will reach out if we need more information.",
    },
    {
      status: "used",
      title: "Oops",
      body: `${email} is already registered. Thanks for joining our waitlist!`,
    },
    {
      status: "fail",
      title: "Oops",
      body: "Email not accepted. Please try again.",
    },
    {
      status: "message",
      title: "Message",
      body: email,
    },
  ];

  useEffect(() => {
    const feedback = feedbackData.find((item) => item.status === status);
    setContent(feedback || null);
  }, [ status]);

  return (
    visible &&
    content && (
      <div className="w-full h-full flex items-center justify-center bg-overlay fixed top-0 left-0 z-20">
        <div className="p-6 bg-[#F8F7F1] border text-center w-full max-w-[398px]">
          <h2 className={`text-48 font-bold ${status === "success" || status === "thanks" ? "text-[#00A33F]" : "text-[#F64300]"}`}>
            {content.title}
          </h2>
          <p className="text-20">{content.body}</p>
          {status !== "message" && (
            <button
              onClick={() => updateView(false)}
              className="mt-10 cursor-pointer bg-[#FC0] hover:bg-[#EDBA00] border-[#1C1C1C] border py-2 px-2 text-sm font-medium"
            >
              Close
            </button>
          )}
        </div>
      </div>
    )
  );
}
