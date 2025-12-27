import React, { useState } from 'react';
import { X, Phone, MessageCircle, Copy, Check } from 'lucide-react';
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../translations";

const ContactModal = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);
  const phoneNumber = "+91 07947431553"; // Replace with actual number
  const { language } = useLanguage();
  const t = translations[language].contact;

  if (!isOpen) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(phoneNumber);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      />

      {/* Modal Content */}
      <div className="relative bg-white rounded-3xl w-full max-w-md shadow-2xl overflow-hidden animate-scale-up">
        
        {/* Header */}
        <div className="bg-gray-900 p-6 text-white flex justify-between items-center">
          <h2 className="text-xl font-bold">{t.title}</h2>
          <button 
            onClick={onClose} 
            className="p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
          >
            <X size={18} />
          </button>
        </div>

        <div className="p-6 space-y-6">
          
          {/* Option 1: Direct Phone Number */}
          <div className="bg-gray-50 rounded-2xl p-5 border border-gray-100">
            <div className="flex items-center gap-3 mb-2 text-gray-500 text-sm font-semibold uppercase tracking-wide">
              <Phone size={16} />
              {t.callDirectly}
            </div>
            
            <div className="flex items-center justify-between">
              <span className="text-2xl font-bold text-gray-900 tracking-tight">
                {phoneNumber}
              </span>
              
              <button 
                onClick={handleCopy}
                className="flex items-center gap-2 px-3 py-1.5 bg-white border border-gray-200 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors shadow-sm"
              >
                {copied ? <Check size={14} className="text-green-500" /> : <Copy size={14} />}
                {copied ? t.copied : t.copy}
              </button>
            </div>
            
            <a 
              href={`tel:${phoneNumber.replace(/\s/g, '')}`} // Removes spaces for the actual link
              className="mt-4 block w-full py-2.5 text-center bg-white border border-gray-300 text-gray-700 rounded-xl font-semibold hover:bg-gray-50 transition-colors"
            >
              {t.callNow}
            </a>
          </div>

          {/* Divider */}
          <div className="relative flex items-center justify-center">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200"></div>
            </div>
            <span className="relative z-10 bg-white px-4 text-sm text-gray-400 font-medium">{t.or}</span>
          </div>

          {/* Option 2: WhatsApp */}
          <a 
            href="https://wa.me/919876543210?text=Hello,%20I%20would%20like%20to%20know%20more%20about%20your%20services." 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 w-full py-4 bg-[#25D366] text-white rounded-2xl font-bold text-lg shadow-lg shadow-green-500/20 hover:bg-[#20bd5a] transform transition-all hover:-translate-y-1"
          >
            <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" className='h-10 w-10' />
            {t.chatWhatsApp}
          </a>

        </div>
      </div>

      <style>{`
        @keyframes scaleUp {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-scale-up {
          animation: scaleUp 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>
    </div>
  );
};

export default ContactModal;