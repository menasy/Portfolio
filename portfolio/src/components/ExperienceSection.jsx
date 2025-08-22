import React from 'react';

export default function ExperienceSection() {
  return (
    <section id="deneyimler" className="max-w-6xl mx-auto px-4">
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 border border-emerald-200 dark:border-emerald-700 mb-6 shadow-lg">
          <div className="w-3 h-3 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full animate-pulse"></div>
          <span className="text-sm font-semibold text-emerald-700 dark:text-emerald-300 uppercase tracking-wide">Deneyimler</span>
        </div>
      </div>

      {/* Timeline Container */}
      <div className="relative">
        {/* Timeline Line */}
        <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-emerald-500 via-blue-500 to-purple-500"></div>

        {/* Timeline Items - Kronolojik (aşağıdan yukarıya) */}
        <div className="space-y-10">
          
          {/* T3 Vakfı - En güncel (en üstte) */}
          <div className="relative flex items-start group">
            {/* Timeline Dot */}
            <div className="absolute left-4 w-4 h-4 bg-emerald-500 rounded-full border-3 border-white dark:border-slate-800 shadow-md group-hover:scale-110 transition-transform duration-300 z-10"></div>
            
            {/* Content Card */}
            <div className="ml-12 w-full">
              <div className="group-hover:-translate-y-1 transition-all duration-300">
                <div className="relative rounded-xl bg-white dark:bg-slate-800 border border-emerald-200 dark:border-emerald-700 shadow-lg group-hover:shadow-xl">
                  
                  {/* Header */}
                  <div className="relative p-5 bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 rounded-t-xl">
                    <div className="flex items-center justify-between mb-2">
                      <span className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 rounded-full text-sm font-semibold">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        01.07.2025 - Devam Ediyor
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">T3 Vakfı</h3>
                    <p className="text-emerald-600 dark:text-emerald-400 font-semibold">Mobil Uygulama Geliştirme Contribütörü</p>
                  </div>

                  {/* Description */}
                  <div className="p-5">
                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                      Next Sosyal projesi kapsamında Android mobil uygulamanın geliştirme süreçlerine katkı sağlıyorum. 
                      Java diliyle sosyal medya platformunun Android uygulamasını geliştiriyor, kullanıcı deneyimini 
                      iyileştirmek ve uygulamanın işlevselliğini artırmak için modern mobil geliştirme yöntemlerini 
                      uyguluyorum. Ekip çalışması içinde farklı modüllerde aktif rol alarak kod kalitesini ve 
                      sürdürülebilirliği ön planda tutuyorum.
                    </p>
                    <div className="space-y-3">
                      <div>
                        <div className="flex flex-wrap gap-2">
                          {['Java', 'Android SDK'].map((tech) => (
                            <span key={tech} className="px-3 py-1 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 rounded text-sm">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div>
                        <div className="flex flex-wrap gap-2">
                          {['Mobil Uygulama Geliştirme', 'Kullanıcı Deneyimi', 'Modüler Yapı', 'Takım Çalışması'].map((area) => (
                            <span key={area} className="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded text-sm">
                              {area}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Paka Teknoloji */}
          <div className="relative flex items-start group">
            {/* Timeline Dot */}
            <div className="absolute left-4 w-4 h-4 bg-blue-500 rounded-full border-3 border-white dark:border-slate-800 shadow-md group-hover:scale-110 transition-transform duration-300 z-10"></div>
            
            {/* Content Card */}
            <div className="ml-12 w-full">
              <div className="group-hover:-translate-y-1 transition-all duration-300">
                <div className="relative rounded-xl bg-white dark:bg-slate-800 border border-blue-200 dark:border-blue-700 shadow-lg group-hover:shadow-xl">
                  
                  {/* Header */}
                  <div className="relative p-5 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-t-xl">
                    <div className="flex items-center justify-between mb-2">
                      <span className="inline-flex items-center gap-2 px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-semibold">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        12.08.2024 – 23.09.2024
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">Paka Teknoloji</h3>
                    <p className="text-blue-600 dark:text-blue-400 font-semibold">Sistem Destek Stajyeri</p>
                  </div>

                  {/* Description */}
                  <div className="p-5">
                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                      IT altyapısı ve sistem yönetimi süreçlerinde görev aldım. Kullanıcı destek taleplerini 
                      karşılayarak yazılım ve donanım kaynaklı sorunların çözümüne katkıda bulundum. Sistem 
                      güncellemeleri ve temel bakım işlemlerinde aktif rol aldım. Şirket içi teknik destek 
                      süreçlerinde yer alarak operasyonların sürekliliğini destekledim.
                    </p>
                    <div>
                      <div className="flex flex-wrap gap-2">
                        {['Sistem Yönetimi', 'Teknik Destek', 'IT Altyapısı', 'Kullanıcı Desteği'].map((keyword) => (
                          <span key={keyword} className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded text-sm">
                            {keyword}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Tencent Holdings Limited - En eski (en altta) */}
          <div className="relative flex items-start group">
            {/* Timeline Dot */}
            <div className="absolute left-4 w-4 h-4 bg-purple-500 rounded-full border-3 border-white dark:border-slate-800 shadow-md group-hover:scale-110 transition-transform duration-300 z-10"></div>
            
            {/* Content Card */}
            <div className="ml-12 w-full">
              <div className="group-hover:-translate-y-1 transition-all duration-300">
                <div className="relative rounded-xl bg-white dark:bg-slate-800 border border-purple-200 dark:border-purple-700 shadow-lg group-hover:shadow-xl">
                  
                  {/* Header */}
                  <div className="relative p-5 bg-gradient-to-r from-purple-50 to-violet-50 dark:from-purple-900/20 dark:to-violet-900/20 rounded-t-xl">
                    <div className="flex items-center justify-between mb-2">
                      <span className="inline-flex items-center gap-2 px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full text-sm font-semibold">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        01.04.2023 – 01.05.2023
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">Tencent Holdings Limited</h3>
                    <p className="text-purple-600 dark:text-purple-400 font-semibold">Sunucu Teknisyeni</p>
                  </div>

                  {/* Description */}
                  <div className="p-5">
                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                      Fiziksel sunucu kurulumu ve yapılandırma süreçlerinde görev aldım. Veri merkezinde donanım 
                      montajı, kablolama, ağ bağlantılarının sağlanması ve sistem bileşenlerinin kurulumu üzerine 
                      çalıştım. Sunucuların devreye alınması sırasında test ve kontrolleri gerçekleştirdim. Büyük 
                      ölçekli altyapılarda kurulum ve operasyon süreçlerine katılarak sistemlerin kesintisiz 
                      çalışmasını destekledim.
                    </p>
                    <div>
                      <div className="flex flex-wrap gap-2">
                        {['Sunucu Kurulumu', 'Veri Merkezi', 'Donanım Montajı', 'Ağ Yapılandırma'].map((keyword) => (
                          <span key={keyword} className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded text-sm">
                            {keyword}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

          {/* Kişisel Projeler - En eski (en altta) */}
          <div className="relative flex items-start group">
            {/* Timeline Dot */}
            <div className="absolute left-4 w-4 h-4 bg-indigo-500 rounded-full border-3 border-white dark:border-slate-800 shadow-md group-hover:scale-110 transition-transform duration-300 z-10"></div>
            
            {/* Content Card */}
            <div className="ml-12 w-full">
              <div className="group-hover:-translate-y-1 transition-all duration-300">
                <div className="relative rounded-xl bg-white dark:bg-slate-800 border border-indigo-200 dark:border-indigo-700 shadow-lg group-hover:shadow-xl">
                  
                  {/* Header */}
                  <div className="relative p-5 bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-t-xl">
                    <div className="flex items-center justify-between mb-2">
                      <span className="inline-flex items-center gap-2 px-3 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 rounded-full text-sm font-semibold">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        2021 - Devam Ediyor
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">Kişisel Projeler</h3>
                    <p className="text-indigo-600 dark:text-indigo-400 font-semibold">Projelerim</p>
                  </div>

                  {/* Description */}
                  <div className="p-5">
                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                      Farklı alanlarda geliştirdiğim kişisel projelerim, yazılım geliştirme sürecinde edindiğim deneyim ve teknik becerileri yansıtmaktadır. 
                      Modern teknolojilerle geliştirilen bu projeler, problem çözme yeteneğim ve yaratıcı düşünce süreçlerimle şekillenmektedir. 
                      Web uygulamalarından mobil uygulamalara kadar geniş bir yelpazede çalışmalar gerçekleştiriyorum.
                    </p>
                    <div className="space-y-3">
                      <div>
                        <div className="flex flex-wrap gap-2">
                          {['Web Development', 'Mobile Development', 'Frontend Development', 'System Programming', 'Algorithm Design'].map((area) => (
                            <span key={area} className="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded text-sm">
                              {area}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    {/* GitHub Button */}
                    <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-700">
                      <a 
                        href="http://localhost:3001/projects" 
                        className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 group"
                      >
                        <svg className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.30.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                        <span>Projelerimi Görüntüle</span>
                        <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
    </section>
  );
}
