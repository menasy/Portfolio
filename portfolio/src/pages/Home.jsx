import React, { useEffect, useState } from 'react';
import BlogSection from '../components/BlogSection';
import ToolsTechnologies from '../components/ToolsTechnologies';
import ContactCv from '../components/ContactCv';
import EducationSection from '../components/EducationSection';
import ExperienceSection from '../components/ExperienceSection';
import TechSkillsCombo from '../components/TechSkillsCombo';

export default function Home() {
  const [typingText, setTypingText] = useState('');
  const roles = ['Software Developer', 'Mobile Application Developer'];

  useEffect(() => {
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let raf;

    const step = () => {
      const currentRole = roles[roleIndex];
      if (isDeleting) {
        setTypingText(currentRole.substring(0, charIndex - 1));
        charIndex--;
      } else {
        setTypingText(currentRole.substring(0, charIndex + 1));
        charIndex++;
      }
      if (!isDeleting && charIndex === currentRole.length) {
        setTimeout(() => { isDeleting = true; }, 1200);
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
      }
      raf = setTimeout(step, isDeleting ? 55 : 120);
    };
    const start = setTimeout(step, 500);
    return () => { clearTimeout(start); clearTimeout(raf); };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="space-y-8">
      <header className="text-center pt-8 relative">
        {/* Animated background elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 left-1/4 w-32 h-32 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute top-40 right-1/4 w-24 h-24 bg-gradient-to-br from-emerald-400/20 to-cyan-400/20 rounded-full blur-xl animate-pulse delay-1000"></div>
        </div>
        
        {/* Profile section with modern layout */}
        <div className="relative group mb-12">
          <div className="relative mx-auto w-32 h-32 mb-8">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-emerald-500 animate-spin-slow opacity-75 blur-sm"></div>
            <img
              src="https://raw.githubusercontent.com/menasy/Portfolio/main/newProfil.jpeg"
              alt="Profil Fotoğrafı"
              className="relative h-32 w-32 rounded-full object-cover border-4 border-white dark:border-slate-800 shadow-2xl group-hover:scale-105 transition-transform duration-300"
              loading="eager"
              fetchPriority="high"
            />
          </div>
          
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 dark:from-white dark:via-blue-100 dark:to-white bg-clip-text text-transparent leading-tight">
              Mehmet Nasim Yılmaz
            </h1>
            
            <div className="flex items-center justify-center gap-2">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-700 hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-colors">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <a href="https://github.com/menasy" target="_blank" rel="noreferrer" className="text-blue-600 dark:text-blue-400 font-medium">
                  @MeNasy
                </a>
              </div>
            </div>
            
            <div className="h-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/30 dark:to-blue-900/30 border border-purple-200 dark:border-purple-700">
                <div className="w-1 h-6 bg-purple-500 rounded-full animate-pulse"></div>
                <span className="text-lg font-medium text-purple-700 dark:text-purple-300 min-w-[280px] text-left">
                  {typingText}
                </span>
              </div>
            </div>

            <div className="mt-12 relative max-w-2xl mx-auto">
              {/* Simple quote container */}
              <div className="relative p-6 bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm">
                {/* Quote text */}
                <blockquote className="text-center">
                  <p className="text-lg md:text-xl font-medium text-slate-800 dark:text-slate-200 leading-relaxed italic">
                    "Bilmediğim hiçbir şey yok, sadece öğrenmedim şeyler var."
                  </p>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section id="hedefim" className="max-w-4xl mx-auto">
        <div className="p-8 md:p-12 bg-white dark:bg-slate-800 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-lg">
          {/* Icon */}
          <div className="flex justify-center mb-6">
            <div className="p-4 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 shadow-lg">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
          </div>
          
          <div className="text-center space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-4">
              Hedefim & Vizyonum
            </h2>
            
            <div className="relative">
              <div className="absolute left-0 top-0 w-2 h-full bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"></div>
              <p className="text-lg leading-8 text-slate-700 dark:text-slate-300 pl-8 text-left max-w-3xl">
                Yazılım geliştirme, web teknolojileri, DevOps ve özellikle mobil programlama alanlarında kendimi
                sürekli geliştirmeye ve yeni teknolojiler öğrenmeye çalışıyorum.
                Bugüne kadar edindiğim teknik ve teorik bilgiyle sağlam bir altyapı oluşturduğuma ​ ​
                inanıyorum. Şimdi ise bu bilgi ve tecrübeyi iş hayatına taşıyarak hem çalışacağım şirkete ​
                katkı sağlamak hem de kendimi daha ileri bir seviyeye taşımayı hedefliyorum.
              </p>
            </div>
            
            {/* Action buttons */}
            <div className="flex flex-wrap justify-center gap-4 pt-6">
              <button 
                onClick={() => window.location.href = '/projects'}
                className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl font-medium hover:from-blue-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg"
              >
                Projelerim
              </button>
              <button 
                onClick={() => window.location.href = '/contact'}
                className="px-6 py-3 bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-xl font-medium border border-slate-300 dark:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-600 transform hover:scale-105 transition-all duration-300"
              >
                İletişim
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Modern Section Divider */}
      <div className="relative py-3">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-300 dark:via-slate-600 to-transparent"></div>
        </div>
        <div className="relative flex justify-center">
          <div className="bg-white dark:bg-slate-900 px-4">
            <div className="w-1 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
          </div>
        </div>
      </div>

      <EducationSection />

      {/* Modern Section Divider */}
      <div className="relative py-3">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-300 dark:via-slate-600 to-transparent"></div>
        </div>
        <div className="relative flex justify-center">
          <div className="bg-white dark:bg-slate-900 px-4">
            <div className="w-1 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full"></div>
          </div>
        </div>
      </div>

      <ExperienceSection />

      {/* Modern Section Divider */}
      <div className="relative py-3">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-300 dark:via-slate-600 to-transparent"></div>
        </div>
        <div className="relative flex justify-center">
          <div className="bg-white dark:bg-slate-900 px-4">
            <div className="w-1 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"></div>
          </div>
        </div>
      </div>

      <BlogSection />

      {/* Modern Section Divider */}
      <div className="relative py-3">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-300 dark:via-slate-600 to-transparent"></div>
        </div>
        <div className="relative flex justify-center">
          <div className="bg-white dark:bg-slate-900 px-4">
            <div className="w-1 h-1 bg-gradient-to-r from-orange-500 to-red-500 rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Teknik Beceriler Section */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="p-8 bg-white dark:bg-slate-800 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-lg hover:shadow-xl transition-all duration-300">
          <TechSkillsCombo showHeader={true} />
        </div>
      </section>

      {/* Modern Section Divider */}
      <div className="relative py-3">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-300 dark:via-slate-600 to-transparent"></div>
        </div>
        <div className="relative flex justify-center">
          <div className="bg-white dark:bg-slate-900 px-4">
            <div className="w-1 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
          </div>
        </div>
      </div>

      <ToolsTechnologies />

      {/* Modern Section Divider */}
      <div className="relative py-3">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-300 dark:via-slate-600 to-transparent"></div>
        </div>
        <div className="relative flex justify-center">
          <div className="bg-white dark:bg-slate-900 px-4">
            <div className="w-1 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"></div>
          </div>
        </div>
      </div>

      <ContactCv />
    </div>
  );
}


