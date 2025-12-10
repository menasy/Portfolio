import React from 'react';

const LanguageItem = ({ src, alt, label, level }) => {
  const getProgress = () => {
    switch(level) {
      case 'expert': return 90;
      case 'middle': return 65;
      case 'begin': return 35;
      default: return 0;
    }
  };
  
  const levelText = level === 'expert' ? '(expert)' : level === 'middle' ? '(middle)' : '(begin)';
  const levelColor = level === 'expert' ? 'from-green-500 to-emerald-600' : level === 'middle' ? 'from-yellow-500 to-orange-500' : 'from-blue-500 to-purple-500';
  const progress = getProgress();
  
  return (
    <div className="group relative h-full">
      {/* Enhanced background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 rounded-lg blur-sm group-hover:blur-lg group-hover:from-emerald-500/30 group-hover:to-cyan-500/30 transition-all duration-500"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/10 to-cyan-400/10 rounded-lg group-hover:scale-105 transition-transform duration-500"></div>
      
      <div className="relative group/skill flex h-full flex-col rounded-lg border border-emerald-200/50 bg-white/95 p-2.5 text-left transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md dark:border-emerald-600/50 dark:bg-slate-700/95 sm:flex-row sm:items-center sm:gap-3 sm:p-3">
        <div className="mb-2 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-slate-100 to-slate-200 text-xs shadow-sm dark:from-slate-600 dark:to-slate-700 sm:mb-0 sm:h-7 sm:w-7">
          <img src={src} alt={alt} className="h-4 w-4 rounded object-contain" loading="lazy" />
        </div>
        <div className="flex-1 min-w-0 text-left">
          <div className="mb-1 flex items-center justify-between gap-2">
            <span className="truncate text-[13px] font-medium text-slate-900 dark:text-white sm:text-sm">{label}</span>
            <span className={`text-[11px] px-2 py-0.5 rounded-full font-medium ${
              level === 'expert' ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300' :
              level === 'middle' ? 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300' :
              'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300'
            }`}>
              {levelText}
            </span>
          </div>
          <div className="relative h-1.5 w-full overflow-hidden rounded-full bg-slate-200 dark:bg-slate-600">
            <div 
              className={`h-full rounded-full bg-gradient-to-r ${levelColor} shadow-sm transition-all duration-1000 ease-out group-hover/skill:shadow-lg`}
              style={{ width: `${progress}%` }}
            />
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer opacity-0 group-hover/skill:opacity-100 transition-opacity duration-300"></div>
          </div>
          <div className="mt-1 flex items-center justify-between">
            <span className="text-[11px] text-slate-500 dark:text-slate-400">{progress}%</span>
            <span className={`text-[11px] font-medium ${
              level === 'expert' ? 'text-green-600 dark:text-green-400' :
              level === 'middle' ? 'text-yellow-600 dark:text-yellow-400' :
              'text-blue-600 dark:text-blue-400'
            }`}>
              {level === 'expert' ? 'Uzman' : level === 'middle' ? 'Orta' : 'Başlangıç'}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function TechSkillsInner() {
  return (
    <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-1">
      <LanguageItem src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" alt="C" label="C" level="expert" />
      <LanguageItem src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" alt="C++" label="C++" level="expert" />
      <LanguageItem src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="Git" label="Git" level="expert" />
      <LanguageItem src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" alt="C#" label="C#/.NET" level="middle" />
      <LanguageItem src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" alt="Java" label="Java" level="middle" />
      <LanguageItem src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" label="JavaScript/React" level="middle" />
      <LanguageItem src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" label="Python" level="middle" />
      <LanguageItem src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="SQL" label="SQL" level="middle" />
      <LanguageItem src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML" label="HTML/Tailwind/CSS" level="middle" />
      <LanguageItem src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg" alt="Bash" label="Bash" level="middle" />
      <LanguageItem src="https://raw.githubusercontent.com/devicons/devicon/master/icons/xml/xml-original.svg" alt="XML" label="XML" level="middle" />
      <LanguageItem src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg" alt="Kotlin" label="Kotlin" level="begin" />
      <LanguageItem src="https://raw.githubusercontent.com/devicons/devicon/master/icons/solidity/solidity-original.svg" alt="Solidity" label="Solidity" level="begin" />
        </div>
  );
}
