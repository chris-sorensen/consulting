(() => {
    // Mobile menu toggle
    const btn = document.getElementById('menuBtn');
    const menu = document.getElementById('mobileMenu');
    if (btn && menu) btn.addEventListener('click', () => menu.classList.toggle('hidden'));

    // Year
    const year = document.getElementById('year');
    if (year) year.textContent = new Date().getFullYear();
})();


