import React, { useState, useEffect } from 'react';

// Este é o componente da tela de carregamento.
// Ele recebe uma propriedade 'onAnimationComplete' que é uma função a ser chamada
// quando todas as aniações terminarem.
const PortfolioLoader = ({ onAnimationComplete }) => {
  // 'step' controla qual etapa da animação está ativa.
  // 0: Inicial (fechado)
  // 1: Abrindo
  // 2: Fechando
  // 3: Desaparecendo
  const [step, setStep] = useState(0);

  // 'isMounted' controla se o componente deve estar no DOM.
  // Usamos isso para remover o componente da tela após a animação de fade-out.
  const [isMounted, setIsMounted] = useState(true);

  // useEffect é usado para controlar a sequência de animações com temporizadores.
  useEffect(() => {
    // A animação começa 500ms após o componente aparecer.
    const timer1 = setTimeout(() => {
      setStep(1); // Etapa 1: Abrir
    }, 500);

    // A animação de fechar começa 2000ms depois (500 + 1500).
    const timer2 = setTimeout(() => {
      setStep(2); // Etapa 2: Fechar
    }, 2000);

    // A animação de desaparecer (fade-out) começa 2800ms depois (2000 + 800).
    const timer3 = setTimeout(() => {
      setStep(3); // Etapa 3: Desaparecer
    }, 2800);
    
    // O componente é finalmente removido da tela 3300ms depois (2800 + 500).
    const timer4 = setTimeout(() => {
      setIsMounted(false); // Remove o componente do DOM
      onAnimationComplete(); // Avisa o componente pai que a animação terminou.
    }, 3300);


    // Função de limpeza: cancela todos os timers se o componente for desmontado
    // antes da hora. Isso evita erros de atualização de estado.
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, [onAnimationComplete]); // A dependência garante que a função do pai esteja disponível.

  // Se 'isMounted' for falso, o componente não renderiza nada.
  if (!isMounted) {
    return null;
  }

  return (
    // Container principal com fundo branco, blur e texto escuro.
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-white/20 text-gray-800 backdrop-blur-md transition-opacity duration-500 ease-in-out
        ${step === 3 ? 'opacity-0' : 'opacity-100'}
      `}
    >
      {/* Container do texto animado */}
      <div className="flex items-center justify-center text-2xl md:text-4xl lg:text-5xl">
        
        {/* Símbolo "<" com animação corrigida */}
        <span
          className={`font-mono text-blue-700 transition-transform duration-700 ease-in-out
            ${step >= 1 ? 'translate-x-0' : 'translate-x-[0.01em]'}
          `}
        >
          &lt;
        </span>

        {/* Nome do Portfólio com font-sans */}
        <span
          className="overflow-hidden transition-all duration-700 ease-in-out"
          style={{ maxWidth: step >= 1 && step < 2 ? '1000px' : '0px' }} // Anima a largura
        >
          <span className="mx-3 whitespace-nowrap font-sans font-extralight">
            Adriano Mayco <span className='font-light'>Portfolio</span>
          </span>
        </span>

        {/* Símbolo "/>" com animação corrigida */}
        <span
          className={`font-mono text-blue-700 transition-transform duration-700 ease-in-out
            ${step >= 1 ? 'translate-x-0' : '-translate-x-[0.1rem]'}
          `}
        >
          /&gt;
        </span>
      </div>
    </div>
  );
};

export default PortfolioLoader;

