import React from 'react';

export default function ExperienceSection() {
	return (
		<section id="deneyimler" className="max-w-5xl mx-auto px-4">
			{/* Modern Section Header */}
			<div className="text-center mb-6 sm:mb-8 md:mb-10">
				<h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-2 sm:mb-3">
					💼 Deneyimler
				</h2>
				<p className="text-sm sm:text-base md:text-lg text-slate-600 dark:text-slate-400 max-w-xl mx-auto px-4">
					İş tecrübelerim ve projelerim
				</p>
			</div>

			{/* Timeline Container */}
			<div className="relative">
				{/* Timeline Line */}
				<div className="absolute left-3 sm:left-4 md:left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-emerald-500 via-blue-500 to-purple-500"></div>

				{/* Timeline Items - Kronolojik (aşağıdan yukarıya) */}
				<div className="space-y-6 sm:space-y-8 md:space-y-10">

					{/* T3 Vakfı - En güncel (en üstte) */}
					<div className="relative flex items-start group">
						{/* Timeline Dot */}
						<div className="absolute left-2.5 sm:left-3.5 md:left-5 w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 bg-emerald-500 rounded-full border-2 border-white dark:border-slate-800 shadow-md group-hover:scale-110 transition-transform duration-300 z-10"></div>

						{/* Content Card */}
						<div className="ml-8 sm:ml-10 md:ml-12 w-full">
							<div className="group-hover:-translate-y-1 transition-all duration-300">
								<div className="relative rounded-lg sm:rounded-xl bg-white dark:bg-slate-800 border border-emerald-200 dark:border-emerald-700 shadow-md group-hover:shadow-lg overflow-hidden">
									<div className="absolute inset-0 border border-transparent bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 rounded-lg sm:rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
									<div className="relative bg-white dark:bg-slate-800 rounded-lg sm:rounded-xl m-0.5">

										{/* Header */}
										<div className="relative p-3 sm:p-4 bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 rounded-t-lg sm:rounded-t-xl">
											<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
												<span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 rounded-full text-xs sm:text-sm font-semibold w-fit">
													<svg className="w-3 h-3 sm:w-3.5 sm:h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
														<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
													</svg>
													<span className="whitespace-nowrap">01.07.2025 – Devam Ediyor</span>
												</span>
											</div>
											<h3 className="text-base sm:text-lg md:text-xl font-bold text-slate-900 dark:text-white mb-1">T3 Vakfı</h3>
											<p className="text-sm sm:text-base text-emerald-600 dark:text-emerald-400 font-semibold">Mobil Uygulama Geliştirme Contribütörü</p>
										</div>

										{/* Description */}
										<div className="p-3 sm:p-4">
											<p className="text-xs sm:text-sm md:text-base text-slate-700 dark:text-slate-300 leading-relaxed mb-3">
												Next Sosyal projesi kapsamında, Java tabanlı Android uygulamasının geliştirme süreçlerinde aktif rol alıyorum. Kullanıcı deneyimini iyileştiren yeni modüllerin entegrasyonunu gerçekleştiriyor; kod kalitesi ve sürdürülebilirlik odaklı çalışmalarla projenin gelişimini destekliyorum.
											</p>
											<div className="flex flex-wrap gap-1.5 sm:gap-2">
												{['Java', 'Android SDK', 'Mobil Geliştirme', 'Kullanıcı Deneyimi', 'Git'].map((tech) => (
													<span key={tech} className="px-2 sm:px-2.5 py-0.5 sm:py-1 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 rounded text-xs sm:text-sm">
														{tech}
													</span>
												))}
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					{/* Baykar Teknoloji */}
					<div className="relative flex items-start group">
						{/* Timeline Dot */}
						<div className="absolute left-2.5 sm:left-3.5 md:left-5 w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 bg-red-500 rounded-full border-2 border-white dark:border-slate-800 shadow-md group-hover:scale-110 transition-transform duration-300 z-10"></div>

						{/* Content Card */}
						<div className="ml-8 sm:ml-10 md:ml-12 w-full">
							<div className="group-hover:-translate-y-1 transition-all duration-300">
								<div className="relative rounded-lg sm:rounded-xl bg-white dark:bg-slate-800 border border-red-200 dark:border-red-700 shadow-md group-hover:shadow-lg overflow-hidden">
									<div className="absolute inset-0 border border-transparent bg-gradient-to-r from-red-500 via-orange-500 to-amber-500 rounded-lg sm:rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
									<div className="relative bg-white dark:bg-slate-800 rounded-lg sm:rounded-xl m-0.5">

										{/* Header */}
										<div className="relative p-3 sm:p-4 bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 rounded-t-lg sm:rounded-t-xl">
											<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
												<span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 rounded-full text-xs sm:text-sm font-semibold w-fit">
													<svg className="w-3 h-3 sm:w-3.5 sm:h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
														<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
													</svg>
													<span className="whitespace-nowrap">06.10.2025 – 27.12.2025</span>
												</span>
											</div>
											<h3 className="text-base sm:text-lg md:text-xl font-bold text-slate-900 dark:text-white mb-1">Baykar Teknoloji</h3>
											<p className="text-sm sm:text-base text-red-600 dark:text-red-400 font-semibold">Merkezi Kontrol Yazılımları Stajyeri</p>
										</div>

										{/* Description */}
										<div className="p-3 sm:p-4">
											<p className="text-xs sm:text-sm md:text-base text-slate-700 dark:text-slate-300 leading-relaxed mb-3">
												Medya sunucuları ve video akış teknolojileri üzerine çalışmalar yürüttüm. Wowza Streaming Engine, .NET Web API ve React mimarilerini kullanarak uçtan uca (Full-Stack) bir canlı yayın platformunu hayata geçirdim. Medya iletim süreçlerini modern web teknolojileriyle birleştirerek proje hedeflerini tamamladım.
											</p>
											<div className="flex flex-wrap gap-1.5 sm:gap-2">
												{['ASP.NET Core', 'React', 'Web API', 'Wowza Streaming Engine', 'Full Stack'].map((tech) => (
													<span key={tech} className="px-2 sm:px-2.5 py-0.5 sm:py-1 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 rounded text-xs sm:text-sm">
														{tech}
													</span>
												))}
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
						<div className="absolute left-2.5 sm:left-3.5 md:left-5 w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 bg-blue-500 rounded-full border-2 border-white dark:border-slate-800 shadow-md group-hover:scale-110 transition-transform duration-300 z-10"></div>

						{/* Content Card */}
						<div className="ml-8 sm:ml-10 md:ml-12 w-full">
							<div className="group-hover:-translate-y-1 transition-all duration-300">
								<div className="relative rounded-lg sm:rounded-xl bg-white dark:bg-slate-800 border border-blue-200 dark:border-blue-700 shadow-md group-hover:shadow-lg overflow-hidden">
									<div className="absolute inset-0 border border-transparent bg-gradient-to-r from-blue-500 via-cyan-500 to-sky-500 rounded-lg sm:rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
									<div className="relative bg-white dark:bg-slate-800 rounded-lg sm:rounded-xl m-0.5">

										{/* Header */}
										<div className="relative p-3 sm:p-4 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-t-lg sm:rounded-t-xl">
											<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
												<span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-xs sm:text-sm font-semibold w-fit">
													<svg className="w-3 h-3 sm:w-3.5 sm:h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
														<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
													</svg>
													<span className="whitespace-nowrap">12.08.2024 – 23.09.2024</span>
												</span>
											</div>
											<h3 className="text-base sm:text-lg md:text-xl font-bold text-slate-900 dark:text-white mb-1">Paka Teknoloji</h3>
											<p className="text-sm sm:text-base text-blue-600 dark:text-blue-400 font-semibold">Sistem Destek Stajyeri</p>
										</div>

										{/* Description */}
										<div className="p-3 sm:p-4">
											<p className="text-xs sm:text-sm md:text-base text-slate-700 dark:text-slate-300 leading-relaxed mb-3">
												Şirket içi IT altyapısını ve sistem yönetim süreçlerini takip ettim. Donanım ve yazılım kaynaklı talepleri karşılayarak gerekli teknik çözümleri ürettim; sistem güncellemeleri ve bakım işlemleriyle operasyonel sürekliliği sağladım.
											</p>
											<div className="flex flex-wrap gap-1.5 sm:gap-2">
												{['Sistem Yönetimi', 'Teknik Destek', 'IT Altyapısı', 'Sorun Giderme'].map((keyword) => (
													<span key={keyword} className="px-2 sm:px-2.5 py-0.5 sm:py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded text-xs sm:text-sm">
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
						<div className="absolute left-2.5 sm:left-3.5 md:left-5 w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 bg-purple-500 rounded-full border-2 border-white dark:border-slate-800 shadow-md group-hover:scale-110 transition-transform duration-300 z-10"></div>

						{/* Content Card */}
						<div className="ml-8 sm:ml-10 md:ml-12 w-full">
							<div className="group-hover:-translate-y-1 transition-all duration-300">
								<div className="relative rounded-xl bg-white dark:bg-slate-800 border border-purple-200 dark:border-purple-700 shadow-lg group-hover:shadow-xl overflow-hidden">
									<div className="absolute inset-0 border-2 border-transparent bg-gradient-to-r from-purple-500 via-violet-500 to-indigo-500 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
									<div className="relative bg-white dark:bg-slate-800 rounded-xl m-0.5">

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
												Veri merkezinde fiziksel sunucu kurulumu, donanım montajı ve ağ yapılandırma operasyonlarını gerçekleştirdim. Kurulum sonrası test süreçlerini tamamlayarak sunucuların devreye alınmasını üstlendim.
											</p>
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

					{/* Kişisel Projeler - En eski (en altta) */}
					<div className="relative flex items-start group">
						{/* Timeline Dot */}
						<div className="absolute left-2.5 sm:left-3.5 md:left-5 w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 bg-indigo-500 rounded-full border-2 border-white dark:border-slate-800 shadow-md group-hover:scale-110 transition-transform duration-300 z-10"></div>

						{/* Content Card */}
						<div className="ml-8 sm:ml-10 md:ml-12 w-full">
							<div className="group-hover:-translate-y-1 transition-all duration-300">
								<div className="relative rounded-lg sm:rounded-xl bg-white dark:bg-slate-800 border border-indigo-200 dark:border-indigo-700 shadow-md group-hover:shadow-lg overflow-hidden">
									<div className="absolute inset-0 border border-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg sm:rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
									<div className="relative bg-white dark:bg-slate-800 rounded-lg sm:rounded-xl m-0.5">

										{/* Header */}
										<div className="relative p-3 sm:p-4 bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-t-lg sm:rounded-t-xl">
											<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
												<span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 rounded-full text-xs sm:text-sm font-semibold w-fit">
													<svg className="w-3 h-3 sm:w-3.5 sm:h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
														<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
													</svg>
													<span className="whitespace-nowrap">2021 - Devam Ediyor</span>
												</span>
											</div>
											<h3 className="text-base sm:text-lg md:text-xl font-bold text-slate-900 dark:text-white mb-1">Kişisel Projeler</h3>
											<p className="text-sm sm:text-base text-indigo-600 dark:text-indigo-400 font-semibold">Projelerim</p>
										</div>

										{/* Description */}
										<div className="p-3 sm:p-4">
											<p className="text-xs sm:text-sm md:text-base text-slate-700 dark:text-slate-300 leading-relaxed mb-3">
												Farklı alanlarda geliştirdiğim kişisel projelerim, yazılım geliştirme sürecinde edindiğim deneyim ve teknik becerileri yansıtmaktadır.
												Modern teknolojilerle geliştirilen bu projeler, problem çözme yeteneğim ve yaratıcı düşünce süreçlerimle şekillenmektedir.
												Web uygulamalarından mobil uygulamalara kadar geniş bir yelpazede çalışmalar gerçekleştiriyorum.
											</p>
											<div className="space-y-2">
												<div>
													<div className="flex flex-wrap gap-1.5 sm:gap-2">
														{['Web Development', 'Mobile Development', 'Frontend Development', 'System Programming', 'Algorithm Design'].map((area) => (
															<span key={area} className="px-2 sm:px-2.5 py-0.5 sm:py-1 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded text-xs sm:text-sm">
																{area}
															</span>
														))}
													</div>
												</div>
											</div>

											{/* GitHub Button */}
											<div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-700">
												<a
													href="https://github.com/menasy?tab=repositories"
													target="_blank"
													rel="noopener noreferrer"
													className="inline-flex items-center gap-2 sm:gap-2.5 px-4 sm:px-5 py-2 sm:py-2.5 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white text-sm sm:text-base font-semibold rounded-lg sm:rounded-xl shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300 group"
												>
													<svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
														<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.30.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
													</svg>
													<span>Projelerimi Görüntüle</span>
													<svg className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-0.5 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
				</div>
			</div>
		</section>
	);
}
