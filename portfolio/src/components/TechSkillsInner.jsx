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
  
  const levelBadge = level === 'expert' ? 'E' : level === 'middle' ? 'M' : 'B';
  const levelFullText = level === 'expert' ? 'Uzman' : level === 'middle' ? 'Orta' : 'Başlangıç';
  const levelColor = level === 'expert' ? 'from-green-500 to-emerald-600' : level === 'middle' ? 'from-yellow-500 to-orange-500' : 'from-blue-500 to-purple-500';
  const progress = getProgress();
  
  return (
    <div className="group relative h-full">
      {/* Enhanced background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 rounded-lg transition-all duration-500"></div>
      
      <div className="relative group/skill flex h-full flex-row items-start sm:items-center gap-1.5 sm:gap-2 rounded-lg border border-emerald-200/50 bg-white/95 p-1.5 text-left transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md dark:border-emerald-600/50 dark:bg-slate-700/95">
        {/* Icon with level badge */}
        <div className="relative flex-shrink-0">
          <div className="flex h-5 w-5 sm:h-6 sm:w-6 items-center justify-center rounded-lg bg-gradient-to-br from-slate-100 to-slate-200 shadow-sm dark:from-slate-600 dark:to-slate-700">
            <img src={src} alt={alt} className="h-3 w-3 sm:h-3.5 sm:w-3.5 rounded object-contain" loading="lazy" />
          </div>
          {/* Level badge on icon */}
          <div className={`absolute -top-0.5 -right-0.5 flex h-3 w-3 items-center justify-center rounded-full text-[6px] font-bold text-white shadow-sm ${
            level === 'expert' ? 'bg-green-600' :
            level === 'middle' ? 'bg-yellow-600' :
            'bg-blue-600'
          }`}>
            {levelBadge}
          </div>
        </div>
        
        {/* Language name and progress bar - prioritized */}
        <div className="flex-1 min-w-0">
          {/* Language name - ALWAYS VISIBLE, NEVER TRUNCATED */}
          <div className="mb-0.5">
            <span className="block text-[10px] sm:text-[11px] font-semibold text-slate-900 dark:text-white leading-tight break-words" style={{wordBreak: 'break-word', overflowWrap: 'anywhere'}}>
              {label}
            </span>
          </div>
          
          {/* Progress bar with percentage */}
          <div className="flex items-center gap-1">
            <div className="relative flex-1 h-1 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-600">
              <div 
                className={`h-full rounded-full bg-gradient-to-r ${levelColor} shadow-sm transition-all duration-1000 ease-out group-hover/skill:shadow-lg`}
                style={{ width: `${progress}%` }}
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer opacity-0 group-hover/skill:opacity-100 transition-opacity duration-300"></div>
            </div>
            <span className="text-[8px] sm:text-[9px] text-slate-500 dark:text-slate-400 font-medium flex-shrink-0 tabular-nums">
              {progress}%
            </span>
          </div>
          
          {/* Level text - secondary, subtle */}
          <div className="mt-0.5">
            <span className={`text-[8px] font-medium ${
              level === 'expert' ? 'text-green-600 dark:text-green-400' :
              level === 'middle' ? 'text-yellow-600 dark:text-yellow-400' :
              'text-blue-600 dark:text-blue-400'
            }`}>
              {levelFullText}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function TechSkillsInner() {
  return (
    <div className="grid grid-cols-1 gap-2 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-1 sm:gap-2.5">
      <LanguageItem src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" alt="C" label="C" level="expert" />
      <LanguageItem src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" alt="C++" label="C++" level="expert" />
      <LanguageItem src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="Git" label="Git" level="expert" />
      <LanguageItem src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" alt="C#" label="C#/.NET" level="middle" />
      <LanguageItem src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" alt="Java" label="Java" level="middle" />
      <LanguageItem src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" label="JavaScript/TypeScript/React" level="middle" />
      <LanguageItem src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML" label="HTML/Tailwind/CSS" level="middle" />
      <LanguageItem src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" label="Python" level="middle" />
      <LanguageItem src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="SQL" label="SQL/PostgreSQL" level="middle" />
      <LanguageItem src="https://raw.githubusercontent.com/devicons/devicon/master/icons/xml/xml-original.svg" alt="XML" label="XML" level="middle" />
      <LanguageItem src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg" alt="Bash" label="Bash" level="begin" />
      <LanguageItem src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg" alt="Kotlin" label="Kotlin" level="begin" />
      <LanguageItem src="https://raw.githubusercontent.com/devicons/devicon/master/icons/solidity/solidity-original.svg" alt="Solidity" label="Solidity" level="begin" />
        </div>
  );
}
