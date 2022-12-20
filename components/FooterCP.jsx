import React from 'react'
import {AiOutlineCopyright} from 'react-icons/ai'

const FooterCP = () => {
  return (
    <div className=" justify-center items-center text-center m-full h-auto shadow-2xl shadow-black bg-orange-600">
        <div className="flex m-auto justify-center items-center rounded-md w-full py-4">
        <AiOutlineCopyright color="white"/>
        <h1 className='text-white'>Copyright 2022, Belajar Coding</h1>
        </div>
    </div>
  )
}

export default FooterCP