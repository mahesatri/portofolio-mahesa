'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Download, 
  Mail, 
  Phone, 
  MapPin, 
  ExternalLink, 
  Menu, 
  X, 
  GraduationCap, 
  Sparkles,
  ArrowRight,
  Send
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../components/Icons';
import { ThemeToggle } from '../components/ThemeToggle';
import { LanguageToggle } from '../components/LanguageToggle';
import { ProjectModal } from '../components/ProjectModal';
import { ExperienceSection } from '../components/ExperienceSection';
import { CertificatesSection } from '../components/CertificatesSection';
import { portfolioData, skillsData, Project } from '../data/portfolioData';

export default function Portfolio() {
  const [lang, setLang] = useState<'id' | 'en'>('id');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // Contact Form State
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const t = portfolioData[lang];

  const handleOpenModal = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formState.name && formState.email && formState.message) {
      setIsSubmitting(true);
      try {
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY,
            ...formState,
          }),
        });
        
        const result = await response.json();
        if (result.success) {
          setFormSubmitted(true);
          setTimeout(() => {
            setFormSubmitted(false);
            setFormState({ name: '', email: '', message: '' });
          }, 5000);
        } else {
          alert("Gagal mengirim pesan: " + result.message);
        }
      } catch (error) {
        console.error("Error submitting form:", error);
        alert("Terjadi kesalahan sistem saat mengirim pesan.");
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  // Smooth scroll helper
  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen">
      {/* Background Decor */}
      <div className="absolute inset-0 -z-50 overflow-hidden">
        <div className="absolute top-[10%] left-[5%] h-[350px] w-[350px] rounded-full bg-blue-500/10 blur-[100px] dark:bg-blue-600/5" />
        <div className="absolute top-[40%] right-[10%] h-[400px] w-[400px] rounded-full bg-indigo-500/10 blur-[120px] dark:bg-indigo-600/5" />
        <div className="absolute bottom-[10%] left-[15%] h-[350px] w-[350px] rounded-full bg-emerald-500/10 blur-[90px] dark:bg-emerald-600/5" />
      </div>

      {/* Navigation */}
      <header className="sticky top-0 z-40 w-full border-b border-slate-200/50 bg-white/70 backdrop-blur-md dark:border-slate-800/50 dark:bg-[#090d16]/75">
        <div className="mx-auto flex max-w-6xl items-center justify-between p-4 px-6">
          {/* Logo */}
          <a 
            href="#" 
            onClick={() => scrollToSection('hero')} 
            className="flex items-center gap-2 text-lg font-bold tracking-tight text-blue-600 dark:text-blue-400"
          >
            <span>mahesa.dev</span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-8 md:flex">
            <button onClick={() => scrollToSection('about')} className="text-sm font-medium text-slate-600 transition-colors hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400 cursor-pointer">
              {t.nav.about}
            </button>
            <button onClick={() => scrollToSection('skills')} className="text-sm font-medium text-slate-600 transition-colors hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400 cursor-pointer">
              {t.nav.skills}
            </button>
            <button onClick={() => scrollToSection('experience')} className="text-sm font-medium text-slate-600 transition-colors hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400 cursor-pointer">
              {t.nav.experience}
            </button>
            <button onClick={() => scrollToSection('projects')} className="text-sm font-medium text-slate-600 transition-colors hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400 cursor-pointer">
              {t.nav.projects}
            </button>
            <button onClick={() => scrollToSection('certificates')} className="text-sm font-medium text-slate-600 transition-colors hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400 cursor-pointer">
              {t.nav.certificates}
            </button>
            <button onClick={() => scrollToSection('education')} className="text-sm font-medium text-slate-600 transition-colors hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400 cursor-pointer">
              {t.nav.education}
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-sm font-medium text-slate-600 transition-colors hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400 cursor-pointer">
              {t.nav.contact}
            </button>
          </nav>

          {/* Controls (Theme, Language, Mobile Menu) */}
          <div className="flex items-center gap-3">
            <LanguageToggle lang={lang} onLanguageChange={setLang} />
            <ThemeToggle />
            
            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-white/50 text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-900 dark:border-slate-800 dark:bg-[#12192c]/50 dark:text-slate-300 dark:hover:bg-slate-800/50 dark:hover:text-slate-100 md:hidden cursor-pointer"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="border-b border-slate-200 bg-white px-6 py-4 shadow-lg dark:border-slate-800 dark:bg-[#090d16] md:hidden"
          >
            <nav className="flex flex-col gap-4">
              <button onClick={() => scrollToSection('about')} className="text-left text-sm font-medium text-slate-600 dark:text-slate-300">
                {t.nav.about}
              </button>
              <button onClick={() => scrollToSection('skills')} className="text-left text-sm font-medium text-slate-600 dark:text-slate-300">
                {t.nav.skills}
              </button>
              <button onClick={() => scrollToSection('experience')} className="text-left text-sm font-medium text-slate-600 dark:text-slate-300">
                {t.nav.experience}
              </button>
              <button onClick={() => scrollToSection('projects')} className="text-left text-sm font-medium text-slate-600 dark:text-slate-300">
                {t.nav.projects}
              </button>
              <button onClick={() => scrollToSection('certificates')} className="text-left text-sm font-medium text-slate-600 dark:text-slate-300">
                {t.nav.certificates}
              </button>
              <button onClick={() => scrollToSection('education')} className="text-left text-sm font-medium text-slate-600 dark:text-slate-300">
                {t.nav.education}
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-left text-sm font-medium text-slate-600 dark:text-slate-300">
                {t.nav.contact}
              </button>
            </nav>
          </motion.div>
        )}
      </header>

      {/* Main Container */}
      <main className="mx-auto max-w-5xl px-6 py-10 md:py-16">
        
        {/* HERO SECTION */}
        <section id="hero" className="mb-20 pt-4 md:mb-28">
          <div className="flex flex-col items-center gap-8 md:flex-row md:gap-12">
            {/* Profile Avatar with Hover effect */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="relative flex shrink-0"
            >
              <div className="absolute inset-0 animate-pulse rounded-full bg-blue-500/25 blur-md" />
              <div className="animate-float flex h-28 w-28 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 via-indigo-600 to-sky-600 shadow-xl md:h-32 md:w-32 overflow-hidden border-2 border-white/20 dark:border-white/10">
                {t.hero.avatarUrl ? (
                  <img 
                    src={t.hero.avatarUrl} 
                    alt={t.hero.name}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <span className="text-3xl font-bold text-white">
                    {t.hero.avatarInitials}
                  </span>
                )}
              </div>
            </motion.div>

            {/* Profile Info */}
            <div className="flex-1 text-center md:text-left">
              {/* Pulse Indicator */}
              <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3.5 py-1 text-xs font-semibold text-emerald-700 dark:bg-emerald-950/30 dark:text-emerald-400">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
                </span>
                {t.hero.status}
              </div>

              <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl md:text-5xl">
                {t.hero.name}
              </h1>
              
              <h2 className="mt-2 text-lg font-bold text-blue-600 dark:text-blue-400 md:text-xl">
                {t.hero.title}
              </h2>

              <p className="mt-4 text-sm leading-relaxed text-slate-600 dark:text-slate-300 sm:text-base">
                {t.hero.tagline}
              </p>

              {/* Action Buttons */}
              <div className="mt-6 flex flex-wrap justify-center gap-3 md:justify-start">
                <a
                  href="/CV_Mahesa_Tri_Anugrah_Putra.pdf"
                  download
                  className="flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-2.5 text-xs font-bold text-white shadow-md transition-all hover:bg-blue-700 hover:shadow-lg dark:bg-blue-600 dark:hover:bg-blue-500 sm:text-sm cursor-pointer"
                >
                  <Download className="h-4 w-4" />
                  {t.hero.btnCv}
                </a>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white/80 px-5 py-2.5 text-xs font-bold text-slate-700 shadow-xs transition-all hover:bg-slate-50 dark:border-slate-800 dark:bg-[#12192c]/40 dark:text-slate-300 dark:hover:bg-slate-800/60 sm:text-sm cursor-pointer"
                >
                  <Mail className="h-4 w-4 text-blue-500" />
                  {t.hero.btnContact}
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT ME SECTION */}
        <section id="about" className="mb-20 scroll-mt-24">
          <div className="glass-panel rounded-2xl p-6 md:p-8">
            <h2 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-2xl">
              {t.about.title}
            </h2>
            <div className="mt-4 space-y-4 text-sm leading-relaxed text-slate-600 dark:text-slate-300 sm:text-base">
              <p>{t.about.text1}</p>
              <p>{t.about.text2}</p>
            </div>
            
            {/* Quick Metadata Box */}
            <div className="mt-6 grid grid-cols-1 gap-4 border-t border-slate-200/50 pt-6 dark:border-slate-800/50 sm:grid-cols-2">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                  {t.about.statusLabel}
                </span>
                <p className="mt-1 text-sm font-semibold text-slate-800 dark:text-slate-200">
                  {t.about.statusVal}
                </p>
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                  {t.about.locationLabel}
                </span>
                <p className="mt-1 text-sm font-semibold text-slate-800 dark:text-slate-200">
                  {t.about.locationVal}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SKILLS SECTION */}
        <section id="skills" className="mb-20 scroll-mt-24">
          <div className="mb-8">
            <h2 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-2xl">
              {t.skills.title}
            </h2>
            <p className="mt-2 text-xs text-slate-500 dark:text-slate-400 sm:text-sm">
              {t.skills.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {skillsData.map((category) => (
              <div 
                key={category.categoryName}
                className="glass-panel rounded-2xl p-5"
              >
                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-4">
                  {category.categoryName}
                </h3>
                <div className="flex flex-wrap gap-2.5">
                  {category.skills.map((skill) => (
                    <span
                      key={skill.name}
                      className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-semibold ${skill.colorClass}`}
                    >
                      <span className={`h-1.5 w-1.5 rounded-full ${skill.dotClass}`} />
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* EXPERIENCE SECTION */}
        <ExperienceSection data={t.experience} />

        {/* PROJECTS SECTION */}
        <section id="projects" className="mb-20 scroll-mt-24">
          <div className="mb-8">
            <h2 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-2xl">
              {t.projects.title}
            </h2>
            <p className="mt-2 text-xs text-slate-500 dark:text-slate-400 sm:text-sm">
              {t.projects.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {t.projects.list.map((project) => (
              <div
                key={project.id}
                onClick={() => handleOpenModal(project)}
                className="glass-panel glass-card-hover flex flex-col justify-between rounded-2xl p-5 cursor-pointer"
              >
                <div>
                  <div className="flex items-start justify-between">
                    <h3 className="text-base font-bold text-slate-800 transition-colors group-hover:text-blue-600 dark:text-slate-100 dark:group-hover:text-blue-400 sm:text-lg">
                      {project.title}
                    </h3>
                    <ExternalLink className="h-4 w-4 text-slate-400" />
                  </div>
                  <p className="mt-3 text-xs leading-relaxed text-slate-500 dark:text-slate-400 sm:text-sm line-clamp-3">
                    {project.shortDesc}
                  </p>
                </div>
                
                {/* Tech Tags */}
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md bg-blue-50/50 px-2 py-0.5 text-2xs font-semibold text-blue-600 dark:bg-blue-950/20 dark:text-blue-400 sm:text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CERTIFICATES SECTION */}
        <CertificatesSection data={t.certificates} />

        {/* EDUCATION SECTION */}
        <section id="education" className="mb-20 scroll-mt-24">
          <div className="mb-8">
            <h2 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-2xl">
              {t.education.title}
            </h2>
            <p className="mt-2 text-xs text-slate-500 dark:text-slate-400 sm:text-sm">
              {t.education.subtitle}
            </p>
          </div>

          <div className="glass-panel rounded-2xl p-6 md:p-8">
            <div className="relative border-l border-slate-200 pl-6 dark:border-slate-800">
              {t.education.list.map((edu, idx) => (
                <div key={idx} className="relative mb-8 last:mb-0">
                  {/* Circle Pin Icon */}
                  <div className="absolute -left-[33px] top-1 flex h-4.5 w-4.5 items-center justify-center rounded-full border border-blue-600 bg-white dark:border-blue-400 dark:bg-[#0a0f1d]">
                    <div className="h-2 w-2 rounded-full bg-blue-600 dark:bg-blue-400" />
                  </div>

                  <span className="text-2xs font-bold text-slate-400 dark:text-slate-500 sm:text-xs">
                    {edu.period}
                  </span>
                  
                  <h3 className="text-sm font-bold text-slate-800 dark:text-slate-100 sm:text-base mt-1">
                    {edu.school}
                  </h3>
                  
                  <p className="text-xs font-semibold text-blue-600 dark:text-blue-400">
                    {edu.major}
                  </p>
                  
                  {edu.desc && (
                    <p className="mt-2 text-xs text-slate-500 dark:text-slate-400 sm:text-sm leading-relaxed">
                      {edu.desc}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="scroll-mt-24">
          <div className="mb-8">
            <h2 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-2xl">
              {t.contact.title}
            </h2>
            <p className="mt-2 text-xs text-slate-500 dark:text-slate-400 sm:text-sm">
              {t.contact.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-5">
            {/* Contact Info Cards */}
            <div className="space-y-3 md:col-span-2">
              {/* Email */}
              <div className="glass-panel flex items-center gap-3.5 rounded-xl p-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500/10 text-blue-600 dark:text-blue-400">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <span className="text-2xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">Email</span>
                  <p className="text-xs font-semibold text-slate-800 dark:text-slate-200 sm:text-sm break-all">{t.contact.info.email}</p>
                </div>
              </div>

              {/* WhatsApp */}
              <a
                href={t.contact.info.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-panel glass-card-hover flex items-center gap-3.5 rounded-xl p-4 block"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                  <Phone className="h-5 w-5" />
                </div>
                <div className="flex-1">
                  <span className="text-2xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">WhatsApp</span>
                  <p className="text-xs font-semibold text-slate-800 dark:text-slate-200 sm:text-sm flex items-center justify-between">
                    <span>{t.contact.info.phone}</span>
                    <ArrowRight className="h-4 w-4 text-emerald-500/70" />
                  </p>
                </div>
              </a>

              {/* GitHub */}
              <a
                href={t.contact.info.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-panel glass-card-hover flex items-center gap-3.5 rounded-xl p-4 block"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-neutral-500/10 text-neutral-800 dark:text-neutral-200">
                  <GithubIcon className="h-5 w-5" />
                </div>
                <div className="flex-1">
                  <span className="text-2xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">GitHub</span>
                  <p className="text-xs font-semibold text-slate-800 dark:text-slate-200 sm:text-sm flex items-center justify-between">
                    <span>{t.contact.info.github}</span>
                    <ArrowRight className="h-4 w-4 text-slate-500" />
                  </p>
                </div>
              </a>

              {/* LinkedIn */}
              <a
                href={t.contact.info.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-panel glass-card-hover flex items-center gap-3.5 rounded-xl p-4 block"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600/10 text-blue-600 dark:text-blue-400">
                  <LinkedinIcon className="h-5 w-5" />
                </div>
                <div className="flex-1">
                  <span className="text-2xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">LinkedIn</span>
                  <p className="text-xs font-semibold text-slate-800 dark:text-slate-200 sm:text-sm flex items-center justify-between">
                    <span>Mahesa Tri Anugrah Putra</span>
                    <ArrowRight className="h-4 w-4 text-blue-500" />
                  </p>
                </div>
              </a>

              {/* Location */}
              <div className="glass-panel flex items-center gap-3.5 rounded-xl p-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-500/10 text-red-600 dark:text-red-400">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <span className="text-2xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">Lokasi</span>
                  <p className="text-xs font-semibold text-slate-800 dark:text-slate-200 sm:text-sm">{t.contact.info.location}</p>
                </div>
              </div>
            </div>

            {/* Message Form */}
            <div className="glass-panel rounded-2xl p-5 md:col-span-3">
              {formSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex h-full flex-col items-center justify-center text-center p-6"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 mb-4 animate-bounce">
                    <Send className="h-6 w-6" />
                  </div>
                  <p className="text-sm font-semibold text-slate-800 dark:text-slate-100 sm:text-base">
                    {t.contact.formSuccess}
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleContactSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                      {t.contact.formName}
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="mt-1.5 w-full rounded-xl border border-slate-200 bg-white/50 px-4 py-2.5 text-xs text-slate-800 outline-none transition-all focus:border-blue-500 focus:bg-white dark:border-slate-800 dark:bg-[#12192c]/20 dark:text-white dark:focus:border-blue-500 sm:text-sm"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                      {t.contact.formEmail}
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="mt-1.5 w-full rounded-xl border border-slate-200 bg-white/50 px-4 py-2.5 text-xs text-slate-800 outline-none transition-all focus:border-blue-500 focus:bg-white dark:border-slate-800 dark:bg-[#12192c]/20 dark:text-white dark:focus:border-blue-500 sm:text-sm"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                      {t.contact.formMsg}
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      required
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      className="mt-1.5 w-full rounded-xl border border-slate-200 bg-white/50 px-4 py-2.5 text-xs text-slate-800 outline-none transition-all focus:border-blue-500 focus:bg-white dark:border-slate-800 dark:bg-[#12192c]/20 dark:text-white dark:focus:border-blue-500 sm:text-sm resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-2.5 text-xs font-bold text-white shadow-md transition-all hover:bg-blue-700 hover:shadow-lg dark:bg-blue-600 dark:hover:bg-blue-500 sm:text-sm cursor-pointer"
                  >
                    <Send className="h-4 w-4" />
                    <span>{t.contact.formBtn}</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="border-t border-slate-200/50 bg-slate-50/50 py-8 text-center dark:border-slate-800/50 dark:bg-[#060910]">
        <div className="mx-auto max-w-5xl px-6">
          <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed sm:text-sm">
            {t.footer}
          </p>
        </div>
      </footer>

      {/* Detail Project Modal Dialog */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        lang={lang}
        labels={{
          modalBtnClose: t.projects.modalBtnClose,
          modalGithub: t.projects.modalGithub,
          modalDemo: t.projects.modalDemo,
          modalFeatures: t.projects.modalFeatures,
          modalChallenge: t.projects.modalChallenge,
          modalSolution: t.projects.modalSolution
        }}
      />
    </div>
  );
}
