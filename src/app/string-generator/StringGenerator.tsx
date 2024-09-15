import CopyButton from "@/components/copy-content";
import { useEffect, useState } from "react";

const StringGenerator = () => {
  const [length, setLength] = useState(2);
  const [includeUppercase, setIncludeUppercase] = useState(false);
  const [includeLowercase, setIncludeLowercase] = useState(false);
  const [includeSymbols, setIncludeSymbols] = useState(false);
  const [string, setString] = useState("");

  const defaultText = {
    uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    lowercase: "abcdefghijklmnopqrstuvwxyz",
    numbers: "0123456789",
    symbols: '!@#$%^&*()_+-=[]{}|;:",.<>?',
  };

  const [text, setText] = useState(defaultText); // Initialize with default text

  useEffect(() => {
    setText(defaultText); // Set default text when the component mounts
  }, []);

  const generateString = () => {
    let charset = "";

    // Modify charset based on selected options
    if (includeUppercase) {
      charset += text.uppercase;
    }
    if (includeLowercase) {
      charset += text.lowercase; // Only lowercase will be added if this is checked
    }
    if (includeSymbols) {
      charset += text.symbols + text.numbers;
    }

    // If no option is selected, return without generating a string
    let generatedString = "";
    if (charset === ""){
      generatedString = "Please Select A Button"
    }else{
      for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      generatedString += charset[randomIndex];
    }
  }
    setString(generatedString);
  };

  const options = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setLength(Number(event.target.value));
  };

  return (
    <div className="w-full max-w-fit mx-auto">
      <div className="">
        <p className={`w-fit text-black border-[#1C1C1C] bg-[#FFF5C4] border shadow-darkbox py-2 px-2 text-16 font-medium`}>
          Characters
        </p>
        <textarea
          name="message"
          rows={10}
          cols={50}
          placeholder="Enter your characters"
          value={`${text.uppercase}\n${text.lowercase}\n${text.numbers}\n${text.symbols}`}
          onChange={(e) => {
            const userInput = e.target.value;
            const uppercase = userInput.match(/[A-Z]/g) || [];
            const lowercase = userInput.match(/[a-z]/g) || [];
            const numbers = userInput.match(/[0-9]/g) || [];
            const symbols = userInput.match(/[^A-Za-z0-9]/g) || [];
            setText({
              uppercase: uppercase.join(''),
              lowercase: lowercase.join(''),
              numbers: numbers.join(''),
              symbols: symbols.join(''),
            });
          }}
          className={`px-5 py-5 mt-2 outline-none text-16 h-fit w-full bg-white !text-[#1C1C1C] border-[#1C1C1C] border shadow-darkbox`}
        />
      </div>

      <div className="flex w-fit gap-2 items-center mx-auto my-6">
        <h4 className="text-24 text-grey-900">String Length</h4>
        <div className="relative inline-block w-[72px] shadow-darkbox">
          <select
            value={length}
            onChange={handleChange}
            className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 shadow leading-tight focus:outline-none focus:shadow-outline"
          >
            {options.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path d="M5 8l5-5 5 5H5zm10 4H5l5 5 5-5z" />
            </svg>
          </div>
        </div>
      </div>

      <div className="grid tablet:grid-cols-2 gap-4 mb-10 w-full max-w-[384px] tablet:max-w-fit mx-auto">
        <label className="checkbox-container w-full flex border bg-white hover:bg-white shadow-darkbox p-3 text-16 font-medium focus:outline-none">
          <input
            type="checkbox"
            className="checkmark"
            checked={includeUppercase}
            onChange={(e) => setIncludeUppercase(e.target.checked)}
          />
          <span className="ml-2">Output in Uppercase</span>
        </label>
        <label className="checkbox-container w-full flex border bg-white hover:bg-white shadow-darkbox p-3 text-16 font-medium focus:outline-none">
          <input
            type="checkbox"
            className="checkmark"
            checked={includeSymbols}
            onChange={(e) => setIncludeSymbols(e.target.checked)}
          />
          <span className="ml-2">Include Symbols</span>
        </label>
        <label className="checkbox-container w-full flex border bg-white hover:bg-white shadow-darkbox p-3 text-16 font-medium focus:outline-none">
          <input
            type="checkbox"
            className="checkmark"
            checked={includeLowercase}
            onChange={(e) => setIncludeLowercase(e.target.checked)}
          />
          <span className="ml-2">Output in Lowercase</span>
        </label>
      </div>

      <button
        onClick={generateString}
        className={`w-full text-black border-[#1C1C1C] bg-[#FC0] border shadow-darkbox py-3 px-2 text-16 font-medium hover:bg-[#edba00]`}
      >
        Generate Random String
      </button>
      {string && (
        <div className="w-fit text-black mx-auto mt-6 border-[#1C1C1C] bg-[#FFD2C2] border shadow-darkbox py-3 px-2 text-16 font-medium">
          <span className="">{string}</span>
        </div>
      )}
      {string !== "" && (
        <div className="mt-10 gap-4 mb-10 w-full max-w-[384px] mx-auto">
          <CopyButton
            text="Copy String"
            size="full"
            style="bg-white text-[#1C1C1C]"
            textToCopy={string}
          />
        </div>
      )}
    </div>
  );
};

export default StringGenerator;
