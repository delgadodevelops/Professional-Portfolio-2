import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-4 bg-gray-800 text-white">
      <div>
        <Link to="/" className="font-bold text-lg">My Portfolio</Link>
      </div>
      <div className="flex space-x-4">
        <Link to="/about" className="text-white hover:text-gray-400">About</Link>
        <Link to="/projects" className="text-white hover:text-gray-400">Projects</Link>
        <Link to="/contact" className="text-white hover:text-gray-400">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;
