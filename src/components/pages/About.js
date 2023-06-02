import React, { useEffect, useState } from 'react';

const About = () => {
  const skills = [
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
    <div className="container mx-auto p-20 custom-container">
      <h1 className="text-home text-6xl font-bold mb-5">ABOUT ME //</h1>
      <hr className="text-home border-gray-400 border-t-2 my-6" />
      <div className="mb-8">
        <h2 className="text-home text-3xl font-bold mb-5">Here's a bit about myself //</h2>
        <p className="text-white text-xl">
          Hi, my name is David Delgado. I am a recently graduated Full-Stack Developer from the University of Miami Coding Bootcamp. I am fluent in HTML/CSS, JavaScript, mySQL, MongoDB, Express, React, and Node. My real passion comes in the design and UI aspect of applications. I am very well versed in TailwindCSS and have been using it to style my most recent applications, including this one.
        </p>
      </div>
      <div>
        <h2 className="text-home text-3xl font-bold mb-5">Skills //</h2>
        {skills.map((skill, index) => (
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
    </div>
  );
};

export default About;
