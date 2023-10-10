import React from "react";

const Skills = () => {
  // Define an array of skills with skill name and image URL
  const skills = [
    {
      name: "HTML",
      imageUrl: "images/html5-color.svg",
    },
    {
      name: "CSS",
      imageUrl: "images/css3-color.svg",
    },
    {
      name: "Javascript",
      imageUrl: "images/javascript-color.svg",
    },
    {
      name: "React",
      imageUrl: "images/react-color.svg",
    },
    {
      name: "Tailwind CSS",
      imageUrl: "images/tailwindcss-color.svg",
    },
    {
      name: "GitHub",
      imageUrl: "images/github-color.svg",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-custom-blue to-custom-bluee flex flex-col items-center justify-center pt-5 pb-5">
      <div className="p-5 m-5">
        <h2 className="text-home text-3xl text-center font-bold mb-8">
          My Skills
        </h2>
        <div className="grid grid-cols-2 gap-4">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-custom-blue p-6 rounded-lg shadow-md text-center text-white hover:bg-custom-orange hover:scale-110 hover:duration-700  "
            >
              <img
                src={skill.imageUrl}
                alt={`Image for ${skill.name}`}
                className="h-10 w-10 mx-auto mb-2"
              />
              {skill.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
