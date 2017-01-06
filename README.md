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

Pour que l'ensemble soit accessible, nous avons procédé aux développements suivants :
 - Le bouton n'est pas créé à l'aide d'une balise `<button>`, mais par une balise personnalisée `ngc2-notification-button`. La balise est rendue fonctionnelle à la souris grâce à l'objet `HostListener` qui écoute l'évènement au clique de la souris sur le bouton. Le bouton disposait déjà de l'attribut `role="button"`. Nous avons ajouté l'attribut `tabindex="0"` sur le bouton pour permettre aux utilisateurs de prendre le focus sur le bouton. Nous avons également ajouté une écoute sur l'évènement à la pression des touches `Entrée` et `Espace` pour éxécuter la même méthode que pour l'évènement au clique de la souris.
 - Nous avons rendu la modal exclusive en ajoutant un attribut `tabindex="-1"` aux éléments pouvant prendre le focus sur la page à l'exception des éléments intéractifs de la modal. Ainsi, lorsque la modal est affichée l'utilisateur ne peut naviguer au clavier que sur la modal. La possibilité de prise de focus sur les éléments intéractifs de la page est rétabli lorsque la modal est masquée ;
 - Nous avons ajouter l'objet `HostListener` sur le composant modal pour pouvoir ajouter la possibilité de fermer la modal à la pression de la touche `Echap` ;
 - Nous avons également fait en sorte que le focus soit placé sur le bouton ayant ouvert la popin quand celle-ci est fermée.

#### Développement à venir

Lorsque la modal est affiché et que l'on active le bouton "Ok" avec la touche "Entrée", la modal est affichée aussitôt après avoir été fermée. Nous cherchons une solution à ce problème.
 
#### Tester notre composant

Le composant accessible réalisé par l'équipe Tanaguru est testable depuis le Plunker suivant :

https://plnkr.co/edit/BPtBKfmQrQjGdcsjRrAr?p=preview

### Toggle bouton

#### Le composant

Ce composant se présente sous la forme d'une balise `<toggle>`. Celle-ci affiche un bouton `toggle`, qui lorsqu'on clique dessus, affiche ou masque un élément existant sur la page. Il peut s'agir d'un `<header>`, d'une `<section>`, d'une `<div>` ou encore d'un `<footer>` par exemple. 

Aussi, pour faire le lien entre le bouton et cet élément, la balise `<toggle>` comprend un attribut `target`, prenant pour valeur l'id (identifiant) de celui-ci. 

#### Accessibilité

Afin que les technologies d'assistances puissent informer leur utilisateur du comportement du composant, le bloc et le bouton sont liés l'un à l'autre grâce aux attributs ARIA.

Ces derniers permettront aux technologies d'assistance de savoir si le bloc est affiché ou non. 

##### 1) Comment fonctionne le composant

Lorsque l'utilisateur active le bouton en cliquant dessus ou en pressant la touche "Espace" :

- Une fonction `toggleBlock()` est appelée ;
- Celle-ci met à jour l'intitulé du bouton ("Afficher le bloc" ou "Masquer le bloc") ;
- Elle met ensuite à jour les classes CSS de l'élément, en lui rajoutant "expanded-true" pour l'afficher, ou "expanded-false" dans le cas inverse ;
- Enfin, la valeur de l'attribut "aria-expanded" du bouton est également mis à jour (cf. ci-dessous). 

##### 2) Les attributs ARIA

Le bouton `toggle` comprend les attributs `aria-controls` et `aria-expanded` : 
- Le premier prend pour valeur l'id du bloc et permet donc de faire le lien avec celui-ci. L'id est récupéré depuis l'attribut `target` (voir ci-dessus) de la balise `<toggle>` ;
- Le second prend pour valeur un booleen ("true" or "false"), indiquant si le bloc lié est affiché ou non, et qui est mise à jour quand l'utilisateur clique sur le bouton.
 
#### Tester notre composant

Le composant accessible réalisé par l'équipe Tanaguru est testable depuis le Plunker suivant :

https://plnkr.co/edit/aZrmaYu53694Vgs2tx2R?p=preview

### Liste avec accumulation

