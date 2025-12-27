import React, { useState, useEffect } from 'react';
import { X, Calendar, Clock, User, Phone } from 'lucide-react';
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../translations";

const BookingModal = ({ isOpen, onClose, preFilledData }) => {
  // If not open, don't render
  if (!isOpen) return null;

  const { language } = useLanguage();
  const t = translations[language].booking;

  // Form State
  const [date, setDate] = useState('');
  const [timeSlot, setTimeSlot] = useState('');
  
  // Initialize Name/Phone with data passed from Hero, or empty string
  const [name, setName] = useState(preFilledData?.name || '');
  const [phone, setPhone] = useState(preFilledData?.phone || '');

  // Mock slots
  const morningSlots = ["09:00 AM", "10:00 AM", "11:30 AM"];
  const eveningSlots = ["04:00 PM", "05:30 PM", "07:00 PM"];

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Booking Confirmed!\nName: ${name}\nPhone: ${phone}\nDate: ${date}\nTime: ${timeSlot}`);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      />

      <div className="relative bg-white rounded-3xl w-full max-w-lg shadow-2xl overflow-hidden animate-scale-up">
        <div className="bg-cyan-500 p-6 text-white flex justify-between items-start">
          <div>
            <h2 className="text-2xl font-bold">{t.title}</h2>
            <p className="text-cyan-100 text-sm mt-1">{t.subtitle}</p>
          </div>
          <button onClick={onClose} className="p-2 bg-white/20 hover:bg-white/30 rounded-full transition-colors">
            <X size={20} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6 max-h-[80vh] overflow-y-auto">
          {/* Date & Time Selection (Same as before) */}
          <div className="space-y-2">
            <label className="text-sm font-bold text-gray-700 flex items-center gap-2">
              <Calendar size={16} className="text-cyan-500" /> {t.selectDate}
            </label>
            <input 
              required type="date" 
              className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-cyan-500 outline-none text-gray-600"
              onChange={(e) => setDate(e.target.value)}
            />
          </div>

          <div className="space-y-3">
             <label className="text-sm font-bold text-gray-700 flex items-center gap-2">
              <Clock size={16} className="text-cyan-500" /> {t.availableSlots}
            </label>
            {/* ... Slots buttons (Same as before) ... */}
            <div className="flex flex-wrap gap-2 mt-2">
                {morningSlots.map(slot => (
                  <button key={slot} type="button" onClick={() => setTimeSlot(slot)} className={`px-4 py-2 text-sm rounded-full border transition-all ${timeSlot === slot ? 'bg-cyan-500 text-white border-cyan-500 shadow-md' : 'bg-white text-gray-600 border-gray-200 hover:border-cyan-300'}`}>{slot}</button>
                ))}
            </div>
          </div>

          {/* UPDATED: Patient Details (Controlled Inputs) */}
          <div className="space-y-4 pt-4 border-t border-gray-100">
            <div>
              <div className="relative">
                <User size={18} className="absolute left-3 top-3.5 text-gray-400" />
                <input 
                  type="text" 
                  placeholder={t.fullName}
                  required
                  value={name} // Connected to state
                  onChange={(e) => setName(e.target.value)}
                  className="w-full pl-10 p-3 bg-gray-50 border border-transparent rounded-xl focus:bg-white focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100 outline-none transition-all"
                />
              </div>
            </div>
            
            <div>
              <div className="relative">
                <Phone size={18} className="absolute left-3 top-3.5 text-gray-400" />
                <input 
                  type="tel" 
                  placeholder={t.phoneNumber}
                  required
                  value={phone} // Connected to state
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full pl-10 p-3 bg-gray-50 border border-transparent rounded-xl focus:bg-white focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100 outline-none transition-all"
                />
              </div>
            </div>
          </div>

          <button type="submit" className="w-full py-4 bg-gray-900 text-white rounded-xl font-bold text-lg shadow-lg hover:bg-gray-800 transform transition-transform hover:-translate-y-0.5">
            {t.confirmBooking}
          </button>
        </form>
      </div>
      <style>{`
        @keyframes scaleUp { from { opacity: 0; transform: scale(0.95); } to { opacity: 1; transform: scale(1); } }
        .animate-scale-up { animation: scaleUp 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
      `}</style>
    </div>
  );
};

export default BookingModal;