import React from 'react';

export default function SkillsSection({ showHeader = true, variant = "grid" }) {
  const skills = [
    { icon: '🎯', text: 'Nesne Yönelimli Programlama (OOP)', color: 'from-blue-500 to-blue-600' },
    { icon: '🧠', text: 'Analitik Düşünce ve Problem Çözme', color: 'from-purple-500 to-purple-600' },
    { icon: '⚡', text: 'Çoklu İş Parçacığı Yönetimi', color: 'from-yellow-500 to-orange-500' },
    { icon: '📊', text: 'Algoritma ve Veri Yapıları', color: 'from-green-500 to-emerald-500' },
    { icon: '📱', text: 'Mobil Uygulama Geliştirme', color: 'from-cyan-500 to-blue-500' },
    { icon: '🐳', text: 'Docker ve Docker Compose', color: 'from-blue-600 to-indigo-600' },
    { icon: '⛓️', text: 'Blockchain Teknolojileri', color: 'from-amber-500 to-orange-500' },
    { icon: '💾', text: 'Veritabanı Yönetimi', color: 'from-slate-500 to-slate-600' },
    { icon: '⚙️', text: 'Sistem Programlama', color: 'from-red-500 to-red-600' },
    { icon: '🌐', text: 'Socket Programlama', color: 'from-teal-500 to-cyan-500' },
    { icon: '🌍', text: 'Web Geliştirme', color: 'from-emerald-500 to-green-600' },
    { icon: '🔒', text: 'Ağ ve Güvenlik', color: 'from-rose-500 to-pink-500' },
    { icon: '📚', text: 'Öğrenmeye Açıklık', color: 'from-violet-500 to-purple-600' },
    { icon: '🤝', text: 'Takım Çalışması', color: 'from-indigo-500 to-blue-600' },
    { icon: '⏰', text: 'Zaman Yönetimi', color: 'from-orange-500 to-red-500' },
    { icon: '✨', text: 'Clean Code', color: 'from-lime-500 to-green-500' },
    { icon: '🔌', text: 'REST API', color: 'from-sky-500 to-cyan-500' },
  ];

  if (variant === "simple") {
    return (
      <div>
        {showHeader && <h3 className="font-semibold mb-2">Yeteneklerim</h3>}
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-slate-700 dark:text-slate-300">
          {skills.map((skill) => (
            <li key={skill.text} className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-sky-500" />
              <span>{skill.text}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  return (
    <div>
      {showHeader && (
        <>
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2.5 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 shadow-lg">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">Yeteneklerim</h2>
          </div>
          <div className="w-12 h-0.5 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full mb-4"></div>
        </>
      )}
      
      <div className="grid grid-cols-1 gap-2">
        {skills.map((item) => (
          <div key={item.text} className="group/item flex items-center gap-3 p-3 rounded-lg bg-slate-50 dark:bg-slate-700/50 hover:bg-white dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-600 hover:border-slate-300 dark:hover:border-slate-500 transition-all duration-300 hover:shadow-sm hover:-translate-y-0.5">
            <div className={`flex items-center justify-center w-7 h-7 rounded-lg bg-gradient-to-br ${item.color} shadow-md group-hover/item:scale-110 transition-transform duration-300`}>
              <span className="text-white text-xs">{item.icon}</span>
            </div>
            <span className="flex-1 text-slate-700 dark:text-slate-300 font-medium text-sm">{item.text}</span>
            <div className="w-1.5 h-1.5 rounded-full bg-green-500 opacity-0 group-hover/item:opacity-100 transition-opacity duration-300"></div>
          </div>
        ))}
      </div>
    </div>
  );
}
