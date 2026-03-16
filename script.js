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