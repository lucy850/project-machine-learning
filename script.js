/* ==================================================
   SIDEBAR TOGGLE
================================================== */
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');
    
    sidebar.classList.toggle('open');
    overlay.classList.toggle('show');
    document.body.classList.toggle('sidebar-open');
}

/* ==================================================
   HERO AUTO SLIDER
================================================== */
let currentSlide = 0;
const slidesContainer = document.getElementById('heroSlides');
const dots = document.querySelectorAll('.hero-dots .dot');
const totalSlides = dots.length;

function updateSlidePosition() {
    slidesContainer.style.transform = `translateX(-${currentSlide * 100}%)`;
    
    // Update indikator dots aktif
    dots.forEach((dot, index) => {
        if (index === currentSlide) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    updateSlidePosition();
}

function goToSlide(index) {
    currentSlide = index;
    updateSlidePosition();
}

// Jalankan auto slide tiap 4 detik
let slideInterval = setInterval(nextSlide, 4000);

// Pause auto slide saat mouse diarahkan ke banner
const heroSlider = document.querySelector('.hero-slider');
if (heroSlider) {
    heroSlider.addEventListener('mouseenter', () => clearInterval(slideInterval));
    heroSlider.addEventListener('mouseleave', () => slideInterval = setInterval(nextSlide, 4000));
}

/* ==================================================
   MODAL CONTROLLER
================================================== */
function openModal(title) {
    const modal = document.getElementById('modal');
    const modalTitle = document.getElementById('modalTitle');
    
    if (modalTitle && title) {
        modalTitle.textContent = title;
    }
    
    modal.classList.add('show');
}

function closeModal() {
    const modal = document.getElementById('modal');
    modal.classList.remove('show');
}

let currentPage = 2; // Halaman aktif saat ini
const maxPage = 6;

function goToPage(page) {
    if (page < 1 || page > maxPage) return;
    
    currentPage = page;
    updatePaginationUI();
}

function changePage(direction) {
    if (direction === 'prev' && currentPage > 1) {
        currentPage--;
    } else if (direction === 'next' && currentPage < maxPage) {
        currentPage++;
    }
    updatePaginationUI();
}

function updatePaginationUI() {
    const pageButtons = document.querySelectorAll('.pagination .page-btn:not(.page-nav)');
    
    pageButtons.forEach((btn, index) => {
        const pageNum = index + 1;
        if (pageNum === currentPage) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });

    // Opsional: Atur scroll ke atas saat ganti halaman
    window.scrollTo({ top: 0, behavior: 'smooth' });
}