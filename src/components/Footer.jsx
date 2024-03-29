import React from 'react'
import { Link } from 'react-router-dom';
function Footer() {
  return (
    <div className=' w-full flex flex-col gap-6 items-center mt-12'>
    <div className='flex gap-2'>
    <Link to="/"><img src='/public/logo.png'/></Link>
 <p className='text-xl font-semibold mt-3 text-amber-950'>Piyush Gym</p> 
    </div>
    <div>
      <p className='text-2xl '>Made by Piyush</p>
    </div>

    </div>
  )
}

export default Footer