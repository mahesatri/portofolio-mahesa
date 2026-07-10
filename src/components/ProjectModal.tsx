'use client';

import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Cpu, CheckCircle2, ShieldAlert } from 'lucide-react';
import { GithubIcon } from './Icons';
import { Project } from '../data/portfolioData';

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
  lang: 'id' | 'en';
  labels: {
    modalBtnClose: string;
    modalGithub: string;
    modalDemo: string;
    modalFeatures: string;
    modalChallenge: string;
    modalSolution: string;
  };
}

export function ProjectModal({ project, isOpen, onClose, lang, labels }: ProjectModalProps) {
  // Prevent background scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
          {/* Backdrop Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 350 }}
            className="relative z-10 w-full max-w-3xl max-h-[85vh] overflow-y-auto rounded-2xl border border-slate-200 bg-white p-6 shadow-2xl dark:border-slate-800 dark:bg-[#0f1524] sm:p-8"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 bg-slate-50 text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-800 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-slate-200 cursor-pointer"
              aria-label={labels.modalBtnClose}
            >
              <X className="h-4 w-4" />
            </button>

            {/* Header / Project Title */}
            <div className="mb-6">
              <span className="inline-block rounded-md bg-blue-50 px-2.5 py-1 text-xs font-semibold text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
                Project Detail
              </span>
              <h3 className="mt-2 text-2xl font-bold text-slate-900 dark:text-white sm:text-3xl">
                {project.title}
              </h3>
              
              {/* Tech Tags */}
              <div className="mt-3 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-1 rounded-md border border-slate-100 bg-slate-50 px-2.5 py-0.5 text-xs font-medium text-slate-600 dark:border-slate-800 dark:bg-slate-900/60 dark:text-slate-300"
                  >
                    <Cpu className="h-3 w-3 text-blue-500" />
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Description */}
            <div className="prose prose-slate dark:prose-invert max-w-none mb-6">
              <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300 sm:text-base">
                {project.longDesc}
              </p>
            </div>

            {/* Features, Challenge, Solution Grid */}
            <div className="space-y-6">
              {/* Key Features */}
              <div>
                <h4 className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-slate-200">
                  <CheckCircle2 className="h-5 w-5 text-emerald-500" />
                  {labels.modalFeatures}
                </h4>
                <ul className="mt-3 grid grid-cols-1 gap-2.5 pl-1 sm:grid-cols-2">
                  {project.features.map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2.5 text-xs text-slate-600 dark:text-slate-300 sm:text-sm"
                    >
                      <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Challenge & Solution Side by Side */}
              <div className="grid grid-cols-1 gap-4 border-t border-slate-100 pt-6 dark:border-slate-800/80 sm:grid-cols-2">
                <div className="rounded-xl border border-rose-100 bg-rose-50/30 p-4 dark:border-rose-950/20 dark:bg-rose-950/5">
                  <h4 className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-rose-700 dark:text-rose-400">
                    <ShieldAlert className="h-4 w-4" />
                    {labels.modalChallenge}
                  </h4>
                  <p className="mt-2 text-xs leading-relaxed text-slate-600 dark:text-slate-300 sm:text-sm">
                    {project.challenge}
                  </p>
                </div>

                <div className="rounded-xl border border-emerald-100 bg-emerald-50/30 p-4 dark:border-emerald-950/20 dark:bg-emerald-950/5">
                  <h4 className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400">
                    <CheckCircle2 className="h-4 w-4" />
                    {labels.modalSolution}
                  </h4>
                  <p className="mt-2 text-xs leading-relaxed text-slate-600 dark:text-slate-300 sm:text-sm">
                    {project.solution}
                  </p>
                </div>
              </div>
            </div>

            {/* Links / Footer Actions */}
            <div className="mt-8 flex flex-wrap gap-3 border-t border-slate-100 pt-6 dark:border-slate-800/80">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-xl bg-slate-900 px-4 py-2.5 text-xs font-semibold text-white shadow-xs transition-colors hover:bg-slate-800 dark:bg-slate-100 dark:text-slate-950 dark:hover:bg-slate-200 sm:text-sm"
                >
                  <GithubIcon className="h-4 w-4" />
                  {labels.modalGithub}
                </a>
              )}
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-xs font-semibold text-slate-700 shadow-xs transition-colors hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-900/50 dark:text-slate-300 dark:hover:bg-slate-800 sm:text-sm"
                >
                  <ExternalLink className="h-4 w-4" />
                  {labels.modalDemo}
                </a>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
