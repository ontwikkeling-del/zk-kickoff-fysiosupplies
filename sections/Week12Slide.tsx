import React from 'react';
import { motion } from 'framer-motion';
import { Plug, Database, Users, Mail, Phone, BarChart3, ListChecks, Settings } from 'lucide-react';

const items = [
  { icon: Plug, text: 'HubSpot CRM inrichten en configureren', highlight: true },
  { icon: Database, text: 'Data-import: klanten, bedrijven en contacten', highlight: true },
  { icon: Settings, text: 'Koppeling met Business Central voorbereiden' },
  { icon: Users, text: 'Gebruikersaccounts en rechten instellen' },
  { icon: Mail, text: 'E-mailintegratie (Outlook / Office 365)' },
  { icon: Phone, text: 'Belomgeving instellen' },
  { icon: BarChart3, text: 'Basis rapportages en dashboards' },
  { icon: ListChecks, text: 'B2B/B2C segmentatie opzetten' },
];

export const Week12Slide: React.FC = () => {
  return (
    <section className="h-screen w-screen snap-start relative overflow-hidden flex items-center justify-center bg-[#f8f5ff]">
      <div className="absolute bottom-1/4 right-1/3 w-[500px] h-[500px] bg-brand-green/5 rounded-full blur-[130px]" />

      <div className="container mx-auto px-6 relative z-10 max-w-5xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: header */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              <span className="inline-block bg-brand-green/10 text-brand-green font-bold text-xs uppercase tracking-wider px-3 py-1 rounded-full mb-4">
                Week 1-2
              </span>
              <h2 className="text-3xl md:text-4xl font-black uppercase leading-tight mb-3 text-brand-purple">
                Klaar om te{' '}
                <span className="text-brand-green">vliegen</span>
              </h2>
              <p className="text-gray-500 text-base leading-relaxed">
                De techniek instellen. We bouwen het fundament in HubSpot en zorgen dat jullie data schoon en gestructureerd wordt geimporteerd.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-6 bg-brand-green/5 border border-brand-green/10 rounded-xl p-4"
            >
              <p className="text-brand-purple text-sm font-bold">Technische basis leggen</p>
              <p className="text-gray-500 text-xs mt-1">CRM opzetten, data importeren en alle tools klaar voor gebruik.</p>
            </motion.div>
          </div>

          {/* Right: items */}
          <div className="space-y-2.5">
            {items.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + index * 0.06 }}
                className={`bg-white shadow-sm border rounded-xl p-3.5 flex items-center gap-3 hover:border-brand-green/30 transition-all ${
                  item.highlight ? 'border-brand-green/20' : 'border-gray-100'
                }`}
              >
                <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${
                  item.highlight ? 'bg-brand-green/15' : 'bg-brand-green/10'
                }`}>
                  <item.icon className={`w-4 h-4 ${item.highlight ? 'text-brand-green' : 'text-brand-green/70'}`} />
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
