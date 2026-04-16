import React from 'react';
import { motion } from 'framer-motion';
import {
  Settings, Workflow, GitBranch, BarChart3,
  Mail, Route, Calendar, Target, Filter, Brain
} from 'lucide-react';

const leftItems = [
  { icon: GitBranch, text: 'Salespijplijn inrichten' },
  { icon: Filter, text: 'B2B segmentatie verfijnen en automatiseren' },
  { icon: Workflow, text: 'Workflows voor lead opvolging' },
  { icon: Brain, text: 'AI-analyse en automatisering instellen' },
  { icon: BarChart3, text: 'Dashboards en KPI-rapportages' },
];

const rightItems = [
  { icon: Mail, text: 'E-mailtemplates en sequences opzetten' },
  { icon: Route, text: 'Sales flows en draaiboeken' },
  { icon: Calendar, text: 'Agenda\'s koppelen' },
  { icon: Target, text: 'KPI\'s voor sales bepalen' },
  { icon: Settings, text: 'Custom properties en velden' },
];

export const Week34Slide: React.FC = () => {
  return (
    <section className="h-screen w-screen snap-start relative overflow-hidden flex items-center justify-center bg-[#f8f5ff]">
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-cyan-400/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-brand-accent/5 rounded-full blur-[100px]" />

      <div className="container mx-auto px-6 relative z-10 max-w-5xl">
        <div className="text-center mb-8">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="inline-block bg-cyan-400/10 text-cyan-500 font-bold text-xs uppercase tracking-wider px-3 py-1 rounded-full mb-3"
          >
            Week 3-4
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl font-black uppercase leading-tight mb-2 text-brand-purple"
          >
            Kraaiende{' '}
            <span className="text-brand-green">perfectie</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.15 }}
            className="text-gray-500 text-base max-w-xl mx-auto"
          >
            HubSpot volledig inrichten en optimaliseren voor jullie salesproces.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {/* Left column */}
          <div className="space-y-2.5">
            {leftItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.25 + index * 0.07 }}
                className="bg-white shadow-sm border border-gray-100 rounded-xl p-3.5 flex items-center gap-3 hover:border-cyan-400/30 transition-all"
              >
                <div className="w-8 h-8 bg-cyan-400/10 rounded-full flex items-center justify-center shrink-0">
                  <item.icon className="w-4 h-4 text-cyan-500" />
                </div>
                <p className="text-gray-700 text-sm font-medium">{item.text}</p>
              </motion.div>
            ))}
          </div>

          {/* Right column */}
          <div className="space-y-2.5">
            {rightItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.25 + index * 0.07 }}
                className="bg-white shadow-sm border border-gray-100 rounded-xl p-3.5 flex items-center gap-3 hover:border-cyan-400/30 transition-all"
              >
                <div className="w-8 h-8 bg-cyan-400/10 rounded-full flex items-center justify-center shrink-0">
                  <item.icon className="w-4 h-4 text-cyan-500" />
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
