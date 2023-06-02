import React from 'react';

const Footer = () => {
  return (
    <footer className="p-4 text-white text-center mt-10">
      &copy; {new Date().getFullYear()} My Portfolio. All rights reserved.
    </footer>
  );
};

export default Footer;
