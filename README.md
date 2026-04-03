# TaskManager

Application Angular de gestion de tâches.

## Ce qui a été ajouté

- Navigation multi-pages : `/home`, `/tasks`, `/about`, et page 404.
- Gestion complète des tâches : affichage, ajout, validation (case à cocher), suppression, et filtre d’état.
- Composants réutilisables (`home`, `tasks`, `form-task`, `about`, `notfound`) avec séparation de responsabilités.
- Utilisation d’Angular Signals pour gérer l’état réactif des tâches.
- Intégration d’Angular Material pour les icônes et le style, plus support de Tailwind CSS.

## Fonctionnalités réalisées

- Page d’accueil (`/home`) avec des cartes de présentation et liens de navigation.
- Page de gestion des tâches (`/tasks`) avec :
  - affichage d’une liste de tâches initiales,
  - ajout de tâche via un champ texte et un bouton d’envoi,
  - marquage/démarquage des tâches comme complétées (case à cocher),
  - suppression des tâches complétées ou individuelles.
- Composant de formulaire (`/form-task`) pour ajouter/éditer des tâches.
- Page "À propos" (`/about`) avec une présentation du projet.
- Page 404 personnalisée pour les routes inconnues.

## Structure principale

- `src/app/app.ts` : composant racine.
- `src/app/app.routes.ts` : configuration du routage Angular.
- `src/app/components/home/` : composant d’accueil.
- `src/app/components/tasks/` : composant d'ajout des tâches.
-`src/app/components/form-task/`: composant de gestion de taches
- `src/app/components/about/` : composant à propos.
- `src/app/components/notfound/` : composant de page introuvable.

## Technologies utilisées

- Angular 21
- Angular Router
- Angular Material (icônes)
- Signals pour l’état dans le composant des tâches
- Tailwind CSS / styles CSS simples

## Exécution

Pour lancer l’application en développement :

```bash
npm install
npm start
```

Puis ouvrir `http://localhost:4200/`.

## Licence

Ce projet est distribué sous la licence MIT.


