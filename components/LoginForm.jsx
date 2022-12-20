import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import tampilan from "../public/images/tampilan.svg"

const LoginForm = () => {
  return ( 
    <div className="flex justify-center items-center m-full h-screen bg-orange-600">
            <div className="m-auto bg-white rounded-md w-4/5 py-8 grid lg:grid-cols-2">
                <div className='flex'>
                    <Image src={tampilan} alt='tampilan'/>
                </div>
                
                <div className="right m-auto flex flex-col justify-evenly">
                    <div className=" text-center m-auto">
                    
                    <form className='flex flex-col gap-5'>
                        <p>Email</p>
                    <div className='border-orange-400'>
                        <input
                        type='email'
                        name='email'
                        placeholder='Email'
                        className='p-2 border-2 rounded border-orange-600'
                        />
                    </div>
                    Password
                    <div className='border-orange-400'>
                        <input
                        type='password'
                        name='password'
                        placeholder='Password'
                        className='p-2 border-2 rounded border-orange-600'
                        />
                    </div>

                    <div className=''>
                    <Link href='/LandingPagesUser'>
                        <button type='submit' className='rounded bg-orange-600 w-full text-white py-2'>
                            Login
                        </button>
                    </Link>
                    </div>
                </form>
                {/* bottom */}
                <p className='pt-8 text-center text-gray-400'>don't have an account yet?
                <Link className='text-orange-600' href={'/Register'}> Sign Up</Link>
                </p>
            </div>
                    </div>
                </div>
            </div>
  )
}

export default LoginForm