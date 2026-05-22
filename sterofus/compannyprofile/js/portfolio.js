// PORTFOLIO DATABASE & TRANSLATIONS
const projects = [
  // WEBSITE DEVELOPMENT
  {
    id: 1,
    category: "website",
    icon: "🏢",
    gradient: "linear-gradient(145deg, #0f172a, #1e293b)",
    title: {
      id: "Batik Nusantara Store",
      en: "Batik Nusantara Store"
    },
    desc: {
      id: "Website e-commerce batik premium dengan katalog interaktif dan sistem pembayaran terintegrasi.",
      en: "Premium batik e-commerce website with interactive catalog and integrated payment systems."
    },
    link: "https://lynk.id/storeofus.ink"
  },
  {
    id: 2,
    category: "website",
    icon: "🏥",
    gradient: "linear-gradient(145deg, #102a1d, #1e3b2e)",
    title: {
      id: "Klinik Sehat Bersama",
      en: "Klinik Sehat Bersama"
    },
    desc: {
      id: "Sistem informasi klinik terpadu dengan pemesanan jadwal dokter online dan rekam medis digital.",
      en: "Integrated clinic information system with online doctor scheduling and digital medical records."
    },
    link: "https://lynk.id/storeofus.ink"
  },
  {
    id: 3,
    category: "website",
    icon: "🎓",
    gradient: "linear-gradient(145deg, #1e293b, #2c3e50)",
    title: {
      id: "Platform Belajar EduTech",
      en: "EduTech Learning Platform"
    },
    desc: {
      id: "Platform pembelajaran online dengan modul interaktif, kuis, dan sertifikasi digital.",
      en: "Online learning platform featuring interactive modules, quizzes, and digital certifications."
    }
  },
  {
    id: 4,
    category: "website",
    icon: "🍔",
    gradient: "linear-gradient(145deg, #2a1e1e, #3d2a2a)",
    title: {
      id: "Restaurant Food Delivery",
      en: "Restaurant Food Delivery"
    },
    desc: {
      id: "Landing page modern dengan integrasi menu interaktif dan sistem pelacakan pesanan realtime.",
      en: "Modern landing page with interactive menu integration and real-time order tracking system."
    }
  },
  // UI/UX DESIGN
  {
    id: 5,
    category: "uiux",
    icon: "📊",
    gradient: "linear-gradient(145deg, #1e1b4b, #312e81)",
    title: {
      id: "SaaS Analytics Dashboard",
      en: "SaaS Analytics Dashboard"
    },
    desc: {
      id: "Desain dashboard analitik canggih dengan visualisasi chart dinamis dan mode gelap premium.",
      en: "Advanced analytics dashboard design featuring dynamic chart visualizations and premium dark mode."
    }
  },
  {
    id: 6,
    category: "uiux",
    icon: "🏃‍♂️",
    gradient: "linear-gradient(145deg, #022c22, #064e3b)",
    title: {
      id: "Fitness Tracker Mobile App",
      en: "Fitness Tracker Mobile App"
    },
    desc: {
      id: "Rancangan antarmuka aplikasi kesehatan seluler dengan fitur pelacak kalori dan rencana latihan.",
      en: "Mobile fitness app interface design with calorie tracking and personalized workout planning."
    }
  },
  {
    id: 7,
    category: "uiux",
    icon: "🏠",
    gradient: "linear-gradient(145deg, #172554, #1e3a8a)",
    title: {
      id: "Smart Home Controller UI",
      en: "Smart Home Controller UI"
    },
    desc: {
      id: "Desain UI aplikasi Internet-of-Things (IoT) untuk kontrol pencahayaan, suhu, dan keamanan rumah.",
      en: "IoT smart home control interface design for lighting, temperature, and home security."
    }
  },
  {
    id: 8,
    category: "uiux",
    icon: "🛍️",
    gradient: "linear-gradient(145deg, #581c87, #701a75)",
    title: {
      id: "Fashion E-commerce App UX",
      en: "Fashion E-commerce App UX"
    },
    desc: {
      id: "Optimasi alur checkout dan desain antarmuka aplikasi mobile toko pakaian modern.",
      en: "Checkout flow optimization and UI design for a modern clothing store mobile application."
    }
  },
  // CV & PORTFOLIO
  {
    id: 9,
    category: "cv",
    icon: "💻",
    gradient: "linear-gradient(145deg, #0c4a6e, #075985)",
    title: {
      id: "CV ATS-Friendly Software Engineer",
      en: "ATS-Friendly CV Software Engineer"
    },
    desc: {
      id: "Desain curriculum vitae minimalis terstruktur yang dioptimalkan khusus untuk screening HRD.",
      en: "Structured minimalist resume optimized specifically for HR screening systems."
    }
  },
  {
    id: 10,
    category: "cv",
    icon: "🎨",
    gradient: "linear-gradient(145deg, #1e3b2e, #102a1d)",
    title: {
      id: "Interactive Portfolio Web Rafa W.",
      en: "Interactive Portfolio Web Rafa W."
    },
    desc: {
      id: "Website portofolio interaktif kreatif dengan animasi scroll yang memukau untuk desainer UI/UX.",
      en: "Creative interactive portfolio website with stunning scroll animations for UI/UX designers."
    },
    link: "https://portofolio-2tjr.vercel.app"
  },
  {
    id: 11,
    category: "cv",
    icon: "👔",
    gradient: "linear-gradient(145deg, #7c2d12, #9a3412)",
    title: {
      id: "Executive CV Business Development",
      en: "Executive CV Business Development"
    },
    desc: {
      id: "Curriculum vitae profesional dengan infografis pencapaian karir dan metrik target bisnis.",
      en: "Professional executive resume featuring career achievement infographics and business metrics."
    }
  },
  {
    id: 12,
    category: "cv",
    icon: "📄",
    gradient: "linear-gradient(145deg, #4c1d95, #5b21b6)",
    title: {
      id: "Creative Resume Content Creator",
      en: "Creative Resume Content Creator"
    },
    desc: {
      id: "CV visual estetik dengan layout dinamis yang menonjolkan karya portofolio digital.",
      en: "Aesthetic visual resume with dynamic layouts highlighting digital portfolio work."
    }
  }
];

