export interface Project {
  id: string;
  title: string;
  shortDesc: string;
  longDesc: string;
  tags: string[];
  githubUrl?: string;
  demoUrl?: string;
  features: string[];
  challenge: string;
  solution: string;
}

export interface Experience {
  company: string;
  role: string;
  program: string;
  period: string;
  location: string;
  achievements: string[];
}

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  program: string;
  certNumber: string;
  date: string;
  division: string;
  grade: string;
  fileUrl: string;
  thumbnailUrl?: string;
}

export interface Education {
  school: string;
  major: string;
  period: string;
  desc?: string;
}

export interface Skill {
  name: string;
  level: number; // 1-5 or simple badge
  colorClass: string; // e.g. 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20'
  dotClass: string; // e.g. 'bg-blue-500'
}

export interface SkillCategory {
  categoryName: string;
  skills: Skill[];
}

export interface ContactInfo {
  email: string;
  phone: string;
  whatsappUrl: string;
  github: string;
  githubUrl: string;
  location: string;
  linkedinUrl: string;
}

export interface PortfolioContent {
  nav: {
    about: string;
    skills: string;
    experience: string;
    projects: string;
    certificates: string;
    education: string;
    contact: string;
  };
  hero: {
    status: string;
    greeting: string;
    name: string;
    title: string;
    tagline: string;
    btnCv: string;
    btnContact: string;
    avatarInitials: string;
    avatarUrl?: string;
  };
  about: {
    title: string;
    text1: string;
    text2: string;
    statusLabel: string;
    statusVal: string;
    locationLabel: string;
    locationVal: string;
  };
  skills: {
    title: string;
    subtitle: string;
  };
  experience: {
    title: string;
    subtitle: string;
    list: Experience[];
  };
  projects: {
    title: string;
    subtitle: string;
    modalBtnClose: string;
    modalGithub: string;
    modalDemo: string;
    modalFeatures: string;
    modalChallenge: string;
    modalSolution: string;
    list: Project[];
  };
  certificates: {
    title: string;
    subtitle: string;
    modalPreview: string;
    modalDownload: string;
    modalCertNumber: string;
    list: Certificate[];
  };
  education: {
    title: string;
    subtitle: string;
    list: Education[];
  };
  contact: {
    title: string;
    subtitle: string;
    formName: string;
    formEmail: string;
    formMsg: string;
    formBtn: string;
    formSuccess: string;
    info: ContactInfo;
  };
  footer: string;
}

