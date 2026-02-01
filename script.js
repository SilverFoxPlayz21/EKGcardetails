document.addEventListener('DOMContentLoaded', () => {
    // 1. Bulletproof Observer
    const observerOptions = {
        threshold: 0.01, // Fire as soon as 1% is visible
        rootMargin: '0px 0px -20px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
    revealElements.forEach(el => observer.observe(el));

    // 2. Language Switcher (Fixed Placeholders)
    const langBtn = document.getElementById('lang-toggle');
    let currentLang = 'en';

    langBtn.addEventListener('click', () => {
        currentLang = currentLang === 'en' ? 'bg' : 'en';
        
        // Update all data-en / data-bg elements
        document.querySelectorAll('[data-en]').forEach(el => {
            el.innerText = el.getAttribute(`data-${currentLang}`);
        });

        // Update Form Placeholders specifically
        const placeholders = {
            en: { name: "Name", phone: "Phone", msg: "Car model & Year" },
            bg: { name: "Име", phone: "Телефон", msg: "Модел и Година" }
        };
        
        document.getElementById('name-field').placeholder = placeholders[currentLang].name;
        document.getElementById('phone-field').placeholder = placeholders[currentLang].phone;
        document.getElementById('msg-field').placeholder = placeholders[currentLang].msg;
    });
});
