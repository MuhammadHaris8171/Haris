import React from 'react';
import { useState } from 'react';


function LandingPage5() {

  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div>


    <div className={`min-h-screen ${darkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
      <nav className={`py-4 ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-md`}>
        <div className="container mx-auto flex justify-between items-center">
          <h1 className={`text-3xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>My Portfolio</h1>
          <button onClick={toggleDarkMode} className={`px-4 py-2 rounded ${darkMode ? 'bg-gray-700 text-white' : 'bg-gray-200 text-gray-600'}`}>
            {darkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
        </div>
      </nav>
      <header className={`py-12 ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
        <div className="container mx-auto text-center">
          <h1 className={`text-5xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>Hi, I'm [Your Name]</h1>
          <p className={`text-2xl ${darkMode ? 'text-gray-200' : 'text-gray-600'}`}>Junior/Intermediate MERN Developer</p>
        </div>
      </header>
      <section className={`py-12 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="container mx-auto">
          <h2 className={`text-4xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>About Me</h2>
          <p className={`text-lg ${darkMode ? 'text-gray-200' : 'text-gray-600'}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.</p>
        </div>
      </section>
      <section className={`py-12 ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
        <div className="container mx-auto">
          <h2 className={`text-4xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>My Skills</h2>
          <ul className="flex flex-wrap justify-center">
            <li className={`px-4 py-2 rounded ${darkMode ? 'bg-gray-600 text-white' : 'bg-gray-200 text-gray-600'}`}>JavaScript</li>
            <li className={`px-4 py-2 rounded ${darkMode ? 'bg-gray-600 text-white' : 'bg-gray-200 text-gray-600'}`}>React</li>
            <li className={`px-4 py-2 rounded ${darkMode ? 'bg-gray-600 text-white' : 'bg-gray-200 text-gray-600'}`}>Node.js</li>
            <li className={`px-4 py-2 rounded ${darkMode ? 'bg-gray-600 text-white' : 'bg-gray-200 text-gray-600'}`}>Express</li>
            <li className={`px-4 py-2 rounded ${darkMode ? 'bg-gray-600 text-white' : 'bg-gray-200 text-gray-600'}`}>MongoDB</li>
          </ul>
        </div>
      </section>
      <section className={`py-12 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="container mx-auto">
          <h2 className={`text-4xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>My Projects</h2>
          <div className="flex flex-wrap justify-center">
            <div className={`w-1/2 p-4 ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
              <h3 className={`text-3xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>Project 1</h3>
              <p className={`text-lg ${darkMode ? 'text-gray-200' : 'text-gray-600'}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.</p>
            </div>
            <div className={`w-1/2 p-4 ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
              <h3 className={`text-3xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>Project 2</h3>
              <p className={`text-lg ${darkMode ? 'text-gray-200' : 'text-gray-600'}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.</p>
            </div>
          </div>
        </div>
      </section>
      <footer className={`py-4 ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-md`}>
        <div className="container mx-auto text-center">
          <p className={`text-lg ${darkMode ? 'text-gray-200' : 'text-gray-600'}`}>2023 [Your Name]. All rights reserved.</p>
        </div>
      </footer>
    </div>
  
    </div>
  )
}

export default LandingPage5