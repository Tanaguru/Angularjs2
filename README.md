# Angular2 accessible
Projet de mise en accessibilité de composants développés en Angular2

Le but est de proposer aux développeurs des composants Angular2 déjà accessibles.

Ce projet est né d'une demande d'un client souhaitant avoir une liste des composants accessibles en Angular2. Le constat étant un néan à ce moment là, nous avons décidé d'étudier des composants mis à disposition sur le Web et d'y apporter les éléments d'accessibilité manquant.

Au début du projet, 4 composants ont été rendus accessibles. 

Le but est aussi de faire évoluer cette liste pour offrir un maximum de possibilités aux développeurs.

## La liste des composants
La liste des développements rendus accessibles :
 - Un bouton affichant une modale ;
 - Un bouton plier/déplier ;
 - Une liste d'élément avec système d'accumulation dans la page ;
 - Une gestion des erreurs.


### Bouton

#### Le composant

Ce composant présente un simple bouton qui fait apparaitre une modal lorsqu'on l'active.

#### Accessibilité

Le bouton a été rendu accessible et fonctionnel au clavier. Il est possible d'activer le bouton avec les touches "Entrée" et "Espace".

#### Développement à venir

Le bouton permet d'ouvrir une modal. Le dévellopement à venir permettra de rendre la modal accessible.

### Input-error

#### Le composant

Ce composant présente simplement un champ de formulaire email qui est obligatoire. Si l'utilisateur passe le champ sans le compléter, un message apparait lui demandant de renseigner le champ.

#### Accessibilité

Des conditions d'affichage des messages ont été ajoutés au composant pour avertir l'utilisateur de ses erreurs de saisie. Ses messages sont bien associés au champ de saisie et les technologies d'assistance informe l'utilisateur dès que le message apparait.

De manière générale, le champ dispose bien d'une étiquette à laquelle il est correctemment associé dans le code et accolé visuellement.

## Crédits

### Composant bouton

Ce composant accessible est un fork de l'exemple tiré du plunker suivant : 

https://plnkr.co/edit/Vvu62nDZ18IkqiAop2A9?p=preview

Exemple réalisé par Jamesbs

https://plnkr.co/users/jamesbs

L'accessibilité a été réalisée en suivant les normes du RGAA.

Voici le fork accessible :

https://plnkr.co/edit/nXMDtYP5nQAaxmtKZqXt?p=preview

### Composant Input-error

Ce composant accessible est un fork de l'exemple tiré du plunker suivant : 

https://plnkr.co/edit/DtQk2c?p=preview

Exemple réalisé par Watrool

https://plnkr.co/users/watrool

L'accessibilité a été réalisée en suivant les recommandations de Romain Gervois
