import React from 'react'
import { Route,Routes } from 'react-router-dom'

import Home from './Pages/Home'

import Footer from './components/Footer'
import Navbar from './components/Navbar'

import './App.css';
import SpecificExerciseDetails from './Pages/SpecificExerciseDetails'
import Loader from './components/Loader'


function App() {
  return (
    <div>
    <Navbar/>
      <Routes>

        <Route path="/" element={<Home />} />
       <Route path="/exercise/:id" element={ <SpecificExerciseDetails/>}/>
      </Routes>
      <Footer/>
    
     
    </div>
  )
}

export default App