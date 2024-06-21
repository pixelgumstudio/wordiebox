import Logo from '/public/Logo.svg'
import Link from "next/link"
import Image from 'next/image'


const Footer = () => {
  return (
    <div className='w-full' id='footer'>
      <div className='w-full laptop:max-w-[1152px] px-4 tablet:px-6 laptop:px-8 xl:px-0  mx-auto py-[40px] tablet:py-[80px] laptop:py-[100px]'>
        <div className='flex flex-col gap-[153px;] laptop:flex-row laptop:items-start laptop:w-fit'>
          <Link href="/" className="flex items-center relative w-[149px] h-[37px]">
            <Image src={Logo} fill className=" mr-3"
              alt="Wordiebox Logo" />
          </Link>

          <div className='flex flex-col gap-3 desktop:gap-4'>
            <h2 className='text-[16px] font-semibold leading-[22px] text-[#484848] mb-2'>PRODUCTS</h2>
            <Link  href='/#works' className='text-sm font-normal text-[#484848] laptop:text-[16px] leading-[22px] '>How it works</Link>
            <Link  href='/#faq' className='text-sm font-normal text-[#484848] laptop:text-[16px] leading-[22px] '>Points system</Link>
            <Link  href='/#pricing' className='text-sm font-normal text-[#484848] laptop:text-[16px] leading-[22px] '>Leaderboard</Link>
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