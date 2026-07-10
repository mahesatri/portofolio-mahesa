'use client';

interface LanguageToggleProps {
  lang: 'id' | 'en';
  onLanguageChange: (lang: 'id' | 'en') => void;
}

export function LanguageToggle({ lang, onLanguageChange }: LanguageToggleProps) {
  return (
    <div className="flex items-center gap-1 rounded-lg border border-slate-200 bg-white/50 p-0.5 dark:border-slate-800 dark:bg-[#12192c]/50">
      <button
        onClick={() => onLanguageChange('id')}
        className={`rounded-md px-2 py-1 text-xs font-semibold transition-all cursor-pointer ${
          lang === 'id'
            ? 'bg-blue-600 text-white shadow-xs'
            : 'text-slate-600 hover:bg-slate-100/80 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800/50 dark:hover:text-slate-200'
        }`}
      >
        ID
      </button>
      <button
        onClick={() => onLanguageChange('en')}
        className={`rounded-md px-2 py-1 text-xs font-semibold transition-all cursor-pointer ${
          lang === 'en'
            ? 'bg-blue-600 text-white shadow-xs'
            : 'text-slate-600 hover:bg-slate-100/80 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800/50 dark:hover:text-slate-200'
        }`}
      >
        EN
      </button>
    </div>
  );
}
