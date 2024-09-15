"use client"
import Link from "next/link"
import Image from 'next/image'
import Logo from '/public/Logo.svg'
import { usePathname } from "next/navigation"

const Navbar = () => {
const pathname = usePathname()
    return (
        <div className=" w-full bg-[#FFFFFF] border-b border-b-[#8B8B8B] px-4 tablet:px-6 laptop:px-8 xl:px-0 fixed top-0 z-20">
            <nav className="sticky top-0 z-10 flex justify-center items-center h-[64px]">
                <div className="flex items-center justify-between w-full laptop:max-w-[1152px] mx-auto">
                    <Link href='/' className="flex items-center">
                        <Image src={Logo} width="119" height="37" className="w-[119px] h-[37px] mr-3"
                            alt="Game Logo" />
                    </Link>
                    <div className="flex items-center gap-5 font-medium">
                    <Link href='/' className={` ${pathname === '/' && 'border-[#1C1C1C] bg-[#FFF5C4] border shadow-darkbox'} flex items-center w-fit text-black hover:border-[#1C1C1C] hover:bg-[#FFF5C4] hover:border hover:shadow-darkbox py-[6px] px-2 text-16 font-medium`}>Apps</Link>
                    <Link href='/about-us' className={` ${pathname === '/about-us' && 'border-[#1C1C1C] bg-[#FFF5C4] border shadow-darkbox'} flex items-center w-fit text-black hover:border-[#1C1C1C] hover:bg-[#FFF5C4] hover:border hover:shadow-darkbox py-[6px] px-2 text-16 font-medium`}>About Us</Link>
                    <Link href='/store' className={` ${pathname === '/store' && 'border-[#1C1C1C] bg-[#FFF5C4] border shadow-darkbox'} flex items-center w-fit text-black hover:border-[#1C1C1C] hover:bg-[#FFF5C4] hover:border hover:shadow-darkbox py-[6px] px-2 text-16 font-medium`}>Store</Link>
                    </div>
                </div>
            </nav>
        </div>


    )
}

export default Navbar