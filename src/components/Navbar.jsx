// src/components/Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";
import { AsteriskIcon, MoonIcon, SunIcon } from "./icons";

const Navbar = ({
  theme,
  toggleTheme,
  language,
  toggleLanguage,
  currentContent,
  themeClasses,
}) => {
  return (
    <header className="flex justify-between items-center mb-20 ml-5">
      <Link to="/" aria-label="Home">
        <span className="font-bold underline">Home</span>
      </Link>
      <nav className="flex items-center space-x-6 md:space-x-8">
        <Link
          to="/about"
          className={`transition-colors ${themeClasses.textSubtle} ${themeClasses.textHover}`}
        >
          {currentContent.nav_about}
        </Link>
        <Link
          to="/projects"
          className={`transition-colors ${themeClasses.textSubtle} ${themeClasses.textHover}`}
        >
          {currentContent.nav_projects}
        </Link>
        <Link
          to="/contact"
          className={`transition-colors ${themeClasses.textSubtle} ${themeClasses.textHover}`}
        >
          {currentContent.nav_contact}
        </Link>
        <button
          onClick={toggleLanguage}
          className={`transition-colors font-semibold text-sm cursor-pointer ${themeClasses.textSubtle} ${themeClasses.textHover}`}
        >
          {language === "pt" ? "EN" : "PT"}
        </button>
        <button
          onClick={toggleTheme}
          className={`text-gray-800 dark:text-gray-400 cursor-pointer ${
            theme ? "hover:text-gray-600" : "hover:text-gray-900"
          }`}
          aria-label="Toggle dark mode"
        >
          {theme === "light" ? <MoonIcon /> : <SunIcon />}
        </button>
      </nav>
    </header>
  );
};

export default Navbar;