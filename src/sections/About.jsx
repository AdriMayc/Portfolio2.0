// src/sections/About.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from "../components/Navbar";
import { PlusIcon, MinusIcon, LocationIcon, ArrowRightIcon } from "../components/icons";

// --- DADOS MULTILÍNGUE (centralizados para a página Sobre) ---
const content = {
    pt: {
        nav_about: "Sobre",
        nav_contact: "Contato",
        about_title: "SOBRE MIM",
        topic_experience: "EXPERIÊNCIA",
        topic_education: "FORMAÇÃO",
        topic_skills: "TECNOLOGIAS",
        nav_projects: "Projetos",
        projects: "Ver Meus Projetos",
    },
    en: {
        nav_about: "About",
        nav_contact: "Contact",
        about_title: "ABOUT ME",
        topic_experience: "EXPERIENCE",
        topic_education: "EDUCATION",
        topic_skills: "TECHNOLOGIES",
        nav_projects: "Projects",
        projects: "View My Projects",
    }
};

const experienceData = [
    {
        date: {
            pt: "Fev 2025 - Atual",
            en: "Feb 2025 - Present"
        },
        location: {
            pt: "Remoto",
            en: "Remote"
        },
        tags: ["Python", "Selenium", "Excel", "Power BI", "E-commerce"],
        pt: {
            title: "Analista de E-commerce",
            company: "Plantei Garden Center",
            description: "Elaborei um script em Python (Selenium) para automatizar o registro de produtos na plataforma utilizando um banco de dados em Excel / Google Sheets, o que diminuiu em 80% o tempo operacional e eliminou 95% dos erros manuais. Organizei rotinas de tratamento e consolidação de dados de vendas, priorizando o faturamento líquido, os produtos mais vendidos e o efeito das promoções. Isso contribuiu para análises estratégicas e visualizações no Power BI. Trabalho com rotinas de E-commerce, que envolvem o companhamento de vendas, gerenciamento de promoções, atualização do catálogo de produtos, definição de preços e monitoramento de indicadores de desempenho para melhorar os resultados.",
        },
        en: {
            title: "E-commerce Analyst",
            company: "Plantei Garden Center",
            description: "Developed a Python script (Selenium) to automate product registration on the platform using an Excel / Google Sheets database, which reduced operational time by 80% and eliminated 95% of manual errors. Organized routines for processing and consolidating sales data, prioritizing net revenue, best-selling products, and the effect of promotions. This contributed to strategic analyses and visualizations in Power BI. I work with E-commerce routines, involving sales tracking, promotion management, product catalog updates, pricing, and performance indicator monitoring to improve results.",
        }
    },
    {
        date: {
            pt: "Fev 2023 - Fev 2024",
            en: "Feb 2023 - Feb 2024"
        },
        location: {
            pt: "Salto Grande - SP",
            en: "Salto Grande - SP"
        },
        tags: ["SEO", "Marketplaces", "Excel", "Google Sheets"],
        pt: {
            title: "Assistente Administrativo e E-commerce",
            company: "Plantei Garden Center",
            description: "Comecei minha atuação no setor fiscal, lidando com a emissão de notas fiscais e garantindo a conformidade tributária. Diminuí o tempo médio de atraso no processamento de pedidos de 3 dias para menos de 24 horas, melhorando a eficiência da operação em mais de 65%. Apliquei melhorias de SEO que aumentaram em aproximadamente 10% a visibilidade orgânica da loja. Administrei o e-commerce em marketplaces, que começou a corresponder a 20% a 30% da receita bruta depois de somente um mês de funcionamento. Empreguei o Excel Google Sheets para realizar análises de custos e margens, bem como para desenvolver estratégias de atendimento visando aprimorar a experiência do cliente."
        },
        en: {
            title: "Administrative and E-commerce Assistant",
            company: "Plantei Garden Center",
            description: "I began in the fiscal department, handling invoice issuance and ensuring tax compliance. I reduced the average order processing delay from 3 days to less than 24 hours, improving operational efficiency by over 65%. I implemented SEO improvements that increased the store's organic visibility by approximately 10%. I managed the e-commerce on marketplaces, which accounted for 20% to 30% of gross revenue after just one month. I used Excel Google Sheets for cost and margin analysis, and to develop customer service strategies to enhance the client experience."
        }
    }
];

