import React from "react";

const Footer = ({ theme }) => (
  <footer
    className={`relative z-10 mt-4 border-t px-4 py-5 text-[0.82rem] sm:mt-8 sm:px-8 sm:py-8 ${
      theme === "light"
        ? "border-gray-300 text-gray-500"
        : "border-gray-700 text-gray-400"
    }`}
  >
    <div className="mx-auto flex max-w-6xl flex-wrap justify-between gap-4">
      <span>© 2026 Adriano Mayco</span>
      <span aria-hidden="true">&lt; / &gt;</span>
    </div>
  </footer>
);

export default Footer;
