import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="p-4 text-white text-center mt-10 ">
      <div className="flex justify-center space-x-4">
        <a href="https://www.linkedin.com/in/david-delgado-02160619a/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="text-white text-xl hover:text-gray-500" />
        </a>
        <a href="https://github.com/ddelgado25" target="_blank" rel="noopener noreferrer">
          <FaGithub className="text-white text-xl hover:text-gray-500" />
        </a>
      </div>
      <p className="mt-4">&copy; {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
