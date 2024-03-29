import React from 'react'
import bodypartImage from '/public/body-part.png'
import equipmentImage from '/public/equipment.png'
import targetImage from '/public/target.png'

function Details({exerciseDetails}) {
    const{bodyPart,gifUrl,name,target,equipment} =exerciseDetails;
    const extraDetails=[
        {
            icon:bodypartImage,
            name:bodyPart
        },
        {
            icon:equipmentImage,
            name:equipment,
        },
        {
            icon:targetImage,
            name:target
        },
    ]
  return (
    <div className='w-screen overflow-hidden'>
        <div className='   flex flex-col  sm:px-64 gap-6  sm:flex-row sm:gap-24'> 
        <img src={gifUrl}  className='sm:h-[70vh] sm:w-[70vh] h-[30vh] w-[30vh]'/>
        <div className='flex flex-col justify-center gap-4'>
            <p className=' text-md  w-full sm:font-semibold sm:text-2xl'>{name}</p>
            
          
            <p className='  w-56 h-38 text-wrap text-sm sm:text-lg  sm:w-[60vh]' >Exercises keep you strong. {name} is one of the best exercises to target your {target}. It will help you improve your mood and gain energy</p>
        <div className=' mt-6 flex flex-col gap-12'>    
          {
            extraDetails.map((item,key)=>
           <div className='flex gap-6'>
            <button key={item.name}>
                <img src={item.icon} alt="" />
            </button>
            <p className='text-2xl pt-2'>{item.name}</p>
           </div>
            )

          }
            </div>
        </div>
        </div>
       
    </div>
  )
}

export default Details