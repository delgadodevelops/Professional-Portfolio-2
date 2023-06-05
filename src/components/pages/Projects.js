import React from 'react';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import './Projects.css';

const projectsData = [
  {
    title: 'Pawfinder',
    image: './images/paw-finder-logo.png',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dapibus felis ut feugiat aliquam.',
    link: 'https://github.com/ddelgado25/Pawfinder-Project',
    githubLink: 'https://github.com/ddelgado25/Pawfinder-Project'
  },
  {
    title: 'SOS Recipes',
    image: './images/SOS-logo.png',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dapibus felis ut feugiat aliquam.',
    link: 'https://sosrecipes.herokuapp.com/',
    githubLink: 'https://github.com/ddelgado25/SOS-Recipes'
  },
  {
    title: 'Weather Dashboard',
    image: './images/weather.png',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dapibus felis ut feugiat aliquam.',
    link: 'https://ddelgado25.github.io/bootcamp-challenge-06/',
    githubLink: 'https://github.com/ddelgado25/weather-dashboard'
  },
  {
    title: 'Team Profile Generator',
    image: './images/team-profile-generator.png',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dapibus felis ut feugiat aliquam.',
    link: 'https://github.com/ddelgado25/Team-Profile-Generator',
    githubLink: 'https://github.com/ddelgado25/Team-Profile-Generator'
  },
  {
    title: 'New Project 1',
    image: './images/PROJECT-COMING-SOON.png',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dapibus felis ut feugiat aliquam.',
    link: 'https://github.com/ddelgado25/New-Project-1',
    githubLink: 'https://github.com/ddelgado25/New-Project-1'
  },
  {
    title: 'New Project 2',
    image: './images/PROJECT-COMING-SOON.png',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dapibus felis ut feugiat aliquam.',
    link: 'https://github.com/ddelgado25/New-Project-2',
    githubLink: 'https://github.com/ddelgado25/New-Project-2'
  },
  {
    title: 'New Project 3',
    image: './images/PROJECT-COMING-SOON.png',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dapibus felis ut feugiat aliquam.',
    link: 'https://github.com/ddelgado25/New-Project-3',
    githubLink: 'https://github.com/ddelgado25/New-Project-3'
  },
  {
    title: 'New Project 4',
    image: './images/PROJECT-COMING-SOON.png',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dapibus felis ut feugiat aliquam.',
    link: 'https://github.com/ddelgado25/New-Project-4',
    githubLink: 'https://github.com/ddelgado25/New-Project-4'
  }
];

const Projects = () => {
  return (
    <div className="flex flex-col justify-center items-center ">
      <h1 className="text-home text-6xl font-bold mb-10">MY PROJECTS //</h1>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-4 mt-5">
        {projectsData.map((project, index) => (
          <div key={index} className="project-card bg-custom-bluee rounded-lg shadow-lg p-6 flex flex-col justify-between max-w-xs h-full">
            <img
              className="bg-custom-bluee h-48 w-full object-contain mb-4 project-image"
              src={project.image}
              alt={project.title}
            />
            <h2 className="bg-custom-bluee text-custom-orange text-lg font-semibold mb-2">{project.title}</h2>
            <p className="bg-custom-bluee text-white text-sm mb-4">{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-custom-orange text-white font-bold py-2 px-4 rounded"
            >
              <FiExternalLink className="bg-custom-orange inline-block align-middle mr-1" /> Visit Application
              <span className="hidden absolute inset-0 bg-white opacity-50 rounded-lg pointer-events-none group-hover:block"></span>
            </a>
            {project.githubLink && (
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative bg-blue-300 text-white font-bold py-2 px-4 rounded mt-2"
              >
                <FiGithub className="bg-blue-300 inline-block align-middle mr-1" /> GitHub
                <span className="hidden absolute inset-0 bg-white opacity-50 rounded-lg pointer-events-none group-hover:block"></span>
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;



