import React from "react";

export default function ToolsTechnologies() {
  const tools = [
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg", label: "Visual Studio Code" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/androidstudio/androidstudio-original.svg", label: "Android Studio" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg", label: "Jupyter Notebook" },
    { src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/solidity/solidity-original.svg", label: "Remix IDE" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pycharm/pycharm-original.svg", label: "PyCharm" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg", label: "Linux" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", label: "Git/GitHub" },
    { src: "https://www.svgrepo.com/show/354202/postman-icon.svg", label: "Postman" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", label: "PostgreSQL" },
  ];

  const technologies = [
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", label: "Docker" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg", label: "Pandas" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg", label: "NumPy" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg", label: "Firebase" },
     { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg", label: "Entity Framework"},
    { src: "https://www.wowza.com/wp-content/uploads/wowz-header-logo-2-1-1-1.png", label: "Wowza Streaming Engine" },
    { emoji: "⚡", label: "REST API" },
    { emoji: "⛓️", label: "BlockChain" },
    { emoji: "🌐", label: "Web3" },
  ];

  const Card = ({ src, emoji, label, bgColor }) => (
    <div className="group/item relative">
      {/* Enhanced background effects - only trigger on individual item hover */}
      <div className="absolute inset-0 rounded-xl border border-transparent transition-all duration-300 group-hover/item:border-emerald-200/60 dark:group-hover/item:border-emerald-500/40"></div>
      
      <div className="relative flex h-full flex-col items-center justify-center rounded-xl border border-emerald-200/50 bg-white p-3 text-center shadow-sm transition-all duration-300 ease-out group-hover/item:-translate-y-1 group-hover/item:shadow-md dark:border-emerald-600/50 dark:bg-slate-800 sm:p-4">
        <div
          className={`mb-2 flex h-12 w-12 items-center justify-center rounded-lg transition-transform duration-300 group-hover/item:scale-105 sm:h-14 sm:w-14 ${bgColor}`}
        >
          {src ? (
            <img src={src} alt={label} className="h-7 w-7 object-contain sm:h-8 sm:w-8" />
          ) : (
            <span className="text-lg sm:text-xl">{emoji}</span>
          )}
        </div>
        <span className="text-xs font-medium leading-snug text-slate-800 dark:text-slate-200 sm:text-sm break-words whitespace-normal">
          {label}
        </span>
      </div>
    </div>
  );

  return (
    <section className="max-w-5xl mx-auto px-4">
      <div className="p-6 sm:p-8 bg-white dark:bg-slate-800 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-lg hover:shadow-xl transition-all duration-300">
        {/* Modern Single Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text">
            ⚒️ Araçlar & Teknolojiler
          </h2>
          <p className="text-base text-slate-600 max-w-xl mx-auto">
            Projelerimde kullandığım modern araçlar ve teknolojiler
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Araçlar */}
          <div className="relative group/card">
            {/* Enhanced background effects for the whole card - only on direct hover */}
            <div className="absolute inset-0 rounded-2xl border border-teal-200/40 transition-all duration-500 group-hover/card:border-teal-300/70 dark:border-teal-700/40 dark:group-hover/card:border-teal-600/60"></div>
            <div className="relative p-5 sm:p-6 bg-white dark:bg-slate-800 rounded-2xl shadow-lg group-hover/card:shadow-xl group-hover/card:-translate-y-2 transition-all duration-500 border border-teal-200/50 dark:border-teal-700/50">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-gradient-to-br from-teal-400 to-green-500 text-white shadow-lg">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1.5-3H5.25A2.25 2.25 0 013 14.75V4.75A2.25 2.25 0 015.25 2.5h13.5A2.25 2.25 0 0121 4.75v10a2.25 2.25 0 01-2.25 2.25H15l-1.5 3-.75-3h-3z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-slate-700 dark:text-slate-200">Araçlar</h3>
              </div>
              <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3 sm:gap-4">
                {tools.map((tool) => (
                  <Card key={tool.label} {...tool} bgColor="bg-green-100 dark:bg-green-900/30" />
                ))}
              </div>
            </div>
          </div>

          {/* Teknolojiler */}
          <div className="relative group/card">
            {/* Enhanced background effects for the whole card - only on direct hover */}
            <div className="absolute inset-0 rounded-2xl border border-purple-200/40 transition-all duration-500 group-hover/card:border-purple-300/70 dark:border-purple-700/40 dark:group-hover/card:border-purple-600/60"></div>
            <div className="relative p-6 bg-white dark:bg-slate-800 rounded-2xl shadow-lg group-hover/card:shadow-xl group-hover/card:-translate-y-2 transition-all duration-500 border border-purple-200/50 dark:border-purple-700/50">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-gradient-to-br from-purple-500 to-purple-600 text-white shadow-lg">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-slate-700 dark:text-slate-200">Teknolojiler</h3>
              </div>
              <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3 sm:gap-4">
                {technologies.map((tech) => (
                  <Card key={tech.label} {...tech} bgColor="bg-purple-100 dark:bg-purple-900/30" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
