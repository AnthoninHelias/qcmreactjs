# Bien commencer avec Create React App

Lien vers la githubpage du projet : [Look project online](https://anthoninhelias.github.io/qcmreactjs/).

## Bien commencer avec Create React App

The projet a été boostrappé avec  [Create React App](https://github.com/facebook/create-react-app).

### Scripts Disponibles

Pour commencer a travailler sur ce projet il faut dans premiers temps installer toute les dépendances nécessaires au projet.
Veuillez exécuter cette commande dans votre terminal : `npm install --force`.

Pour lancer le projet en mode dev sur le http://localhost:3000 et vous pourrez le voir sur le navigateur de plus toute
les modifications entraineront le rechargement de la page.
Veuillez exécuter cette commande dans votre terminal : `npm start`.

Pout lancer les runners en watch mode interactif pour plus d'information consulter [running tests](https://facebook.github.io/create-react-app/docs/running-tests).
Veuillez exécuter cette commande dans votre terminal : `npm test`.

Pour lancer le build de l'application pour la production dans le dossier `build` ce qui rendra votre app pourra être  
au déployer pour plus d'information consulter [deployment](https://facebook.github.io/create-react-app/docs/deployment).
Veuillez exécuter cette commande dans votre terminal : `npm run build`.


Pour en apprendre plus sur React vous pouvez regarder [React documentation](https://reactjs.org/).

#### Fonctionnement des workflows

Les workflows se trouvent dans le dossier `.github/workflows`
`eslint.yml` va vérifier automatiquement la syntaxe en utilisant lint et vérifier le type script.
`gh-files.yml` permet de déployer automatiquement le projet sur githubpage.
`node.js.yml` perment de vérifier automatiquement les versions de nodes.

##### Husky

Husky permet de check avant de commit notre code en utilisant nos différents script , les checks se trouver dans `.husky/pre-commit`
pour ne pas éxecuter les checks lors du commit , il faut rajouter a la fin du message de commit `-n`.
Pour en savoir plus [Husky documentation](https://typicode.github.io/husky/).

###### Dossier ressources (celui en dehors du src)

Ce dossier sert à stocker a un seul endroit toute les ressources que noos trouvons utiles pour notre projet.