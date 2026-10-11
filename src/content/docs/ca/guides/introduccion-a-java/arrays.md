---
title: Arrays
description: Creació, recorreguts, cerques, còpies, matrius, classe Arrays i exercicis resolts en Java.
sidebar:
  order: 6
---

## 1. Introducció

Un array permet guardar diverses dades del mateix tipus en una sola variable. Aprendrem a declarar-lo, inicialitzar-lo i recórrer-lo, i a treballar amb diverses dimensions.

### Una fila de caselles: les puntuacions d'un videojoc

Imagina que vols guardar els punts que has aconseguit en cinc partides: **10, 25, 15, 30 i 20**. Podries crear cinc variables (`punts1`, `punts2`, etc.), però resulta més còmode guardar totes eixes puntuacions juntes, en un **array**.

Pensa en ell com una fila de caselles: **cada casella guarda una dada** i té un número que permet localitzar-la. Eixe número s'anomena **índex** i, en Java, comença en **0**.

![Array puntuaciones amb cinc caselles: els índexs 0, 1, 2, 3 i 4 guarden els valors 10, 25, 15, 30 i 20. La casella d'índex 2 està ressaltada i conté 15.](../../../../../assets/introduccion_java/array-puntuaciones.svg)

En Java podem crear eixa fila així:

```java
int[] puntuaciones = { 10, 25, 15, 30, 20 };
```

`int[]` indica que guardem un array de nombres enters; `puntuaciones` és el nom de la variable i les claus contenen els seus cinc valors inicials.

Per a consultar una casella, escrivim el nom de l'array i el seu índex entre claudàtors:

```java
System.out.println(puntuaciones[0]); // Primera partida: 10
System.out.println(puntuaciones[2]); // Tercera partida: 15
```

També podem canviar el contingut d'una casella:

```java
puntuaciones[2] = 50;
System.out.println(puntuaciones[2]); // Ara mostra 50
```

**Només canvia la tercera casella**: l'array passa a guardar `10, 25, 50, 30, 20`. Continua tenint cinc elements, tots del mateix tipus. Recorda la diferència: **l'índex indica on està una dada; el valor és el que guarda eixa casella**.

### Què aprendràs

En acabar podràs crear arrays, triar com recórrer-los, buscar i resumir les seues dades, treballar amb taules i utilitzar les ferramentes de `java.util.Arrays`. També aprendràs a distingir una còpia d'un array compartit i a detectar els errors més habituals.

Necessites conéixer variables, condicions i bucles. Els exemples amb mètodes són una primera aproximació que podràs reprendre quan estudies com organitzar un programa en mètodes.

## 2. Arrays d'una dimensió

<p>Imagina que has de calcular la mitjana de 10 nombres que introduïx l'usuari. Sembla evident que ha d'haver-hi una solució millor que definir 10 variables diferents i repetir 10 vegades les instruccions de demanar la dada, llegir-la i guardar-la. I si foren 1.000 o 10.000 dades, ni t'ho conte.</p>

<p>Per a això hi ha els arrays: <strong>un array és una variable que pot contindre diverses dades del mateix tipus</strong>. Imagina una fila de caselles numerades; per a accedir a cada dada utilitzem el seu número (l'<strong>índex</strong>) entre claudàtors.</p>

<aside class="java-document-note">
<p><strong>COMPTE AMB AIXÒ</strong></p>
<p><strong>Els índexs comencen en 0</strong>, no en 1. Un array de 5 elements té els índexs 0, 1, 2, 3 i 4: l'últim índex és sempre <code>longitud - 1</code>.</p>
</aside>

### Declarar i crear un array

<p>Per a definir un array d'una dimensió utilitzem esta sintaxi (la recomanada en Java, que es llig «<code>a</code> és un array de <code>double</code>»):</p>

```java
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

### Declarar i inicialitzar en un sol pas

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

### Grandària fixa, índexs i valors inicials

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

## 3. Recórrer i omplir arrays

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

### Triar el bucle i modificar les caselles

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

### Recorregut invers

```java
int[] puntos = { 10, 25, 15, 30, 20 };
for (int i = puntos.length - 1; i >= 0; i--) {
    System.out.print(puntos[i] + " ");
}
```

L'eixida és `20 30 15 25 10`. **Mostrar al revés no canvia l'ordre emmagatzemat**. Si l'array està buit, l'índex inicial és `-1` i el bucle no executa cap volta.

### Omplir un array des del teclat

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

Si introduïxes `10`, `25` i `15`, al final veuràs `[10, 25, 15]`. Mostrem `i + 1` per a numerar les partides com les comptem les persones, però accedim a les caselles amb `i`. `Arrays.toString` prepara el contingut per a imprimir-lo; l'estudiarem en l'apartat 6.

## 4. Resoldre problemes amb arrays

### Sumar, calcular la mitjana i comptar

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

### Trobar el màxim i la seua posició

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

### Cerca seqüencial: on està un valor?

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

### Exemple complet: mitjana de nombres decimals

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

## 5. Arrays multidimensionals

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

### Arrays irregulars

<p>La curiositat és que les files no han de tindre necessàriament la mateixa llargària. Podem crear l'array indicant només la primera dimensió i definir la grandària de cada fila després:</p>

```java
int[][] triangulo = new int[4][];
triangulo[0] = new int[1];    // fila 0: 1 element
triangulo[1] = new int[2];    // fila 1: 2 elements
triangulo[2] = new int[3];    // fila 2: 3 elements
triangulo[3] = new int[4];    // fila 3: 4 elements
```

<p>També es poden inicialitzar directament amb claus dins d'altres claus: <code>int[][] m = { {1, 2}, {3, 4, 5} };</code>.</p>

### Cada fila té la seua longitud

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

## 6. La classe `java.util.Arrays`

Esta classe reunix operacions habituals. Afig `import java.util.Arrays;` al principi del fitxer, abans de la classe. Els fragments següents utilitzen eixa importació.

### Mostrar i omplir

```java
int[] puntos = { 10, 25, 15 };
System.out.println(Arrays.toString(puntos)); // [10, 25, 15]
Arrays.fill(puntos, 0);
System.out.println(Arrays.toString(puntos)); // [0, 0, 0]
int[][] tabla = { { 1, 2 }, { 3, 4 } };
System.out.println(Arrays.deepToString(tabla)); // [[1, 2], [3, 4]]
```

`System.out.println(puntos)` no mostra els seus elements: imprimix una representació de la referència, com `[I@...`. Utilitza `toString` per a una dimensió i `deepToString` per a veure el contingut d'arrays imbricats.

### Ordenar i buscar en un array ordenat

```java
int[] puntos = { 30, 10, 20 };
Arrays.sort(puntos);
System.out.println(Arrays.toString(puntos)); // [10, 20, 30]
System.out.println(Arrays.binarySearch(puntos, 20)); // 1
System.out.println(Arrays.binarySearch(puntos, 25)); // -3
```

`sort` canvia l'ordre del mateix array. Si les posicions representaven partides concretes, ja no podràs identificar cada partida pel seu índex original.

**`binarySearch` requerix dades ordenades**. Retorna un índex si troba el valor; si no, un nombre negatiu que codifica on s'inseriria. No sempre retorna `-1`: comprova `resultado >= 0`. Si hi ha duplicats, no garantix la primera coincidència. Per a mantindre l'ordre original, ordena una còpia.

### Copiar i comparar el contingut

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

## 7. Referències i arrays en mètodes

### Assignar no és copiar

La variable guarda una referència a l'array. Si l'assignes a una altra variable, les dos permeten accedir **al mateix conjunt de caselles**:

```java
int[] original = { 10, 25, 15 };
int[] compartido = original;
compartido[0] = 99;
System.out.println(original[0]);           // 99
System.out.println(original == compartido); // true
```

### Consultar, modificar i retornar arrays

En una declaració com `static int sumar(int[] datos)`, `datos` és el paràmetre que rep l'array i `int` és el tipus del resultat. `return` retorna eixe resultat. El mètode es crida escrivint el seu nom i l'argument, per exemple `sumar(puntos)`.

**Java passa els arguments per valor**. Amb un array, el que es copia és la referència: el mètode pot modificar els seus elements, però reassignar el paràmetre no substituïx la variable de qui l'ha cridat. Comprova-ho amb este programa complet, guardat en `ArraysEnMetodos.java`:

```java
import java.util.Arrays;

public class ArraysEnMetodos {
    static int sumar(int[] datos) {
        int total = 0;
        for (int dato : datos) {
            total += dato;
        }
        return total;
    }

    static void cambiarPrimero(int[] datos) {
        if (datos.length > 0) {
            datos[0] = 50;
        }
    }

    static void reasignar(int[] datos) {
        datos = new int[] { 999 };
    }

    static int[] crearDobles(int[] datos) {
        int[] resultado = new int[datos.length];
        for (int i = 0; i < datos.length; i++) {
            resultado[i] = datos[i] * 2;
        }
        return resultado;
    }

    public static void main(String[] args) {
        int[] puntos = { 10, 20, 30 };
        System.out.println(sumar(puntos));
        cambiarPrimero(puntos);
        reasignar(puntos);
        System.out.println(Arrays.toString(puntos));
        int[] dobles = crearDobles(puntos);
        System.out.println(Arrays.toString(dobles));
        System.out.println(Arrays.toString(puntos));
    }
}
```

```text
60
[50, 20, 30]
[100, 40, 60]
[50, 20, 30]
```

`cambiarPrimero` modifica l'array compartit; `reasignar` canvia només el seu paràmetre local; `crearDobles` retorna un array independent. Estos mètodes esperen un argument diferent de `null`. El tipus `String[] args` de `main` és un altre exemple: conté els arguments de text rebuts en executar el programa.

## 8. Declaració alternativa d'arrays

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

## 9. Practica pas a pas

Intenta resoldre cada activitat abans d'obrir la solució. Executa els teus programes i canvia les dades per a comprovar que funcionen en més d'un cas.

### 1. Prediu l'eixida

Sense executar este fragment, escriu les dos línies que mostrarà i explica per què:

```java
int[] a = { 2, 4, 6 };
int[] b = a;
b[1] = 9;
for (int dato : a) {
    dato = 0;
}
System.out.println(a[1]);
System.out.println(a.length);
```

<details>
<summary>Veure solució</summary>

```text
9
3
```

`a` i `b` apunten al mateix array. Canviar `b[1]` canvia la segona casella d’`a`. El `for-each` només modifica una variable local, i la grandària continua sent tres.

</details>

### 2. Invertix el contingut

Transforma `{ 10, 25, 15, 30, 20 }` en `{ 20, 30, 15, 25, 10 }` **dins del mateix array**, sense crear-ne un altre. Pista: intercanvia el primer amb l'últim, el segon amb el penúltim i detín-te en la mitat. Guarda la teua solució en `InvertirArray.java`.

<details>
<summary>Veure solució</summary>

```java
import java.util.Arrays;

public class InvertirArray {
    public static void main(String[] args) {
        int[] datos = { 10, 25, 15, 30, 20 };
        for (int i = 0; i < datos.length / 2; i++) {
            int opuesto = datos.length - 1 - i;
            int temporal = datos[i];
            datos[i] = datos[opuesto];
            datos[opuesto] = temporal;
        }
        System.out.println(Arrays.toString(datos));
    }
}
```

La variable `temporal` evita perdre una dada durant l’intercanvi. Només recorrem la mitat per a no desfer els intercanvis. Funciona també amb arrays buits, d’un element i de longitud parella.

</details>

### 3. Selecciona les puntuacions destacades

Crea un nou array amb les puntuacions majors o iguals que `20`, mantenint l'ordre. Per a `{ 10, 25, 15, 30, 20 }` ha de contindre `{ 25, 30, 20 }` i tindre longitud `3`. Pista: primer compta quantes necessites guardar i després ompli el nou array. Utilitza `import java.util.Arrays;` per a mostrar-lo.

<details>
<summary>Veure solució</summary>

```java
int[] puntos = { 10, 25, 15, 30, 20 };
int cantidad = 0;
for (int punto : puntos) {
    if (punto >= 20) {
        cantidad++;
    }
}
int[] destacados = new int[cantidad];
int siguiente = 0;
for (int punto : puntos) {
    if (punto >= 20) {
        destacados[siguiente] = punto;
        siguiente++;
    }
}
System.out.println(Arrays.toString(destacados)); // [25, 30, 20]
```

`cantidad` és la longitud necessària; `siguiente` és l’índex d’escriptura. Si cap puntuació complix la condició, el resultat és un array buit.

</details>

### 4. Suma cada fila d'una taula irregular

Cada fila conté les vendes d'una botiga en els dies que va obrir. Per a `{ { 2, 5, 3 }, { 4, 1 }, { 6, 2, 1, 3 } }`, mostra els totals `10`, `5` i `12`. No suposes que totes les files tenen la mateixa longitud.

<details>
<summary>Veure solució</summary>

```java
int[][] ventas = { { 2, 5, 3 }, { 4, 1 }, { 6, 2, 1, 3 } };
for (int f = 0; f < ventas.length; f++) {
    int total = 0;
    for (int c = 0; c < ventas[f].length; c++) {
        total += ventas[f][c];
    }
    System.out.println(total);
}
```

L’acumulador s’inicialitza dins del bucle exterior per a començar de zero en cada fila. El límit interior és `ventas[f].length`.

</details>

### Comprova també els casos menuts

Prova els teus algoritmes amb un array buit, un d'un sol element, valors repetits i nombres negatius. Per a una cerca, comprova un valor que estiga al principi, al final i que no existisca. Estos casos revelen errors que els exemples grans poden ocultar.

## 10. Errors típics i com depurar-los

| Símptoma o error | Causa habitual | Com corregir-lo |
| --- | --- | --- |
| `ArrayIndexOutOfBoundsException` | Índex negatiu o major o igual que `length` | Revisa `0 <= i && i < datos.length`; en un `for`, utilitza `<`, no `<=`. |
| `NullPointerException` | Array o fila sense crear; element de text `null` | Localitza quina referència és `null` abans d'utilitzar-la. |
| Error de compilació amb `length()` | Confondre array i text | En arrays, `length` no porta parèntesis. |
| Eixida com `[I@...` | Imprimir directament un array | Utilitza `Arrays.toString` o `Arrays.deepToString`. |
| Una «còpia» canvia l'original | Has utilitzat `copia = original` | Crea una còpia independent; en matrius, copia també les files. |
| Un `for-each` no canvia els enters | Modifiques la variable del bucle | Escriu en `datos[i]` amb un bucle amb índex. |
| El màxim ix `0` amb dades negatives | Inicialitzar-lo a zero | Partix del primer element i comprova abans que l'array no estiga buit. |
| Cerca binària incorrecta | Array sense ordenar o mal ús del resultat | Ordena primer i comprova si el resultat és negatiu. |

Per a depurar un bucle, anota en cada volta **l'índex, el valor de la casella i l'acumulador o comptador**. Si es produïx una excepció, llig la línia indicada i compara l'índex utilitzat amb la longitud real. En una matriu, comprova la fila i després la columna d'eixa fila.

## Full de repàs

| Operació | Recorda |
| --- | --- |
| Crear | `int[] a = new int[5];` o `int[] a = { 1, 2, 3 };` |
| Consultar grandària | `a.length`; l'últim índex és `a.length - 1` si no està buit. |
| Recórrer | `for (int i = 0; i < a.length; i++)` o `for (int dato : a)` |
| Matriu | Files: `m.length`; columnes de la fila `f`: `m[f].length`. |
| Mostrar | `Arrays.toString(a)`; per a matrius, `Arrays.deepToString(m)`. |
| Copiar | `Arrays.copyOf(a, a.length)`; assignar una altra variable no copia. |
| Comparar | `Arrays.equals(a, b)` compara elements; `==` compara referències. |
| Ordenar | `Arrays.sort(a)` modifica l'array. |
| Buscar | Seqüencial sense ordenar; `Arrays.binarySearch` exigix ordenació prèvia. |
| Omplir | `Arrays.fill(a, valor)` canvia totes les caselles. |
| Mètodes | Es copia la referència; modificar elements s'observa fora. |

## Per a ampliar

- [Arrays en la documentació de Java](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/arrays.html).
- [Referència de `java.util.Arrays`](https://docs.oracle.com/en/java/javase/25/docs/api/java.base/java/util/Arrays.html).
- [Unitat d'arrays de Sergarb1](https://sergarb1.github.io/ApuntesProgramacion/06-arrays/), referència per a ampliar els temes de pràctica i repàs.
