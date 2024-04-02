import React from 'react'
import Loader from './Loader'
import SimilarCard from './SimilarCard'

function SimilalrExercise({similarexercise}) {
  if (!similarexercise.length) return <Loader/>;
  return (
    <div className=' mt-12'>
         <h1 className='text-sm sm:text-5xl sm:font-semibold'>Similar <span className='text-red-500'>Target Muscle</span> exercise </h1>
         <div className='flex flex-wrap mt-12 gap-12 px-12' >
     {similarexercise?.slice(0,3).map((exercise,index)=>(
       <div className='flex'>
 
        <SimilarCard  key={index} exercise={exercise}/>
       </div>
     
   
      ))}
    </div>
    </div>
   
  )
}

export default SimilalrExercise