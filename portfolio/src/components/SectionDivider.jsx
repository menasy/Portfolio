import React from 'react';

export default function SectionDivider({
	color = 'from-purple-500 to-pink-500',
	variant = 'dots', // 'dots', 'diamond', 'wave'
	size = 'md' // 'sm', 'md', 'lg'
}) {
	const sizeClasses = {
		sm: 'py-4',
		md: 'py-6',
		lg: 'py-8'
	};

	const DotVariant = () => (
		<div className="flex items-center gap-3">
			<div className={`w-3 h-3 bg-gradient-to-br ${color} rounded-full animate-pulse shadow-lg ring-2 ring-white/20 dark:ring-slate-800/20`}></div>
			<div className={`w-2.5 h-2.5 bg-gradient-to-br ${color} rounded-full opacity-80 animate-pulse delay-200 shadow-md ring-1 ring-white/10 dark:ring-slate-800/10`}></div>
			<div className={`w-2 h-2 bg-gradient-to-br ${color} rounded-full opacity-65 animate-pulse delay-300 shadow-md`}></div>
			<div className={`w-1.5 h-1.5 bg-gradient-to-br ${color} rounded-full opacity-50 animate-pulse delay-500`}></div>
			<div className={`w-1 h-1 bg-gradient-to-br ${color} rounded-full opacity-35 animate-pulse delay-700`}></div>
		</div>
	);

	const DiamondVariant = () => (
		<div className="flex items-center gap-4">
			<div className={`w-4 h-4 bg-gradient-to-br ${color} rotate-45 animate-spin-slow shadow-xl border border-white/20 dark:border-slate-800/20`}></div>
			<div className={`w-2.5 h-2.5 bg-gradient-to-br ${color} rotate-45 opacity-75 animate-bounce-gentle shadow-lg`}></div>
			<div className={`w-4 h-4 bg-gradient-to-br ${color} rotate-45 animate-spin-slow shadow-xl border border-white/20 dark:border-slate-800/20`} style={{ animationDelay: '1.5s' }}></div>
		</div>
	);

	const WaveVariant = () => (
		<div className="flex items-center gap-1.5">
			{[...Array(7)].map((_, i) => (
				<div
					key={i}
					className={`w-1.5 bg-gradient-to-t ${color} rounded-full animate-wave shadow-sm`}
					style={{
						height: `${10 + Math.sin(i * 0.6) * 6}px`,
						animationDelay: `${i * 0.15}s`,
						opacity: 0.9 - (Math.abs(i - 3) * 0.1)
					}}
				></div>
			))}
		</div>
	);

	const renderVariant = () => {
		switch (variant) {
			case 'diamond':
				return <DiamondVariant />;
			case 'wave':
				return <WaveVariant />;
			default:
				return <DotVariant />;
		}
	};

	return (
		<div className={`relative ${sizeClasses[size]} group`}>
			{/* Ana çizgi */}
			<div className="absolute inset-0 flex items-center">
				<div className="w-full h-px bg-gradient-to-r from-transparent via-slate-300/70 dark:via-slate-600/70 to-transparent group-hover:via-slate-400/90 dark:group-hover:via-slate-500/90 transition-all duration-500"></div>
			</div>

			{/* Parıltı efekti - sadece hover'da */}
			<div className="absolute inset-0 flex items-center opacity-0 group-hover:opacity-100 transition-opacity duration-700 overflow-hidden">
				<div className={`w-1/3 h-px bg-gradient-to-r ${color} blur-sm animate-shimmer`}></div>
			</div>

			{/* Merkez elementi */}
			<div className="relative flex justify-center">
				<div className="bg-gradient-to-br from-white via-white to-slate-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 backdrop-blur-md px-8 py-2 rounded-full border border-slate-200/60 dark:border-slate-700/60 group-hover:border-slate-300/80 dark:group-hover:border-slate-600/80 transition-all duration-300 group-hover:shadow-xl group-hover:shadow-slate-200/25 dark:group-hover:shadow-slate-900/25 group-hover:scale-110 ring-1 ring-slate-100/50 dark:ring-slate-800/50 group-hover:ring-slate-200/60 dark:group-hover:ring-slate-700/60">
					{renderVariant()}
				</div>
			</div>

			{/* CSS Animasyonları */}
			<style jsx>{`
        @keyframes spin-slow {
          from { transform: rotate(45deg); }
          to { transform: rotate(405deg); }
        }
        
        @keyframes bounce-gentle {
          0%, 100% { transform: rotate(45deg) translateY(0); }
          50% { transform: rotate(45deg) translateY(-2px); }
        }
        
        @keyframes wave {
          0%, 100% { transform: scaleY(1); }
          50% { transform: scaleY(1.5); }
        }
        
        @keyframes shimmer {
          0% { transform: translateX(-200%); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateX(200%); opacity: 0; }
        }
        
        .animate-spin-slow {
          animation: spin-slow 3s linear infinite;
        }
        
        .animate-bounce-gentle {
          animation: bounce-gentle 2s ease-in-out infinite;
        }
        
        .animate-wave {
          animation: wave 1.5s ease-in-out infinite;
        }
        
        .animate-shimmer {
          animation: shimmer 2s ease-in-out infinite;
        }
        
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-500 { animation-delay: 0.5s; }
        .delay-700 { animation-delay: 0.7s; }
      `}</style>
		</div>
	);
}