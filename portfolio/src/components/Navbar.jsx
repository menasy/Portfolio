import React, { useEffect, useMemo, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const navItems = [
	{ to: '/', label: 'Ana Sayfa' },
	{ to: '/projects', label: 'Projeler' },
	{ to: '/about', label: 'Hakkımda' },
	{ to: '/contact', label: 'İletişim' }
];

export default function Navbar() {
	const [isOpen, setIsOpen] = useState(false);
	const getInitialDark = () => {
		const stored = localStorage.getItem('theme');
		if (stored) return stored === 'dark';
		return window.matchMedia('(prefers-color-scheme: dark)').matches;
	};
	const [dark, setDark] = useState(getInitialDark);
	const { pathname } = useLocation();

	useEffect(() => {
		if (dark) {
			document.documentElement.classList.add('dark');
			localStorage.setItem('theme', 'dark');
		} else {
			document.documentElement.classList.remove('dark');
			localStorage.setItem('theme', 'light');
		}
	}, [dark]);

	useEffect(() => {
		setIsOpen(false);
	}, [pathname]);

	useEffect(() => {
		if (!isOpen) return;
		const handleKeyDown = (event) => {
			if (event.key === 'Escape') {
				setIsOpen(false);
			}
		};
		window.addEventListener('keydown', handleKeyDown);
		return () => window.removeEventListener('keydown', handleKeyDown);
	}, [isOpen]);

	const navLinkClasses = useMemo(
		() => ({
			desktop: 'px-3 py-1.5 text-sm rounded-md transition font-medium',
			mobile: 'block py-2 text-sm font-medium rounded-md px-3 transition-colors'
		}),
		[]
	);

	return (
		<header className="sticky top-0 z-40 border-b border-slate-200/60 bg-white/70 backdrop-blur dark:border-slate-700/60 dark:bg-slate-900/50">
			<div className="container mx-auto flex h-12 items-center justify-between px-4 sm:h-14 sm:px-6 lg:px-8">
				<Link to="/" className="font-extrabold tracking-tight text-base sm:text-lg">
					MeNasy
				</Link>
				<nav className="hidden items-center gap-1 rounded-lg bg-slate-100/60 p-0.5 dark:bg-slate-800/60 md:flex" aria-label="Ana menü">
					{navItems.map((item) => {
						const isActive = pathname === item.to;
						return (
							<Link
								key={item.to}
								to={item.to}
								aria-current={isActive ? 'page' : undefined}
								className={`${navLinkClasses.desktop} ${isActive
									? 'bg-white text-slate-900 shadow-sm dark:bg-slate-700 dark:text-white'
									: 'text-slate-600 hover:bg-white/90 dark:text-slate-200 dark:hover:bg-slate-700/60'}`}
							>
								{item.label}
							</Link>
						);
					})}
				</nav>
				<div className="flex items-center gap-1.5">
					<button
						onClick={() => setDark(v => !v)}
						className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-slate-300 text-sm hover:bg-slate-50 dark:border-slate-700 dark:hover:bg-slate-800"
						aria-label="Tema"
						aria-pressed={dark}
					>
						{dark ? (
							<span>🌙</span>
						) : (
							<span>☀️</span>
						)}
					</button>
					<button
						className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-slate-300 text-sm md:hidden dark:border-slate-700"
						onClick={() => setIsOpen(v => !v)}
						aria-label="Menüyü Aç/Kapat"
						aria-expanded={isOpen}
						aria-controls="mobile-navigation"
					>
						<span aria-hidden="true">{isOpen ? '✕' : '☰'}</span>
					</button>
				</div>
			</div>
			{isOpen && (
				<nav id="mobile-navigation" className="border-t border-slate-200 bg-white/80 dark:border-slate-700 dark:bg-slate-900/80 md:hidden" aria-label="Mobil menü">
					<div className="container mx-auto flex flex-col gap-1 px-4 py-2 text-sm">
						{navItems.map((item) => {
							const isActive = pathname === item.to;
							return (
								<Link
									key={item.to}
									to={item.to}
									aria-current={isActive ? 'page' : undefined}
									className={`${navLinkClasses.mobile} ${isActive
										? 'bg-slate-100 text-slate-900 dark:bg-slate-800/80 dark:text-white'
										: 'text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800/70'}`}
								>
									{item.label}
								</Link>
							);
						})}
					</div>
				</nav>
			)}
		</header>
	);
}

