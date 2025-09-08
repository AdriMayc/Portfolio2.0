import React, { useState } from "react";
import Background from "../components/Background";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero"

const Home = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [language, setLanguage] = useState("pt"); // idioma inicial PT

  return (
    <div className={`${darkMode ? "bg-black" : "bg-white"} relative min-h-screen w-full overflow-hidden transition-colors duration-500`}>
      {/* Navbar */}
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        language={language}
        setLanguage={setLanguage}
      />

      {/* Background */}
      <Background darkMode={darkMode} />

      <Hero darkMode={darkMode}/>

    </div>
  );
};

export default Home;
