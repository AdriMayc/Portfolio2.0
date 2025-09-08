import React from "react";
import Particles from "react-tsparticles";

const Hero = ({ darkMode }) => {
    return (
        <section className="relative flex items-center justify-center min-h-screen">
            {/* Hero Section */}
            <div
                className={`
      relative z-10 p-12 md:p-20 max-w-4xl w-full text-center shadow-2xl
      transition-colors duration-500
      ${darkMode ? "bg-white text-black" : "bg-white text-black"}
    `}
                style={{
                    mixBlendMode: "difference", // partículas mudam automaticamente
                    borderRadius: "1rem", // só pra dar acabamento suave
                }}
            >
                <h1 className="text-6xl font-extrabold mb-6">DATA ENGINEER</h1>
                <p className="text-lg md:text-xl opacity-80">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam facilisis
                    sapien eu efficitur ultricies.
                </p>
            </div>
        </section>
    );
};

export default Hero;
