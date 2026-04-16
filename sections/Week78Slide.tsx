import React from 'react';
import { motion } from 'framer-motion';
import { Link, Headphones, RefreshCw, Rocket, CheckCircle2 } from 'lucide-react';

const items = [
  { icon: Link, text: 'Koppeling Business Central en Magento valideren', done: false },
  { icon: Headphones, text: 'Service Hub voorbereiden voor klantenservice', done: false },
  { icon: RefreshCw, text: 'Doorlopende optimalisatie en support', done: false },
  { icon: Rocket, text: 'Zelfstandig werken met HubSpot', done: false },
];

export const Week78Slide: React.FC = () => {
  return (
    <section className="h-screen w-screen snap-start relative overflow-hidden flex items-center justify-center bg-[#f8f5ff]">
      <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-brand-green/5 rounded-full blur-[120px]" />

      <div className="container mx-auto px-6 relative z-10 max-w-4xl">
        <div className="text-center mb-10">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="inline-block bg-brand-green/10 text-brand-green font-bold text-xs uppercase tracking-wider px-3 py-1 rounded-full mb-3"
          >
            Vervolg
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl font-black uppercase leading-tight mb-2 text-brand-purple"
          >
            Na de{' '}
            <span className="text-brand-green">lancering</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.15 }}
            className="text-gray-500 text-base max-w-xl mx-auto"
          >
            Het fundament staat. Dit zijn de volgende stappen om het maximale uit HubSpot te halen.
          </motion.p>
        </div>

        <div className="max-w-2xl mx-auto space-y-4">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              className="bg-white shadow-sm border border-gray-100 rounded-xl p-5 flex items-center gap-4 hover:border-brand-green/30 transition-all group"
            >
              <div className="w-10 h-10 bg-brand-green/10 rounded-full flex items-center justify-center shrink-0 group-hover:bg-brand-green/20 transition-all">
                <item.icon className="w-5 h-5 text-brand-green" />
              </div>
              <p className="text-gray-700 text-base font-medium flex-1">{item.text}</p>
              <CheckCircle2 className="w-5 h-5 text-gray-200 group-hover:text-brand-green transition-colors" />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-8 text-center"
        >
          <div className="inline-block animate-pulse-glow bg-brand-green/10 border border-brand-green/20 rounded-xl px-6 py-3">
            <p className="text-brand-green font-bold text-sm uppercase tracking-wider">Ready for takeoff</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
