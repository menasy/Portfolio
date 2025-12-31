import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import {
	AboutSectionLazy as AboutSection,
	BlogSectionLazy as BlogSection,
	ContactCvLazy as ContactCv,
	EducationSectionLazy as EducationSection,
	ExperienceSectionLazy as ExperienceSection,
	TechSkillsComboLazy as TechSkillsCombo,
	ToolsTechnologiesLazy as ToolsTechnologies,
} from '../components/lazySections';
import Divider from '../components/partial/Divider';
import RevealOnScroll from '../components/RevealOnScroll';
import SectionReveal from '../components/SectionReveal';

export default function Home() {
	const { pathname } = useLocation();
	const [typingText, setTypingText] = useState('');
	const roles = ['Software Developer', 'Web Developer', 'Mobile Developer'];

	useEffect(() => {
		let roleIndex = 0;
		let charIndex = 0;
		let isDeleting = false;
		let raf;

		const step = () => {
			const currentRole = roles[roleIndex];
			if (isDeleting) {
				setTypingText(currentRole.substring(0, charIndex - 1));
				charIndex--;
			} else {
				setTypingText(currentRole.substring(0, charIndex + 1));
				charIndex++;
			}
			if (!isDeleting && charIndex === currentRole.length) {
				setTimeout(() => { isDeleting = true; }, 1200);
			} else if (isDeleting && charIndex === 0) {
				isDeleting = false;
				roleIndex = (roleIndex + 1) % roles.length;
			}
			raf = setTimeout(step, isDeleting ? 55 : 120);
		};
		const start = setTimeout(step, 500);
		return () => { clearTimeout(start); clearTimeout(raf); };
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	// Sayfa yönlendirmelerinde en başa git
	useEffect(() => {
		window.scrollTo(0, 0);
	}, [pathname]);

		return (
			<div className="space-y-4 sm:space-y-6">
				<RevealOnScroll animation="scale" delay={0}>
				<header className="text-center pt-4 sm:pt-6 md:pt-8 relative px-4">
				{/* Animated background elements */}
				<div className="absolute inset-0 -z-10">
					<div className="absolute top-12 sm:top-20 left-1/4 w-20 h-20 sm:w-32 sm:h-32 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-xl animate-pulse"></div>
					<div className="absolute top-24 sm:top-40 right-1/4 w-16 h-16 sm:w-24 sm:h-24 bg-gradient-to-br from-emerald-400/20 to-cyan-400/20 rounded-full blur-xl animate-pulse delay-1000"></div>
				</div>

				{/* Profile section with modern layout */}
				<div className="relative group mb-6 sm:mb-8 md:mb-10">
					<div className="relative mx-auto w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 mb-4 sm:mb-6">
						<div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-emerald-500 animate-spin-slow opacity-75 blur-sm"></div>
						<img
							src="https://raw.githubusercontent.com/menasy/Portfolio/main/newProfil.jpeg"
							alt="Profil Fotoğrafı"
							className="relative w-full h-full rounded-full object-cover border-2 sm:border-3 md:border-4 border-white dark:border-slate-800 shadow-xl group-hover:scale-105 transition-transform duration-300"
							loading="eager"
							fetchPriority="high"
						/>
					</div>

					<div className="space-y-3 sm:space-y-4">
						<h1 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 dark:from-white dark:via-blue-100 dark:to-white bg-clip-text text-transparent leading-tight px-2">
							Mehmet Nasim Yılmaz
						</h1>

						<div className="flex items-center justify-center gap-2">
							<div className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-700 hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-colors text-sm sm:text-base">
								<div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-500 rounded-full animate-pulse"></div>
								<a href="https://github.com/menasy" target="_blank" rel="noreferrer" className="text-blue-600 dark:text-blue-400 font-medium">
									@MeNasy
								</a>
							</div>
						</div>

						<div className="h-auto">
							<div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/30 dark:to-blue-900/30 border border-purple-200 dark:border-purple-700">
								<div className="w-0.5 sm:w-1 h-4 sm:h-5 bg-purple-500 rounded-full animate-pulse"></div>
								<span className="text-sm sm:text-base md:text-lg font-medium text-purple-700 dark:text-purple-300 min-w-[200px] sm:min-w-[240px] md:min-w-[280px] text-left">
									{typingText}
								</span>
							</div>
						</div>

						<div className="mt-4 sm:mt-5 md:mt-6 relative max-w-lg sm:max-w-xl mx-auto">
							{/* Simple quote container */}
							<div className="relative p-4 sm:p-5 md:p-6 bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm">
								{/* Quote text */}
								<blockquote className="text-center">
									<p className="text-sm sm:text-base md:text-lg font-medium text-slate-800 dark:text-slate-200 leading-relaxed italic">
										"Bilmediğim hiçbir şey yok, sadece öğrenmedim şeyler var."
									</p>
								</blockquote>
							</div>
						</div>
					</div>
				</div>
			</header>
			</RevealOnScroll>

			<SectionReveal animation="blur" delay={200} label="Hakkımda">
				<AboutSection />
			</SectionReveal>

			<Divider />

			<SectionReveal animation="fade-left" label="Eğitim">
				<EducationSection />
			</SectionReveal>

			<Divider />

			<SectionReveal animation="fade-right" label="Deneyimler">
				<ExperienceSection />
			</SectionReveal>

			<Divider />

			<SectionReveal animation="bounce" label="Blog Yazılarım">
				<BlogSection />
			</SectionReveal>

			<Divider />

			<SectionReveal animation="slide-rotate" label="Teknik Beceriler">
				<TechSkillsCombo />
			</SectionReveal>

			<Divider />

			<SectionReveal animation="zoom-out" label="Araçlar ve Teknolojiler">
				<ToolsTechnologies />
			</SectionReveal>

			<Divider />

			<SectionReveal animation="flip" label="İletişim ve CV">
				<ContactCv />
			</SectionReveal>
		</div>
	);
}

