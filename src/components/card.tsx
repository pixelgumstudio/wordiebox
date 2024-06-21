import { StaticImageData } from 'next/image'
import Link from 'next/link'

const Card = ({image, color, title, description, link}:{image: StaticImageData, color: string, title: string, description: string, link:string}) => {

    const imageUrl = typeof image === 'string' ? image : image?.src || ''

    return (
      <div className='w-full laptop:w-[32.333333%] border-[#1C1C1C] border shadow-darkbox py-[7px] px-[5px] text-16 font-medium focus:outline-none mb-6'>
        <Link href={link} className='flex flex-col text-left  tablet:max-w-[528px]'>
        <div className={`w-full h-[160px] p-5 mb-[10px] relative bg-no-repeat bg-bottom-right`}
         style={{
          backgroundColor: color,
          backgroundImage: `url(${imageUrl})`,
          backgroundPosition: 'bottom right',
          backgroundPositionY: '50px'
        }}>
          <p className='font-semibold w-[200px] leading-[22px] text-[24px] text-[#2E2E27] mb-2 tablet:text-[20px] tablet:font-bold tablet:leading-[28px] tablet:tracking-[-0.8px] laptop:text-[24px] laptop:leading-8 '>{title}</p>
        </div>
        <div className='px-4 py-2'>
        <p className='font-semibold leading-[22px] text-[16px] text-[#2E2E27] mb-2 tablet:text-[20px] tablet:font-bold tablet:leading-[28px] tablet:tracking-[-0.8px] laptop:text-[24px] laptop:leading-8 '>{title}</p>
          <p className='text-[16px] leading-[22px] text-[#64645F] laptop:text-[20px] laptop:leading-[28px]'>{description}</p>
          </div>
     
          </Link>
           </div>
    )
  }
  
  export default Card