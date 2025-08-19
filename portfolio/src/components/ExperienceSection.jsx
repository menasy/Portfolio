import React from 'react';
import SkillsSection from './SkillsSection';

export default function ExperienceSection() {
  return (
    <section className="space-y-6">
      <h2 className="text-xl font-semibold">Deneyimler</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="rounded-xl border border-slate-200 dark:border-slate-700 p-5 bg-white/60 dark:bg-slate-800/60">
          <h3 className="font-semibold">Eğitim Bilgisi</h3>
          <p className="mt-2 text-slate-700 dark:text-slate-300 leading-7">
            <strong>42 İstanbul – Yazılım Geliştirme</strong> <br/>
            C/C++'ta ileri seviye programlama, multi-threading, sistem programlama ,bellek yönetimi,
            raycasting, 3D grafik render, ağ protokolleri, socket programlama, POSIX sinyalleri, veri
            yapıları, kernel optimizasyonu, algoritmalar ve karmaşık problem çözme teknikleri gibi konuları
            kapsayan bir eğitim alıyorum.<br/><br/>
            <strong>İstanbul Gelişim Üniversitesi – Yönetim Bilişim Sistemleri </strong> <br/>
            Veri madenciliği, finansal teknolojiler, risk yönetimi, SQL veritabanı, iş zekası, veri
            görselleştirme, görsel programlama (C#), kurumsal IT altyapıları, bulut bilişim gibi alanlarında
            eğitim aldım.
          </p>
        </div>
        <div className="rounded-xl border border-slate-200 dark:border-slate-700 p-5 bg-white/60 dark:bg-slate-800/60">
          <SkillsSection variant="simple" />
        </div>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-3">🛠️ Teknik Beceriler</h2>
      </div>
    </section>
  );
}


