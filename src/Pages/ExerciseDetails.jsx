import React, { useEffect } from 'react'

import Cards from '../components/Cards'
import { exerciseOption,fetchData } from '../components/FetchingData'

function ExerciseDetails({exercises,setExercises,bodypart}) {
  useEffect(() => {
    const fetchExercisesData = async () => {
      let exercisesData = [];

      if (bodypart === 'all') {
        exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOption);
      } else {
        exercisesData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodypart}`, exerciseOption);
      }

      setExercises(exercisesData);
    };

    fetchExercisesData();
  }, [bodypart]);


  return (
   
    <div id="exercises" className='mt-24 p-8 px-24 '>
      <div className='text-xl sm:text-4xl font-semibold'>Showing Result</div>
      <div className='flex gap-24 justify-center flex-wrap '>
      {exercises.map((exercise,index)=>(
      <Cards key={index} exercise={exercise}/>
      ))}
      </div>
    </div>
  )
}

export default ExerciseDetails