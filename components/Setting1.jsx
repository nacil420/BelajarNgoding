import React from 'react'
import Link from 'next/link'
import Image from 'next/image'


const Setting1 = () => {
  return ( 
    <div className="flex justify-center items-center m-full h-screen bg-orange-600">
            <div className="m-auto items-center text-center bg-white rounded-md w-4/5 py-8 grid lg:grid-cols-2">
                <div className='text-orange-600 font-bold text-md py-8' >
                    <p >Name     : Ramdhani Hadi Winarno</p>
                    <p >Email    : ramdhanihw420@gmail.com</p>
                </div>
                
                <div className="right m-auto flex flex-col justify-evenly">
                    <div className=" text-center m-auto">
                    
                    <form className='flex flex-col gap-5'>
                        <p>Password</p>
                    <div className='border-orange-400'>
                        <input
                        type='password'
                        name='password'
                        placeholder='Password'
                        className='p-2 border-2 rounded border-orange-600'
                        />
                    </div>
                    Confirm Password
                    <div className='border-orange-400'>
                        <input
                        type='password'
                        name='password'
                        placeholder='Confirm Password'
                        className='p-2 border-2 rounded border-orange-600'
                        />
                    </div>

                    <div className=''>
                    <Link href='/LandingPagesUser'>
                        <button type='submit' className='rounded bg-orange-600 w-full text-white py-2'>
                            Reset Password
                        </button>
                    </Link>
                    </div>
                </form>
                {/* bottom */}
            </div>
                    </div>
                </div>
            </div>
  )
}

export default Setting1