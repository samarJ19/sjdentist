import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';

const LanguageToggle = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className="relative flex items-center gap-1.5 px-3 py-1.5 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors text-sm font-medium"
      aria-label="Toggle language"
    >
      <motion.span
        key={language}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 10 }}
        transition={{ duration: 0.2 }}
        className="flex items-center gap-1.5"
      >
        {language === 'en' ? (
          <>
            <span className="text-base">🇮🇳</span>
            <span className="text-gray-700">हिंदी</span>
          </>
        ) : (
          <>
            <span className="text-base">🇬🇧</span>
            <span className="text-gray-700">English</span>
          </>
        )}
      </motion.span>
    </button>
  );
};

export default LanguageToggle;
