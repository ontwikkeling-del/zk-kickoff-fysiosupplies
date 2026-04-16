import React from 'react';
import { motion } from 'framer-motion';

export const HeroSlide: React.FC = () => {
  return (
    <section className="h-screen w-screen snap-start relative overflow-hidden flex items-center justify-center bg-brand-purple">
      {/* Background effects */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[800px] h-[800px] bg-brand-green/5 rounded-full blur-[180px]" />
      </div>
      <motion.div
        initial={{ x: '-100%', opacity: 0 }}
        whileInView={{ x: '200%', opacity: [0, 0.1, 0] }}
        transition={{ duration: 3, delay: 0.5 }}
        className="absolute inset-0 w-1/3 bg-gradient-to-r from-transparent via-brand-green/10 to-transparent -skew-x-12"
      />

      <div className="container mx-auto px-6 relative z-10 max-w-5xl text-center">
        {/* Logos: ZK × FysioSupplies */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center gap-8 md:gap-12 mb-10"
        >
          <img
            src="/zk-logo-full.png"
            alt="Zwarte Kraai"
            className="h-40 md:h-52 lg:h-64 invert"
          />
          <span className="text-white/30 text-5xl md:text-6xl font-light select-none">&times;</span>
          <div className="bg-white rounded-2xl p-4 md:p-6">
            <img
              src="/fysiosupplies-logo.jpg"
              alt="FysioSupplies"
              className="h-28 md:h-36 lg:h-44"
            />
          </div>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-2xl md:text-3xl font-black uppercase tracking-wider text-brand-green mb-4"
        >
          Kickoff
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="text-white/40 text-sm uppercase tracking-widest"
        >
          De planning voor succes
        </motion.p>
      </div>
    </section>
  );
};
