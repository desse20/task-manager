# TaskManager

Application Angular de gestion de tâches.

## Fonctionnalités réalisées

- Page d’accueil (`/home`) avec des cartes de présentation.
- Page de gestion des tâches (`/tasks`) permettant :
  - d’afficher une liste de tâches initiales,
  - d’ajouter une tâche avec un champ texte,
  - de marquer une tâche comme complétée via une case à cocher.
- Page "À propos" (`/about`) avec une présentation du projet.
- Page 404 personnalisée pour les routes inconnues.

## Structure principale

- `src/app/app.ts` : composant racine.
- `src/app/app.routes.ts` : configuration du routage Angular.
- `src/app/components/home/` : composant d’accueil.
- `src/app/components/tasks/` : composant de gestion des tâches.
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


