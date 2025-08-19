import React from 'react';

const EXPERIENCES = [
  {
    org: 'T3 Vakfı',
    role: 'Mobil Uygulama Geliştirme Contribütörü (Next Sosyal)',
    period: '01.07.2025 -',
  },
  {
    org: 'Paka Teknoloji',
    role: 'Sistem Destek Stajyeri',
    period: '12.08.2024 – 23.09.2024',
  },
  {
    org: 'Tencent Holdings Limited',
    role: 'Sunucu Teknisyeni',
    period: '01.04.2023 – 01.05.2023',
  },
];

export default function ExperienceTimeline() {
  return (
    <div className="relative">
      {/* Modern timeline line */}
      <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-emerald-500 rounded-full" />
      
      <ul className="space-y-4">
        {EXPERIENCES.map((exp, index) => (
          <li key={exp.org + exp.period} className="group relative pl-12">
            {/* Timeline dot with animation */}
            <div className="absolute left-0 top-2">
              <div className="relative">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 shadow-lg group-hover:scale-110 group-hover:shadow-xl transition-all duration-300 flex items-center justify-center">
                  <div className="w-2.5 h-2.5 rounded-full bg-white"></div>
                </div>
                <div className="absolute inset-0 w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 opacity-30 blur-md group-hover:opacity-50 transition-opacity duration-300"></div>
              </div>
            </div>
            
            {/* Content card */}
            <div className="group-hover:-translate-y-1 group-hover:shadow-lg transition-all duration-300">
              <div className="bg-slate-50 dark:bg-slate-700/50 p-3 rounded-lg border border-slate-200 dark:border-slate-600 group-hover:border-slate-300 dark:group-hover:border-slate-500 transition-colors duration-300">
                
                {/* Period badge */}
                <div className="inline-flex items-center gap-1.5 mb-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"></div>
                  <span className="text-xs font-medium text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 px-2 py-0.5 rounded-full">
                    {exp.period}
                  </span>
                </div>
                
                {/* Organization */}
                <h4 className="text-base font-bold text-slate-900 dark:text-white mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                  {exp.org}
                </h4>
                
                {/* Role */}
                <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                  {exp.role}
                </p>
                
                {/* Decorative element */}
                <div className="mt-2 flex gap-1">
                  <div className="w-1 h-1 rounded-full bg-blue-400 opacity-60"></div>
                  <div className="w-1 h-1 rounded-full bg-purple-400 opacity-60"></div>
                  <div className="w-1 h-1 rounded-full bg-emerald-400 opacity-60"></div>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}


