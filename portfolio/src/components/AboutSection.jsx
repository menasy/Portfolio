import React from 'react';
import TechSkillsInner from './TechSkillsInner';
import ExperienceTimeline from './ExperienceTimeline';
import SkillsSection from './SkillsSection';

export default function AboutSection() {
  return (
    <section id="hakkimda-yeteneklerim" className="space-y-8">
      {/* Eğitim + Deneyimler yan yana */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Eğitim Kartı */}
        <div className="group relative">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl blur-sm group-hover:blur-md transition-all duration-300"></div>
          <div className="relative p-6 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm rounded-2xl border border-slate-200 dark:border-slate-700 shadow-xl group-hover:shadow-2xl group-hover:-translate-y-1 transition-all duration-300">
            
            {/* Header with icon */}
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h2 className="text-xl font-bold text-slate-900 dark:text-white">Eğitim Bilgisi</h2>
            </div>
            
            <div className="w-12 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-4"></div>
            
            <div className="space-y-4">
              {/* 42 İstanbul */}
              <div className="relative pl-5">
                <div className="absolute left-0 top-2 w-2.5 h-2.5 bg-blue-500 rounded-full"></div>
                <div className="absolute left-1 top-4 w-0.5 h-12 bg-gradient-to-b from-blue-500 to-purple-500"></div>
                <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg border border-blue-200 dark:border-blue-700">
                  <h3 className="font-bold text-blue-700 dark:text-blue-300 mb-2 text-base">42 İstanbul – Yazılım Geliştirme</h3>
                  <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                    C/C++'ta ileri seviye programlama, multi-threading, sistem programlama ,bellek yönetimi,
                    raycasting, 3D grafik render, ağ protokolleri, socket programlama, POSIX sinyalleri, veri
                    yapıları, kernel optimizasyonu, algoritmalar ve karmaşık problem çözme teknikleri gibi konuları
                    kapsayan bir eğitim alıyorum.
                  </p>
                </div>
              </div>
              
              {/* İstanbul Gelişim Üniversitesi */}
              <div className="relative pl-5">
                <div className="absolute left-0 top-2 w-2.5 h-2.5 bg-purple-500 rounded-full"></div>
                <div className="bg-purple-50 dark:bg-purple-900/20 p-3 rounded-lg border border-purple-200 dark:border-purple-700">
                  <h3 className="font-bold text-purple-700 dark:text-purple-300 mb-2 text-base">İstanbul Gelişim Üniversitesi – Yönetim Bilişim Sistemleri</h3>
                  <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                    Veri madenciliği, finansal teknolojiler, risk yönetimi, SQL veritabanı, iş zekası, veri
                    görselleştirme, görsel programlama (C#), kurumsal IT altyapıları, bulut bilişim gibi alanlarında
                    eğitim aldım.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Deneyimler Kartı */}
        <div className="group relative">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 rounded-2xl blur-sm group-hover:blur-md transition-all duration-300"></div>
          <div className="relative p-6 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm rounded-2xl border border-slate-200 dark:border-slate-700 shadow-xl group-hover:shadow-2xl group-hover:-translate-y-1 transition-all duration-300">
            
            {/* Header with icon */}
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 rounded-xl bg-gradient-to-br from-emerald-500 to-cyan-600 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h2 className="text-xl font-bold text-slate-900 dark:text-white">Deneyimler</h2>
            </div>
            
            <div className="w-12 h-0.5 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full mb-4"></div>
            
            <ExperienceTimeline />
          </div>
        </div>
      </div>

      {/* Teknik Beceriler (sol) + Yeteneklerim (sağ) */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 items-start">
        {/* Teknik Beceriler */}
        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-2xl blur-sm group-hover:blur-md transition-all duration-300"></div>
          <div className="relative p-6 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm rounded-2xl border border-slate-200 dark:border-slate-700 shadow-xl group-hover:shadow-2xl group-hover:-translate-y-1 transition-all duration-300">
            
            <div className="flex items-center gap-3 mb-4">
              <div className="text-2xl">⚡</div>
              <h2 className="text-xl font-bold text-slate-900 dark:text-white">Teknik Beceriler</h2>
            </div>
            
            <div className="w-12 h-0.5 bg-gradient-to-r from-orange-500 to-red-500 rounded-full mb-4"></div>
            
            <TechSkillsInner />
          </div>
        </div>
        
        {/* Yeteneklerim */}
        <div className="group relative">
          <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-2xl blur-sm group-hover:blur-md transition-all duration-300"></div>
          <div className="relative p-6 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm rounded-2xl border border-slate-200 dark:border-slate-700 shadow-xl group-hover:shadow-2xl group-hover:-translate-y-1 transition-all duration-300">
            <SkillsSection />
          </div>
        </div>
      </div>
    </section>
  );
}


