---
title: "Funcions en Java"
description: "Funcions en Java."
sidebar:
  order: 1
---

Quan un programa creix, escriure totes les seues instruccions dins de `main` dificulta entendre’l i obliga a repetir operacions. Podem repartir el treball en **mètodes**: blocs amb nom que fan una tasca i que podem utilitzar tantes vegades com necessitem.

Esta unitat se centra en **RA2**, per les crides amb paràmetres, i en una part de **RA4**, per la definició i l’ús de mètodes estàtics —criteri h— i el control bàsic de l’accés. Encara no es desenvolupa tot el treball amb classes i objectes del RA4.

També reforcem **RA1** amb l’estructura i l’àmbit de les variables, **RA3** amb les condicions, els bucles i la comprovació dels exemples, **RA5** amb la lectura i l’eixida per consola de la suma i **RA6** amb el pas i el retorn d’arrays. Treballar estos aspectes no equival a completar tots els criteris de cada RA.

## Dividir un problema en tasques

Imagina un programa que calcula les puntuacions de diverses partides. En cada partida cal sumar els punts obtinguts i una bonificació. Copiar la suma en molts llocs funciona al principi, però cada canvi obliga a revisar totes les còpies. Si donem un nom a eixa operació, podem escriure-la una vegada i cridar-la amb dades diferents.

Un mètode és una peça d’un programa que pot **rebre dades**, **executar instruccions** i **retornar un resultat**. No tots els mètodes necessiten entrades ni tots produïxen un valor d’eixida. Un mètode que mostra una salutació fa una acció, encara que no retorne cap valor.

| Tasca | Dades d’entrada | Resultat retornat |
| --- | --- | --- |
| Sumar punts | Dos enters | Un enter |
| Comprovar si s’aprova | Una nota | Un `boolean` |
| Mostrar un menú | Cap | Cap valor |
| Buscar una puntuació | Un array i un valor | La seua posició o `-1` |

<aside class="java-document-note">
<p><strong>DEFINICIÓ</strong></p>
<p><strong>Mètode:</strong> bloc d’instruccions amb un nom que fa una tasca. Pensa en una recepta guardada: escriure-la deixa preparats els passos; cridar-la és demanar que se seguisquen. Pot necessitar dades per a treballar i pot retornar un resultat.</p>
</aside>

## Funció i mètode

En estos apunts utilitzarem el títol **Funcions en Java**, però el terme habitual del llenguatge és **mètode**, perquè estes operacions es declaren com a membres d’una classe. Ja has utilitzat mètodes: `System.out.println(...)`, `entrada.nextInt()` i `Arrays.sort(...)`. Ara aprendràs a definir els teus.

Per a centrar-nos en la descomposició de problemes, declararem els nostres mètodes amb `static`, al costat de `main` i dins de la mateixa classe. Més avant estudiarem els mètodes que treballen sobre objectes.

Guarda este primer exemple en **`PrimerMetodo.java`**:

```java
public class PrimerMetodo {
    public static void main(String[] args) {
        System.out.println(sumar(10, 5));
        System.out.println(sumar(20, 3));
    }

    public static int sumar(int puntos, int bonus) {
        return puntos + bonus;
    }
}
```

```text
15
23
```

En `sumar(10, 5)` demanem que s’execute el mètode amb els valors `10` i `5`. Dins d’eixa crida, `puntos` val `10` i `bonus` val `5`. La instrucció `return` entrega `15` al lloc de la crida, i `println` el mostra. La segona crida fa la mateixa operació amb altres dades.

## Què aprendràs a fer

Aprendràs a triar les entrades i l’eixida de cada mètode, declarar-ne la capçalera i seguir el recorregut de les crides. Després explicaràs per què algunes modificacions són visibles fora del mètode i altres no; utilitzaràs sobrecàrrega, arguments variables i recursió.

Necessites manejar [variables i tipus](/ApuntesProgramacion/ca/guides/introduccion-a-java/tipos-de-datos-variables-y-mas/), [condicions i bucles](/ApuntesProgramacion/ca/guides/introduccion-a-java/estructuras-de-control/), [entrada i eixida](/ApuntesProgramacion/ca/guides/introduccion-a-java/entrada-y-salida-de-datos/) i [arrays](/ApuntesProgramacion/ca/guides/introduccion-a-java/arrays/). Els exemples complets indicaran el seu fitxer; els fragments necessitaran el context que s’indique.
