import React from 'react';

export default function Comminication() {
	const contactItems = [
		{
			icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg',
			title: 'Email',
			description: 'mehmetnasim42@gmail.com',
			link: 'mailto:mehmetnasim42@gmail.com',
			color: 'from-red-500 to-pink-500',
			bgColor: 'from-red-50 to-pink-50 dark:from-red-900/20 dark:to-pink-900/20',
			borderColor: 'border-red-200 dark:border-red-700'
		},
		{
			icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
			title: 'GitHub',
			description: 'Projelerim ve kod örnekleri',
			link: 'https://github.com/menasy',
			color: 'from-gray-600 to-slate-700',
			bgColor: 'from-gray-50 to-slate-50 dark:from-gray-900/20 dark:to-slate-900/20',
			borderColor: 'border-gray-200 dark:border-gray-700'
		},
		{
			icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg',
			title: 'LinkedIn',
			description: 'Profesyonel ağ ve kariyer',
			link: 'https://linkedin.com/in/menasy',
			color: 'from-blue-600 to-blue-700',
			bgColor: 'from-blue-50 to-blue-50 dark:from-blue-900/20 dark:to-blue-900/20',
			borderColor: 'border-blue-200 dark:border-blue-700'
		},
		{
			icon: 'https://simpleicons.org/icons/medium.svg',
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
			icon: '📄',
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
			{/* Modern Section Header */}
			<div className="text-center mb-12">
				<div className="inline-flex items-center gap-3 mb-4">
					<div className="w-8 h-8 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
						<svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
						</svg>
					</div>
					<span className="text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider">İletişim</span>
				</div>
				<h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
					📧 İletişim & CV
				</h2>
				<p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
					Benimle iletişime geçmek için sosyal platformları kullanabilirsiniz
				</p>
			</div>

			{/* Main Content Grid */}
			<div className="grid grid-cols-1 xl:grid-cols-2 gap-8 items-stretch">

				{/* İletişim ve Bağlantılar - Sol */}
				<div className="relative group h-full">
					{/* Background Animation */}
					<div className="absolute inset-0 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 rounded-3xl opacity-20 animate-pulse blur-sm"></div>
					<div className="absolute inset-0 bg-gradient-to-tr from-blue-400 via-purple-500 to-pink-500 rounded-3xl opacity-10 animate-pulse delay-1000 blur-lg"></div>

					<div className="relative p-8 bg-white dark:bg-slate-800 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-lg hover:shadow-xl transition-all duration-300 h-full">

						{/* Section Header */}
						<div className="flex items-center gap-4 mb-8">
							<div className="p-3 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 shadow-xl">
								<svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
								</svg>
							</div>
							<div>
								<h3 className="text-2xl font-bold text-slate-900 dark:text-white">İletişim ve Bağlantılar</h3>
								<p className="text-sm text-slate-500 dark:text-slate-400">Sosyal platformlarım</p>
							</div>
						</div>

						<div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full mb-8"></div>

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
									<div className={`p-5 rounded-2xl bg-gradient-to-r ${item.bgColor} border ${item.borderColor} hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group-hover/item:scale-[1.02] cursor-pointer`}>
										<div className="flex items-center justify-between">
											<div className="flex items-center gap-4">
												<div className={`relative p-4 rounded-2xl bg-gradient-to-br ${item.color} text-white shadow-xl group-hover/item:scale-110 transition-transform duration-300 overflow-hidden`}>
													<div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>
													<img src={item.icon} alt={item.title} className="relative w-6 h-6 filter brightness-0 invert" />
												</div>
												<div>
													<h4 className="font-semibold text-slate-900 dark:text-white text-lg">{item.title}</h4>
													<p className="text-sm text-slate-600 dark:text-slate-400">{item.description}</p>
												</div>
											</div>
											<div className="flex flex-col items-center gap-1 opacity-0 group-hover/item:opacity-100 transition-opacity duration-300">
												<div className="w-2 h-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500"></div>
												<div className="w-1 h-1 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"></div>
											</div>
										</div>
									</div>
								</a>
							))}
						</div>
					</div>
				</div>

				{/* CV İndir - Sağ */}
				<div className="relative group h-full">
					{/* Background Animation */}
					<div className="absolute inset-0 bg-gradient-to-br from-emerald-400 via-teal-500 to-cyan-600 rounded-3xl opacity-20 animate-pulse blur-sm delay-500"></div>
					<div className="absolute inset-0 bg-gradient-to-tr from-green-400 via-emerald-500 to-teal-500 rounded-3xl opacity-10 animate-pulse delay-1500 blur-lg"></div>

					<div className="relative p-8 bg-white dark:bg-slate-800 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-lg hover:shadow-xl transition-all duration-300 h-full">

						{/* Section Header */}
						<div className="flex items-center gap-4 mb-8">
							<div className="p-3 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 shadow-xl">
								<svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
								</svg>
							</div>
							<div>
								<h3 className="text-2xl font-bold text-slate-900 dark:text-white">CV İndir</h3>
								<p className="text-sm text-slate-500 dark:text-slate-400">PDF formatında özgeçmiş</p>
							</div>
						</div>

						<div className="w-16 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full mb-8"></div>

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
									<div className={`p-6 rounded-2xl bg-gradient-to-r ${item.bgColor} border ${item.borderColor} hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group-hover/item:scale-[1.02] cursor-pointer`}>
										<div className="flex items-center justify-between">
											<div className="flex items-center gap-4">
												<div className={`relative p-4 rounded-2xl bg-gradient-to-br ${item.color} text-white shadow-xl group-hover/item:scale-110 transition-transform duration-300 overflow-hidden`}>
													<div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>
													<span className="relative text-2xl filter drop-shadow-lg">{item.icon}</span>
												</div>
												<div>
													<h4 className="text-lg font-semibold text-slate-900 dark:text-white">{item.title}</h4>
													<p className="text-sm text-slate-600 dark:text-slate-400">{item.description}</p>
												</div>
											</div>
											<div className="text-right">
												<span className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r ${item.color} text-white font-medium shadow-lg group-hover/item:shadow-xl transition-all duration-300`}>
													{item.action}
													<svg className="w-4 h-4 group-hover/item:translate-y-0.5 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
														<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
													</svg>
												</span>
											</div>
										</div>
									</div>
								</a>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}