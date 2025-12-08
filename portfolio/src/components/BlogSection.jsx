import React from 'react';

export default function BlogSection() {
	return (
		<section id="blog-yazilari" className="space-y-4 sm:space-y-5">
			<div className="text-center mb-6 sm:mb-8 md:mb-10">
				<h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-2 sm:mb-3">
					📝 Blog Yazılarım
				</h2>
				<p className="text-sm sm:text-base md:text-lg text-slate-600 dark:text-slate-400 max-w-xl mx-auto px-4">
					Yazılım geliştirme yolculuğumda edindiğim deneyimleri, teknik bilgileri ve ilginç keşiflerimi paylaştığım Medium blog yazılarım
				</p>
			</div>

			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 max-w-5xl mx-auto">
				{/* Card 1 */}
				<div className="group relative">
					<div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-xl sm:rounded-2xl blur-sm group-hover:blur-lg group-hover:from-green-500/30 group-hover:to-emerald-500/30 transition-all duration-500"></div>
					<div className="relative p-5 sm:p-6 bg-white/95 dark:bg-slate-800/95 backdrop-blur-sm rounded-xl sm:rounded-2xl border border-green-200/50 dark:border-green-700/50 shadow-lg group-hover:shadow-xl group-hover:-translate-y-1.5 transition-all duration-500 min-h-[260px]">
						<div className="flex items-center gap-3 mb-4">
							<div className="w-11 h-11 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg">
								<svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
								</svg>
							</div>
							<h3 className="font-bold text-slate-900 dark:text-white text-lg sm:text-xl leading-tight">C++ Modülleri ve C++ Temelleri</h3>
						</div>
						<p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
							42 okulundaki C++ modüllerini tamamlayarak edindiğim deneyimleri, OOP prensiplerini ve bellek yönetimi konularını detaylı şekilde paylaştığım yazı serisi.
						</p>
						<div className="flex flex-wrap gap-1.5 mb-4">
							{['C++', 'OOP', '42 School', 'Memory Management'].map(t => (
								<span key={t} className="px-3 py-1.5 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-sm font-medium">{t}</span>
							))}
						</div>
						<a href="https://medium.com/@menasy/list/42-cpp-modulleri-ve-c-temelleri-710fabe3b608" target="_blank" rel="noreferrer"
							className="inline-flex items-center gap-1.5 text-sm sm:text-base text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 font-semibold group-hover:underline">
							Yazı Serisini Oku
							<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
							</svg>
						</a>
					</div>
				</div>

				{/* Card 2 */}
				<div className="group relative">
					<div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-lg sm:rounded-xl blur-sm group-hover:blur-lg group-hover:from-blue-500/30 group-hover:to-cyan-500/30 transition-all duration-500"></div>
					<div className="relative p-4 sm:p-5 bg-white/95 dark:bg-slate-800/95 backdrop-blur-sm rounded-lg sm:rounded-xl border border-blue-200/50 dark:border-blue-700/50 shadow-md group-hover:shadow-lg group-hover:-translate-y-1 transition-all duration-500">
						<div className="flex items-center gap-2 sm:gap-2.5 md:gap-3 mb-3 sm:mb-4">
							<div className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-lg sm:rounded-xl flex items-center justify-center shadow-md">
								<svg className="w-5 h-5 sm:w-5.5 sm:h-5.5 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
								</svg>
							</div>
							<h3 className="font-bold text-slate-900 dark:text-white text-base sm:text-lg md:text-xl leading-tight">Docker — 42 Inception Projesi</h3>
						</div>
						<p className="text-xs sm:text-sm md:text-base text-slate-600 dark:text-slate-300 leading-relaxed mb-3 sm:mb-4">
							Docker teknolojisini öğrenme sürecimde geliştirdiğim Inception projesi hakkında, konteynerleştirme ve mikroservis mimarisi konularını ele aldığım teknik yazı.
						</p>
						<div className="flex flex-wrap gap-1.5 mb-3 sm:mb-4">
							{['Docker', 'Containerization', 'DevOps', 'Microservices', 'NGINX', 'Docker Compose', '42 School'].map(t => (
								<span key={t} className="px-2 sm:px-2.5 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs sm:text-sm font-medium">{t}</span>
							))}
						</div>
						<a href="https://medium.com/@menasy/docker-42-inception-projesi-484e48ae543c" target="_blank" rel="noreferrer"
							className="inline-flex items-center gap-1.5 text-sm sm:text-base text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-semibold group-hover:underline">
							Yazıyı Oku
							<svg className="w-4 h-4 sm:w-4.5 sm:h-4.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
							</svg>
						</a>
					</div>
				</div>

				{/* Card 3 */}
				<div className="group relative">
					<div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg sm:rounded-xl blur-sm group-hover:blur-lg group-hover:from-purple-500/30 group-hover:to-pink-500/30 transition-all duration-500"></div>
					<div className="relative p-4 sm:p-5 bg-white/95 dark:bg-slate-800/95 backdrop-blur-sm rounded-lg sm:rounded-xl border border-purple-200/50 dark:border-purple-700/50 shadow-md group-hover:shadow-lg group-hover:-translate-y-1 transition-all duration-500">
						<div className="flex items-center gap-2 sm:gap-2.5 md:gap-3 mb-3 sm:mb-4">
							<div className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg sm:rounded-xl flex items-center justify-center shadow-md">
								<svg className="w-5 h-5 sm:w-5.5 sm:h-5.5 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
								</svg>
							</div>
							<h3 className="font-bold text-slate-900 dark:text-white text-base sm:text-lg md:text-xl leading-tight">BlockChain Teknolojisi ve Kur'an-ı Kerim'in Muhafaza Sistemi</h3>
						</div>
						<p className="text-xs sm:text-sm md:text-base text-slate-600 dark:text-slate-300 leading-relaxed mb-3 sm:mb-4">
							Blockchain teknolojisinin temel prensiplerini Kur'an-ı Kerim'in korunma sistemi ile karşılaştırdığım, iki farklı alan arasındaki benzerlikleri inceleyen analiz yazısı.
						</p>
						<div className="flex flex-wrap gap-1.5 mb-3 sm:mb-4">
							{['Blockchain', 'Technology', 'Web3', 'Analysis', 'Kuran-ı Kerim', 'İslam'].map(t => (
								<span key={t} className="px-2 sm:px-2.5 py-1 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 text-xs sm:text-sm font-medium">{t}</span>
							))}
						</div>
						<a href="https://medium.com/@menasy/blockchain-teknolojisi-ve-kuran-%C4%B1-kerim-in-korunmas%C4%B1-77c6c04726b8" target="_blank" rel="noreferrer"
							className="inline-flex items-center gap-1.5 text-sm sm:text-base text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 font-semibold group-hover:underline">
							Yazıyı Oku
							<svg className="w-4 h-4 sm:w-4.5 sm:h-4.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
							</svg>
						</a>
					</div>
				</div>

				{/* Card 4 - All Posts */}
				<div className="group relative">
					<div className="absolute inset-0 bg-gradient-to-br from-slate-500/20 to-gray-500/20 rounded-lg sm:rounded-xl blur-sm group-hover:blur-lg group-hover:from-slate-500/30 group-hover:to-gray-500/30 transition-all duration-500"></div>
					<div className="relative p-4 sm:p-5 bg-white/95 dark:bg-slate-800/95 backdrop-blur-sm rounded-lg sm:rounded-xl border border-slate-200/50 dark:border-slate-700/50 shadow-md group-hover:shadow-lg group-hover:-translate-y-1 transition-all duration-500">
						<div className="flex items-center gap-2 sm:gap-2.5 md:gap-3 mb-3 sm:mb-4">
							<div className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 bg-gradient-to-br from-slate-600 to-gray-700 rounded-lg sm:rounded-xl flex items-center justify-center shadow-md">
								<svg className="w-5 h-5 sm:w-5.5 sm:h-5.5 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
								</svg>
							</div>
							<h3 className="font-bold text-slate-900 dark:text-white text-base sm:text-lg md:text-xl leading-tight">Tüm Blog Yazılarım</h3>
						</div>
						<p className="text-xs sm:text-sm md:text-base text-slate-600 dark:text-slate-300 leading-relaxed mb-3 sm:mb-4">
							Yazılım geliştirme, teknoloji ve kişisel deneyimlerimi paylaştığım Medium blog yazılarımın tamamına buradan ulaşabilirsiniz.
						</p>
						<div className="flex flex-wrap gap-1.5 mb-3 sm:mb-4">
							{['All Posts', 'Technology', 'Experience', 'Knowledge Sharing'].map(t => (
								<span key={t} className="px-2 sm:px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-700/60 text-slate-700 dark:text-slate-300 text-xs sm:text-sm font-medium">{t}</span>
							))}
						</div>
						<a href="https://medium.com/@menasy" target="_blank" rel="noreferrer"
							className="inline-flex items-center gap-1.5 text-sm sm:text-base text-slate-600 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-300 font-semibold group-hover:underline">
							Medium Profilimi Ziyaret Et
							<svg className="w-4 h-4 sm:w-4.5 sm:h-4.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
							</svg>
						</a>
					</div>
				</div>
			</div>
		</section>
	);
}
