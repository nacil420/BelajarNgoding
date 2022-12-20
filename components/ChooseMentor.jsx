import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Org1 from '../public/images/org1.jpg'
import Org2 from '../public/images/org2.jpg'


const ChooseMentor = () => {
  return (
    <div className='w-full h-auto py-16 '>
        <div className='max-w-[1240px] mx-auto px-2 pt-20 py-16'>
            <p className='text-4xl font-bold text-center items-center tracking-widest uppercase pb-8 text-orange-600'>MY MENTOR</p>
            <div className='grid md:grid-cols-2 gap-8'>

            <div className='realtive bg-white flex items-center justify-center h-auto w-full shadow-2xl shadow-black-800 rounded-xl p-4 group hover:bg-gradient-to-r from-[#858484] to-[#cecece]'>
            <Image className='rounded-xl group-hover:opacity-10' src={Org1} alt='/'/>
            <div className='hidden group-hover:block absolute top-[50] left-[50] translate-x-[-50] translate-y-[-50]'>
            <h3 className='text-2xl text-orange-600 font-bold tracking-wider text-center'>BASIC</h3>
            <p className='pb-4 pt-2 text-white text-center'>Max Alexander Baldry</p>
        </div>
    </div>

    <div className='realtive bg-white flex items-center justify-center h-auto w-full shadow-2xl shadow-black-800 rounded-xl p-4 group hover:bg-gradient-to-r from-[#858484] to-[#cecece]'>
    <Image className='rounded-xl group-hover:opacity-10' src={Org2} alt='/'/>
<div className='hidden group-hover:block absolute top-[50] left-[50] translate-x-[-50] translate-y-[-50]'>
    <h3 className='text-2xl text-orange-600 font-bold tracking-wider text-center'>BACKEND</h3>
    <p className='pb-4 pt-2 text-white text-center'>Jessica Vdic</p>
</div>
</div>

            </div>
        </div>
    </div>
  )
}

export default ChooseMentor