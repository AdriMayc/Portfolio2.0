// src/components/ProjectCard.jsx

import React from 'react';

export default function ProjectCard({ imageSrc, altText, title, description, tags = [] }) {
  return (
    <div className="h-96 rounded-2xl overflow-hidden group relative cursor-pointer bg-black">
      
      {/* Imagem de Fundo */}
      <img
        src={imageSrc}
        alt={altText}
        className="w-full h-full object-cover transition-transform duration-500 ease-in-out
                   scale-[1.02] group-hover:scale-[1.07]"
      />

      {/* Sobreposição */}
      <div 
        className="absolute inset-0 flex items-end
                   bg-gradient-to-t from-black/95 to-transparent
                   opacity-0 group-hover:opacity-100
                   transition-opacity duration-500 ease-in-out"
      >
        <div className="p-6 w-full">
            <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
            <p className="text-gray-300 text-sm mb-4">{description}</p>
            
            <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
                <span key={index} className="bg-white/20 text-white text-xs font-semibold px-2 py-1 rounded-full">
                {tag}
                </span>
            ))}
            </div>
        </div>
      </div>
    </div>
  );
}