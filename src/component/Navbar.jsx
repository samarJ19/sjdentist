import React, { useState } from "react"; // Import useState
import { Link, useLocation } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import ContactModal from "./ContactModal"; // Import the new component
import LanguageToggle from "./LanguageToggle";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../translations";

const Navbar = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const { language } = useLanguage();
  const t = translations[language].nav;

  // State for Contact Modal
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <>
      <nav className="w-full py-6 px-8 flex justify-between items-center bg-transparent z-50 relative max-w-7xl mx-auto">
        {/* ... Logo Section ... */}
        <Link to="/" className="flex items-center gap-2 cursor-pointer">
          {/* ... svg logo code ... */}
          <span className="text-xl font-bold text-gray-800 tracking-tight">
            Mantist
          </span>
        </Link>

        {/* Navigation Links */}
        <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
          <li className="text-black font-semibold cursor-pointer">
            <Link to="/">{t.home}</Link>
          </li>

          <li className="hover:text-cyan-500 cursor-pointer transition-colors">
            {isHomePage ? (
              <a href="#services">{t.services}</a>
            ) : (
              <Link to="/">{t.services}</Link>
            )}
          </li>

          <li className="hover:text-cyan-500 cursor-pointer transition-colors">
            {isHomePage ? (
              <a href="#technology">{"Why Choose Us?"}</a>
            ) : (
              <Link to="/">{"Why Choose Us?"}</Link>
            )}
          </li>

          <li className="hover:text-cyan-500 cursor-pointer transition-colors">
            {isHomePage ? (
              <a href="#testimonials">{t.testimonials}</a>
            ) : (
              <Link to="/">{t.testimonials}</Link>
            )}
          </li>

          <li className="hover:text-cyan-500 cursor-pointer transition-colors">
            <Link to="/gallery">{t.gallery}</Link>
          </li>
          <li className="hover:text-cyan-500 cursor-pointer transition-colors">
            <Link to="/blog">{t.blog}</Link>
          </li>

          {/* UPDATED CONTACT BUTTON */}
          <li
            className="hover:text-cyan-500 cursor-pointer transition-colors"
            onClick={() => setIsContactOpen(true)} // Open Modal on click
          >
            {t.contact}
          </li>
        </ul>

        {/* CTA Button & Language Toggle */}
        <div className="hidden md:flex items-center gap-3">
          <LanguageToggle />
          <button className="flex items-center gap-2 px-5 py-2.5 border border-cyan-400 text-cyan-600 rounded-full font-medium text-sm hover:bg-cyan-50 transition-colors">
            {t.getStarted}
            <ArrowRight size={16} />
          </button>
        </div>
      </nav>

      {/* Render the Contact Modal */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </>
  );
};

export default Navbar;
