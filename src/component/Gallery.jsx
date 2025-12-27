import React, { useState, useEffect } from 'react';
import { X, ArrowRight, Quote, Heart, Sparkles } from 'lucide-react';

const Gallery = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  // --- REALISTIC DATA ---
  const galleryItems = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=2070&auto=format&fit=crop",
      title: "The Wedding Day Glow",
      category: "Teeth Whitening",
      patientAge: "28",
      story: "Sarah came to us just 3 weeks before her wedding. She was self-conscious about coffee stains accumulated over her university years. We designed a custom Zoom Whitening plan. The result? A smile that outshined her dress. She told us she couldn't stop smiling in every single wedding photo.",
      outcome: "8 Shades Whiter"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1606811826601-e90370863800?q=80&w=2070&auto=format&fit=crop",
      title: "Overcoming Dental Anxiety",
      category: "Pediatric Dentistry",
      patientAge: "7",
      story: "Little Leo was terrified of the dentist chair. Our pediatric specialist used our 'Tell-Show-Do' technique and played his favorite cartoons on the ceiling TV. By the end of the cavity filling, he didn't even realize the procedure was done. He actually gave Dr. Smith a high-five!",
      outcome: "Zero Tears, 1 Cavity Filled"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2068&auto=format&fit=crop",
      title: "Full Mouth Rehabilitation",
      category: "Implants & Veneers",
      patientAge: "54",
      story: "After years of neglecting oral health due to busy work life, Mark had difficulty chewing and hid his laugh. We performed a combination of All-on-4 implants and porcelain veneers. It wasn't just about teeth; it was about restoring his ability to enjoy a steak dinner and laugh openly with his grandchildren.",
      outcome: "Full Functionality Restored"
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?q=80&w=2070&auto=format&fit=crop",
      title: "The Invisible Correction",
      category: "Invisalign",
      patientAge: "32",
      story: "Jessica is a corporate executive who needed braces but couldn't afford the 'metal look' in board meetings. We set her up with Invisalign. Over 12 months, her crowding was corrected without a single colleague noticing she was undergoing treatment until the final reveal.",
      outcome: "Perfect Alignment in 12 Months"
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1609840114035-3c981b782808?q=80&w=2070&auto=format&fit=crop",
      title: "Emergency Restoration",
      category: "Ceramic Bonding",
      patientAge: "22",
      story: "A cycling accident left Tom with a chipped front tooth right before his graduation. Using high-grade composite bonding, we sculpted the tooth back to its natural shape in a single 45-minute sitting. The color match was so precise, even he couldn't tell where the chip used to be.",
      outcome: "Instant Repair"
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1572666341285-cb8cb60d0693?q=80&w=2070&auto=format&fit=crop",
      title: "Gum Contouring",
      category: "Cosmetic Surgery",
      patientAge: "29",
      story: "Emma felt she had a 'gummy smile' where her teeth looked too small. Using our precision laser technology, we gently reshaped the gum line. It was a minimally invasive procedure with a massive visual impact, revealing the beautiful natural length of her teeth.",
      outcome: "Balanced Smile Aesthetics"
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