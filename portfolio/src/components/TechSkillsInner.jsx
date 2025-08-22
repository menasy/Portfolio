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
    <div className="group/skill flex items-center gap-3 p-3 rounded-lg bg-white dark:bg-slate-700/50 border border-slate-200 dark:border-slate-600 hover:border-slate-300 dark:hover:border-slate-500 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
      <div className="flex-shrink-0 w-7 h-7 rounded-lg bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-600 dark:to-slate-700 flex items-center justify-center group-hover/skill:scale-110 transition-transform duration-300 shadow-sm">
        <img src={src} alt={alt} className="h-4 w-4 rounded" loading="lazy" />
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between mb-1.5">
          <span className="font-medium text-sm text-slate-900 dark:text-white truncate">{label}</span>
          <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${
            level === 'expert' ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300' :
            level === 'middle' ? 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300' :
            'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300'
          }`}>
            {levelText}
          </span>
        </div>
        <div className="relative h-1.5 w-full rounded-full bg-slate-200 dark:bg-slate-600 overflow-hidden">
          <div 
            className={`h-full rounded-full bg-gradient-to-r ${levelColor} shadow-sm transition-all duration-1000 ease-out group-hover/skill:shadow-lg`}
            style={{ width: `${progress}%` }}
          />
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer opacity-0 group-hover/skill:opacity-100 transition-opacity duration-300"></div>
        </div>
        <div className="flex justify-between items-center mt-1">
          <span className="text-xs text-slate-500 dark:text-slate-400">{progress}%</span>
          <span className={`text-xs font-medium ${
            level === 'expert' ? 'text-green-600 dark:text-green-400' :
            level === 'middle' ? 'text-yellow-600 dark:text-yellow-400' :
            'text-blue-600 dark:text-blue-400'
          }`}>
            {level === 'expert' ? 'Uzman' : level === 'middle' ? 'Orta' : 'Başlangıç'}
          </span>
        </div>
      </div>
    </div>
  );
};

export default function TechSkillsInner() {
  return (
    <div className="space-y-2.5">
      <LanguageItem src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" alt="C" label="C" level="expert" />
      <LanguageItem src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" alt="C++" label="C++" level="expert" />
      <LanguageItem src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="Git" label="Git" level="expert" />
      <LanguageItem src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" alt="Java" label="Java" level="middle" />
      <LanguageItem src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" label="Python" level="middle" />
      <LanguageItem src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg" alt="Bash" label="Bash" level="middle" />
      <LanguageItem src="https://raw.githubusercontent.com/devicons/devicon/master/icons/xml/xml-original.svg" alt="XML" label="XML" level="middle" />
      <LanguageItem src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" alt="C#" label="C#" level="middle" />
      <LanguageItem src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="SQL" label="SQL" level="begin" />
      <LanguageItem src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg" alt="Kotlin" label="Kotlin" level="begin" />
      <LanguageItem src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML" label="HTML/CSS" level="begin" />
      <LanguageItem src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" label="JavaScript/React" level="begin" />
      <LanguageItem src="https://raw.githubusercontent.com/devicons/devicon/master/icons/solidity/solidity-original.svg" alt="Solidity" label="Solidity" level="begin" />
    </div>
  );
}