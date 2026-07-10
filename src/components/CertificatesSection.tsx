'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, Eye, Award, Calendar, Star, Cpu } from 'lucide-react';
import { Certificate } from '../data/portfolioData';

interface CertificatesSectionProps {
  data: {
    title: string;
    subtitle: string;
    modalPreview: string;
    modalDownload: string;
    modalCertNumber: string;
    list: Certificate[];
  };
}

// ─── Certificate Card ────────────────────────────────────────────────────────

function CertificateCard({
  cert,
  onPreview,
  previewLabel,
}: {
  cert: Certificate;
  onPreview: (cert: Certificate) => void;
  previewLabel: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ duration: 0.5 }}
      className="group glass-panel glass-card-hover flex flex-col rounded-2xl overflow-hidden"
    >
      {/* Thumbnail / Gradient Placeholder */}
      <div
        className="relative h-40 bg-gradient-to-br from-blue-500/10 via-indigo-500/10 to-sky-500/10 dark:from-blue-600/10 dark:via-indigo-600/10 dark:to-sky-600/10 cursor-pointer overflow-hidden"
        onClick={() => onPreview(cert)}
        role="button"
        tabIndex={0}
        aria-label={`Lihat preview ${cert.title}`}
        onKeyDown={(e) => e.key === 'Enter' && onPreview(cert)}
      >
        {cert.thumbnailUrl ? (
          <img
            src={cert.thumbnailUrl}
            alt={`Preview ${cert.title}`}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="flex flex-col items-center justify-center h-full gap-2 text-blue-500 dark:text-blue-400">
            <Award className="h-8 w-8" />
            <span className="text-xs font-medium">Lihat Sertifikat</span>
          </div>
        )}
        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/30 transition-colors duration-200 flex items-center justify-center">
          <span className="text-white text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-blue-600 px-3 py-1.5 rounded-lg flex items-center gap-1.5">
            <Eye className="h-3.5 w-3.5" />
            Lihat Detail
          </span>
        </div>
      </div>

      {/* Info */}
      <div className="flex flex-col gap-3 p-5 flex-1">
        <div>
          <span className="text-xs font-semibold text-blue-600 dark:text-blue-400">
            {cert.issuer}
          </span>
          <h3 className="text-sm font-bold text-slate-900 dark:text-white mt-0.5 leading-snug">
            {cert.title}
          </h3>
        </div>

        <div className="flex flex-col gap-1.5">
          <InfoRow icon={<Award className="h-3.5 w-3.5 text-blue-500" />} label={cert.program} />
          <InfoRow icon={<Cpu className="h-3.5 w-3.5 text-indigo-500" />} label={cert.division} />
          <InfoRow icon={<Calendar className="h-3.5 w-3.5 text-slate-400" />} label={cert.date} />
          <InfoRow icon={<Star className="h-3.5 w-3.5 text-amber-500" />} label={cert.grade} highlight />
        </div>

        {/* Actions */}
        <div className="flex gap-2 mt-auto pt-2">
          <button
            onClick={() => onPreview(cert)}
            className="flex-1 flex items-center justify-center gap-1.5 text-xs font-semibold py-2 px-3 rounded-xl border border-slate-200 bg-white/50 text-slate-700 hover:border-blue-400 hover:text-blue-600 dark:border-slate-800 dark:bg-slate-900/30 dark:text-slate-300 dark:hover:border-blue-500 dark:hover:text-blue-400 transition-all cursor-pointer"
          >
            <Eye className="h-3.5 w-3.5" />
            {previewLabel}
          </button>
          <a
            href={cert.fileUrl}
            download
            className="flex-1 flex items-center justify-center gap-1.5 text-xs font-semibold py-2 px-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white shadow-xs transition-colors dark:bg-blue-600 dark:hover:bg-blue-500"
          >
            <Download className="h-3.5 w-3.5" />
            Download
          </a>
        </div>
      </div>
    </motion.div>
  );
}

function InfoRow({
  icon,
  label,
  highlight = false,
}: {
  icon: React.ReactNode;
  label: string;
  highlight?: boolean;
}) {
  return (
    <div className="flex items-center gap-2">
      {icon}
      <span
        className={`text-xs leading-relaxed ${
          highlight
            ? 'font-semibold text-emerald-600 dark:text-emerald-400'
            : 'text-slate-500 dark:text-slate-400'
        }`}
      >
        {label}
      </span>
    </div>
  );
}

// ─── Preview Modal ───────────────────────────────────────────────────────────

function PreviewModal({
  cert,
  onClose,
  labels,
}: {
  cert: Certificate;
  onClose: () => void;
  labels: {
    modalDownload: string;
    modalCertNumber: string;
  };
}) {
  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-slate-900/60 backdrop-blur-md"
        />

        {/* Modal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 350 }}
          className="relative z-10 w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-2xl border border-slate-200 bg-white shadow-2xl dark:border-slate-800 dark:bg-[#0f1524]"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Modal header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 dark:border-slate-800">
            <div>
              <h2 className="text-base font-bold text-slate-900 dark:text-white">
                {cert.title}
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                {cert.issuer} · {cert.program}
              </p>
            </div>
            <button
              onClick={onClose}
              aria-label="Tutup modal"
              className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 bg-slate-50 text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-800 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-slate-200 cursor-pointer"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          {/* PDF viewer */}
          <div className="h-[420px] bg-slate-100 dark:bg-slate-950">
            <iframe
              src={cert.fileUrl}
              title={cert.title}
              className="w-full h-full"
            />
          </div>

          {/* Modal footer */}
          <div className="flex items-center justify-between px-6 py-4 border-t border-slate-100 dark:border-slate-800">
            <div className="flex flex-col gap-0.5">
              <span className="text-2xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                {labels.modalCertNumber}
              </span>
              <span className="text-xs font-mono text-slate-600 dark:text-slate-300">
                {cert.certNumber}
              </span>
            </div>
            <a
              href={cert.fileUrl}
              download
              className="flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-2.5 text-xs font-bold text-white shadow-md transition-all hover:bg-blue-700 hover:shadow-lg dark:bg-blue-600 dark:hover:bg-blue-500 sm:text-sm"
            >
              <Download className="h-4 w-4" />
              {labels.modalDownload}
            </a>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

// ─── Section Utama ───────────────────────────────────────────────────────────

export function CertificatesSection({ data }: CertificatesSectionProps) {
  const [previewCert, setPreviewCert] = useState<Certificate | null>(null);

  return (
    <section id="certificates" className="mb-20 scroll-mt-24">
      <div className="mb-8">
        <h2 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-2xl">
          {data.title}
        </h2>
        <p className="mt-2 text-xs text-slate-500 dark:text-slate-400 sm:text-sm">
          {data.subtitle}
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {data.list.map((cert) => (
          <CertificateCard
            key={cert.id}
            cert={cert}
            onPreview={setPreviewCert}
            previewLabel={data.modalPreview}
          />
        ))}
      </div>

      {/* Modal */}
      {previewCert && (
        <PreviewModal
          cert={previewCert}
          onClose={() => setPreviewCert(null)}
          labels={{
            modalDownload: data.modalDownload,
            modalCertNumber: data.modalCertNumber,
          }}
        />
      )}
    </section>
  );
}
