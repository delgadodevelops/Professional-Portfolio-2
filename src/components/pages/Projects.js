import React from 'react';
import './Projects.css'

const Projects = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h1 className="text-home text-6xl font-bold mb-10">MY PROJECTS //</h1>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-4 mt-5">
        {/* Card 1 */}
        <div className="project-card bg-custom-bluee rounded-lg shadow-lg p-6 flex flex-col justify-between max-w-xs h-full">
          <img
            className="bg-custom-bluee h-48 w-full object-contain mb-4"
            src="./images/paw-finder-logo.png"
            alt="Pawfinder"
          />
          <h2 className="bg-custom-bluee text-custom-orange text-lg font-semibold mb-2">Pawfinder</h2>
          <p className="bg-custom-bluee text-white text-sm mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dapibus felis ut feugiat aliquam.
          </p>
          <a
            href="https://github.com/ddelgado25/Pawfinder-Project"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative bg-custom-orange text-white font-bold py-2 px-4 rounded"
          >
            Visit Application
            <span className="hidden absolute inset-0 bg-white opacity-50 rounded-lg pointer-events-none group-hover:block"></span>
          </a>
        </div>

        {/* Card 2 */}
        <div className="project-card bg-custom-bluee rounded-lg shadow-lg p-6 flex flex-col justify-between max-w-xs h-full">
          <img
            className="bg-custom-bluee h-48 w-full object-contain mb-4"
            src="./images/SOS-logo.png"
            alt="Project 2"
          />
          <h2 className="bg-custom-bluee text-custom-orange text-lg font-semibold mb-2">SOS Recipes</h2>
          <p className="bg-custom-bluee text-white text-sm mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dapibus felis ut feugiat aliquam.
          </p>
          <a
            href="https://sosrecipes.herokuapp.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative bg-custom-orange text-white font-bold py-2 px-4 rounded"
          >
            Visit Application
            <span className="hidden absolute inset-0 bg-white opacity-50 rounded-lg pointer-events-none group-hover:block"></span>
          </a>
        </div>

        {/* Card 3 */}
        <div className="project-card bg-custom-bluee rounded-lg shadow-lg p-6 flex flex-col justify-between max-w-xs h-full">
          <img
            className="bg-custom-bluee h-48 w-full object-contain mb-4"
            src="./images/weather.png"
            alt="Project 3"
          />
          <h2 className="bg-custom-bluee text-custom-orange text-lg font-semibold mb-2">Weather Dashboard</h2>
          <p className="bg-custom-bluee text-white text-sm mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dapibus felis ut feugiat aliquam.
          </p>
          <a
            href="https://ddelgado25.github.io/bootcamp-challenge-06/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative bg-custom-orange text-white font-bold py-2 px-4 rounded"
          >
            Visit Application
            <span className="hidden absolute inset-0 bg-white opacity-50 rounded-lg pointer-events-none group-hover:block"></span>
          </a>
        </div>

        {/* Card 4 */}
        <div className="project-card bg-custom-bluee rounded-lg shadow-lg p-6 flex flex-col justify-between max-w-xs h-full">
          <img
            className="bg-custom-bluee h-48 w-full object-contain mb-4"
            src="./images/team-profile-generator.png"
            alt="Project 4"
          />
          <h2 className="bg-custom-bluee text-custom-orange text-lg font-semibold mb-2">Team Profile Generator</h2>
          <p className="bg-custom-bluee text-white text-sm mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dapibus felis ut feugiat aliquam.
          </p>
          <a
            href="https://github.com/ddelgado25/Team-Profile-Generator"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative bg-custom-orange text-white font-bold py-2 px-4 rounded"
          >
            Visit Application
            <span className="hidden absolute inset-0 bg-white opacity-50 rounded-lg pointer-events-none group-hover:block"></span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
