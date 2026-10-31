---
title: La classe java.util.Arrays
description: La classe java.util.Arrays en Java.
sidebar:
  order: 5
---

Esta classe reunix operacions habituals. Afig `import java.util.Arrays;` al principi del fitxer, abans de la classe. Els fragments següents utilitzen eixa importació.

## Mostrar i omplir

```java
int[] puntos = { 10, 25, 15 };
System.out.println(Arrays.toString(puntos)); // [10, 25, 15]
Arrays.fill(puntos, 0);
System.out.println(Arrays.toString(puntos)); // [0, 0, 0]
int[][] tabla = { { 1, 2 }, { 3, 4 } };
System.out.println(Arrays.deepToString(tabla)); // [[1, 2], [3, 4]]
```

`System.out.println(puntos)` no mostra els seus elements: imprimix una representació de la referència, com `[I@...`. Utilitza `toString` per a una dimensió i `deepToString` per a veure el contingut d'arrays imbricats.

## Ordenar i buscar en un array ordenat

```java
int[] puntos = { 30, 10, 20 };
Arrays.sort(puntos);
System.out.println(Arrays.toString(puntos)); // [10, 20, 30]
System.out.println(Arrays.binarySearch(puntos, 20)); // 1
System.out.println(Arrays.binarySearch(puntos, 25)); // -3
```

`sort` canvia l'ordre del mateix array. Si les posicions representaven partides concretes, ja no podràs identificar cada partida pel seu índex original.

**`binarySearch` requerix dades ordenades**. Retorna un índex si troba el valor; si no, un nombre negatiu que codifica on s'inseriria. No sempre retorna `-1`: comprova `resultado >= 0`. Si hi ha duplicats, no garantix la primera coincidència. Per a mantindre l'ordre original, ordena una còpia.

## Copiar i comparar el contingut

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

`copyOf` crea un altre array; no estira l'original. Si la nova longitud és menor, retalla les últimes dades; si és major, completa amb valors per defecte. `==` pregunta si dos variables apunten al mateix array; `Arrays.equals` compara els seus elements. Per a arrays imbricats s'utilitza `Arrays.deepEquals`.

Amb arrays d'objectes o de files, la còpia és **superficial**: es crea l'array exterior, però es copien les referències dels seus elements. Les files d'una matriu copiada amb `copyOf` continuen compartides; per a independitzar-les, copia també cada fila.
