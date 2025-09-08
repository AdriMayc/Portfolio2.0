import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";

const Navbar = ({ darkMode, setDarkMode, language, setLanguage }) => {
  // Textos por idioma
  const menuItems = {
    pt: ["Sobre", "Projetos", "Contato"],
    en: ["About", "Projects", "Contact"],
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full flex items-center justify-between px-8 py-4 z-20 transition-colors duration-500 ${
        darkMode ? "text-white" : "text-black"
      }`}
    >
      <div className="bg-opacity-60 backdrop-blur-[60px] flex items-center justify-between px-4 py-2 rounded-md w-full border border-gray-500">
        {/* Nome no canto esquerdo clicável */}
        <div className="flex flex-col items-start cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          <span className="font-sans font-light">Adriano</span>
          <span className="font-sans font-light">Mayco</span>
        </div>

        {/* Menu central */}
        <ul className="flex items-center gap-30 font-sans font-light">
          {menuItems[language].map((item) => (
            <li
              key={item}
              className={`relative cursor-pointer transition-colors group ${
                darkMode ? "text-white hover:text-gray-300" : "text-black hover:text-gray-600"
              }`}
            >
              {item}
              <span
                className={`absolute left-1/2 bottom-0 w-0 h-[2px] bg-current transition-all duration-300 ease-out group-hover:w-full -translate-x-1/2`}
              />
            </li>
          ))}
        </ul>

        {/* Tema e idioma */}
        <div className="flex items-center gap-4">
          {/* Tema */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-1 rounded-full hover:bg-gray-300/40 transition-colors"
          >
            {darkMode ? (
              <SunIcon className="h-6 w-6 text-white cursor-pointer" />
            ) : (
              <MoonIcon className="h-6 w-6 text-gray-800 cursor-pointer" />
            )}
          </button>

          {/* Idioma */}
          <div className="flex gap-2 font-light">
            <span
              onClick={() => setLanguage("pt")}
              className={`cursor-pointer ${language === "pt" ? "underline" : ""}`}
            >
              PT
            </span>
            <span>|</span>
            <span
              onClick={() => setLanguage("en")}
              className={`cursor-pointer ${language === "en" ? "underline" : ""}`}
            >
              EN
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
