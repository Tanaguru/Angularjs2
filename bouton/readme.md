
# Bouton

## Crédits

Ce composant accessible est un fork de l'exemple tiré du plunker suivant : 

https://plnkr.co/edit/Vvu62nDZ18IkqiAop2A9?p=preview

Exemple réalisé par Jamesbs

https://plnkr.co/users/jamesbs

L'accessibilité a été réalisée en suivant les normes du RGAA.

Le fork accessible a été réalisé par Régis L. :

https://plnkr.co/edit/nXMDtYP5nQAaxmtKZqXt?p=preview

## Le composant

Ce composant présente un simple bouton qui fait apparaitre une modal lorsqu'on l'active.

## Accessibilité

Le bouton a été rendu accessible et fonctionnel au clavier. Il est possible d'activer le bouton avec les touches "Entrée" et "Espace". Pour un HostListener a été ajouté au composant bouton pour permettre d'exécuter le même travail au clique de la souris et à la pression des touches "Entrée" et "Espace".

La modal a également été rendu accessible. Lorsqu'elle est affiché dans la page, il n'est plus possible de prendre le focus sur le bouton. Un HostListener a été ajouté pour permettre la fermeture de la modal à la pression de la touche "Echap". Lorsque la modal est fermé, le bouton a à nouveau la possibilité de prendre le focus et le focus lui et attribué.

## Développement à venir

Lorsque la modal est affiché et que l'on active le bouton "Ok" avec la touche "Entrée", la modal est affichée aussitôt après avoir été fermée sur firefox. Nous cherchons une solution à ce problème
