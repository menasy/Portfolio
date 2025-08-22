import React from 'react';

export default function Comminication() {
  const contactItems = [
    {
      icon: '📧',
      title: 'Email',
      description: 'mehmetnasim42@gmail.com',
      link: 'mailto:mehmetnasim42@gmail.com',
      color: 'from-red-500 to-pink-500',
      bgColor: 'from-red-50 to-pink-50 dark:from-red-900/20 dark:to-pink-900/20',
      borderColor: 'border-red-200 dark:border-red-700'
    },
    {
      icon: '🐙',
      title: 'GitHub',
      description: 'Projelerim ve kod örnekleri',
      link: 'https://github.com/menasy',
      color: 'from-gray-600 to-slate-700',
      bgColor: 'from-gray-50 to-slate-50 dark:from-gray-900/20 dark:to-slate-900/20',
      borderColor: 'border-gray-200 dark:border-gray-700'
    },
    {
      icon: '💼',
      title: 'LinkedIn',
      description: 'Profesyonel ağ ve kariyer',
      link: 'https://linkedin.com/in/menasy',
      color: 'from-blue-600 to-blue-700',
      bgColor: 'from-blue-50 to-blue-50 dark:from-blue-900/20 dark:to-blue-900/20',
      borderColor: 'border-blue-200 dark:border-blue-700'
    },
    {
      icon: '📝',
      title: 'Medium',
      description: 'Yazılarım ve teknik içerikler',
      link: 'https://medium.com/@menasy',
      color: 'from-green-600 to-emerald-600',
      bgColor: 'from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20',
      borderColor: 'border-green-200 dark:border-green-700'
    }
  ];

  const cvItems = [
    {
      icon: '📄',
      title: 'Türkçe CV',
      description: 'PDF formatında detaylı özgeçmiş',
      link: 'https://github.com/menasy/Portfolio/blob/main/MehmetNasimYilmazCv.pdf?raw=true',
      action: 'İndir',
      color: 'from-purple-600 to-indigo-600',
      bgColor: 'from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20',
      borderColor: 'border-purple-200 dark:border-purple-700'
    },
    {
      icon: '📋',
      title: 'English CV',
      description: 'Detailed resume in PDF format',
      link: 'https://github.com/menasy/Portfolio/blob/main/MehmetNasimYilmazEnCv.pdf?raw=true',
      action: 'Download',
      color: 'from-slate-600 to-gray-700',
      bgColor: 'from-slate-50 to-gray-50 dark:from-slate-900/20 dark:to-gray-900/20',
      borderColor: 'border-slate-200 dark:border-slate-700'
    }
  ];

  return (
    <section className="max-w-7xl mx-auto px-4">
      {/* Header */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20 border border-cyan-200 dark:border-cyan-700 mb-6 shadow-lg">
          <div className="w-3 h-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full animate-pulse"></div>
          <span className="text-sm font-semibold text-cyan-700 dark:text-cyan-300 uppercase tracking-wide">İletişim & CV</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
          Bağlantı & Belgeler
        </h2>
        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
          Benimle iletişime geçmek için sosyal platformları kullanabilirsiniz
        </p>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 items-start">
        
        {/* İletişim ve Bağlantılar - Sol */}
        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-3xl blur-sm group-hover:blur-md transition-all duration-300"></div>
          <div className="relative p-8 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm rounded-3xl border border-slate-200 dark:border-slate-700 shadow-xl group-hover:shadow-2xl group-hover:-translate-y-1 transition-all duration-300">
            
            {/* Section Header */}
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 shadow-lg">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">İletişim ve Bağlantılar</h3>
            </div>

            <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full mb-8"></div>

            <p className="text-slate-600 dark:text-slate-400 mb-6">
              Benimle iletişime geçmek için sosyal platformları kullanabilirsiniz
            </p>

            {/* Contact Items */}
            <div className="space-y-4">
              {contactItems.map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/item block"
                >
                  <div className={`p-4 rounded-xl bg-gradient-to-r ${item.bgColor} border ${item.borderColor} hover:shadow-lg transition-all duration-300 group-hover/item:scale-[1.02]`}>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className={`p-2 rounded-lg bg-gradient-to-r ${item.color} text-white shadow-md`}>
                          <span className="text-lg">{item.icon}</span>
                        </div>
                        <div>
                          <h4 className="font-semibold text-slate-900 dark:text-white">{item.title}</h4>
                          <p className="text-sm text-slate-600 dark:text-slate-400">{item.description}</p>
                        </div>
                      </div>
                      <svg className="w-5 h-5 text-slate-400 group-hover/item:text-slate-600 dark:group-hover/item:text-slate-300 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* CV İndir - Sağ */}
        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-3xl blur-sm group-hover:blur-md transition-all duration-300"></div>
          <div className="relative p-8 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm rounded-3xl border border-slate-200 dark:border-slate-700 shadow-xl group-hover:shadow-2xl group-hover:-translate-y-1 transition-all duration-300">
            
            {/* Section Header */}
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 shadow-lg">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">CV İndir</h3>
            </div>

            <div className="w-16 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full mb-8"></div>

            <p className="text-slate-600 dark:text-slate-400 mb-6">
              Detaylı özgeçmişimi PDF formatında inceleyin
            </p>

            {/* CV Download Items */}
            <div className="space-y-4">
              {cvItems.map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/item block"
                  download
                >
                  <div className={`p-6 rounded-xl bg-gradient-to-r ${item.bgColor} border ${item.borderColor} hover:shadow-lg transition-all duration-300 group-hover/item:scale-[1.02]`}>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className={`p-3 rounded-lg bg-gradient-to-r ${item.color} text-white shadow-md`}>
                          <span className="text-xl">{item.icon}</span>
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-slate-900 dark:text-white">{item.title}</h4>
                          <p className="text-sm text-slate-600 dark:text-slate-400">{item.description}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r ${item.color} text-white font-medium shadow-md group-hover/item:shadow-lg transition-shadow`}>
                          {item.action}
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* Additional Contact Info */}
            <div className="mt-8 p-6 rounded-xl bg-gradient-to-r from-slate-50 to-gray-50 dark:from-slate-900/30 dark:to-gray-900/30 border border-slate-200 dark:border-slate-700">
              <div className="text-center">
                <h4 className="font-semibold text-slate-900 dark:text-white mb-2">İşbirliği için</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">
                  Proje teklifleri ve iş fırsatları için bana ulaşabilirsiniz
                </p>
                <a 
                  href="mailto:mehmetnasim42@gmail.com?subject=İşbirliği Teklifi"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium hover:shadow-lg transition-shadow"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  İletişime Geç
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}