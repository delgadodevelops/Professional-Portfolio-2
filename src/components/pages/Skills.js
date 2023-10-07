import React, { useEffect, useState } from 'react';


const Skills = () => {
  const Stats = [
    { language: 'JavaScript', proficiency: 75 },
    { language: 'HTML/CSS', proficiency: 90 },
    { language: 'React', proficiency: 65 },
    { language: 'Github', proficiency: 75 },
    { language: 'TailwindCSS', proficiency: 80 },
  ];

  const [animationStarted, setAnimationStarted] = useState(false);

  useEffect(() => {
    setAnimationStarted(true);
  }, []);

  return (
    <div className="bg-gradient-to-b from-custom-blue to-custom-bluee min-h-screen flex flex-col items-center justify-center">
      <div className="bg-custom-blue rounded-lg shadow-lg p-10 m-10">
        <h2 className="text-home text-3xl font-bold mb-5">Skills</h2>
        {Stats.map((skill, index) => (
          <div key={index} className="mb-6 w-64">
            <h3 className="text-white text-lg font-bold">{skill.language}</h3>
            <div className="bg-custom-bluee h-4 rounded overflow-hidden">
              <div
                className={`bg-blue-300 h-4 rounded ${animationStarted ? 'animate-progress' : ''}`}
                style={{ width: `${skill.proficiency}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};



export default Skills;