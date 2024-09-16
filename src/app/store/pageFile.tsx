import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import Integrating from "/public/Integrating.png"
import Words from "/public/word-library.png"
import Names from "/public/name-library.png"
import Link from "next/link";
const PageFile = () => {
  const card = (
    heading: string,
    image: string | StaticImport,
    paragraph: string,
    link: string,
  ) => {
    return (
      <div className="w-full max-w-[323px] laptop:max-w-full">
        <Image src={image} alt={heading}/>
        <Link href={`https://olayanjuidris.gumroad.com/l${link}`} target="_blank">
        <h2 className="text-20 tablet:text-24 text-left font-semibold mt-6 mb-2">{heading}</h2>
        <p className="text-16 text-left">{paragraph}</p></Link>
      </div>
    );
  };
  return (
    <div className="w-full bg-[#FFFFFF]" id="hero">
      <div className="w-full px-4 tablet:px-6 laptop:px-0 mx-auto py-[50px] tablet:py-[80px] laptop:py-[100px]">
        <div className="relative text-left mb-8 flex flex-col gap-6 tablet:justify-center tablet:items-center">
          <div className="relative w-full laptop:max-w-[1152px] px-4 tablet:px-6 laptop:px-8 desktop:px-0 x-auto">
            <h1 className="text-24 laptop:text-48 font-semibold mb-4 text-[#1c1c1c] w-full max-w-[670px]">Purchase wordiebox apps from our store</h1>
            <p className="text-16 tablet:text-24 text-left mb-6 tablet:mb-10 w-full max-w-[670px]">
              Explore a diverse selection of source codes, word library and name
              library in multiple languages all in one location!
            </p>
            <div className="flex flex-col ipad:flex-row ipad:flex-wrap laptop:flex-nowrap ipad:gap-4">
              {card(
                "Wordiebox apps Source code",
                Integrating,
                "Get access to our source code to build amazing Writing, Editing and Learning tools as we build.",
                "/wordieboxsourcecode?layout=profile"
              )}
                  {card(
                "16k+ Word library",
                Words,
                "Download our 16k+ word library available in Excel and JSON file.",
                "/wordgeneratorlibrary?layout=profile"
              )}
                  {card(
                "12k+ Name library",
                Names,
                "Download our 16k+ word library available in Excel and JSON file.",
                "/namegeneratorlibrary?layout=profile"
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageFile;
