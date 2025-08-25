import React from 'react';

export default function BlogSection() {
  return (
    <section id="blog-yazilari" className="space-y-6">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
          📝 Blog Yazılarım
        </h2>
        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
          Yazılım geliştirme yolculuğumda edindiğim deneyimleri, teknik bilgileri ve ilginç keşiflerimi paylaştığım Medium blog yazılarım
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Card 1 */}
        <div className="group relative">
          <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-2xl blur-sm group-hover:blur-lg group-hover:from-green-500/30 group-hover:to-emerald-500/30 transition-all duration-500"></div>
          <div className="relative p-8 bg-white/95 dark:bg-slate-800/95 backdrop-blur-sm rounded-2xl border border-green-200/50 dark:border-green-700/50 shadow-xl group-hover:shadow-2xl group-hover:-translate-y-2 transition-all duration-500 min-h-[320px]">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="font-bold text-slate-900 dark:text-white text-xl leading-tight">C++ Modülleri ve C++ Temelleri</h3>
            </div>
            <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
              42 okulundaki C++ modüllerini tamamlayarak edindiğim deneyimleri, OOP prensiplerini ve bellek yönetimi konularını detaylı şekilde paylaştığım yazı serisi.
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              {['C++','OOP','42 School','Memory Management'].map(t => (
                <span key={t} className="px-3 py-1.5 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-sm font-medium">{t}</span>
              ))}
            </div>
            <a href="https://medium.com/@menasy/list/42-cpp-modulleri-ve-c-temelleri-710fabe3b608" target="_blank" rel="noreferrer" 
               className="inline-flex items-center gap-2 text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 font-semibold group-hover:underline">
              Yazı Serisini Oku
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>

        {/* Card 2 */}
        <div className="group relative">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl blur-sm group-hover:blur-lg group-hover:from-blue-500/30 group-hover:to-cyan-500/30 transition-all duration-500"></div>
          <div className="relative p-8 bg-white/95 dark:bg-slate-800/95 backdrop-blur-sm rounded-2xl border border-blue-200/50 dark:border-blue-700/50 shadow-xl group-hover:shadow-2xl group-hover:-translate-y-2 transition-all duration-500 min-h-[320px]">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center shadow-lg">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="font-bold text-slate-900 dark:text-white text-xl leading-tight">Docker — 42 Inception Projesi</h3>
            </div>
            <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
              Docker teknolojisini öğrenme sürecimde geliştirdiğim Inception projesi hakkında, konteynerleştirme ve mikroservis mimarisi konularını ele aldığım teknik yazı.
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              {['Docker','Containerization','DevOps','Microservices','NGINX','Docker Compose','42 School'].map(t => (
                <span key={t} className="px-3 py-1.5 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-medium">{t}</span>
              ))}
            </div>
            <a href="https://medium.com/@menasy/docker-42-inception-projesi-484e48ae543c" target="_blank" rel="noreferrer" 
               className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-semibold group-hover:underline">
              Yazıyı Oku
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>

        {/* Card 3 */}
        <div className="group relative">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl blur-sm group-hover:blur-lg group-hover:from-purple-500/30 group-hover:to-pink-500/30 transition-all duration-500"></div>
          <div className="relative p-8 bg-white/95 dark:bg-slate-800/95 backdrop-blur-sm rounded-2xl border border-purple-200/50 dark:border-purple-700/50 shadow-xl group-hover:shadow-2xl group-hover:-translate-y-2 transition-all duration-500 min-h-[320px]">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center shadow-lg">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                </svg>
              </div>
              <h3 className="font-bold text-slate-900 dark:text-white text-xl leading-tight">BlockChain Teknolojisi ve Kur'an-ı Kerim'in Muhafaza Sistemi</h3>
            </div>
            <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
              Blockchain teknolojisinin temel prensiplerini Kur'an-ı Kerim'in korunma sistemi ile karşılaştırdığım, iki farklı alan arasındaki benzerlikleri inceleyen analiz yazısı.
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              {['Blockchain','Technology','Web3','Analysis','Kuran-ı Kerim','İslam'].map(t => (
                <span key={t} className="px-3 py-1.5 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 text-sm font-medium">{t}</span>
              ))}
            </div>
            <a href="https://medium.com/@menasy/blockchain-teknolojisi-ve-kuran-%C4%B1-kerim-in-korunmas%C4%B1-77c6c04726b8" target="_blank" rel="noreferrer" 
               className="inline-flex items-center gap-2 text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 font-semibold group-hover:underline">
              Yazıyı Oku
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>

        {/* Card 4 - All Posts */}
        <div className="group relative">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-500/20 to-gray-500/20 rounded-2xl blur-sm group-hover:blur-lg group-hover:from-slate-500/30 group-hover:to-gray-500/30 transition-all duration-500"></div>
          <div className="relative p-8 bg-white/95 dark:bg-slate-800/95 backdrop-blur-sm rounded-2xl border border-slate-200/50 dark:border-slate-700/50 shadow-xl group-hover:shadow-2xl group-hover:-translate-y-2 transition-all duration-500 min-h-[320px]">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-slate-600 to-gray-700 rounded-xl flex items-center justify-center shadow-lg">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                </svg>
              </div>
              <h3 className="font-bold text-slate-900 dark:text-white text-xl leading-tight">Tüm Blog Yazılarım</h3>
            </div>
            <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
              Yazılım geliştirme, teknoloji ve kişisel deneyimlerimi paylaştığım Medium blog yazılarımın tamamına buradan ulaşabilirsiniz.
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              {['All Posts','Technology','Experience','Knowledge Sharing'].map(t => (
                <span key={t} className="px-3 py-1.5 rounded-full bg-slate-100 dark:bg-slate-700/60 text-slate-700 dark:text-slate-300 text-sm font-medium">{t}</span>
              ))}
            </div>
            <a href="https://medium.com/@menasy" target="_blank" rel="noreferrer" 
               className="inline-flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-300 font-semibold group-hover:underline">
              Medium Profilimi Ziyaret Et
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}


