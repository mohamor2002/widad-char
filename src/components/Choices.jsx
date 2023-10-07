import React from 'react'

const Choices = ({questions,progress,selected,setSelected}) => {
    const handleClick=(e,index)=>{
        e.preventDefault()
        setSelected(index+1)
    }
    return (
    <div className='flex flex-col items-center'>
        <p className='font-bold text-main-blue text-center text-xl md:text-2xl mx-3 mt-12'>{questions[progress-1].question}</p>
        <div className='flex flex-col space-y-2 mt-24 md:mt-10'>
            {questions[progress-1].choices.map((e,index)=>(
                <button onClick={(e)=>{handleClick(e,index)}} className={`p-2 ${selected===index+1?'bg-main-green text-white':'bg-white text-main-black'} flex items-center text-sm md:text-base space-x-4 md:space-x-8 md:w-96 w-80 rounded-md duration-300`}>
                    <div className={`w-10 aspect-square ${selected===index+1?'bg-white text-main-green':'bg-main-gray text-main-black'}  rounded-full  grid place-items-center duration-300`}>
                        <p className='font-bold text-xl'>{index+1}</p>
                    </div>
                    <div className='grid items-center w-56 font-semibold'>
                        <p>{e.choice}</p>
                    </div>
                </button>
            ))}
        </div>
    </div>
  )
}

export default Choices