import React, { useEffect,useState } from 'react'
import Details from '../components/Details'

import { useParams } from 'react-router-dom'
import { exerciseOption,fetchData, youtubeOption } from '../components/FetchingData'
import Youtubevideo from '../components/Youtubevideo';
function SpecificExerciseDetails() {
    const [exerciseDetails,setExerciseDetails]=useState({});
    const[youtubeexercise,setYoutubeexercise]=useState([]);
    const {id}=useParams();
    useEffect(()=>{
        const fetchexercisedata=async () =>{
            const dburl='https://exercisedb.p.rapidapi.com'
            const youtubedburl='https://youtube-search-and-download.p.rapidapi.com'
            const exercisedetailsdata= await fetchData(`${dburl}/exercises/exercise/${id}`,exerciseOption);
            setExerciseDetails( exercisedetailsdata);
            const exerciseVideosData = await fetchData(`${ youtubedburl}/search?query=${exercisedetailsdata.name} exercise`, youtubeOption);
          
            setYoutubeexercise(exerciseVideosData.contents);
            console.log(exercisevideo.contents);
        }
        fetchexercisedata();
        
        
       
    },[id]);
    
  return (
    <div>
        <Details exerciseDetails={exerciseDetails} />
        <Youtubevideo youtubeexercise={youtubeexercise} exerciseDetails={exerciseDetails}/>
       
    </div>
  )
}

export default SpecificExerciseDetails