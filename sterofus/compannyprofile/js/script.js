// DATABASE MOCK & STATE
var DB = {
  feedbacks: [
    { name: "Budi Wahyono", role: "Owner Batik Nusantara", msg: "Desainnya luar biasa mewah. Website toko batik kami jadi jauh lebih profesional dan konversi penjualan meningkat 3x lipat!", rating: 5, date: "15/05/2026", time: "14:30" },
    { name: "Rizal Anggara", role: "Software Engineer", msg: "Sangat detail dan rapi. CV digital buatan storefus.ink bikin saya langsung dipanggil interview di perusahaan raksasa tech.", rating: 5, date: "10/05/2026", time: "09:15" }
  ],
  currentUser: null,
  currentRating: 0
};

var currentLang = 'id';

// INTERNATIONALIZATION (i18n) DICTIONARY
const i18n = {
  id: {
    nav_services: "Layanan", nav_portfolio: "Portfolio", nav_team: "Tim", nav_pricing: "Harga", nav_contact: "Kontak", nav_login: "Masuk",
    hero_badge: "Membangun project Digital Anda Dengan Hati",
    hero_title: "Hidup Menghidupi di<br><span class='text-gradient'>Era Digitalisasi</span>",
    hero_desc: "Kami adalah studio kreatif yang merancang website, CV profesional, dan identitas brand kelas dunia. Dirancang khusus untuk mendorong pertumbuhan bisnis Anda ke level berikutnya.",
    hero_btn_project: "Mulai Proyek", hero_btn_portfolio: "Lihat Karya",
    services_title: "Layanan Kami.", services_subtitle: "Solusi digital komprehensif yang dirancang dengan ketelitian, performa, dan keindahan tanpa kompromi.",
    service_1_title: "Website Development", service_1_desc: "Dari *landing page* elegan hingga *web app* kompleks yang memukau. Kami menggunakan teknologi terkini untuk kecepatan maksimal.", service_1_price: "Mulai Rp 1.500.000",
    service_2_title: "UI/UX Design", service_2_desc: "Antarmuka yang intuitif, cantik, dan berpusat pada pengguna.", service_2_price: "Mulai Rp 800.000",
    service_3_title: "CV & Portfolio", service_3_desc: "Desain CV ATS-friendly yang menonjol untuk memikat rekruter.", service_3_price: "Mulai Rp 150.000",
    team_title: "Tim Kreatif Kami.", team_subtitle: "Para ahli di balik karya digital menakjubkan storefus.ink.",
    team_role_1: "Website Development", team_desc_1: "Fresh Graduate dari Smk Telekomunikasi Telesandi Bekasi dengan jurusan RPL (Rekayasa Perangkat Lunak) serta aktif dalam bidang IT dan berpengalaman membuat website",
    team_role_2: "Lead UI/UX Designer & Marketer", team_desc_2: "Lulusan SMAN 5 Jakarta jurusan IPS yang aktif dan antusias untuk belajar hal baru memiliki keahlian dalam mendesign website dan keterampilankomunikasi yang baik",
    portfolio_title: "Portfolio Terbaik.", portfolio_subtitle: "Hasil karya yang membuktikan kualitas dan dedikasi kami terhadap kesempurnaan desain.",
    port_1_title: "Batik Nusantara Store", port_1_desc: "Website profil perusahaan premium dengan katalog elegan.",
    port_2_title: "Portfolio Interaktif Rizal A.", port_2_desc: "Website personal elegan untuk software engineer.",
    port_3_title: "Klinik Sehat Bersama", port_3_desc: "Website klinik responsif untuk informasi dan profil tenaga medis.",
    btn_more_portfolio: "Lihat Lebih Banyak Karya →",
    trust_title: "Kepercayaan Klien.", trust_subtitle: "Apa kata mereka yang telah merasakan dampak nyata dari karya digital kami.",
    btn_feedback: "Bagikan Pengalaman Anda →",
    pricing_title: "Pricelist Harga.", pricing_subtitle: "Harga transparan. Kualitas tanpa batas. Pilih solusi yang tepat untuk bisnis Anda.",
    price_once: "sekali bayar",
    feature_1: "1 Halaman Landing Page", feature_2: "Desain Responsif & Cepat", feature_3: "Hosting 1 Tahun", feature_4: "Website Multi-Halaman", feature_5: "UI/UX Premium (Bento Style)", feature_6: "CMS Terintegrasi",
    btn_starter: "Pilih Starter", btn_business: "Pilih Business", badge_recommended: "Direkomendasikan",
    price_cv_title: "CV & Portfolio", btn_cv: "Pilih Paket CV",
    feature_cv_1: "Desain ATS-Friendly Modern", feature_cv_2: "Format PDF & Link Web Aktif", feature_cv_3: "Revisi Maksimal 3 Kali",
    price_enterprise_title: "Custom Enterprise", btn_enterprise: "Hubungi Kami",
    feature_ent_1: "Desain Kustom Eksklusif & Kompleks", feature_ent_2: "Integrasi Sistem & CMS Khusus", feature_ent_3: "Dukungan VIP & Maintenance 6 Bulan",
    contact_title: "Hubungi Kami.", contact_subtitle: "Pilih platform favorit Anda untuk berdiskusi dengan tim kami.",
    nav_review: "Ulasan",
    modal_order_title: "Mulai Proyek Anda", modal_order_desc: "Ceritakan sedikit tentang visi Anda, dan kami akan membantu mewujudkannya.",
    opt_service: "Pilih Layanan Utama", opt_budget: "Estimasi Anggaran", btn_submit_order: "Kirim Permintaan",
    modal_fb_title: "Bagikan Pengalaman", modal_fb_desc: "Ulasan Anda akan tampil di website dan dikirimkan ke email kami.", btn_submit_fb: "Kirim Ulasan"
  },
  en: {
    nav_services: "Services", nav_portfolio: "Portfolio", nav_team: "Team", nav_pricing: "Pricing", nav_contact: "Contact", nav_login: "Login",
    hero_badge: "Building your Digital project with Heart",
    hero_title: "Living Life in the<br><span class='text-gradient'>Digitalization Era</span>",
    hero_desc: "We are a creative studio designing world-class websites, professional CVs, and brand identities. Tailored to push your business growth to the next level.",
    hero_btn_project: "Start Project", hero_btn_portfolio: "View Work",
    services_title: "Our Services.", services_subtitle: "Comprehensive digital solutions crafted with precision, performance, and uncompromising beauty.",
    service_1_title: "Website Development", service_1_desc: "From elegant landing pages to stunning complex web apps. We use cutting-edge tech for maximum speed.", service_1_price: "Starts at Rp 1.500.000",
    service_2_title: "UI/UX Design", service_2_desc: "Intuitive, beautiful, and user-centered interfaces.", service_2_price: "Starts at Rp 800.000",
    service_3_title: "CV & Portfolio", service_3_desc: "Standout ATS-friendly CV designs to captivate recruiters.", service_3_price: "Starts at Rp 150.000",
    team_title: "Our Creative Team.", team_subtitle: "The experts behind the stunning digital works of storefus.ink.",
    team_role_1: "Website Development", team_desc_1: "Fresh Graduate from SMK Telekomunikasi Telesandi Bekasi majoring in Software Engineering, active in the IT field and experienced in website development.",
    team_role_2: "Lead UI/UX Designer & Marketer", team_desc_2: "Social Science graduate from SMAN 5 Jakarta, active and enthusiastic about learning new things, skilled in website design with good communication skills.",
    portfolio_title: "Best Portfolio.", portfolio_subtitle: "Works that prove our quality and dedication to design perfection.",
    port_1_title: "Batik Nusantara Store", port_1_desc: "Premium company profile website with elegant catalog.",
    port_2_title: "Interactive Portfolio Rizal A.", port_2_desc: "Elegant personal website for software engineer.",
    port_3_title: "Klinik Sehat Bersama", port_3_desc: "Responsive clinic website for medical info and profiles.",
    btn_more_portfolio: "View More Work →",
    trust_title: "Client Trust.", trust_subtitle: "What they say who have felt the real impact of our digital works.",
    btn_feedback: "Share Your Experience →",
    pricing_title: "Pricing List.", pricing_subtitle: "Transparent pricing. Limitless quality. Choose the right solution for your business.",
    price_once: "one time payment",
    feature_1: "1 Page Landing Page", feature_2: "Responsive & Fast Design", feature_3: "1 Year Hosting", feature_4: "Multi-Page Website", feature_5: "Premium UI/UX (Bento Style)", feature_6: "Integrated CMS",
    btn_starter: "Choose Starter", btn_business: "Choose Business", badge_recommended: "Recommended",
    price_cv_title: "CV & Portfolio", btn_cv: "Choose CV Package",
    feature_cv_1: "Modern ATS-Friendly Design", feature_cv_2: "PDF & Active Web Link Format", feature_cv_3: "Maximum 3 Revisions",
    price_enterprise_title: "Custom Enterprise", btn_enterprise: "Contact Us",
    feature_ent_1: "Exclusive & Complex Custom Design", feature_ent_2: "System Integration & Custom CMS", feature_ent_3: "VIP Support & 6 Months Maintenance",
    contact_title: "Contact Us.", contact_subtitle: "Choose your favorite platform to discuss with our team.",
    nav_review: "Reviews",
    modal_order_title: "Start Your Project", modal_order_desc: "Tell us a bit about your vision, and we will help make it reality.",
    opt_service: "Select Main Service", opt_budget: "Estimated Budget", btn_submit_order: "Send Request",
    modal_fb_title: "Share Experience", modal_fb_desc: "Your review will appear on the website and be sent to our email.", btn_submit_fb: "Send Review"
  }
};

