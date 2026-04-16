import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Target, TrendingUp, Mountain } from 'lucide-react';

export const IntroSlide: React.FC = () => {
  return (
    <section className="h-screen w-screen snap-start relative overflow-hidden flex items-center justify-center bg-[#f8f5ff]">
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-brand-green/5 rounded-full blur-[130px]" />
      <div className="absolute bottom-1/3 left-1/3 w-[400px] h-[400px] bg-brand-accent/5 rounded-full blur-[120px]" />

      <div className="container mx-auto px-6 relative z-10 max-w-5xl text-center">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-brand-accent font-bold text-sm uppercase tracking-wider mb-3"
        >
          Het traject
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-5xl font-black uppercase leading-tight mb-4 text-brand-purple"
        >
          Met Zwarte Kraai naar{' '}
          <span className="text-brand-green">grote hoogten</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-gray-500 text-lg max-w-2xl mx-auto mb-10"
        >
          Van voorbereiding tot go-live — in 4 fasen naar een volledig werkend CRM.
        </motion.p>

        <div className="grid md:grid-cols-4 gap-4">
          {[
            { icon: Mountain, label: 'Week 0', title: 'Voorbereiding', color: 'text-brand-accent', bg: 'bg-brand-accent' },
            { icon: Rocket, label: 'Week 1-2', title: 'Techniek', color: 'text-brand-green', bg: 'bg-brand-green' },
            { icon: Target, label: 'Week 3-4', title: 'Inrichting', color: 'text-cyan-400', bg: 'bg-cyan-400' },
            { icon: TrendingUp, label: 'Week 5-6', title: 'Training & Live', color: 'text-brand-pink', bg: 'bg-brand-pink' },
          ].map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              className="bg-white shadow-sm border border-gray-100 rounded-xl p-5 hover:shadow-md transition-all"
            >
              <div className={`w-10 h-10 ${item.bg}/10 rounded-full flex items-center justify-center mb-3 mx-auto`}>
                <item.icon className={`w-5 h-5 ${item.color}`} />
              </div>
              <p className={`${item.color} font-bold text-xs uppercase tracking-wider mb-1`}>{item.label}</p>
              <p className="text-brand-purple font-black text-sm uppercase">{item.title}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
