import React from "react";
import "../../index.css";

const aboutMeText = (
  <p className="">
    As a Junior Front-End Developer, I excel in HTML, CSS, JavaScript, React,
    and Tailwind. I specialize in creating responsive websites with dynamic
    interfaces. I'm highly collaborative and passionate about astronomy,
    photography, video games, and computer science. I'm driven, open-minded, and
    committed to excellence in all my endeavors.
  </p>
);

const About = () => {
  return (
    <div className="bg-gradient-to-b from-custom-bluee to-custom-blue min-h-screen flex flex-col items-center justify-center">
      <div className="bg-custom-blue rounded-lg shadow-lg p-8 m-8">
        <img
          src="images/coding-img.png" // Replace with the URL or path to your photo
          alt="Your Name" // Replace with an appropriate alt text for your photo
          className=" h-30 w-30 mb-4" // Adjust the size and styling as needed
        />
        <h1 className="text-3xl text-center font-semibold italic mb-6">
          <span className="text-custom-orange">PASSIONATE</span>{" "}
          <span className="text-white">FRONT-END</span>{" "}
          <span className="text-custom-orange">REACT</span>{" "}
          <span className="text-white">DEVELOPER</span>
        </h1>
        <p className="text-gray-600 text-center text-sm leading-7">
          {aboutMeText}
        </p>
      </div>
    </div>
  );
};

export default About;
