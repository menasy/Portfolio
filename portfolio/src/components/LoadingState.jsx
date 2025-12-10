import React from 'react';

/**
 * Lightweight loading indicator that keeps Suspense fallbacks consistent.
 * `variant="page"` stretches the component for route-level placeholders.
 */
export default function LoadingState({
  label = 'Yükleniyor...',
  variant = 'section',
}) {
  const isPage = variant === 'page';

  return (
    <div
      className={`flex w-full items-center justify-center ${
        isPage ? 'min-h-[320px] py-10' : 'py-6'
      }`}
    >
      <div className="flex items-center gap-3 rounded-2xl border border-slate-200/60 dark:border-slate-700/60 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm px-5 py-4 shadow-sm">
        <span className="relative flex h-8 w-8">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 opacity-50" />
          <span className="relative inline-flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-semibold animate-spin-slow">
            •
          </span>
        </span>
        <div className="flex flex-col">
          <span className="text-sm font-semibold text-slate-800 dark:text-slate-100">
            {label}
          </span>
          <span className="text-xs text-slate-500 dark:text-slate-400">
            Lütfen bekleyiniz
          </span>
        </div>
      </div>
    </div>
  );
}

