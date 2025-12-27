import React from 'react';
import { Quote } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../translations";

const Testimonials = () => {
  const { language } = useLanguage();
  const t = translations[language].testimonials;

  const reviewsData = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop",
      bgClass: "bg-yellow-300",
      textClass: "text-gray-900",
      gridClass: "md:col-span-5",
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop",
      bgClass: "bg-purple-200",
      textClass: "text-gray-900",
      gridClass: "md:col-span-7",
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1888&auto=format&fit=crop",
      bgClass: "bg-blue-600",
      textClass: "text-white",
      gridClass: "md:col-span-4",
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1887&auto=format&fit=crop",
      bgClass: "bg-rose-200",
      textClass: "text-gray-900",
      gridClass: "md:col-span-4",
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop",
      bgClass: "bg-gray-100",
      textClass: "text-gray-900",
      gridClass: "md:col-span-4",
    },
  ];

  // Combine static data with translated content
  const reviews = reviewsData.map((review, index) => ({
    ...review,
    name: t.reviews[index].name,
    role: t.reviews[index].role,
    content: t.reviews[index].content,
  }));

  return (
    <section id="testimonials" className="w-full py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-8">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900">
            {t.title} <br />
            <span className="text-cyan-500 font-serif italic">{t.titleHighlight}</span>
          </h2>
        </motion.div>

        {/* Bento Grid Layout */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
          className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {reviews.map((review) => (
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 30, scale: 0.95 },
                visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: "easeOut" } }
              }}
              key={review.id}
              className={`
                ${review.bgClass} ${review.gridClass} ${review.textClass}
                p-8 rounded-3xl flex flex-col justify-between relative
                transition-all duration-300 ease-out
                hover:scale-[1.02] hover:-rotate-1 hover:shadow-2xl hover:z-10 cursor-pointer
              `}
            >
              {/* Quote Icon */}
              <Quote 
                size={40} 
                className={`mb-6 opacity-50 ${review.textClass === 'text-white' ? 'text-white' : 'text-black'}`} 
              />
              
              {/* Testimonial Text */}
              <p className="text-lg md:text-xl font-medium leading-relaxed mb-8">
                "{review.content}"
              </p>

              {/* User Profile */}
              <div className="flex items-center gap-4 mt-auto">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white/30">
                  <img 
                    src={review.image} 
                    alt={review.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-bold text-sm">{review.name}</p>
                  <p className={`text-xs opacity-80 uppercase tracking-wide`}>
                    {review.role}
                  </p>
                </div>
              </div>

            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Testimonials;
