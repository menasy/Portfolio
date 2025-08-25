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
  ];

  const technologies = [
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", label: "Docker" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg", label: "Pandas" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg", label: "NumPy" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg", label: "Firebase" },
    { emoji: "⚡", label: "REST API" },
    { emoji: "⛓️", label: "BlockChain" },
    { emoji: "🌐", label: "Web3" },
  ];

  const Card = ({ src, emoji, label, bgColor }) => (
    <div className="group relative">
      {/* Enhanced background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 rounded-xl blur-sm group-hover:blur-lg group-hover:from-emerald-500/30 group-hover:to-cyan-500/30 transition-all duration-500"></div>
      
      <div className="relative flex flex-col items-center justify-center p-4 ease-out rounded-xl shadow-sm group-hover:shadow-xl group-hover:-translate-y-1 transition-all duration-500 bg-white/95 dark:bg-slate-800/95 backdrop-blur-sm border border-emerald-200/50 dark:border-emerald-600/50">
        <div
          className={`w-14 h-14 flex items-center justify-center rounded-lg ${bgColor} mb-2`}
        >
          {src ? (
            <img src={src} alt={label} className="w-8 h-8 object-contain" />
          ) : (
            <span className="text-xl">{emoji}</span>
          )}
        </div>
        <span className="text-sm font-medium text-slate-800 dark:text-slate-200 text-center">
          {label}
        </span>
      </div>
    </div>
  );

  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      {/* Modern Single Title */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text">
          ⚒️ Araçlar & Teknolojiler
        </h2>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          Projelerimde kullandığım modern araçlar ve teknolojiler
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Araçlar */}
        <div className="p-6 bg-white dark:bg-slate-800 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-gradient-to-br from-teal-400 to-green-500 text-white">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1.5-3H5.25A2.25 2.25 0 013 14.75V4.75A2.25 2.25 0 015.25 2.5h13.5A2.25 2.25 0 0121 4.75v10a2.25 2.25 0 01-2.25 2.25H15l-1.5 3-.75-3h-3z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-slate-700 dark:text-slate-200">Araçlar</h3>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {tools.map((tool) => (
              <Card key={tool.label} {...tool} bgColor="bg-green-100 dark:bg-green-900/30" />
            ))}
          </div>
        </div>

        {/* Teknolojiler */}
        <div className="p-6 bg-white dark:bg-slate-800 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-gradient-to-br from-purple-500 to-purple-600 text-white">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-slate-700 dark:text-slate-200">Teknolojiler</h3>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {technologies.map((tech) => (
              <Card key={tech.label} {...tech} bgColor="bg-purple-100 dark:bg-purple-900/30" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