const educationData = [
    {
        date: {
            pt: "2025 - Cursando (2º Semestre)",
            en: "2025 – Currently Enrolled (2nd Semester)"
        },
        location: {
            pt: "Ourinhos, SP",
            en: "Ourinhos, SP"
        },
        tags: ["Statistics", "Machine Learning", "Databases", "Software Development"],
        pt: {
            title: "Tecnólogo em Ciência de Dados",
            company: "FATEC - Faculdade de Tecnologia de Ourinhos",
            description: "Curso de graduação voltado para a conversão de dados em insights aplicáveis, integrando análise, processamento e visualização para auxiliar na tomada de decisões estratégicas em variados cenários organizacionais.",
        },
        en: {
            title: "Technologist in Data Science",
            company: "FATEC - Ourinhos Technology College",
            description: "Superior training aimed at converting data into actionable insights by combining analysis, processing, and visualization to support strategic decisions in various organizational contexts.",
        }
    },
    {
        date: {
            pt: "2025 - Em Andamento",
            en: "2025 – In Progress"
        },
        location: {
            pt: "Online",
            en: "Online"
        },
        tags: ["AWS", "Google Cloud", "Azure"],
        pt: {
            title: "Estudos para Certificações em Cloud",
            company: "Estudos Autodirigidos",
            description: "Treinamento contínuo para certificações nas principais plataformas de nuvem, focado em arquitetura e serviços de dados, com o objetivo de aplicar conhecimentos em projetos de engenharia de dados.",
        },
        en: {
            title: "Studies for Cloud Certifications",
            company: "Self-directed Studies",
            description: "Constant preparation for certifications on the main cloud platforms, geared toward architecture and data services, with an eye toward practical implementation in data engineering projects.",
        }
    },
];

const skillsData = {
    "Linguagens & Programação": ["Python", "SQL", "Bash/Shell Script"],
    "Bancos de Dados": ["PostgreSQL", "MySQL", "MongoDB (NoSQL)"],
    "Big Data & Processamento": ["Apache Spark", "Hadoop (conceitos)"],
    "Mensageria & Streaming": ["Apache Kafka", "Spark Structured Streaming"],
    "Orquestração & ETL": ["Apache Airflow", "Pandas"],
    "Cloud & Infraestrutura": ["AWS (S3, Redshift, Glue, EMR, Lambda)", "Docker"],
    "Versionamento & Colaboração": ["Git / GitHub"],
    "Visualização": ["Metabase", "Power BI", "Streamlit"]
};

// --- COMPONENTES INTERNOS DA PÁGINA ---
const AccordionItem = ({ item, isOpen, onClick, theme, language }) => {
    const themeClasses = { textStrong: theme === 'light' ? 'text-gray-800' : 'text-white' };
    const currentLangItem = item[language];
    const currentDate = typeof item.date === 'object' ? item.date[language] : item.date;
    const currentLocation = typeof item.location === 'object' ? item.location[language] : item.location;

    return (
        <div className={`border-b ${theme === 'light' ? 'border-gray-300' : 'border-gray-700'}`}>
            <button onClick={onClick} className="w-full flex justify-between items-center p-5 text-left transition-colors bg-transparent">
                <div>
                    <h3 className={`font-semibold text-lg ${themeClasses.textStrong}`}>{currentLangItem.title}</h3>
                    <p className={`text-sm font-light ${theme === 'light' ? 'text-gray-500' : 'text-gray-400'}`}>{currentLangItem.company}</p>
                </div>
                <div className="flex items-center space-x-4">
                    <span className={`text-sm hidden sm:block ${theme === 'light' ? 'text-gray-500' : 'text-gray-400'}`}>{currentDate}</span>
                    <div className={`${theme === 'light' ? 'text-gray-600' : 'text-gray-300'}`}>{isOpen ? <MinusIcon /> : <PlusIcon />}</div>
                </div>
            </button>
            <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[500px]' : 'max-h-0'}`}>
                <div className="p-6 pt-0 bg-transparent">
                    <div className={`flex items-center text-sm mb-4 ${theme === 'light' ? 'text-gray-600' : 'text-gray-300'}`}><LocationIcon theme={theme} /> {currentLocation}</div>
                    <p className={`leading-relaxed mb-6 font-light ${theme === 'light' ? 'text-gray-700' : 'text-gray-300'}`}>{currentLangItem.description}</p>
                    <div className="flex flex-wrap gap-2">{item.tags.map(tag => (<span key={tag} className={`text-xs font-medium px-2.5 py-1 rounded-full ${theme === 'light' ? 'bg-indigo-100 text-indigo-800' : 'bg-indigo-900 text-indigo-200'}`}>{tag}</span>))}</div>
                </div>
            </div>
        </div>
    )
};

const TopicSection = ({ topic, children, theme }) => (
    <div className="flex flex-col md:flex-row mb-16">
        <div className="w-full md:w-1/4 mb-6 md:mb-0 md:pr-8">
            <h2 className={`text-2xl font-light tracking-wider sticky top-24 ${theme === 'light' ? 'text-gray-500' : 'text-gray-400'}`}>{topic}</h2>
        </div>
        <div className="w-full md:w-3/4">
            <div className={`rounded-lg overflow-hidden border ${theme === 'light' ? 'border-gray-300' : 'border-gray-700'}`}>{children}</div>
        </div>
    </div>
);

