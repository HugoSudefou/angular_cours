# angular_meteo
Petite application meteo très simple


## Required
- NodeJs > 14
> liens utiles :
> - [Les release de nodejs](https://nodejs.org/en/about/releases/)
> - [Télécharger nodejs](https://nodejs.org/en/download/)

- npm > 8
> c'est un gestionnaire de package il en existe d'autre comme `yarn` si vous le préférez vous pouvez l'utiliser à la place \
> liens utiles :
> - [About npm](https://docs.npmjs.com/about-npm)
> - [Doc npm install](https://docs.npmjs.com/cli/v8/commands/npm-install)

# Installation
D'abord on installe Angular  

## Angular
`npm install -g @angular/cli`
> A savoir le `-g` est la pour installer angular en global sur votre systeme d'exploitation.\
> Si vous ne voulais pas l'installer en global mais seulement dans votre workspace vous enlevez le `-g`


# Génération

## Creation du workspace Angular et initialisation de l'application
Commande pour générer le workspace anguar : `ng new my-app`
> Ici vous remplacerez le `my-app` par le nom que vous voulez donner à votre application \
> Moi par exmple je l'ai remplacé par `appliMeteo`
---
> Vous pouvez aussi lancer la commande `ng new` seul angular vous demandera le nom de votre "project" en premier. Avant les autres question. 

Quand vous lancez la commande `ng new [nom de votre application]` plusieurs question vous sont posées : 
- `? Would you like to add Angular routing? (y/N) `

> Ici Angular vous demande si vous voulez qu'il génère automatiquement le/les fichier-s relatif au `Routing` de l'application. \
> Vous pouvez répondre ce que vous voulez ça n'a pas trop d'importance car même si vous répondez `N` (pour non) vous pourrez rajouter plustard tout ce qui concerne le `Routing` à la main.
- `Which stylesheet format would you like to use? (Use arrow keys)`
    - `CSS`
    - `SCSS`
    - `Sass`
    - `Less`

> Ici Angular vous demande quel format d'écriture de vos fichier css vous voulez utiliser. \
> Il est préférable d'utiliser de nos jour l'un des 3 derniers `SCSS`, `Sass` ou `Less` qui sont trois language qui nous permettre d'aller plus loins dans le css.\
> Comme utiliser des fonction ou variable directement dans le style de votre application. Et qui sont après compilé en `CSS`

Une fois répondu à ces deux/trois questions Angular se met à générer tous les fichiers dont il a besoin pour fonctionner tout en répondant a vos demandes (réponse au question posé juste au desssus) \
Cette opération vas prendre quelques secondes vous pouvez même voir tous les fichier généré par Angular et leur emplacement. 

---

Une fois que tout ceci est fait on a notre application généré et initialisé :)

---

# Lancement de l'application
Une fois que votre application est bien généré et initialisé on va la lancer. \
Pour ça voici la commande : 
- `ng serve`
> `ng serve` : va lancer le serveur web puis observer tous les fichiers de l'application et la rebuild automatiquement a chaque modification de fichier.


# Liens/Commandes utiles
- [ng-bootstrap](https://ng-bootstrap.github.io/#/home)
    > Documentation de `ng-bootstrap`\
    > commande importante : `ng add @ng-bootstrap/ng-bootstrap`\
- [Bootstrap](https://getbootstrap.com/docs/5.0/getting-started/introduction/)
    > Frameork CSS, il va nous aider pour styliser nous page html plus rapidement et facilement
- [Cli Angular](https://angular.io/cli)
    > La page avec plusierus commande du cli Angular.
- [ng generate](https://angular.io/cli/generate)
    > Commande qui permet la génération automatique de certain fichier \
    > Peut être utilisé sous plusierurs form différente \
    > - `ng generate <ce que vous voulez généré> [nom]` ou `ng g <ce que vous voulez généré> [nom]`
                                                 
    > Exemple : `ng generate component hello-world` ou `ng g c hello-world`
- [OpenWeatherMap](https://openweathermap.org/api)
    > Une api pour avoir la météo
- `toto`
    > test
