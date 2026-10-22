// src/sections/Contact.jsx
import React, { useEffect, useState } from "react";
import RotatedGridBackground from "../components/Grid";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import NextPageLink from "../components/NextPageLink";
import { SocialIcon } from "../components/icons";
import Reveal from "../components/Reveal";

const socialIcons = {
    linkedin: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z",
    github: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z",
};

const content = {
    pt: {
        nav_about: "Sobre",
        nav_projects: "Projetos",
        nav_contact: "Contato",
        title: "Contato",
        intro: "Entre em contato diretamente em",
        email: "amayco@outlook.com.br",
        copy: "Copiar e-mail",
        copied: "Copiado ✓",
        copyError: "Não foi possível copiar",
    },
    en: {
        nav_about: "About",
        nav_projects: "Projects",
        nav_contact: "Contact",
        title: "Contact",
        intro: "Get in touch directly at",
        email: "amayco@outlook.com.br",
        copy: "Copy email",
        copied: "Copied ✓",
        copyError: "Unable to copy",
    },
};

export default function Contact({ theme, toggleTheme, language, toggleLanguage }) {
    const currentContent = content[language];
    const [copyState, setCopyState] = useState("idle");

    useEffect(() => {
        document.title = "Contact | Adriano Mayco";
    }, []);

    const handleCopyEmail = async () => {
        try {
            await navigator.clipboard.writeText(currentContent.email);
            setCopyState("copied");
            window.setTimeout(() => setCopyState("idle"), 1800);
        } catch {
            setCopyState("error");
        }
    };

    const themeClasses = {
        bg: theme === "light" ? "bg-gradient-to-br from-gray-50 to-gray-200" : "bg-gradient-to-br from-gray-800 to-black", text: theme === "light" ? "text-gray-800" : "text-gray-200",
        textSubtle: theme === "light" ? "text-gray-600" : "text-gray-300",
        textStrong: theme === "light" ? "text-gray-800" : "text-gray-100",
        textHover: theme === "light" ? "hover:text-gray-900" : "hover:text-white",
        textHoverBlack: theme === "light" ? "hover:text-black" : "hover:text-white",
        shapeBorder: theme === "light" ? "border-gray-200/50" : "border-gray-700/50",
        shapeBg: theme === "light" ? "bg-gray-100/50" : "bg-gray-800/50",
    };

    return (
        <div className={`relative flex min-h-screen w-full flex-col overflow-hidden font-sans transition-colors duration-500 ${themeClasses.bg} ${themeClasses.text}`}>

            <RotatedGridBackground theme={theme} />

            {/* Shapes */}
            <div className={`absolute -top-20 -left-20 w-80 h-80 border-8 rounded-full transition-colors ${themeClasses.shapeBorder}`}></div>
            <div className={`absolute -bottom-24 -right-16 w-96 h-96 border-[12px] transition-colors ${themeClasses.shapeBorder}`}></div>
            <div className={`absolute top-[60%] -right-24 w-60 h-60 rounded-full transition-colors ${themeClasses.shapeBg}`}></div>

            {/* Content */}
            <div className="relative flex w-full flex-1 justify-center px-4 pb-16 pt-10 sm:px-6 md:pt-32 lg:px-8">

                {/* Navbar */}
                <div className="absolute top-0 left-0 w-full">
                    <div className="relative z-20 w-full max-w-6xl mx-auto md:px-8 pt-16">
                        <Navbar
                            theme={theme}
                            toggleTheme={toggleTheme}
                            language={language}
                            toggleLanguage={toggleLanguage}
                            currentContent={currentContent}
                            themeClasses={themeClasses}
                        />
                    </div>
                </div>

                {/* Main content */}
                <Reveal className="relative z-10 w-full max-w-5xl">
                <main>
                    <Reveal className="mb-16">
                        <div className={`mb-4 flex items-center gap-3 font-mono text-xs tracking-[0.12em] ${themeClasses.textSubtle}`}>
                            03
                            <span className="contact-eyebrow-rule h-px w-10 bg-current" aria-hidden="true"></span>
                        </div>
                        <h1 className={`overflow-hidden text-5xl font-extralight uppercase leading-none tracking-[0.12em] md:text-7xl ${themeClasses.textStrong}`}>
                            <span className="contact-title-line block">
                                {currentContent.title}
                            </span>
                        </h1>
                    </Reveal>

                    <Reveal delay={100} className={`mb-6 text-[1.1rem] font-light ${themeClasses.textSubtle}`}>
                        {currentContent.intro}
                    </Reveal>

                    <Reveal delay={200}>
                        <a
                            href={`mailto:${currentContent.email}`}
                            className={`contact-email block w-fit max-w-full break-all text-2xl font-extralight leading-tight tracking-[0.02em] md:text-6xl ${themeClasses.textStrong}`}
                        >
                            {currentContent.email}
                        </a>
                    </Reveal>

                    <Reveal delay={300} className="mt-6 flex flex-wrap items-center gap-6">
                        <button
                            type="button"
                            onClick={handleCopyEmail}
                            className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm transition-all duration-300 ${
                                copyState === "copied"
                                    ? "border-indigo-600 bg-indigo-600 text-white"
                                    : copyState === "error"
                                      ? "border-red-500 text-red-500"
                                      : theme === "light"
                                        ? "border-gray-300 text-gray-600 hover:border-indigo-600 hover:text-gray-900"
                                        : "border-gray-700 text-gray-300 hover:border-indigo-400 hover:text-white"
                            }`}
                        >
                            {copyState === "copied"
                                ? currentContent.copied
                                : copyState === "error"
                                  ? currentContent.copyError
                                  : `⧉ ${currentContent.copy}`}
                        </button>

                        <div className="flex items-center gap-6">
                            <a
                                href="https://www.linkedin.com/in/adriano-mayco/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="LinkedIn"
                                className={`transition-all duration-300 hover:-translate-y-1 ${themeClasses.textSubtle} ${themeClasses.textHover}`}
                            >
                                <SocialIcon d={socialIcons.linkedin} theme={theme} />
                            </a>
                            <a
                                href="https://github.com/AdriMayc"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="GitHub"
                                className={`transition-all duration-300 hover:-translate-y-1 ${themeClasses.textSubtle} ${themeClasses.textHover}`}
                            >
                                <SocialIcon d={socialIcons.github} theme={theme} />
                            </a>
                        </div>
                    </Reveal>
                </main>
                </Reveal>
            </div>
            <NextPageLink currentPath="/contact" language={language} theme={theme} />
            <Footer theme={theme} />
        </div>
    );
}