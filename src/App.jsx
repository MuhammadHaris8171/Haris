import { useState, lazy, Suspense, useEffect } from 'react'
import './App.css'
import LandingPage2 from './components/LandingPage2'
import LandingPage3 from './components/LandingPage3'
import LandingPage4 from './components/LandingPage4'
import LandingPage5 from './components/LandingPage5'
import LandingPage6 from './components/LandingPage6'
import Project from './components/Project'
import Project1 from './components/Project1'
// import Project3 from './components/Project3'


function App() {

  return (
    <>

      <LandingPage3 />

      {/* <LandingPage2 /> */}
      {/* <LandingPage4 /> */}
      {/* <LandingPage5 /> */}

      {/* <Project /> */}

      <Project1 />

      {/* <Project3 /> */}

      <LandingPage6 />

    </>
  )
}

export default App
