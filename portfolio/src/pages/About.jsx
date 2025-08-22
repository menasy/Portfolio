import ToolsTechnologies from '../components/ToolsTechnologies';

export default function About() {
  return (
    <div className="space-y-16">
      <section className="max-w-4xl mx-auto relative">
        {/* Decorative background */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-10 right-10 w-20 h-20 bg-gradient-to-br from-blue-400/30 to-purple-400/30 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-10 left-10 w-16 h-16 bg-gradient-to-br from-emerald-400/30 to-cyan-400/30 rounded-full blur-xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="relative">
          {/* Content card */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-3xl blur-sm group-hover:blur-lg group-hover:from-blue-500/30 group-hover:to-purple-500/30 transition-all duration-500"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-3xl group-hover:scale-105 transition-transform duration-500"></div>
            
            <div className="relative p-8 md:p-12 bg-white/95 dark:bg-slate-800/95 backdrop-blur-sm rounded-3xl border border-blue-200/50 dark:border-blue-700/50 shadow-xl group-hover:shadow-2xl group-hover:-translate-y-2 transition-all duration-500">
              
        
              
              {/* Person icon */}
              <div className="flex justify-center mb-8">
                <div className="p-4 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
              </div>
              
              <div className="text-center">
                <div className="relative max-w-3xl mx-auto">
                  <div className="absolute left-1/2 top-0 w-1 h-full bg-gradient-to-b from-blue-500 via-purple-500 to-emerald-500 rounded-full transform -translate-x-1/2"></div>
                  <p className="px-8 text-lg leading-8 text-slate-700 dark:text-slate-300 relative bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm py-6 rounded-2xl">
                    Yazılım geliştirme, web teknolojileri, DevOps ve özellikle mobil programlama alanlarında kendimi sürekli
                    geliştirmeye ve yeni teknolojiler öğrenmeye çalışıyorum. Bugüne kadar edindiğim teknik ve teorik bilgiyle
                    sağlam bir altyapı oluşturduğuma inanıyorum. Şimdi ise bu bilgi ve tecrübeyi iş hayatına taşıyarak hem
                    çalışacağım şirkete katkı sağlamak hem de kendimi daha ileri bir seviyeye taşımayı hedefliyorum.
                  </p>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="flex justify-center gap-4 mt-8 opacity-30">
                <div className="w-3 h-3 rounded-full bg-gradient-to-br from-blue-400 to-purple-400 animate-pulse"></div>
                <div className="w-3 h-3 rounded-full bg-gradient-to-br from-purple-400 to-emerald-400 animate-pulse delay-300"></div>
                <div className="w-3 h-3 rounded-full bg-gradient-to-br from-emerald-400 to-cyan-400 animate-pulse delay-500"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ToolsTechnologies />
    </div>
  );
}


