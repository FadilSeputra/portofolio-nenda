// Academic Transcript Data
const courses = [
    { code: "MKU-0001", name: "PANCASILA", semester: 1, sks: 2, grade: "B", category: "general" },
    { code: "MKD-0002", name: "DASAR-DASAR ARTIFICAL INTELLIGENCE", semester: 1, sks: 3, grade: "B", category: "ai" },
    { code: "MKU-0003", name: "PENDIDIKAN AGAMA", semester: 1, sks: 2, grade: "B", category: "general" },
    { code: "MKD-0004", name: "ALGORITMA DAN PEMROGRAMAN", semester: 1, sks: 3, grade: "A", category: "dev" },
    { code: "MKD-0005", name: "KALKULUS", semester: 1, sks: 3, grade: "B", category: "general" },
    { code: "MKD-0006", name: "DATA MANAGEMENT", semester: 1, sks: 3, grade: "A", category: "dev" },
    { code: "MKL-0007", name: "PENGENALAN BUDAYA CIREBON", semester: 1, sks: 2, grade: "B", category: "general" },
    { code: "MKU-0008", name: "BAHASA INGGRIS DASAR", semester: 1, sks: 2, grade: "A", category: "general" },
    { code: "MKU-0101", name: "BAHASA INDONESIA", semester: 2, sks: 2, grade: "A", category: "general" },
    { code: "MKD-0102", name: "STATISTIKA", semester: 2, sks: 3, grade: "B", category: "general" },
    { code: "MKD-0103", name: "ALJABAR LINEAR", semester: 2, sks: 3, grade: "B", category: "general" },
    { code: "MKD-0104", name: "ALGORITMA DAN PEMROGRAMAN LANJUT", semester: 2, sks: 4, grade: "A", category: "dev" },
    { code: "MKD-0105", name: "STRUKTUR DATA", semester: 2, sks: 3, grade: "A", category: "dev" },
    { code: "MKD-0106", name: "JARINGAN KOMPUTER", semester: 2, sks: 3, grade: "A", category: "net" },
    { code: "MKU-0107", name: "PENDIDIKAN KEWARGANEGARAAN", semester: 2, sks: 2, grade: "A", category: "general" },
    { code: "MDK-0301", name: "PEMROGRAMAN SQL", semester: 3, sks: 4, grade: "B", category: "dev" },
    { code: "MDK-0302", name: "REKAYASA PERANGKAT LUNAK", semester: 3, sks: 4, grade: "B", category: "dev" },
    { code: "MDK-0303", name: "MATEMATIKA DISKRIT", semester: 3, sks: 3, grade: "B", category: "general" },
    { code: "TDK-0304", name: "JARINGAN KOMPUTER LANJUT", semester: 3, sks: 3, grade: "A", category: "net" },
    { code: "MDK-0305", name: "PEMROGRAMAN WEB DASAR", semester: 3, sks: 3, grade: "A", category: "dev" },
    { code: "MDK-0306", name: "DATA SCIENCE", semester: 3, sks: 3, grade: "A", category: "ai" },
    { code: "TDK-0401", name: "JARINGAN KOMPUTER EXPERT", semester: 4, sks: 4, grade: "A", category: "net" },
    { code: "MDK-0402", name: "INTERAKSI MANUSIA DAN KOMPUTER", semester: 4, sks: 3, grade: "A", category: "ai" },
    { code: "TDK-0403", name: "METODE NUMERIK", semester: 4, sks: 3, grade: "B", category: "general" },
    { code: "MDK-0404", name: "DATA MINING", semester: 4, sks: 4, grade: "B", category: "ai" },
    { code: "MDK-0405", name: "INTERNET OF THINGS", semester: 4, sks: 3, grade: "B", category: "net" },
    { code: "TDK-0406", name: "BASIS DATA", semester: 4, sks: 3, grade: "A", category: "dev" },
    { code: "TKK-0501", name: "CLOUD COMPUTING", semester: 5, sks: 4, grade: "A", category: "net" },
    { code: "MKK-0502", name: "KEAMANAN JARINGAN", semester: 5, sks: 4, grade: "A", category: "net" },
    { code: "TKK-0503", name: "TEXT MINING", semester: 5, sks: 4, grade: "B", category: "ai" },
    { code: "TKK-0504", name: "SISTEM OPERASI", semester: 5, sks: 4, grade: "B", category: "general" },
    { code: "TKK-0505", name: "DEEP LEARNING DASAR", semester: 5, sks: 4, grade: "B", category: "ai" },
    { code: "TKK-0601", name: "DEEP LEARNING LANJUT", semester: 6, sks: 4, grade: "B", category: "ai" },
    { code: "TKK-0602", name: "MANAJEMEN PROYEK DATA SCIENCE", semester: 6, sks: 4, grade: "B", category: "ai" },
    { code: "TKK-0603", name: "BIG DATA ANALYTIC", semester: 6, sks: 4, grade: "A", category: "ai" },
    { code: "TKK-0604", name: "COMPUTER VISION", semester: 6, sks: 4, grade: "B", category: "ai" },
    { code: "TKK-0605", name: "ROBOTIC", semester: 6, sks: 4, grade: "A", category: "ai" },
    { code: "MKK-0701", name: "METODE PENELITIAN", semester: 7, sks: 4, grade: "A", category: "general" },
    { code: "MKK-0702", name: "LITERATURE REVIEW", semester: 7, sks: 4, grade: "A", category: "general" },
    { code: "MKK-0703", name: "PROPOSAL SKRIPSI", semester: 7, sks: 2, grade: "B", category: "general" },
    { code: "MKK-0704", name: "ETIKA PROFESI", semester: 7, sks: 2, grade: "B", category: "general" },
    { code: "MKK-0705", name: "IT ENTERPRENEUR", semester: 7, sks: 2, grade: "B", category: "general" },
    { code: "MKK-0801", name: "SISTEMATIC LITERATURE REVIEW", semester: 8, sks: 4, grade: "B", category: "general" },
    { code: "MKK-0802", name: "SKRIPSI", semester: 8, sks: 6, grade: "B", category: "general" }
];

