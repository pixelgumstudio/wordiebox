import CopyButton from '@/components/copy-content';
import { allColors } from '@/lib/colors';
import { useEffect, useState } from 'react';

interface ColorObject {
  name: string;
  hex: string;
  rgb: string;
  theme: string;
  group: string;
}

const Generator = () => {
  const [length, setLength] = useState(1);
  const [colors, setColors] = useState<ColorObject[]>([]);
  const [defaultColors, setDefaultColors] = useState<ColorObject[]>([]);

  useEffect(() => {
      setDefaultColors(allColors)
  }, []);

  const generateColors = () => {
    const colors = [];
    for (let i = 0; i < length; i++) {
      const randomColor = getRandomColor();
      colors.push(randomColor);
    }
    setColors(colors);
  };

  const getRandomColor = () => {
    return defaultColors[Math.floor(Math.random() * defaultColors.length)];
  };

  const options = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setLength(Number(event.target.value));
  };

  return (
    <div className="w-full max-w-fit mx-auto">
      <div className="flex w-fit gap-2 items-center mx-auto mb-6">
        <h4 className="text-24 text-grey-900">Number of Colors</h4>
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
            <svg
              className="fill-current h-4 w-4"
              xmlns="(link unavailable)"
              viewBox="0 0 20 20"
            >
              <path d="M5 8l5-5 5 5H5zm10 4H5l5 5 5-5z" />
            </svg>
          </div>
        </div>
      </div>
      <button
        onClick={generateColors}
        className={`w-full text-black border-[#1C1C1C] bg-[#FC0] border shadow-darkbox py-3 px-2 text-16 font-medium hover:bg-[#edba00]`}
        
      >
        Generate Random Colors
      </button>
      <div className="flex flex-wrap justify-center w-fit mt-3 mx-auto gap-5">
        {colors.length > 0 &&
          colors.map((color, index) => (
            <p
              key={index}
              className={`text-center flex flex-col w-fit text-black border-[#1C1C1C] bg-[#FFD2C2] border shadow-transparent p-3 tablet:p-4 text-15  capitalize font-medium hover:bg-[#e2c9ff]`}
              style={{ backgroundColor: `#${color.hex}`, color: `${color.hex === "000000" ? "#FFFFFF" : "000000"}`}}
            >
              <span className='font-semibold'>{color.name}</span>
              <span>Hex:#{color.hex}</span>
              <span>RGB:{color.rgb}</span>
            </p>
          ))}
      </div>
      {colors && (
        <div className="mt-10 grid gap-4 mb-10 w-full max-w-[384px] mx-auto">
          <CopyButton
            text="Copy Colors"
            size="full"
            style="bg-white text-[#1c1c1c]"
            textToCopy={colors.map((color) => `${color.name} (#${color.hex}, RGB:${color.rgb})`)}
          />
        </div>
      )}
    </div>
  );
};

export default Generator;
