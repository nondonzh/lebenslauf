// Smooth Scroll
function smoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    for (let link of links) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const zielId = this.getAttribute('href');
            const zielElement = document.querySelector(zielId);
            
            if (zielElement) {
                const navHoehe = 70;
                const zielPosition = zielElement.offsetTop - navHoehe;
                
                window.scrollTo({
                    top: zielPosition,
                    behavior: 'smooth'
                });
            }
        });
    }
}

// Navigation beim Scrollen
function navBeiScroll() {
    const nav = document.querySelector('nav');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            nav.style.background = 'rgba(44, 94, 80, 0.95)';
        } else {
            nav.style.background = '#2c5e50';
        }
    });
}

// Alles starten
document.addEventListener('DOMContentLoaded', function() {
    smoothScroll();
    navBeiScroll();
    console.log('Website ist fertig geladen!');
});
