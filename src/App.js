// src/App.js

"use client";
import React, { useReducer, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeSection from "./components/HomeSection";
import WorksSection from "./components/WorksSection";
import AboutSection from "./components/AboutSection";
import { initialState, mainReducer } from "./reducers/mainReducer";
import MENU_ITEMS from "./data/menuItems";

function App() {
  const [state, dispatch] = useReducer(mainReducer, initialState);

  const toggleMenu = () => dispatch({ type: "TOGGLE_MENU" });

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "works", "about"];
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 50 && rect.bottom >= 50;
        }
        return false;
      });
      if (currentSection) {
        dispatch({ type: "SET_ACTIVE_SECTION", payload: currentSection });
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-[#1e3a8a] to-[#3b82f6]">
      <Header
        menuItems={MENU_ITEMS}
        activeSection={state.activeSection}
        toggleMenu={toggleMenu}
        isMenuOpen={state.isMenuOpen}
        setActiveSection={(section) => dispatch({ type: "SET_ACTIVE_SECTION", payload: section })}
      />
      <div className="flex-grow mt-16">
        <HomeSection
          isHovered={state.isHovered}
          setHover={(isHovered) => dispatch({ type: "SET_HOVER", payload: isHovered })}
        />
        <WorksSection />
        <AboutSection />
      </div>
      <Footer />
      <style jsx global>{`
        @import './styles/global.css';
      `}</style>
    </div>
  );
}

export default App;