function toggleLanguage(lang) {
  if (lang) {
    currentLang = lang;
  } else {
    currentLang = currentLang === 'id' ? 'en' : 'id';
  }
  localStorage.setItem('preferredLang', currentLang);
  document.getElementById('lang-toggle').innerText = currentLang === 'id' ? 'EN' : 'ID';
  
  const elements = document.querySelectorAll('[data-i18n]');
  elements.forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (i18n[currentLang][key]) {
      el.innerHTML = i18n[currentLang][key];
    }
  });
}

// SCROLL & MODALS
function scrollToSection(sel) {
  var el = document.querySelector(sel);
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function openModal(id) {
  var m = document.getElementById('modal-' + id);
  if (m) m.classList.add('active');
}
function closeModal(id) {
  var m = document.getElementById('modal-' + id);
  if (m) m.classList.remove('active');
}

document.querySelectorAll('.overlay').forEach(o => {
  o.addEventListener('click', e => { if (e.target === o) o.classList.remove('active'); });
});

// TESTIMONIAL CAROUSEL LOGIC
let currentSlide = 0;
function renderCarousel() {
  const track = document.getElementById('testimonial-track');
  track.innerHTML = '';
  
  // Render newest first
  const reversed = [...DB.feedbacks].reverse();
  
  reversed.forEach(fb => {
    const slide = document.createElement('div');
    slide.className = 'carousel-slide';
    slide.innerHTML = `
      <div class="testi-card">
        <div class="testi-stars">${'★'.repeat(fb.rating)}${'☆'.repeat(5 - fb.rating)}</div>
        <p class="testi-quote">"${fb.msg}"</p>
        <div class="testi-meta-info">
          <strong>${fb.name}</strong>
          <span>${fb.role}</span>
          <div class="testi-date">${fb.date} • ${fb.time}</div>
        </div>
      </div>
    `;
    track.appendChild(slide);
  });
  updateCarouselPosition();
}

function updateCarouselPosition() {
  const track = document.getElementById('testimonial-track');
  track.style.transform = `translateX(-${currentSlide * 100}%)`;
}

function nextSlide() {
  if (currentSlide < DB.feedbacks.length - 1) {
    currentSlide++;
    updateCarouselPosition();
  }
}

function prevSlide() {
  if (currentSlide > 0) {
    currentSlide--;
    updateCarouselPosition();
  }
}

// RATING & FEEDBACK SUBMIT
function setRating(n) {
  DB.currentRating = n;
  document.querySelectorAll('.star-btn').forEach((btn, i) => {
    btn.classList.toggle('active', i < n);
  });
}

function submitFeedback() {
  const name = document.getElementById('fb-name').value || 'Anonymous';
  const role = document.getElementById('fb-role').value || 'Klien';
  const msg = document.getElementById('fb-msg').value;
  
  if (!msg || !DB.currentRating) {
    showToast(currentLang === 'id' ? 'Mohon isi rating dan pesan!' : 'Please provide rating and message!', 'error');
    return;
  }
  
  const now = new Date();
  const dateStr = now.toLocaleDateString('id-ID', { day: '2-digit', month: '2-digit', year: 'numeric' });
  const timeStr = now.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' });
  
  // Push to local DB array
  DB.feedbacks.push({ name, role, msg, rating: DB.currentRating, date: dateStr, time: timeStr });
  
  // SEND TO FORMSPREE VIA FETCH
  fetch("https://formspree.io/f/xojbdjkq", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      subject: "New Testimonial Review",
      name: name,
      role: role,
      rating: DB.currentRating,
      message: msg,
      date: dateStr,
      time: timeStr
    })
  }).catch(err => console.log("Formspree error: ", err));

  // Update UI
  currentSlide = 0; // Go back to first slide (newest)
  renderCarousel();
  closeModal('feedback');
  showToast(currentLang === 'id' ? 'Ulasan terkirim ke website dan admin!' : 'Review sent to website and admin!', 'success');
  
  // Reset
  document.getElementById('fb-name').value = '';
  document.getElementById('fb-role').value = '';
  document.getElementById('fb-msg').value = '';
  setRating(0);
}

