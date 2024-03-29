import React from 'react'

function Bodycomp({item,bodypart,setBodypart}) {
  return (
    <div>
    
        <div className='cursor-pointer mx-24 mt-12 h-16 w-42  flex justify-center bg-white ' onClick={()=>{
          setBodypart(item);
          window.scrollTo({top:1800, left:100,behavior:'smooth'})
        }} >
          <img src="public/name.png" alt="" className='h-12 w-12 hover:h-16 hover:w-16' />
        </div>
        <div className='cursor-pointer mx-24  text-2xl font-semibold -top-20  flex justify-center '>{item}</div>
    
    </div>
  )
}

export default Bodycomp