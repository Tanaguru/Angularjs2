
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

https://plnkr.co/edit/sl5Y5sJbjUa1z3vmBCxc?p=preview

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

