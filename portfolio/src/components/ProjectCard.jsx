import React, { useState } from 'react';

export default function ProjectCard({ title, link, summary, media, features, technologies, categories }) {
	const [isExpanded, setIsExpanded] = useState(false);

	return (
		<div className="group block relative h-full">
			{/* Card container with simplified design for wrapper compatibility */}
			<div className="relative h-full overflow-hidden">

			{/* Media cover - Full visibility for all images - No zoom on hover for stability */}
			{media && (
				<div className="relative overflow-hidden cursor-pointer rounded-t-xl sm:rounded-t-2xl"
					onClick={(e) => {
							e.stopPropagation();
							const video = e.currentTarget.querySelector('video');
							if (video) {
								if (video.paused) {
									video.play().catch(() => { });
								} else {
									video.pause();
								}
							}
						}}>
						{/* Removed group-hover:scale for stable hover */}
						<div className="h-full w-full [&_img]:w-full [&_img]:h-auto [&_img]:object-contain [&_video]:w-full [&_video]:h-full [&_video]:object-cover transition-transform duration-700">
							{React.isValidElement(media) && media.type === 'video' ?
								React.cloneElement(media, {
									autoPlay: true,
									muted: true,
									loop: true,
									playsInline: true,
									preload: 'metadata',
									style: { pointerEvents: 'none' },
									className: 'w-full h-full object-cover'
								}) :
								React.isValidElement(media) && media.props.children && Array.isArray(media.props.children) ?
									React.cloneElement(media, {
										children: media.props.children.map(child =>
											React.isValidElement(child) && child.type === 'video' ?
												React.cloneElement(child, {
													autoPlay: true,
													muted: true,
													loop: true,
													playsInline: true,
													preload: 'metadata',
													style: { pointerEvents: 'none' },
													className: 'w-full h-full object-cover'
												}) : child
										)
									}) :
									media
							}
						</div>

						{/* Overlay gradient - stable, no hover glow */}
						<div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none"></div>

						{/* Hover indicator */}
						<div className="absolute bottom-2 sm:bottom-3 right-2 sm:right-3">
							<div className="flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-full bg-slate-900/90 backdrop-blur-sm text-white/95 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
								<span className="hidden sm:inline">Projeyi Görüntüle</span>
								<svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
								</svg>
							</div>
						</div>
					</div>
				)}

				{/* Body */}
				<div className="relative p-4 sm:p-5 space-y-4">
					{/* Header with title - Always visible */}
					<div className="flex items-start justify-between gap-3">
						<div className="flex-1">
							<a
								href={link}
								target="_blank"
								rel="noreferrer"
								className="block group/title"
							>
								<h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors duration-300 leading-tight mb-2">
									{title}
								</h3>
							</a>
							{/* Multiple categories display - Always visible */}
						{categories && categories.length > 0 && (
							<div className="flex flex-wrap gap-1.5">
								{categories.map((cat, idx) => (
									<span
										key={idx}
										className="inline-flex items-center gap-1.5 text-sm font-medium px-2.5 py-1 rounded-full bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-700 hover:from-blue-100 hover:to-purple-100 dark:hover:from-blue-900/50 dark:hover:to-purple-900/50 transition-all duration-200"
									>
										<div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"></div>
											{cat}
										</span>
									))}
								</div>
							)}
						</div>
					</div>

					{/* Expander Toggle Button */}
					{(summary || features || technologies) && (
						<button
							onClick={() => setIsExpanded(!isExpanded)}
							className="w-full flex items-center justify-center gap-2 p-3 sm:p-4 rounded-xl bg-gradient-to-r from-slate-100/80 to-slate-200/80 dark:from-slate-800 dark:to-slate-700 border border-slate-300 dark:border-slate-600 hover:from-slate-200/90 hover:to-slate-300/90 dark:hover:from-slate-700 dark:hover:to-slate-600 transition-all duration-300 group/expander"
						>
							<span className="text-base sm:text-lg font-bold text-slate-900 dark:text-slate-200">
								{isExpanded ? 'Proje Detaylarını Gizle' : 'Proje Açıklamasını Görüntüle'}
							</span>
							<svg className={`w-5 h-5 text-slate-500 dark:text-slate-400 group-hover/expander:text-blue-500 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
							</svg>
						</button>
					)}

					{/* Expandable Content - Summary, Features, Technologies */}
					<div className={`overflow-hidden transition-all duration-500 ease-in-out ${isExpanded ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'}`}>
						<div className="space-y-5 pt-2">
							{/* Summary */}
							{summary && (
								<div className="relative">
									<div className="relative p-4 sm:p-5 bg-slate-100/70 dark:bg-slate-800 rounded-xl border border-slate-300 dark:border-slate-700">
										<div className="flex items-start gap-3">
											<div className="flex-shrink-0 w-1 h-full min-h-[40px] bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"></div>
											<p className="text-base sm:text-lg text-slate-900 dark:text-slate-200 leading-relaxed font-semibold">{summary}</p>
										</div>
									</div>
								</div>
							)}

							{/* Features and Technologies */}
							{(features || technologies) && (
								<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
									{/* Features */}
									{features && (
										<div className="space-y-3 p-4 bg-slate-100/70 dark:bg-slate-800/50 rounded-xl border border-slate-300 dark:border-slate-700">
											<div className="flex items-center gap-2">
												<div className="w-2 h-2 rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500"></div>
												<h4 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white uppercase tracking-wide">Özellikler</h4>
											</div>
											<ul className="space-y-2">
												{features.map((f, idx) => (
													<li key={idx} className="group/feature flex items-start gap-3 p-2 rounded-lg hover:bg-slate-200/80 dark:hover:bg-slate-700/50 transition-colors duration-200">
														<div className="flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-br from-emerald-500 to-cyan-500 flex items-center justify-center mt-0.5">
															<svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
																<path fillRule="evenodd" d="M16.704 5.29a1 1 0 0 1 .006 1.414l-7.028 7.07a1 1 0 0 1-1.42.005L3.29 8.82a1 1 0 1 1 1.42-1.41l3.05 3.07 6.318-6.36a1 1 0 0 1 1.626.17z" clipRule="evenodd" />
															</svg>
														</div>
														<span className="text-base sm:text-lg text-slate-900 dark:text-slate-200 leading-relaxed font-semibold">{f}</span>
													</li>
												))}
											</ul>
										</div>
									)}

									{/* Technologies */}
									{technologies && (
										<div className="space-y-3 p-4 bg-slate-100/70 dark:bg-slate-800/50 rounded-xl border border-slate-300 dark:border-slate-700">
											<div className="flex items-center gap-2">
												<div className="w-2 h-2 rounded-full bg-gradient-to-r from-orange-500 to-red-500"></div>
												<h4 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white uppercase tracking-wide">Teknolojiler</h4>
											</div>
											<div className="space-y-2">
												{technologies.map((t, idx) => (
													<div
														key={idx}
														className="group/tech flex items-center gap-3 p-2.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 hover:bg-slate-200/80 dark:hover:bg-slate-700 hover:border-slate-400 dark:hover:border-slate-600 transition-all duration-200"
													>
														<div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-orange-500 to-red-500"></div>
														<span className="flex-1 text-base sm:text-lg font-bold text-slate-900 dark:text-slate-200">{t}</span>
													</div>
												))}
											</div>
										</div>
									)}
								</div>
							)}
						</div>
					</div>

					{/* Bottom action - Always visible */}
					<div className="pt-2 flex justify-end">
						<a
							href={link}
							target="_blank"
							rel="noreferrer"
							className="group/action inline-flex items-center gap-2 text-sm sm:text-base font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-200"
						>
							<span>Projeye Git</span>
							<svg className="w-4 h-4 group-hover/action:translate-x-0.5 group-hover/action:-translate-y-0.5 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
							</svg>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}


