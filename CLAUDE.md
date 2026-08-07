# Contexte projet

Portfolio personnel Vue.js de Marine, déployé en prod sur `/var/www/portefolio` (branche `prod`).

## Projets affichés (`src/assets/projects.json`)

Liste **curatée à la main**, pas générée automatiquement. Le repo `/var/www/cv_js` contient
`data/projects.json` (export brut de tous les repos GitHub/GitLab/Framagit, généré par script,
champ `generated_at`) et `data/data.json` (infos CV). Ces fichiers servent de _source de données_
à consulter, mais **ne pas copier tel quel** dans `projects.json` : le portfolio ne montre qu'une
sélection de projets forts, avec des descriptions réécrites en narratif perso (style "j'ai
développé...", pas la description GitHub brute).

Critères de sélection retenus (2026-08-07) :

- Uniquement des projets personnels **publics** (pas de repos privés d'équipe type Dock-Lens,
  Mocapia, Kebab, FiveLeague : pas de lien GitHub public utilisable pour un·e visiteur·se).
- Projets avec une vraie histoire/valeur à raconter, pas les exercices scolaires vides
  (sfp1-2025, revisions_examen, Go_angular_2025 exclus).
- Ordre des cartes : les plus fortes en premier (impact / originalité).

Sélection actuelle (8 projets) : QR Code generator, Fokuz, ADHDragon, ETA, Stephagramme,
Chronomecs (framagit, contributrice - outil de mesure du temps de parole genré en réunion),
Systemhak (vibe-codé pour tester les skills/agents Claude Code, à mentionner explicitement),
Serveur et nom de domaine.

Volontairement exclus (moins différenciants ou sans description exploitable) : Bingo,
InitPythonProject, Rubik-s_laTex, CookingRecipe, Cat-TCG.

Si Marine ajoute un nouveau projet perso public intéressant plus tard, l'ajouter à la liste en
respectant le même style de description et en demandant confirmation sur la sélection plutôt que
d'ajouter tous les repos automatiquement.
