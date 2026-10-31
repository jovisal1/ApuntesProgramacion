---
title: La clase java.util.Arrays
description: La clase java.util.Arrays en Java.
sidebar:
  order: 5
---

Esta clase reúne operaciones habituales. Añade `import java.util.Arrays;` al principio del archivo, antes de la clase. Los siguientes fragmentos usan esa importación.

## Mostrar y rellenar

```java
int[] puntos = { 10, 25, 15 };
System.out.println(Arrays.toString(puntos)); // [10, 25, 15]
Arrays.fill(puntos, 0);
System.out.println(Arrays.toString(puntos)); // [0, 0, 0]
int[][] tabla = { { 1, 2 }, { 3, 4 } };
System.out.println(Arrays.deepToString(tabla)); // [[1, 2], [3, 4]]
```

`System.out.println(puntos)` no muestra sus elementos: imprime una representación de la referencia, como `[I@...`. Usa `toString` para una dimensión y `deepToString` para ver el contenido de arrays anidados.

## Ordenar y buscar en un array ordenado

```java
int[] puntos = { 30, 10, 20 };
Arrays.sort(puntos);
System.out.println(Arrays.toString(puntos)); // [10, 20, 30]
System.out.println(Arrays.binarySearch(puntos, 20)); // 1
System.out.println(Arrays.binarySearch(puntos, 25)); // -3
```

`sort` cambia el orden del propio array. Si las posiciones representaban partidas concretas, ya no podrás identificar cada partida por su índice original.

**`binarySearch` requiere datos ordenados**. Devuelve un índice si encuentra el valor; si no, un número negativo que codifica dónde se insertaría. No siempre devuelve `-1`: comprueba `resultado >= 0`. Si hay duplicados, no garantiza la primera coincidencia. Para mantener el orden original, ordena una copia.

## Copiar y comparar el contenido

```java
int[] original = { 10, 25, 15 };
int[] copia = Arrays.copyOf(original, original.length);
System.out.println(original == copia);             // false
System.out.println(Arrays.equals(original, copia)); // true
copia[0] = 99;
System.out.println(original[0]);                   // 10
int[] ampliado = Arrays.copyOf(original, 5);
System.out.println(Arrays.toString(ampliado));     // [10, 25, 15, 0, 0]
```

`copyOf` crea otro array; no estira el original. Si la nueva longitud es menor, recorta los últimos datos; si es mayor, completa con valores por defecto. `==` pregunta si dos variables apuntan al mismo array; `Arrays.equals` compara sus elementos. Para arrays anidados se utiliza `Arrays.deepEquals`.

Con arrays de objetos o de filas, la copia es **superficial**: se crea el array exterior, pero se copian las referencias de sus elementos. Las filas de una matriz copiada con `copyOf` siguen compartidas; para independizarlas, copia también cada fila.
