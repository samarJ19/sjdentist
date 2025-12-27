import React, { useState } from 'react';
import { Scan, Zap, Layers, Star } from 'lucide-react';
import { motion } from 'framer-motion';

const Technology = () => {
  // Data for the different technologies
  const techFeatures = [
    {
      id: 1,
      title: "3D Intra Oral Scanning",
      description: "No more messy impressions. Digital precision.",
      icon: <Scan size={24} />,
      image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=2070&auto=format&fit=crop", // Dental scanning image
    },
    {
      id: 2,
      title: "Laser Dentistry",
      description: "Minimally invasive procedures for faster healing.",
      icon: <Zap size={24} />,
      image: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?q=80&w=2070&auto=format&fit=crop", // Laser/High tech equipment
    },
    {
      id: 3,
      title: "CBCT Imaging",
      description: "Advanced 3D diagnostics for precise planning.",
      icon: <Layers size={24} />,
      image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=2070&auto=format&fit=crop", // X-ray or imaging context
    }
  ];

  // State to track which feature is currently selected (defaults to the first one)
  const [activeFeature, setActiveFeature] = useState(techFeatures[0]);

  return (
    <section id="technology" className="w-full py-20 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* LEFT COLUMN: Content & Navigation */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="space-y-8">
            <div className="space-y-2">
              <h2 className="text-4xl font-bold text-gray-900">
                State of the Art <br />
                <span className="text-cyan-500">Technology</span>
              </h2>
              <p className="text-gray-600 leading-relaxed pt-2">
                At Mantist, we believe in providing the most advanced care possible. 
                Our clinic is equipped with global-standard diagnostic and treatment 
                technology to ensure precision, safety, and comfort.
              </p>
            </div>

            {/* Interactive List */}
            <div className="space-y-4">
              {techFeatures.map((feature) => (
                <button
                  key={feature.id}
                  onClick={() => setActiveFeature(feature)}
                  className={`w-full flex items-center gap-4 p-4 rounded-xl transition-all duration-300 text-left border ${
                    activeFeature.id === feature.id 
                      ? 'bg-white border-cyan-200 shadow-md transform scale-[1.02]' 
                      : 'bg-transparent border-transparent hover:bg-white/50'
                  }`}
                >
                  {/* Icon Box */}
                  <div className={`p-3 rounded-lg ${
                     activeFeature.id === feature.id ? 'bg-cyan-100 text-cyan-600' : 'bg-gray-200 text-gray-500'
                  }`}>
                    {feature.icon}
                  </div>
                  
                  {/* Text */}
                  <div>
                    <h4 className={`font-bold ${activeFeature.id === feature.id ? 'text-gray-900' : 'text-gray-600'}`}>
                      {feature.title}
                    </h4>
                    <p className="text-xs text-gray-500 mt-1">
                      {feature.description}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          </motion.div>

          {/* RIGHT COLUMN: Dynamic Image Display */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            className="relative h-[500px] w-full group perspective">
            
            {/* Main Image with transition key */}
            <div 
              key={activeFeature.id} // Changing key triggers React to re-render the animation
              className="relative h-full w-full rounded-[2rem] overflow-hidden shadow-2xl animate-fade-in"
            >
              <img 
                src={activeFeature.image} 
                alt={activeFeature.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* Overlay Gradient for better text readability if needed */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
            </div>

            {/* Floating Review Card (Static) */}
            <div className="absolute -bottom-6 -left-6 bg-white p-5 rounded-xl shadow-xl max-w-xs z-20 animate-slide-up">
              <div className="flex gap-1 text-yellow-400 mb-2">
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
              </div>
              <p className="text-gray-800 font-semibold text-sm">
                "The most modern clinic I've ever visited!"
              </p>
            </div>

            {/* Decorative background element behind image */}
            <div className="absolute top-10 -right-10 w-full h-full border-2 border-cyan-500/20 rounded-[2rem] -z-10" />
            
          </motion.div>

        </div>
      </div>
      
      {/* Simple fade-in animation style */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.98); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-fade-in {
          animation: fadeIn 0.4s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default Technology;