import React from 'react';
import { X, MapPin, Phone, Award, Clock, Stethoscope } from 'lucide-react';

const DoctorModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center p-4">
      
      {/* Backdrop (Darken background) */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      />

      {/* Modal Card */}
      <div className="relative bg-white rounded-3xl w-full max-w-md shadow-2xl overflow-hidden animate-scale-up">
        
        {/* Header Image Background */}
        <div className="h-32 bg-gradient-to-r from-cyan-500 to-blue-600 relative">
          <button 
            onClick={onClose} 
            className="absolute top-4 right-4 p-2 bg-white/20 hover:bg-white/30 text-white rounded-full transition-colors backdrop-blur-md"
          >
            <X size={20} />
          </button>
        </div>

        {/* Profile Content */}
        <div className="px-6 pb-8 relative">
          
          {/* Avatar (Overlapping the header) */}
          <div className="relative -mt-16 mb-4 flex justify-center">
            <div className="w-32 h-32 rounded-full border-4 border-white shadow-lg overflow-hidden bg-white">
              <img 
                src="cardphoto.png" 
                alt="Dr Geetam Rathore" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Name & Title */}
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900">Dr. Geetam Rathore</h2>
            <div className="flex items-center justify-center gap-2 text-cyan-600 font-medium mt-1">
              <Stethoscope size={16} />
              <span>Lead Dentist</span>
            </div>
          </div>

          {/* Info Grid */}
          <div className="space-y-4">
            
            {/* Experience */}
            <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-2xl border border-gray-100">
              <div className="p-2 bg-white rounded-xl text-orange-500 shadow-sm">
                <Award size={20} />
              </div>
              <div>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-wide">Experience</p>
                <p className="text-gray-900 font-medium">6 Years in Healthcare</p>
              </div>
            </div>

            {/* Contact */}
            <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-2xl border border-gray-100">
              <div className="p-2 bg-white rounded-xl text-green-500 shadow-sm">
                <Phone size={20} />
              </div>
              <div>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-wide">Contact</p>
                <p className="text-gray-900 font-medium">07942691095</p>
              </div>
            </div>

            {/* Address */}
            <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-2xl border border-gray-100">
              <div className="p-2 bg-white rounded-xl text-blue-500 shadow-sm">
                <MapPin size={20} />
              </div>
              <div>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-wide">Clinic Address</p>
                <p className="text-gray-900 font-medium leading-snug">
                  Tilak Nagar, Indore-452018,<br />Madhya Pradesh
                </p>
              </div>
            </div>

          </div>

          {/* Action Button */}
          <button 
            onClick={onClose}
            className="w-full mt-8 py-3.5 bg-gray-900 text-white rounded-xl font-bold shadow-lg hover:bg-gray-800 transition-transform hover:-translate-y-0.5"
          >
            Close Profile
          </button>

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

export default DoctorModal;