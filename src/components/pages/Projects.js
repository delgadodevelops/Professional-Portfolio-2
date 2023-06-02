import React from 'react';

const Projects = () => {
  return (
    
    <div className="flex flex-col justify-center items-center h-screen">
      <h1 className="text-home text-6xl font-bold mb-10">MY PROJECTS //</h1>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {/* Card 1 */}
        <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col justify-between max-w-xs h-full">
          <img
            className="bg-white h-48 w-full object-contain mb-4"
            src="./images/paw-finder-logo.png"
            alt="Pawfinder"
          />
          <h2 className="bg-white text-lg font-semibold mb-2">Pawfinder</h2>
          <p className="bg-white text-sm mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dapibus felis ut feugiat aliquam.
          </p>
          <a
            href="https://github.com/ddelgado25/Pawfinder-Project"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          >
            Visit Application
          </a>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col justify-between max-w-xs h-full">
          <img
            className="bg-white h-48 w-full object-contain mb-4"
            src="./images/SOS-logo.png"
            alt="Project 2"
          />
          <h2 className="bg-white text-lg font-semibold mb-2">SOS Recipes</h2>
          <p className="bg-white text-sm mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dapibus felis ut feugiat aliquam.
          </p>
          <a
            href="https://sosrecipes.herokuapp.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          >
            Visit Application
          </a>
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col justify-between max-w-xs h-full">
          <img
            className="bg-white h-48 w-full object-contain mb-4"
            src="./images/weather.png"
            alt="Project 3"
          />
          <h2 className="bg-white text-lg font-semibold mb-2">Weather Dashboard : 5 Day Forecast</h2>
          <p className="bg-white text-sm mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dapibus felis ut feugiat aliquam.
          </p>
          <a
            href="https://ddelgado25.github.io/bootcamp-challenge-06/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          >
            Visit Application
          </a>
        </div>

        {/* Card 4 */}
        <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col justify-between max-w-xs h-full">
          <img
            className="bg-white h-48 w-full object-contain mb-4"
            src="./images/team-profile-generator.png"
            alt="Project 4"
          />
          <h2 className="bg-white text-lg font-semibold mb-2">Team Profile Generator</h2>
          <p className="bg-white text-sm mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dapibus felis ut feugiat aliquam.
          </p>
          <a
            href="https://github.com/ddelgado25/Team-Profile-Generator"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          >
            Visit Application
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
