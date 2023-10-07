import React, { useState } from 'react'
import Choices from '../components/Choices'

const Questions = () => {

    const [progress,setProgress]=useState(1)
    const ProgressBar =({progress,length})=>{
        const percentage=9*progress/length
        return(
            <div className='flex space-x-4 items-center'>
                <div className='flex rounded-full w-36 relative h-4 duration-300'>
                    <div className={`absolute z-10 top-0 left-0 h-4 rounded-full bg-main-green flex items-center`} style={{width:`${percentage}rem`}}>
                    </div>
                    <div className='absolute h-4 w-36 rounded-full bg-main-gray flex items-center'>
                    </div>
                </div>
                <p className='text-second-gray font-semibold'> {progress}/{length} </p>
            </div>
        )
    }

    return (
    <div className='h-screen flex flex-col bg-main-gray'>
        <div className='h-full flex flex-col items-center mt-12 space-x-8'>
            <p className='font-bold text-main-black text-4xl'>Widad Personality Test</p>
            <Choices></Choices>
        </div>
        <div className='h-32 w-full bg-white grid place-items-center'>
            <div className='flex space-x-24 justify-between items-center'>
                <ProgressBar length={5} progress={progress}></ProgressBar>
                <button onClick={()=>setProgress(progress+1)} className='h-12 w-36 disabled:bg-second-gray bg-main-green font-bold disabled:text-main-gray text-white rounded-md'>Next</button>
            </div>
        </div>
    
    </div>
  )
}

export default Questions