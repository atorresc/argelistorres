// ============================================================
// 1. DARK MODE TOGGLE
// ============================================================
(function () {
    var toggle = document.getElementById('darkToggle');
    var STORAGE_KEY = 'theme';
    var DARK = 'dark';
    var LIGHT = 'light';
    var MOON = '\u263E'; // ☾
    var SUN  = '\u2600'; // ☀

    function applyTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        if (toggle) {
            toggle.textContent = theme === DARK ? SUN : MOON;
            toggle.setAttribute('aria-label',
                theme === DARK ? 'Switch to light mode' : 'Switch to dark mode');
        }
    }

    var saved = localStorage.getItem(STORAGE_KEY);
    var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    applyTheme(saved || (prefersDark ? DARK : LIGHT));

    if (toggle) {
        toggle.addEventListener('click', function () {
            var current = document.documentElement.getAttribute('data-theme');
            var next = current === DARK ? LIGHT : DARK;
            localStorage.setItem(STORAGE_KEY, next);
            applyTheme(next);
        });
    }
})();

// ============================================================
// 2. SMOOTH SCROLL para enlaces de navegación interna
// ============================================================
document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
        var target = document.querySelector(this.getAttribute('href'));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// ============================================================
// 3. INTERSECTION OBSERVER - animaciones de entrada por sección
// ============================================================
(function () {
    var style = document.createElement('style');
    style.textContent =
        'section { opacity: 0; transform: translateY(24px);' +
        '  transition: opacity 0.5s ease, transform 0.5s ease; }' +
        'section.visible { opacity: 1; transform: translateY(0); }';
    document.head.appendChild(style);

    var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('section').forEach(function (section) {
        observer.observe(section);
    });
})();
