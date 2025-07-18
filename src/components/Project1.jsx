import './Project1.css'
import { useEffect, useRef, useState } from "react";

export default function Project1() {
  const [visibleCards, setVisibleCards] = useState(new Set());
  const cardRefs = useRef([]);

  const projects = [
    {
      title: "E-Commerce Store",
      description: "A staging environment for development",
      url: "https://digital-ocean-olive.vercel.app",
      image: "/website6.PNG",
      giturl:"https://github.com/MuhammadHaris8171/e-commerce-store",
    },
    {
      title: "Car Finance",
      description: " Username: admin \n Password: admin123",
      url: "https://car-finance-frontend.vercel.app",
      image: "/website7.PNG",
      giturl:"https://github.com/MuhammadHaris8171/carfinancefrontend",
    },
    // {
    //   title: "Prohomez",
    //   description: "A sleek, design-focused multi-vendor platform for real estate and home products.",
    //   url: "https://prohome-last-frontend.vercel.app",
    //   image: "/website4.PNG",
    //   giturl:"https://github.com/MuhammadHaris8171/prohomeLastFrontend",
    // },
    {
      title: "Staging",
      description: "A staging environment for development",
      url: "https://staging-jet.vercel.app",
      image: "/website3.PNG",
      giturl:"https://github.com/MuhammadHaris8171/staging",
    },
    {
      title: "HeptaReplica",
      description: "A recreation of the Hepta design system",
      url: "https://hepta-replica.vercel.app/",
      image: "/website2.PNG",
      giturl:"https://github.com/MuhammadHaris8171/heptareplica",
    },
    {
      title: "Sigma6digital",
      description: "A platform offering a range of digital and technical services, from marketing to design and web development.",
      url: "https://sigma6digital.com/",
      image: "/website5.PNG",
      giturl:"https://github.com/MuhammadHaris8171/sigma6digital",
    },
    {
      title: "CookiesReplica",
      description: "A replica of the UI Cookies website design",
      url: "https://cookies-replica.vercel.app/",
      image: "/website1.PNG",
      giturl:"https://github.com/MuhammadHaris8171/cookiesreplica",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = parseInt(entry.target.dataset.index);
          setVisibleCards(prev => {
            const newSet = new Set(prev);
            if (entry.isIntersecting) {
              newSet.add(index);
            } else {
              newSet.delete(index);
            }
            return newSet;
          });
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.001,
      }
    );

    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      cardRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <div className={`bg-white min-h-screen p-8 overflow-hidden projectMain`}>
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">My Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={`${project.title}-${index}`}
              ref={(el) => (cardRefs.current[index] = el)}
              data-index={index}
              className={`bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow ${
                visibleCards.has(index) ? `projectCardVisible${index + 1}` : `projectCardHidden${index + 1}`
              }`}
            >
              <div className="aspect-video relative bg-gray-100">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 whitespace-pre-line">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    <svg
                      className="mr-2 h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                    Visit Site
                  </a>
                  <a
                    href={project.giturl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-gray-700 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                  >
                    <svg
                      className="mr-2 h-4 w-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.137 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z"
                      />
                    </svg>
                    Source
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}