import ToolsTechnologies from '../components/ToolsTechnologies';
import TechSkillsCombo from '../components/TechSkillsCombo';

export default function About() {
	return (
		<div className="space-y-16">
			{/* Hakkımda Section */}
			<section className="max-w-5xl mx-auto px-8">
				<div className="relative bg-white dark:bg-slate-800 rounded-3xl shadow-md border border-slate-200 dark:border-slate-700 p-12 transition-all duration-500 hover:shadow-xl hover:-translate-y-2 hover:scale-[1.02]">
					{/* Animated Gradient Background on hover */}
					<div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-purple-100 via-cyan-100 to-teal-100 dark:from-purple-900/20 dark:via-cyan-900/10 dark:to-teal-900/20 opacity-0 hover:opacity-60 transition-opacity duration-500 pointer-events-none"></div>
					{/* Header */}
					<div className="flex flex-col items-center justify-center mb-8 relative z-10">
						<div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-600 to-purple-700 flex items-center justify-center mb-2">
							<svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
							</svg>
						</div>
						<h2 className="text-2xl font-bold text-slate-900 dark:text-white text-center">
							Hakkımda
						</h2>
					</div>

					{/* Content with colored left borders */}
					<div className="space-y-8">

						{/* First paragraph - About me and education */}
						<div className="border-l-4 border-purple-500 pl-6 py-3">
							<p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
								<span className="font-semibold text-purple-600 dark:text-purple-400">Ben Mehmet Nasım Yılmaz.</span> 42 İstanbul'da Bilişim Teknolojileri Mimarisi alanında yoğun ve kapsamlı bir eğitim alıyor, aynı zamanda İstanbul Gelişim Üniversitesi Yönetim Bilişim Sistemleri bölümünden 2025 yılı itibarıyla mezun olmuş bulunuyorum. Eğitim ve proje çalışmalarım boyunca birçok programlama dili, framework ve teknolojiyle çalışma fırsatı buldum.
							</p>
						</div>

						{/* Second paragraph - Goals and motivation */}
						<div className="border-l-4 border-teal-500 pl-6 py-3">
							<p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
								<span className="font-semibold text-teal-600 dark:text-teal-400">Hedefim,</span> yenilikçi projeler üreterek çalıştığım ekibe ve organizasyona değer katmak; modern teknolojilerle ölçeklenebilir, verimli ve sürdürülebilir çözümler geliştirmektir. Teknolojiye duyduğum ilgi, sürekli öğrenme motivasyonum ve problem çözme odaklı yaklaşımım sayesinde geniş bir teknik yelpaze edindim.
							</p>
						</div>

						{/* Third paragraph - Specialization areas */}
						<div className="border-l-4 border-cyan-500 pl-6 py-3">
							<p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
								Özellikle <span className="text-cyan-600 dark:text-cyan-400 font-medium">web teknolojileri, mobil uygulama geliştirme ve DevOps</span> alanlarında kendimi sürekli geliştirerek uzmanlık seviyemi ileri taşımayı amaçlıyorum. Bu alanlarda hem teknik becerilerimi hem de analitik düşünme yeteneğimi sürekli geliştiriyorum.
							</p>
						</div>

					</div>
				</div>
			</section>

			{/* Teknik Becerilerim Section */}
			<TechSkillsCombo />
			<ToolsTechnologies />
		</div>
	);
}