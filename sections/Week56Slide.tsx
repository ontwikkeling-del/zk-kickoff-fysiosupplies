import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Phone, BarChart3, MessageSquare } from 'lucide-react';

const items = [
  {
    icon: GraduationCap,
    title: 'Sales training',
    desc: 'Het complete sales team trainen in HubSpot: van leads beheren tot deals sluiten.',
  },
  {
    icon: Phone,
    title: 'Bellen en testen',
    desc: 'In de praktijk bellen met HubSpot en de workflows en scripts testen.',
  },
  {
    icon: BarChart3,
    title: 'Dashboards finetunen',
    desc: 'Rapportages en dashboards afstemmen op jullie dagelijkse werkwijze.',
  },
  {
    icon: MessageSquare,
    title: 'Evaluatie en feedback',
    desc: 'Resultaten bespreken, laatste aanpassingen doorvoeren en het systeem overdragen.',
  },
];

export const Week56Slide: React.FC = () => {
  return (
    <section className="h-screen w-screen snap-start relative overflow-hidden flex items-center justify-center bg-brand-purple">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[600px] h-[600px] bg-brand-green/5 rounded-full blur-[150px]" />
      </div>
      <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] bg-brand-accent/5 rounded-full blur-[100px]" />

      <div className="container mx-auto px-6 relative z-10 max-w-5xl">
        <div className="text-center mb-10">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="inline-block bg-brand-pink/15 text-brand-pink font-bold text-xs uppercase tracking-wider px-3 py-1 rounded-full mb-3"
          >
            Week 5-6
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl font-black uppercase leading-tight mb-2 text-white"
          >
            Training &{' '}
            <span className="text-brand-green">go-live</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.15 }}
            className="text-white/50 text-base max-w-xl mx-auto"
          >
            Het sales team klaarstomen en het systeem overdragen. Klaar om zelfstandig te vliegen.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all"
            >
              <div className="w-11 h-11 bg-brand-green/15 rounded-full flex items-center justify-center mb-4">
                <item.icon className="w-5 h-5 text-brand-green" />
              </div>
              <h3 className="text-white font-bold text-base mb-2">{item.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
