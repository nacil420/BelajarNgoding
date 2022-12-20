import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Bg1 from '../public/images/basic.png'
import Bg2 from '../public/images/backend.png'

const Mclass = () => {
  return (
    <div className='w-full h-auto py-16 '>
        <div className='max-w-[1240px] mx-auto px-2 pt-20 py-16'>
            <p className='text-4xl pb-8 font-bold text-center items-center tracking-widest uppercase text-orange-600'>MY CLASS</p>
            <div className='grid md:grid-cols-2 gap-8'>

            <div className='realtive bg-white flex items-center justify-center h-auto w-full shadow-2xl shadow-black-800 rounded-xl p-4 group hover:bg-gradient-to-r from-[#858484] to-[#cecece]'>
    <Image className='rounded-xl group-hover:opacity-10' src={Bg1} alt='/'/>
<div className='hidden group-hover:block absolute top-[50] left-[50] translate-x-[-50] translate-y-[-50]'>
    <h3 className='text-2xl text-orange-600 font-bold tracking-wider text-center'>BASIC CLASS</h3>
    <p className='pb-4 pt-2 text-white text-center'>HTML,CSS & Java Script</p>
</div>
</div>
<div className='realtive bg-white flex items-center justify-center h-auto w-full shadow-2xl shadow-black-800 rounded-xl p-4 group hover:bg-gradient-to-r from-[#858484] to-[#cecece]'>
    <Image className='rounded-xl group-hover:opacity-10' src={Bg2} alt='/'/>
<div className='hidden group-hover:block absolute top-[50] left-[50] translate-x-[-50] translate-y-[-50]'>
    <h3 className='text-2xl text-orange-600 font-bold tracking-wider text-center'>BACKEND CLASS</h3>
    <p className='pb-4 pt-2 text-white text-center'>Java Script, NextJS, NodeJS, Mongo , etc. </p>
</div>
</div>
            </div>
        </div>
    </div>
  )
}

export default Mclass