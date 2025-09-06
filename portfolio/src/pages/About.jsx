import ToolsTechnologies from '../components/ToolsTechnologies';
import TechSkillsCombo from '../components/TechSkillsCombo';

export default function About() {
	return (
		<div className="space-y-16">
			{/* Hakkımda Section */}
			<section className="max-w-7xl mx-auto px-8">
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
						<h2 className="text-3xl font-bold text-slate-900 dark:text-white text-center">
							Hakkımda
						</h2>
					</div>

					{/* Content with colored left borders */}
					<div className="space-y-10">
						{/* First Paragraph - Education & Background */}
						<div className="relative p-8 rounded-3xl bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20 border-l-6 border-purple-500 transition-all duration-300 hover:shadow-lg hover:scale-[1.01]">
							<div className="flex items-start space-x-6">
								<div className="flex-shrink-0 w-14 h-14 rounded-xl bg-purple-500 flex items-center justify-center">
									<svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
									</svg>
								</div>
								<p className="text-slate-700 dark:text-slate-300 leading-relaxed text-xl">
									Ben <span className="font-semibold text-purple-700 dark:text-purple-300">Mehmet Nasım Yılmaz</span>. 42 İstanbul'da Bilişim Teknolojileri Mimarisi alanında yoğun ve proje odaklı bir eğitim aldım. Ayrıca, İstanbul Gelişim Üniversitesi Yönetim Bilişim Sistemleri bölümünden 2025 yılında mezun oldum. Eğitim ve proje çalışmalarım süresince birçok programlama dili, framework ve teknolojiyle çalışma fırsatı buldum; çok sayıda proje geliştirerek farklı alanlarda deneyim kazandım. Bu süreçte öğrendiklerimi paylaşmak için blog yazıları da kaleme aldım.
								</p>
							</div>
						</div>

						{/* Second Paragraph - Current Goals */}
						<div className="relative p-8 rounded-3xl bg-gradient-to-r from-cyan-50 to-teal-50 dark:from-cyan-900/20 dark:to-teal-900/20 border-l-6 border-cyan-500 transition-all duration-300 hover:shadow-lg hover:scale-[1.01]">
							<div className="flex items-start space-x-6">
								<div className="flex-shrink-0 w-14 h-14 rounded-xl bg-cyan-500 flex items-center justify-center">
									<svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
									</svg>
								</div>
								<p className="text-slate-700 dark:text-slate-300 leading-relaxed text-xl">
									Bugün edindiğim bilgi birikimini sürekli geliştiriyor, yeni teknolojileri keşfederek yetkinliklerimi ileriye taşıyorum. Amacım; deneyim ve bilgilerimi yenilikçi projelere dönüştürmek, içinde bulunduğum ekiplere değer katmak ve sektöre fark yaratan çözümler sunmaktır. Modern teknolojileri etkin şekilde kullanarak verimli, sürdürülebilir ve kullanıcı odaklı uygulamalar geliştirmeyi öncelikli görüyorum.
								</p>
							</div>
						</div>

						{/* Third Paragraph - Specialization Areas */}
						<div className="relative p-8 rounded-3xl bg-gradient-to-r from-emerald-50 to-green-50 dark:from-emerald-900/20 dark:to-green-900/20 border-l-6 border-emerald-500 transition-all duration-300 hover:shadow-lg hover:scale-[1.01]">
							<div className="flex items-start space-x-6">
								<div className="flex-shrink-0 w-14 h-14 rounded-xl bg-emerald-500 flex items-center justify-center">
									<svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
									</svg>
								</div>
								<p className="text-slate-700 dark:text-slate-300 leading-relaxed text-xl">
									Özellikle <span className="font-semibold text-emerald-700 dark:text-emerald-300">web teknolojileri</span>, <span className="font-semibold text-emerald-700 dark:text-emerald-300">mobil uygulama geliştirme</span> ve <span className="font-semibold text-emerald-700 dark:text-emerald-300">DevOps</span> alanlarında uzmanlığımı derinleştiriyor; teknik becerilerim ile analitik düşünme yeteneğimi sürekli geliştirerek kariyerimde daha ileri seviyelere ulaşmayı hedefliyorum.
								</p>
							</div>
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