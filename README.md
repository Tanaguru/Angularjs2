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

Le bouton a été rendu accessible et fonctionnel au clavier. Il est possible d'activer le bouton avec les touches "Entrée" et "Espace". Pour un HostListener a été ajouté au composant bouton pour permettre d'exécuter le même travail au clique de la souris et à la pression des touches "Entrée" et "Espace".

La modal a également été rendu accessible. Lorsqu'elle est affiché dans la page, il n'est plus possible de prendre le focus sur le bouton. Un HostListener a été ajouté pour permettre la fermeture de la modal à la pression de la touche "Echap". Lorsque la modal est fermé, le bouton a à nouveau la possibilité de prendre le focus et le focus lui et attribué.

#### Développement à venir

Lorsque la modal est affiché et que l'on active le bouton "Ok" avec la touche "Entrée", la modal est affichée aussitôt après avoir été fermée. Nous cherchons une solution à ce problème

### Toggle bouton

#### Le composant

Ce composant comprend un attribut "target" prenant pour valeur l'id du bloc à afficher/cacher. Lorsque l'on clique sur le bouton, le bloc associé est affiché ou masqué.

#### Accessibilité

Le bouton a été rendu accessible et fonctionnel au clavier. Il est possible d'activer le bouton avec les touches "Entrée" et "Espace".

### Liste avec accumulation

#### Le composant

Ce composant présente une liste finie d'éléments. Un bouton permet d'afficher plus d'éléments à la liste. C'est une variante de la pagination, on ne change pas de page, on affiche simplement plus d'éléments.

#### Accessibilité

Le bouton a été rendu accessible et fonctionnel au clavier. Il est possible d'activer le bouton avec les touches "Entrée" et "Espace". L'utilisateur de technologie d'assistance est averti que le nombre d'éléments dans la liste a été augmenté. Il peut également continuer à lire la liste là où il l'avait terminé.

#### Développement à venir 

Nous pensons à supprimer ou rendre non fonctionnel le bouton lorsqu'il n'y a plus d'élément à ajouter à la liste.

### Input-error

#### Le composant

Ce composant présente simplement un champ de formulaire email qui est obligatoire. Si l'utilisateur passe le champ sans le compléter, un message apparait lui demandant de renseigner le champ.

Le modèle utilisé servait essentiellement à illustrer comment récupérer l'information renseigner dans le champ pour l'afficher ailleurs.

Notre composant est plus complexe, un contrôle est fait sur le champ pour afficher unn message s'il n'est pas renseigné.

#### Accessibilité

Des conditions d'affichage des messages ont été ajoutés au composant pour avertir l'utilisateur de ses erreurs de saisie. Ses messages sont bien associés au champ de saisie et les technologies d'assistance informe l'utilisateur dès que le message apparait.

De manière générale, le champ dispose bien d'une étiquette à laquelle il est correctemment associé dans le code et accolé visuellement.

Pour que l'ensemble soit accessible, nous avons procédé aux développements suivants :
 - Nous avons changer la méthode de récupération la valeur du champ. Initialement, elle était récupérée à l'aide de la méthode "ngSubmit". Nous récupérons la valeur avec la méthode "ngModel" depuis le champ lui-même. ` (ngSubmit)="submitForm(myForm)" ` => ` [(ngModel)]="myModel" ` ;
 - le champ est obligatoire, les attributs `required` et `aria-required="true"` ont donc été ajoutés ;
 - Le but est d'afficher un message indiquant à l'utilisateur qu'il a fait une erreur dans sa saisie et comment la corriger ;
 - Le message est afficher sur condition que le champ est renseigné ou non. La fonction `toggleCtrlInput` récupère la valeur du champ et si elle est vide, instantie la variable `ctrlInput` à `false` et `true` dans le cas contraire. Nous utilisons la méthode ngIf sur la balise du message pour conditionner son affichage. `<p *ngIf="ctrlInput" id="ctrlInput">Ce champ doit être impérativement renseigné.</p>`. La fonction `toggleCtrlInput` est appelée quand le champ change de valeur et quand l'utilisateur quitte le champ. `(ngModelChange)="toggleCtrlInput($event)" (blur)="toggleCtrlInput($event)"` ;
 - Le message est associé au champ grace à l'attribut `aria-describedby`. L'affichage est également conditionné par la valeur de la variable `myCtrlInput` qui prend l'identifiant du message quand il est affiché ou `null` quand il ne l'est pas. `[attr.aria-describedby]="myCtrlInput"` ;

## Crédits

### Composant bouton

Ce composant accessible est un fork de l'exemple tiré du plunker suivant : 

https://plnkr.co/edit/Vvu62nDZ18IkqiAop2A9?p=preview

Exemple réalisé par Jamesbs

https://plnkr.co/users/jamesbs

L'accessibilité a été réalisée en suivant les normes du RGAA.

Le fork accessible réalisé par l'équipe Tanaguru :

https://plnkr.co/edit/nXMDtYP5nQAaxmtKZqXt?p=preview

### Composant Toggle bouton

Le code accessible réalisé par l'équipe Tanaguru :

https://plnkr.co/edit/D0zeP4eOAR1iZHp3tNwc?p=preview

### Composant liste avec accumulation

Ce composant accessible est un fork de l'exemple tiré du plunker suivant : 

https://plnkr.co/edit/vtYGE5LosH5Rs4L7PMmM?p=preview

Exemple réalisé par Sonukapoor

https://plnkr.co/users/sonukapoor

L'accessibilité a été réalisée en suivant les recommandations de Romain Gervois.

Le fork accessible réalisé par l'équipe Tanaguru :

https://plnkr.co/edit/hxoO2DqWwg6WOLrDd7X9?p=preview

### Composant Input-error

Ce composant accessible est un fork de l'exemple tiré du plunker suivant : 

https://plnkr.co/edit/DtQk2c?p=preview

Exemple réalisé par Watrool

https://plnkr.co/users/watrool

L'accessibilité a été réalisée en suivant les recommandations de Romain Gervois

Le fork accessible réalisé par l'équipe Tanaguru :

https://plnkr.co/edit/QD5Um3?p=preview
