import React from 'react';

// --- ÍCONE ---
const ArrowUpRightIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
    </svg>
);

// --- COMPONENTE DO ITEM DA TIMELINE ---
const TimelineItem = ({ title, linkText, linkHref, children, isLeft, isLast }) => {
    // Determina a ordem dos elementos com base na posição (esquerda/direita)
    const textBlock = (
        <div className="flex-1">
            <div className="flex justify-between items-center mb-2">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{title}</h3>
                <a href={linkHref} className="text-sm text-indigo-500 dark:text-indigo-400 hover:underline">
                    {linkText} <ArrowUpRightIcon />
                </a>
            </div>
            <p className="text-gray-600 dark:text-gray-400 font-light leading-relaxed">
                {children}
            </p>
        </div>
    );

    const connector = (
        <div className="w-16 flex justify-center relative">
            {/* Círculo central */}
            <div className="w-4 h-4 bg-indigo-500 rounded-full z-10"></div>
            
            {/* Linha vertical que sempre desce do círculo */}
            {!isLast && <div className="absolute top-2 left-1/2 w-0.5 h-full bg-indigo-200 dark:bg-indigo-800"></div>}
            
            {/* Linha horizontal que conecta em zigue-zague */}
            {!isLast && (
                <div className={`absolute bottom-0 w-full h-0.5 ${isLeft ? 'left-1/2' : 'right-1/2'} bg-indigo-200 dark:bg-indigo-800`}></div>
            )}
        </div>
    );

    return (
        <div className={`flex items-stretch ${isLeft ? 'flex-row' : 'flex-row-reverse'}`}>
            {textBlock}
            {connector}
            <div className="flex-1"></div> {/* Espaçador para o outro lado */}
        </div>
    );
};


// --- COMPONENTE PRINCIPAL DA PÁGINA SOBRE ---
export default function About() {
    // Usaremos as mesmas classes de tema do seu componente principal para consistência
    // No App.jsx real, você passaria o `theme` como prop ou usaria um Context API.
    // Por enquanto, vamos simular o tema 'light'.
    const theme = 'light'; 

    const themeClasses = {
        bg: theme === 'light'
            ? 'bg-gradient-to-br from-white via-blue-50 to-purple-50'
            : 'bg-gradient-to-br from-gray-900 to-black',
        text: theme === 'light' ? 'text-gray-800' : 'text-gray-200',
    };

    return (
        <div className={`relative font-sans min-h-screen w-full flex justify-center py-24 px-4 sm:px-6 lg:px-8 overflow-hidden transition-colors duration-500 ${themeClasses.bg} ${themeClasses.text}`}>
            
             {/* Formas Geométricas de Fundo (opcional, para manter o estilo) */}
            <div className="absolute -top-20 -left-20 w-80 h-80 border-8 border-gray-200/50 dark:border-gray-700/50 rounded-full z-0"></div>
            <div className="absolute -bottom-24 -right-16 w-96 h-96 border-[12px] border-gray-200/50 dark:border-gray-700/50 z-0"></div>
            
            <div className="relative z-10 w-full max-w-4xl">
                <h1 className="text-5xl md:text-6xl font-light tracking-widest uppercase mb-16 text-center">
                    Sobre Mim
                </h1>

                <div className="space-y-16">
                    <TimelineItem 
                        title="Engenharia de Dados" 
                        linkText="Ver no GitHub" 
                        linkHref="#"
                        isLeft={true}
                    >
                        O poder das primeiras impressões não pode ser subestimado. Desenvolvo pipelines de dados robustos e escaláveis, transformando dados brutos em insights acionáveis. Minha paixão é construir a infraestrutura que permite uma navegação fluida e segura pelos dados, garantindo que cada consulta seja otimizada para a perfeição.
                    </TimelineItem>

                    <TimelineItem 
                        title="Ciência de Dados" 
                        linkText="Ver Projetos" 
                        linkHref="#"
                        isLeft={false}
                    >
                        Embora eu não siga o molde convencional, meu conjunto de habilidades diversas em pesquisa e design de produto me capacita a impulsionar o crescimento de um produto desde o seu início. Minha expertise em modelagem estatística e machine learning me permite extrair o valor oculto nos dados, efetivamente unindo a ponte técnica e a visão de negócios.
                    </TimelineItem>

                    <TimelineItem 
                        title="Design & Visualização" 
                        linkText="Ver no Dribbble" 
                        linkHref="#"
                        isLeft={true}
                        isLast={true}
                    >
                        Apesar de não me encaixar no estereótipo do designer, minhas habilidades visuais me permitem apresentar dados de forma clara e impactante. Acredito que um bom dashboard é uma ferramenta de storytelling, e uso minha proficiência para criar visualizações que não apenas informam, mas também inspiram ação.
                    </TimelineItem>
                </div>

                 {/* Marca d'água de fundo (opcional) */}
                 <div className="absolute -bottom-10 -left-10 text-[20vw] font-black text-gray-500/5 select-none z-0">
                    Sobre
                </div>
            </div>
        </div>
    );
}
