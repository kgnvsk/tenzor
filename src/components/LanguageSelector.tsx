import { useLanguage, Language } from '@/contexts/LanguageContext';

export function LanguageSelector() {
  const { language, setLanguage } = useLanguage();

  const languages: { code: Language; label: string }[] = [
    { code: 'en', label: 'EN' },
    { code: 'ua', label: 'UA' },
    { code: 'ru', label: 'RU' },
  ];

  return (
    <div className="fixed top-8 right-8 z-50 flex gap-2 bg-muted/30 backdrop-blur-sm rounded-full p-2 border border-border/50">
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => setLanguage(lang.code)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
            language === lang.code
              ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-400/50'
              : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
          }`}
        >
          {lang.label}
        </button>
      ))}
    </div>
  );
}
