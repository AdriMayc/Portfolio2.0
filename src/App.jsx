// src/App.jsx
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./sections/Home";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Loader from "./components/Loader";
import { Analytics } from "@vercel/analytics/next"

function App() {
  const [theme, setTheme] = useState("light");
  const [language, setLanguage] = useState("pt");

  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");
  const toggleLanguage = () => setLanguage(language === "pt" ? "en" : "pt");

  return (
    <Router>
      <div>
        <Loader />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                theme={theme}
                toggleTheme={toggleTheme}
                language={language}
                toggleLanguage={toggleLanguage}
              />
            }
          />
          <Route
            path="/about"
            element={
              <About
                theme={theme}
                toggleTheme={toggleTheme}
                language={language}
                toggleLanguage={toggleLanguage}
              />
            }
          />
          <Route
            path="/projects"
            element={
              <Projects
                theme={theme}
                toggleTheme={toggleTheme}
                language={language}
                toggleLanguage={toggleLanguage}
              />
            }
          />
          <Route
            path="/contact"
            element={
              <Contact
                theme={theme}
                toggleTheme={toggleTheme}
                language={language}
                toggleLanguage={toggleLanguage}
              />
            }
          />
        </Routes>
        <Analytics />
      </div>
    </Router>
  );
}

export default App;