// TOAST
function showToast(msg, type) {
  var t = document.getElementById('toast');
  t.innerHTML = (type === 'success' ? '✨ ' : '⚠️ ') + msg;
  t.className = 'toast ' + (type || '');
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 4000);
}

// INITIALIZATION
document.addEventListener('DOMContentLoaded', () => {
  // Load preferred language
  const savedLang = localStorage.getItem('preferredLang');
  if (savedLang && savedLang !== currentLang) {
    toggleLanguage(savedLang);
  }

  renderCarousel(); // Init testimonials

  // Navbar Scroll
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) navbar.classList.add('scrolled');
    else navbar.classList.remove('scrolled');
  });

  // Reveal Animation
  const observerOptions = { threshold: 0.15, rootMargin: '0px 0px -50px 0px' };
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);
  document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

  // Parallax Hero Background
  const heroSection = document.getElementById('home');
  const heroBg = document.getElementById('hero-bg-parallax');
  
  if (heroSection && heroBg) {
    heroSection.addEventListener('mousemove', (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 30; 
      const y = (e.clientY / window.innerHeight - 0.5) * 30;
      heroBg.style.transform = `scale(1.1) translate(${x}px, ${y}px)`;
    });
    
    heroSection.addEventListener('mouseleave', () => {
      heroBg.style.transform = `scale(1.1) translate(0px, 0px)`;
    });
  }
});
