import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
const [isOpen, setIsOpen] = useState(false);
const getInitialDark = () => {
  // Check localStorage first
  const stored = localStorage.getItem('theme');
  if (stored) return stored === 'dark';
  // Fallback to system preference
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

	return (
		<header className="sticky top-0 z-40 backdrop-blur border-b border-slate-200/60 dark:border-slate-700/60 bg-white/70 dark:bg-slate-900/50">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
				<Link to="/" className="font-extrabold tracking-tight text-xl">
					MeNasy
				</Link>
				<nav className="hidden md:flex items-center gap-1 rounded-lg p-1 bg-slate-100/60 dark:bg-slate-800/60">
					{[ 
						{ to: '/', label: 'Ana Sayfa' },
						{ to: '/projects', label: 'Projeler' },
						{ to: '/about', label: 'Hakkımda' },
						{ to: '/contact', label: 'İletişim' }
					].map((item) => (
						<Link key={item.to} to={item.to} className="px-3 py-1.5 rounded-md hover:bg-white dark:hover:bg-slate-700/60 transition">
							{item.label}
						</Link>
					))}
				</nav>
				<div className="flex items-center gap-2">
					<button
						onClick={() => setDark(v => !v)}
						className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-slate-300 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800"
						aria-label="Tema"
					>
						{dark ? (
							<span>🌙</span>
						) : (
							<span>☀️</span>
						)}
					</button>
					<button
						className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-md border border-slate-300 dark:border-slate-700"
						onClick={() => setIsOpen(v => !v)}
						aria-label="Menü"
					>
						☰
					</button>
				</div>
			</div>
			{isOpen && (
				<div className="md:hidden border-t border-slate-200 dark:border-slate-700">
					<div className="container mx-auto px-4 py-3 flex flex-col gap-3">
						<Link to="/" className="hover:text-sky-600">Ana Sayfa</Link>
						<Link to="/projects" className="hover:text-sky-600">Projeler</Link>
						<Link to="/about" className="hover:text-sky-600">Hakkımda</Link>
						<Link to="/contact" className="hover:text-sky-600">İletişim</Link>
					</div>
				</div>
			)}
		</header>
	);
}


