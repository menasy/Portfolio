import React from 'react';
import TechSkillsInner from './TechSkillsInner';

export default function TechSkillsCombo({ showHeader = true, variant = "grid" }) {
	const skills = [
		// Teknik Beceriler
		{ icon: '🎯', text: 'Nesne Yönelimli Programlama (OOP)', color: 'from-blue-500 to-blue-600' },
		{ icon: '📊', text: 'Algoritma ve Veri Yapıları', color: 'from-green-500 to-emerald-500' },
		{ icon: '⚡', text: 'Çoklu İş Parçacığı Yönetimi', color: 'from-yellow-500 to-orange-500' },
		{ icon: '⚙️', text: 'Sistem Programlama', color: 'from-red-500 to-red-600' },
		{ icon: '🌐', text: 'Socket Programlama', color: 'from-teal-500 to-cyan-500' },
		{ icon: '🌍', text: 'Web Geliştirme', color: 'from-emerald-500 to-green-600' },
		{ icon: '📱', text: 'Mobil Uygulama Geliştirme', color: 'from-cyan-500 to-blue-500' },
		{ icon: '🐳', text: 'Docker ve Docker Compose', color: 'from-blue-600 to-indigo-600' },
		{ icon: '⛓️', text: 'Blockchain Teknolojileri', color: 'from-amber-500 to-orange-500' },
		{ icon: '💾', text: 'Veritabanı Yönetimi', color: 'from-slate-500 to-slate-600' },
		{ icon: '🔒', text: 'Ağ ve Güvenlik', color: 'from-rose-500 to-pink-500' },
		{ icon: '🔌', text: 'REST API', color: 'from-sky-500 to-cyan-500' },
		{ icon: '✨', text: 'Clean Code', color: 'from-lime-500 to-green-500' },
		// Soft Skills
		{ icon: '🧠', text: 'Analitik Düşünce ve Problem Çözme', color: 'from-purple-500 to-purple-600' },
		{ icon: '📚', text: 'Öğrenmeye Açıklık', color: 'from-violet-500 to-purple-600' },
		{ icon: '🤝', text: 'Takım Çalışması', color: 'from-indigo-500 to-blue-600' },
		{ icon: '⏰', text: 'Zaman Yönetimi', color: 'from-orange-500 to-red-500' },
	];

	if (variant === "simple") {
		return (
			<div>
				{showHeader && <h3 className="font-semibold mb-2" aria-label="Yetkinliklerim">🧑‍💻 Yetkinliklerim</h3>}
				<ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-slate-700 dark:text-slate-300">
					{skills.map((skill) => (
						<li key={skill.text} className="flex items-center gap-2">
							<span className="h-1.5 w-1.5 rounded-full bg-sky-500" />
							<span className="text-sm">{skill.text}</span>
						</li>
					))}
				</ul>
			</div>
		);
	}

	return (
		<section className="max-w-7xl mx-auto px-4">
			<div className="p-8 bg-white dark:bg-slate-800 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-lg hover:shadow-xl transition-all duration-300">
				{/* Ana Başlık */}
				<div className="text-center mb-12">
					<h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
						👨🏻‍💻 Yetkinliklerim
					</h2>
					<p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
						Yazılım geliştirme alanındaki teknik yeteneklerim ve kişisel becerilerim
					</p>
				</div>
				<div className="grid grid-cols-1 xl:grid-cols-2 gap-8 items-start">
					{/* Programlama Dilleri Card - Sol */}
					<div className="relative group">
						<div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-red-600/20 rounded-3xl blur-sm group-hover:blur-lg group-hover:from-orange-500/30 group-hover:to-red-600/30 transition-all duration-500"></div>
						<div className="relative p-8 bg-white/95 dark:bg-slate-800/95 backdrop-blur-sm rounded-3xl border border-orange-200/50 dark:border-orange-700/50 shadow-lg hover:shadow-xl group-hover:-translate-y-2 transition-all duration-500">
							<div className="flex items-center gap-4 mb-8">
								<div className="p-3 rounded-2xl bg-gradient-to-br from-orange-500 to-red-600 shadow-xl">
									<svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
									</svg>
								</div>
								<div>
									<h3 className="text-2xl font-bold text-slate-900 dark:text-white">Programlama Dilleri</h3>
									<p className="text-sm text-slate-500 dark:text-slate-400">Kullandığım diller ve seviyeler</p>
								</div>
							</div>
							<div className="w-16 h-1 bg-gradient-to-r from-orange-500 to-red-500 rounded-full mb-6"></div>
							<TechSkillsInner />
						</div>
					</div>

					{/* Yetenekler Card - Sağ */}
					<div className="relative group">
						<div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-emerald-600/20 rounded-3xl blur-sm group-hover:blur-lg group-hover:from-green-500/30 group-hover:to-emerald-600/30 transition-all duration-500"></div>
						<div className="relative p-8 bg-white/95 dark:bg-slate-800/95 backdrop-blur-sm rounded-3xl border border-emerald-200/50 dark:border-emerald-700/50 shadow-lg hover:shadow-xl group-hover:-translate-y-2 transition-all duration-500">
							{showHeader && (
								<div className="flex items-center gap-4 mb-8">
									<div className="p-3 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-600 shadow-xl">
										<svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
										</svg>
									</div>
									<div>
										<h3 className="text-2xl font-bold text-slate-900 dark:text-white">Teknik Beceriler</h3>
										<p className="text-sm text-slate-500 dark:text-slate-400">Teknik ve kişisel becerilerim</p>
									</div>
								</div>
							)}
							<div className="w-16 h-1 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full mb-6"></div>
							<div className="space-y-2.5">
								{skills.map((skill, index) => (
									<div key={index} className="group relative">
										{/* Enhanced background effects */}
										<div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 rounded-lg blur-sm group-hover:blur-lg group-hover:from-emerald-500/30 group-hover:to-cyan-500/30 transition-all duration-500"></div>
										<div className="absolute inset-0 bg-gradient-to-br from-emerald-400/10 to-cyan-400/10 rounded-lg group-hover:scale-105 transition-transform duration-500"></div>
										<div className="relative flex items-center gap-3 p-3 rounded-lg bg-white/95 dark:bg-slate-700/95 backdrop-blur-sm border border-emerald-200/50 dark:border-emerald-600/50 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
											<div className="flex-shrink-0 w-7 h-7 rounded-lg bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-600 dark:to-slate-700 flex items-center justify-center shadow-sm">
												<span className="text-sm">{skill.icon}</span>
											</div>
											<div className="flex-1">
												<span className="font-medium text-sm text-slate-900 dark:text-white">{skill.text}</span>
											</div>
										</div>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
