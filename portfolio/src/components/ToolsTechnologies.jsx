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
    <div
      className="flex flex-col items-center justify-center p-4 ease-out rounded-xl shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:scale(1.2) bg-slate-100"
    >
      <div
        className={`w-14 h-14 flex items-center justify-center rounded-lg ${bgColor} mb-2`}
      >
        {src ? (
          <img src={src} alt={label} className="w-8 h-8 object-contain" />
        ) : (
          <span className="text-xl">{emoji}</span>
        )}
      </div>
      <span className="text-sm font-medium text-slate-800 text-center">
        {label}
      </span>
    </div>
  );

  return (
    <section className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Araçlar */}
      <div className="p-6 bg-white rounded-2xl shadow-lg border border-slate-200">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-gradient-to-br from-teal-400 to-green-500 text-white">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1.5-3H5.25A2.25 2.25 0 013 14.75V4.75A2.25 2.25 0 015.25 2.5h13.5A2.25 2.25 0 0121 4.75v10a2.25 2.25 0 01-2.25 2.25H15l-1.5 3-.75-3h-3z" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-slate-800">Araçlar</h2>
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          {tools.map((tool) => (
            <Card key={tool.label} {...tool} bgColor="bg-green-100" />
          ))}
        </div>
      </div>

      {/* Teknolojiler */}
      <div className="p-6 bg-white rounded-2xl shadow-lg border border-slate-200">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-gradient-to-br from-purple-500 to-purple-600 text-white">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-slate-800">Teknolojiler</h2>
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          {technologies.map((tech) => (
            <Card key={tech.label} {...tech} bgColor="bg-purple-100" />
          ))}
        </div>
      </div>
    </section>
  );
}