export const portfolioData: { id: PortfolioContent; en: PortfolioContent } = {
  id: {
    nav: {
      about: "Tentang Saya",
      skills: "Keahlian",
      experience: "Pengalaman",
      projects: "Proyek",
      certificates: "Sertifikat",
      education: "Pendidikan",
      contact: "Hubungi",
    },
    hero: {
      status: "Terbuka untuk Magang",
      greeting: "Halo, saya",
      name: "Mahesa Tri Anugrah Putra",
      title: "Full-Stack Developer",
      tagline: "Mahasiswa tingkat akhir Teknologi Rekayasa Perangkat Lunak yang fokus di full-stack development — dari UI responsif hingga arsitektur database.",
      btnCv: "Unduh CV",
      btnContact: "Hubungi Saya",
      avatarInitials: "MA",
      avatarUrl: "/profile.jpg",
    },
    about: {
      title: "Tentang Saya",
      text1: "Saya adalah mahasiswa semester akhir program studi Sarjana Terapan Teknologi Rekayasa Perangkat Lunak di Politeknik Negeri Banyuwangi. Saya memiliki ketertarikan mendalam dalam rekayasa perangkat lunak, terutama dalam mengembangkan aplikasi web dan mobile yang responsif, berkinerja tinggi, dan ramah pengguna.",
      text2: "Dengan pengalaman mengerjakan berbagai proyek perkuliahan maupun mandiri menggunakan Laravel, Flutter, dan Next.js, saya terbiasa menangani siklus pengembangan perangkat lunak dari perancangan database, pembuatan API, hingga pengembangan antarmuka pengguna yang bersih dan modern. Saya senang mempelajari teknologi baru dan siap memberikan kontribusi dalam lingkungan kerja profesional.",
      statusLabel: "Status Magang",
      statusVal: "Mencari Magang / Lowongan Pekerjaan",
      locationLabel: "Lokasi",
      locationVal: "Banyuwangi, Jawa Timur, Indonesia",
    },
    skills: {
      title: "Keahlian Teknis",
      subtitle: "Kombinasi bahasa pemrograman, framework, dan peralatan yang saya gunakan untuk mewujudkan ide menjadi aplikasi digital.",
    },
    experience: {
      title: "Pengalaman Magang",
      subtitle: "Pengalaman kerja nyata di industri teknologi.",
      list: [
        {
          company: "PT Vinix Seven Aurum",
          role: "Web Dev UI/UX",
          program: "MSIB Kampus Merdeka Batch 4",
          period: "Februari 2026 – Juni 2026",
          location: "Yogyakarta",
          achievements: [
            "Menganalisis permasalahan dan mengembangkan solusi digital berbasis konsep startup.",
            "Menerapkan metode UI/UX Design Thinking dalam perancangan produk digital.",
            "Melaksanakan user research serta menyusun user persona dan user journey.",
            "Merancang wireframe dan user flow sebagai blueprint pengembangan produk.",
            "Mendesain antarmuka pengguna (UI) dan membuat high-fidelity prototype interaktif.",
            "Mengembangkan halaman website menggunakan HTML dan CSS (tampilan responsif).",
            "Membangun landing page menggunakan platform no-code/low-code.",
            "Melakukan usability testing, evaluasi desain, serta deployment website.",
          ],
        },
      ],
    },
    projects: {
      title: "Proyek Pilihan",
      subtitle: "Berikut adalah beberapa proyek utama yang telah saya kembangkan, menunjukkan kemampuan saya dalam pengembangan frontend, backend, dan aplikasi mobile.",
      modalBtnClose: "Tutup",
      modalGithub: "Lihat Repositori",
      modalDemo: "Kunjungi Live Demo",
      modalFeatures: "Fitur Utama",
      modalChallenge: "Tantangan",
      modalSolution: "Solusi",
      list: [
        {
          id: "kasir-pintar",
          title: "Kasir Pintar",
          shortDesc: "Aplikasi kasir (Point of Sale) modern berbasis web untuk mengelola transaksi, stok barang, dan laporan penjualan usaha retail.",
          longDesc: "Kasir Pintar dirancang untuk membantu pemilik toko mengelola operasi harian mereka secara efisien. Web ini mempermudah pencatatan transaksi real-time, manajemen inventaris otomatis, dan pembuatan laporan keuangan bulanan secara visual.",
          tags: ["Laravel", "Dart", "MySQL", "Tailwind CSS"],
          githubUrl: "https://github.com/mahesa/kasir-pintar",
          demoUrl: "https://kasirpintar.mahesa.dev",
          features: [
            "Manajemen Inventaris & Stok secara real-time dengan notifikasi stok rendah.",
            "Transaksi Kasir Cepat dengan pemindaian barcode (mocked) dan kalkulasi otomatis.",
            "Pencetakan Struk Pembelian dalam format PDF atau printer termal.",
            "Dashboard Laporan Penjualan harian, mingguan, dan bulanan menggunakan grafik interaktif."
          ],
          challenge: "Sinkronisasi data stok barang secara real-time saat transaksi berlangsung cepat dan bersamaan agar tidak terjadi konflik data penjualan.",
          solution: "Menerapkan database transactions di Laravel dan mengoptimalkan query SQL dengan indeks yang tepat untuk menjamin integritas data serta performa aplikasi yang cepat."
        },
        {
          id: "glory-ponsel",
          title: "Glory Ponsel",
          shortDesc: "Platform e-commerce penjualan handphone dengan katalog produk interaktif dan sistem manajemen stok gudang (backoffice).",
          longDesc: "Glory Ponsel adalah solusi e-commerce lengkap yang melayani pemesanan online oleh pelanggan dan menyediakan panel admin (backoffice) untuk mengelola inventaris, memproses pesanan, serta memantau status pengiriman barang.",
          tags: ["Laravel", "Bootstrap", "MySQL"],
          githubUrl: "https://github.com/mahesa/glory-ponsel",
          demoUrl: "https://gloryponsel.mahesa.dev",
          features: [
            "Katalog Handphone interaktif dengan filter kategori merek, harga, dan spesifikasi.",
            "Sistem Keranjang Belanja dan checkout terintegrasi.",
            "Panel Admin (Dashboard) untuk memantau status pesanan, total pendapatan, dan pembaruan katalog produk.",
            "Manajemen Pengguna terbagi atas Administrator dan Pelanggan."
          ],
          challenge: "Membuat alur pemesanan yang aman dan memastikan admin mendapatkan notifikasi instan ketika ada pesanan baru untuk segera diproses.",
          solution: "Mengimplementasikan sistem otentikasi bawaan Laravel dengan middleware pengaman peran (role protection) serta menggunakan email/event listener untuk notifikasi pesanan baru."
        },
        {
          id: "spk-handphone",
          title: "SPK Handphone (CBR & Euclidean)",
          shortDesc: "Sistem Pendukung Keputusan pemilihan handphone terbaik berbasis web menggunakan metode Case-Based Reasoning (CBR) dan algoritma Euclidean Distance.",
          longDesc: "Aplikasi ini memecahkan masalah pemilihan handphone yang sering kali membingungkan pembeli dengan cara mencocokkan kriteria kebutuhan pengguna (budget, RAM, kamera, baterai) dengan kasus-kasus data handphone yang sudah ada sebelumnya menggunakan komputasi kemiripan (similarity).",
          tags: ["PHP", "CBR", "Euclidean Distance", "MySQL"],
          githubUrl: "https://github.com/mahesa/spk-handphone",
          demoUrl: "https://spk-hp.mahesa.dev",
          features: [
            "Input Parameter Kebutuhan Pengguna secara fleksibel (harga, memori, ukuran layar, kualitas kamera).",
            "Mesin Pencarian Kemiripan Kasus menggunakan algoritma Euclidean Distance.",
            "Perangkingan Rekomendasi Handphone dari nilai kemiripan (similarity score) tertinggi hingga terendah.",
            "Kelola Basis Pengetahuan Kasus oleh Admin untuk menambah atau mengubah data spesifikasi handphone."
          ],
          challenge: "Memproses perhitungan matematika rumus Euclidean Distance pada sekumpulan data spesifikasi secara dinamis dengan waktu respon seminimal mungkin.",
          solution: "Menulis algoritma komputasi Euclidean yang efisien dalam script PHP murni dan mengoptimalkan pemanggilan query database agar data yang diambil bersih dan siap dikalkulasi."
        },
        {
          id: "aturduit-mobile",
          title: "AturDuit Mobile",
          shortDesc: "Aplikasi mobile manajemen keuangan pribadi untuk mencatat pemasukan, pengeluaran, menetapkan anggaran, dan memvisualisasikan alur keuangan.",
          longDesc: "AturDuit Mobile hadir untuk membantu pengguna mengontrol finansial harian mereka langsung dari smartphone. Aplikasi ini memfasilitasi pencatatan cepat kategori pengeluaran dan memberikan rangkuman visual yang mudah dipahami.",
          tags: ["Flutter", "Dart", "SQLite", "Bloc"],
          githubUrl: "https://github.com/mahesa/aturduit-mobile",
          demoUrl: "https://github.com/mahesa/aturduit-mobile/releases",
          features: [
            "Pencatatan Pemasukan & Pengeluaran dengan kategorisasi ikonik (Makanan, Transportasi, Hiburan, dll).",
            "Visualisasi Laporan Keuangan mingguan & bulanan menggunakan Pie Charts dan Bar Charts.",
            "Batas Anggaran Bulanan (Budgeting limits) dengan sistem peringatan jika pengeluaran melebihi limit.",
            "Penyimpanan Lokal yang aman dengan database SQLite di memori smartphone."
          ],
          challenge: "Mengelola state alur data aplikasi yang kompleks agar grafik keuangan langsung terupdate saat transaksi baru ditambahkan oleh pengguna.",
          solution: "Menggunakan library Flutter BLoC sebagai state management untuk memisahkan logika bisnis aplikasi dari UI, serta memastikan sinkronisasi database lokal SQLite yang andal."
        },
        {
          id: "aturduit-web",
          title: "AturDuit Web",
          shortDesc: "Platform web manajemen keuangan AturDuit dengan optimasi Server-Side Rendering (SSR) untuk performa cepat dan integrasi SEO yang maksimal.",
          longDesc: "Merupakan pendamping web dari versi mobile, AturDuit Web memungkinkan pengguna mengakses data keuangan mereka melalui browser. Versi web ini berfokus pada render halaman yang cepat dan kemudahan navigasi layar lebar.",
          tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "SSR"],
          githubUrl: "https://github.com/mahesa/aturduit-web",
          demoUrl: "https://aturduit.mahesa.dev",
          features: [
            "Sinkronisasi Akun Lintas Platform (akses data mobile dari web secara instan).",
            "Dashboard Keuangan Premium dengan analisis laporan mendalam.",
            "Halaman Publik yang dioptimalkan SEO untuk meningkatkan jangkauan pemasaran aplikasi.",
            "Mode Gelap / Terang responsif bawaan Next.js."
          ],
          challenge: "Memastikan pemuatan halaman awal sangat cepat (optimal FCP) dan ramah mesin pencari (SEO) sambil tetap mempertahankan interaktivitas grafik dashboard.",
          solution: "Memanfaatkan Next.js Server Components untuk melakukan Server-Side Rendering (SSR) pada halaman statis, dan menggunakan Client Components yang dimuat secara asinkron (lazy-loaded) untuk memuat grafik interaktif."
        }
      ]
    },
    certificates: {
      title: "Sertifikat",
      subtitle: "Sertifikat resmi dari program magang dan pelatihan yang telah diselesaikan.",
      modalPreview: "Preview",
      modalDownload: "Download PDF",
      modalCertNumber: "No. Sertifikat",
      list: [
        {
          id: "vinix-msib4",
          title: "Sertifikat Magang Mandiri",
          issuer: "PT Vinix Seven Aurum",
          program: "MSIB Kampus Merdeka Batch 4",
          certNumber: "007/Batch-IV-MSIB/VINIX7/Div-Web Dev UI/UX",
          date: "23 Juni 2026",
          division: "Web Dev UI/UX",
          grade: "Sangat Baik",
          fileUrl: "/certificates/sertifikat-vinix-msib4.pdf",
        },
      ],
    },
    education: {
      title: "Riwayat Pendidikan",
      subtitle: "Perjalanan akademis saya dalam menempuh pendidikan teknologi dan rekayasa perangkat lunak.",
      list: [
        {
          school: "Politeknik Negeri Banyuwangi",
          major: "Sarjana Terapan (D4) Teknologi Rekayasa Perangkat Lunak (Bisnis & Informatika)",
          period: "Juni 2023 – Maret 2027",
          desc: "Fokus pada rekayasa perangkat lunak, pemrograman berorientasi objek, arsitektur database, pengembangan web enterprise, metodologi agile, dan manajemen proyek TI. Memiliki IPK yang sangat memuaskan dan aktif dalam berbagai proyek praktikum tim."
        },
        {
          school: "SMA Negeri 1 Giri",
          major: "Ilmu Pengetahuan Sosial (IPS)",
          period: "Juni 2020 – Maret 2023",
          desc: "Aktif dalam organisasi siswa, mengembangkan keterampilan kepemimpinan, komunikasi, serta pemecahan masalah dasar. Memiliki minat awal pada dunia teknologi informasi dan digital sejak masa sekolah menengah."
        }
      ]
    },
    contact: {
      title: "Hubungi Saya",
      subtitle: "Punya tawaran magang, proyek, atau ingin berdiskusi? Jangan ragu untuk menghubungi saya melalui kontak di bawah ini.",
      formName: "Nama Lengkap",
      formEmail: "Alamat Email",
      formMsg: "Pesan Anda",
      formBtn: "Kirim Pesan",
      formSuccess: "Pesan Anda berhasil dikirim! Saya akan segera menghubungi Anda kembali.",
      info: {
        email: "mahesatrianugrahp@gmail.com",
        phone: "+62 895-377-105-018",
        whatsappUrl: "https://wa.me/62895377105018?text=Halo%20Mahesa%2C%20saya%20tertarik%20dengan%20portofolio%20Anda.",
        github: "github.com/mahesa",
        githubUrl: "https://github.com/mahesa",
        location: "Banyuwangi, Jawa Timur, Indonesia",
        linkedinUrl: "https://linkedin.com/in/mahesa-tri-anugrah-putra" // Tambahan profesional
      }
    },
    footer: "© 2026 Mahesa Tri Anugrah Putra. Dibuat dengan penuh dedikasi menggunakan Next.js & Tailwind CSS."
  },
  en: {
    nav: {
      about: "About Me",
      skills: "Skills",
      experience: "Experience",
      projects: "Projects",
      certificates: "Certificates",
      education: "Education",
      contact: "Contact",
    },
    hero: {
      status: "Open to Internship",
      greeting: "Hi, I am",
      name: "Mahesa Tri Anugrah Putra",
      title: "Full-Stack Developer",
      tagline: "A final-year Software Engineering Technology student focusing on full-stack development — from responsive UI to database architecture.",
      btnCv: "Download CV",
      btnContact: "Get in Touch",
      avatarInitials: "MA",
      avatarUrl: "/profile.jpg",
    },
    about: {
      title: "About Me",
      text1: "I am a final-year Applied Bachelor of Software Engineering Technology student at Politeknik Negeri Banyuwangi. I have a deep interest in software engineering, specifically in developing responsive, high-performance, and user-friendly web and mobile applications.",
      text2: "With experience working on various class and independent projects using Laravel, Flutter, and Next.js, I am accustomed to handling the full software development lifecycle from database design, API creation, to clean and modern user interface development. I enjoy learning new technologies and am ready to contribute to a professional work environment.",
      statusLabel: "Internship Status",
      statusVal: "Actively seeking Internship / Job opportunities",
      locationLabel: "Location",
      locationVal: "Banyuwangi, East Java, Indonesia",
    },
    skills: {
      title: "Technical Skills",
      subtitle: "The combination of programming languages, frameworks, and tools I use to bring ideas to life as digital applications.",
    },
    experience: {
      title: "Internship Experience",
      subtitle: "Real-world work experience in the technology industry.",
      list: [
        {
          company: "PT Vinix Seven Aurum",
          role: "Web Dev UI/UX",
          program: "MSIB Kampus Merdeka Batch 4",
          period: "February 2026 – June 2026",
          location: "Yogyakarta",
          achievements: [
            "Analyzed problems and developed digital solutions based on startup concepts.",
            "Applied UI/UX Design Thinking methodology in digital product design.",
            "Conducted user research and compiled user personas and user journeys.",
            "Designed wireframes and user flows as product development blueprints.",
            "Created user interface (UI) designs and built high-fidelity interactive prototypes.",
            "Developed web pages using HTML and CSS (responsive layouts).",
            "Built landing pages using no-code/low-code platforms.",
            "Performed usability testing, design evaluation, and website deployment.",
          ],
        },
      ],
    },
    projects: {
      title: "Featured Projects",
      subtitle: "Here are some of the main projects I have developed, showcasing my capabilities in frontend, backend, and mobile development.",
      modalBtnClose: "Close",
      modalGithub: "View Repository",
      modalDemo: "Visit Live Demo",
      modalFeatures: "Key Features",
      modalChallenge: "The Challenge",
      modalSolution: "The Solution",
      list: [
        {
          id: "kasir-pintar",
          title: "Kasir Pintar",
          shortDesc: "A modern web-based Point of Sale (POS) cashier application to manage transactions, inventory, and retail business sales reports.",
          longDesc: "Kasir Pintar is designed to help shop owners manage their daily operations efficiently. This platform facilitates real-time transaction logging, automatic inventory tracking, and visual generation of monthly financial reports.",
          tags: ["Laravel", "Dart", "MySQL", "Tailwind CSS"],
          githubUrl: "https://github.com/mahesa/kasir-pintar",
          demoUrl: "https://kasirpintar.mahesa.dev",
          features: [
            "Real-time Inventory & Stock management with low stock alerts.",
            "Fast Cashier Transactions with barcode scanning (mocked) and automatic calculation.",
            "Receipt printing in PDF or thermal printer formats.",
            "Interactive daily, weekly, and monthly sales reports dashboard using charts."
          ],
          challenge: "Synchronizing inventory stock in real-time during rapid, concurrent cashier transactions to avoid sales data conflicts.",
          solution: "Applied database transactions in Laravel and optimized SQL queries with proper indexing to ensure data integrity and fast response times."
        },
        {
          id: "glory-ponsel",
          title: "Glory Ponsel",
          shortDesc: "An e-commerce platform for selling mobile phones with an interactive product catalog and a backoffice stock management system.",
          longDesc: "Glory Ponsel is a complete e-commerce solution that handles online customer ordering and provides an admin panel (backoffice) for inventory control, order processing, and shipment status tracking.",
          tags: ["Laravel", "Bootstrap", "MySQL"],
          githubUrl: "https://github.com/mahesa/glory-ponsel",
          demoUrl: "https://gloryponsel.mahesa.dev",
          features: [
            "Interactive Phone Catalog with brand, price, and spec filters.",
            "Integrated Shopping Cart and checkout system.",
            "Admin Dashboard to track order status, total revenue, and product catalog updates.",
            "Role-based User Management split between Administrator and Customers."
          ],
          challenge: "Structuring a secure checkout workflow and ensuring admins receive instant notifications when new orders are placed.",
          solution: "Implemented Laravel's built-in authentication system with role-protecting middleware and leveraged events/listeners to notify administrators of new orders."
        },
        {
          id: "spk-handphone",
          title: "SPK Handphone (CBR & Euclidean)",
          shortDesc: "A web-based Decision Support System for choosing the best mobile phone using Case-Based Reasoning (CBR) and Euclidean Distance algorithms.",
          longDesc: "This application solves the purchase dilemma of choosing a smartphone by matching user-defined criteria (budget, RAM, camera, battery) with historical smartphone case data using similarity computations.",
          tags: ["PHP", "CBR", "Euclidean Distance", "MySQL"],
          githubUrl: "https://github.com/mahesa/spk-handphone",
          demoUrl: "https://spk-hp.mahesa.dev",
          features: [
            "Flexible User Input criteria (price, memory, screen size, camera quality).",
            "Similarity Matching Engine utilizing the Euclidean Distance formula.",
            "Phone Recommendation Ranking from highest to lowest similarity score.",
            "Case Knowledge Base admin portal to add or update smartphone specification data."
          ],
          challenge: "Dynamically calculating Euclidean Distance mathematical formulas across database records with minimal response times.",
          solution: "Coded an efficient Euclidean calculation script in pure PHP and optimized SQL query lookups to retrieve clean dataset arrays ready for instant calculations."
        },
        {
          id: "aturduit-mobile",
          title: "AturDuit Mobile",
          shortDesc: "A personal finance mobile app to track income and expenses, set monthly budgets, and visualize financial cashflow.",
          longDesc: "AturDuit Mobile helps users control their daily financial transactions directly from their smartphones. It enables fast transaction logging under categories and provides readable visual reports.",
          tags: ["Flutter", "Dart", "SQLite", "Bloc"],
          githubUrl: "https://github.com/mahesa/aturduit-mobile",
          demoUrl: "https://github.com/mahesa/aturduit-mobile/releases",
          features: [
            "Income & Expense tracking with categorical icons (Food, Transport, entertainment, etc).",
            "Weekly & Monthly report visualization using interactive Pie Charts and Bar Charts.",
            "Monthly Budget limits with notification warning when expenses cross limits.",
            "Secure offline storage using SQLite on-device database."
          ],
          challenge: "Managing complex app data flow states so financial graphs update instantly when a transaction is added by the user.",
          solution: "Utilized Flutter BLoC library as state management to decouple UI from business logic, ensuring robust synchronization with the local SQLite database."
        },
        {
          id: "aturduit-web",
          title: "AturDuit Web",
          shortDesc: "A web companion for the AturDuit financial manager, utilizing Server-Side Rendering (SSR) for fast loads and optimal SEO indexing.",
          longDesc: "As the web companion of the mobile version, AturDuit Web allows users to access their financial data on a browser. It is built with a focus on rendering speed and wide-screen navigation layouts.",
          tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "SSR"],
          githubUrl: "https://github.com/mahesa/aturduit-web",
          demoUrl: "https://aturduit.mahesa.dev",
          features: [
            "Cross-Platform Account Sync (access mobile data on web instantly).",
            "Premium Financial Dashboard with detailed analysis reports.",
            "SEO-optimized Public Landing Pages to boost marketing reaches.",
            "Next.js native responsive Dark / Light themes."
          ],
          challenge: "Achieving fast initial page load metrics (optimal FCP) and SEO compliance while maintaining heavy interactive dashboard charts.",
          solution: "Leveraged Next.js Server Components for Server-Side Rendering (SSR) of static landing details and deferred load of interactive charts using client lazy-loading."
        }
      ]
    },
    certificates: {
      title: "Certificates",
      subtitle: "Official certificates from completed internship programs and professional training.",
      modalPreview: "Preview",
      modalDownload: "Download PDF",
      modalCertNumber: "Certificate No.",
      list: [
        {
          id: "vinix-msib4",
          title: "Independent Internship Certificate",
          issuer: "PT Vinix Seven Aurum",
          program: "MSIB Kampus Merdeka Batch 4",
          certNumber: "007/Batch-IV-MSIB/VINIX7/Div-Web Dev UI/UX",
          date: "June 23, 2026",
          division: "Web Dev UI/UX",
          grade: "Excellent",
          fileUrl: "/certificates/sertifikat-vinix-msib4.pdf",
          thumbnailUrl: "/certificates/sertifikat-vinix-msib4-thumb.jpg",
        },
      ],
    },
    education: {
      title: "Education History",
      subtitle: "My academic path in pursuing software engineering and information technology education.",
      list: [
        {
          school: "Politeknik Negeri Banyuwangi",
          major: "Applied Bachelor (D4) in Software Engineering Technology (Business & Informatics)",
          period: "June 2023 – March 2027",
          desc: "Focused on software engineering, object-oriented programming, database architecture, enterprise web development, agile methodologies, and IT project management. High GPA with active participation in various academic team projects."
        },
        {
          school: "SMA Negeri 1 Giri",
          major: "Social Sciences (IPS)",
          period: "June 2020 – March 2023",
          desc: "Active in student organizations, developing leadership, communication, and basic problem-solving skills. Early interest in digital and information technology developed during high school."
        }
      ]
    },
    contact: {
      title: "Contact Me",
      subtitle: "Have an internship offer, project, or want to discuss something? Feel free to contact me using the options below.",
      formName: "Full Name",
      formEmail: "Email Address",
      formMsg: "Your Message",
      formBtn: "Send Message",
      formSuccess: "Your message has been sent successfully! I will get back to you shortly.",
      info: {
        email: "mahesatrianugrahp@gmail.com",
        phone: "+62 895-377-105-018",
        whatsappUrl: "https://wa.me/62895377105018?text=Hello%20Mahesa%2C%20I%20am%20interested%20in%20your%20portfolio.",
        github: "github.com/mahesa",
        githubUrl: "https://github.com/mahesa",
        location: "Banyuwangi, East Java, Indonesia",
        linkedinUrl: "https://linkedin.com/in/mahesa-tri-anugrah-putra"
      }
    },
    footer: "© 2026 Mahesa Tri Anugrah Putra. Crafted with dedication using Next.js & Tailwind CSS."
  }
};

