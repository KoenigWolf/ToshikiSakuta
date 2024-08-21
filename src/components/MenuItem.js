import React from "react";

const MenuItem = ({ item, activeSection, onClick }) => {
  if (item.type === "link") {
    return (
      <a
        key={item.name}
        href={item.href}
        className={`text-[#bfdbfe] hover:text-[#dbeafe] text-sm sm:text-base md:text-lg mb-2 md:mb-0 transition-all duration-300 ${
          activeSection === item.name.toLowerCase() ? "font-bold" : ""
        }`}
        onClick={() => onClick(item.name.toLowerCase())}
      >
        {item.name}
      </a>
    );
  } else {
    return (
      <a
        key={item.name}
        href={item.href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-lg sm:text-xl md:text-2xl text-[#bfdbfe] hover:text-[#dbeafe] transition-all duration-300 transform hover:scale-110"
        aria-label={`Visit ${item.name}`}
      >
        <i className={`${item.iconType} fa-${item.name}`}></i>
      </a>
    );
  }
};

export default MenuItem;
