import React from 'react';
import RevealOnScroll from './RevealOnScroll';

export default function EducationSection() {
	return (
		<section id="egitim" className="max-w-5xl mx-auto px-4">
			{/* Modern Section Header */}
			<div className="text-center mb-6 sm:mb-8 md:mb-10">
				<h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-2 sm:mb-3">
					🎓 Eğitim Bilgileri
				</h2>
				<p className="text-sm sm:text-base md:text-lg text-slate-600 dark:text-slate-400 max-w-xl mx-auto">
					Akademik geçmişim ve aldığım eğitimler
				</p>
			</div>

		<div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
			{/* 42 İstanbul */}
			<RevealOnScroll animation="bounce" delay={0}>
			<div className="group relative">
					<div className="absolute inset-0 bg-gradient-to-br from-slate-500/10 to-slate-600/10 rounded-xl sm:rounded-2xl blur-sm group-hover:blur-lg transition-all duration-500"></div>
					<div className="relative overflow-hidden rounded-xl sm:rounded-2xl bg-white/95 dark:bg-slate-800/95 backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/50 shadow-md group-hover:shadow-lg group-hover:-translate-y-1 transition-all duration-500">

						{/* Header with animated background */}
						<div className="relative p-4 sm:p-5 md:p-6 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-700">
							<div className="absolute inset-0 bg-gradient-to-br from-slate-900/5 to-transparent"></div>
							<div className="relative flex items-center gap-3 sm:gap-3.5 md:gap-4">
								<div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-slate-900 dark:bg-white rounded-lg sm:rounded-xl flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
									<span className="text-white dark:text-slate-900 font-bold text-xl sm:text-2xl md:text-3xl">42</span>
								</div>
								<div>
									<h3 className="text-base sm:text-lg md:text-xl font-bold text-slate-900 dark:text-white mb-0.5 sm:mb-1">42 İstanbul</h3>
									<p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 font-medium">Bilişim Teknolojileri Mimarası Uzmanı</p>
								</div>
							</div>
						</div>

						<div className="p-4 sm:p-5 md:p-6">
							{/* Duration */}
							<div className="mb-3 sm:mb-4">
								<span className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1.5 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-lg sm:rounded-xl text-xs sm:text-sm font-semibold">
									<svg className="w-3 h-3 sm:w-3.5 sm:h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
									</svg>
									2/4 Yıl
								</span>
							</div>

							{/* Description */}
							<p className="text-xs sm:text-sm md:text-base text-slate-700 dark:text-slate-300 leading-relaxed mb-4 sm:mb-5">
								C ve C++'ta ileri seviye yazılım geliştirme üzerine yoğun bir eğitim aldım. Multi-threading,
								sistem programlama, bellek yönetimi, raycasting, 3D grafik işleme, ağ protokolleri, socket
								programlama, POSIX sinyalleri, veri yapıları ve algoritmalar gibi konularda uzmanlaştım.
								Kernel optimizasyonu ve karmaşık problem çözme tekniklerinde derinlemesine deneyim kazandım.
							</p>

							{/* Skills */}
							<div className="space-y-2">
								<div className="flex flex-wrap gap-1.5 sm:gap-2">
									{['C', 'C++', 'System Programming', 'Multi-threading', 'Network Programming', 'Algorithms', '3D Graphics'].map((skill) => (
										<span key={skill} className="px-2 sm:px-2.5 py-1 sm:py-1.5 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded text-xs sm:text-sm font-medium hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors">
											{skill}
										</span>
									))}
								</div>
							</div>
						</div>
					</div>
				</div>
				</RevealOnScroll>

				{/* İstanbul Gelişim Üniversitesi */}
				<RevealOnScroll animation="flip" delay={200}>
				<div className="group relative">
					<div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-xl sm:rounded-2xl blur-sm group-hover:blur-lg transition-all duration-500"></div>
					<div className="relative overflow-hidden rounded-xl sm:rounded-2xl bg-white/95 dark:bg-slate-800/95 backdrop-blur-sm border border-blue-200/50 dark:border-blue-700/50 shadow-md group-hover:shadow-lg group-hover:-translate-y-1 transition-all duration-500">

						{/* Header with animated background */}
						<div className="relative p-4 sm:p-5 md:p-6 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20">
							<div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5"></div>
							<div className="relative flex items-center gap-3 sm:gap-3.5 md:gap-4">
								<div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg sm:rounded-xl flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
									<span className="text-white font-bold text-base sm:text-lg md:text-xl">İGÜ</span>
								</div>
								<div>
									<h3 className="text-base sm:text-lg md:text-xl font-bold text-slate-900 dark:text-white mb-0.5 sm:mb-1">İstanbul Gelişim Üniversitesi</h3>
									<p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 font-medium">Yönetim Bilişim Sistemleri</p>
								</div>
							</div>
						</div>

						<div className="p-4 sm:p-5 md:p-6">
							{/* Duration */}
							<div className="mb-3 sm:mb-4">
								<span className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1.5 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-lg sm:rounded-xl text-xs sm:text-sm font-semibold">
									<svg className="w-3 h-3 sm:w-3.5 sm:h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
									</svg>
									4 Yıl (2025 Mezunu)
								</span>
							</div>

							{/* Description */}
							<p className="text-xs sm:text-sm md:text-base text-slate-700 dark:text-slate-300 leading-relaxed mb-4 sm:mb-5">
								Teknoloji ve iş dünyasını birleştiren disiplinler arası bir eğitim gördüm. Veri madenciliği,
								finansal teknolojiler, risk yönetimi, SQL veritabanı yönetimi, iş zekası, veri görselleştirme,
								görsel programlama (C#), kurumsal IT altyapıları ve bulut bilişim alanlarında yetkinlikler edindim.
								Hem teknik hem stratejik bakış açısıyla projeler geliştirdim.
							</p>

							{/* Skills */}
							<div className="space-y-2">
								<div className="flex flex-wrap gap-1.5 sm:gap-2">
									{['MIS', 'Data Mining', 'SQL', 'C#', 'Business Intelligence', 'Cloud Computing', 'Risk Management'].map((skill) => (
										<span key={skill} className="px-2 sm:px-2.5 py-1 sm:py-1.5 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded text-xs sm:text-sm font-medium hover:bg-blue-200 dark:hover:bg-blue-900/50 transition-colors">
											{skill}
										</span>
									))}
								</div>
							</div>
						</div>
					</div>
				</div>
				</RevealOnScroll>
			</div>
		</section>
	);
}
