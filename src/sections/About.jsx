// src/sections/About.jsx
import React, { useState, useEffect } from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import NextPageLink from "../components/NextPageLink";
import RotatedGridBackground from "../components/Grid";
import { PlusIcon, MinusIcon, LocationIcon } from "../components/icons";
import Reveal from "../components/Reveal";
import awsCCP from "../img/awsCCP.png";
import airLogo from "../img/air-logo.jpg";


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
        statement: "Evoluindo e aprendendo constantemente, em busca de sempre melhorar.",
        recent_achievements: "Conquistas Recentes",
        certificate: "Certificado",
        bootcamp: "Bootcamp",
        credential: "Visualizar credencial",
        verify_credential: "Verificar Credencial",
        issued: "Amazon Web Services (AWS) • Emitido em Out 2026",
        completed_label: "Finalizado 2026",
        internship_date: "23 de novembro de 2026",
        internship_before: "Início previsto para",
        internship_today: "Comecei hoje",
        internship_active: "Estagiando",
        days_left: "dias restantes",
        internship_title: "Próximo passo: estágio",
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
        statement: "Evolving and constantly learning, always seeking to improve.",
        recent_achievements: "Recent Achievements",
        certificate: "Certified",
        bootcamp: "Bootcamp",
        credential: "View credential",
        verify_credential: "Verify Credential",
        issued: "Amazon Web Services (AWS) • Issued Oct 2026",
        completed_label: "Completed 2026",
        internship_date: "November 23, 2026",
        internship_before: "Starting on",
        internship_today: "I started today",
        internship_active: "Interning",
        days_left: "days remaining",
        internship_title: "Next step: internship",
    }
};