#### Le composant

Ce composant présente une liste finie d'éléments. Un bouton permet d'afficher plus d'éléments à la liste. À chaque activation du bouton, 5 nouveaux éléments sont ajoutés à la liste tant que la liste n'est pas affichée au complet. C'est une variante de la pagination, on ne change pas de page, on affiche simplement plus d'éléments.

#### Accessibilité

Le bouton a été rendu accessible et fonctionnel au clavier. Il est possible d'activer le bouton avec les touches "Entrée" et "Espace". L'utilisateur de technologie d'assistance est averti que le nombre d'éléments dans la liste a été augmenté. Il peut également continuer à lire la liste là où il l'avait terminé.

Pour que l'ensemble soit accessible, nous avons procédé aux développements suivants :
 - Le bouton permettant d'afficher plus d'éléments est fonctionnel au clavier et à la souris ;
 - Lorsque l'on ajoute de nouveau éléments au clavier, l'utilisateur est automatiquement replacé sur le dernier élément lu de la liste et peu ainsi continuer sa lecture là où il l'avait laissé.

#### Développement à venir 

Nous pensons à supprimer ou rendre non fonctionnel le bouton lorsqu'il n'y a plus d'élément à ajouter à la liste.
 
#### Tester notre composant

Le composant accessible réalisé par l'équipe Tanaguru est testable depuis le Plunker suivant :

https://plnkr.co/edit/BPtBKfmQrQjGdcsjRrAr?p=preview

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
 
#### Tester notre composant

Le composant accessible réalisé par l'équipe Tanaguru est testable depuis le Plunker suivant :

https://plnkr.co/edit/sl5Y5sJbjUa1z3vmBCxc?p=preview

## Crédits

### Composant bouton

Ce composant accessible est un fork de l'exemple tiré du plunker suivant : 

https://plnkr.co/edit/Vvu62nDZ18IkqiAop2A9?p=preview

Exemple réalisé par Jamesbs

https://plnkr.co/users/jamesbs

### Composant liste avec accumulation

Ce composant accessible est un fork de l'exemple tiré du plunker suivant : 

https://plnkr.co/edit/vtYGE5LosH5Rs4L7PMmM?p=preview

Exemple réalisé par Sonukapoor

https://plnkr.co/users/sonukapoor

### Composant Input-error

Ce composant accessible est un fork de l'exemple tiré du plunker suivant : 

https://plnkr.co/edit/DtQk2c?p=preview

Exemple réalisé par Watrool

https://plnkr.co/users/watrool

## Licence Créative Commons

**Attribution - Partage dans les Mêmes Conditions 3.0 France (CC BY-SA 3.0 FR)**

### Vous êtes autorisé à :

**Partager** — copier, distribuer et communiquer le matériel par tous moyens et sous tous formats

**Adapter** — remixer, transformer et créer à partir du matériel pour toute utilisation, y compris commerciale.

L'Offrant ne peut retirer les autorisations concédées par la licence tant que vous appliquez les termes de cette licence.

### Selon les conditions suivantes :

![](https://github.com/Tanaguru/Angularjs2/blob/master/assets/licence01.png)
**Attribution** — Vous devez **créditer** l'Œuvre, intégrer un lien vers la licence et **indiquer** si des modifications ont été effectuées à l'Oeuvre. Vous devez indiquer ces informations par tous les moyens raisonnables, sans toutefois suggérer que l'Offrant vous soutient ou soutient la façon dont vous avez utilisé son Oeuvre. 

![](https://github.com/Tanaguru/Angularjs2/blob/master/assets/licence02.png)
**Partage dans les Mêmes Conditions** — Dans le cas où vous effectuez un remix, que vous transformez, ou créez à partir du matériel composant l'Oeuvre originale, vous devez diffuser l'Oeuvre modifiée dans les même conditions, c'est à dire avec **la même licence** avec laquelle l'Oeuvre originale a été diffusée. 

**Pas de restrictions complémentaires** — Vous n'êtes pas autorisé à appliquer des conditions légales ou des **mesures techniques** qui restreindraient légalement autrui à utiliser l'Oeuvre dans les conditions décrites par la licence.
