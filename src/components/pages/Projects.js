import React from "react";
import "./Projects.css";

const projectsData = [
  {
    title: "Pawfinder",
    image: "./images/paw-finder-logo.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dapibus felis ut feugiat aliquam.",
    link: "https://github.com/ddelgado25/Pawfinder-Project",
  },
  {
    title: "SOS Recipes",
    image: "./images/SOS-logo.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dapibus felis ut feugiat aliquam.",
    link: "https://sosrecipes.herokuapp.com/",
  },
  {
    title: "Weather Dashboard",
    image: "./images/weather.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dapibus felis ut feugiat aliquam.",
    link: "https://ddelgado25.github.io/bootcamp-challenge-06/",
  },
  {
    title: "Team Profile Generator",
    image: "./images/team-profile-generator.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dapibus felis ut feugiat aliquam.",
    link: "https://github.com/ddelgado25/Team-Profile-Generator",
  },
];

const Projects = () => {
  return (
    <div className="bg-gradient-to-b from-custom-bluee to-custom-blue flex flex-col justify-center items-center min-h-screen">
      <h1 className="text-home text-6xl font-bold mb-10">MY PROJECTS //</h1>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-4 mt-5">
        {projectsData.map((project, index) => (
          <div
            key={index}
            className="project-card bg-custom-bluee rounded-lg shadow-lg p-6 flex flex-col justify-between max-w-xs h-full"
          >
            <img
              className="bg-custom-bluee h-48 w-full object-contain mb-4"
              src={project.image}
              alt={project.title}
            />
            <h2 className="bg-custom-bluee text-custom-orange text-lg font-semibold mb-2">
              {project.title}
            </h2>
            <p className="bg-custom-bluee text-white text-sm mb-4">
              {project.description}
            </p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-custom-orange text-white font-bold py-2 px-4 rounded"
            >
              Visit Application
              <span className="hidden absolute inset-0 bg-white opacity-50 rounded-lg pointer-events-none group-hover:block"></span>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
