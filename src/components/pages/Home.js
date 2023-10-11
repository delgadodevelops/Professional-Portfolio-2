import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import "../../index.css";

const Home = () => {
  const textRef = useRef(null);
  const cursorRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: [
        "Hi, My Name is David Delgado. I am a Front-End Developer Out of  Miami, Florida.🌴",
      ],
      typeSpeed: 40,
      loop: false,
      showCursor: false,
    };

    const typed = new Typed(textRef.current, options);

    const cursorElement = document.querySelector(".typed-cursor");
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
    <div className="home bg-gradient-to-b from-custom-blue to-custom-bluee h-auto lg:flex lg:flex-col lg:w-full lg:py-20">
      <div className="container mx-auto px-8 p-10 sm:py-6">
        <div className="content flex-col text-center gap-14 h-auto">
          <div className="hero-main text-center h-auto gap-4 lg:flex lg:justify-center lg:items-center lg:gap-20 lg:relative">
            <div className="hero-img h-80 w-80 sm:h-108 sm:w-108 xl:h-120 xl:w-120  sm:relative mx-auto  text-center">
              <img
                className=""
                src="/images/portfolio-photo-updated.png"
                alt="Portrait"
              />
            </div>
            <div className="hero-text flex flex-col max-w-screen-md relative xl:py-15">
              <h1 className="text-4xl sm:text-5xl xl:text-7xl lg:leading-11 mb-5 mt-5 md:mt-6 font-semibold text-custom-orange">
                Front-End React Developer
              </h1>
              <p
                className="text-xl sm:text-2xl xl:text-3xl font-light leading-8 mb-5 md:px-10 text-white"
                ref={textRef}
              ></p>
              <span className="flex justify-center gap-4 mb-8 mt-4">
                <a
                  href="https://github.com/delgadodevelops"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center bg-custom-orange text-white p-2 rounded-md transition-transform hover:scale-110"
                >
                  <img
                    src="images/github-color.svg"
                    alt="GitHub Icon"
                    className="w-5 h-5 mr-2 bg-custom-orange"
                  />
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/daviddelgado-/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center bg-custom-orange text-white p-2 rounded-md transition-transform hover:scale-110"
                >
                  <img
                    src="images/linkedin-color.svg"
                    alt="LinkedIn Icon"
                    className="w-5 h-5 mr-2 bg-custom-orange"
                  />
                  LinkedIn
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
