// src/components/icons.jsx
import React from "react";

export const AsteriskIcon = ({ theme }) => (
  <svg
    className={`w-8 h-8 transition-colors ${
      theme === "light" ? "text-gray-900" : "text-gray-100"
    }`}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12 2v20m8-14-16 8m16 0-16-8"
    />
  </svg>
);

export const ArrowRightIcon = () => (
  <svg
    className="w-6 h-6 ml-2"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M17 8l4 4m0 0l-4 4m4-4H3"
    />
  </svg>
);

export const MoonIcon = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
    />
  </svg>
);

export const SunIcon = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
    />
  </svg>
);

export const SocialIcon = ({ d, theme }) => (
  <a
    href="#"
    className={`transition-colors ${
      theme === "light"
        ? "text-gray-700 hover:text-gray-900"
        : "text-gray-300 hover:text-white"
    }`}
  >
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d={d} />
    </svg>
  </a>
);
