import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import progress from '../public/images/progress.png'
import statistik from '../public/images/statis.png'
import setting from '../public/images/setting.png'
import course from '../public/images/course.png'
import classs from '../public/images/class.png'
import mentor from '../public/images/mentor.png'
const ProfileMain = () => {
  return (
    <div className='w-full h-auto py-16 '>
        <div className='max-w-[1240px] mx-auto px-2 pt-20 py-16'>
            <p className='text-4xl font-bold text-center items-center tracking-widest uppercase pb-8 text-orange-600'>MY PROFILE</p>
            <div className='grid md:grid-cols-2 gap-8'>

            <div className='realtive bg-white flex items-center justify-center h-auto w-full shadow-2xl shadow-black-800 rounded-xl p-4 group hover:bg-gradient-to-r from-[#858484] to-[#cecece]'>
    <Image className='rounded-xl group-hover:opacity-10' src={progress} alt='/'/>
<div className='hidden group-hover:block absolute top-[50] left-[50] translate-x-[-50] translate-y-[-50]'>
    <h3 className='text-2xl text-orange-600 font-bold tracking-wider text-center'>My Progress</h3>
    <Link href='/MyProgress'>
        <p className='text-center py-3 rounded-lg bg-orange-600 text-white font-bold text-lg cursor-pointer '>Start</p>
    </Link>
</div>
</div>
<div className='realtive bg-white flex items-center justify-center h-auto w-full shadow-2xl shadow-black-800 rounded-xl p-4 group hover:bg-gradient-to-r from-[#858484] to-[#cecece]'>
    <Image className='rounded-xl group-hover:opacity-10' src={statistik} alt='/'/>
<div className='hidden group-hover:block absolute top-[50] left-[50] translate-x-[-50] translate-y-[-50]'>
    <h3 className='text-2xl text-orange-600 font-bold tracking-wider text-center'>My Statistik</h3>
    <Link href='/MyStatistik'>
        <p className='text-center py-3 rounded-lg bg-orange-600 text-white font-bold text-lg cursor-pointer '>Start</p>
    </Link>
</div>
</div>

<div className='realtive bg-white flex items-center justify-center h-auto w-full shadow-2xl shadow-black-800 rounded-xl p-4 group hover:bg-gradient-to-r from-[#858484] to-[#cecece]'>
    <Image className='rounded-xl group-hover:opacity-10' src={course} alt='/'/>
<div className='hidden group-hover:block absolute top-[50] left-[50] translate-x-[-50] translate-y-[-50]'>
    <h3 className='text-2xl text-orange-600 font-bold tracking-wider text-center'>My Course</h3>
    <Link href='/MyCourse'>
        <p className='text-center py-3 rounded-lg bg-orange-600 text-white font-bold text-lg cursor-pointer '>Start</p>
    </Link>
</div>
</div>

<div className='realtive bg-white flex items-center justify-center h-auto w-full shadow-2xl shadow-black-800 rounded-xl p-4 group hover:bg-gradient-to-r from-[#858484] to-[#cecece]'>
    <Image className='rounded-xl group-hover:opacity-10' src={classs} alt='/'/>
<div className='hidden group-hover:block absolute top-[50] left-[50] translate-x-[-50] translate-y-[-50]'>
    <h3 className='text-2xl text-orange-600 font-bold tracking-wider text-center'>My Class</h3>
    <Link href='/MyClass'>
        <p className='text-center py-3 rounded-lg bg-orange-600 text-white font-bold text-lg cursor-pointer '>Start</p>
    </Link>
</div>
</div>

<div className='realtive bg-white flex items-center justify-center h-auto w-full shadow-2xl shadow-black-800 rounded-xl p-4 group hover:bg-gradient-to-r from-[#858484] to-[#cecece]'>
    <Image className='rounded-xl group-hover:opacity-10' src={mentor} alt='/'/>
<div className='hidden group-hover:block absolute top-[50] left-[50] translate-x-[-50] translate-y-[-50]'>
    <h3 className='text-2xl text-orange-600 font-bold tracking-wider text-center'>My Mentor</h3>
    <Link href='/ChsMentor'>
        <p className='text-center py-3 rounded-lg bg-orange-600 text-white font-bold text-lg cursor-pointer '>Start</p>
    </Link>
</div>
</div>
<div className='realtive bg-white flex items-center justify-center h-auto w-full shadow-2xl shadow-black-800 rounded-xl p-4 group hover:bg-gradient-to-r from-[#858484] to-[#cecece]'>
    <Image className='rounded-xl group-hover:opacity-10' src={setting} alt='/'/>
<div className='hidden group-hover:block absolute top-[50] left-[50] translate-x-[-50] translate-y-[-50]'>
    <h3 className='text-2xl text-orange-600 font-bold tracking-wider text-center'>Settings</h3>
    <Link href='/Settings'>
        <p className='text-center py-3 rounded-lg bg-orange-600 text-white font-bold text-lg cursor-pointer '>Start</p>
    </Link>
</div>
</div>

            </div>
        </div>
    </div>
  )
}

export default ProfileMain