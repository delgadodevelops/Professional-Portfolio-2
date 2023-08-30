import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="flex items-center justify-between p-4 drop-shadow-md">
      <div>
        <Link to="/" className="flex items-center text-nav">
          <span className="text-xl font-bold  ml-10">DELGADO DEVELOPS</span>
        </Link>
      </div>
      <div className="flex space-x-14 md:hidden">
        {/* Mobile Menu */}
        <div className="relative">
          <input
            type="checkbox"
            id="menu-toggle"
            className="hidden"
            checked={isMenuOpen}
            onChange={handleMenuToggle}
          />
          <label htmlFor="menu-toggle" className="block cursor-pointer">
            <svg
              className="h-6 w-6 fill-current text-nav"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className="fill-current"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4 5h16v2H4V5zm0 6h16v2H4v-2zm0 6h16v2H4v-2z"
              />
            </svg>
          </label>
          {isMenuOpen && (
            <div className="absolute top-0 right-0 mt-10 w-48 bg-white rounded-lg shadow-lg">
              <div className="py-1">
                <Link
                  to="/about"
                  className="block px-4 py-2 text-nav  hover:text-lg"
                >
                  About
                </Link>
                <Link
                  to="/projects"
                  className="block px-4 py-2 text-nav  hover:text-lg"
                >
                  Projects
                </Link>
                <Link
                  to="/contact"
                  className="block px-4 py-2 text-nav  hover:text-lg"
                >
                  Contact
                </Link>
                {isMobile && (
                  <a
                    href="/path/to/resume.pdf"
                    download="resume.pdf"
                    className="block px-4 py-2 text-nav border border-custom-orange rounded-lg hover:bg-custom-orange hover:text-white"
                  >
                    Download Resume
                  </a>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="hidden md:flex space-x-14">
        {/* Desktop Menu */}
        <Link to="/about" className="text-nav mt-2">
          About
        </Link>
        <Link to="/projects" className="text-nav mt-2">
          Projects
        </Link>
        <Link to="/contact" className="text-nav mt-2">
          Contact
        </Link>
        {!isMobile && (
          <a
            href="./images/DAVID DELGADO RESUME 2023.pdf"
            download="DAVID DELGADO RESUME 2023.pdf"
            className="text-nav border border-custom-orange rounded-lg px-4 py-2 hover:bg-custom-orange hover:text-white"
          >
            Download Resume
          </a>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
