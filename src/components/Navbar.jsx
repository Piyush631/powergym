import React from 'react'
import { Link } from 'react-router-dom';
function Navbar() {
  return (
    <div className=' relative flex gap-16 p-8'>
      <div className='logo'>
        <Link to="/"><img src='logo.png'/></Link>

      </div>
      <div className=' flex gap-12 items-center text-xl max-sm:gap-8'> 
      <Link to="/">Home</Link>
      <a href="#exercises">Exercise</a>
      </div>

    </div>
  )
}

export default Navbar