// src/components/Navbar.jsx
import React from "react";
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
    <header className="flex justify-between items-center mb-20">
      <a href="#" aria-label="Home">
        <AsteriskIcon theme={theme} />
      </a>
      <nav className="flex items-center space-x-6 md:space-x-8">
        <a
          href="#"
          className={`transition-colors ${themeClasses.textSubtle} ${themeClasses.textHover}`}
        >
          {currentContent.nav_about}
        </a>
        <a
          href="#"
          className={`transition-colors ${themeClasses.textSubtle} ${themeClasses.textHover}`}
        >
          {currentContent.nav_projects}
        </a>
        <a
          href="#"
          className={`transition-colors ${themeClasses.textSubtle} ${themeClasses.textHover}`}
        >
          {currentContent.nav_contact}
        </a>
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
