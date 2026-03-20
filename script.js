/**
 * Bascule les onglets de la section Projets
 * @param {string} id - "pro" ou "scolaire"
 */
function showTab(id) {
    // Désactive tous les onglets et panes de #projets
    document.querySelectorAll('#projets .tab-pane').forEach(p => p.classList.remove('active'));
    document.querySelectorAll('#projets .tab-btn').forEach(b => b.classList.remove('active'));

    // Active l'onglet cliqué
    document.getElementById('tab-' + id).classList.add('active');
    event.target.classList.add('active');
}

/**
 * Bascule les onglets de la section Parcours
 * @param {string} id - "tpro" ou "tform"
 */
function showParcours(id) {
    const panes = ['tab-tpro', 'tab-tform'];

    // Cache tous les panes du parcours
    panes.forEach(p => {
        const el = document.getElementById(p);
        el.style.display = 'none';
        el.classList.remove('active');
    });

    // Désactive tous les boutons du parcours
    document.querySelectorAll('#parcours .tab-btn').forEach(b => b.classList.remove('active'));

    // Affiche le pane sélectionné
    const target = document.getElementById('tab-' + id);
    target.style.display = 'block';
    target.classList.add('active');
    event.target.classList.add('active');
}

/**
 * Scroll fade-in via IntersectionObserver
 * Les éléments avec la classe .fade-in s'animent à l'entrée dans le viewport
 */
const fadeObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    },
    { threshold: 0.1 }
);

document.querySelectorAll('.fade-in').forEach(el => fadeObserver.observe(el));

// Lightbox
const lightbox = document.createElement('div');
lightbox.className = 'lightbox';
lightbox.innerHTML = '<span class="lightbox-close">✕</span><img src="" alt="" />';
document.body.appendChild(lightbox);

document.querySelectorAll('.screenshot-img').forEach(img => {
    img.addEventListener('click', () => {
        lightbox.querySelector('img').src = img.src;
        lightbox.classList.add('active');
    });
});

lightbox.addEventListener('click', () => lightbox.classList.remove('active'));

// Theme toggle
const ICON_SUN = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>`;

const ICON_MOON = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`;

const themeBtn = document.createElement('button');
themeBtn.className = 'theme-toggle';
themeBtn.innerHTML = ICON_SUN;
document.querySelector('nav').appendChild(themeBtn);

const saved = localStorage.getItem('theme');
if (saved === 'light') {
    document.body.classList.add('light');
    themeBtn.innerHTML = ICON_MOON;
}

themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('light');
    const isLight = document.body.classList.contains('light');
    themeBtn.innerHTML = isLight ? ICON_MOON : ICON_SUN;
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
});