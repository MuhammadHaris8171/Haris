import React from 'react';
import { Github, Linkedin, Mail, Menu, X } from 'lucide-react';


function LandingPage6() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div>


  

  
    <div className=" bg-gray-100">
      {/* Header */}
      {/* <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800">Your Name</h1>
          <nav className="hidden md:flex space-x-4">
            <a href="#about" className="text-gray-600 hover:text-gray-800">About</a>
            <a href="#skills" className="text-gray-600 hover:text-gray-800">Skills</a>
            <a href="#projects" className="text-gray-600 hover:text-gray-800">Projects</a>
            <a href="#contact" className="text-gray-600 hover:text-gray-800">Contact</a>
          </nav>
          <button className="md:hidden" onClick={toggleMenu}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        {isMenuOpen && (
          <nav className="md:hidden bg-white py-2">
            <a href="#about" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">About</a>
            <a href="#skills" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">Skills</a>
            <a href="#projects" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">Projects</a>
            <a href="#contact" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">Contact</a>
          </nav>
        )}
      </header> */}

      {/* Hero Section */}
      {/* <section id="about" className="bg-gray-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Hi, I'm Your Name</h2>
          <p className="text-xl mb-8">A passionate MERN Stack Developer</p>
          <a href="#contact" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
            Get in Touch
          </a>
        </div>
      </section> */}

      {/* Skills Section */}
      {/* <section id="skills" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">My Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['MongoDB', 'Express.js', 'React', 'Node.js', 'JavaScript', 'HTML', 'CSS', 'Tailwind CSS'].map((skill) => (
              <div key={skill} className="bg-white rounded-lg shadow-md p-4 text-center">
                <p className="font-semibold">{skill}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Projects Section */}
      {/* <section id="projects" className="bg-gray-100 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">My Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((project) => (
              <div key={project} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img src={`/placeholder.svg?height=200&width=400`} alt={`Project ${project}`} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="font-bold text-xl mb-2">Project {project}</h3>
                  <p className="text-gray-600 mb-4">A brief description of the project and the technologies used.</p>
                  <a href="#" className="text-blue-500 hover:underline">View Project</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Contact Section */}
      {/* <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Get in Touch</h2>
          <div className="max-w-md mx-auto">
            <form className="space-y-4">
              <input type="text" placeholder="Your Name" className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" />
              <input type="email" placeholder="Your Email" className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" />
              <textarea placeholder="Your Message" rows="4" className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
              <button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section> */}

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <p>&copy; 2025 Muhammad Haris. All rights reserved.</p>
          <div className="flex space-x-11 mt-4 mr-5 md:mt-0">
            <a href="https://github.com/MuhammadHaris8171" target='_blank' className="hover:text-gray-300"><Github size={24} /></a>
            <a href="https://www.linkedin.com/in/muhammad-haris-77080b313" target='_blank' className="hover:text-gray-300"><Linkedin size={24} /></a>
            <a href="mailto:muhammadharis817162@gmail.com"target="_blank" className="hover:text-gray-300"><Mail size={24} /></a>
          </div>
        </div>
      </footer>
    </div>

    </div>
  )
}

export default LandingPage6