import { useLanguage, Language } from '@/contexts/LanguageContext';

export function LanguageSelector() {
  const { language, setLanguage } = useLanguage();

  const languages: { code: Language; label: string }[] = [
    { code: 'en', label: 'EN' },
    { code: 'ua', label: 'UA' },
    { code: 'ru', label: 'RU' },
  ];

  return (
    <div className="fixed top-4 right-4 md:top-8 md:right-8 z-50 flex gap-2 bg-muted/30 backdrop-blur-sm rounded-full p-1.5 md:p-2 border border-border/50">
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => setLanguage(lang.code)}
          className={`px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium transition-all duration-300 ${
            language === lang.code
              ? 'bg-orange-500/20 text-orange-400 border border-orange-400/50'
              : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
          }`}
        >
          {lang.label}
        </button>
      ))}
    </div>
  );
}
