# FORMA — Architecture & Design Studio

Une website moderne et professionnelle pour un studio d'architecture multidisciplinaire.

## 📁 Structure du Projet

```
minecraft naoufel/
├── index.html              # Page d'accueil principale
├── projets.html            # Page des projets
├── disciplines.html        # Page des disciplines
├── apropos.html            # Page À propos
├── actualites.html         # Page des actualités
├── durabilite.html         # Page durabilité
├── README.md               # Documentation
├── css/
│   └── styles.css         # Feuille de styles centralisée
└── js/
    └── main.js            # JavaScript centralisé
```

## ✨ Caractéristiques

### Architecture Moderne
- **HTML Sémantique** : Structure propre et lisible
- **CSS Modulaire** : Styles séparés et maintenables
- **JavaScript Organisé** : Logique centralisée et réutilisable
- **Multi-pages** : Navigation fluide entre sections

### Design Professionnel (inspiré de Snohetta)
- **Typographie Premium** : Syne, Neue Montreal, Georgia
- **Palette Minimale** : Noir, blanc, gris chaud, accent orange
- **Animations Douces** : Transitions fluides et naturelles
- **Grid Layout** : Disposition géométrique précise
- **Responsive Design** : Adaptation à tous les écrans

### Fonctionnalités Interactives
- **Curseur Personnalisé** : Suivi souris en temps réel
- **Menu Fullscreen** : Navigation immersive
- **Scroll Reveal** : Animations au défilement
- **Auto-rotation Héro** : Changement d'images automatique
- **Compteurs Animés** : Statistiques dynamiques
- **Ticker Marquee** : Défilement continu

## 🎨 Composants

### Navigation
- Barre de navigation fixe avec logo
- Menu hamburger qui se transforme en menu fullscreen
- Navigation au thème dynamique (dark/light)

### Sections Principales
- **Hero** : Section d'accueil immersive avec vidéo/image
- **Intro** : Présentation avec nombre stylisé
- **Ticker** : Bande déroulante avec disciplines
- **Projets** : Grille 12 colonnes responsive
- **Déclaration** : Section de valeurs avec statistiques
- **Disciplines** : Liste interactive
- **Actualités** : Grille de news avec hover effects
- **Équipe** : Scroll horizontal
- **Contact** : Section finale avec CTA

## 🚀 Utilisation

### Ouvrir le site
```bash
# Ouvrir dans le navigateur
open index.html
# ou
http://localhost:5500/index.html (avec Live Server)
```

### Modifier le CSS
Tous les styles sont dans `css/styles.css`. Les variables CSS sont au sommet :
```css
:root {
  --black: #0a0a08;
  --white: #f5f3ee;
  --warm-gray: #c8c4bb;
  --accent: #d4501a;
  --mid: #6b6860;
}
```

### Modifier le JavaScript
La logique est dans `js/main.js` avec sections documentées :
- CURSOR : Système de curseur personnalisé
- MENU : Logique du menu fullscreen
- NAV Dark : Détection hero
- HERO Animation : Rotation d'images
- SCROLL Reveal : Animations de défilement
- etc.

## 📱 Responsive Design

Breakpoint principal : `max-width: 900px`
- Navigation adaptée
- Grille réduite à 1 colonne
- Textes redimensionnés
- Espacements ajustés

## 🔗 Pages Disponibles

1. **index.html** - Accueil
2. **projets.html** - Portfolio complet
3. **disciplines.html** - Domaines d'expertise
4. **apropos.html** - Histoire et équipe
5. **actualites.html** - News et publications
6. **durabilite.html** - Engagement durable

## 💡 Améliorations Futures

- [ ] Intégration CMS pour contenu dynamique
- [ ] Système filtrage projets par catégorie
- [ ] Blog intégré
- [ ] Formulaire de contact fonctionnel
- [ ] Optimisation SEO avancée
- [ ] PWA (Progressive Web App)
- [ ] Analytics intégré
- [ ] Système de langue (FR/EN)

## 🎯 Philosophie de Design

Inspiré par **Snohetta** :
- **Minimalisme** : Moins c'est plus
- **Géométrie** : Formes épurées et précises
- **Typographie** : Texte comme élément de design
- **Espace Blanc** : Respiration et clarté
- **Mouvement** : Animations subtiles et significatives

## 📝 Notes

- Les images utilisent Unsplash pour la démo
- Les liens pointent actuellement vers des anchors
- À remplacer avec du contenu réel et des URLs actives
