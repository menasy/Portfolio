// Project data and categorization helper

export const categorizeProject = (title, description) => {
	// Bu fonksiyon artık kullanılmıyor, her proje için kategori array'i tanımlı
	return 'Other';
};

export const featuredProjects = [
	{
		title: 'StreamApp',
		link: 'https://github.com/menasy/StreamApp',
		summary:
			'StreamApp, canlı yayın ve medya süreçlerinin yönetimi için geliştirilmiş, .NET 8 ve React 18 tabanlı bir platformdur. Wowza Streaming Engine entegrasyonu ile HLS, MPEG-DASH, RTMP, RTSP ve WebRTC protokollerini destekleyerek hem düşük gecikmeli hem de adaptif yayın yetenekleri sunar. Katmanlı mimari prensipleriyle tasarlanan projede; PostgreSQL veri tabanı, JWT tabanlı kimlik doğrulama, RBAC (Rol Bazlı Erişim Kontrolü) ve VOD arşivleme sistemi bulunmaktadır. Gerçek zamanlı bildirimler SignalR ile, otomatik kayıt süreçleri ise Webhook entegrasyonları ile sağlanmıştır. Tüm altyapı Docker Compose ile konteynerize edilmiş olup, Grafana-Loki-Alloy yığını ile merkezi izlenebilirlik (observability) sağlanmıştır.',
			media: (
			
			<div className="flex flex-col gap-2">
				<div className="grid grid-cols-2 gap-2">
					<div className="aspect-video overflow-hidden rounded-lg">
						<img
							src="https://github.com/menasy/Project_icons/blob/main/StreamApp/StreamApp_Architecture.png?raw=true"
							alt="StreamApp Mimari Diyagramı"
							loading="lazy"
							className="w-full h-full object-cover"
						/>
					</div>
					<div className="aspect-video overflow-hidden rounded-lg">
						<img
							src="https://github.com/menasy/Project_icons/blob/main/StreamApp/DelayTests.png?raw=true"
							alt="Protokol Gecikme Testleri"
							loading="lazy"
							className="w-full h-full object-cover"
						/>
					</div>
					
				</div>
				<div className="aspect-video overflow-hidden rounded-lg">
					<img
						src="https://github.com/menasy/Project_icons/blob/main/StreamApp/StreamAppU%C4%B1Summary.png?raw=true"
						alt="StreamApp Dashboard ve Arayüzler"
						loading="lazy"
						className="w-full h-full object-cover"
					/>
				</div>
				
			</div>
		),
		features: [
			'Çoklu Protokol Desteği: HLS (~31.9s), MPEG-DASH (~7.4s), WebRTC (~0ms) ile farklı kullanım senaryolarına optimal gecikme değerleri',
			'WebRTC Ultra-Düşük Gecikmeli Oynatma: Sub-second latency ile interaktif canlı yayınlar, dinamik kalite değiştirme sistemi',
			'Çoklu Görünüm Paneli: Birden fazla stream\'i aynı anda farklı protokollerle izleme, esnek layout yönetimi',
			'Kapsamlı Stream Yönetimi: SMIL dosyaları ile adaptive bitrate, transcoder ve DVR kontrolü, stream lifecycle yönetimi',
			'VOD ve Arşiv Sistemi: Webhook entegrasyonlu otomatik kayıt, tarih bazlı filtreleme, zaman sınırlı erişim izinleri',
			'Güvenlik ve Yetkilendirme: JWT authentication, refresh token, RBAC, stream-level permissions, secure token ile korumalı oynatma',
			'Gerçek Zamanlı Bildirimler: SignalR ile kullanıcı ve admin kanallarında anlık UI güncellemeleri',
			'Observability Stack: Serilog structured logging, Grafana-Loki-Alloy entegrasyonu, custom dashboards, trace ID takibi',
			'Admin Panel: Kullanıcı ve rol yönetimi, permission atama, arşiv erişim talepleri, toplu işlemler ve dashboard istatistikleri',
			'Konteynerize Altyapı: Docker Compose ile PostgreSQL, Wowza, Grafana, Loki, Alloy servislerinin yönetimi',
		],
		technologies: [
			'ASP.NET Core 8',
			'React 18',
			'TypeScript',
			'Entity Framework Core',
			'PostgreSQL',
			'Wowza Streaming Engine',
			'SignalR',
			'JWT Authentication',
			'Docker & Docker Compose',
			'Video.js',
			'Tailwind CSS',
			'Grafana',
			'Loki',
			'Alloy',
			'Serilog',
			'WebRTC',
			'HLS/MPEG-DASH',
			'Vite',
		],
		categories: ['Full Stack', 'Backend Development', 'Frontend Development', 'DevOps / Containerization', 'Media Streaming'],
	},
	{
		title: 'WebServ',
		link: 'https://github.com/menasy/WebServer',
		summary:
			'WebServ, ekip arkadaşımla birlikte C++ dilinde sıfırdan geliştirdiğimiz kendi HTTP/1.1 web sunucumuzdur. Nginx benzeri olay tabanlı mimari (event-driven architecture) ile tek bir işlemde birden fazla bağlantıyı eşzamanlı olarak yönetebilen, socket programlama kullanarak tek thread üzerinde çalışan yüksek performanslı bir yapı tasarladık. Non-blocking I/O mekanizmaları sayesinde çoklu istemci bağlantılarını etkin şekilde yöneten sunucumuz, çoklu port desteği, dinamik içerik işleme ve özelleştirilebilir yönlendirme özellikleriyle modern web sunucusu ihtiyaçlarını karşılamaktadır. Bu proje, ağ programlama, HTTP protokolü ve sistem kaynaklarının optimum kullanımı konularında derinlemesine teknik deneyim sağladı.',
		media: (
			<div className="flex flex-col gap-2">
				<div className="aspect-video overflow-hidden rounded-lg">
					<img
						src="https://github.com/menasy/Project_icons/blob/main/WebServer_Images/42WebServer.png?raw=true"
						alt="WebServer Görseli"
						loading="lazy"
						className="w-full h-full object-cover"
					/>
				</div>
				<div className="grid grid-cols-2 gap-2">
					<div className="aspect-video overflow-hidden rounded-lg">
						<img
							src="https://github.com/menasy/Project_icons/blob/main/WebServer_Images/ServerClientDiagram.png?raw=true"
							alt="Server-Client Diyagramı"
							loading="lazy"
							className="w-full h-full object-cover"
						/>
					</div>
					<div className="aspect-video overflow-hidden rounded-lg">
						<img
							src="https://github.com/menasy/Project_icons/blob/main/WebServer_Images/eventDriven.jpg?raw=true"
							alt="Olay Tabanlı Mimari"
							loading="lazy"
							className="w-full h-full object-cover"
						/>
					</div>
				</div>
			</div>
		),
		features: [
			'HTTP Metodları: GET, POST, DELETE desteği',
			'Olay Tabanlı Mimari: Verimli istek işleme ve kaynak yönetimi',
			'Non-blocking I/O: Eşzamanlı istemci bağlantıları',
			'Çoklu Sunucu: Port ve sunucu adı bazlı yapılandırma',
			'Dinamik İçerik: CGI ile PHP ve Python desteği',
			'İstek Yönlendirme: Özelleştirilebilir rotalar',
			'Dizin Listesi: Otomatik içerik görüntüleme',
			'Hata Yönetimi: Özelleştirilmiş HTTP durum sayfaları',
		],
		technologies: ['C++', 'Socket Programlama', 'I/O Multiplexing (poll/select)', 'Olay Tabanlı Mimari', 'HTTP Protokolü', 'POSIX API', 'CGI (Common Gateway Interface)', 'Config Dosyası Parsing'],
		categories: ['Backend Development', 'System Programming'],
	},
	{
		title: 'HesKit MobilApp',
		link: 'https://github.com/menasy/HesKit-MobilApp',
		summary:
			'Android platformunda Java ile geliştirdiğim HesKit MobilApp, işletmeler için kapsamlı bir finansal yönetim çözümüdür. SQLite veritabanı entegrasyonuyla çalışan bilgileri, mesai takibi ve ödemeleri tek noktadan yönetim sağlar. Android Jetpack ve Room Database kullanarak kullanıcı dostu ve güvenli bir finansal yönetim deneyimi sundum.',
		media: (
			<div className="aspect-video overflow-hidden rounded-lg">
				<img
					src="https://raw.githubusercontent.com/menasy/Project_icons/main/HesKitFiles/HeskitFigma.png"
					alt="HesKit Fotoğraf"
					loading="lazy"
					className="w-full h-full object-cover"
				/>
			</div>
		),
		features: [
			'Çalışan Yönetimi: İş bilgileri, ekleme ve profil yönetimi',
			'Ödeme İşlemleri: Havale, harçlık ve transfer takibi',
			'Mesai Takibi: Çalışma günleri ve fazla mesailer',
			'Gerçek Zamanlı Güncelleme: Dinamik veri yönetimi',
		],
		technologies: ['Java', 'SQLite', 'Android SDK', 'XML, Gradle', 'Room Database', 'Singleton Pattern', 'Android Jetpack', 'RecyclerView'],
		categories: ['Mobile Application Development'],
	},
	
	{
		title: 'Inception',
		link: 'https://github.com/menasy/Inception_Docker',
		summary:
			'Docker teknolojisini derinlemesine öğrenmek amacıyla geliştirdiğim Inception projesi, web hizmetlerinin konteynerleştirilmiş bir altyapısını oluşturur. Her bir servisi (NGINX, WordPress, MariaDB) ayrı konteynerlerde çalıştırarak izolasyon ve ölçeklenebilirlik sağladım. TLS/SSL sertifikaları ile güvenli bağlantılar oluşturdum ve Docker Compose ile tüm sistem bileşenlerini tek bir yapılandırma dosyasıyla yönetmeyi başardım. Deneyimlerimi Medium yazısında detaylı olarak paylaştım.',
		media: (
			<div className="grid grid-cols-2 gap-2">
				<div className="aspect-video overflow-hidden rounded-lg">
					<img
						src="https://raw.githubusercontent.com/menasy/Project_icons/main/InceptionImages/inceptionArtitech.png"
						alt="Inception Mimari"
						loading="lazy"
						className="w-full h-full object-cover"
					/>
				</div>
				<div className="aspect-video overflow-hidden rounded-lg">
					<img
						src="https://raw.githubusercontent.com/menasy/Project_icons/main/InceptionImages/DockerCompose.jpg"
						alt="Docker Compose"
						loading="lazy"
						className="w-full h-full object-cover"
					/>
				</div>
			</div>
		),
		features: [
			'Mikro Servis Mimarisi: Her servis için ayrı konteyner',
			'Reversi Proxy: NGINX yapılandırması ve yönlendirmesi',
			'Güvenli Bağlantılar: TLS/SSL sertifikaları',
			'Veritabanı Entegrasyonu: MariaDB yapılandırması',
			'WordPress Optimizasyonu: Özelleştirilmiş konteyner ortamı',
		],
		technologies: ['Docker', 'Docker Compose', 'NGINX', 'WordPress', 'MariaDB', 'Bash Script', 'TLS/SSL', 'Alpine Linux'],
		categories: ['DevOps / Containerization', 'Backend Development'],
	},
	{
		title: 'Minishell',
		link: 'https://github.com/menasy/42-Minishell',
		summary:
			'Ekip arkadaşımla birlikte C dilinde geliştirdiğimiz Minishell projesi, Unix benzeri bir komut satırı arayüzünü sıfırdan tasarlamamızı sağladı. Komut ayrıştırma, boru hatları (pipe) yönetimi ve yönlendirme mekanizmalarını başarıyla uygulayarak, girdi/çıktı akışlarını kontrol eden bir sistem oluşturduk. POSIX sistem çağrılarını kullanarak sinyal yönetimi ve bellek kontrolü konularında pratik deneyim elde ettim. Takım çalışması sürecinde iş bölümü ve ortak kod kalitesi standartları üzerinde çalışarak iletişim ve problem çözme becerilerimizi de geliştirdik.',
		media: (
			<div className="aspect-video overflow-hidden rounded-lg">
				<video
					autoPlay
					muted
					loop
					playsInline
					preload="metadata"
					className="w-full h-full object-cover"
					style={{ pointerEvents: 'none' }}
				>
					<source src="https://raw.githubusercontent.com/menasy/Project_icons/main/MinishellFiles/MinishellVideo.mp4" type="video/mp4" />
					Your browser does not support the video tag.
				</video>
			</div>
		),
		features: [
			'Komut Ayırma: cd, echo, pwd',
			'Boru Hatları, MPipe ve Yönlendirme: >, >>',
			'Komut Geçişi: Önceki komutlara erişim',
			'Girdi Yönetimi: Komutların doğru işlenmesi',
			'Sinyal Yönetimi: Ctrl+C, Ctrl+D sinyalleri',
			'Sistem Programlama: Shell ve sistem çağrıları',
			'Ekip Çalışması: Verimli iş birliği, zaman yönetimi',
		],
		technologies: ['C', 'POSIX Sistem Çağrıları', 'Bash Shell', 'Signal Handling', 'File I/O', 'Process Management', 'Memory Management'],
		categories: ['System Programming'],
	},
	{
		title: 'Cub3D',
		link: 'https://github.com/menasy/cub3d',
		summary:
			"Wolfenstein 3D'den esinlenerek ekip arkadaşımla C dili ve MiniLibX kullanarak geliştirdiğim Cub3D projesi, raycasting tekniğiyle 2D haritaları gerçek zamanlı 3D görünüme dönüştürür. Matematiksel hesaplamalarla dokulu duvarlar oluşturarak doğru perspektif sağladık. WASD ve ok tuşları ile kontrol sistemi tasarlayarak kullanıcı dostu bir oyun deneyimi sunmayı başardık.",
		media: (
			<div className="aspect-video overflow-hidden rounded-lg">
				<video
					autoPlay
					muted
					loop
					playsInline
					preload="metadata"
					className="w-full h-full object-cover"
					style={{ pointerEvents: 'none' }}
				>
					<source src="https://raw.githubusercontent.com/e-kose/cub3d/main/GameView/cub3dVideo.mp4" type="video/mp4" />
					Your browser does not support the video tag.
				</video>
			</div>
		),
		features: [
			'Ray Casting: 2D haritaları 3D dünyaya dönüştürme',
			'Dokulu Duvarlar: Gerçekçi ortamlar oluşturma',
			'Oyuncu Kontrolleri: WASD ve ok tuşlarıyla sezgisel hareket',
			'Hata Yönetimi: Kararlı ve güvenilir sistem',
			'Grafik İşleme: RGB renkleriyle zemin ve gökyüzü entegrasyonu',
		],
		technologies: ['C', 'MiniLibX', 'Matematik kütüphaneleri', 'Oyun Mekanikleri & Kullanıcı Etkileşimi', 'Raycasting Algoritmaları', 'X11 (Linux pencere yönetimi)'],
		categories: ['Game Development', 'System Programming'],
	},
	{
		title: 'Blockchain Tabanlı Noter Uygulaması',
		link: 'https://github.com/menasy/BlockChain_NoteryProject',
		summary:
			'Web3 tabanlı noter uygulamam, belgeleri SHA256 algoritmasıyla benzersiz şekilde imzalayıp Ethereum Sepolia test ağındaki Solidity akıllı sözleşmeler aracılığıyla blok zincirine kaydeder. Belgeler değiştirilemez, zaman damgalı ve herkese açık biçimde saklanır. MetaMask entegrasyonu ve sade web arayüzüyle kullanıcılar, belgelerini güvenle doğrulayıp kayıt altına alabilir.',
		media: (
			<div className="grid grid-cols-2 gap-2">
				<div className="aspect-video overflow-hidden rounded-lg">
					<img
						src="https://github.com/menasy/Project_icons/blob/main/BlockChan_Web3/BlockChainNotaryWeb.png?raw=true"
						alt="Blockchain Noter Web Arayüzü"
						loading="lazy"
						className="w-full h-full object-cover"
					/>
				</div>
				<div className="aspect-video overflow-hidden rounded-lg">
					<img
						src="https://github.com/menasy/Project_icons/blob/main/BlockChan_Web3/solFileRemixIDE.png?raw=true"
						alt="Remix IDE Solidity Kodu"
						loading="lazy"
						className="w-full h-full object-cover"
					/>
				</div>
			</div>
		),
		features: [
			'SHA256 Hash Hesaplama: Belge doğrulama ve bütünlük kontrolü',
			'Blockchain Kayıt: Ethereum Sepolia test ağı entegrasyonu',
			'Zaman Damgalama: Belgelerin kaydedilme zamanının blockchain\'de saklanması',
			'MetaMask Entegrasyonu: Kolay kullanım için cüzdan bağlantısı',
			'Tekrar Önleme: Aynı belgenin birden fazla kez kaydedilmesinin engellenmesi',
			'Belge Doğrulama: Belgelerin değişip değişmediğinin kontrol edilmesi',
		],
		technologies: ['Solidity', 'Ethereum Sepolia Test Ağı', 'Ethers.js', 'CryptoJS', 'HTML/JavaScript', 'MetaMask', 'Remix IDE', 'Web3 Teknolojileri'],
		categories: ['Blockchain Development'],
	},
	{
		title: 'Philosophers42',
		link: 'https://github.com/menasy/philosophers-42',
		summary:
			'C dilinde geliştirdiğim Philosophers42 projesi, klasik "The Dining Philosophers Problem" simülasyonudur. Pthread ve mutex mekanizmalarını kullanarak paylaşılan kaynaklar için rekabet eden filozofların deadlock yaşamadan yemek yeme ve düşünme döngülerini yönettim. Yarış koşulları ve senkronizasyon problemlerini çözerek, çoklu iş parçacığı programlama konusunda değerli deneyim kazandım.',
		media: (
			<div className="aspect-video overflow-hidden rounded-lg">
				<img
					src="https://raw.githubusercontent.com/menasy/Project_icons/main/Philo/philo.png"
					alt="Philo Icon"
					loading="lazy"
					className="w-full h-full object-cover"
				/>
			</div>
		),
		features: [
			'Yarış koşulları (race conditions)',
			'Kaynak paylaşımı optimizasyonu',
			'Deadlock çözümleri',
			'Çoklu iş parçacığı senkronizasyonu',
			'Zamanlama algoritmaları',
		],
		technologies: ['C', 'pthread', 'mutex', 'Semaforlar', 'Paralel programlama', 'Süreç yönetimi'],
		categories: ['Concurrent Programming', 'System Programming'],
	},
];

