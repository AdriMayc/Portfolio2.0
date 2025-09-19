// src/components/ScrollToTop.jsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = ({ duration = 500 }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    const start = window.scrollY;
    const startTime = performance.now();

    function scrollStep(timestamp) {
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3); // cubic easing
      window.scrollTo(0, start * (1 - ease));
      if (progress < 1) {
        requestAnimationFrame(scrollStep);
      }
    }

    requestAnimationFrame(scrollStep);
  }, [pathname, duration]);

  return null; // Não renderiza nada
};

export default ScrollToTop;
