import React from "react";
import { Sparkles, Anchor, Smile, Activity, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../translations";

const Services = () => {
  const { language } = useLanguage();
  const t = translations[language].services;

  const serviceList = [
    {
      id: 1,
      title: t.teethWhitening,
      description: t.teethWhiteningDesc,
      icon: <Sparkles size={32} />,
      theme: "blue",
      bgClass: "hover: bg-blue-50",
      shadow : "hover: shadow-blue-50/10",
      iconClass: "text-blue-500",
    },
    {
      id: 2,
      title: t.dentalImplant,
      description: t.dentalImplantDesc,
      icon: <Anchor size={32} />,
      theme: "rose",
      bgClass: "hover: bg-rose-50",
      shadow : "hover: shadow-rose-50/10",
      iconClass: "text-rose-500",
    },
    {
      id: 3,
      title: t.restorative,
      description: t.restorativeDesc,
      icon: <Smile size={32} />,
      theme: "green",
      bgClass: "bg-green-50",
      shadow : "hover: shadow-green-50/10",
      iconClass: "hover:text-green-500",
    },
    {
      id: 4,
      title: t.oralSurgery,
      description: t.oralSurgeryDesc,
      icon: <Activity size={32} />,
      theme: "fuchsia",
      bgClass: "bg-fuchsia-50",
      shadow : "shadow-fuchsia-50/10",
      iconClass: "text-fuchsia-500",
    },
  ];

  return (
    <section id="services" className="w-full py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-8">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16 space-y-2">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            {t.title} <br />
            {t.titleBreak}{" "}
            <span className="font-serif italic font-medium">{t.titleHighlight}</span>
          </h2>
        </motion.div>

        {/* Services Grid */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {serviceList.map((service) => (
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
              }}
              key={service.id}
              className={`${service.bgClass} ${service.shadow} rounded-3xl p-8 flex flex-col justify-between h-[320px] transition-all duration-300 ease hover:scale-105 hover:-translate-y-2 cursor-pointer group`}
            >
              {/* Top Section: Icon */}
              <div>
                <div className={`mb-6 ${service.iconClass}`}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Bottom Section: Arrow */}
              <div className="flex justify-end">
                <ArrowUpRight
                  className="text-gray-400 group-hover:text-gray-900 transition-colors"
                  size={24}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