export const otherProjects = [
	{
		title: 'Cpp Module',
		link: 'https://github.com/menasy/Cpp_Module',
		description:
			'42 okulundaki C++ modüllerini tamamlayarak nesne yönelimli programlamanın derinliklerini öğrendim. Bellek yönetimi, polimorfizm ve abstract sınıflar konularında uzmanlaştım. Öğrenme sürecimi Medium yazı serimde detaylandırdım.',
		technologies: ['C++', 'OOP', 'STL'],
		categories: ['Object-Oriented Programming', 'System Programming'],
	},
	{
		title: 'JavaScript Projects',
		link: 'https://github.com/menasy/JavaScript_Project',
		description:
			'JavaScript, TypeScript ve Tailwind CSS kullanarak çeşitli web uygulamaları geliştirdim. Modern web teknolojileri ile DOM işlemleri, API entegrasyonları ve kullanıcı arayüzü tasarımı konularında pratik kazandım.',
		technologies: ['JavaScript', 'TypeScript', 'Tailwind CSS', 'HTML/CSS'],
		categories: ['Frontend Development'],
	},
	{
		title: 'WpGroup_Extractor',
		link: 'https://github.com/menasy/wpGroup-Extractor',
		description:
			'WhatsApp gruplarındaki numaraları otomatik olarak çeken ve belirtilen kaynak veri ile karşılaştırarak grup üyelerini yöneten Node.js uygulaması. Docker ve Docker Compose ile konteyner ortamında çalışacak şekilde geliştirildi.',
		technologies: ['Node.js', 'JavaScript', 'Docker', 'Venom Bot'],
		categories: ['Automation', 'Backend Development'],
	},
	{
		title: 'MobilApp Playground',
		link: 'https://github.com/menasy/MobileApp_Playground',
		description:
			'Kotlin ve Java kullanarak Android uygulamaları geliştirdiğim proje koleksiyonu. Mobil uygulama geliştirme süreçlerini, kullanıcı arayüzü tasarımını ve veri yönetimini öğrenmek için çeşitli deneysel uygulamalar içeriyor.',
		technologies: ['Kotlin', 'Java', 'Android SDK'],
		categories: ['Mobile Application Development'],
	},
	{
		title: 'Java101',
		link: 'https://github.com/menasy/Java_Playground',
		description:
			'Java programlama dilinin temellerinden ileri seviye konularına kadar çeşitli projeler geliştirdim. Algoritma geliştirme, veri yapıları ve problem çözme teknikleri üzerine odaklanarak Java becerilerimi pekiştirdim.',
		technologies: ['Java', 'Algoritmalar', 'Veri Yapıları'],
		categories: ['Algorithms & Data Structures', 'Object-Oriented Programming'],
	},
	{
		title: 'Visual Programming',
		link: 'https://github.com/menasy/VisualProgramming_CSharp',
		description:
			'C# ve .NET Framework kullanarak Windows Forms tabanlı masaüstü uygulamaları geliştirdim. Kimlik doğrulama, quiz sistemleri, bahis simülasyonu ve rezervasyon yönetimi gibi farklı işlevlere sahip uygulamalar içeriyor.',
		technologies: ['C#', '.NET Framework', 'Windows Forms'],
		categories: ['Desktop Application Development', 'Object-Oriented Programming'],
	},
	{
		title: 'Mine Sweeper',
		link: 'https://github.com/menasy/Mine_Sweeper_Game',
		description:
			'Java ile konsol tabanlı klasik mayın tarlası oyunu. Özelleştirilebilir ızgara boyutları, dinamik zorluk seviyeleri ve kullanıcı skorlama sistemi ile geliştirildi.',
		technologies: ['Java', 'Console UI'],
		categories: ['Game Development', 'Object-Oriented Programming'],
	},
	{
		title: 'Net_Practice',
		link: 'https://github.com/menasy/NetPractice',
		description:
			'Ağ protokolleri ve konfigürasyonları üzerine derinlemesine çalışma. IP adresleme, subnetting, routing tablolarını ve ağ topolojilerini öğrenmek için geliştirilen pratik senaryolar.',
		technologies: ['Networking', 'TCP/IP', 'Routing'],
		categories: ['Network Engineering', 'System Administration'],
	},
	{
		title: 'Push_swap Sorting',
		link: 'https://github.com/menasy/push_swap',
		description:
			'Stack veri yapısı kullanarak sayısal dizileri minimum işlem sayısıyla sıralayan algoritma projesi. Performans optimizasyonu ve algoritma karmaşıklığı analizi odaklı geliştirildi.',
		technologies: ['C', 'Stack Data Structure', 'Algorithms'],
		categories: ['Algorithms & Data Structures', 'System Programming'],
	},
	{
		title: 'So_long Game',
		link: 'https://github.com/menasy/so_long',
		description:
			'MiniLibX grafik kütüphanesi ile 2D oyun geliştirme projesi. Piksel tabanlı hareket sistemi, çarpışma tespiti ve oyun durumu yönetimi implementasyonları içeriyor.',
		technologies: ['C', 'MiniLibX', 'Game Development'],
		categories: ['Game Development', 'System Programming'],
	},
	{
		title: 'Minitalk',
		link: 'https://github.com/menasy/Minitalk',
		description:
			'UNIX sinyal sistemini kullanarak süreçler arası iletişim sağlayan C projesi. Bit manipülasyonu ve asenkron programlama kavramlarını pratik olarak uygulayan bir çalışma.',
		technologies: ['C', 'UNIX Signals', 'IPC'],
		categories: ['System Programming'],
	},
	{
		title: 'Born_to_be_root',
		link: '#',
		description:
			'Linux sistem yönetimi ve güvenlik konfigürasyonları projesi. Sanal makine kurulumu, kullanıcı yönetimi, güvenlik duvarı ayarları ve servis konfigürasyonları ile sistem yöneticiliği becerilerimi geliştirdim.',
		technologies: ['Linux', 'System Administration', 'Security'],
		categories: ['System Administration'],
	},
	{
		title: 'Libft Library',
		link: 'https://github.com/menasy/libft',
		description:
			'C dilinde 42 temel fonksiyondan oluşan kişisel kütüphane implementasyonu. Standart C library fonksiyonlarını yeniden yazarak, algoritma geliştirme ve bellek yönetimi becerilerimi pekiştirdim.',
		technologies: ['C', 'Memory Management', 'Algorithms'],
		categories: ['Library Development', 'System Programming'],
	},
	{
		title: 'Ft_printf',
		link: 'https://github.com/menasy/ft_printf',
		description:
			'C dilinde printf fonksiyonunu sıfırdan yeniden yazma projesi. Variadic fonksiyonlar, format specifier parsing ve bellek yönetimi konularında derinlemesine deneyim kazandım.',
		technologies: ['C', 'Variadic Functions', 'String Parsing'],
		categories: ['Library Development', 'System Programming'],
	},
	{
		title: 'Data Analysis & Visualization',
		link: '#',
		description:
			'Python ekosistemi kullanarak emlak verilerinin analizi ve görselleştirilmesi projesi. Pandas ile veri temizleme, Matplotlib ile grafik oluşturma ve istatistiksel analiz teknikleri uygulandı.',
		technologies: ['Python', 'Pandas', 'Matplotlib'],
		categories: ['Data Science'],
	},
];


