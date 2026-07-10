'use client';

import { motion } from 'framer-motion';
import { Briefcase, MapPin } from 'lucide-react';
import { Experience, PortfolioContent } from '../data/portfolioData';

interface ExperienceSectionProps {
  data: {
    title: string;
    subtitle: string;
    list: Experience[];
  };
}

export function ExperienceSection({ data }: ExperienceSectionProps) {
  return (
    <section id="experience" className="mb-20 scroll-mt-24">
      <div className="mb-8">
        <h2 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-2xl">
          {data.title}
        </h2>
        <p className="mt-2 text-xs text-slate-500 dark:text-slate-400 sm:text-sm">
          {data.subtitle}
        </p>
      </div>

      <div className="flex flex-col gap-6">
        {data.list.map((exp, idx) => (
          <motion.div
            key={exp.company}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="glass-panel rounded-2xl p-6 md:p-8"
          >
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-5">
              <div>
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full bg-blue-50 text-blue-700 dark:bg-blue-950/30 dark:text-blue-300">
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75"></span>
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-500"></span>
                    </span>
                    {exp.program}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  {exp.role}
                </h3>
                <p className="text-sm font-semibold text-blue-600 dark:text-blue-400 mt-0.5">
                  {exp.company}
                </p>
              </div>
              <div className="flex flex-col items-start sm:items-end gap-1 shrink-0">
                <span className="text-sm font-medium text-slate-500 dark:text-slate-400">
                  {exp.period}
                </span>
                <span className="flex items-center gap-1 text-xs text-slate-400 dark:text-slate-500">
                  <MapPin className="h-3 w-3" />
                  {exp.location}
                </span>
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-slate-200/50 dark:border-slate-800/50 mb-5" />

            {/* Achievements */}
            <ul className="flex flex-col gap-2.5">
              {exp.achievements.map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.1 + i * 0.05 }}
                  className="flex items-start gap-3"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
                  <span className="text-xs leading-relaxed text-slate-600 dark:text-slate-300 sm:text-sm">
                    {item}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
