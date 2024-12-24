import React from "react";

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
  return (
    <>
      <button
        onClick={task}
        className={`w-fit mx-auto text-black border-[#1C1C1C] bg-[#FC0] border shadow-darkbox py-3 px-15 text-16 font-medium hover:bg-[#edba00]`}
      >
        {text}
      </button>
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
