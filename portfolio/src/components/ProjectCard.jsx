import React from 'react';

export default function ProjectCard({ title, link, summary, media, features, technologies, categories }) {
  return (
    <div className="group block relative h-full">
      {/* Card container with simplified design for wrapper compatibility */}
      <div className="relative h-full overflow-hidden">
        
        {/* Media cover */}
        {media && (
          <div className="relative aspect-[16/9] overflow-hidden cursor-pointer rounded-t-3xl"
               onClick={(e) => {
                 e.stopPropagation();
                 const video = e.currentTarget.querySelector('video');
                 if (video) {
                   if (video.paused) {
                     video.play().catch(() => {});
                   } else {
                     video.pause();
                   }
                 }
               }}>
            <div className="h-full w-full [&_*]:h-full [&_*]:w-full [&_*]:object-cover group-hover:scale-105 transition-transform duration-700">
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
            
            {/* Overlay gradients */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/10 to-emerald-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            {/* Hover indicator */}
            <div className="absolute bottom-4 right-4">
              <div className="flex items-center gap-2 text-xs font-medium px-3 py-1.5 rounded-full bg-slate-900/90 backdrop-blur-sm text-white/95 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                <span>Projeyi Görüntüle</span>
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </div>
            </div>
          </div>
        )}

        {/* Body */}
        <div className="relative p-6 space-y-6">
          {/* Enhanced Header with modern title design */}
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <a
                href={link}
                target="_blank"
                rel="noreferrer"
                className="block group/title"
              >
                <h3 className="text-2xl font-bold bg-gradient-to-r from-slate-900 via-blue-800 to-slate-900 dark:from-white dark:via-blue-200 dark:to-white bg-clip-text text-transparent group-hover/title:from-blue-600 group-hover/title:via-purple-600 group-hover/title:to-blue-600 dark:group-hover/title:from-blue-300 dark:group-hover/title:via-purple-300 dark:group-hover/title:to-blue-300 transition-all duration-300 leading-tight mb-3">
                  {title}
                </h3>
              </a>
              {/* Multiple categories display */}
              {categories && categories.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {categories.map((cat, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center gap-2 text-xs font-medium px-3 py-1.5 rounded-full bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-700 hover:from-blue-100 hover:to-purple-100 dark:hover:from-blue-900/50 dark:hover:to-purple-900/50 transition-all duration-200"
                    >
                      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"></div>
                      {cat}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
          
          {/* Summary */}
          {summary && (
            <div className="relative group/summary">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl blur-sm opacity-50 group-hover/summary:opacity-70 transition-opacity duration-300"></div>
              <div className="relative p-5 bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm rounded-2xl border border-slate-200/70 dark:border-slate-700/60">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-1 h-12 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full mt-1"></div>
                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed">{summary}</p>
                </div>
              </div>
            </div>
          )}
          
          {/* Features and Technologies */}
          {(features || technologies) && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Features */}
              {features && (
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500"></div>
                    <h4 className="text-sm font-semibold text-slate-900 dark:text-white uppercase tracking-wide">Özellikler</h4>
                  </div>
                  <ul className="space-y-2">
                    {features.map((f, idx) => (
                      <li key={idx} className="group/feature flex items-start gap-3 p-2 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors duration-200">
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-br from-emerald-500 to-cyan-500 flex items-center justify-center mt-0.5 group-hover/feature:scale-110 transition-transform duration-200">
                          <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.704 5.29a1 1 0 0 1 .006 1.414l-7.028 7.07a1 1 0 0 1-1.42.005L3.29 8.82a1 1 0 1 1 1.42-1.41l3.05 3.07 6.318-6.36a1 1 0 0 1 1.626.17z" clipRule="evenodd"/>
                          </svg>
                        </div>
                        <span className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              
              {/* Technologies */}
              {technologies && (
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-orange-500 to-red-500"></div>
                    <h4 className="text-sm font-semibold text-slate-900 dark:text-white uppercase tracking-wide">Teknolojiler</h4>
                  </div>
                  <div className="space-y-2">
                    {technologies.map((t, idx) => (
                      <div
                        key={idx}
                        className="group/tech flex items-center gap-3 p-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-white/80 dark:bg-slate-700/80 hover:bg-slate-50 dark:hover:bg-slate-700 hover:border-slate-300 dark:hover:border-slate-600 hover:-translate-y-0.5 transition-all duration-200"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-orange-500 to-red-500 group-hover/tech:scale-125 transition-transform duration-200"></div>
                        <span className="flex-1 text-sm font-medium text-slate-700 dark:text-slate-300">{t}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
          
          {/* Bottom action */}
          <div className="pt-4 flex justify-end">
            <a
              href={link}
              target="_blank"
              rel="noreferrer"
              className="group/action inline-flex items-center gap-2 text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-200"
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


