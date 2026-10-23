import React from "react";
import { Link } from "react-router-dom";
import { ArrowRightIcon } from "./icons";

const pageSequence = {
  "/": {
    path: "/about",
    name: { pt: "Sobre mim", en: "About me" },
  },
  "/about": {
    path: "/projects",
    name: { pt: "Projetos", en: "Projects" },
  },
  "/projects": {
    path: "/contact",
    name: { pt: "Contato", en: "Contact" },
  },
  "/contact": {
    path: "/",
    name: { pt: "Início", en: "Home" },
  },
};

export default function NextPageLink({ currentPath, language, theme }) {
  const nextPage = pageSequence[currentPath];
  const isLight = theme === "light";

  if (!nextPage) {
    return null;
  }

  return (
    <div className="relative z-10 mx-auto mt-12 w-full max-w-6xl px-4 sm:px-8">
      <Link
        to={nextPage.path}
        className={`group flex items-center justify-between gap-4 border-t py-10 transition-colors ${
          isLight ? "border-gray-300" : "border-gray-700"
        }`}
      >
        <span>
          <small
            className={`type-eyebrow mb-2 block uppercase tracking-[0.2em] ${
              isLight ? "text-gray-500" : "text-gray-400"
            }`}
          >
            {language === "pt" ? "Próxima página" : "Next page"}
          </small>
          <span
            className={`type-page-title block font-extralight uppercase tracking-[0.1em] transition-[letter-spacing,color] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:tracking-[0.17em] ${
              isLight ? "text-gray-800" : "text-gray-100"
            }`}
          >
            {nextPage.name[language]}
          </span>
        </span>
        <ArrowRightIcon className="h-12 w-12 shrink-0 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-2 group-hover:scale-110" />
      </Link>
    </div>
  );
}
