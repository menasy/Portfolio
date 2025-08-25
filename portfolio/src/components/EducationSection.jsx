import React from 'react';

export default function EducationSection() {
  return (
    <section id="egitim" className="max-w-7xl mx-auto px-4">
      {/* Modern Section Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
          🎓 Eğitim Bilgileri
        </h2>
        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
          Akademik geçmişim ve aldığım eğitimler
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* 42 İstanbul */}
        <div className="group relative">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-500/10 to-slate-600/10 rounded-3xl blur-sm group-hover:blur-lg transition-all duration-500"></div>
          <div className="relative overflow-hidden rounded-3xl bg-white/95 dark:bg-slate-800/95 backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/50 shadow-xl group-hover:shadow-2xl group-hover:-translate-y-2 transition-all duration-500">
            
            {/* Header with animated background */}
            <div className="relative p-8 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-700">
              <div className="absolute inset-0 bg-gradient-to-br from-slate-900/5 to-transparent"></div>
              <div className="relative flex items-center gap-4">
                <div className="w-20 h-20 bg-slate-900 dark:bg-white rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white dark:text-slate-900 font-bold text-3xl">42</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-1">42 İstanbul</h3>
                  <p className="text-slate-600 dark:text-slate-400 font-medium">Bilişim Teknolojileri Mimarası Uzmanı</p>
                </div>
              </div>
            </div>

            <div className="p-8">
              {/* Duration */}
              <div className="mb-6">
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-xl font-semibold">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  2/4 Yıl
                </span>
              </div>

              {/* Description */}
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-8 text-base">
                C ve C++'ta ileri seviye yazılım geliştirme üzerine yoğun bir eğitim aldım. Multi-threading, 
                sistem programlama, bellek yönetimi, raycasting, 3D grafik işleme, ağ protokolleri, socket 
                programlama, POSIX sinyalleri, veri yapıları ve algoritmalar gibi konularda uzmanlaştım. 
                Kernel optimizasyonu ve karmaşık problem çözme tekniklerinde derinlemesine deneyim kazandım.
              </p>

              {/* Skills */}
              <div className="space-y-3">
                <div className="flex flex-wrap gap-2">
                  {['C', 'C++', 'System Programming', 'Multi-threading', 'Network Programming', 'Algorithms', '3D Graphics'].map((skill) => (
                    <span key={skill} className="px-3 py-1.5 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-lg text-sm font-medium hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* İstanbul Gelişim Üniversitesi */}
        <div className="group relative">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-3xl blur-sm group-hover:blur-lg transition-all duration-500"></div>
          <div className="relative overflow-hidden rounded-3xl bg-white/95 dark:bg-slate-800/95 backdrop-blur-sm border border-blue-200/50 dark:border-blue-700/50 shadow-xl group-hover:shadow-2xl group-hover:-translate-y-2 transition-all duration-500">
            
            {/* Header with animated background */}
            <div className="relative p-8 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5"></div>
              <div className="relative flex items-center gap-4">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold text-xl">İGÜ</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-1">İstanbul Gelişim Üniversitesi</h3>
                  <p className="text-slate-600 dark:text-slate-400 font-medium">Yönetim Bilişim Sistemleri</p>
                </div>
              </div>
            </div>

            <div className="p-8">
              {/* Duration */}
              <div className="mb-6">
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-xl font-semibold">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  4 Yıl (2025 Mezunu)
                </span>
              </div>

              {/* Description */}
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-8 text-base">
                Teknoloji ve iş dünyasını birleştiren disiplinler arası bir eğitim gördüm. Veri madenciliği, 
                finansal teknolojiler, risk yönetimi, SQL veritabanı yönetimi, iş zekası, veri görselleştirme, 
                görsel programlama (C#), kurumsal IT altyapıları ve bulut bilişim alanlarında yetkinlikler edindim. 
                Hem teknik hem stratejik bakış açısıyla projeler geliştirdim.
              </p>

              {/* Skills */}
              <div className="space-y-3">
                <div className="flex flex-wrap gap-2">
                  {['MIS', 'Data Mining', 'SQL', 'C#', 'Business Intelligence', 'Cloud Computing', 'Risk Management'].map((skill) => (
                    <span key={skill} className="px-3 py-1.5 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-lg text-sm font-medium hover:bg-blue-200 dark:hover:bg-blue-900/50 transition-colors">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
