// src/sections/Projects.jsx
import { Link } from "react-router-dom";
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import RotatedGridBackground from "../components/Grid";
import ProjectCard from "../components/ProjectCard";
import ProjectDetail from "../components/ProjectDetail";
import Projeto_1 from "../img/Projeto1.png";
import Projeto_2 from "../img/Projeto2_power bi.jpeg";
import { ArrowRightIcon, SocialIcon } from "../components/icons";

const socialIcons = {
    linkedin: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z",
    github: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z",
};


const content = {
  pt: {
    nav_about: "Sobre",
    nav_projects: "Projetos",
    nav_contact: "Contato",
    title: "Projetos",
    go_contact: "Ir para Contato",
  },
  en: {
    nav_about: "About",
    nav_projects: "Projects",
    nav_contact: "Contact",
    title: "Projects",
    go_contact: "Go to Contact",
  },
};

const projectData = [
  {
    title: {
      pt: "E-commerce Data Pipeline",
      en: "E-commerce Data Pipeline"
    },
    description: {
      pt: "Pipeline de dados end-to-end: ingestão, validação, Data Lake, transformação e dashboard.",
      en: "End-to-end data pipeline: ingestion, validation, Data Lake, transformation and dashboard."
    },
    tags: ["Python", "PySpark", "AWS S3", "AWS Glue", "PostgreSQL", "Metabase", "Docker"],
    imageSrc: Projeto_1,
    subtitle: {
      pt: "Uma solução completa de engenharia de dados para e-commerce.",
      en: "A complete data engineering solution for e-commerce."
    },
    longDescription: {
      pt: "Este projeto demonstra um pipeline de dados completo, desde a ingestão de dados brutos de vendas, passando pela validação e armazenamento em um Data Lake na AWS S3. Os dados são então processados com PySpark e AWS Glue, enriquecidos e carregados em um Data Warehouse PostgreSQL. Por fim, um dashboard interativo no Metabase permite a visualização e análise dos KPIs de negócio.",
      en: "This project demonstrates a complete data pipeline, from the ingestion of raw sales data, through validation and storage in an AWS S3 Data Lake. The data is then processed with PySpark and AWS Glue, enriched and loaded into a PostgreSQL Data Warehouse. Finally, an interactive dashboard in Metabase allows the visualization and analysis of business KPIs."
    },
    projectUrl: "https://github.com/AdriMayc/ecommerce-data-pipeline",
    githubUrl: "https://github.com/AdriMayc/ecommerce-data-pipeline",
    mediumUrl: "",
    dashboardUrl: ""
  },
  {
    title: {
      pt: "Dashboard Zyvera",
      en: "Zyvera Dashboard"
    },
    description: {
      pt: "Análise e visualização de dados para tomada de decisão estratégica.",
      en: "Data analysis and visualization for strategic decision making."
    },
    tags: ["Power BI", "ETL", "DAX"],
    imageSrc: Projeto_2,
    subtitle: {
      pt: "Dashboards interativos para inteligência de negócio.",
      en: "Interactive dashboards for business intelligence."
    },
    longDescription: {
      pt: "O projeto surgiu da demanda por converter dados dispersos em informações que possam ser utilizadas.  Com base em uma empresa fictícia chamada Zyvera, desenvolvi um fluxo simples de análise totalmente no Power BI. Isso incluiu a importação do conjunto de dados, a limpeza e a modelagem dos dados no Power Query, e, finalmente, a criação de um painel interativo que sintetiza todo esse processo em uma visualização clara para os gestores, destacando as melhores práticas para o tratamento e a apresentação dos indicadores em um único ambiente.",
      en: "The need to convert dispersed data into actionable information gave rise to the project.  Working with a fictional company, Zyvera, I created a straightforward analysis flow in Power BI: importing the dataset, cleaning and modeling the data in Power Query, and finally creating an interactive dashboard that translates all of these steps into a clear visual representation for managers, demonstrating good handling and presentation practices of indicators in a unique setting."
    },
    projectUrl: "https://medium.com/@workflow.gamedesign/como-analisar-um-dashboard-de-vendas-e-converter-informa%C3%A7%C3%B5es-em-decis%C3%B5es-estrat%C3%A9gicas-a1f9210f9e19",
    githubUrl: "",
    mediumUrl: "https://medium.com/@workflow.gamedesign/como-analisar-um-dashboard-de-vendas-e-converter-informa%C3%A7%C3%B5es-em-decis%C3%B5es-estrat%C3%A9gicas-a1f9210f9e19",
    dashboardUrl: "https://app.powerbi.com/view?r=eyJrIjoiYzY2YjQ2M2YtOTE0Ny00NGNjLWI4ZTItOWY1ZTYxYmQ0NWI0IiwidCI6ImNmNzJlMmJkLTdhMmItNDc4My1iZGViLTM5ZDU3YjA3Zjc2ZiIsImMiOjR9"
  }
];

const XMarkIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

export default function Projects({ theme, toggleTheme, language, toggleLanguage }) {
  const currentContent = content[language] || content.en;
  const [selectedProject, setSelectedProject] = useState(null);
  
  const themeClasses = {
    bg: theme === "light" ? "bg-gradient-to-br from-gray-50 to-gray-200" : "bg-gradient-to-br from-gray-800 to-black",
    text: theme === "light" ? "text-gray-800" : "text-gray-200",
    textStrong: theme === 'light' ? 'text-gray-800' : 'text-gray-100',
  };

  const column1Projects = projectData.filter((_, index) => index % 2 === 0);
  const column2Projects = projectData.filter((_, index) => index % 2 !== 0);

  const handleProjectClick = (project) => setSelectedProject(project);
  const handleBackClick = () => setSelectedProject(null);

  const isPanelOpen = !!selectedProject;

  // Função para obter o conteúdo do projeto no idioma correto
  const getProjectContent = (project, field) => {
    if (typeof project[field] === 'object' && project[field] !== null) {
      return project[field][language] || project[field].pt || project[field].en;
    }
    return project[field];
  };

  return (
    <div className={`relative font-sans w-full min-h-screen overflow-hidden transition-colors duration-500 ${themeClasses.bg} ${themeClasses.text}`}>
      <RotatedGridBackground theme={theme} />
      <div className="relative z-20 w-full">
        <div className="max-w-6xl mx-auto px-8 pt-16 md:py-16">
          <Navbar theme={theme} toggleTheme={toggleTheme} language={language} toggleLanguage={toggleLanguage} currentContent={currentContent} themeClasses={themeClasses} />
        </div>
      </div>
      <div className="absolute inset-0 z-0 pointer-events-none">
          <div className={`absolute -top-20 -left-20 w-80 h-80 border-8 rounded-full transition-colors ${theme === 'light' ? 'border-gray-200/90' : 'border-gray-700/50'}`}></div>
          <div className={`absolute -bottom-24 -right-16 w-96 h-96 border-[12px] transition-colors ${theme === 'light' ? 'border-gray-200/90' : 'border-gray-700/50'}`}></div>
      </div>

      <div className="relative w-full flex justify-center pb-16 px-4 sm:px-6 lg:px-8">
        <main className="relative z-10 w-full max-w-5xl">
            <h1 className={`text-5xl md:text-6xl font-light tracking-widest uppercase mb-24 text-center ${themeClasses.textStrong}`}>
              {currentContent.title}
            </h1>
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex flex-col gap-8">
                {column1Projects.map((project) => ( 
                  <ProjectCard 
                    key={getProjectContent(project, 'title')} 
                    title={getProjectContent(project, 'title')}
                    description={getProjectContent(project, 'description')}
                    tags={project.tags}
                    imageSrc={project.imageSrc}
                    onClick={() => handleProjectClick(project)}
                  />
                ))}
              </div>
              <div className="flex flex-col gap-8 md:mt-16">
                {column2Projects.map((project) => ( 
                  <ProjectCard 
                    key={getProjectContent(project, 'title')} 
                    title={getProjectContent(project, 'title')}
                    description={getProjectContent(project, 'description')}
                    tags={project.tags}
                    imageSrc={project.imageSrc}
                    onClick={() => handleProjectClick(project)}
                  />
                ))}
              </div>
            </div>
<div className="mt-16">
                        <Link
                            to="/contact"
                            className={`inline-flex  mt-12 transition-colors ${themeClasses.text} ${themeClasses.textHoverBlack}`}
                        >
                            {currentContent.go_contact}
                            <ArrowRightIcon />
                        </Link>

                        <div className="flex items-center space-x-6 mt-10 ml-2">
                            <a
                                href="https://www.linkedin.com/in/adriano-mayco/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <SocialIcon d={socialIcons.linkedin} theme={theme} />
                            </a>

                            <a
                                href="https://github.com/AdriMayc"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <SocialIcon d={socialIcons.github} theme={theme} />
                            </a>
                        </div>
                    </div>
            
        </main>
      </div>

      <div className={`fixed inset-0 z-50 transition-all duration-500 ease-in-out ${isPanelOpen ? '' : 'pointer-events-none'}`}>
        <div
          className={`fixed inset-0 bg-black/30 transition-opacity duration-500 ease-in-out ${isPanelOpen ? 'opacity-100' : 'opacity-0'}`}
          onClick={handleBackClick}
        ></div>
        
        {/* Painel de detalhes com fundo correspondente ao tema e efeito de blur */}
        <div
          className={`fixed top-0 right-0 h-full w-full max-w-2xl transform shadow-2xl 
                     transition-transform duration-500 ease-in-out 
                     ${theme === 'light' 
                       ? 'bg-white/80 backdrop-blur-xl border-l border-gray-200/30' 
                       : 'bg-gray-900/80 backdrop-blur-md border-l border-gray-700/30'}
                     ${isPanelOpen ? 'translate-x-0' : 'translate-x-full'}`}
        >
          <div className="relative h-full w-full flex flex-col">
            <button 
                onClick={handleBackClick} 
                className={`absolute top-6 right-6 z-20 transition-colors
                          ${theme === 'light' 
                            ? 'text-gray-600 hover:text-gray-900' 
                            : 'text-gray-300 hover:text-white'}`}
            >
                <XMarkIcon className="w-8 h-8" />
            </button>

            <div className="overflow-y-auto p-8 md:p-12 pb-24 mb-10">
              {selectedProject && (
                  <ProjectDetail 
                      project={{
                        ...selectedProject,
                        title: getProjectContent(selectedProject, 'title'),
                        description: getProjectContent(selectedProject, 'description'),
                        subtitle: getProjectContent(selectedProject, 'subtitle'),
                        longDescription: getProjectContent(selectedProject, 'longDescription')
                      }}
                      theme={theme}
                      language={language}
                  />
              )}
            </div>
            
            {/* Rodapé com cores adaptadas ao tema */}
            <div className={`absolute bottom-0 left-0 w-full p-6 border-t
                           ${theme === 'light' 
                             ? 'bg-gray-100 border-gray-300' 
                             : 'bg-gray-800 border-gray-900'}`}
            >
              <a 
                href={selectedProject?.projectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center justify-between w-full text-lg font-semibold transition-colors
                           ${theme === 'light' 
                             ? 'text-gray-800 hover:text-sky-600' 
                             : 'text-white hover:text-sky-400'}`}
              >
                <span>{language === 'pt' ? 'Abrir Projeto' : 'Open Project'}</span>
                <span>-&gt;</span>
              </a>
            </div>
            
          </div>
        </div>
        
      </div>
      
    </div>
  );
}