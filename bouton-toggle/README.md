
# Bouton

## Le composant

Ce composant se présente sous la forme d'une balise <toggle>. Celle-ci affiche un bouton `toggle`, qui lorsqu'on clique dessus, affiche ou masque un élément existant sur la page. Il peut s'agir d'un <header>, d'une <section>, d'une <div> ou encore d'un <footer> par exemple. 

Aussi, pour faire le lien entre le bouton et cet élément, la balise <toggle> comprend un attribut `target`, prenant pour valeur l'id (identifiant) de celui-ci. 

## Accessibilité

Afin que les technologies d'assistances puissent informer leur utilisateur du comportement du composant, le bloc et le bouton sont liés l'un à l'autre grâce aux attributs ARIA.

Ces derniers permettront aux technologies d'assistance de savoir si le bloc est affiché ou non. 

1) Comment fonctionne le composant

Lorsque l'utilisateur active le bouton en cliquant dessus ou en pressant la touche "Espace" : 

- Une fonction `toggleBlock()` est appelée ;
- Celle-ci met à jour l'intitulé du bouton ("Afficher le bloc" ou "Masquer le bloc") ;
- Elle met ensuite à jour les classes CSS de l'élément, en lui rajoutant "expanded-true" pour l'afficher, ou "expanded-false" dans le cas inverse ;
- Enfin, la valeur de l'attribut "aria-expanded" du bouton est également mis à jour (cf. ci-dessous). 

2) Les attributs ARIA

Le bouton `toggle` comprend les attributs `aria-controls` et `aria-expanded` : 
 - Le premier prend pour valeur l'id du bloc et permet donc de faire le lien avec celui-ci. L'id est récupéré depuis l'attribut `target` (voir ci-dessus) de la balise <toggle> ;
 - Le second prend pour valeur un booleen ("true" or "false"), indiquant si le bloc lié est affiché ou non, et qui est mise à jour quand l'utilisateur clique sur le bouton.

## Tester notre composant

Le composant accessible réalisé par l'équipe Tanaguru est testable depuis le Plunker suivant :

https://plnkr.co/edit/C8lAmaN2uGBLDS6nStWA?p=preview
