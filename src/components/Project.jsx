import React from "react";

export default function Project() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background text-primary-foreground">
      <h1 className="text-3xl font-bold mb-4">Check out these awesome projects!</h1>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {/* Project 1 */}
        <div className="bg-blue-500 rounded-lg overflow-hidden shadow-lg">
          <img
            src="https://placehold.co/400x250?text=Project+1"
            alt="Project 1"
            className="w-full h-40 object-cover"
          />
          <div className="p-4">
            <h2 className="text-lg font-semibold mb-2 text-white">UI Cookies Replica</h2>
            <p className="text-sm text-muted-foreground mb-4">A replica of the UI Cookies website design</p>
            <a
              href="https://12natsudragneel.github.io/uiCookiesReplica.github.io/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-blue-500 px-4 py-2 rounded-md hover:bg-blue-400 transition-colors duration-300"
            >
              View Project
            </a>
          </div>
        </div>

        {/* Project 2 */}
        <div className="bg-green-500 rounded-lg overflow-hidden shadow-lg">
          <img
            src="https://placehold.co/400x250?text=Project+2"
            alt="Project 2"
            className="w-full h-40 object-cover"
          />
          <div className="p-4">
            <h2 className="text-lg font-semibold mb-2 text-white">Hepta Replica</h2>
            <p className="text-sm text-muted-foreground mb-4">A recreation of the Hepta design system</p>
            <a
              href="https://12natsudragneel.github.io/HeptaReplica.github.io/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-green-500 px-4 py-2 rounded-md hover:bg-green-400 transition-colors duration-300"
            >
              View Project
            </a>
          </div>
        </div>

        {/* Project 3 */}
        <div className="bg-red-500 rounded-lg overflow-hidden shadow-lg">
          <img
            src="https://placehold.co/400x250?text=Project+3"
            alt="Project 3"
            className="w-full h-40 object-cover"
          />
          <div className="p-4">
            <h2 className="text-lg font-semibold mb-2 text-white">Staging Project</h2>
            <p className="text-sm text-muted-foreground mb-4">A staging environment for development</p>
            <a
              href="https://staging-jet.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-red-500 px-4 py-2 rounded-md hover:bg-red-400 transition-colors duration-300"
            >
              View Project
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
