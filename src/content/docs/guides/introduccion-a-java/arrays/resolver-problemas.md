---
title: Resolver problemas con arrays
description: Resolver problemas con arrays en Java.
sidebar:
  order: 3
---

Un array permite resumir un conjunto de datos: sumar sus valores, encontrar el máximo o localizar un dato. Los siguientes ejemplos utilizan variables, condiciones y bucles.

## Sumar, calcular la media y contar

Un **acumulador** suma valores; un **contador** cuenta cuántos cumplen una condición. Usaremos las cinco puntuaciones del ejemplo inicial:

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

Así evolucionan el acumulador y el contador después de cada vuelta:

| Índice | Puntuación | `suma` | `partidasDestacadas` |
| --- | --- | --- | --- |
| 0 | 10 | 10 | 0 |
| 1 | 25 | 35 | 1 |
| 2 | 15 | 50 | 1 |
| 3 | 30 | 80 | 2 |
| 4 | 20 | 100 | 3 |

La conversión a `double` evita una división entera. Comprobamos la longitud antes de dividir: una colección vacía no tiene media. El `int` de este ejemplo es suficiente para estas puntuaciones pequeñas; si sumas muchos valores grandes, el acumulador puede necesitar `long`.

## Encontrar el máximo y su posición

Si inicializas el máximo a `0`, fallará cuando todos los números sean negativos. Para un array no vacío, parte de su primer elemento:

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

Al utilizar `>` conservamos la primera posición si el máximo aparece varias veces. Para buscar el mínimo, cambiamos `>` por `<`.

## Búsqueda secuencial: ¿dónde está un valor?

Miramos las casillas de izquierda a derecha hasta encontrar lo que buscamos. La posición `-1` significa «no encontrado», porque nunca es un índice válido.

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

Si buscas `99`, obtendrás `-1`. No utilices ese resultado como índice sin comprobar antes que es mayor o igual que cero. Esta búsqueda funciona aunque los datos no estén ordenados y devuelve la primera coincidencia.

Para buscar texto, compara su contenido con `equals`, no con `==`. Con un texto buscado no nulo, `buscado.equals(nombres[i])` también funciona si alguna casilla contiene `null`.

## Ejemplo completo: media de números decimales

<p>Así se vería en memoria un array <code>a</code> con cinco números decimales:</p>

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

<p>Con un bucle podemos recorrerlo y calcular la media de los cinco números:</p>

```java
public class MediaArray {
    public static void main(String[] args) {
        double[] a = { 10, 23.5, 15, 7, 8.5 };
        double total = 0;
        for (int i = 0; i < a.length; i++) {
            total += a[i];
        }
        System.out.println("La media es: " + total / a.length);
    }
}
```

<p><strong>SALIDA POR CONSOLA</strong></p>

```text
La media es: 12.8
```
