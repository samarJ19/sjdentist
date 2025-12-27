import React from 'react';
import { Quote } from 'lucide-react';
import { motion } from 'framer-motion';

const Testimonials = () => {
  const reviews = [
  {
    id: 1,
    name: "Priya Sharma",
    role: "Mom of a 6-year-old",
    content:
      "Yaar pehle toh mera beta dentist ka naam sunte hi ro deta tha 😅 but yahan ke doctors itne friendly hain ki ab woh khud bolta hai — ‘Mumma, dentist wale uncle ke paas chalna hai!’ Play area kaafi cute hai, waiting time bilkul stress-free.",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop",
    bgClass: "bg-yellow-300",
    textClass: "text-gray-900",
    gridClass: "md:col-span-5",
  },
  {
    id: 2,
    name: "Rohan Verma",
    role: "Software Developer",
    content:
      "Root canal ke naam se hi paseena aa jata tha but bro, laser treatment ne pura game change kar diya. Literally zero pain! Treatment ke baad seedha office gaya aur standup bhi attend kiya 😎 Highly recommended.",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop",
    bgClass: "bg-purple-200",
    textClass: "text-gray-900",
    gridClass: "md:col-span-7",
  },
  {
    id: 3,
    name: "Ankita Mehra",
    role: "Marketing Manager",
    content:
      "Got veneers done recently and omg they look so natural 😍 No one at work could guess, even my best friend was like ‘tu toh already perfect thi’. Confidence boost level 100!",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1888&auto=format&fit=crop",
    bgClass: "bg-blue-600",
    textClass: "text-white",
    gridClass: "md:col-span-4",
  },
  {
    id: 4,
    name: "Rajendra Singh",
    role: "Retired School Teacher",
    content:
      "Baaki jagah implant ka kharcha sun ke toh main darr hi gaya tha. Yahan payment plan samajh mein bhi aaya aur budget mein bhi. Staff ne har visit pe mujhse itni achchi tarah baat ki, bilkul ghar jaisa feel diya.",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1887&auto=format&fit=crop",
    bgClass: "bg-rose-200",
    textClass: "text-gray-900",
    gridClass: "md:col-span-4",
  },
  {
    id: 5,
    name: "Simran Kaur",
    role: "Yoga Instructor",
    content:
      "I really appreciate their holistic approach, koi unnecessary procedure push nahi kiya. Sab patiently explain kiya and genuinely felt like they cared about long-term oral health, not just the bill.",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop",
    bgClass: "bg-gray-100",
    textClass: "text-gray-900",
    gridClass: "md:col-span-4",
  },
];


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
            Stories from our <br />
            <span className="text-cyan-500 font-serif italic">Happy Patients</span>
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