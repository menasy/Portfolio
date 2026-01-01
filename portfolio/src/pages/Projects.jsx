import { lazy, Suspense, useCallback, useMemo, useState, useEffect } from 'react';
import { featuredProjects, otherProjects } from '../data/projects';
import { useLocation } from 'react-router-dom';
import Divider from '../components/partial/Divider';
import RevealOnScroll from '../components/RevealOnScroll';
import LoadingState from '../components/LoadingState';
import '../styles/projects.css';

const ProjectCard = lazy(() => import('../components/ProjectCard'));

const categoryList = [
	'All',
	'Full Stack',
	'Mobile Application Development',
	'Backend Development',
	'DevOps / Containerization',
	'System Programming',
	'Game Development',
	'Blockchain Development',
	'Concurrent Programming',
	'Object-Oriented Programming',
	'Frontend Development',
	'Automation',
	'Algorithms & Data Structures',
	'Desktop Application Development',
	'Network Engineering',
	'System Administration',
	'Library Development',
	'Data Science',
	'Media Streaming'
];

export default function Projects() {
	const [active, setActive] = useState('All');
	const location = useLocation();

	// Reset to 'All' when navigating to projects page
	useEffect(() => {
		if (location.pathname === '/projects') {
			setActive('All');
		}
	}, [location]);

	// Helper function to check if a project belongs to a category
	const projectMatchesCategory = useCallback((project, category) => {
		if (category === 'All') return true;
		return project.categories && project.categories.includes(category);
	}, []);

	// Filter projects based on selected category
	const filteredFeatured = useMemo(() => {
		return featuredProjects.filter(p => projectMatchesCategory(p, active));
	}, [active, projectMatchesCategory]);

	const filteredOthers = useMemo(() => {
		return otherProjects.filter(p => projectMatchesCategory(p, active));
	}, [active, projectMatchesCategory]);

	const resolveGridClass = (count) =>
		count === 1 ? 'project-grid project-grid--single' : 'project-grid';

		return (
			<div className="space-y-8">
				<RevealOnScroll animation="scale" delay={0}>
				<div className="text-center">
				<h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 dark:from-white dark:via-blue-100 dark:to-white bg-clip-text text-transparent mb-8">
					Projelerim
				</h1>

				{/* Category Filter */}
				<nav className="category-scroll mb-8" aria-label="Proje kategorileri">
					{categoryList.map(cat => (
						<button
							key={cat}
							type="button"
							onClick={() => setActive(cat)}
							aria-pressed={active === cat}
							className={`whitespace-nowrap rounded-full border px-4 py-2 text-sm font-medium transition-all duration-300 ${active === cat
									? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white border-transparent shadow-lg scale-105'
									: 'bg-white/80 dark:bg-slate-800/80 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700/70 hover:border-slate-300 dark:hover:border-slate-600'
								}`}
						>
							{cat}
						</button>
					))}
				</nav>
			</div>
			</RevealOnScroll>

			{/* Featured Projects - Enhanced Design */}
			{filteredFeatured.length > 0 && (
				<section id="one-cikan-projeler" className="space-y-6">
					<RevealOnScroll animation="blur" delay={100}>
					<div className="text-center">
						<div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border border-blue-200 dark:border-blue-700 mb-6 shadow-lg">
							<div className="w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
							<span className="text-base font-semibold text-blue-700 dark:text-blue-300 uppercase tracking-wide">Öne Çıkan Projelerim</span>
						</div>
						<p className="text-slate-600 dark:text-slate-300 max-w-xl mx-auto">
							Tüm projelerimin kodlarına ve daha detaylı açıklamalarına <a href="https://github.com/menasy?tab=repositories" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-medium hover:underline transition-colors" target="_blank" rel="noreferrer">GitHub</a> sayfamdan ulaşabilirsiniz.
						</p>
					</div>
					</RevealOnScroll>

					<Suspense fallback={<LoadingState label="Projeler yükleniyor..." variant="section" />}>
						{/* StreamApp - Full Width Card (Alone, Col-span-2) */}
						{filteredFeatured.filter(p => p.title === 'StreamApp').map((p) => (
							<div key={p.title} className="mb-8">
								<RevealOnScroll animation="fade-up" delay={100}>
                                                                        <ProjectCard {...p} />
								</RevealOnScroll>
							</div>
						))}

						{/* Regular Featured Projects (2-Column Grid) - Excluding StreamApp */}
						{filteredFeatured.filter(p => p.title !== 'StreamApp').length > 0 && (
							<div className={resolveGridClass(filteredFeatured.filter(p => p.title !== 'StreamApp').length)}>
								{filteredFeatured.filter(p => p.title !== 'StreamApp').map((p, index) => (
									<RevealOnScroll key={p.title} animation="fade-up" delay={100 + (index * 100)}>
                                                                                <ProjectCard {...p} />
									</RevealOnScroll>
								))}
							</div>
						)}
					</Suspense>
				</section>
			)}

			{/* Divider between sections */}
			{filteredFeatured.length > 0 && filteredOthers.length > 0 && (
				<Divider />
			)}

			{/* Other Projects - Enhanced Design */}
			{filteredOthers.length > 0 && (
				<section id="diger-projeler" className="space-y-8">
					<RevealOnScroll animation="flip" delay={0}>
					<div className="text-center">
						<div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-emerald-50 to-cyan-50 dark:from-emerald-900/20 dark:to-cyan-900/20 border border-emerald-200 dark:border-emerald-700 mb-6 shadow-lg">
							<span className="text-base font-semibold text-emerald-700 dark:text-emerald-300 uppercase tracking-wide">Diğer Projelerim</span>
						</div>
					</div>
					</RevealOnScroll>

					<Suspense fallback={<LoadingState label="Projeler yükleniyor..." variant="section" />}>
						<div className={resolveGridClass(filteredOthers.length)}>
							{filteredOthers.map((p, index) => (
								<RevealOnScroll key={p.title} animation="fade-down" delay={100 + (index * 80)}>
									<div className="group relative">
										{/* Enhanced background effects */}
										<div className="absolute inset-0 bg-gradient-to-br from-emerald-500/15 to-cyan-500/15 rounded-xl sm:rounded-2xl blur-sm group-hover:blur-md transition-all duration-500"></div>
										<div className="absolute inset-0 bg-gradient-to-br from-emerald-400/5 to-cyan-400/5 rounded-xl sm:rounded-2xl group-hover:scale-[1.02] transition-transform duration-500"></div>

										<div className="relative rounded-xl sm:rounded-2xl border border-emerald-200/40 dark:border-emerald-700/40 bg-white/95 dark:bg-slate-800/95 p-4 md:p-5 shadow-sm transition-all duration-500 group-hover:-translate-y-1 group-hover:shadow-lg">

											{/* Enhanced Header */}
											<div className="mb-4 flex items-start justify-between gap-3">
												<div className="flex flex-1 items-start gap-3">
													<div className="flex-1">
														<a
															href={p.link}
															target="_blank"
															rel="noreferrer"
															className="block group/title"
														>
															<h3 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-slate-900 via-emerald-800 to-slate-900 dark:from-white dark:via-emerald-200 dark:to-white bg-clip-text text-transparent group-hover/title:from-emerald-600 group-hover/title:via-cyan-600 group-hover/title:to-emerald-600 dark:group-hover/title:from-emerald-300 dark:group-hover/title:via-cyan-300 dark:group-hover/title:to-emerald-300 transition-all duration-300 leading-snug mb-2">
																{p.title}
															</h3>
														</a>
														{/* Enhanced categories display */}
														<div className="flex flex-wrap gap-1.5">
															{p.categories.map((cat, idx) => (
																<span
																	key={idx}
																	className="inline-flex items-center gap-1.5 rounded-full border border-emerald-200 dark:border-emerald-700 bg-gradient-to-r from-emerald-50 to-cyan-50 dark:from-emerald-900/40 dark:to-cyan-900/40 px-2.5 py-1 text-xs font-medium text-emerald-700 dark:text-emerald-300 transition-all duration-200 hover:-translate-y-0.5 hover:border-emerald-300 dark:hover:border-emerald-600 hover:shadow-md"
																>
																	<div className="h-1.5 w-1.5 rounded-full bg-emerald-500"></div>
																	{cat}
																</span>
															))}
														</div>
													</div>
												</div>
											</div>

											{/* Enhanced Description */}
											<div className="mb-4">
												<div className="relative pl-6">
													<div className="absolute left-0 top-0 h-full w-1 rounded-full bg-gradient-to-b from-emerald-500 to-cyan-500 shadow-sm"></div>
													<p className="text-sm sm:text-base leading-relaxed text-slate-700 dark:text-slate-300">
														{p.description}
													</p>
												</div>
											</div>

											{/* Enhanced Technologies */}
											<div className="space-y-3">
												<div className="flex items-center gap-3">
													<div className="h-3 w-3 rounded-full bg-gradient-to-r from-slate-500 to-slate-600 shadow-sm"></div>
													<h4 className="text-sm font-bold uppercase tracking-wide text-slate-900 dark:text-white">
														Teknolojiler
													</h4>
												</div>
												<div className="space-y-1.5">
													{p.technologies.map((t, idx) => (
														<div
															key={idx}
															className="group/tech flex items-center gap-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-700/50 p-2.5 transition-all duration-200 hover:-translate-y-0.5 hover:border-slate-300 dark:hover:border-slate-600 hover:bg-white dark:hover:bg-slate-700 hover:shadow-sm"
														>
															<div className="h-2 w-2 rounded-full bg-gradient-to-r from-slate-400 to-slate-500 transition-all duration-200 group-hover/tech:from-emerald-500 group-hover/tech:to-cyan-500"></div>
															<span className="flex-1 text-sm font-medium text-slate-700 dark:text-slate-300 transition-colors duration-200 group-hover/tech:text-slate-900 dark:group-hover/tech:text-white">
																{t}
															</span>
														</div>
													))}
												</div>
											</div>

											{/* Enhanced Bottom action */}
											<div className="flex justify-end pt-4">
												<a
													href={p.link}
													target="_blank"
													rel="noreferrer"
													className="group/action inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 px-5 py-2.5 font-semibold text-white shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:from-emerald-600 hover:to-cyan-600 hover:shadow-lg"
												>
													<span>Projeye Git</span>
													<svg className="h-5 w-5 transition-transform duration-200 group-hover/action:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
														<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
													</svg>
												</a>
											</div>
										</div>
									</div>
								</RevealOnScroll>
							))}
						</div>
					</Suspense>
				</section>
			)}

			{/* No projects message */}
			{filteredFeatured.length === 0 && filteredOthers.length === 0 && (
				<RevealOnScroll animation="fade-up" delay={0}>
				<div className="text-center py-16">
					<div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-700 dark:to-slate-800 flex items-center justify-center">
						<svg className="w-8 h-8 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
						</svg>
					</div>
					<h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
						Bu kategoride proje bulunamadı
					</h3>
					<p className="text-slate-600 dark:text-slate-400">
						Başka bir kategori seçerek projelerimi inceleyebilirsiniz.
					</p>
				</div>
				</RevealOnScroll>
			)}
		</div>
	);
}
