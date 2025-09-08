import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const Background = ({ darkMode }) => {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const particlesOptions = {
    background: {
      color: { value: darkMode ? "#000000" : "#ffffff" },
    },
    fpsLimit: 60,
    interactivity: {
      events: { onHover: { enable: true, mode: "connect" }, resize: true },
      modes: { connect: { distance: 80, links: { opacity: darkMode ? 0.1 : 0.1 }, radius: 60 } },
    },
    particles: {
      color: { value: darkMode ? ["#fff"] : ["#46424D"] },
      links: {
        color: darkMode ? "#fff" : "#46424D",
        distance: 120,
        enable: true,
        opacity: darkMode ? 0.2 : 0.4, // dark / light
        width: 1,
      },
      move: {
        direction: "none",
        enable: true,
        outModes: { default: "bounce" },
        random: true,
        speed: 0.1, // mais lento
        straight: false,
      },
      number: {
        density: { enable: true, area: 400 }, // reduz área de distribuição
        value: 120, // menos partículas
      },
      opacity: { value: { min: 0.2, max: 0.4 }, animation: { enable: true, speed: 0.5 } },
      shape: { type: "circle" },
      size: { value: { min: 1, max: 2 }, animation: { enable: true, speed: 1 } },
      // forçando mais partículas para a região central
      position: { x: { min: 25, max: 75 }, y: { min: 25, max: 75 } },
    },
    detectRetina: true,
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={particlesOptions}
      className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none"
    />
  );
};

export default Background;