import React from 'react'

function LandingPage1() {
  return (
    <div>
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
          <header className="text-center mb-10">
            <h1 className="text-4xl font-bold text-gray-800">Welcome to My Portfolio</h1>
            <p className="mt-2 text-lg text-gray-600">I'm a Junior MERN Developer</p>
          </header>
    
          <main className="flex flex-col items-center">
            <section className="bg-white shadow-md rounded-lg p-6 mb-6 w-11/12 md:w-1/2">
              <h2 className="text-2xl font-semibold text-gray-800">About Me</h2>
              <p className="mt-2 text-gray-600">
                I am a passionate web developer with experience in building full-stack applications using the MERN stack. I love creating dynamic and responsive web applications.
              </p>
            </section>
    
            <section className="bg-white shadow-md rounded-lg p-6 mb-6 w-11/12 md:w-1/2">
              <h2 className="text-2xl font-semibold text-gray-800">Projects</h2>
              <ul className="mt-2 text-gray-600">
                <li>Project 1: Description of project 1</li>
                <li>Project 2: Description of project 2</li>
                <li>Project 3: Description of project 3</li>
              </ul>
            </section>
    
            <section className="bg-white shadow-md rounded-lg p-6 mb-6 w-11/12 md:w-1/2">
              <h2 className="text-2xl font-semibold text-gray-800">Contact Me</h2>
              <p className="mt-2 text-gray-600">Feel free to reach out to me via email: your-email@example.com</p>
            </section>
          </main>
    
          <footer className="mt-10">
            <p className="text-gray-600">© 2023 Your Name. All rights reserved.</p>
          </footer>
        </div>
      
    
    
    </div>
  )
}

export default LandingPage1