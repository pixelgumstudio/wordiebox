import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'

const Card = ({image, color, title, description, link}:{image: string, color: string, title: string, description: string, link:string}) => {

    // const imageUrl = typeof image === 'string' ? image : image?.src || ''

    return (
      <div className='group w-full max-w-[360px] flex h-auto dark:text-white laptop:w-[31%] hover:border-[#1C1C1C] hover:border hover:bg-white hover:shadow-darkbox p-4 text-16 font-medium focus:outline-none mb-6'>
      <Link href={link} className='flex text-left gap-4 tablet:max-w-[528px]'>
        <Image src={image} alt={title} width={100} height={100} className={`bg-${color} w-15 h-15`} />
        <div>
          <p className='font-semibold w-full max-w-[255px] text-16 text-[#2E2E27] dark:text-[#FFFFFF] mb-2 group-hover:text-[#2E2E27]'>
            {title}
          </p>
          <p className='text-16 text-[#64645F] dark:text-[#FFFFFF] font-normal group-hover:text-[#64645F]'>
            {description}
          </p>
        </div>
      </Link>
    </div>
    
    )
  }
  
  export default Card