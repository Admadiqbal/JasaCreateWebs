// ======================================================
// XIONBLUDEV - MAIN JAVASCRIPT
// ======================================================

document.addEventListener("DOMContentLoaded", () => {

    // ======================================================
    // MENU MOBILE
    // ======================================================

    const hamburger = document.getElementById("hamburger");
    const navMenu = document.getElementById("navMenu");

    function bukaTutupMenu() {
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");

        document.body.style.overflow =
            navMenu.classList.contains("active")
                ? "hidden"
                : "";
    }

    function tutupMenu() {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
        document.body.style.overflow = "";
    }

    if (hamburger && navMenu) {

        hamburger.addEventListener("click", (e) => {
            e.stopPropagation();
            bukaTutupMenu();
        });

        document.querySelectorAll(".nav-menu a").forEach(link => {
            link.addEventListener("click", () => {
                tutupMenu();
            });
        });

        document.addEventListener("click", (e) => {

            if (
                !hamburger.contains(e.target) &&
                !navMenu.contains(e.target)
            ) {
                tutupMenu();
            }

        });

        window.addEventListener("resize", () => {

            if (window.innerWidth > 768) {
                tutupMenu();
            }

        });

        window.addEventListener("scroll", () => {

            if (
                navMenu.classList.contains("active")
            ) {
                tutupMenu();
            }

        });
    }

    // ======================================================
    // FORM PEMESANAN WHATSAPP
    // ======================================================

    const formPesan = document.getElementById("formPesan");

    if (formPesan) {

        formPesan.addEventListener("submit", (e) => {

            e.preventDefault();

            const nama =
                document.querySelector('[name="nama"]')?.value.trim();

            const telepon =
                document.querySelector('[name="telepon"]')?.value.trim();

            const email =
                document.querySelector('[name="email"]')?.value.trim() || "-";

            const layanan =
                document.querySelector('[name="layanan"]')?.value || "-";

            const paket =
                document.querySelector('[name="paket"]')?.value || "-";

            const catatan =
                document.querySelector('[name="catatan"]')?.value.trim() ||
                "Tidak ada catatan";

            if (!nama || !telepon) {
                alert("Nama dan nomor WhatsApp wajib diisi.");
                return;
            }

            const nomorWA = "6281271617785";

            const pesan =
` *PESANAN BARU WEBSITE*

 *Nama:* ${nama}
 *Telepon:* ${telepon}
 *Email:* ${email}

 *Layanan:* ${layanan}
 *Paket:* ${paket}

 *Catatan:*
${catatan}`;

            const url =
                `https://wa.me/${nomorWA}?text=${encodeURIComponent(pesan)}`;

            window.open(url, "_blank");

        });

    }

    // ======================================================
    // FOOTER MUNCUL DI BAGIAN BAWAH
    // ======================================================

    const footer = document.querySelector("footer");

    if (footer) {

        window.addEventListener("scroll", () => {

            const posisiScroll =
                window.scrollY + window.innerHeight;

            const tinggiDokumen =
                document.documentElement.scrollHeight;

            if (posisiScroll >= tinggiDokumen - 100) {
                footer.classList.add("show-footer");
            } else {
                footer.classList.remove("show-footer");
            }

        });

    }

    // ======================================================
    // ANIMASI SCROLL CARD
    // ======================================================

    const cards = document.querySelectorAll(".card");

    if ("IntersectionObserver" in window) {

        const observer = new IntersectionObserver((entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                }

            });

        }, {
            threshold: 0.1
        });

        cards.forEach(card => {
            observer.observe(card);
        });

    }

});