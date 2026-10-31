---
title: Declarar, crear y recorrer arrays
description: Declarar, crear y recorrer arrays en Java.
sidebar:
  order: 2
---

<p>Imagina que tienes que calcular el promedio de 10 números que introduce el usuario. Parece evidente que debe haber una solución mejor que definir 10 variables distintas y repetir 10 veces las instrucciones de pedir el dato, leerlo y guardarlo. Y si fueran 1.000 o 10.000 datos, ni te cuento.</p>

<p>Para eso existen los arrays: <strong>un array es una variable que puede contener varios datos del mismo tipo</strong>. Imagina una fila de casilleros numerados; para acceder a cada dato usamos su número (el <strong>índice</strong>) entre corchetes.</p>

<aside class="java-document-note">
<p><strong>OJO CON ESTO</strong></p>
<p><strong>Los índices empiezan en 0</strong>, no en 1. Un array de 5 elementos tiene los índices 0, 1, 2, 3 y 4: el último índice es siempre <code>longitud - 1</code>.</p>
</aside>

## Declarar y crear un array

<p>Para definir un array de una dimensión usamos esta sintaxis (la recomendada en Java, que se lee «<code>a</code> es un array de <code>double</code>»):</p>

```text
tipo[] nombreVariable;
```

<p>Aquí, <code>tipo</code> es el <strong>tipo base</strong> del array, es decir, el tipo de cada uno de sus elementos. Por ejemplo, esta instrucción declara un array llamado <code>diasMes</code> que guardará elementos de tipo <code>int</code>:</p>

```java
int[] diasMes;
```

<aside class="java-document-note">
<p><strong>IDEA CLAVE</strong></p>
<p><strong>Declarar no es crear.</strong> La línea anterior solo dice «<code>diasMes</code> será un array de enteros», pero el array todavía <strong>no existe</strong> en memoria. La declaración crea una variable de referencia; para disponer de casillas necesitamos crear el array con una longitud concreta.</p>
</aside>

<p>Por eso crear un array requiere <strong>dos pasos</strong>:</p>

<ul>
<li><strong>Declarar</strong> la variable del tipo deseado.</li>
<li><strong>Reservar la memoria</strong> con la palabra reservada <code>new</code>, indicando cuántas posiciones tendrá. (Veremos <code>new</code> con más detalle más adelante; de momento basta con recordar que es la orden que «construye» el array.)</li>
</ul>

```java
int[] diasMes;              // 1) declaración
diasMes = new int[12];      // 2) reserva de memoria para 12 enteros

int[] otros = new int[12];  // o ambos pasos a la vez
```

<p>Una vez creado, accedemos a cada elemento escribiendo su índice entre corchetes:</p>

```java
diasMes[1] = 28;                  // segunda posición (índice 1)
System.out.println(diasMes[1]);   // lee el valor guardado
```

<p>En el siguiente programa guardamos los días de cada mes del año en un array de 12 posiciones:</p>

```java
class DiasPorMes {
    public static void main(String[] args) {
        int[] diasMes = new int[12];
        diasMes[0] = 31;    // enero
        diasMes[1] = 28;    // febrero
        diasMes[2] = 31;    // marzo
        diasMes[3] = 30;    // abril
        diasMes[4] = 31;    // mayo
        diasMes[5] = 30;    // junio
        diasMes[6] = 31;    // julio
        diasMes[7] = 31;    // agosto
        diasMes[8] = 30;    // septiembre
        diasMes[9] = 31;    // octubre
        diasMes[10] = 30;   // noviembre
        diasMes[11] = 31;   // diciembre
        System.out.println("Mayo tiene " + diasMes[4] + " días.");
    }
}
```

<p><strong>SALIDA POR CONSOLA</strong></p>

```text
Mayo tiene 31 días.
```

## Declarar e inicializar en un solo paso

<p>Existe una forma mucho más corta: escribir los valores entre llaves. Java calcula solo el tamaño del array a partir de cuántos valores pongas. El resultado es exactamente el mismo que en el ejemplo anterior:</p>

```java
class DiasPorMes {
    public static void main(String[] args) {
        int[] diasMes = { 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 };
        System.out.println("Mayo tiene " + diasMes[4] + " días.");
    }
}
```

<p><strong>SALIDA POR CONSOLA</strong></p>

```text
Mayo tiene 31 días.
```

## Tamaño fijo, índices y valores iniciales

**El tamaño de un array queda fijado cuando se crea.** Puedes cambiar sus valores, pero no añadirle una sexta casilla a un array de cinco. Para guardar más datos necesitarás crear otro array; más adelante conocerás colecciones como `ArrayList`.

`length` cuenta las casillas, aunque todavía no hayas escrito en ellas. Un array también puede tener longitud cero: existe, pero no tiene una primera ni una última casilla.

| Expresión | Significado en un array de cinco elementos |
| --- | --- |
| `puntuaciones.length` | Número de elementos: `5` |
| `puntuaciones[0]` | Primer elemento |
| `puntuaciones[4]` | Último elemento |
| `puntuaciones[5]` | Acceso fuera de rango |

Al crear un array con `new`, Java inicializa sus elementos:

| Tipo de los elementos | Valor inicial |
| --- | --- |
| Enteros (`byte`, `short`, `int`, `long`) | `0` |
| Decimales (`float`, `double`) | `0.0` |
| `boolean` | `false` |
| `char` | `'\u0000'` (carácter nulo, no es el dígito `'0'`) |
| Referencias (`String`, otros objetos, arrays) | `null` |

