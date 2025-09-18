// src/components/ProjectDetail.jsx
import React from "react";

// 🔤 Textos em 2 idiomas
const content = {
  pt: {
    about: "Sobre",
    technologies: "Tecnologias",
    links: "Links",
    github: "GitHub",
    medium: "Medium",
    dashboard: "Dashboard",
  },
  en: {
    about: "About",
    technologies: "Technologies",
    links: "Links",
    github: "GitHub",
    medium: "Medium",
    dashboard: "Dashboard",
  },
};

// Componente para os ícones dos links
const LinkIcon = ({ type, theme }) => {
  const icons = {
    github: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path
          fillRule="evenodd"
          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
          clipRule="evenodd"
        />
      </svg>
    ),
    medium: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75S24 8.83 24 12z" />
      </svg>
    ),
    dashboard: (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
        />
      </svg>
    ),
  };

  return (
    <div className={theme === "light" ? "text-gray-700" : "text-gray-300"}>
      {icons[type]}
    </div>
  );
};

// 🟢 Componente principal
export default function ProjectDetail({ project, theme, language }) {
  const currentContent = content[language]; // seleciona pt ou en

  const themeClasses = {
    bg: theme === "light" ? "bg-white" : "bg-gray-800",
    textPrimary: theme === "light" ? "text-gray-900" : "text-white",
    textSecondary: theme === "light" ? "text-gray-600" : "text-gray-300",
    tagBg: theme === "light" ? "bg-gray-100" : "bg-gray-700",
    tagText: theme === "light" ? "text-gray-800" : "text-gray-200",
    sectionBorder: theme === "light" ? "border-gray-200" : "border-gray-700",
    linkBg:
      theme === "light"
        ? "bg-gray-100 hover:bg-gray-200"
        : "bg-gray-700 hover:bg-gray-600",
    linkText: theme === "light" ? "text-gray-800" : "text-gray-200",
  };

  if (!project) return null;

  const hasAdditionalLinks =
    project.githubUrl || project.mediumUrl || project.dashboardUrl;

  return (
    <div className={`w-full transition-colors duration-500`}>
      <main>
        <h1
          className={`text-4xl md:text-5xl font-bold tracking-tight ${themeClasses.textPrimary}`}
        >
          {project.title}
        </h1>
        <p className={`mt-3 text-lg ${themeClasses.textSecondary}`}>
          {project.subtitle}
        </p>

        <div className="my-8 md:my-10">
          <img
            src={project.imageSrc}
            alt={`Imagem do projeto ${project.title}`}
            className={`w-full h-auto rounded-lg object-cover border ${themeClasses.sectionBorder}`}
          />
        </div>

        <section className="mb-10">
          <h2
            className={`text-2xl font-semibold mb-4 border-b pb-2 ${themeClasses.textPrimary} ${themeClasses.sectionBorder}`}
          >
            {currentContent.about}
          </h2>
          <p
            className={`text-base leading-relaxed ${themeClasses.textSecondary}`}
          >
            {project.longDescription}
          </p>
        </section>

        <section className="mb-10">
          <h2
            className={`text-2xl font-semibold mb-4 border-b pb-2 ${themeClasses.textPrimary} ${themeClasses.sectionBorder}`}
          >
            {currentContent.technologies}
          </h2>
          <div className="flex flex-wrap gap-3">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className={`px-4 py-1.5 rounded-md text-sm font-medium shadow-2xl ${themeClasses.tagBg} ${themeClasses.tagText}`}
              >
                {tag}
              </span>
            ))}
          </div>
        </section>

        {hasAdditionalLinks && (
          <section className="mb-10">
            <h2
              className={`text-2xl font-semibold mb-4 border-b pb-2 ${themeClasses.textPrimary} ${themeClasses.sectionBorder}`}
            >
              {currentContent.links}
            </h2>
            <div className="flex flex-wrap gap-4">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${themeClasses.linkBg} ${themeClasses.linkText}`}
                >
                  <LinkIcon type="github" theme={theme} />
                  <span>{currentContent.github}</span>
                </a>
              )}

              {project.mediumUrl && (
                <a
                  href={project.mediumUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${themeClasses.linkBg} ${themeClasses.linkText}`}
                >
                  <LinkIcon type="medium" theme={theme} />
                  <span>{currentContent.medium}</span>
                </a>
              )}

              {project.dashboardUrl && (
                <a
                  href={project.dashboardUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${themeClasses.linkBg} ${themeClasses.linkText}`}
                >
                  <LinkIcon type="dashboard" theme={theme} />
                  <span>{currentContent.dashboard}</span>
                </a>
              )}
            </div>
          </section>
        )}
      </main>
    </div>
  );
}
