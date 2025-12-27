import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, Send, User, MessageSquare, CheckCircle } from 'lucide-react';
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../translations";

const Feedback = () => {
  const { language } = useLanguage();
  const t = translations[language].feedback;

  const [formData, setFormData] = useState({
    name: '',
    message: '',
    rating: 0
  });
  const [hoveredRating, setHoveredRating] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ name: '', message: '', rating: 0 });
      }, 3000);
    }, 1000);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section id="feedback" className="w-full py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* LEFT COLUMN: Content */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="space-y-6">
            
            <div className="space-y-4">
              <h2 className="text-4xl font-bold text-gray-900">
                {t.title} <br />
                <span className="text-cyan-500">{t.titleHighlight}</span>
              </h2>
              <p className="text-gray-600 leading-relaxed">
                {t.description}
              </p>
            </div>

            {/* Stats/Trust indicators */}
            <div className="flex flex-wrap gap-8 pt-4">
              <div className="text-center">
                <p className="text-3xl font-bold text-cyan-500">500+</p>
                <p className="text-sm text-gray-500">{t.happyPatients}</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-cyan-500">4.9</p>
                <p className="text-sm text-gray-500">{t.avgRating}</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-cyan-500">98%</p>
                <p className="text-sm text-gray-500">{t.satisfaction}</p>
              </div>
            </div>

            {/* Decorative quote */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 mt-8">
              <p className="text-gray-600 italic">"{t.quote}"</p>
              <p className="text-sm text-gray-400 mt-2">— {t.quoteAuthor}</p>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: Feedback Form */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            className="relative">
            
            <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
              
              {isSubmitted ? (
                // Success State
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle size={40} className="text-green-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{t.thankYou}</h3>
                  <p className="text-gray-500">{t.thankYouMessage}</p>
                </motion.div>
              ) : (
                // Form State
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-bold text-gray-900">{t.formTitle}</h3>
                    <p className="text-sm text-gray-500 mt-1">{t.formSubtitle}</p>
                  </div>

                  {/* Star Rating */}
                  <div className="text-center">
                    <p className="text-sm font-medium text-gray-700 mb-3">{t.rateExperience}</p>
                    <div className="flex justify-center gap-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          onClick={() => setFormData(prev => ({ ...prev, rating: star }))}
                          onMouseEnter={() => setHoveredRating(star)}
                          onMouseLeave={() => setHoveredRating(0)}
                          className="transition-transform hover:scale-110"
                        >
                          <Star
                            size={32}
                            className={`transition-colors ${
                              star <= (hoveredRating || formData.rating)
                                ? 'text-yellow-400 fill-yellow-400'
                                : 'text-gray-300'
                            }`}
                          />
                        </button>
                      ))}
                    </div>
                    {formData.rating > 0 && (
                      <p className="text-xs text-cyan-500 mt-2">
                        {formData.rating === 5 ? t.excellent : 
                         formData.rating === 4 ? t.veryGood :
                         formData.rating === 3 ? t.good :
                         formData.rating === 2 ? t.fair : t.poor}
                      </p>
                    )}
                  </div>

                  {/* Name Input */}
                  <div className="relative">
                    <User size={18} className="absolute left-4 top-3.5 text-gray-400" />
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder={t.namePlaceholder}
                      required
                      className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100 outline-none transition-all"
                    />
                  </div>

                  {/* Message Textarea */}
                  <div className="relative">
                    <MessageSquare size={18} className="absolute left-4 top-3.5 text-gray-400" />
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder={t.messagePlaceholder}
                      required
                      rows={4}
                      className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100 outline-none transition-all resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting || formData.rating === 0}
                    className="w-full py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-bold text-lg shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 transform transition-all hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <>
                        {t.submitButton}
                        <Send size={18} />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-cyan-100 rounded-full -z-10 opacity-50" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-100 rounded-full -z-10 opacity-50" />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Feedback;
