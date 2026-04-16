import React from 'react';
import { motion } from 'framer-motion';
import { Database, Users, FolderOpen, FileSpreadsheet, BarChart3, Shield } from 'lucide-react';

const items = [
  { icon: Database, text: 'Exportoverzicht uit Business Central (orders, klanten)' },
  { icon: Users, text: 'Overzicht sales team en rolverdeling' },
  { icon: FolderOpen, text: 'Huidige klantcommunicatie en salesprocessen' },
  { icon: FileSpreadsheet, text: 'B2B klantsegmentatie en klantengroepen' },
  { icon: BarChart3, text: 'Bestaande rapportages en KPI\'s' },
  { icon: Shield, text: 'Data privacy richtlijnen (Asker) afstemmen' },
];

export const Week0Slide: React.FC = () => {
  return (
    <section className="h-screen w-screen snap-start relative overflow-hidden flex items-center justify-center bg-[#f8f5ff]">
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-brand-accent/5 rounded-full blur-[120px]" />

      <div className="container mx-auto px-6 relative z-10 max-w-5xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: header */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              <span className="inline-block bg-brand-accent/10 text-brand-accent font-bold text-xs uppercase tracking-wider px-3 py-1 rounded-full mb-4">
                Week 0
              </span>
              <h2 className="text-3xl md:text-4xl font-black uppercase leading-tight mb-3 text-brand-purple">
                De <span className="text-brand-green">nestfase</span>
              </h2>
              <p className="text-gray-500 text-base leading-relaxed">
                Samen alles klaarleggen. Wij verzamelen alle benodigde informatie zodat we direct goed van start kunnen.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-6 bg-brand-purple/5 border border-brand-purple/10 rounded-xl p-4"
            >
              <p className="text-brand-purple text-sm font-bold">Jullie leveren het materiaal</p>
              <p className="text-gray-500 text-xs mt-1">Wij analyseren en bereiden alles voor voor de technische setup in HubSpot.</p>
            </motion.div>
          </div>

          {/* Right: checklist */}
          <div className="space-y-3">
            {items.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + index * 0.08 }}
                className="bg-white shadow-sm border border-gray-100 rounded-xl p-4 flex items-center gap-4 hover:border-brand-green/30 transition-all"
              >
                <div className="w-9 h-9 bg-brand-accent/10 rounded-full flex items-center justify-center shrink-0">
                  <item.icon className="w-4 h-4 text-brand-accent" />
                </div>
                <p className="text-gray-700 text-sm font-medium">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
