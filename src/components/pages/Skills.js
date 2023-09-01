import React, { useEffect, useState } from 'react';


const Skills = () => {
  const Stats = [
    { language: 'JavaScript', proficiency: 75 },
    { language: 'HTML/CSS', proficiency: 90 },
    { language: 'React', proficiency: 65 },
    { language: 'Express', proficiency: 65 },
    { language: 'TailwindCSS', proficiency: 90 },
  ];

  const [animationStarted, setAnimationStarted] = useState(false);

  useEffect(() => {
    setAnimationStarted(true);
  }, []);

  return (
      <div>
        <h2 className="text-home text-3xl font-bold mb-5">Skills //</h2>
        {Stats.map((skill, index) => (
          <div key={index} className="mb-4">
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
  );
};



export default Skills;