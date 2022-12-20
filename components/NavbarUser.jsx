import Image from 'next/image'
import Link from 'next/link'
import React, {useState, useEffect} from 'react'
import {AiOutlineClose,AiOutlineMenu} from 'react-icons/ai'
import {FaGithub, FaInstagramSquare, FaTwitter} from 'react-icons/fa'
import {BsWhatsapp} from 'react-icons/bs'
import navLogo from '../public/images/logo.png'
import logoImg from '../public/images/logo.png'

const NavbarUser = () => {
    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }

    return(
        <div className="fixed w-full h-20 shadow-xl z-[100]">
            <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16 '>
               <Link href='/LandingPagesUser'> <Image src={logoImg} alt="/" width='50' height='50' /> </Link>
            <div>
                <ul className='hidden md:flex pr-4'>
                    <Link href='/LandingPagesUser'>
                        <li className='ml-10 text-sm uppercase hover:border-b border-orange-600'>Home</li>
                    </Link>
                    <Link href='/Course'>
                        <li className='ml-10 text-sm uppercase hover:border-b border-orange-600'>Course</li>
                    </Link>
                    <Link href='/Mentor'>
                        <li className='ml-10 text-sm uppercase hover:border-b border-orange-600'>Mentor</li>
                    </Link>
                    <Link href='/Profile'>
                        <li className='ml-10 text-sm uppercase hover:border-b border-orange-600'>Profile</li>
                    </Link>
                </ul>
                <div onClick={handleNav} className='md:hidden'>
                    <AiOutlineMenu size={25}/>
                </div>
            </div>
            </div>

        <div className={nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-orange-600/70' : "" }>
            <div className={nav ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500' : "fixed left-[-100%] top-0 p-10 h-screen ease-in duration-500"}>
            <div>
                <div className='flex w-full items-center justify-between'>
                    <Image src={navLogo} alt='/' width='65' height='35'  />
                <div onClick={handleNav} className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'>
                    <AiOutlineClose />
                </div>
                </div>
                <div className='border-b border-orange-600 my-4'>
                    <p className='w-[85%] md:w[90%] py-4'>Let's Learn Coding From Now</p>
                </div>
            </div>
            <div className='py-4 flex flex-col'>
                <ul className='uppercase'>
                    <Link href='/LandingPagesUser'>
                        <li className='py-4 text-sm hover:text-orange-600'>Home</li>
                    </Link>
                    <Link href='/Course'>
                        <li className='py-4 text-sm hover:text-orange-600'>Course</li>
                    </Link>
                    <Link href='/Mentor'>
                        <li className='py-4 text-sm hover:text-orange-600'>Mentor</li>
                    </Link>
                    <Link href='/Profile'>
                        <li className='py-4 text-sm hover:text-orange-600'>Profile</li>
                    </Link>
                </ul>
                <div className='pt-20'>
                    <p className='uppercase tracking-widest text-orange-600'>Let's Connect</p>
                <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300 '>
                        <a href='https://www.instagram.com/ramdhanihadiw_/'><FaInstagramSquare/></a>
                    </div>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300 '>
                        <a href='https://github.com/nacil420'><FaGithub/></a>
                    </div>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300 '>
                        <a href='https://www.ramdhanihw420@gmail.com'><FaTwitter/></a>
                    </div>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300 '>
                        <a href='https://wa.me/6281225568420'><BsWhatsapp/></a>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        
        </div>
    )
}

export default NavbarUser