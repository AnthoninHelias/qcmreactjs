# Installation des librairies

Pour commencer à travailler sur ce projet il faut dans un premier temps installer toute les dépendances nécessaires au projet.
Veuillez exécuter cette commande dans votre terminal : `npm install --force`.

## Lien vers notre githubpage

Lien vers la githubpage du projet : [Look project online](https://anthoninhelias.github.io/qcmreactjs/).

## Bien commencer avec Create React App

Le projet a été boostrappé avec  [Create React App](https://github.com/facebook/create-react-app).

## Scripts Disponibles

Veuillez exécuter cette commande dans votre terminal pour lancer le serveur : `npm start`.
Vous pourrez  voir sur le navigateur toutes les modifications en direct et cela entrainera le rechargement de la page.

Pour lancer les runners en watch mode interactif , veuillez exécuter cette commande dans votre terminal : `npm test`.
Pour plus d'information consulter [running tests](https://facebook.github.io/create-react-app/docs/running-tests).

Pour lancer le build de l'application, Veuillez exécuter cette commande dans votre terminal : `npm run build`.
Pour plus d'information consulter [deployment](https://facebook.github.io/create-react-app/docs/deployment).

Pour en apprendre plus sur React vous pouvez regarder [React documentation](https://reactjs.org/).

## Fonctionnement des workflows

Les workflows se trouvent dans le dossier `.github/workflows`
`eslint.yml` permet de  vérifier automatiquement la syntaxe en utilisant lint et de vérifier que le langage utilisé est du TypeScript.
`gh-files.yml` permet de déployer automatiquement le projet sur githubpage.
`node.js.yml` perment de vérifier automatiquement les versions de nodes.

## Husky

Husky permet d'analyser le code avant d'effectuer un commit en utilisant nos différents script , les checks se trouvent dans `.husky/pre-commit` .
Pour ne pas éxecuter les checks lors du commit , il faut rajouter à la fin du message de commit `-n`.
Pour en savoir plus [Husky documentation](https://typicode.github.io/husky/).

###### Dossier ressources (celui en dehors du src)

Ce dossier sert à stocker à un seul endroit toute les ressources que nous trouvons utiles pour notre projet. 
