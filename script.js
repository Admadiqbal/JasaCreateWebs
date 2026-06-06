// === TAMPIL / SEMBUNYIKAN MENU HP ===
const menuTombol = document.querySelector('.menu-hamburger');
const navigasiMenu = document.querySelector('.nav-menu');

menuTombol.addEventListener('click', () => {
    navigasiMenu.classList.toggle('aktif');
    menuTombol.innerHTML = navigasiMenu.classList.contains('aktif') 
        ? '<i class="fas fa-times"></i>' 
        : '<i class="fas fa-bars"></i>';
});

// Tutup menu saat klik link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navigasiMenu.classList.remove('aktif');
        menuTombol.innerHTML = '<i class="fas fa-bars"></i>';
    });
});

// === ANIMASI SAAT GULIR HALAMAN ===
const pengamatOpsi = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const pengamat = new IntersectionObserver((entri) => {
    entri.forEach(item => {
        if (item.isIntersecting) {
            item.target.style.animationPlayState = 'running';
            pengamat.unobserve(item.target);
        }
    });
}, pengamatOpsi);

// Jalankan animasi jika elemen terlihat
document.querySelectorAll('.animasi-muncul, .animasi-muncul-atas, .animasi-muncul-kiri, .animasi-muncul-kanan, .animasi-ukuran').forEach(el => {
    el.style.animationPlayState = 'paused';
    pengamat.observe(el);
});

// === EFEK NAIK TURUN NAVBAR SAAT GULIR ===
let posisiTerakhir = 0;
const bilahNavigasi = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const posisiSekarang = window.pageYOffset;
    if (posisiSekarang > posisiTerakhir && posisiSekarang > 100) {
        bilahNavigasi.style.transform = 'translateY(-100%)';
    } else {
        bilahNavigasi.style.transform = 'translateY(0)';
    }
    posisiTerakhir = posisiSekarang;
});

// === GULIR HALUS SAAT KLIK MENU ===
document.querySelectorAll('a[href^="#"]').forEach(tautan => {
    tautan.addEventListener('click', function (e) {
        e.preventDefault();
        const idTujuan = this.getAttribute('href');
        const elemenTujuan = document.querySelector(idTujuan);
        
        if (elemenTujuan) {
            elemenTujuan.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// === KIRIM PESAN KONTAK ===
document.querySelector('.formulir-kontak').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Terima kasih! Pesan Anda telah terkirim. Kami akan menghubungi Anda segera.');
    this.reset();
});
