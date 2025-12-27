import React, { useState } from "react";
import { ArrowRight, Play, User, Phone, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import DoctorModal from './DoctorModal'; // 1. Import the new component

const Hero = ({ onBookClick }) => {
  const [quickName, setQuickName] = useState("");
  const [quickPhone, setQuickPhone] = useState("");
  
  // 2. Add State for Doctor Modal
  const [isDoctorOpen, setIsDoctorOpen] = useState(false);

  return (
    <>
      <section className="relative w-full h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* ... (Background Video/Image Code remains the same) ... */}
        
        <div className="absolute inset-0 w-full h-full">
            <img
            src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2068&auto=format&fit=crop"
            alt="Dental Clinic Background"
            className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>
        </div>

        {/* MAIN CONTENT */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-8 flex flex-col justify-center h-full pb-20">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-3xl space-y-6">
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
              Trustworthy <br />
              <span className="text-cyan-400">Dental Services</span>
            </h1>

            <p className="text-gray-200 text-lg md:text-xl max-w-xl leading-relaxed">
              Modern and painless dental treatments powered by advanced technology
              and a caring team. Get trusted oral care for you at Mantist.
            </p>

            {/* 3. ATTACH CLICK HANDLER HERE */}
            <button 
              onClick={() => setIsDoctorOpen(true)}
              className="mt-4 px-8 py-3 bg-white/10 backdrop-blur-md border border-white/30 text-white rounded-full font-medium hover:bg-white hover:text-gray-900 transition-all flex items-center gap-2 group"
            >
              See Our Doctor
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </button>
          </motion.div>
        </div>

        {/* ... (Floating Booking Bar Code remains the same) ... */}
        
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="absolute bottom-10 left-0 right-0 z-20 px-4">
            <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-2xl p-4 md:p-6">
            <div className="flex flex-col md:flex-row items-center gap-4">
                <div className="w-full md:w-auto">
                <h3 className="text-cyan-600 font-bold text-sm uppercase tracking-wider mb-1">
                    Book Your Visit
                </h3>
                <p className="text-xs text-gray-400">
                    On your terms, complete the form
                </p>
                </div>

                <div className="hidden md:block w-px h-10 bg-gray-200 mx-2"></div>

                <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
                <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <User
                        size={18}
                        className="text-gray-400 group-focus-within:text-cyan-500 transition-colors"
                    />
                    </div>
                    <input
                    type="text"
                    placeholder="Your Name"
                    value={quickName}
                    onChange={(e) => setQuickName(e.target.value)}
                    className="block w-full pl-10 pr-3 py-3 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all bg-gray-50 focus:bg-white"
                    />
                </div>

                <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Phone
                        size={18}
                        className="text-gray-400 group-focus-within:text-cyan-500 transition-colors"
                    />
                    </div>
                    <input
                    type="tel"
                    placeholder="Phone Number"
                    value={quickPhone}
                    onChange={(e) => setQuickPhone(e.target.value)}
                    className="block w-full pl-10 pr-3 py-3 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all bg-gray-50 focus:bg-white"
                    />
                </div>
                </div>

                <button
                onClick={() => onBookClick({ name: quickName, phone: quickPhone })}
                className="w-full md:w-auto px-8 py-3.5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-xl shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 transform hover:-translate-y-0.5 transition-all whitespace-nowrap"
                >
                Make Appointment →
                </button>
            </div>
            </div>
        </motion.div>

        <style>{`
            @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
            }
            @keyframes slideUp {
            from { opacity: 0; transform: translateY(40px); }
            to { opacity: 1; transform: translateY(0); }
            }
            .animate-fade-in-up {
            animation: fadeInUp 0.8s ease-out forwards;
            }
            .animate-slide-up {
            animation: slideUp 0.8s ease-out 0.3s forwards; /* 0.3s delay */
            opacity: 0; /* Start hidden for delay to work */
            animation-fill-mode: forwards;
            }
        `}</style>
      </section>

      {/* 4. RENDER THE MODAL */}
      <DoctorModal 
        isOpen={isDoctorOpen} 
        onClose={() => setIsDoctorOpen(false)} 
      />
    </>
  );
};

export default Hero;