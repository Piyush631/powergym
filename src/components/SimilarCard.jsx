import React from 'react'
import {Link} from 'react-router-dom'
function SimilarCard ({exercise}) {
  return (
    <a  className='border-t-4 border-red-600 bg-white rounded-xl w-[60vh]'>
     

       
        <img src={exercise.gifUrl} loading="lazy"/>
        <button className='bg-[#FFA9A9] px-3 py-1 rounded-xl mt-3'>{exercise.bodyPart}</button>
        <button className='bg-[#FCC757] px-3 py-1 rounded-xl ml-6'>{exercise.target}</button>
    
        <p className='mt-3 text-2xl font-semibold'>{exercise.name}</p>
    </a>
  
  )
}

export default SimilarCard