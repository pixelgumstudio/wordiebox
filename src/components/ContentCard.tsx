// components/ContentCard.tsx
import React from "react";

interface Section {
  header?: string;
  title?: string;
  content?: string;
  children?: any;
}

interface ContentCardProps {
  sections: Section[];
  
}

const ContentCard: React.FC<ContentCardProps> = ({ sections }) => {
  return (
    <div className="w-full laptop:max-w-[947px] mx-auto mt-20 laptop:mt-25 dark:text-[#1C1C1C]">
      <div className="flex flex-col gap-[10px] text-black border border-[#1C1C1C] bg-[#FFFFFF] dark:text-[#FFFFFF] dark:bg-[#1C1C1C] dark:border-[#FFFFFF] shadow-darkbox p-4 tablet:p-6 w-full mx-auto my-6">
        {sections.map((section, index) => (
          <div key={index} className="flex flex-col">
             {section.header && <p className="text-16 tablet:text-20 text-left font-semibold">
              {section.header}
            </p>}
            {section.title && <p className="text-16 tablet:text-20 text-left font-semibold mb-2">
              {section.title}
            </p>}
            {section.content && <p className="text-14 tablet:text-16 text-left mb-2">
              {section.content}
            </p>}
            {section.children && <div className="content__children">
              {section.children}
            </div>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContentCard;
