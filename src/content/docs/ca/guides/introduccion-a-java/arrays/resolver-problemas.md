---
title: Resoldre problemes amb arrays
description: Resoldre problemes amb arrays en Java.
sidebar:
  order: 3
---

Un array permet resumir un conjunt de dades: sumar-ne els valors, trobar-ne el màxim o localitzar una dada. Els exemples següents utilitzen variables, condicions i bucles.

## Sumar, calcular la mitjana i comptar

Un **acumulador** suma valors; un **comptador** compta quants complixen una condició. Utilitzarem les cinc puntuacions de l'exemple inicial:

```java
int[] puntos = { 10, 25, 15, 30, 20 };
int suma = 0;
int partidasDestacadas = 0;
for (int punto : puntos) {
    suma += punto;
    if (punto >= 20) {
        partidasDestacadas++;
    }
}
if (puntos.length > 0) {
    double media = (double) suma / puntos.length;
    System.out.println(media); // 20.0
}
System.out.println(partidasDestacadas); // 3
```

Així evolucionen l’acumulador i el comptador després de cada volta:

| Índex | Puntuació | `suma` | `partidasDestacadas` |
| --- | --- | --- | --- |
| 0 | 10 | 10 | 0 |
| 1 | 25 | 35 | 1 |
| 2 | 15 | 50 | 1 |
| 3 | 30 | 80 | 2 |
| 4 | 20 | 100 | 3 |

La conversió a `double` evita una divisió entera. Comprovem la longitud abans de dividir: una col·lecció buida no té mitjana. L'`int` d'este exemple és suficient per a estes puntuacions xicotetes; si sumes molts valors grans, l'acumulador pot necessitar `long`.

## Trobar el màxim i la seua posició

Si inicialitzes el màxim a `0`, fallarà quan tots els nombres siguen negatius. Per a un array no buit, partix del seu primer element:

```java
int[] valores = { -8, -3, -12, -3 };
if (valores.length > 0) {
    int posicionMaxima = 0;
    for (int i = 1; i < valores.length; i++) {
        if (valores[i] > valores[posicionMaxima]) {
            posicionMaxima = i;
        }
    }
    System.out.println(valores[posicionMaxima]); // -3
    System.out.println(posicionMaxima);          // 1
}
```

En utilitzar `>` conservem la primera posició si el màxim apareix diverses vegades. Per a buscar el mínim, canviem `>` per `<`.

## Cerca seqüencial: on està un valor?

Mirem les caselles d'esquerra a dreta fins a trobar el que busquem. La posició `-1` significa «no trobat», perquè mai és un índex vàlid.

```java
int[] puntos = { 10, 25, 15, 30, 20 };
int buscado = 15;
int posicion = -1;
for (int i = 0; i < puntos.length; i++) {
    if (puntos[i] == buscado) {
        posicion = i;
        break;
    }
}
System.out.println(posicion); // 2
```

Si busques `99`, obtindràs `-1`. No utilitzes eixe resultat com a índex sense comprovar abans que és major o igual que zero. Esta cerca funciona encara que les dades no estiguen ordenades i retorna la primera coincidència.

Per a buscar text, compara el seu contingut amb `equals`, no amb `==`. Amb un text buscat no nul, `buscado.equals(nombres[i])` també funciona si alguna casella conté `null`.

## Exemple complet: mitjana de nombres decimals

<p>Així es veuria en memòria un array <code>a</code> amb cinc nombres decimals:</p>

<div class="java-document-table">
<table>
<tr>
<th scope="col"><p><strong>a[0]</strong></p></th>
<th scope="col"><p><strong>a[1]</strong></p></th>
<th scope="col"><p><strong>a[2]</strong></p></th>
<th scope="col"><p><strong>a[3]</strong></p></th>
<th scope="col"><p><strong>a[4]</strong></p></th>
</tr>
<tr>
<td><p><code>10</code></p></td>
<td><p><code>23.5</code></p></td>
<td><p><code>15</code></p></td>
<td><p><code>7</code></p></td>
<td><p><code>8.5</code></p></td>
</tr>
</table>
</div>

<p>Amb un bucle podem recórrer-lo i calcular la mitjana dels cinc nombres:</p>

```java
public class MediaArray {
    public static void main(String[] args) {
        double[] a = { 10, 23.5, 15, 7, 8.5 };
        double total = 0;
        for (int i = 0; i < a.length; i++) {
            total += a[i];
        }
        System.out.println("La mitjana és: " + total / a.length);
    }
}
```

<p><strong>EIXIDA PER CONSOLA</strong></p>

```text
La mitjana és: 12.8
```
