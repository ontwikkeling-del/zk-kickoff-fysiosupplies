import React from 'react';
import { motion } from 'framer-motion';

export const ClosingSlide: React.FC = () => {
  return (
    <section className="h-screen w-screen snap-start relative overflow-hidden flex items-center justify-center bg-brand-purple">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[800px] h-[800px] bg-brand-green/5 rounded-full blur-[180px]" />
      </div>
      <motion.div
        initial={{ x: '-100%', opacity: 0 }}
        whileInView={{ x: '200%', opacity: [0, 0.08, 0] }}
        transition={{ duration: 4, delay: 0.5 }}
        className="absolute inset-0 w-1/3 bg-gradient-to-r from-transparent via-brand-green/10 to-transparent -skew-x-12"
      />

      <div className="container mx-auto px-6 relative z-10 max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <img
            src="/zk-logo-full.png"
            alt="Zwarte Kraai"
            className="h-32 mx-auto opacity-90 brightness-0 invert"
          />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-2xl md:text-4xl lg:text-5xl font-black uppercase leading-tight mb-8 text-white italic"
        >
          Elke kraai in het nest is belangrijk.
          <br />
          <span className="text-brand-green not-italic">Jullie feedback</span>{' '}
          is onze wind onder de vleugels!
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-white/30 text-sm"
        >
          Zwarte Kraai &times; FysioSupplies
        </motion.div>
      </div>
    </section>
  );
};
