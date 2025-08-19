import React from 'react';

export default function ToolsTechnologies() {
  // Araçlar (Sol taraf)
  const tools = [
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg", alt: "VS Code", label: "Visual Studio Code" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/androidstudio/androidstudio-original.svg", alt: "Android Studio", label: "Android Studio" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg", alt: "Jupyter", label: "Jupyter Notebook" },
    { src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/solidity/solidity-original.svg", alt: "Remix IDE", label: "Remix IDE" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pycharm/pycharm-original.svg", alt: "PyCharm", label: "PyCharm" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg", alt: "Linux", label: "Linux" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", alt: "GitHub", label: "Git/GitHub" },
    { src: "https://www.svgrepo.com/show/354202/postman-icon.svg", alt: "Postman", label: "Postman" },
  ];

  // Teknolojiler (Sağ taraf)
  const technologies = [
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", alt: "Docker", label: "Docker" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", alt: "Docker Compose", label: "Docker Compose" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg", alt: "Pandas", label: "Pandas" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg", alt: "NumPy", label: "NumPy" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg", alt: "Firebase", label: "Firebase" },
    { src: "https://d33wubrfki0l68.cloudfront.net/70f55b8fa4e75bc7489ea68f628a8a60781c6387/18999/static/rest-api-c2f25fbadba477948398d96acac29c08.png", alt: "REST API", label: "REST API" },
    { src: "https://img.freepik.com/premium-vector/blockchain-logo-design_611243-62.jpg?semt=ais_hybrid&w=740", alt: "Blockchain", label: "BlockChain" },
    { src: "https://seeklogo.com/images/W/web3js-logo-62DEE79B50-seeklogo.com.png", alt: "Web3", label: "Web3" },
  ];

  return (
    <div className="flex justify-center">
      <div className="max-w-6xl w-full space-y-6">
        {/* Header */}
        <div className="text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-emerald-50 to-cyan-50 dark:from-emerald-900/20 dark:to-cyan-900/20 border border-emerald-200 dark:border-emerald-700 mb-4 shadow-lg">
            <div className="w-3 h-3 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-semibold text-emerald-700 dark:text-emerald-300 uppercase tracking-wide">Araçlar & Teknolojiler</span>
          </div>
        </div>

        {/* Araçlar ve Teknolojiler kartları yan yana */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Araçlar */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 rounded-2xl blur-sm group-hover:blur-md transition-all duration-300"></div>
            <div className="relative p-6 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm rounded-2xl border border-slate-200 dark:border-slate-700 shadow-lg group-hover:shadow-xl transition-all duration-300">
              
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-xl bg-gradient-to-br from-emerald-500 to-cyan-600 shadow-md">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.26 0-2.12-1.26-.707-2.707l5-5A2 2 0 009.172 10V5L8 4z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">Araçlar</h3>
              </div>
              
              <div className="grid grid-cols-1 gap-3">
                {tools.map((tool, index) => (
                  <div key={tool.label} className="group/tool flex items-center gap-2.5 p-2.5 rounded-lg bg-slate-50 dark:bg-slate-700/50 hover:bg-white dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-600 hover:border-slate-300 dark:hover:border-slate-500 hover:shadow-sm hover:-translate-y-0.5 transition-all duration-300">
                    <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-600 dark:to-slate-700 flex items-center justify-center group-hover/tool:scale-110 transition-transform duration-300 shadow-sm">
                      <img className="h-5 w-5" src={tool.src} alt={tool.alt} loading="lazy" />
                    </div>
                    <span className="flex-1 font-medium text-sm text-slate-700 dark:text-slate-300">{tool.label}</span>
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 opacity-0 group-hover/tool:opacity-100 transition-opacity duration-300"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Teknolojiler */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl blur-sm group-hover:blur-md transition-all duration-300"></div>
            <div className="relative p-6 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm rounded-2xl border border-slate-200 dark:border-slate-700 shadow-lg group-hover:shadow-xl transition-all duration-300">
              
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 shadow-md">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">Teknolojiler</h3>
              </div>
              
              <div className="grid grid-cols-1 gap-3">
                {technologies.map((tech, index) => (
                  <div key={tech.label} className="group/tech flex items-center gap-2.5 p-2.5 rounded-lg bg-slate-50 dark:bg-slate-700/50 hover:bg-white dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-600 hover:border-slate-300 dark:hover:border-slate-500 hover:shadow-sm hover:-translate-y-0.5 transition-all duration-300">
                    <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-600 dark:to-slate-700 flex items-center justify-center group-hover/tech:scale-110 transition-transform duration-300 shadow-sm">
                      <img className="h-5 w-5" src={tech.src} alt={tech.alt} loading="lazy" />
                    </div>
                    <span className="flex-1 font-medium text-sm text-slate-700 dark:text-slate-300">{tech.label}</span>
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500 opacity-0 group-hover/tech:opacity-100 transition-opacity duration-300"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}