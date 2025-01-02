"use client"
import React, { useState } from 'react'

interface NumberSelector {
    selected: any;
    text?: string;
  }


const NumberSelector: React.FC<NumberSelector> = ({selected, text="Words"}) => {

        const [length, setLength] = useState(1);
      
      
        const options = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
            const select = (Number(event.target.value));
            setLength(select);
            selected(select) 
        };
      
        return (
                         <div className="flex w-fit gap-2 items-center mx-auto mb-6">
                  <h4 className="text-24 text-grey-900">Number of {text}</h4>
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
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M5 8l5-5 5 5H5zm10 4H5l5 5 5-5z" />
                      </svg>
                    </div>
                  </div>
                </div>
      
                
        );
}

export default NumberSelector