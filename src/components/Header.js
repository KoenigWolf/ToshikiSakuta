import React from "react";
import MenuItem from "./MenuItem";

const Header = ({ menuItems, activeSection, toggleMenu, isMenuOpen, setActiveSection }) => {
  return (
    <header className="w-full p-2 md:p-4 bg-[#1d4ed8] bg-opacity-50 fixed top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-[#eff6ff] text-2xl font-bold">
          <a href="#home" onClick={() => setActiveSection("home")}>
          </a>
        </div>
        <nav className="hidden md:flex space-x-6">
          {menuItems.map((item) => (
            <MenuItem key={item.name} item={item} activeSection={activeSection} onClick={setActiveSection} />
          ))}
        </nav>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-[#bfdbfe] hover:text-[#dbeafe] focus:outline-none"
            aria-label="Toggle menu"
          >
            <i className={`fas fa-${isMenuOpen ? "times" : "bars"} text-2xl`}></i>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
