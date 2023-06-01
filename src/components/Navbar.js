import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-4 text-white">
      <div>
        <Link to="/" className="flex items-center">
          <img
            src="./images/DAVID-DELGADO-NAV-LOGO-UPDATED.png"
            alt="Logo"
            className="h-8 w-auto mr-2" // Adjust the height and width of the logo as needed
          />
        </Link>
      </div>
      <div className="flex space-x-14">
        <Link to="/about" className="text-white .text-white:hover relative">
          
          About
          <span className="underline-animation"></span>
        </Link>
        <Link to="/projects" className="text-white .text-white:hover relative">
          Projects
          <span className="underline-animation"></span>
        </Link>
        <Link to="/contact" className="text-white .text-white:hover relative">
          Contact
          <span className="underline-animation"></span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