// DOM Elements
const navbar = document.getElementById("navbar");
const bgGlow = document.getElementById("bg-glow");
const menuBtn = document.getElementById("menu-btn");
const mobileNav = document.getElementById("mobile-nav");
const mobileLinks = document.querySelectorAll(".mobile-nav-link");
const transcriptGrid = document.getElementById("transcript-grid");
const searchInput = document.getElementById("course-search");
const displayedCountEl = document.getElementById("displayed-count");
const totalCountEl = document.getElementById("total-count");
const filterButtons = document.querySelectorAll(".filter-btn");
const contactForm = document.getElementById("contact-form");
const formSubmitBtn = document.getElementById("form-submit");
const formStatus = document.getElementById("form-status");

// State Variables
let currentFilter = "all";
let searchQuery = "";

// Initialize App
document.addEventListener("DOMContentLoaded", () => {
    initMouseGlow();
    initNavbarScroll();
    initMobileNav();
    renderTranscript();
    initTranscriptFilters();
    initSearch();
    initContactForm();
});

// Interactive Background Glow
function initMouseGlow() {
    window.addEventListener("mousemove", (e) => {
        const x = e.clientX;
        const y = e.clientY;
        document.documentElement.style.setProperty("--mouse-x", `${x}px`);
        document.documentElement.style.setProperty("--mouse-y", `${y}px`);
    });
}

// Navbar Scroll Effect
function initNavbarScroll() {
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    });
}

// Mobile Menu Toggle
function initMobileNav() {
    menuBtn.addEventListener("click", () => {
        menuBtn.classList.toggle("active");
        mobileNav.classList.toggle("active");
    });

    mobileLinks.forEach(link => {
        link.addEventListener("click", () => {
            menuBtn.classList.remove("active");
            mobileNav.classList.remove("active");
        });
    });
}

// Render Transcript Course Cards
function renderTranscript() {
    transcriptGrid.innerHTML = "";
    
    // Filter & Search Logic
    const filteredCourses = courses.filter(course => {
        // Apply filter tab
        if (currentFilter !== "all") {
            if (currentFilter === "best") {
                if (course.grade !== "A") return false;
            } else if (course.category !== currentFilter) {
                return false;
            }
        }
        
        // Apply search input query
        if (searchQuery.trim() !== "") {
            const query = searchQuery.toLowerCase();
            const nameMatch = course.name.toLowerCase().includes(query);
            const codeMatch = course.code.toLowerCase().includes(query);
            return nameMatch || codeMatch;
        }
        
        return true;
    });

    // Update Counts
    displayedCountEl.textContent = filteredCourses.length;
    totalCountEl.textContent = courses.length;

    if (filteredCourses.length === 0) {
        transcriptGrid.innerHTML = `
            <div class="no-results glass-card" style="grid-column: 1 / -1; padding: 40px; text-align: center; color: var(--text-secondary);">
                Mata kuliah tidak ditemukan untuk pencarian "${searchQuery}"
            </div>
        `;
        return;
    }

    // Generate HTML for each card
    filteredCourses.forEach(course => {
        const card = document.createElement("div");
        card.className = `course-card glass-card grade-${course.grade.toLowerCase()}`;
        
        card.innerHTML = `
            <div class="course-code">${course.code}</div>
            <h3 class="course-name">${course.name}</h3>
            <div class="course-details">
                <span class="course-sks">Semester ${course.semester} &bull; ${course.sks} SKS</span>
                <span class="course-grade-badge grade-${course.grade.toLowerCase()}-badge">Nilai ${course.grade}</span>
            </div>
        `;
        
        transcriptGrid.appendChild(card);
    });
}

// Initialize Transcript Category Filters
function initTranscriptFilters() {
    filterButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            // Update Active class
            filterButtons.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            
            // Set current filter and re-render
            currentFilter = btn.getAttribute("data-filter");
            renderTranscript();
        });
    });
}

// Initialize Search Input
function initSearch() {
    searchInput.addEventListener("input", (e) => {
        searchQuery = e.target.value;
        renderTranscript();
    });
}

// Contact Form Handling
function initContactForm() {
    contactForm.addEventListener("submit", (e) => {
        e.preventDefault();
        
        // Disable submit button and show loading status
        formSubmitBtn.disabled = true;
        formSubmitBtn.textContent = "Mengirim...";
        
        // Simulate email sending API with timeout
        setTimeout(() => {
            // Show Success Notification
            formStatus.className = "form-status success";
            formStatus.textContent = "Pesan Anda berhasil dikirim! Terima kasih telah menghubungi.";
            
            // Reset Form Fields
            contactForm.reset();
            
            // Restore Submit Button
            formSubmitBtn.disabled = false;
            formSubmitBtn.textContent = "Kirim Pesan";
            
            // Hide Status after 5 seconds
            setTimeout(() => {
                formStatus.style.display = "none";
                formStatus.className = "form-status";
            }, 5000);
            
        }, 1500);
    });
}
