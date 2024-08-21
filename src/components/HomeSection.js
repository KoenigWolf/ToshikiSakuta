// src/components/HomeSection.js

import React from "react";

const HomeSection = ({ isHovered, setHover }) => {
  const NAME_STYLE = "text-4xl md:text-6xl font-bold no-underline text-[#eff6ff] transition-all duration-300";
  const TITLE_STYLE = "text-xl md:text-2xl font-light text-[#bfdbfe] tracking-wider transition-all duration-300";

  return (
    <section
      id="home"
      className="flex items-center justify-center min-h-screen p-4 md:p-0"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        transform: isHovered ? "scale(1.05)" : "scale(1)",
        transition: "transform 0.5s ease-in-out",
      }}
    >
      <div className="text-center">
        <h1 className="mb-4">
          <a href="#" className={NAME_STYLE}>
            TOSHIKI SAKUTA
          </a>
        </h1>
        <p className={TITLE_STYLE}>WEB ENGINEER</p>
      </div>
    </section>
  );
};

export default HomeSection;
