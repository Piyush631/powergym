import React from 'react'
import Search from '../components/Search'
import Herobaner from '../components/Herobaner'
import ExerciseDetails from './ExerciseDetails'
import { useState } from 'react'

function Home() {
  const[bodypart,setBodypart]=useState('all');
  const[exercises,setExercises]=useState([]);
  console.log(bodypart);
  return (
    <div>

  
   <Herobaner setExercises={setExercises} bodypart={bodypart} setBodypart={setBodypart}/>
    <Search setExercises={setExercises} bodypart={bodypart} setBodypart={setBodypart}/>
    <ExerciseDetails  exercises={exercises} setExercises={setExercises} bodypart={bodypart}  />
    
    </div>
  )
}

export default Home