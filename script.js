// Einfache Funktion für Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Einfache Navigation-Hintergrund bei Scroll
window.addEventListener('scroll', function() {
    const nav = document.querySelector('nav');
    if (window.scrollY > 100) {
        nav.style.backgroundColor = 'rgba(44, 94, 80, 0.95)';
    } else {
        nav.style.backgroundColor = 'var(--primary-color)';
    }
});

// Einfache Konsolenausgabe
console.log('Willkommen auf meinem Lebenslauf!');
console.log('Diese Website wurde von mir erstellt.');
