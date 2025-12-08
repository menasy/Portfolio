import React from "react";

export default function ContactCv() {
	const contactItems = [
		{
			icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg",
			title: "Email",
			description: "mehmetnasim42@gmail.com",
			link: "mailto:mehmetnasim42@gmail.com",
			color: "from-red-500 to-pink-500",
			borderColor: "border-red-400 dark:border-red-600"
		},
		{
			icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
			title: "GitHub",
			description: "Projelerim ve kod örnekleri",
			link: "https://github.com/menasy",
			color: "from-gray-700 to-slate-700",
			borderColor: "border-gray-500 dark:border-gray-700"
		},
		{
			icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg",
			title: "LinkedIn",
			description: "Profesyonel ağ ve kariyer",
			link: "https://linkedin.com/in/menasy",
			color: "from-blue-600 to-blue-700",
			borderColor: "border-blue-500 dark:border-blue-700"
		},
		{
			icon: "https://simpleicons.org/icons/medium.svg",
			title: "Medium",
			description: "Yazılarım ve teknik içerikler",
			link: "https://medium.com/@menasy",
			color: "from-green-600 to-emerald-600",
			borderColor: "border-green-500 dark:border-emerald-700"
		},
	];

	const cvItems = [
		{
			icon: (
				<span className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-purple-400 dark:border-purple-600 bg-gradient-to-br from-purple-100 to-indigo-100 dark:from-purple-900/30 dark:to-indigo-900/30">
					<svg className="w-6 h-6 text-purple-600 dark:text-purple-300" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
						<rect x="4" y="4" width="16" height="16" rx="3" stroke="currentColor" strokeWidth="2" fill="none" />
						<path d="M8 8h8M8 12h8M8 16h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
					</svg>
				</span>
			),
			title: "Türkçe CV",
			description: "PDF formatında detaylı özgeçmiş",
			link: "https://github.com/menasy/Portfolio/blob/main/MehmetNasimYilmazCv.pdf?raw=true",
			action: "İndir",
			borderColor: "border-purple-400 dark:border-purple-600"
		},
		{
			icon: (
				<span className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-slate-400 dark:border-slate-600 bg-gradient-to-br from-slate-100 to-gray-100 dark:from-slate-900/30 dark:to-gray-900/30">
					<svg className="w-6 h-6 text-slate-600 dark:text-slate-300" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
						<rect x="4" y="4" width="16" height="16" rx="3" stroke="currentColor" strokeWidth="2" fill="none" />
						<path d="M8 8h8M8 12h8M8 16h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
					</svg>
				</span>
			),
			title: "English CV",
			description: "Detailed resume in PDF format",
			link: "https://github.com/menasy/Portfolio/blob/main/MehmetNasimYilmazEnCv.pdf?raw=true",
			action: "Download",
			borderColor: "border-slate-400 dark:border-slate-600"
		},
	];

	return (
		<section className="max-w-5xl mx-auto px-4 sm:px-6">
			<div className="p-6 sm:p-8 bg-white dark:bg-slate-800 rounded-2xl sm:rounded-3xl border border-slate-200 dark:border-slate-700 shadow-lg hover:shadow-xl transition-all duration-300">
				{/* Modern Single Title */}
				<div className="text-center mb-12">
					<h2 className="text-4xl font-bold bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 bg-clip-text">
						💬 İletişim & CV
					</h2>
					<p className="text-base text-slate-600 dark:text-slate-400 max-w-xl mx-auto">
						Benimle iletişime geçmek veya özgeçmişimi indirmek için buradan
						ulaşabilirsiniz
					</p>
				</div>

				<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
					{/* İletişim ve Bağlantılar */}
					<div className="relative group/card">
						<div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl blur-sm group-hover/card:blur-lg transition-all duration-500"></div>
						<div className="relative p-5 sm:p-6 bg-white/95 dark:bg-slate-800/95 backdrop-blur-sm rounded-2xl shadow-lg group-hover/card:shadow-xl group-hover/card:-translate-y-2 transition-all duration-500 border border-cyan-200/50 dark:border-cyan-700/50">
							<div className="flex items-center gap-3 mb-6">
								<div className="w-8 h-8 flex items-center justify-center rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 text-white shadow-lg">
									<svg
										className="w-4 h-4"
										fill="none"
										stroke="currentColor"
										strokeWidth={2}
										viewBox="0 0 24 24"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
										/>
									</svg>
								</div>
								<h3 className="text-xl font-semibold text-slate-700 dark:text-slate-200">
									İletişim ve Bağlantılar
								</h3>
							</div>
							<div className="space-y-4">
								{contactItems.map((item, index) => (
									<a
										key={index}
										href={item.link}
										target="_blank"
										rel="noopener noreferrer"
										className="block group/item"
									>
										<div className={`flex items-center gap-4 p-4 rounded-xl border ${item.borderColor} bg-white/90 dark:bg-slate-800/90 shadow-sm hover:shadow-md transition-all duration-300 group-hover/item:-translate-y-1`}>
											<div className="w-12 h-12 flex items-center justify-center rounded-lg">
												<img
													src={item.icon}
													alt={item.title}
													className="w-6 h-6"
												/>
											</div>
											<div>
												<h4 className="font-medium text-slate-800 dark:text-slate-200">
													{item.title}
												</h4>
												<p className="text-sm text-slate-600 dark:text-slate-400">
													{item.description}
												</p>
											</div>
										</div>
									</a>
								))}
							</div>
						</div>
					</div>

					{/* CV İndir */}
					<div className="relative group/card">
						<div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-2xl blur-sm group-hover/card:blur-lg transition-all duration-500"></div>
						<div className="relative p-5 sm:p-6 bg-white/95 dark:bg-slate-800/95 backdrop-blur-sm rounded-2xl shadow-lg group-hover/card:shadow-xl group-hover/card:-translate-y-2 transition-all duration-500 border border-emerald-200/50 dark:border-emerald-700/50">
							<div className="flex items-center gap-3 mb-6">
								<div className="w-8 h-8 flex items-center justify-center rounded-lg bg-gradient-to-br from-emerald-500 to-teal-600 text-white shadow-lg">
									<svg
										className="w-4 h-4"
										fill="none"
										stroke="currentColor"
										strokeWidth={2}
										viewBox="0 0 24 24"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
										/>
									</svg>
								</div>
								<h3 className="text-xl font-semibold text-slate-700 dark:text-slate-200">
									CV İndir
								</h3>
							</div>
							<div className="space-y-4">
								{cvItems.map((item, index) => (
									<a
										key={index}
										href={item.link}
										target="_blank"
										rel="noopener noreferrer"
										className="block group/item"
										download
									>
										<div className={`flex items-center justify-between p-4 rounded-xl border ${item.borderColor} bg-white/90 dark:bg-slate-800/90 shadow-sm hover:shadow-md transition-all duration-300 group-hover/item:-translate-y-1`}>
											<div className="flex items-center gap-4">
												{item.icon}
												<div>
													<h4 className="font-medium text-slate-800 dark:text-slate-200">
														{item.title}
													</h4>
													<p className="text-sm text-slate-600 dark:text-slate-400">
														{item.description}
													</p>
												</div>
											</div>
											<span className="inline-flex items-center gap-1 px-3 py-1.5 text-sm rounded-lg bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-md">
												{item.action}
												<svg
													className="w-4 h-4"
													fill="none"
													stroke="currentColor"
													strokeWidth={2}
													viewBox="0 0 24 24"
												>
													<path
														strokeLinecap="round"
														strokeLinejoin="round"
														d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
													/>
												</svg>
											</span>
										</div>
									</a>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
	
