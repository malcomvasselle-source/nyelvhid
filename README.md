# Nyelvhíd

Application d'apprentissage du hongrois (pour francophones) : prononciation, vocabulaire avec répétition espacée, grammaire, phrases, quiz, parcours CECRL (A1 en cours, A2→C2 à construire), et un onglet **Académie** qui suit, module par module, le cours en ligne externe suivi par l'utilisateur (Magyarize — Hungarian Mastercourse for beginners).

## Structure

```
index.html            squelette de la page + toutes les sections (onglets)
css/style.css          tout le CSS
js/data-a1.js          données : vocabulaire, prononciation, grammaire (cas, conjugaison), phrases, niveaux CECRL, programme A1
js/data-academy.js      données : modules de l'académie en ligne (Module 4, puis les suivants au fur et à mesure)
js/audio-manifest.js    table id → chemin de fichier .mp3
audio/*.mp3             438 clips audio hongrois pré-enregistrés (un fichier par mot/phrase)
js/freq-data.js          rang de fréquence des mots du vocabulaire (source : FrequencyWords/hermitdave, corpus OpenSubtitles) — alimente le badge ★ « mot essentiel »
js/app.js               moteur de rendu, état (localStorage), interactions
js/assistant.js          bulle flottante « poser une question » (appelle api/ask.js)
api/ask.js               fonction serverless Vercel — assistant IA, voir la section dédiée plus bas
```

Aucune dépendance, aucun build : c'est un site 100% statique (+ une fonction serverless pour l'assistant). `index.html` charge les scripts dans l'ordre ci-dessus.

## Développement local

Ouvrir `index.html` directement dans un navigateur, ou servir le dossier avec n'importe quel serveur statique (ex. `npx serve .`) si le navigateur bloque les requêtes `file://` vers les scripts locaux.

## Déploiement

Site statique — déployable tel quel sur Vercel, Netlify, GitHub Pages, etc. Sur Vercel : "Add New Project" → importer ce dépôt → aucun réglage de build nécessaire (framework "Other", output = racine).

## Ajouter un nouveau module d'Académie

Ouvrir `js/data-academy.js` et ajouter un nouvel objet à la suite dans `ACADEMY_MODULES`, avec la même forme que le Module 4 (`id`, `num`, `title`, `source`, `vocabCat`, `rules`, `personTable` optionnel, `exercises`, `dialogue`). Rien d'autre à toucher — le moteur de rendu (`js/app.js`) est générique.

## Ajouter du vocabulaire

Ajouter une entrée `[hongrois, français, note]` dans la catégorie concernée de `VOCAB` (`js/data-a1.js`), ou une nouvelle catégorie `{id, label, words:[...]}`. Le mot apparaît automatiquement dans les flashcards, la liste et le quiz.

## Assistant (bulle flottante)

Un petit assistant IA est disponible sur toutes les pages (bulle 💬 en bas à droite) : il répond aux questions ponctuelles ("comment dit-on... ?", vocabulaire manquant, etc.). Il repose sur :

```
api/ask.js    fonction serverless Vercel — appelle l'API Anthropic (Claude Haiku), clé API côté serveur uniquement
js/assistant.js  logique de la bulle côté navigateur (ouverture, envoi, affichage des réponses)
```

**Réglage obligatoire avant que ça fonctionne en ligne :** sur le dashboard Vercel du projet → *Settings → Environment Variables*, ajouter une variable `ANTHROPIC_API_KEY` avec une clé API créée sur [console.anthropic.com](https://console.anthropic.com) (Settings → API Keys). Après l'ajout, redéployer (ou pousser un nouveau commit) pour que la variable soit prise en compte. Sans cette clé, la bulle affiche un message d'erreur mais n'empêche pas le reste de l'app de fonctionner.

Le modèle utilisé (`claude-haiku-4-5-20251001`) est volontairement le modèle le plus économique d'Anthropic — le coût par question posée est de l'ordre du millième de centime.

## État du projet

Voir l'audit du 1er septembre 2026 (feuille de route en lots — architecture, enrichissement du contenu, formats d'exercices, évaluations, vérification) pour la suite prévue.
