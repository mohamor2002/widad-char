import React, { useEffect, useState } from 'react'
import Choices from '../components/Choices'
import {Quests} from '../constants/Quests'
import { useNavigate } from 'react-router-dom'

const Questions = ({charArray,setCharArray,setCompleted}) => {
    useEffect(()=>{
        setCharArray([])
        setCompleted(false)
    },[])

    const [progress,setProgress]=useState(1)
    const [selected,setSelected]=useState(0)
    const navigate=useNavigate()
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

    const handleNext=(e)=>{
        if (progress===Quests.length){
            navigate('../results')
        }
        else{
            e.preventDefault()
            setProgress(prev=>prev+1)
            setSelected(0)
            setCharArray(prev=>[...prev,...Quests[progress-1].choices[selected-1].characters])
            setCompleted(true)
            console.log(charArray)
        }
    }

    return (
    <div className='h-screen flex flex-col bg-main-gray'>
        <div className='h-full flex flex-col items-center mt-12 space-y-8'>
            <p className='font-bold text-main-black text-2xl md:text-4xl'>Widad Personality Test</p>
            <Choices questions={Quests} progress={progress} selected={selected} setSelected={setSelected}></Choices>
        </div>
        <div className='h-32 w-full bg-white grid place-items-center'>
            <div className='flex md:space-x-24 space-x-12 items-center'>
                <ProgressBar length={Quests.length} progress={progress}></ProgressBar>
                <button disabled={!selected} onClick={(e)=>handleNext(e)} className='md:h-12 md:w-36 h-8 w-28 disabled:bg-second-gray bg-main-green font-bold disabled:text-main-gray text-white rounded-md'>Next</button>
            </div>
        </div>
    
    </div>
  )
}

export default Questions