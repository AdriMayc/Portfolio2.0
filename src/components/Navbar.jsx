// src/components/Navbar.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  MoonIcon,
  SunIcon,
  MenuIcon, // <-- Importar novo ícone
  CloseIcon, // <-- Importar novo ícone
} from "./icons";

const Navbar = ({
  theme,
  toggleTheme,
  language,
  toggleLanguage,
  currentContent,
  themeClasses,
}) => {
  // --- NOVO: Estado para controlar o menu mobile ---
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // --- NOVO: Função para fechar o menu ao clicar em um link ---
  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    // Adicionado `relative` para posicionar o menu mobile
    <header className="relative flex justify-between items-center mb-20  p-4 md:p-0">
      <Link to="/" aria-label="Home" onClick={handleLinkClick}>
        <span className="font-bold underline text-lg">Home</span>
      </Link>

      {/* --- ATUALIZADO: Navegação para Desktop (escondida em mobile) --- */}
      <nav className="hidden md:flex items-center space-x-6 md:space-x-8">
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
          className={`cursor-pointer ${themeClasses.textSubtle} ${themeClasses.textHover}`}
          aria-label="Toggle dark mode"
        >
          {theme === "light" ? <MoonIcon /> : <SunIcon />}
        </button>
      </nav>

      {/* --- NOVO: Botão do Menu Mobile (visível apenas em mobile) --- */}
      <div className="md:hidden">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className={`${themeClasses.textSubtle} ${themeClasses.textHover}`}
          aria-label="Open menu"
        >
          {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      {/* --- NOVO: Painel do Menu Mobile --- */}
      {isMenuOpen && (
        <div
          className={`md:hidden absolute top-full left-0 w-full z-20 ${themeClasses.bg}`}
        >
          <nav className="flex flex-col items-center space-y-6 py-8">
            <Link
              to="/about"
              onClick={handleLinkClick}
              className={`text-lg transition-colors ${themeClasses.textSubtle} ${themeClasses.textHover}`}
            >
              {currentContent.nav_about}
            </Link>
            <Link
              to="/projects"
              onClick={handleLinkClick}
              className={`text-lg transition-colors ${themeClasses.textSubtle} ${themeClasses.textHover}`}
            >
              {currentContent.nav_projects}
            </Link>
            <Link
              to="/contact"
              onClick={handleLinkClick}
              className={`text-lg transition-colors ${themeClasses.textSubtle} ${themeClasses.textHover}`}
            >
              {currentContent.nav_contact}
            </Link>
            {/* Controles de idioma e tema também no mobile */}
            <div className="flex items-center space-x-6 pt-4">
              <button
                onClick={toggleLanguage}
                className={`transition-colors font-semibold text-sm cursor-pointer ${themeClasses.textSubtle} ${themeClasses.textHover}`}
              >
                {language === "pt" ? "EN" : "PT"}
              </button>
              <button
                onClick={toggleTheme}
                className={`cursor-pointer ${themeClasses.textSubtle} ${themeClasses.textHover}`}
                aria-label="Toggle dark mode"
              >
                {theme === "light" ? <MoonIcon /> : <SunIcon />}
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;