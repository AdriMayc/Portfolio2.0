import React, { useRef } from 'react';

export default function ProjectCard({
  imageSrc,
  altText,
  title,
  description,
  tags = [],
  onClick,
}) {
  const cardRef = useRef(null);

  const handlePointerMove = (event) => {
    const card = cardRef.current;
    if (!card) return;

    const bounds = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;

    card.style.transform = `rotateX(${-y * 7}deg) rotateY(${x * 7}deg)`;
    card.querySelector('img')?.style.setProperty('transform', `translate(${-x * 18}px, ${-y * 18}px) scale(1.07)`);
  };

  const handlePointerLeave = () => {
    const card = cardRef.current;
    if (!card) return;

    card.style.removeProperty('transform');
    card.querySelector('img')?.style.removeProperty('transform');
  };

  return (
    <div
      onClick={onClick}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      onKeyDown={(event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          onClick();
        }
      }}
      role="button"
      tabIndex={0}
      className="group [perspective:900px]"
    >
      <div
        ref={cardRef}
        className="relative h-96 overflow-hidden rounded-2xl bg-black text-left shadow-[0_14px_34px_-16px_rgba(0,0,0,0.45)] [transform:rotateX(0deg)_rotateY(0deg)] [transform-style:preserve-3d] transition-[transform,box-shadow] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:shadow-[0_34px_60px_-24px_rgba(0,0,0,0.6)]"
      >
        <img
          src={imageSrc}
          alt={altText}
          className="h-full w-full scale-[1.02] object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
        />

        <div
          className="absolute inset-0 flex items-end bg-gradient-to-t from-black/95 to-transparent"
        >
          <span className="absolute right-4 top-4 grid h-10 w-10 scale-75 place-items-center rounded-full bg-white/90 text-gray-900 opacity-0 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-100 group-hover:opacity-100">
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M9 7h8v8" />
            </svg>
          </span>

          <div className="w-full p-6 text-white">
            <h3 className="mb-2 text-2xl font-bold">{title}</h3>
            <div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:grid-rows-[1fr]">
              <div className="overflow-hidden">
                <p className="mb-4 text-sm text-gray-300">{description}</p>
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <span key={tag} className="rounded-md bg-white/20 px-2 py-1 text-xs font-semibold text-white">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
