import React from 'react';

export default function ToolsTechnologies() {
  // Araçlar (Sol taraf)
  const tools = [
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg", alt: "VS Code", label: "Visual Studio Code", color: "from-blue-500 to-blue-600" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/androidstudio/androidstudio-original.svg", alt: "Android Studio", label: "Android Studio", color: "from-green-500 to-green-600" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg", alt: "Jupyter", label: "Jupyter Notebook", color: "from-orange-500 to-red-500" },
    { src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/solidity/solidity-original.svg", alt: "Remix IDE", label: "Remix IDE", color: "from-gray-600 to-gray-700" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pycharm/pycharm-original.svg", alt: "PyCharm", label: "PyCharm", color: "from-yellow-500 to-green-500" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg", alt: "Linux", label: "Linux", color: "from-gray-800 to-black" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", alt: "GitHub", label: "Git/GitHub", color: "from-gray-700 to-gray-800" },
    { src: "https://www.svgrepo.com/show/354202/postman-icon.svg", alt: "Postman", label: "Postman", color: "from-orange-500 to-red-500" },
  ];

  // Teknolojiler (Sağ taraf)
  const technologies = [
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", alt: "Docker", label: "Docker", color: "from-blue-500 to-blue-600" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", alt: "Docker Compose", label: "Docker Compose", color: "from-blue-600 to-indigo-600" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg", alt: "Pandas", label: "Pandas", color: "from-purple-500 to-purple-600" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg", alt: "NumPy", label: "NumPy", color: "from-blue-400 to-blue-500" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg", alt: "TensorFlow", label: "TensorFlow", color: "from-orange-500 to-orange-600" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg", alt: "PyTorch", label: "PyTorch", color: "from-red-500 to-red-600" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg", alt: "OpenCV", label: "OpenCV", color: "from-green-500 to-green-600" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", alt: "MySQL", label: "MySQL", color: "from-blue-600 to-blue-700" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", alt: "MongoDB", label: "MongoDB", color: "from-green-600 to-green-700" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", alt: "React", label: "React", color: "from-cyan-400 to-blue-500" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", alt: "Node.js", label: "Node.js", color: "from-green-500 to-green-600" },
    { src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original.svg", alt: "Express.js", label: "Express.js", color: "from-gray-600 to-gray-700" },
  ];

  const TechItem = ({ src, alt, label, color }) => (
    <div className="group/tech flex items-center gap-3 p-4 rounded-2xl bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/50 hover:bg-white dark:hover:bg-slate-800 hover:border-slate-300 dark:hover:border-slate-600 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer">
      <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${color} flex items-center justify-center shadow-lg group-hover/tech:scale-110 group-hover/tech:rotate-3 transition-all duration-300`}>
        <img src={src} alt={alt} className="h-6 w-6 rounded filter brightness-0 invert" loading="lazy" />
      </div>
      <div className="flex-1 min-w-0">
        <span className="font-semibold text-slate-900 dark:text-white text-sm truncate block group-hover/tech:text-blue-600 dark:group-hover/tech:text-blue-400 transition-colors">{label}</span>
      </div>
      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover/tech:opacity-100 transition-opacity duration-300"></div>
    </div>
  );

  return (
    <section className="space-y-12">
      {/* Modern Section Header */}
      <div className="text-center">
        <div className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-purple-50 via-indigo-50 to-blue-50 dark:from-purple-900/20 dark:via-indigo-900/20 dark:to-blue-900/20 border border-purple-200/50 dark:border-purple-700/50 mb-8 shadow-xl backdrop-blur-sm">
          <div className="relative">
            <div className="w-4 h-4 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full animate-pulse"></div>
            <div className="absolute inset-0 w-4 h-4 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full animate-ping opacity-30"></div>
          </div>
          <span className="text-lg font-bold text-purple-700 dark:text-purple-300 uppercase tracking-wide">Araçlar & Teknolojiler</span>
        </div>
        
        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-slate-900 via-purple-800 to-slate-900 dark:from-white dark:via-purple-200 dark:to-white bg-clip-text text-transparent mb-6">
          Araçlar & Teknolojiler
        </h2>
        
        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
          Geliştirme süreçlerimde kullandığım araçlar ve teknolojiler
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 items-start">
          
          {/* Sol taraf - Araçlar */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-3xl blur-md group-hover:blur-lg transition-all duration-500"></div>
            <div className="relative p-8 bg-white/95 dark:bg-slate-800/95 backdrop-blur-sm rounded-3xl border border-slate-200/50 dark:border-slate-700/50 shadow-2xl group-hover:shadow-3xl group-hover:-translate-y-2 transition-all duration-500">
              
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 rounded-2xl bg-gradient-to-br from-purple-500 to-indigo-600 shadow-xl">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 7.172V5L8 4z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Geliştirme Araçları</h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400">IDE'ler ve platformlar</p>
                </div>
              </div>
              
              <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mb-6"></div>
              
              <div className="space-y-3">
                {tools.map((tool) => (
                  <TechItem key={tool.label} {...tool} />
                ))}
              </div>
            </div>
          </div>

          {/* Sağ taraf - Teknolojiler */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-3xl blur-md group-hover:blur-lg transition-all duration-500"></div>
            <div className="relative p-8 bg-white/95 dark:bg-slate-800/95 backdrop-blur-sm rounded-3xl border border-slate-200/50 dark:border-slate-700/50 shadow-2xl group-hover:shadow-3xl group-hover:-translate-y-2 transition-all duration-500">
              
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-600 shadow-xl">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Teknolojiler</h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400">Framework'ler ve kütüphaneler</p>
                </div>
              </div>
              
              <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mb-6"></div>
              
              <div className="space-y-3">
                {technologies.map((tech) => (
                  <TechItem key={tech.label} {...tech} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
