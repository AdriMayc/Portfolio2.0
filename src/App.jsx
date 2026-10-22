// src/App.jsx
import React, { useEffect, useRef, useState } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from "react-router-dom";
import Home from "./sections/Home";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Loader from "./components/Loader";
import ScrollToTop from "./components/ScrollToTop";
import { Analytics } from "@vercel/analytics/react"

function RedirectReloadToHome() {
  const location = useLocation();
  const navigate = useNavigate();
  const hasCheckedInitialNavigation = useRef(false);

  useEffect(() => {
    if (hasCheckedInitialNavigation.current) {
      return;
    }

    hasCheckedInitialNavigation.current = true;
    const navigationEntry = window.performance.getEntriesByType("navigation")[0];

    if (navigationEntry?.type === "reload" && location.pathname !== "/") {
      navigate("/", { replace: true });
    }
  }, [location.pathname, navigate]);

  return null;
}

function App() {
  const [theme, setTheme] = useState("light");
  const [language, setLanguage] = useState("pt");

  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");
  const toggleLanguage = () => setLanguage(language === "pt" ? "en" : "pt");

  return (
    <Router>
      <RedirectReloadToHome />
      <ScrollToTop duration={700} />
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
