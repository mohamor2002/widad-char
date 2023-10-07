import React from 'react'
import background from './../assets/Rectangle.svg'
import image1 from './../assets/Group 8.svg'
import stats from './../assets/Statistics.svg'
import { Link } from 'react-router-dom'



const Start = () => {
  return (
    <div className="h-screen relative">
        <img src={image1} alt="" className='z-10 absolute top-[60%] md:top-0 right-0 object-scale-down lg:h-96 h-72 '/>
        <img draggable="false" src={background} alt="Description" className="absolute inset-0 w-full h-full object-cover" />
        <div className='z-20 absolute top-0 left-0 w-12 h-full bg-main-green'></div>
        <div className='z-10 h-screen w-full absolute top-0 right-0 grid grid-rows-3'>
            <div className='flex flex-col space-y-4 ml-16 md:ml-20'>
                <div className='mt-12 md:h-24 md:w-72 h-20 w-48 bg-main-green rounded-xl duration-300 grid place-items-center'>
                    <p className=' text-main-gray font-bold uppercase md:text-4xl text-2xl '>Widad</p>
                </div>
                <div className='h-2 bg-gradient-to-r from-main-green to-transparent w-56 md:w-[32rem]'></div>
                <p className=' text-main-gray font-bold md:text-4xl text-2xl '>Personality Test</p>
            </div>
            <div className='grid place-content-center'>
                <Link to='character-test'>
                    <button className='md:h-40 md:w-96 h-20 w-48 text-main-gray bg-main-green rounded-xl hover:bg-main-gray hover:text-main-black active:bg-main-blue active:text-main-gray duration-300'>
                        <p className='font-bold uppercase md:text-6xl text-3xl '>Start</p>
                    </button>
                </Link>
            </div>
            <div className='flex items-end justify-center'>
                <img src={stats} alt="" className=' h-min' />
            </div>
        </div>
    </div>
  )
}

export default Start