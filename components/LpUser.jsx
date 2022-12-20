import React from 'react'
import Link from 'next/link'

const LpUser = () => {
  return ( 
    <div id='main' className='w-full h-screen text-center'>
        <div className='max-w-[1230px] w-full h-full mx-auto p-2 flex justify-center items-center'>
            <div>
                <p className='uppercase text-sm tracking-widest text-gray-600'>LET'S LEARN SOMETHING TOGETHER</p>
                <h1 className='py-4 text-4xl font-bold text-gray-700'>Hi, We are <span className='text-[#ff5e00]'>Belajar Coding</span></h1>
                <h1 className='py-1 text-4xl font-bold text-gray-700'>Help You to Become a Programmer</h1>
                <p className='py-4 text-gray-800 max-w-[70%] m-auto'>
                We will guide you to become programmers, We have provided some easy learning materials and methods so you can understand them easily
                </p>
                <Link href='/Course'>
                <button className='text-white justify-center text-center items-center bg-orange-500 rounded p-4 px-8 cursor-pointer hover:scale-105 ease-in duration-300'>Let's Start</button>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default LpUser