const experienceData = [
    {
        
        date: {
            pt: "Fev 2025 - Dez 2025",
            en: "Feb 2025 - Dec 2025"
        },
        location: {
            pt: "Remoto",
            en: "Remote"
        },
        tags: ["Python", "Selenium", "Excel", "Power BI", "E-commerce"],
        pt: {
            title: "Analista de E-commerce",
            company: "Plantei Garden Center",
            description: "Elaborei um script em Python (Selenium) para automatizar o registro de produtos na plataforma com a utilização um banco de dados em Excel / Google Sheets, o que diminuiu em 80% o tempo operacional e eliminou 95% dos erros manuais. Organizei rotinas de tratamento e consolidação de dados de vendas, priorizando o faturamento líquido, os produtos mais vendidos e o efeito das promoções. Isso contribuiu para análises estratégicas e visualizações no Power BI. Trabalho com rotinas de E-commerce, que envolvem o companhamento de vendas, gerenciamento de promoções, atualização do catálogo de produtos, definição de preços e monitoramento de indicadores de desempenho para melhorar os resultados.",
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
            description: "Comecei minha atuação no setor fiscal, atuando com a emissão de notas fiscais e garantindo a conformidade tributária. Diminuí o tempo médio de atraso no processamento de pedidos de 3 dias para menos de 24 horas, otimizando a eficiência da operação em mais de 65%. Apliquei melhorias de SEO que aumentaram em aproximadamente 10% a visibilidade orgânica da loja. Administrei o e-commerce em marketplaces, que começou a corresponder a 20% a 30% da receita bruta depois de somente um mês de funcionamento. Empreguei o Excel Google Sheets para realizar análises de custos e margens, bem como para desenvolver estratégias de atendimento, visando aprimorar a experiência do cliente."
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
            pt: "Previsão de conclusão: Dezembro de 2027",
            en: "Expected graduation: December 2027"
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
];

const skillsData = {
    "Linguagens & Programação": ["Python", "SQL", "Bash/Shell Script"],
    "Bancos de Dados": ["PostgreSQL", "MySQL"],
    "Big Data & Processamento": ["Apache Spark"],
    "Orquestração & ETL": ["Apache Airflow", "Pandas"],
    "Cloud & Infraestrutura": ["AWS (S3, Redshift, Glue, EMR, Lambda)", "Docker"],
    "Versionamento & Colaboração": ["Git / GitHub"],
    "Visualização": ["Metabase", "Power BI"]
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
            <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[800px] md:max-h-[600px]' : 'max-h-0'}`}>
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
    <div className="flex flex-col gap-8 md:flex-row mb-20">
        <div className="w-full md:w-1/4 mb-6 md:mb-0 md:pr-8">
            <h2 className={`text-2xl font-light tracking-wider sticky top-24 ${theme === 'light' ? 'text-gray-500' : 'text-gray-400'}`}>{topic}</h2>
        </div>
        <div className="w-full min-w-0 md:w-3/4">
            <div className={`overflow-hidden rounded-lg border ${theme === 'light' ? 'border-gray-300 bg-white/20' : 'border-gray-700 bg-gray-900/20'}`}>{children}</div>
        </div>
    </div>
);

const SkillsSection = ({ topic, skills, theme }) => (
    <div className="flex flex-col md:flex-row gap-8 mb-20">
        <div className="w-full md:w-1/4 mb-6 md:mb-0 md:pr-8">
            <h2 className={`text-2xl font-light tracking-[0.1em] sticky top-24 ${theme === 'light' ? 'text-gray-500' : 'text-gray-400'}`}>{topic}</h2>
        </div>
        <div className="w-full md:w-3/4 space-y-6 min-w-0">
            {Object.entries(skills).map(([category, list]) => (
                <div key={category}>
                    <h3 className={`font-semibold mb-3 ${theme === 'light' ? 'text-gray-600' : 'text-gray-300'}`}>{category}</h3>
                    <div className="flex flex-wrap gap-3">
                        {list.map(skill => (
                            <span key={skill} className={`px-4 py-2 rounded-md text-sm font-medium shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg ${theme === 'light' ? 'bg-gray-100 border border-gray-200 text-gray-700 hover:border-indigo-500' : 'bg-gray-800 border border-gray-700 text-gray-300 hover:border-indigo-400'}`}>{skill}</span>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    </div>
);

const AchievementCard = ({ type, title, subtitle, status, credential, theme, index, image, action }) => {
    const isLight = theme === "light";
    const hasCredential = Boolean(credential);

    return (
        <article
            className={`relative flex w-full flex-col gap-4 rounded-lg border-b px-4 py-4 font-sans antialiased sm:flex-row sm:items-center sm:gap-5 ${
                isLight
                    ? "border-gray-200"
                    : "border-gray-700"
            }`}
            style={{ transitionDelay: `${index * 80}ms` }}
        >
            <div className="flex h-20 w-20 shrink-0 self-center items-center justify-center sm:self-auto">
                <img
                    src={image}
                    alt={hasCredential ? "Selo AWS Cloud Practitioner" : "Logo AIR/R Fellowship"}
                    className={`${hasCredential ? "h-20 w-20" : "h-16 w-16"} rounded-md object-contain drop-shadow-sm`}
                />
            </div>
            <div className="min-w-0 flex-1">
                <div className="mb-1 inline-flex items-center rounded bg-indigo-100 px-2 py-0.5">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-indigo-700">{type}</span>
                </div>
                <h3 className={`text-xl font-bold leading-tight ${isLight ? "text-gray-900" : "text-gray-100"}`}>{title}</h3>
                <p className={`flex flex-wrap items-center gap-2 text-sm ${isLight ? "text-gray-500" : "text-gray-400"}`}>
                    <span>{subtitle}</span>
                    {status && (
                        <>
                            <span className="h-1 w-1 rounded-full bg-current" aria-hidden="true" />
                            <span>{status}</span>
                        </>
                    )}
                </p>
            </div>
            <div className="w-full shrink-0 sm:w-auto">{action}</div>
        </article>
    );
};

const InternshipTimeline = ({ theme, content }) => {
    const [today, setToday] = useState(() => new Date());
    const startDate = new Date(2026, 10, 23);
    const currentDay = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    const daysUntilStart = Math.ceil((startDate - currentDay) / 86400000);
    const isBeforeStart = daysUntilStart > 0;
    const isStartDay = daysUntilStart === 0;
    const isLight = theme === "light";

    useEffect(() => {
        const timer = window.setInterval(() => setToday(new Date()), 60000);
        return () => window.clearInterval(timer);
    }, []);

    return (
        <div className={`mt-auto rounded-md border px-3 py-2.5 ${isLight ? "border-indigo-100 bg-white/70" : "border-gray-700 bg-gray-900/50"}`}>
            <div className="flex items-center gap-3">
                <span className={`relative flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${isBeforeStart ? "border-2 border-dashed border-indigo-500" : "bg-indigo-600"}`}>
                    {!isBeforeStart && <span className="h-1.5 w-1.5 rounded-full bg-white" />}
                </span>
                <div className="min-w-0">
                    <p className={`text-xs font-semibold ${isLight ? "text-gray-700" : "text-gray-200"}`}>
                        {isBeforeStart
                            ? `${content.internship_before} ${content.internship_date}`
                            : isStartDay
                                ? content.internship_today
                                : content.internship_active}
                    </p>
                    {isBeforeStart && (
                        <p className={`mt-0.5 text-[11px] ${isLight ? "text-gray-500" : "text-gray-400"}`}>
                            {daysUntilStart} {content.days_left}
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
};

// --- PÁGINA SOBRE ---
export default function About({ theme = 'light', language = 'pt', toggleTheme, toggleLanguage }) {
    const [openExperience, setOpenExperience] = useState(0);
    const [openEducation, setOpenEducation] = useState(0);
    const currentContent = content[language];


    useEffect(() => {
        document.title = `${language === "pt" ? "Sobre mim" : "About me"} | Adriano Mayco`;
    }, [language]);

    const themeClasses = {
        bg: theme === "light" ? "bg-gradient-to-br from-gray-50 to-gray-200" : "bg-gradient-to-br from-gray-800 to-black",
        text: theme === 'light' ? 'text-gray-800' : 'text-gray-200',
        textSubtle: theme === 'light' ? 'text-gray-600' : 'text-gray-300',
        textStrong: theme === 'light' ? 'text-gray-800' : 'text-gray-100',
        textHover: theme === 'light' ? 'hover:text-gray-900' : 'hover:text-white',
        textHoverBlack: theme === 'light' ? 'hover:text-black' : 'hover:text-white',
        shapeBorder: theme === 'light' ? 'border-gray-200/90' : 'border-gray-700/50',
        shapeBg: theme === 'light' ? 'bg-gray-100/30' : 'bg-gray-800/30',
    };

    return (
        <div className={`relative font-sans w-full min-h-screen overflow-hidden transition-colors duration-500 ${themeClasses.bg} ${themeClasses.text}`}>

            <RotatedGridBackground theme={theme} />
            {/* Navbar real com as mesmas props da Home */}
            <div className="relative z-20 w-full">
                <div className="max-w-6xl mx-auto px-8 pt-16 md:py-16">
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
                <div className={`absolute bottom-40 -right-24 w-60 h-60 rounded-full transition-colors ${themeClasses.shapeBg}`}></div>
            </div>

            <div className="relative w-full flex justify-center pb-16 px-4 sm:px-6 lg:px-8">
                <main className="relative z-10 w-full max-w-6xl">
                    <Reveal className="mb-20">
                        <div className={`mb-4 flex items-center gap-3 font-mono text-xs tracking-[0.12em] ${theme === 'light' ? 'text-gray-500' : 'text-gray-400'}`}>
                            <span>01</span>
                            <span className="section-eyebrow-rule h-px bg-current" />
                        </div>
                        <h1 className={`text-[clamp(2.4rem,7vw,5.5rem)] font-extralight uppercase leading-none tracking-[0.12em] ${themeClasses.textStrong}`}>
                            {currentContent.about_title}
                        </h1>
                    </Reveal>
                    <Reveal className={`mb-20 max-w-4xl text-[clamp(1.6rem,3.6vw,2.9rem)] font-extralight leading-[1.3] tracking-[0.01em] ${themeClasses.textStrong}`}>
                        {currentContent.statement}
                    </Reveal>

                    <Reveal>
                        <div className={`mb-6 text-xs uppercase tracking-[0.2em] ${theme === 'light' ? 'text-gray-500' : 'text-gray-400'}`}>
                            <h2 className="font-normal">
                                {currentContent.recent_achievements}
                            </h2>
                        </div>
                    </Reveal>
                    <section className={`mb-20 ${theme === 'light' ? 'text-gray-800' : 'text-gray-200'}`}>
                        <Reveal className="flex w-full">
                            <AchievementCard
                                index={0}
                                type={currentContent.certificate}
                                title="AWS Certified Cloud Practitioner"
                                subtitle={currentContent.issued}
                                credential={currentContent.credential}
                                theme={theme}
                                image={awsCCP}
                                action={
                                    <a
                                        href="https://www.credly.com/badges/57fdc238-d7cc-4c27-8e89-f7aad0c892e5"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-indigo-500 px-5 py-2.5 text-sm font-medium text-indigo-600 transition-colors hover:bg-indigo-500 hover:text-white sm:w-auto"
                                    >
                                        {currentContent.verify_credential}
                                        <span aria-hidden="true">↗</span>
                                    </a>
                                }
                            />
                        </Reveal>
                        <Reveal className="flex w-full" delay={130}>
                            <AchievementCard
                                index={1}
                                type={currentContent.bootcamp}
                                title="AIR/R Fellowship — AWS AI FDE Foundations"
                                subtitle="Compass UOL + AWS"
                                status={currentContent.completed_label}
                                theme={theme}
                                image={airLogo}
                            />
                        </Reveal>
                    </section>
                    <Reveal className="mb-20">
                        <section>
                            <h2 className={`mb-6 text-xs font-medium uppercase tracking-[0.2em] ${theme === 'light' ? 'text-gray-500' : 'text-gray-400'}`}>
                                {currentContent.internship_title}
                            </h2>
                            <InternshipTimeline theme={theme} content={currentContent} />
                        </section>
                    </Reveal>

                    <Reveal>
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
                    </Reveal>

                    <Reveal>
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
                    </Reveal>

                    <Reveal>
                        <SkillsSection topic={currentContent.topic_skills} skills={skillsData} theme={theme} />
                    </Reveal>

                </main>
            </div>
            <NextPageLink currentPath="/about" language={language} theme={theme} />
            <Footer theme={theme} />
        </div>
    );
}
