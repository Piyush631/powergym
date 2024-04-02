import React from 'react'
import {Link} from 'react-router-dom'
function Cards({exercise}) {
  return (
    <Link to={`exercise/${exercise.id}`} className='border-t-4 border-red-600 bg-white rounded-xl sm:w-[60vh] w-[30vh]'>
     

       
        <img src={exercise.gifUrl} loading="lazy"/>
        <button className='bg-[#FFA9A9] px-3 py-1 rounded-xl mt-3'>{exercise.bodyPart}</button>
        <button className='bg-[#FCC757] px-3 py-1 rounded-xl ml-6'>{exercise.target}</button>
    
        <p className='mt-3 text-2xl font-semibold'>{exercise.name}</p>
    </Link>
  
  )
}

export default Cards