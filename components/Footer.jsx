import React from 'react'
import {FaGithub, FaInstagramSquare, FaTwitter} from 'react-icons/fa'
import {BsWhatsapp} from 'react-icons/bs'

const Footer = () => {
  return (
    <div className="flex justify-center items-center m-full h-[50%] bg-orange-500">
            <div className="m-auto justify-center rounded-md w-full py-12 grid lg:grid-cols-2 ">
                <div className='flex justify-center items-center pt-4'>
                    <div>
                    <p className='uppercase text-center tracking-widest text-white font-bold'>Let's Connect</p>
                <div className='flex items-center my-4 w-full sm:w-[80%]'>
                    <div className='pr-2'>
                    <div className='bg-orange-600 shadow-sm shadow-white rounded-full  p-3 cursor-pointer hover:scale-105 ease-in duration-300 '>
                        <a href='https://www.instagram.com/ramdhanihadiw_/'><FaInstagramSquare color='white'/></a>
                    </div>
                    </div>
                    <div className='pr-2'>
                    <div className='bg-orange-600 shadow-sm shadow-white rounded-full  p-3 cursor-pointer hover:scale-105 ease-in duration-300 '>
                        <a href='https://github.com/nacil420'><FaGithub color='white'/></a>
                    </div>
                    </div>
                    <div className='pr-2'>
                    <div className='bg-orange-600 shadow-sm shadow-white rounded-full  p-3 cursor-pointer hover:scale-105 ease-in duration-300 '>
                        <a href='https://www.ramdhanihw420@gmail.com'><FaTwitter color='white'/></a>
                    </div>
                    </div>
                    <div className='bg-orange-600  shadow-sm shadow-white rounded-full p-3 cursor-pointer hover:scale-105 ease-in duration-300 '>
                        <a href='https://wa.me/6281225568420'><BsWhatsapp color='white'/></a>
                    </div>
                </div>
                </div>
                </div>

                <div className="right justify-center text-center items-center">
                    <div className="m-auto items-center pt-4">
                        <h1 className='text-white text-4xl font-bold'>LET'S LEARN CODING</h1>
                        <h1 className='text-white text-4xl font-bold'>FROM NOW</h1>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Footer