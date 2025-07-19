document.addEventListener('DOMContentLoaded', () => {
    // Animație la încărcarea paginii pentru header și footer
    const header = document.querySelector('header');
    const footer = document.querySelector('footer');

    setTimeout(() => {
        header.style.opacity = 1;
        header.style.transform = 'translateY(0)';
        footer.style.opacity = 1;
        footer.style.transform = 'translateY(0)';
    }, 100);

    // Animații la scroll pentru secțiuni
    const sections = document.querySelectorAll('section');
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    const sectionObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    sections.forEach(section => {
        sectionObserver.observe(section);
    });

    // Animație text la hover pe titlurile secțiunilor
    const sectionTitles = document.querySelectorAll('section h2');
    sectionTitles.forEach(title => {
        const originalColor = title.style.color || '#cea100';
        title.addEventListener('mouseover', () => {
            title.style.color = '#ffc800';
            title.style.transform = 'scale(1.05)';
            title.style.transition = 'color 0.3s ease, transform 0.3s ease';
        });
        title.addEventListener('mouseout', () => {
            title.style.color = originalColor;
            title.style.transform = 'scale(1)';
        });
    });

    // Animație pentru iconița din secțiunea "Viziunea Noastră"
    const animatedIcon = document.querySelector('.animated-icon');
    if (animatedIcon) {
        animatedIcon.addEventListener('click', () => {
            animatedIcon.style.animation = 'none';
            void animatedIcon.offsetWidth;
            animatedIcon.style.animation = 'pulse 2s infinite alternate';
        });
    }

    // --- REPARAȚIE PENTRU BUTONUL DIN COLȚ ---
    const scrollTopBtn = document.getElementById('scrollTopBtn');
    if (scrollTopBtn) {
        scrollTopBtn.addEventListener('click', (event) => {
            // 1. Oprim comportamentul default (navigarea instantă)
            event.preventDefault();

            // 2. Derulăm lin în susul paginii
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
});