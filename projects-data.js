// ---- Données par défaut des projets ----
// Ce tableau sert de base. Une fois que tu modifies des choses depuis /admin.html,
// les changements sont stockés dans le navigateur (localStorage) et prennent le dessus.
// Pour rendre un changement permanent (visible sur tous les appareils), utilise le bouton
// "Exporter le code" dans l'admin et colle le résultat ici.

const DEFAULT_PROJECTS = [
  {
    id: "qwacky",
    title: "Qwacky",
    status: "en-cours",
    statusLabel: "en cours",
    desc: "Un assistant IA animé intégré à Chrome, pensé pour t'aider dans tes tâches et t'éviter de t'ennuyer grâce à ses interactions. Multi-API, automatisation web, mémoire persistante.",
    tags: ["Extension Chrome", "IA"]
  },
  {
    id: "nexus-pro",
    title: "Nexus Pro",
    status: "termine",
    statusLabel: "terminé",
    desc: "Un simulateur de bourse complet : 18 actions, chandeliers japonais, indicateurs techniques, vente à découvert, effet de levier, et des succès à débloquer en cours de route.",
    tags: ["Simulation", "JavaScript"]
  },
  {
    id: "collection-manager",
    title: "Gestionnaire de collection",
    status: "termine",
    statusLabel: "terminé",
    desc: "Un outil pour cataloguer n'importe quelle collection : profils personnalisables, badges de statut, recherche et filtres, avec plusieurs formules d'abonnement.",
    tags: ["Web app", "localStorage"]
  }
];

const STORAGE_KEY = "darcuts_projects";

function loadProjects() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return JSON.parse(raw);
  } catch (e) {
    console.warn("Impossible de lire les projets sauvegardés, retour aux valeurs par défaut.", e);
  }
  return DEFAULT_PROJECTS;
}

function saveProjects(projects) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(projects));
}

function renderCard(p) {
  return `
    <div class="card">
      <h3>${p.title}</h3>
      <p>${p.desc}</p>
      <div class="tags">
        ${p.tags.map(t => `<span class="tag">${t}</span>`).join('')}
        <span class="tag">${p.statusLabel}</span>
      </div>
    </div>
  `;
}
