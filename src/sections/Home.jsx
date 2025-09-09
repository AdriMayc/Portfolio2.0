import React, { useState, useEffect } from 'react';

// --- ÍCONES ---

const AsteriskIcon = ({ theme }) => (
  <svg className={`w-8 h-8 transition-colors ${theme === 'light' ? 'text-gray-900' : 'text-gray-100'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 2v20m8-14-16 8m16 0-16-8" />
  </svg>
);

const ArrowRightIcon = () => (
  <svg className="w-6 h-6 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
  </svg>
);

const MoonIcon = () => (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
    </svg>
);

const SunIcon = () => (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
);

const SocialIcon = ({ d, theme }) => (
  <a href="#" className={`transition-colors ${theme === 'light' ? 'text-gray-700 hover:text-gray-900' : 'text-gray-300 hover:text-white'}`}>
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d={d} />
    </svg>
  </a>
);

const socialIcons = {
  linkedin: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z",
  github: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z",
};

const content = {
  pt: {
    nav_about: "Sobre",
    nav_projects: "Projetos",
    nav_contact: "Contato",
    title: "Prazer, sou o Adriano",
    p1: "Estou me formando em Ciência de Dados e buscando uma especialização em Engenharia de Dados. Sou apaixonado por converter grandes volumes de dados em histórias significativas. Cada conjunto de dados é um quebra-cabeça que eu adoro resolver: identifico padrões, descubro insights e converto números em decisões inteligentes.",
    p2_1: "É divertido para mim explorar ferramentas como Python, SQL e AWS e observar cada pipeline em funcionamento como uma pequena obra de engenharia. Meus",
    p2_projects: "PROJETOS",
    p2_2: "são meu laboratório: ali experimento, aprendo e crio soluções que poderiam ajudar empresas a enxergar o que antes era invisível. Se desejar conversar mais, é só entrar em",
    p2_contact: "CONTATO.",
    cta: "Ver Mais Sobre Mim"
  },
  en: {
    nav_about: "About",
    nav_projects: "Projects",
    nav_contact: "Contact",
    title: "Hi, I'm Adriano",
    p1: "I'm graduating in Data Science and pursuing a specialization in Data Engineering. I am passionate about turning large volumes of data into meaningful stories. Every dataset is a puzzle I love to solve: I identify patterns, discover insights, and turn numbers into smart decisions.",
    p2_1: "I have fun exploring tools like Python, SQL, and AWS, and watching each pipeline work like a small piece of engineering. My",
    p2_projects: "PROJECTS",
    p2_2: "are my laboratory: there I experiment, learn, and create solutions that could help companies see what was previously invisible. If you'd like to chat more, just get in",
    p2_contact: "CONTACT.",
    cta: "See More About Me"
  }
};

export default function App() {
  const [theme, setTheme] = useState('light');
  const [language, setLanguage] = useState('pt');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const toggleLanguage = () => {
    setLanguage(language === 'pt' ? 'en' : 'pt');
  };

  const currentContent = content[language];

  const themeClasses = {
    bg: theme === 'light' 
        ? 'bg-gradient-to-br from-white via-blue-50 to-purple-50' 
        : 'bg-gradient-to-br from-gray-900 to-black',
    text: theme === 'light' ? 'text-gray-800' : 'text-gray-200',
    textSubtle: theme === 'light' ? 'text-gray-600' : 'text-gray-300',
    textStrong: theme === 'light' ? 'text-gray-800' : 'text-gray-100',
    textHover: theme === 'light' ? 'hover:text-gray-900' : 'hover:text-white',
    textHoverBlack: theme === 'light' ? 'hover:text-black' : 'hover:text-white',
    shapeBorder: theme === 'light' ? 'border-gray-200/50' : 'border-gray-700/50',
    shapeBg: theme === 'light' ? 'bg-gray-100/50' : 'bg-gray-800/50',
  };

  return (
    <>
      <div className={`relative font-sans min-h-screen flex items-center justify-center overflow-hidden transition-colors duration-500 ${themeClasses.bg} ${themeClasses.text}`}>
        
        <div className={`absolute -top-20 -left-20 w-80 h-80 border-8 rounded-full z-0 transition-colors ${themeClasses.shapeBorder}`}></div>
        <div className={`absolute -bottom-24 -right-16 w-96 h-96 border-[12px] z-0 transition-colors ${themeClasses.shapeBorder}`}></div>
        <div className={`absolute top-[55%] -right-24 w-60 h-60 rounded-full z-0 transition-colors ${themeClasses.shapeBg}`}></div>

        <div className="relative z-10 w-full max-w-5xl mx-auto px-8 py-16">
          <header className="flex justify-between items-center mb-20">
            <a href="#" aria-label="Home">
              <AsteriskIcon theme={theme} />
            </a>
            <nav className="flex items-center space-x-6 md:space-x-8">
              <a href="#" className={`transition-colors ${themeClasses.textSubtle} ${themeClasses.textHover}`}>{currentContent.nav_about}</a>
              <a href="#" className={`transition-colors ${themeClasses.textSubtle} ${themeClasses.textHover}`}>{currentContent.nav_projects}</a>
              <a href="#" className={`transition-colors ${themeClasses.textSubtle} ${themeClasses.textHover}`}>{currentContent.nav_contact}</a>
              <button onClick={toggleLanguage} className={`transition-colors font-semibold text-sm cursor-pointer ${themeClasses.textSubtle} ${themeClasses.textHover}`}>
                {language === 'pt' ? 'EN' : 'PT'}
              </button>
              <button onClick={toggleTheme} className={`text-gray-800 dark:text-gray-400 cursor-pointer ${theme ? 'hover:text-gray-600': 'hover:text-gray-900'}  `} aria-label="Toggle dark mode">
                {theme === 'light' ? <MoonIcon /> : <SunIcon />}
              </button>
            </nav>
          </header>

          <main>
            <h1 className="text-4xl md:text-5xl font-light tracking-widest uppercase mb-8">
              {currentContent.title}
            </h1>
            <div className={`max-w-3xl space-y-6 leading-relaxed font-light ${theme === 'light' ? 'text-gray-700' : 'text-gray-300'}`}>
              <p>{currentContent.p1}</p>
              <p>
                {currentContent.p2_1} <strong className={`font-semibold ${themeClasses.textStrong}`}>{currentContent.p2_projects}</strong> {currentContent.p2_2} <strong className={`font-semibold ${themeClasses.textStrong}`}>{currentContent.p2_contact}</strong>
              </p>
            </div>
            
            <a href="#" className={`inline-flex items-center mt-12 transition-colors ${themeClasses.text} ${themeClasses.textHoverBlack}`}>
              {currentContent.cta}
              <ArrowRightIcon />
            </a>
            
            <div className="flex items-center space-x-6 mt-10">
              <SocialIcon d={socialIcons.linkedin} theme={theme} />
              <SocialIcon d={socialIcons.github} theme={theme} />
            </div>
          </main>
        </div>
      </div>
    </>
  );
}

