---
title: Declarar, crear i recórrer arrays
description: Declarar, crear i recórrer arrays en Java.
sidebar:
  order: 2
---

<p>Imagina que has de calcular la mitjana de 10 nombres que introduïx l'usuari. Sembla evident que ha d'haver-hi una solució millor que definir 10 variables diferents i repetir 10 vegades les instruccions de demanar la dada, llegir-la i guardar-la. I si foren 1.000 o 10.000 dades, ni t'ho conte.</p>

<p>Per a això hi ha els arrays: <strong>un array és una variable que pot contindre diverses dades del mateix tipus</strong>. Imagina una fila de caselles numerades; per a accedir a cada dada utilitzem el seu número (l'<strong>índex</strong>) entre claudàtors.</p>

<aside class="java-document-note">
<p><strong>COMPTE AMB AIXÒ</strong></p>
<p><strong>Els índexs comencen en 0</strong>, no en 1. Un array de 5 elements té els índexs 0, 1, 2, 3 i 4: l'últim índex és sempre <code>longitud - 1</code>.</p>
</aside>

## Declarar i crear un array

<p>Per a definir un array d'una dimensió utilitzem esta sintaxi (la recomanada en Java, que es llig «<code>a</code> és un array de <code>double</code>»):</p>

```text
tipo[] nombreVariable;
```

<p>Ací, <code>tipo</code> és el <strong>tipus base</strong> de l'array, és a dir, el tipus de cadascun dels seus elements. Per exemple, esta instrucció declara un array anomenat <code>diasMes</code> que guardarà elements de tipus <code>int</code>:</p>

```java
int[] diasMes;
```

<aside class="java-document-note">
<p><strong>IDEA CLAU</strong></p>
<p><strong>Declarar no és crear.</strong> La línia anterior només diu «<code>diasMes</code> serà un array d'enters», però l'array encara <strong>no existix</strong> en memòria. La declaració crea una variable de referència; per a disposar de caselles necessitem crear l’array amb una longitud concreta.</p>
</aside>

<p>Per això crear un array requerix <strong>dos passos</strong>:</p>

<ul>
<li><strong>Declarar</strong> la variable del tipus desitjat.</li>
<li><strong>Reservar la memòria</strong> amb la paraula reservada <code>new</code>, indicant quantes posicions tindrà. (Veurem <code>new</code> amb més detall més avant; de moment n'hi ha prou amb recordar que és l'orde que «construïx» l'array.)</li>
</ul>

```java
int[] diasMes;              // 1) declaració
diasMes = new int[12];      // 2) reserva de memòria per a 12 enters

int[] otros = new int[12];  // o els dos passos alhora
```

<p>Una vegada creat, accedim a cada element escrivint el seu índex entre claudàtors:</p>

```java
diasMes[1] = 28;                  // segona posició (índex 1)
System.out.println(diasMes[1]);   // llig el valor guardat
```

<p>En el programa següent guardem els dies de cada mes de l'any en un array de 12 posicions:</p>

```java
class DiasPorMes {
    public static void main(String[] args) {
        int[] diasMes = new int[12];
        diasMes[0] = 31;    // gener
        diasMes[1] = 28;    // febrer
        diasMes[2] = 31;    // març
        diasMes[3] = 30;    // abril
        diasMes[4] = 31;    // maig
        diasMes[5] = 30;    // juny
        diasMes[6] = 31;    // juliol
        diasMes[7] = 31;    // agost
        diasMes[8] = 30;    // setembre
        diasMes[9] = 31;    // octubre
        diasMes[10] = 30;   // novembre
        diasMes[11] = 31;   // desembre
        System.out.println("Maig té " + diasMes[4] + " dies.");
    }
}
```

<p><strong>EIXIDA PER CONSOLA</strong></p>

```text
Maig té 31 dies.
```

## Declarar i inicialitzar en un sol pas

<p>Hi ha una forma molt més curta: escriure els valors entre claus. Java calcula a soles la grandària de l'array a partir de quants valors poses. El resultat és exactament el mateix que en l'exemple anterior:</p>

```java
class DiasPorMes {
    public static void main(String[] args) {
        int[] diasMes = { 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 };
        System.out.println("Maig té " + diasMes[4] + " dies.");
    }
}
```

<p><strong>EIXIDA PER CONSOLA</strong></p>

```text
Maig té 31 dies.
```

## Grandària fixa, índexs i valors inicials

**La grandària d'un array queda fixada quan es crea.** Pots canviar els seus valors, però no afegir una sisena casella a un array de cinc. Per a guardar més dades necessitaràs crear un altre array; més avant coneixeràs col·leccions com `ArrayList`.

`length` compta les caselles, encara que no hi hages escrit. Un array també pot tindre longitud zero: existix, però no té una primera ni una última casella.

| Expressió | Significat en un array de cinc elements |
| --- | --- |
| `puntuaciones.length` | Nombre d'elements: `5` |
| `puntuaciones[0]` | Primer element |
| `puntuaciones[4]` | Últim element |
| `puntuaciones[5]` | Accés fora de rang |

En crear un array amb `new`, Java inicialitza els seus elements:

| Tipus dels elements | Valor inicial |
| --- | --- |
| Enters (`byte`, `short`, `int`, `long`) | `0` |
| Decimals (`float`, `double`) | `0.0` |
| `boolean` | `false` |
| `char` | `'\u0000'` (caràcter nul, no és el dígit `'0'`) |
| Referències (`String`, altres objectes, arrays) | `null` |

```java
int[] contadores = new int[3];
System.out.println(contadores[0]); // 0
String[] nombres = new String[2];
System.out.println(nombres[0]);    // null
int[] vacio = new int[0];
System.out.println(vacio.length);  // 0
```

Una variable local com `int[] datos;` **no té un valor utilitzable fins que la inicialitzes**. `int[] datos = null;` sí que està inicialitzada, però no apunta a cap array. Consultar `datos.length` en eixe cas provoca `NullPointerException`.

Si assignes un nou array després de declarar la variable, necessites escriure `new int[] { ... }`:

```java
int[] datos;
datos = new int[] { 4, 7, 2 };
```

## Recórrer i omplir arrays

<p>Quasi sempre que utilitzem un array acabem recorrent-lo. Tens dos opcions: el <code>for</code> clàssic (quan necessites l'índex) i el <code>for-each</code> (quan només necessites els valors):</p>

```java
int[] notas = { 6, 8, 5, 9 };

for (int i = 0; i < notas.length; i++) {   // for clàssic: amb índex
    System.out.println("Nota " + i + ": " + notas[i]);
}

for (int nota : notas) {                   // for-each: només valors
    System.out.println(nota);
}
```

<aside class="java-document-note">
<p><strong>COMPTE AMB AIXÒ</strong></p>
<p><strong>Eixir-te de l'array.</strong> Si intentes accedir a una posició que no existix, el programa es deté amb un error en temps d'execució:</p>
</aside>

```java
int[] notas = new int[3];       // índexs vàlids: 0, 1 i 2
notas[3] = 10;                  // ERROR: ArrayIndexOutOfBoundsException
                                // (Index 3 out of bounds for length 3)
```

<aside class="java-document-note">
<p><strong>COMPTE AMB AIXÒ</strong></p>
<p><strong>Tres formes de preguntar «quants n'hi ha?»</strong> que es confonen sovint: en un <strong>array</strong> s'utilitza <code>nombre.length</code> (sense parèntesis); en un <strong>String</strong> s'utilitza <code>nombre.length()</code> (amb parèntesis); i en les col·leccions que veuràs més avant, <code>nombre.size()</code>.</p>
</aside>

## Triar el bucle i modificar les caselles

| Necessites… | Utilitza… |
| --- | --- |
| Consultar tots els valors | `for-each` o `for` |
| Conéixer la posició o canviar una casella | `for` amb índex |
| Recórrer en ordre invers | `for` des de `length - 1` fins a `0` |

En un `for-each` sobre un array d'enters, la variable del bucle rep **una còpia del valor** de cada casella. Canviar eixa variable no canvia l'array:

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

## Recorregut invers

```java
int[] puntos = { 10, 25, 15, 30, 20 };
for (int i = puntos.length - 1; i >= 0; i--) {
    System.out.print(puntos[i] + " ");
}
```

L'eixida és `20 30 15 25 10`. **Mostrar al revés no canvia l'ordre emmagatzemat**. Si l'array està buit, l'índex inicial és `-1` i el bucle no executa cap volta.

## Omplir un array des del teclat

Guarda este programa en `RegistroPuntos.java`. Demana una puntuació per casella i després mostra les dades. Suposem que l'usuari escriu enters vàlids; la validació d'entrades s'estudia en l'apartat d'entrada i eixida.

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

Si introduïxes `10`, `25` i `15`, al final veuràs `[10, 25, 15]`. Mostrem `i + 1` per a numerar les partides com les comptem les persones, però accedim a les caselles amb `i`. `Arrays.toString` prepara el contingut per a imprimir-lo; l’estudiarem en [la classe `java.util.Arrays`](/ApuntesProgramacion/ca/guides/introduccion-a-java/arrays/clase-arrays/).

## Declaració alternativa

<p>Fins ara hem col·locat els claudàtors al costat del tipus. Però Java admet una segona forma, heretada de C i C++, en què els claudàtors van darrere del nom de la variable. Les dos són vàlides i fan el mateix:</p>

<div class="java-document-table">
<table>
<tr>
<th scope="col"><p><strong>Estil recomanat en Java</strong></p></th>
<th scope="col"><p><strong>Estil alternatiu (de C/C++)</strong></p></th>
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
<p><strong>COMPTE AMB AIXÒ</strong></p>
<p>Les dos formes es comporten igual <strong>excepte si declares diverses variables alhora</strong>:</p>
</aside>

```java
int[] a, b;      // a i b són ELS DOS arrays d'int
int c[], d;      // c és un array, però d és un int normal  compte!
```

<p>Per això es recomana la primera forma, amb els claudàtors al costat del tipus: deixa clar que <strong>tot el que s'ha declarat</strong> és un array.</p>
