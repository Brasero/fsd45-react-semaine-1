# Exercice 1

## partie 1

Vous allez faire une petite calculatrice avec les notions du cours useState, useEffect, useReducer, ...

Oragnisez l'application en plusieur components

Créez deux champs de saisi permettant de définir deux nombres pour la calculatrice. Puis créez les boutons suivants :

Un bouton + pour effectuer l'addition.

Un bouton X pour faire la multiplication.

Un bouton Reset pour effacer le résultat.

Gérez les messages d'erreur

En utilisant le useEffect comptez le nombre d'opérations effectuées et affichez un message au bout de 10 calculs fait par l'utilisateur.


```
Resultat : 17 <- Affichage du résultat

Num1 : [2]  Num2 : [15] <--  deux champs texte pour saisir vos nombres

[+] <-- Additionner
[*] <-- Multiplier
[Reset]
```

## partie 2

- En repartant du résultat de la partie 1 faite maintenant en sorte de n'avoir plus qu'un seul champs de saisie pour le nombre.
- Ajouter un bouton `=`
- Ajouter la soustraction et la division avec leur bouton réspéctif

```
Le déroulé de l'utilisation est le suivant : 

1 L'utilisateur saisi un nombre
2 L'utilisateur clique sur un opérateur (`+`, `-`, `x`, `%`), le champ de saisie se vide pour laiser place au nombre suivant
3 L'utilisateur clique sur `=`, le champ de saisie se vide, le résultat s'affiche
```