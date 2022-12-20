import React from 'react'
import Link from 'next/link'

const Submit1 = () => {
  return ( 
    <div id='main' className='w-full h-screen text-center'>
        <div className='max-w-[1230px] w-full h-full mx-auto p-2 flex justify-center items-center'>
            <div>
                <h1 className='py-4 text-4xl font-bold text-gray-700'>Wow You Are <span className='text-[#ff5e00]'>Awesome!</span></h1>
              <div className='pt-4'>
              <Link href='/Submit'>
              <button className='bg-orange-600 text-white p-2 rounded'>Next Materi</button>
              </Link>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Submit1