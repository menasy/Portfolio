import ToolsTechnologies from '../components/ToolsTechnologies';
import TechSkillsCombo from '../components/TechSkillsCombo';

export default function About() {
  return (
    <div className="space-y-16">
      {/* Hakkımda Section */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="group relative">
          {/* Enhanced background animation */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-3xl blur-sm group-hover:blur-lg group-hover:from-blue-500/20 group-hover:to-purple-500/20 transition-all duration-500"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-purple-400/5 to-blue-400/5 rounded-3xl group-hover:scale-[1.02] transition-transform duration-500"></div>
          
          <div className="relative p-8 md:p-12 bg-white/95 dark:bg-slate-800/95 backdrop-blur-sm rounded-3xl border-2 border-blue-200/50 dark:border-blue-700/50 shadow-xl group-hover:shadow-2xl group-hover:-translate-y-2 transition-all duration-500">
            
            {/* Header */}
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
                Hakkımda
                </h2>
              </div>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto"></div>
            </div>

            {/* Content */}
            <div className="space-y-6 text-slate-700 dark:text-slate-300">
              <p className="text-lg leading-relaxed">
                <span className="font-semibold text-blue-600 dark:text-blue-400">Ben Mehmet Nasım Yılmaz.</span> 42 İstanbul'da Bilişim Teknolojileri Mimarisi alanında yoğun ve kapsamlı bir eğitim alıyor, aynı zamanda İstanbul Gelişim Üniversitesi Yönetim Bilişim Sistemleri bölümünden 2025 yılı itibarıyla mezun olmuş bulunuyorum.
              </p>
              
              <p className="text-lg leading-relaxed">
                Eğitim ve proje çalışmalarım boyunca birçok programlama dili, framework ve teknolojiyle çalışma fırsatı buldum. Bu süreçte hem teknik becerilerimi hem de analitik düşünme yeteneğimi geliştirdim.
              </p>
              
              <p className="text-lg leading-relaxed">
                Teknolojiye duyduğum ilgi, sürekli öğrenme motivasyonum ve problem çözme odaklı yaklaşımım sayesinde farklı alanlarda deneyim kazanarak geniş bir teknik yelpaze edindim.
              </p>
              
              <p className="text-lg leading-relaxed">
                <span className="font-semibold text-purple-600 dark:text-purple-400">Hedefim,</span> yenilikçi projeler üreterek çalıştığım ekibe ve organizasyona değer katmak; modern teknolojilerle ölçeklenebilir, verimli ve sürdürülebilir çözümler geliştirmektir.
              </p>
              
              <p className="text-lg leading-relaxed">
                Özellikle <span className="font-medium text-emerald-600 dark:text-emerald-400">web teknolojileri, mobil uygulama geliştirme ve DevOps</span> alanlarında kendimi sürekli geliştirerek uzmanlık seviyemi ileri taşımayı amaçlıyorum.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Teknik Becerilerim Section */}
      <section className="max-w-7xl mx-auto px-6">
        <TechSkillsCombo />
      </section>

      <ToolsTechnologies />
    </div>
  );
}


