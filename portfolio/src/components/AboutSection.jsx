import React from 'react';
import '../styles/AboutSection.css';

export default function AboutSection() {
	return (
		<section className="max-w-5xl mx-auto px-4">
			<div className="about-modern-card">
				{/* Header with Icon */}
				<div className="about-modern-header">
					<div className="about-icon-wrapper">
						<svg className="about-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
						</svg>
					</div>
					<h2 className="about-modern-title">Hakkımda</h2>
					<div className="about-title-line"></div>
				</div>

				{/* Content */}
				<div className="about-modern-content">
					<div className="about-paragraph-wrapper">
						<div className="about-paragraph-accent"></div>
						<p className="about-paragraph">
							Merhaba, ben Mehmet Nasım Yılmaz. 42 İstanbul'da Yazılım Mühendisliği alanında proje odaklı, yoğun bir eğitim sürecindeyim. Aynı zamanda İstanbul Gelişim Üniversitesi Yönetim Bilişim Sistemleri bölümünden 2025 yılı itibarıyla mezun oldum.
						</p>
					</div>

					<div className="about-paragraph-wrapper">
						<div className="about-paragraph-accent"></div>
						<p className="about-paragraph">
							Eğitimim ve projelerim süresince birçok farklı programlama dili, framework ve teknolojiyle çalışma fırsatı buldum. Edindiğim deneyimleri pekiştirmek ve paylaşmak adına blog yazıları kaleme alıyorum.
						</p>
					</div>

					<div className="about-paragraph-wrapper">
						<div className="about-paragraph-accent"></div>
						<p className="about-paragraph">
							Şu anda özellikle web teknolojileri, mobil uygulama geliştirme ve DevOps alanlarında uzmanlığımı derinleştirmek için çalışıyor; teknik yönümü ve problem çözme yaklaşımımı sürekli geliştirerek kariyerimde daha ileri seviyelere ulaşmayı hedefliyorum. Amacım; sahip olduğum yetkinliklerle yenilikçi projelere imza atmak, dahil olduğum ekiplere değer katmak ve sektörde iz bırakan işler başarmaktır.
						</p>
					</div>
				</div>

				{/* Decorative Elements */}
				<div className="about-decorative-circle about-decorative-circle-1"></div>
				<div className="about-decorative-circle about-decorative-circle-2"></div>
			</div>
		</section>
	);
}