const SkillsSection = ({ topic, skills, theme }) => (
    <div className="flex flex-col md:flex-row mb-16">
        <div className="w-full md:w-1/4 mb-6 md:mb-0 md:pr-8">
            <h2 className={`text-2xl font-light tracking-wider sticky top-24 ${theme === 'light' ? 'text-gray-500' : 'text-gray-400'}`}>{topic}</h2>
        </div>
        <div className="w-full md:w-3/4 space-y-6">
            {Object.entries(skills).map(([category, list]) => (
                <div key={category}>
                    <h3 className={`font-semibold mb-3 ${theme === 'light' ? 'text-gray-600' : 'text-gray-300'}`}>{category}</h3>
                    <div className="flex flex-wrap gap-3">
                        {list.map(skill => (
                            <span key={skill} className={`px-4 py-2 rounded-md text-sm font-medium shadow-md ${theme === 'light' ? 'bg-gray-100 border border-gray-200 text-gray-700' : 'bg-gray-800 border border-gray-700 text-gray-300'}`}>{skill}</span>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    </div>
);

// --- PÁGINA SOBRE ---
export default function About({ theme = 'light', language = 'pt', toggleTheme, toggleLanguage }) {
    const [openExperience, setOpenExperience] = useState(0);
    const [openEducation, setOpenEducation] = useState(0);
    const currentContent = content[language];

    const themeClasses = {
        bg: theme === 'light' ? 'bg-gradient-to-br from-white via-blue-50 to-purple-50' : 'bg-gradient-to-br from-gray-900 to-black',
        text: theme === 'light' ? 'text-gray-800' : 'text-gray-200',
        textSubtle: theme === 'light' ? 'text-gray-600' : 'text-gray-300',
        textStrong: theme === 'light' ? 'text-gray-800' : 'text-gray-100',
        textHover: theme === 'light' ? 'hover:text-gray-900' : 'hover:text-white',
        textHoverBlack: theme === 'light' ? 'hover:text-black' : 'hover:text-white',
        shapeBorder: theme === 'light' ? 'border-gray-200/50' : 'border-gray-700/50',
        shapeBg: theme === 'light' ? 'bg-gray-100/50' : 'bg-gray-800/50',
    };

    return (
        <div className={`relative font-sans w-full min-h-screen overflow-hidden transition-colors duration-500 ${themeClasses.bg} ${themeClasses.text}`}>

            {/* Navbar real com as mesmas props da Home */}
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

            <div className="absolute inset-0 z-0">
                <div className={`absolute -top-20 -left-20 w-80 h-80 border-8 rounded-full transition-colors ${themeClasses.shapeBorder}`}></div>
                <div className={`absolute -bottom-24 -right-16 w-96 h-96 border-[12px] transition-colors ${themeClasses.shapeBorder}`}></div>
                <div className={`absolute top-[55%] -right-24 w-60 h-60 rounded-full transition-colors ${themeClasses.shapeBg}`}></div>
            </div>

            <div className="relative w-full flex justify-center pb-16 px-4 sm:px-6 lg:px-8">
                <main className="relative z-10 w-full max-w-5xl">
                    <h1 className={`text-5xl md:text-6xl font-light tracking-widest uppercase mb-24 text-center ${themeClasses.textStrong}`}>
                        {currentContent.about_title}
                    </h1>

                    <TopicSection topic={currentContent.topic_experience} theme={theme}>
                        {experienceData.map((item, index) => (
                            <AccordionItem
                                key={index}
                                item={item}
                                isOpen={openExperience === index}
                                onClick={() => setOpenExperience(openExperience === index ? -1 : index)}
                                theme={theme}
                                language={language}
                            />
                        ))}
                    </TopicSection>

                    <TopicSection topic={currentContent.topic_education} theme={theme}>
                        {educationData.map((item, index) => (
                            <AccordionItem
                                key={index}
                                item={item}
                                isOpen={openEducation === index}
                                onClick={() => setOpenEducation(openEducation === index ? -1 : index)}
                                theme={theme}
                                language={language}
                            />
                        ))}
                    </TopicSection>

                    <SkillsSection topic={currentContent.topic_skills} skills={skillsData} theme={theme} />

                    <div className="mt-16">
                        <Link
                            to="/projects"
                            className={`inline-flex  mt-12 transition-colors ${themeClasses.text} ${themeClasses.textHoverBlack}`}
                        >
                            {currentContent.projects}
                            <ArrowRightIcon />
                        </Link>
                    </div>
                </main>
            </div>
        </div>
    );
}