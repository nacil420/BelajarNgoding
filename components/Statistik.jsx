import React from 'react'
import Link from 'next/link'
import Chart from 'react-apexcharts'

const Statistik = () => {
  return ( 
    <div id='main' className='w-full h-auto items-center justify-center'>
        <div className='max-w-[1230px] w-full h-screen mx-auto p-2 flex justify-center items-center'>
            
                <div className='py-4'>
                <h1 className='text-center py-12 font-bold text-4xl text-orange-600'>My Statistik</h1>
                <Chart
                type='donut'
                width={390}
                height={1000}
                series={[90,120,132,34,95]}

                options={{
                    labels:['HTML','CSS','Java Script','NodeJS','NextJS'],
                    title:{
                        text:'Skills'
                    }
                }}
                />
</div>
        </div>
    </div>
  )
}

export default Statistik