# Portfolio Personnel

Portfolio personnel développé avec Vue.js, présentant mes projets, compétences et informations de contact.

## 🚀 Sections

- **Présentation** : Accueil
- **Projets** : Réalisations
- **Musique** : Mon parcours musical

## 🛠️ Stack Technique

- **Framework** : Vue.js
- **Build Tool** : Vite
- **Déploiement** : GitHub Actions + SSH/rsync
- **Qualité du code** : ESLint + Prettier

## 🔄 CI/CD

### Qualité du code (dev/main)

- Vérification ESLint automatique
- Contrôle du formatage Prettier
- Déclenché sur push et pull request

### Déploiement Production (branch `prod`)

1. **Lint** : Vérification ESLint
2. **Format** : Contrôle Prettier
3. **Build** : Génération des fichiers (`dist/`)
4. **Deploy** : Déploiement SSH vers `/var/www/portefolio`

### Secrets Requis

- `SSH_PRIVATE_KEY` : Clé SSH pour l'accès au serveur
- `REMOTE_HOST` : Adresse du serveur
- `REMOTE_USER` : Utilisateur SSH

## 📝 Scripts

```json
{
  "dev": "Serveur de développement Vite",
  "build": "Build de production",
  "lint": "Correction automatique ESLint",
  "lint:check": "Vérification ESLint sans correction",
  "format": "Formatage automatique Prettier",
  "format:check": "Vérification Prettier sans modification",
  "check": "Vérification complète (lint + format)"
}
```

## 📊 Données

- `src/assets/projects.json` : projets affichés dans le carousel (`Carousel.vue`). Sélection **manuelle et curatée**, pas une liste exhaustive de tous les repos GitHub.
- `src/assets/timeline-items.json` : frise du parcours musical (`Music.vue`).
- Voir `CLAUDE.md` pour le détail de la sélection des projets et la logique de curation.

## 📂 Structure

```
.
├── .github/workflows/    # Workflows CI/CD
│   ├── code-quality.yml  # Qualité du code
│   ├── prod.yml          # Déploiement prod
│   └── deploy.sh         # Script de déploiement
├── src/                  # Code source Vue.js
├── dist/                 # Build de production
└── package.json          # Dépendances
```

**Développé avec ❤️ et ☕ par Marine Gonnord**
