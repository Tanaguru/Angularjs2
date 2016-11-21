
# Input-error

## Crédits

Ce composant accessible est un fork de l'exemple tiré du plunker suivant : 

https://plnkr.co/edit/DtQk2c?p=preview

Exemple réalisé par Watrool

https://plnkr.co/users/watrool

## Le composant

Ce composant présente simplement un champ de formulaire email qui est obligatoire. Si l'utilisateur passe le champ sans le compléter, un message apparait lui demandant de renseigner le champ.

Le modèle utilisé servait essentiellement à illustrer comment récupérer l'information renseigner dans le champ pour l'afficher ailleurs.

Notre composant est plus complexe, un contrôle est fait sur le champ pour afficher unn message s'il n'est pas renseigné.

## Accessibilité

Des conditions d'affichage des messages ont été ajoutés au composant pour avertir l'utilisateur de ses erreurs de saisie. Ses messages sont bien associés au champ de saisie et les technologies d'assistance informe l'utilisateur dès que le message apparait.

De manière générale, le champ dispose bien d'une étiquette à laquelle il est correctemment associé dans le code et accolé visuellement.

Pour que l'ensemble soit accessible, nous avons procédé aux développements suivants :
 - Nous avons changer la méthode de récupération la valeur du champ. Initialement, elle était récupérée à l'aide de la méthode "ngSubmit". Nous récupérons la valeur avec la méthode "ngModel" depuis le champ lui-même. ` (ngSubmit)="submitForm(myForm)" ` => ` [(ngModel)]="myModel" ` ;
 - le champ est obligatoire, les attributs `required` et `aria-required="true"` ont donc été ajoutés ;
 - Le but est d'afficher un message indiquant à l'utilisateur qu'il a fait une erreur dans sa saisie et comment la corriger ;
 - Le message est afficher sur condition que le champ est renseigné ou non. La fonction `toggleCtrlInput` récupère la valeur du champ et si elle est vide, instantie la variable `ctrlInput` à `false` et `true` dans le cas contraire. Nous utilisons la méthode ngIf sur la balise du message pour conditionner son affichage. `<p *ngIf="ctrlInput" id="ctrlInput">Ce champ doit être impérativement renseigné.</p>`. La fonction `toggleCtrlInput` est appelée quand le champ change de valeur et quand l'utilisateur quitte le champ. `(ngModelChange)="toggleCtrlInput($event)" (blur)="toggleCtrlInput($event)"` ;
 - Le message est associé au champ grace à l'attribut `aria-describedby`. L'affichage est également conditionné par la valeur de la variable `myCtrlInput` qui prend l'identifiant du message quand il est affiché ou `null` quand il ne l'est pas. `[attr.aria-describedby]="myCtrlInput"` ;
 
## Tester notre composant

Le composant accessible réalisé par l'équipe Tanaguru est testable depuis le lien Plunker suivant :

https://plnkr.co/edit/QD5Um3?p=preview
