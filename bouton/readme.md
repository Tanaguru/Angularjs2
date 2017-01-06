
# Bouton

## Crédits

Ce composant accessible est un fork de l'exemple tiré du plunker suivant : 

https://plnkr.co/edit/Vvu62nDZ18IkqiAop2A9?p=preview

Exemple réalisé par Jamesbs

https://plnkr.co/users/jamesbs

## Le composant

Ce composant présente un simple bouton qui fait apparaitre une modal lorsqu'on l'active.

## Accessibilité

Le bouton a été rendu accessible et fonctionnel au clavier. Il est possible d'activer le bouton avec les touches "Entrée" et "Espace". Pour un HostListener a été ajouté au composant bouton pour permettre d'exécuter le même travail au clique de la souris et à la pression des touches "Entrée" et "Espace".

La modal a également été rendu accessible. Lorsqu'elle est affiché dans la page, il n'est plus possible de prendre le focus sur le bouton. Un HostListener a été ajouté pour permettre la fermeture de la modal à la pression de la touche "Echap". Lorsque la modal est fermé, le bouton a à nouveau la possibilité de prendre le focus et le focus lui et attribué.

Pour que l'ensemble soit accessible, nous avons procédé aux développements suivants :
 - Le bouton n'est pas créé à l'aide d'une balise `<button>`, mais par une balise personnalisée `ngc2-notification-button`. La balise est rendue fonctionnelle à la souris grâce à l'objet `HostListener` qui écoute l'évènement au clique de la souris sur le bouton. Le bouton disposait déjà de l'attribut `role="button"`. Nous avons ajouté l'attribut `tabindex="0"` sur le bouton pour permettre aux utilisateurs de prendre le focus sur le bouton. Nous avons également ajouté une écoute sur l'évènement à la pression des touches `Entrée` et `Espace` pour éxécuter la même méthode que pour l'évènement au clique de la souris.
 - Nous avons rendu la modal exclusive en ajoutant un attribut `tabindex="-1"` aux éléments pouvant prendre le focus sur la page à l'exception des éléments intéractifs de la modal. Ainsi, lorsque la modal est affichée l'utilisateur ne peut naviguer au clavier que sur la modal. La possibilité de prise de focus sur les éléments intéractifs de la page est rétabli lorsque la modal est masquée ;
 - Nous avons ajouter l'objet `HostListener` sur le composant modal pour pouvoir ajouter la possibilité de fermer la modal à la pression de la touche `Echap` ;
 - Nous avons également fait en sorte que le focus soit placé sur le bouton ayant ouvert la popin quand celle-ci est fermée.

## Développement à venir

Lorsque la modal est affiché et que l'on active le bouton "Ok" avec la touche "Entrée", la modal est affichée aussitôt après avoir été fermée. Nous cherchons une solution à ce problème.

## Tester notre composant

Le composant accessible réalisé par l'équipe Tanaguru est testable depuis le lien Plunker suivant :

https://plnkr.co/edit/BPtBKfmQrQjGdcsjRrAr?p=preview

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
