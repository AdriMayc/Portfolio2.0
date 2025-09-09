// src/sections/Contact.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import emailjs from '@emailjs/browser'; // Importa a biblioteca do EmailJS
import RotatedGridBackground from "../components/Grid";

import Navbar from "../components/Navbar";
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
        title: "Contato.",
        intro: "Entre em contato ou envie-me um e-mail diretamente em",
        email: "contato@adrianomayco.site",
        name_placeholder: "Nome",
        email_placeholder: "Email",
        message_placeholder: "Mensagem",
        send_message: "Enviar Mensagem",
        sending_message: "Enviando...",
        go_back_home: "Voltar para Home",
        success_message: "Mensagem enviada com sucesso! Obrigado.",
        error_message: "Ocorreu um erro ao enviar a mensagem. Tente novamente."
    },
    en: {
        nav_about: "About",
        nav_projects: "Projects",
        nav_contact: "Contact",
        title: "Contact.",
        intro: "Get in touch or shoot me an email directly on",
        email: "contato@adrianomayco.site",
        name_placeholder: "Name",
        email_placeholder: "Email",
        message_placeholder: "Message",
        send_message: "Send Message",
        sending_message: "Sending...",
        go_back_home: "Go Back Home",
        success_message: "Message sent successfully! Thank you.",
        error_message: "An error occurred while sending the message. Please try again."
    },
};

export default function Contact({ theme, toggleTheme, language, toggleLanguage }) {
    const currentContent = content[language];

    // Estados para controlar o formulário
    const [formData, setFormData] = useState({ from_name: '', from_email: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [statusMessage, setStatusMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault(); // Impede o recarregamento da página
        setIsSubmitting(true);
        setStatusMessage('');

        emailjs.send(
            'service_ubet1jn',
            'template_lgi59cp',
            formData,
            'kYf5WQGEEQHQslz05'
        )
            .then((result) => {
                console.log('SUCCESS!', result.text);
                setStatusMessage(currentContent.success_message);
                setFormData({ from_name: '', from_email: '', message: '' }); // Limpa o formulário
            }, (error) => {
                console.log('FAILED...', error.text);
                setStatusMessage(currentContent.error_message);
            })
            .finally(() => {
                setIsSubmitting(false);
            });
    };

    const themeClasses = {
        bg: theme === "light" ? "bg-gradient-to-br from-gray-50 to-gray-200" : "bg-gradient-to-br from-gray-800 to-black", text: theme === "light" ? "text-gray-800" : "text-gray-200",
        textSubtle: theme === "light" ? "text-gray-600" : "text-gray-300",
        textStrong: theme === "light" ? "text-gray-800" : "text-gray-100",
        textHover: theme === "light" ? "hover:text-gray-900" : "hover:text-white",
        textHoverBlack: theme === "light" ? "hover:text-black" : "hover:text-white",
        shapeBorder: theme === "light" ? "border-gray-200/50" : "border-gray-700/50",
        shapeBg: theme === "light" ? "bg-gray-100/50" : "bg-gray-800/50",
        inputBg: theme === "light" ? "bg-white" : "bg-gray-800",
        inputBorder: theme === "light" ? "border-gray-300" : "border-gray-700",
        inputPlaceholder: theme === "light" ? "placeholder-gray-400" : "placeholder-gray-500",
        buttonBg: theme === "light" ? "bg-black text-white" : "bg-white text-black",
        buttonHover: theme === "light" ? "hover:bg-gray-800" : "hover:bg-gray-200",
    };

    return (
        <div className={`relative font-sans w-full min-h-screen overflow-hidden transition-colors duration-500 ${themeClasses.bg} ${themeClasses.text}`}>

            <RotatedGridBackground theme={theme} />

            {/* Shapes */}
            <div className={`absolute -top-20 -left-20 w-80 h-80 border-8 rounded-full transition-colors ${themeClasses.shapeBorder}`}></div>
            <div className={`absolute -bottom-24 -right-16 w-96 h-96 border-[12px] transition-colors ${themeClasses.shapeBorder}`}></div>
            <div className={`absolute top-[60%] -right-24 w-60 h-60 rounded-full transition-colors ${themeClasses.shapeBg}`}></div>

            {/* Content */}
            <div className="relative w-full flex justify-center pt-32 pb-16 px-4 sm:px-6 lg:px-8">

                {/* Navbar */}
                <div className="absolute top-0 left-0 w-full">
                    <div className="relative z-10 w-full max-w-6xl mx-auto px-8 py-16">
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
                <main className="relative z-10 w-full max-w-5xl mt-32">
                    <h1 className="text-4xl md:text-5xl font-light tracking-widest uppercase mb-8">
                        {currentContent.title}
                    </h1>
                    <p className={`max-w-xl text-lg mb-8 ${themeClasses.textSubtle}`}>
                        {currentContent.intro}{" "}
                        <a
                            href={`mailto:${currentContent.email}`}
                            className={`font-semibold ${themeClasses.textStrong} ${themeClasses.textHoverBlack} transition-colors`}
                        >
                            {currentContent.email}
                        </a>
                    </p>

                    <form onSubmit={handleSubmit} className="max-w-xl space-y-6">
                        <div>
                            <input
                                type="text"
                                name="from_name"
                                placeholder={currentContent.name_placeholder}
                                value={formData.from_name}
                                onChange={handleChange}
                                required
                                className={`w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400/20 ${themeClasses.inputBg} ${themeClasses.inputBorder} ${themeClasses.text} ${themeClasses.inputPlaceholder}`}
                            />
                        </div>
                        <div>
                            <input
                                type="email"
                                name="from_email"
                                placeholder={currentContent.email_placeholder}
                                value={formData.from_email}
                                onChange={handleChange}
                                required
                                className={`w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400/20 ${themeClasses.inputBg} ${themeClasses.inputBorder} ${themeClasses.text} ${themeClasses.inputPlaceholder}`}
                            />
                        </div>
                        <div>
                            <textarea
                                name="message"
                                placeholder={currentContent.message_placeholder}
                                rows="6"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                className={`w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400/20 ${themeClasses.inputBg} ${themeClasses.inputBorder} ${themeClasses.text} ${themeClasses.inputPlaceholder}`}
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className={`inline-flex items-center px-6 py-3 rounded-full font-medium transition-colors cursor-pointer ${themeClasses.buttonBg} ${themeClasses.buttonHover} ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                        >
                            {isSubmitting ? currentContent.sending_message : currentContent.send_message}
                        </button>
                    </form>

                    {statusMessage && (
                        <p className={`mt-4 ${statusMessage.includes('sucesso') ? 'text-green-500' : 'text-red-500'}`}>
                            {statusMessage}
                        </p>
                    )}

                    <Link
                        to="/"
                        className={`inline-flex items-center ml-2 mt-10 transition-colors ${themeClasses.text} ${themeClasses.textHoverBlack}`}
                    >
                        {currentContent.go_back_home}
                        <ArrowRightIcon />
                    </Link>

                    <div className="flex items-center space-x-6 mt-10 ml-2">
                        <SocialIcon d={socialIcons.linkedin} theme={theme} />
                        <SocialIcon d={socialIcons.github} theme={theme} />
                    </div>
                </main>
            </div>
        </div>
    );
}