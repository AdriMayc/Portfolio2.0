// src/components/Navbar.jsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { MoonIcon, SunIcon, MenuIcon, CloseIcon } from "./icons";

const Navbar = ({
  theme,
  toggleTheme,
  language,
  toggleLanguage,
  currentContent,
  themeClasses,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // --- Fecha o menu ao clicar em um link ---
  const handleLinkClick = () => setIsMenuOpen(false);

  // --- Fecha com ESC ---
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") setIsMenuOpen(false);
    };
    if (isMenuOpen) document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [isMenuOpen]);

  // --- Bloqueia scroll do body e preserva posição ---
  useEffect(() => {
    if (!isMenuOpen) return;

    const scrollY = window.scrollY || document.documentElement.scrollTop || 0;
    // prende o body no lugar (evita que o background role)
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.left = "0";
    document.body.style.right = "0";
    document.body.style.width = "100%";

    return () => {
      // restaura e volta para a mesma posição de scroll
      const prevScroll = parseInt(document.body.style.top || "0", 10) * -1 || 0;
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.body.style.width = "";
      window.scrollTo(0, prevScroll);
    };
  }, [isMenuOpen]);

  return (
    <header className="relative flex justify-between items-center mb-20 p-4 md:p-0">
      <Link to="/" aria-label="Home" onClick={handleLinkClick}>
        <span className="font-bold underline text-lg">Home</span>
      </Link>

      {/* Navegação Desktop */}
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

      {/* Botão Menu Mobile */}
      <div className="md:hidden">
        <button
          onClick={() => setIsMenuOpen((s) => !s)}
          className={`${themeClasses.textSubtle} ${themeClasses.textHover}`}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      {/* Painel Mobile */}
      {isMenuOpen && (
        <div
          /* 
            1) Background controlado pelo prop `theme` (não depende do `dark:`).
            2) overflow-auto e max-h-screen permitem rolar o menu sem rolar a página de trás.
            3) overscroll-contain evita scroll chaining (útil em mobile/iOS).
          */
          className={`fixed inset-0 z-50 md:hidden transition-colors overflow-auto overscroll-contain ${
            theme === "light" ? "bg-gray-100" : "bg-gray-900"
          }`}
        >
          <div className="flex flex-col min-h-screen p-4">
            {/* Cabeçalho do menu */}
            <div className="flex justify-between items-center pt-2">
              <button
                onClick={toggleTheme}
                className={`cursor-pointer ${themeClasses.textSubtle} ${themeClasses.textHover}`}
                aria-label="Toggle dark mode"
              >
                {theme === "light" ? <MoonIcon /> : <SunIcon />}
              </button>

              <Link to="/" aria-label="Home" onClick={handleLinkClick}>
                <span className="font-semibold underline text-lg">HOME</span>
              </Link>

              <button
                onClick={() => setIsMenuOpen(false)}
                className={`${themeClasses.textSubtle} ${themeClasses.textHover}`}
                aria-label="Close menu"
              >
                <CloseIcon />
              </button>
            </div>

            {/* Links (conteúdo rolável do menu) */}
            <nav className="flex flex-col justify-center items-center flex-grow space-y-8 pt-8 gap-14">
              <Link
                to="/about"
                onClick={handleLinkClick}
                className={`text-xl transition-colors ${themeClasses.textSubtle} ${themeClasses.textHover}`}
              >
                {currentContent.nav_about.toUpperCase()}
              </Link>
              <Link
                to="/projects"
                onClick={handleLinkClick}
                className={`text-xl transition-colors ${themeClasses.textSubtle} ${themeClasses.textHover}`}
              >
                {currentContent.nav_projects.toUpperCase()}
              </Link>
              <Link
                to="/contact"
                onClick={handleLinkClick}
                className={`text-xl transition-colors ${themeClasses.textSubtle} ${themeClasses.textHover}`}
              >
                {currentContent.nav_contact.toUpperCase()}
              </Link>

              <button
                onClick={() => { toggleLanguage(); handleLinkClick(); }}
                className={`underline transition-colors font-bold text-lg cursor-pointer   ${themeClasses.textSubtle} ${themeClasses.textHover}`}
              >
                {language === "pt" ? "ENGLISH" : "PORTUGUÊS"}
              </button>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
