import React, { useState, useEffect } from 'react';
import { X, ArrowRight, Quote, Heart, Sparkles } from 'lucide-react';

const Gallery = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  // --- REALISTIC DATA ---
  const galleryItems = [
    {
      id: 1,
      image: "p1.png", // Child patient
      title: "Happy Little Smiles",
      category: "Pediatric Dentistry",
      patientAge: "6",
      story: "Arav was nervous about his first checkup, but our friendly team turned it into a fun adventure. We focused on building trust and teaching proper brushing techniques early on. He left with a cavity-free certificate and a big thumbs up!",
      outcome: "Fear-Free Experience"
    },
    {
      id: 2,
      image: "p2.png", // Elderly man
      title: "Restoring Confidence",
      category: "Geriatric Dentistry",
      patientAge: "72",
      story: "Mr. Sharma struggled with loose dentures that made eating difficult. We provided him with a custom-fitted complete denture set that restored his facial structure and ability to chew comfortably. His beaming smile says it all.",
      outcome: "Functionality Restored"
    },
    {
      id: 3,
      image: "p3.png", // Woman in consultation collage
      title: "Comprehensive Care",
      category: "General Consultation",
      patientAge: "38",
      story: "Priya visited us for a routine consultation regarding tooth sensitivity. We created a personalized treatment plan involving a simple root canal and a ceramic crown. The process was explained in detail to ensure she felt completely at ease.",
      outcome: "Pain-Free & Informed"
    },
    {
      id: 4,
      image: "p4.png", // Young woman (Before/After gap closure)
      title: "The Perfect Alignment",
      category: "Cosmetic Bonding",
      patientAge: "23",
      story: "Sneha was self-conscious about the gap between her front teeth (diastema). Using composite bonding, we closed the space in a single sitting without the need for braces. The result was an instant, seamless transformation of her smile.",
      outcome: "Gap Closed in 1 Hour"
    },
    {
      id: 5,
      image: "p5.png", // Middle-aged woman in saree
      title: "Smile Rejuvenation",
      category: "Restorative Dentistry",
      patientAge: "52",
      story: "Years of wear and tear had taken a toll on Sunita's smile. We performed a smile rejuvenation procedure using porcelain bridges to replace missing teeth and restore her natural bite, giving her a youthful and radiant look.",
      outcome: "Natural Look Restored"
    },
    {
      id: 6,
      image: "p6.png", // Woman with visible gap
      title: "Midline Correction",
      category: "Orthodontics",
      patientAge: "34",
      story: "Anjali came to us wishing to address the spacing in her upper teeth. We discussed various options including invisible aligners to gently close the midline gap over time, ensuring her gum health remained a priority throughout the process.",
      outcome: "Treatment Plan Initiated"
    }
  ];

  // Prevent scrolling when modal is open
  useEffect(() => {
    if (selectedItem) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [selectedItem]);

  return (
    <section className="min-h-screen bg-gray-50 pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900">
            Smile <span className="text-cyan-500 font-serif italic">Gallery</span>
          </h1>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            Every smile has a story. Explore the transformations and journeys of our happy patients.
          </p>
        </div>

        {/* MASONRY LAYOUT */}
        {/* 'columns-1 md:columns-2 lg:columns-3' creates the waterfall effect */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {galleryItems.map((item) => (
            <div 
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className="break-inside-avoid relative group rounded-2xl overflow-hidden cursor-pointer shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-1"
            >
              {/* Image */}
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-cyan-400 text-xs font-bold uppercase tracking-wider mb-2">
                  {item.category}
                </span>
                <h3 className="text-white text-xl font-bold">
                  {item.title}
                </h3>
                <div className="flex items-center gap-2 text-white/80 text-sm mt-2">
                  <span>View Story</span>
                  <ArrowRight size={16} />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* --- MODAL (THE STORY CARD) --- */}
      {selectedItem && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
          
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/80 backdrop-blur-sm animate-fade-in"
            onClick={() => setSelectedItem(null)}
          />

          {/* Modal Content */}
          <div className="relative w-full max-w-5xl bg-white rounded-3xl overflow-hidden shadow-2xl animate-scale-up flex flex-col md:flex-row max-h-[90vh]">
            
            {/* Close Button */}
            <button 
              onClick={() => setSelectedItem(null)}
              className="absolute top-4 right-4 z-20 p-2 bg-white/20 backdrop-blur hover:bg-white/40 rounded-full text-white md:text-gray-900 transition-colors"
            >
              <X size={24} />
            </button>

            {/* Left Side: Image */}
            <div className="w-full md:w-1/2 h-64 md:h-auto relative">
              <img 
                src={selectedItem.image} 
                alt={selectedItem.title} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent md:hidden" />
            </div>

            {/* Right Side: The Story */}
            <div className="w-full md:w-1/2 p-8 md:p-12 overflow-y-auto bg-white flex flex-col justify-center">
              
              <div className="flex items-center gap-3 mb-6">
                <span className="px-3 py-1 bg-cyan-100 text-cyan-700 text-xs font-bold rounded-full uppercase tracking-wider">
                  {selectedItem.category}
                </span>
                <span className="text-gray-400 text-sm">
                  Age: {selectedItem.patientAge}
                </span>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                {selectedItem.title}
              </h2>

              <div className="relative pl-6 border-l-4 border-cyan-500 mb-8">
                <Quote size={48} className="absolute -top-4 -left-6 text-cyan-100 -z-10 opacity-50" />
                <p className="text-gray-600 text-lg leading-relaxed italic">
                  "{selectedItem.story}"
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                <div className="flex items-center gap-2 mb-2 text-cyan-600 font-bold">
                  <Sparkles size={18} />
                  <span>The Result</span>
                </div>
                <p className="text-gray-800 font-medium text-lg">
                  {selectedItem.outcome}
                </p>
              </div>

              <div className="mt-8 flex items-center gap-4 pt-8 border-t border-gray-100">
                 <button className="flex items-center gap-2 text-gray-400 hover:text-rose-500 transition-colors">
                    <Heart size={20} /> <span className="text-sm">Like this story</span>
                 </button>
              </div>

            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes scaleUp { from { opacity: 0; transform: scale(0.95); } to { opacity: 1; transform: scale(1); } }
        .animate-fade-in { animation: fadeIn 0.3s ease-out forwards; }
        .animate-scale-up { animation: scaleUp 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
      `}</style>
    </section>
  );
};

export default Gallery;