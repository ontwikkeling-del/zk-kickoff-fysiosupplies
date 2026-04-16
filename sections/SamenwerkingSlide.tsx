import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, RefreshCw, ThumbsUp } from 'lucide-react';

const principles = [
  {
    icon: MessageSquare,
    title: 'Regelmatige updates',
    desc: 'We houden jullie continu op de hoogte van de voortgang en delen tussentijdse resultaten.',
  },
  {
    icon: RefreshCw,
    title: 'Continu optimaliseren',
    desc: 'Jullie feedback nemen we mee om het proces steeds verder te verbeteren.',
  },
  {
    icon: ThumbsUp,
    title: 'Korte lijnen',
    desc: 'Direct contact met het hele team. Geen omwegen, geen vertraging.',
  },
];

export const SamenwerkingSlide: React.FC = () => {
  return (
    <section className="h-screen w-screen snap-start relative overflow-hidden flex items-center justify-center bg-[#f8f5ff]">
      <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-brand-accent/5 rounded-full blur-[120px]" />

      <div className="container mx-auto px-6 relative z-10 max-w-4xl text-center">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-brand-accent font-bold text-sm uppercase tracking-wider mb-3"
        >
          Samenwerking
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-4xl font-black uppercase leading-tight mb-3 text-brand-purple"
        >
          Elke kraai heeft een{' '}
          <span className="text-brand-green">stem</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.15 }}
          className="text-gray-500 text-base max-w-xl mx-auto mb-10"
        >
          Hoe we samenwerken en updates delen gedurende het traject.
        </motion.p>

        <div className="grid md:grid-cols-3 gap-5">
          {principles.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.12 }}
              className="bg-white shadow-sm border border-gray-100 rounded-xl p-6 hover:shadow-md transition-all"
            >
              <div className="w-12 h-12 bg-brand-accent/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                <item.icon className="w-6 h-6 text-brand-accent" />
              </div>
              <h3 className="text-brand-purple font-bold text-base mb-2">{item.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
