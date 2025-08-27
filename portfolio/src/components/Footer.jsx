import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Footer() {
	const { pathname } = useLocation();
	useEffect(() => {
		window.scrollTo(0, 0);
	}, [pathname]);
	const currentYear = new Date().getFullYear();

	const socialLinks = [
		{
			name: 'GitHub',
			url: 'https://github.com/menasy',
			icon: (
				<svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
					<path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
				</svg>
			),
			color: 'hover:text-slate-300'
		},
		{
			name: 'LinkedIn',
			url: 'https://linkedin.com/in/menasy',
			icon: (
				<svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
					<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
				</svg>
			),
			color: 'hover:text-blue-400'
		},
		{
			name: 'Medium',
			url: 'https://medium.com/@menasy',
			icon: (
				<svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
					<path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
				</svg>
			),
			color: 'hover:text-emerald-400'
		},
		{
			name: 'Email',
			url: 'mailto:mehmetnasim42@gmail.com',
			icon: (
				<svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
					<path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
				</svg>
			),
			color: 'hover:text-red-400'
		},
		{
			name: 'Instagram',
			url: 'https://instagram.com/mehmet_nasim',
			icon: (
				<svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
					<path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
				</svg>
			),
			color: 'hover:text-pink-400'
		}
	];

const quickLinks = [
	{ name: 'Ana Sayfa', href: '/' },
	{ name: 'Hakkımda', href: '/about' },
	{ name: 'Projeler', href: '/projects' },
	{ name: 'Blog', href: '/#blog-yazilari' },
	{ name: 'İletişim', href: '/contact' },
];

	return (
		<footer className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white mt-20">
			{/* Background Effects */}
			<div className="absolute inset-0">
				<div className="absolute inset-0 bg-gradient-to-br from-blue-950/10 via-purple-950/5 to-slate-950/20"></div>
				<div className="absolute -top-20 -left-20 w-40 h-40 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-full blur-2xl"></div>
				<div className="absolute -bottom-16 -right-16 w-36 h-36 bg-gradient-to-br from-emerald-500/5 to-cyan-500/5 rounded-full blur-2xl"></div>
				<div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent"></div>
			</div>

			<div className="relative container mx-auto px-6 py-12">

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">

					{/* Left - Name and Social Links */}
					<div className="space-y-6">
						{/* Name Section */}
						<div className="flex items-center gap-3">
							<div className="relative">
								<div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl blur-lg opacity-20"></div>
								<div className="relative w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
									<span className="text-white font-bold text-xl">M</span>
								</div>
							</div>
							<div>
								<h3 className="text-xl font-bold bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent">
									Mehmet Nasim Yılmaz
								</h3>
								<p className="text-slate-400 text-sm">Software Developer</p>
							</div>
						</div>

						{/* ...existing code... */}
					</div>

					{/* Center - Quick Links */}
					<div className="space-y-4">
						<h4 className="text-lg font-semibold text-white flex items-center gap-2">
							<svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
							</svg>
							Hızlı Erişim
						</h4>

						<div className="space-y-2">
							{quickLinks.map((link) => (
								link.href.startsWith('/#') ? (
									<a
										key={link.name}
										href={link.href}
										className="group flex items-center justify-between p-3 rounded-lg bg-slate-800/30 border border-slate-700/30 hover:bg-slate-700/40 hover:border-slate-600/50 transition-all duration-300 hover:translate-x-1 w-full md:w-72"
									>
										<span className="text-slate-300 group-hover:text-white transition-colors duration-300 text-sm font-medium">
											{link.name}
										</span>
										<svg className="w-3 h-3 text-slate-500 group-hover:text-blue-400 group-hover:translate-x-0.5 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
										</svg>
									</a>
								) : (
									<Link
										key={link.name}
										to={link.href}
										className="group flex items-center justify-between p-3 rounded-lg bg-slate-800/30 border border-slate-700/30 hover:bg-slate-700/40 hover:border-slate-600/50 transition-all duration-300 hover:translate-x-1 w-full md:w-72"
									>
										<span className="text-slate-300 group-hover:text-white transition-colors duration-300 text-sm font-medium">
											{link.name}
										</span>
										<svg className="w-3 h-3 text-slate-500 group-hover:text-blue-400 group-hover:translate-x-0.5 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
										</svg>
									</Link>
								)
							))}
						</div>
					</div>

					{/* Right - Bağlantılar Section */}
					<div className="hidden lg:flex flex-col space-y-4 ">
						<h4 className="text-lg font-semibold text-white flex items-center gap-2">
							<svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
							</svg>
							Bağlantılar
						</h4>
						<div className="flex flex-col space-y-2 w-full md:w-72">
							{socialLinks.map((social) => (
								<a
									key={social.name}
									href={social.url}
									target="_blank"
									rel="noreferrer"
									className={`group flex items-center justify-between p-3 rounded-lg bg-slate-800/30 border border-slate-700/30 hover:bg-slate-700/40 hover:border-slate-600/50 transition-all duration-300 hover:translate-x-1 ${social.color} w-full md:w-72`}
									title={social.name}
								>
									<span className="text-slate-300 group-hover:text-white transition-colors duration-300 text-sm font-medium flex items-center gap-2">
										{social.icon}
										{social.name}
									</span>
									<svg className="w-3 h-3 text-slate-500 group-hover:text-blue-400 group-hover:translate-x-0.5 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
									</svg>
								</a>
							))}
						</div>
					</div>

				</div>

				{/* Bottom Section */}
				<div className="border-t border-slate-800/50 pt-6">
					<div className="flex flex-col md:flex-row justify-between items-center gap-4">
						<div className="flex items-center gap-2 text-slate-400 text-sm">
							<div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
							<p>© {currentYear} Mehmet Nasim Yılmaz.</p>
						</div>

					</div>
				</div>
			</div>
		</footer>
	);
}