---
title: Arrays multidimensionales
description: Arrays multidimensionales en Java.
sidebar:
  order: 4
---

<p>Piensa en una hoja de cálculo, un tablero de ajedrez o las butacas de un cine: los datos se organizan en <strong>filas y columnas</strong>. Un array multidimensional es, en realidad, <strong>un array de arrays</strong>. Para declararlo añadimos un par de corchetes por cada dimensión:</p>

```java
int[][] multiArray = new int[3][3];
```

<p>Esto crea 3 arrays de 3 enteros cada uno, todos guardados en la variable <code>multiArray</code>. Para acceder a un elemento usamos <strong>dos índices</strong>: primero la fila y después la columna (y, como siempre, empiezan en 0).</p>

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

<p>Para recorrerlos se usan <strong>bucles anidados</strong>: uno para las filas y otro para las columnas.</p>

```java
int[][] tabla = new int[3][3];

for (int f = 0; f < tabla.length; f++) {            // rellenamos la tabla
    for (int c = 0; c < tabla[f].length; c++) {
        tabla[f][c] = f * 3 + c + 1;
    }
}
for (int f = 0; f < tabla.length; f++) {            // la mostramos fila por fila
    for (int c = 0; c < tabla[f].length; c++) {
        System.out.print(tabla[f][c] + " ");
    }
    System.out.println();                // salto de línea al terminar cada fila
}
```

<p><strong>SALIDA POR CONSOLA</strong></p>

```text
1 2 3
4 5 6
7 8 9
```

## Arrays irregulares

<p>Lo curioso es que las filas no tienen por qué medir todas lo mismo. Podemos crear el array indicando solo la primera dimensión y definir el tamaño de cada fila después:</p>

```java
int[][] triangulo = new int[4][];
triangulo[0] = new int[1];    // fila 0: 1 elemento
triangulo[1] = new int[2];    // fila 1: 2 elementos
triangulo[2] = new int[3];    // fila 2: 3 elementos
triangulo[3] = new int[4];    // fila 3: 4 elementos
```

<p>También se pueden inicializar directamente con llaves anidadas: <code>int[][] m = { {1, 2}, {3, 4, 5} };</code>.</p>

## Cada fila tiene su propia longitud

`tabla.length` cuenta filas; `tabla[f].length` cuenta los elementos de la fila `f`. Este recorrido funciona con tablas rectangulares e irregulares, siempre que sus filas estén creadas:

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

Después de `new int[3][]`, las tres referencias a filas son `null`: todavía debes crear cada fila antes de consultar su longitud o sus elementos. Evita suponer que todas las filas miden lo mismo o usar `tabla[0].length` como límite universal.
