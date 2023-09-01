import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import "../../index.css"

const Home = () => {
  const textRef = useRef(null);
  const cursorRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: ['Hi, My Name is David Delgado. I am a Front-end Developer Out of  Miami, Florida.'],
      typeSpeed: 60,
      loop: false,
      showCursor: false,
    };

    const typed = new Typed(textRef.current, options);

    const cursorElement = document.querySelector('.typed-cursor');
    cursorRef.current = cursorElement;

    return () => {
      typed.destroy();
    };
  }, []);

  useEffect(() => {
    const cursorElement = cursorRef.current;
    const textElement = textRef.current;

    if (cursorElement && textElement) {
      const textRect = textElement.getBoundingClientRect();
      cursorElement.style.transform = `translateY(${textRect.height}px)`;
    }
  }, []);

  return (
    <div className="home flex h-screen realtive w-full mt-20 ">
      <div className="container ">
        <div className="content flex items-center justify-center relative h-{65rem} gap-40 ">
          <div className="hero-main flex items-center gap-40 justify-center relative " >
            <div className="hero-text flex flex-col max-w-[50rem] relative">
              <h1 className="text-7xl leading-11 mt-6 mb-6 font-bold block text-custom-orange">Front-End React Developer</h1>
              <p className="text-2xl font-medium leading-relaxed my-4 mx-0 block text-white" ref={textRef}></p>
              <span className='cursor-pointer flex gap-5 my-6  '>
                <a
                  href="https://github.com/delgadodevelops"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center bg-custom-bluee text-white py-2 px-4 rounded-lg shadow-md transition-transform duration-300 ease-in-out hover:scale-110"
                >
                  <span className="mr-2">
                    <img src="images/github-color.svg" alt="GitHub Icon" className="bg-custom-bluee transition duration-300 w-5 h-5" />
                  </span>
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/daviddelgado-/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center bg-custom-bluee text-white py-2 px-4 rounded-lg shadow-md transition-transform duration-300 ease-in-out hover:scale-110"
                >
                  <span className="mr-2">
                    <img src="images/linkedin-color.svg" alt="LinkedIn Icon" className="bg-custom-bluee transition duration-300 w-5 h-5" />
                  </span>
                  Linkedin
                </a>
              </span>
            </div>
            <div className="hero-img h-[40rem] w-[40rem]">
              <img
                className=""
                src="./images/portfolio-photo-updated.png"
                alt="Portrait"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;


