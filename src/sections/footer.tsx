import Logo from'/public/Logo.svg'
import Link from "next/link"
import Generator from '../app/color-generator/generateColors';
import Image from'next/image'


const Footer = () => {
  return (
    <div className='w-full bg-[#FBF4EE]' id='footer'>
      <div className='w-full laptop:max-w-[1152px] px-4 tablet:px-6 laptop:px-8 xl:px-0  mx-auto py-[40px] tablet:py-[80px] laptop:py-[100px]'>
        <div className='flex flex-col gap-y-10 tablet:gap-y-20 laptop:flex-row laptop:justify-between  laptop:items-start laptop:w-full'>
          <Link href="/" className="flex items-center relative w-[149px] h-[37px]">
            <Image src={Logo} fill className=" mr-3"
              alt="Wordiebox Logo" />
          </Link>

          <div className='flex flex-col gap-3 desktop:gap-4'>
            <h2 className='text-[16px] font-semibold leading-[22px] text-[#484848] mb-2'>Generators</h2>
            <Link  href='/random-word-generator' className='text-sm font-normal text-[#484848] laptop:text-[16px] leading-[22px]'>Random Word Generator</Link>
            <Link  href='/letter-generator' className='text-sm font-normal text-[#484848] laptop:text-[16px] leading-[22px]'>Random Letter Generator</Link>
            <Link  href='/cursive-text-generator' className='text-sm font-normal text-[#484848] laptop:text-[16px] leading-[22px]'>Cursive Text Generator</Link>
            <Link  href='/pokemon-name-generator' className='text-sm font-normal text-[#484848] laptop:text-[16px] leading-[22px]'>Pokemon Name Generator</Link>
            <Link  href='/password-generator' className='text-sm font-normal text-[#484848] laptop:text-[16px] leading-[22px]'>Password Generator</Link>
            <Link  href='/random-state-generator' className='text-sm font-normal text-[#484848] laptop:text-[16px] leading-[22px]'>Random State Generator</Link>
            <Link  href='/random-country-generator' className='text-sm font-normal text-[#484848] laptop:text-[16px] leading-[22px]'>Random Country Generator</Link>
            <Link  href='/choice-generator' className='text-sm font-normal text-[#484848] laptop:text-[16px] leading-[22px]'>Random Choice Generator</Link>
            <Link  href='/string-generator' className='text-sm font-normal text-[#484848] laptop:text-[16px] leading-[22px]'>Random String Generator</Link>
            <Link  href='/color-generator' className='text-sm font-normal text-[#484848] laptop:text-[16px] leading-[22px]'>Random Color Generator</Link>
            <Link  href='/date-generator' className='text-sm font-normal text-[#484848] laptop:text-[16px] leading-[22px]'>Random Date Generator</Link>
            <Link  href='/georgian-names-generator' className='text-sm font-normal text-[#484848] laptop:text-[16px] leading-[22px]'>Random Name Generator</Link>

          </div>
          <div className='flex flex-col gap-3 desktop:gap-4'>
            <h2 className='text-[16px] font-semibold leading-[22px] text-[#484848] mb-2'>Other Products</h2>
            <Link  href='/word-of-the-day' className='text-sm font-normal text-[#484848] laptop:text-[16px] leading-[22px]'>Word Of The Day</Link>
            <Link  href='/character-counter' className='text-sm font-normal text-[#484848] laptop:text-[16px] leading-[22px]'>Character Counter</Link>
            <Link  href='/word-counter' className='text-sm font-normal text-[#484848] laptop:text-[16px] leading-[22px]'>Word Counter</Link>
            <Link  href='/capitalization-tool' className='text-sm font-normal text-[#484848] laptop:text-[16px] leading-[22px]'>Capitalize My Title</Link>
            <Link  href='/morse-code-translator' className='text-sm font-normal text-[#484848] laptop:text-[16px] leading-[22px]'>Morse Code Generator</Link>
            <Link  href='/strikethrough-text-generator' className='text-sm font-normal text-[#484848] laptop:text-[16px] leading-[22px]'>Strikethrough Text</Link>
            <Link  href='/randomize-list' className='text-sm font-normal text-[#484848] laptop:text-[16px] leading-[22px]'>List Randomizer</Link>

          </div>
          <div className='flex flex-col gap-3 desktop:gap-4'>
            <h2 className='text-[16px] font-semibold leading-[22px] text-[#484848] mb-2'>CONTACT INFORMATION</h2>
            <a href="mailto:pixelgum.design@gmail.com" className='text-sm font-normal text-[#484848] laptop:text-[16px] leading-[22px] underline'>Pixelgum.design@gmail.com</a>
          </div>
        </div>
      </div>
    </div>)
}

export default Footer