```java
int[] contadores = new int[3];
System.out.println(contadores[0]); // 0
String[] nombres = new String[2];
System.out.println(nombres[0]);    // null
int[] vacio = new int[0];
System.out.println(vacio.length);  // 0
```

Una variable local como `int[] datos;` **no tiene un valor utilizable hasta que la inicialices**. `int[] datos = null;` sí está inicializada, pero no apunta a ningún array. Consultar `datos.length` en ese caso provoca `NullPointerException`.

Si asignas un nuevo array después de declarar la variable, necesitas escribir `new int[] { ... }`:

```java
int[] datos;
datos = new int[] { 4, 7, 2 };
```

## Recorrer y rellenar arrays

<p>Casi siempre que usamos un array lo acabamos recorriendo. Tienes dos opciones: el <code>for</code> clásico (cuando necesitas el índice) y el <code>for-each</code> (cuando solo necesitas los valores):</p>

```java
int[] notas = { 6, 8, 5, 9 };

for (int i = 0; i < notas.length; i++) {   // for clásico: con índice
    System.out.println("Nota " + i + ": " + notas[i]);
}

for (int nota : notas) {                   // for-each: solo valores
    System.out.println(nota);
}
```

<aside class="java-document-note">
<p><strong>OJO CON ESTO</strong></p>
<p><strong>Salirte del array.</strong> Si intentas acceder a una posición que no existe, el programa se detiene con un error en tiempo de ejecución:</p>
</aside>

```java
int[] notas = new int[3];       // índices válidos: 0, 1 y 2
notas[3] = 10;                  // ERROR: ArrayIndexOutOfBoundsException
                                // (Index 3 out of bounds for length 3)
```

<aside class="java-document-note">
<p><strong>OJO CON ESTO</strong></p>
<p><strong>Tres formas de preguntar «¿cuántos hay?»</strong> que se confunden a menudo: en un <strong>array</strong> se usa <code>nombre.length</code> (sin paréntesis); en un <strong>String</strong> se usa <code>nombre.length()</code> (con paréntesis); y en las colecciones que verás más adelante, <code>nombre.size()</code>.</p>
</aside>

## Elegir el bucle y modificar las casillas

| Necesitas… | Utiliza… |
| --- | --- |
| Consultar todos los valores | `for-each` o `for` |
| Conocer la posición o cambiar una casilla | `for` con índice |
| Recorrer en orden inverso | `for` desde `length - 1` hasta `0` |

En un `for-each` sobre un array de enteros, la variable del bucle recibe **una copia del valor** de cada casilla. Cambiar esa variable no cambia el array:

```java
int[] puntos = { 10, 20, 30 };
for (int punto : puntos) {
    punto += 5;
}
System.out.println(puntos[0]); // 10

for (int i = 0; i < puntos.length; i++) {
    puntos[i] += 5;
}
System.out.println(puntos[0]); // 15
```

## Recorrido inverso

```java
int[] puntos = { 10, 25, 15, 30, 20 };
for (int i = puntos.length - 1; i >= 0; i--) {
    System.out.print(puntos[i] + " ");
}
```

La salida es `20 30 15 25 10`. **Mostrar al revés no cambia el orden almacenado**. Si el array está vacío, el índice inicial es `-1` y el bucle no ejecuta ninguna vuelta.

## Rellenar un array desde el teclado

Guarda este programa en `RegistroPuntos.java`. Pide una puntuación por casilla y después muestra los datos. Suponemos que el usuario escribe enteros válidos; la validación de entradas se estudia en el apartado de entrada y salida.

```java
import java.util.Arrays;
import java.util.Scanner;

public class RegistroPuntos {
    public static void main(String[] args) {
        Scanner teclado = new Scanner(System.in);
        int[] puntos = new int[3];
        for (int i = 0; i < puntos.length; i++) {
            System.out.print("Partida " + (i + 1) + ": ");
            puntos[i] = teclado.nextInt();
        }
        System.out.println(Arrays.toString(puntos));
    }
}
```

Si introduces `10`, `25` y `15`, al final verás `[10, 25, 15]`. Mostramos `i + 1` para numerar las partidas como las contamos las personas, pero accedemos a las casillas con `i`. `Arrays.toString` prepara el contenido para imprimirlo; lo estudiaremos en [la clase `java.util.Arrays`](/ApuntesProgramacion/guides/introduccion-a-java/arrays/clase-arrays/).

## Declaración alternativa

<p>Hasta ahora hemos colocado los corchetes junto al tipo. Pero Java admite una segunda forma, heredada de C y C++, en la que los corchetes van detrás del nombre de la variable. Las dos son válidas y hacen lo mismo:</p>

<div class="java-document-table">
<table>
<tr>
<th scope="col"><p><strong>Estilo recomendado en Java</strong></p></th>
<th scope="col"><p><strong>Estilo alternativo (de C/C++)</strong></p></th>
</tr>
<tr>
<td><p><code>int[] unaDimension = new int[5];</code></p></td>
<td><p><code>int unaDimension[] = new int[5];</code></p></td>
</tr>
<tr>
<td><p><code>int[][] multi = new int[6][6];</code></p></td>
<td><p><code>int multi[][] = new int[6][6];</code></p></td>
</tr>
</table>
</div>

<aside class="java-document-note">
<p><strong>OJO CON ESTO</strong></p>
<p>Ambas formas se comportan igual <strong>salvo si declaras varias variables a la vez</strong>:</p>
</aside>

```java
int[] a, b;      // a y b son AMBOS arrays de int
int c[], d;      // c es un array, pero d es un int normal  ¡ojo!
```

<p>Por eso se recomienda la primera forma, con los corchetes junto al tipo: deja claro que <strong>todo lo declarado</strong> es un array.</p>
