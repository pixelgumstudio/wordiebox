/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { FC } from "react";

import ErrorBoundary from "@/functions/ErrorBoundary";
import Layout from "@/components/layout";
import Generator from "./generateColors";

const PageFile: FC = () => {
  return (
    // <ErrorBoundary>
    <Layout title="Random Color Generator">
      <div className="w-full laptop:max-w-[947px] px-4 tablet:px-6 laptop:px-0 desktop:px-0 mx-auto">
        <Generator />
        <div className="mt-[100px] flex flex-col gap-[10px] text-black border border-[#1C1C1C] bg-[#FFFFFF] shadow-darkbox p-4 tablet:p-6 w-full mx-auto my-6">
          <p className="text-16 tablet:text-20 text-left font-semibold">
            What is Random Color Generator{" "}
          </p>
          <p className="text-14 tablet:text-16 text-left">
            The Random Color Generator is an easy-to-use tool that provides
            color information in three formats: the color name, hex code, and
            RGB code. You can choose the format that best suits your needs,
            whether for design, coding, or any other purpose. By default, the
            generator displays a single random color, but you can opt to
            generate up to 50 colors at a time. Simply select the desired number
            of colors and click the "Generate" button to instantly display a
            variety of random colors.
          </p>
          <p className="text-14 tablet:text-16 text-left">
            While you might have found the Random Color Generator for a specific
            purpose, it offers a range of applications beyond the obvious. We've
            listed some common uses below, which might inspire additional ways
            you could benefit from this tool.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default PageFile;
