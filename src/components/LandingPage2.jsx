import React from 'react';

const LandingPage2 = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack MERN application with user authentication, product management, and payment integration.",
      tech: ["MongoDB", "Express.js", "React", "Node.js", "Redux"],
      link: "#"
    },
    {
      title: "Task Management System",
      description: "Real-time task management app with collaborative features and drag-and-drop functionality.",
      tech: ["React", "Node.js", "Socket.io", "MongoDB"],
      link: "#"
    },
    {
      title: "Blog Platform",
      description: "Personal blog platform with markdown support and comment system.",
      tech: ["MERN Stack", "Markdown", "AWS"],
      link: "#"
    }
  ];

  const skills = [
    "JavaScript (ES6+)", "React.js", "Node.js", "Express.js",
    "MongoDB", "Redux", "REST APIs", "Git",
    "HTML5", "CSS3", "Tailwind CSS", "JWT"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      {/* <header className="min-h-screen flex flex-col justify-center bg-gradient-to-br from-blue-50 to-indigo-50 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Hi, I'm <span className="text-indigo-600">Your Name</span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-600 mb-8">
            MERN Stack Developer | Building Web Applications
          </p>
          <div className="flex justify-center space-x-4 mb-12">
            <a href="#" className="text-gray-600 hover:text-indigo-600">
              
            </a>
            <a href="#" className="text-gray-600 hover:text-indigo-600">
              
            </a>
            <a href="#" className="text-gray-600 hover:text-indigo-600">
              
            </a>
          </div>
          <a href="#projects" className="animate-bounce inline-block">
            
          </a>
        </div>
      </header> */}

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Featured Projects
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="px-3 py-1 bg-indigo-100 text-indigo-600 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                <a href={project.link} className="inline-flex items-center text-indigo-600 hover:text-indigo-700">
                  View Project 
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      {/* <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Skills & Technologies
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {skills.map((skill, index) => (
              <div key={index} className="bg-white rounded-lg p-4 text-center shadow-sm hover:shadow-md transition-shadow">
                <span className="text-gray-800">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Contact Section */}
      {/* <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Let's Connect
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            I'm currently open to new opportunities and collaborations.
          </p>
          <a
            href="mailto:your.email@example.com"
            className="inline-block bg-indigo-600 text-white px-8 py-3 rounded-lg hover:bg-indigo-700 transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </section> */}

      {/* Footer */}
      {/* <footer className="py-8 bg-gray-900 text-center text-gray-400">
        <p>© {new Date().getFullYear()} Your Name. All rights reserved.</p>
      </footer> */}
    </div>
  );
};

export default LandingPage2;