const i18n = {
  id: {
    portfolio_detail_title: "Karya Terbaik Kami.",
    portfolio_detail_subtitle: "Koleksi lengkap proyek desain UI/UX, pembuatan website, dan pembuatan CV profesional yang kami kerjakan sepenuh hati.",
    filter_all: "Semua Karya",
    filter_uiux: "Desain UI/UX",
    filter_web: "Pembuatan Website",
    filter_cv: "Pembuatan CV",
    nav_back: "← Kembali",
    project_view_detail: "Lihat Detail →",
    badge_uiux: "Desain UI/UX",
    badge_web: "Pembuatan Website",
    badge_cv: "Pembuatan CV",
    footer_text: "© 2024 storefus.ink Digital Studio. All rights reserved."
  },
  en: {
    portfolio_detail_title: "Our Best Creations.",
    portfolio_detail_subtitle: "A complete collection of UI/UX design, website development, and professional CV writing projects crafted with care.",
    filter_all: "All Projects",
    filter_uiux: "UI/UX Design",
    filter_web: "Web Development",
    filter_cv: "CV Creation",
    nav_back: "← Back",
    project_view_detail: "View Detail →",
    badge_uiux: "UI/UX Design",
    badge_web: "Web Development",
    badge_cv: "CV Writing",
    footer_text: "© 2024 storefus.ink Digital Studio. All rights reserved."
  }
};

let currentLang = 'id';
let currentCategory = 'all';

// RENDER FUNCTION
function renderGrid() {
  const grid = document.getElementById("portfolio-grid");
  grid.innerHTML = "";
  
  const filtered = projects.filter(p => currentCategory === 'all' || p.category === currentCategory);
  
  filtered.forEach(p => {
    const card = document.createElement("div");
    card.className = "portfolio-item show-anim";
    
    // Category badges map
    let badgeKey = "badge_web";
    if (p.category === 'uiux') badgeKey = "badge_uiux";
    if (p.category === 'cv') badgeKey = "badge_cv";
    
    card.innerHTML = `
      <a href="${p.link || '#'}" target="_blank" style="text-decoration: none; color: inherit; display: flex; flex-direction: column; height: 100%;">
        <div class="item-image" style="background: ${p.gradient}">
          <div class="item-glow"></div>
          <div class="item-icon">${p.icon}</div>
        </div>
        <div class="item-details">
          <span class="item-tag">${i18n[currentLang][badgeKey]}</span>
          <h4 class="item-title">${p.title[currentLang]}</h4>
          <p class="item-desc">${p.desc[currentLang]}</p>
          <div class="item-action">${i18n[currentLang].project_view_detail}</div>
        </div>
      </a>
    `;
    grid.appendChild(card);
  });
}

// TRANSLATION ENGINE
function toggleLanguage(lang) {
  if (lang) {
    currentLang = lang;
  } else {
    currentLang = currentLang === 'id' ? 'en' : 'id';
  }
  localStorage.setItem('preferredLang', currentLang);
  document.getElementById('lang-toggle').innerText = currentLang === 'id' ? 'EN' : 'ID';
  
  // Update translation attributes
  const elements = document.querySelectorAll('[data-i18n]');
  elements.forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (i18n[currentLang][key]) {
      el.innerHTML = i18n[currentLang][key];
    }
  });
  
  // Re-render grid to apply translations
  renderGrid();
}

// FILTER CONTROLS
function setCategory(cat, btnElement) {
  currentCategory = cat;
  
  // Update active tab styling
  document.querySelectorAll(".filter-btn").forEach(btn => {
    btn.classList.remove("active");
  });
  btnElement.classList.add("active");
  
  // Render grid with entry animation
  renderGrid();
}

// DOM LOADED INITIALIZATION
document.addEventListener("DOMContentLoaded", () => {
  // Sync Language
  const savedLang = localStorage.getItem('preferredLang');
  if (savedLang) {
    currentLang = savedLang;
  }
  
  // Apply initial language
  document.getElementById('lang-toggle').innerText = currentLang === 'id' ? 'EN' : 'ID';
  const elements = document.querySelectorAll('[data-i18n]');
  elements.forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (i18n[currentLang][key]) {
      el.innerHTML = i18n[currentLang][key];
    }
  });
  
  // Init render
  renderGrid();
  
  // Setup filter button events
  document.getElementById("btn-all").addEventListener("click", function() { setCategory("all", this); });
  document.getElementById("btn-uiux").addEventListener("click", function() { setCategory("uiux", this); });
  document.getElementById("btn-web").addEventListener("click", function() { setCategory("website", this); });
  document.getElementById("btn-cv").addEventListener("click", function() { setCategory("cv", this); });
});