export const skillsData: SkillCategory[] = [
  {
    categoryName: "Backend Development",
    skills: [
      { name: "PHP", level: 5, colorClass: "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20", dotClass: "bg-blue-500" },
      { name: "Laravel", level: 5, colorClass: "bg-red-500/10 text-red-600 dark:text-red-400 border-red-500/20", dotClass: "bg-red-500" },
      { name: "SQL / MySQL", level: 4, colorClass: "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20", dotClass: "bg-amber-500" },
      { name: "RESTful API", level: 4, colorClass: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20", dotClass: "bg-emerald-500" },
      { name: "Supabase", level: 4, colorClass: "bg-emerald-600/10 text-emerald-700 dark:text-emerald-500 border-emerald-600/20", dotClass: "bg-emerald-600" }
    ]
  },
  {
    categoryName: "Frontend Development",
    skills: [
      { name: "Next.js", level: 4, colorClass: "bg-slate-500/10 text-slate-800 dark:text-slate-200 border-slate-500/20", dotClass: "bg-slate-800 dark:bg-slate-200" },
      { name: "React.js", level: 4, colorClass: "bg-sky-500/10 text-sky-600 dark:text-sky-400 border-sky-500/20", dotClass: "bg-sky-400" },
      { name: "JavaScript / TypeScript", level: 4, colorClass: "bg-yellow-500/10 text-yellow-600 dark:text-yellow-400 border-yellow-500/20", dotClass: "bg-yellow-500" },
      { name: "HTML5 / CSS3", level: 5, colorClass: "bg-orange-500/10 text-orange-600 dark:text-orange-400 border-orange-500/20", dotClass: "bg-orange-500" },
      { name: "Tailwind CSS", level: 5, colorClass: "bg-teal-500/10 text-teal-600 dark:text-teal-400 border-teal-500/20", dotClass: "bg-teal-400" }
    ]
  },
  {
    categoryName: "Mobile Development",
    skills: [
      { name: "Flutter", level: 4, colorClass: "bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border-indigo-500/20", dotClass: "bg-indigo-500" },
      { name: "Dart", level: 4, colorClass: "bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border-cyan-500/20", dotClass: "bg-cyan-400" }
    ]
  },
  {
    categoryName: "Tools & Workflow",
    skills: [
      { name: "Git", level: 4, colorClass: "bg-orange-600/10 text-orange-700 dark:text-orange-400 border-orange-600/20", dotClass: "bg-orange-600" },
      { name: "GitHub", level: 4, colorClass: "bg-neutral-500/10 text-neutral-800 dark:text-neutral-200 border-neutral-500/20", dotClass: "bg-neutral-800 dark:bg-neutral-200" },
      { name: "Postman", level: 4, colorClass: "bg-orange-500/10 text-orange-600 dark:text-orange-400 border-orange-500/20", dotClass: "bg-orange-500" },
      { name: "SQLite / SQLite3", level: 4, colorClass: "bg-blue-600/10 text-blue-700 dark:text-blue-400 border-blue-600/20", dotClass: "bg-blue-600" }
    ]
  }
];
