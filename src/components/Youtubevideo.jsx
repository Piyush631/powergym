import React from 'react'

function Youtubevideo({youtubeexercise,exerciseDetails}) {
    const{name} =exerciseDetails;
  return (
  
    <div className='flex flex-col gap-4 mt-32'>
        <div>
            <h1 className='text-sm sm:text-5xl sm:font-semibold'>Watch <span className='text-red-500'>{name}</span> exercise video</h1>
        </div>
        <div className='flex  gap-24 ml-2 flex-wrap mt-6'>
        { youtubeexercise?.slice(0,5).map((item,index)=>(
          <a
          key={index}
 
          href={`https://www.youtube.com/watch?v=${item.video.videoId}`}   target="_blank"
          rel="noreferrer" >
          <img  src={item.video.thumbnails[0].url} alt={item.video.title}  className=' h-56 w-56 sm:h-90 sm:w-96'/>
         <p className='sm:text-xl sm:font-semibold sm:flex text-wrap sm:w-96 mt-4 text-md w-48'>{item.video.title}</p> 
         {item.video.channelName}
          </a>
        ))
}
        </div>
      
    </div>
  )
}

export default Youtubevideo