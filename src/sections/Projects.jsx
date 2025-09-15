// src/sections/Projects.jsx

import React from "react";
import Navbar from "../components/Navbar";
import RotatedGridBackground from "../components/Grid";
import ProjectCard from "../components/ProjectCard";

// Imagens
import Projeto_1 from "../img/Projeto1.png"

const content = {
  pt: {
    nav_about: "Sobre",
    nav_projects: "Projetos",
    nav_contact: "Contato",
    title: "Projetos",
  },
  en: {
    nav_about: "About",
    nav_projects: "Projects",
    nav_contact: "Contact",
    title: "Projects",
  },
};

const projectData = [
  {
    title: "E-commerce Data Pipeline",
    description: "Pipeline de dados end-to-end: ingestão, validação, Data Lake, transformação e dashboard.",
    tags: ["Python", "PySpark", "AWS S3", "AWS Glue", "PostgreSQL", "Metabase", "Docker"],
    imageSrc: Projeto_1,
  },
  {
    title: "Sistema de Navegação",
    description: "Automação de navegação para interfaces complexas utilizando IA.",
    tags: ["Svelte", "AI", "Tailwind CSS"],
    imageSrc: "https://placehold.co/600x400/a21caf/white",
  },
  {
    title: "E-commerce de Roupas",
    description: "Loja virtual com foco em experiência do usuário e performance.",
    tags: ["Next.js", "Stripe", "Vercel"],
    imageSrc: "https://placehold.co/600x400/0284c7/white",
  },
  {
    title: "Portal Imobiliário",
    description: "Gerencie todas as suas propriedades em um único lugar de forma simples e fácil.",
    tags: ["React", "Firebase", "Google Maps"],
    imageSrc: "https://placehold.co/600x400/be123c/white",
  }
];

export default function Projects({ theme, toggleTheme, language, toggleLanguage }) {
  const currentContent = content[language] || content.en;

  const themeClasses = {
    bg: theme === "light" ? "bg-gradient-to-br from-gray-50 to-gray-200" : "bg-gradient-to-br from-gray-800 to-black",
    text: theme === "light" ? "text-gray-800" : "text-gray-200",
    textStrong: theme === 'light' ? 'text-gray-800' : 'text-gray-100', // Adicionado para consistência
  };

  return (
    <div className={`relative font-sans w-full min-h-screen overflow-hidden transition-colors duration-500 ${themeClasses.bg} ${themeClasses.text}`}>
      <RotatedGridBackground theme={theme} />

      {/* --- ALTERAÇÃO 1: Estrutura do Navbar idêntica à página About --- */}
      <div className="relative z-10 w-full">
        <div className="max-w-6xl mx-auto px-8 py-16">
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

      {/* Adicionei as formas decorativas para manter a consistência visual, você pode remover se não quiser */}
      <div className="absolute inset-0 z-0">
          <div className={`absolute -top-20 -left-20 w-80 h-80 border-8 rounded-full transition-colors ${theme === 'light' ? 'border-gray-200/90' : 'border-gray-700/50'}`}></div>
          <div className={`absolute -bottom-24 -right-16 w-96 h-96 border-[12px] transition-colors ${theme === 'light' ? 'border-gray-200/90' : 'border-gray-700/50'}`}></div>
      </div>

      {/* --- ALTERAÇÃO 2: Estrutura do Conteúdo Principal idêntica à página About --- */}
      <div className="relative w-full flex justify-center pb-16 px-4 sm:px-6 lg:px-8">
        {/* --- ALTERAÇÃO 3: 'max-w-5xl' e sem margem no topo ('mt-24' removido) --- */}
        <main className="relative z-10 w-full max-w-5xl">
          <h1 className={`text-5xl md:text-6xl font-light tracking-widest uppercase mb-24 text-center ${themeClasses.textStrong}`}>
            {currentContent.title}
          </h1>

          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col gap-8">
              <ProjectCard {...projectData[0]} altText={`Imagem do projeto ${projectData[0].title}`} />
              <ProjectCard {...projectData[2]} altText={`Imagem do projeto ${projectData[2].title}`} />
            </div>

            <div className="flex flex-col gap-8 md:mt-16">
              <ProjectCard {...projectData[1]} altText={`Imagem do projeto ${projectData[1].title}`} />
              <ProjectCard {...projectData[3]} altText={`Imagem do projeto ${projectData[3].title}`} />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}