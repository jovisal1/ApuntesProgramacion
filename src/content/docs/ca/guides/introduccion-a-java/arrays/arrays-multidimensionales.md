---
title: Arrays multidimensionals
description: Arrays multidimensionals en Java.
sidebar:
  order: 4
---

<p>Pensa en un full de càlcul, un tauler d'escacs o les butaques d'un cine: les dades s'organitzen en <strong>files i columnes</strong>. Un array multidimensional és, en realitat, <strong>un array d'arrays</strong>. Per a declarar-lo afegim un parell de claudàtors per cada dimensió:</p>

```java
int[][] multiArray = new int[3][3];
```

<p>Això crea 3 arrays de 3 enters cadascun, tots guardats en la variable <code>multiArray</code>. Per a accedir a un element utilitzem <strong>dos índexs</strong>: primer la fila i després la columna (i, com sempre, comencen en 0).</p>

<div class="java-document-table">
<table>
<tr>
<th scope="col"></th>
<th scope="col"><p><strong>Columna 0</strong></p></th>
<th scope="col"><p><strong>Columna 1</strong></p></th>
<th scope="col"><p><strong>Columna 2</strong></p></th>
</tr>
<tr>
<td><p><strong>Fila 0</strong></p></td>
<td><p>[0][0]</p></td>
<td><p>[0][1]</p></td>
<td><p>[0][2]</p></td>
</tr>
<tr>
<td><p><strong>Fila 1</strong></p></td>
<td><p>[1][0]</p></td>
<td><p>[1][1]</p></td>
<td><p>[1][2]</p></td>
</tr>
<tr>
<td><p><strong>Fila 2</strong></p></td>
<td><p>[2][0]</p></td>
<td><p>[2][1]</p></td>
<td><p>[2][2]</p></td>
</tr>
</table>
</div>

```java
multiArray[0][0] = 1;
multiArray[0][1] = 2;
multiArray[2][1] = 3;
```

<p>Per a recórrer-los s'utilitzen <strong>bucles dins d'altres bucles</strong>: un per a les files i un altre per a les columnes.</p>

```java
int[][] tabla = new int[3][3];

for (int f = 0; f < tabla.length; f++) {            // omplim la taula
    for (int c = 0; c < tabla[f].length; c++) {
        tabla[f][c] = f * 3 + c + 1;
    }
}
for (int f = 0; f < tabla.length; f++) {            // la mostrem fila per fila
    for (int c = 0; c < tabla[f].length; c++) {
        System.out.print(tabla[f][c] + " ");
    }
    System.out.println();                // salt de línia en acabar cada fila
}
```

<p><strong>EIXIDA PER CONSOLA</strong></p>

```text
1 2 3
4 5 6
7 8 9
```

## Arrays irregulars

<p>La curiositat és que les files no han de tindre necessàriament la mateixa llargària. Podem crear l'array indicant només la primera dimensió i definir la grandària de cada fila després:</p>

```java
int[][] triangulo = new int[4][];
triangulo[0] = new int[1];    // fila 0: 1 element
triangulo[1] = new int[2];    // fila 1: 2 elements
triangulo[2] = new int[3];    // fila 2: 3 elements
triangulo[3] = new int[4];    // fila 3: 4 elements
```

<p>També es poden inicialitzar directament amb claus dins d'altres claus: <code>int[][] m = { {1, 2}, {3, 4, 5} };</code>.</p>

## Cada fila té la seua longitud

`tabla.length` compta files; `tabla[f].length` compta els elements de la fila `f`. Este recorregut funciona amb taules rectangulars i irregulars, sempre que les seues files estiguen creades:

```java
int[][] tabla = { { 4, 7 }, { 9 }, { 2, 5, 8 } };
for (int f = 0; f < tabla.length; f++) {
    for (int c = 0; c < tabla[f].length; c++) {
        System.out.print(tabla[f][c] + " ");
    }
    System.out.println();
}
```

```text
4 7
9
2 5 8
```

Després de `new int[3][]`, les tres referències a files són `null`: encara has de crear cada fila abans de consultar la seua longitud o els seus elements. Evita suposar que totes les files mesuren el mateix o utilitzar `tabla[0].length` com a límit universal.
