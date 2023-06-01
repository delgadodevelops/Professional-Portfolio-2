import React from 'react';

const Footer = () => {
  return (
    <footer className="p-4 text-white text-center">
      &copy; {new Date().getFullYear()} My Portfolio. All rights reserved.
    </footer>
  );
};

export default Footer;
