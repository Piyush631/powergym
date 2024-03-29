import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Bodycomp from './Bodycomp'


function HorizontalScrollBar({data,bodypart,setBodypart}) {
  

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3
  };
  return (
     <Slider {...settings}>

   
 
      {data.map((item)=>(
        <div  itemID={item.id || item} 
        title={item.id || item}
        key={item.id || item}  className='m-4' > 

  <Bodycomp  item={item} Bodypart={bodypart} setBodypart={setBodypart}/>

        </div>
  
      ))}
   </Slider>
   
  )
}

export default HorizontalScrollBar