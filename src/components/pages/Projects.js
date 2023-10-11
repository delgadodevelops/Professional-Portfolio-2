import React from "react";
import "./Projects.css";

const projectsData = [
  {
    title: "Pawfinder",
    image: "./images/paw-finder-logo.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dapibus felis ut feugiat aliquam.",
    link: "https://github.com/ddelgado25/Pawfinder-Project",
    github: "https://github.com/ddelgado25/Pawfinder-Project",
  },
  {
    title: "SOS Recipes",
    image: "./images/SOS-logo.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dapibus felis ut feugiat aliquam.",
    link: "https://sosrecipes.herokuapp.com/",
    github: "https://sosrecipes.herokuapp.com/",
  },
  {
    title: "Weather Dashboard",
    image: "./images/weather.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dapibus felis ut feugiat aliquam.",
    link: "https://ddelgado25.github.io/bootcamp-challenge-06/",
    github: "https://ddelgado25.github.io/bootcamp-challenge-06/",
  },
  {
    title: "Team Profile Generator",
    image: "./images/team-profile-generator.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dapibus felis ut feugiat aliquam.",
    link: "https://github.com/ddelgado25/Team-Profile-Generator",
    github: "https://github.com/ddelgado25/Team-Profile-Generator",
  },
];

const Projects = () => {
  return (
    <div className="bg-gradient-to-b from-custom-bluee to-custom-blue flex flex-col justify-center items-center py-5 min-h-screen">
      <div className="p-5 m-5">
        <h1 className="text-home text-center text-3xl font-bold mb-2">
          Portfolio
        </h1>
        <h2 className="mb-8 text-center text-white">
          Here are some of the projects I've worked on. Click on any project to
          learn more or view the code.
        </h2>
        <div className="flex flex-col items-center">
          {projectsData.map((project, index) => (
            <div
              key={index}
              className="project-card bg-custom-blue rounded-lg shadow-lg p-6 flex flex-col justify-between max-w-xs h-full mb-10 items-center"
            >
              <img
                className="bg-custom-blue rounded w-full mb-4"
                src={project.image}
                alt={project.title}
              />
              <h2 className="bg-custom-blue text-custom-orange text-lg font-semibold mb-2">
                {project.title}
              </h2>
              <p className="bg-custom-blue text-gray-600 text-sm mb-4">
                {project.description}
              </p>
              <div className="flex">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex justify-center bg-custom-orange text-white p-2 rounded mb-3 mr-5 gap-1"
                >
                  Live Demo
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="tabler-icon tabler-icon-external-link"
                  >
                    <path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6"></path>
                    <path d="M11 13l9 -9"></path>
                    <path d="M15 4h5v5"></path>
                  </svg>
                  <span className="hidden absolute inset-0 bg-white opacity-50 rounded-lg pointer-events-none"></span>
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex justify-center bg-custom-orange text-white p-2 rounded mb-3 mr-2 gap-1"
                >
                  GitHub
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="tabler-icon tabler-icon-brand-github"
                  >
                    <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>
                  </svg>
                  <span className="hidden absolute inset-0 bg-white opacity-50 rounded-lg pointer-events-none"></span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
