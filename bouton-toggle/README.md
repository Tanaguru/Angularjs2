
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

https://plnkr.co/edit/aZrmaYu53694Vgs2tx2R?p=preview

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
