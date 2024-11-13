"use client";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { websiteLinks } from "@/lib/links";
import { createSlug } from "@/components/slug";
import BackButton from "@/components/back-button";
import Image from "next/image";
import Link from "next/link";

const PageFile = ({pageName}) => {
  const pathname = usePathname();
  // const [pageName, setPageName] = useState<string>("");

  // useEffect(() => {
  //   const currentPage = pathname.split("/")[2];
  //   if (currentPage) {
  //     setPageName(currentPage);
  //   }
  // }, [pathname]);

  // Find the current page's data
  const currentWebsite = websiteLinks.find(
    (website) => createSlug(website.title) === pageName
  );

  return (
    <div className="w-full bg-[#FFFFFF] py-[50px] tablet:py-[80px] laptop:py-[100px]">
      <div className="mb-15 relative mx-4 tablet:mx-6 laptop:mx-8 desktop:mx-auto max-w-[1152px]">
        <BackButton />
      </div>

      <div className="relative px-4 tablet:px-6 laptop:px-8 desktop:px-0 max-w-[1152px] mx-auto text-left mb-8">
        <div className="relative w-full laptop:max-w-[1021px]">
          {currentWebsite && (
            <div className="grid gap-6 laptop:grid-cols-5 laptop:gap-8">
              <div className="laptop:col-span-2">
                <Image
                  src={currentWebsite.image}
                  alt={currentWebsite.title}
                  width={264}
                  height={278}
                  className="w-full h-auto max-h-[574px]"
                />
              </div>
              <div className="laptop:col-span-3 flex flex-col gap-3 w-full max-w-[555px]">
                <p className="font-semibold w-full max-w-[255px] text-16 tablet:text-24 text-[#1C1C1C] mb-1">
                  {currentWebsite.title}
                </p>
                <p className="text-16 tablet:text-24 text-[#636363] font-normal">
                  {currentWebsite.description}
                </p>
                <a
                  href={currentWebsite.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-[#1C1C1C] bg-[#FFF5C4] border shadow-darkbox flex items-center w-full text-center text-black hover:border-[#1C1C1C] hover:bg-[#FFF5C4] hover:border hover:shadow-darkbox py-[6px] px-2 text-16 font-medium"
                >
                  <span className="mx-auto">Visit Website</span>
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PageFile;
