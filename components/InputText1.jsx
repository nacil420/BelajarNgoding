import React from 'react'
import Link from 'next/link'

const InputText1 = () => {
  return ( 
    <div id='main' className='w-full h-auto pt-[8rem] text-center pb-4'>
        <div className='max-w-[1230px] w-auto h-full mx-auto  p-2 flex justify-center items-center'>
            <div>
                <h1 className='py-4 text-4xl font-bold text-gray-700'>BASIC</h1>
            <div className='text-justify justify-center py-6'>
                
            </div>
            <div className='justify-center items-center'>
            <p className='text-center'>Let's Try</p>
            <input type='text' className='border-4 p-16 rounded border-orange-600'/>
            </div>
            <div className='py-8'>
                <Link href='/Submit'>
            <button className='p-4 rounded bg-orange-600 text-white'>Submit</button>
            </Link>
            </div>
            </div>
        </div>
    </div>
  )
}

export default InputText1