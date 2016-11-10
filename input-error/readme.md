
# Input-error

## Crédits

Ce composant accessible est un fork de l'exemple tiré du plunker suivant : 

https://plnkr.co/edit/DtQk2c?p=preview

Exemple réalisé par Watrool

https://plnkr.co/users/watrool

L'accessibilité a été réalisée en suivant les recommandations de Romain Gervois

Le fork accessible réalisé par l'équipe Tanaguru :

https://plnkr.co/edit/QD5Um3?p=preview

## Le composant

Ce composant présente simplement un champ de formulaire email qui est obligatoire. Si l'utilisateur passe le champ sans le compléter, un message apparait lui demandant de renseigner le champ.

Le modèle utilisé servait essentiellement à illustrer comment récupérer l'information renseigner dans le champ pour l'afficher ailleurs.

Notre composant est plus complexe : 
 - Nous avons changer la méthode de récupération la valeur du champ. Initialement, elle était récupérée à l'aide de la méthode "ngSubmit". Nous récupérons la valeur avec la méthode "ngModel" depuis le champ lui-même. ` (ngSubmit)="submitForm(myForm)" ` => ` [(ngModel)]="myModel" ` ;
 - 

## Accessibilité

Des conditions d'affichage des messages ont été ajoutés au composant pour avertir l'utilisateur de ses erreurs de saisie. Ses messages sont bien associés au champ de saisie et les technologies d'assistance informe l'utilisateur dès que le message apparait.

De manière générale, le champ dispose bien d'une étiquette à laquelle il est correctemment associé dans le code et accolé visuellement.
