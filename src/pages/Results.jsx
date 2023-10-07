import React, { useEffect } from 'react'
import { useNavigate ,Link} from 'react-router-dom';

const Results = ({charArray,completed}) => {
  const mostFrequentString=(arr)=> {
    let counts = {};
    let maxCount = 0;
    let mostFrequent = null;
  
    for (let str of arr) {
      if (counts[str]) {
        counts[str]++;
      } else {
        counts[str] = 1;
      }
  
      if (counts[str] > maxCount) {
        maxCount = counts[str];
        mostFrequent = str;
      }
    }
  
    return mostFrequent;
  }
  const navigate=useNavigate()
  useEffect(()=>{
    if (!completed){
      navigate('..')
    }
  },[])
  return (
    <div className='grid place-items-center  h-screen'>
      <p className='font-bold text-4xl'>
        You Are {mostFrequentString(charArray)}
      </p>
      <Link to='..'>
        <button className='md:h-12 md:w-36 h-8 w-28 disabled:bg-second-gray bg-main-green font-bold disabled:text-main-gray text-white rounded-md'>Return</button>
      </Link>

    </div>
  )
}

export default Results