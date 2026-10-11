---
title: Arrays
description: Creación, recorridos, búsquedas, copias, matrices, clase Arrays y ejercicios resueltos en Java.
sidebar:
  order: 6
---

## 1. Introducción

Un array permite guardar varios datos del mismo tipo en una sola variable. Aprenderemos a declararlo, inicializarlo y recorrerlo, y a trabajar con varias dimensiones.

### Una fila de casillas: las puntuaciones de un videojuego

Imagina que quieres guardar los puntos que has conseguido en cinco partidas: **10, 25, 15, 30 y 20**. Podrías crear cinco variables (`puntos1`, `puntos2`, etc.), pero resulta más cómodo guardar todas esas puntuaciones juntas, en un **array**.

Piensa en él como una fila de casillas: **cada casilla guarda un dato** y tiene un número que permite localizarla. Ese número se llama **índice** y, en Java, empieza en **0**.

![Array puntuaciones con cinco casillas: los índices 0, 1, 2, 3 y 4 guardan los valores 10, 25, 15, 30 y 20. La casilla de índice 2 está resaltada y contiene 15.](../../../../assets/introduccion_java/array-puntuaciones.svg)

En Java podemos crear esa fila así:

```java
int[] puntuaciones = { 10, 25, 15, 30, 20 };
```

`int[]` indica que guardamos un array de números enteros; `puntuaciones` es el nombre de la variable y las llaves contienen sus cinco valores iniciales.

Para consultar una casilla, escribimos el nombre del array y su índice entre corchetes:

```java
System.out.println(puntuaciones[0]); // Primera partida: 10
System.out.println(puntuaciones[2]); // Tercera partida: 15
```

También podemos cambiar el contenido de una casilla:

```java
puntuaciones[2] = 50;
System.out.println(puntuaciones[2]); // Ahora muestra 50
```

**Solo cambia la tercera casilla**: el array pasa a guardar `10, 25, 50, 30, 20`. Sigue teniendo cinco elementos, todos del mismo tipo. Recuerda la diferencia: **el índice indica dónde está un dato; el valor es lo que guarda esa casilla**.

### Qué aprenderás

Al terminar podrás crear arrays, elegir cómo recorrerlos, buscar y resumir sus datos, trabajar con tablas y utilizar las herramientas de `java.util.Arrays`. También aprenderás a distinguir una copia de un array compartido y a detectar los errores más habituales.

Necesitas conocer variables, condiciones y bucles. Los ejemplos con métodos son una primera aproximación que podrás retomar cuando estudies cómo organizar un programa en métodos.

## 2. Arrays de una dimensión

<p>Imagina que tienes que calcular el promedio de 10 números que introduce el usuario. Parece evidente que debe haber una solución mejor que definir 10 variables distintas y repetir 10 veces las instrucciones de pedir el dato, leerlo y guardarlo. Y si fueran 1.000 o 10.000 datos, ni te cuento.</p>

<p>Para eso existen los arrays: <strong>un array es una variable que puede contener varios datos del mismo tipo</strong>. Imagina una fila de casilleros numerados; para acceder a cada dato usamos su número (el <strong>índice</strong>) entre corchetes.</p>

<aside class="java-document-note">
<p><strong>OJO CON ESTO</strong></p>
<p><strong>Los índices empiezan en 0</strong>, no en 1. Un array de 5 elementos tiene los índices 0, 1, 2, 3 y 4: el último índice es siempre <code>longitud - 1</code>.</p>
</aside>

### Declarar y crear un array

<p>Para definir un array de una dimensión usamos esta sintaxis (la recomendada en Java, que se lee «<code>a</code> es un array de <code>double</code>»):</p>

```java
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

### Declarar e inicializar en un solo paso

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

### Tamaño fijo, índices y valores iniciales

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

## 3. Recorrer y rellenar arrays

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

### Elegir el bucle y modificar las casillas

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

### Recorrido inverso

```java
int[] puntos = { 10, 25, 15, 30, 20 };
for (int i = puntos.length - 1; i >= 0; i--) {
    System.out.print(puntos[i] + " ");
}
```

La salida es `20 30 15 25 10`. **Mostrar al revés no cambia el orden almacenado**. Si el array está vacío, el índice inicial es `-1` y el bucle no ejecuta ninguna vuelta.

### Rellenar un array desde el teclado

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

Si introduces `10`, `25` y `15`, al final verás `[10, 25, 15]`. Mostramos `i + 1` para numerar las partidas como las contamos las personas, pero accedemos a las casillas con `i`. `Arrays.toString` prepara el contenido para imprimirlo; lo estudiaremos en el apartado 6.

## 4. Resolver problemas con arrays

### Sumar, calcular la media y contar

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

### Encontrar el máximo y su posición

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

### Búsqueda secuencial: ¿dónde está un valor?

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

### Ejemplo completo: media de números decimales

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

## 5. Arrays multidimensionales

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

### Arrays irregulares

<p>Lo curioso es que las filas no tienen por qué medir todas lo mismo. Podemos crear el array indicando solo la primera dimensión y definir el tamaño de cada fila después:</p>

```java
int[][] triangulo = new int[4][];
triangulo[0] = new int[1];    // fila 0: 1 elemento
triangulo[1] = new int[2];    // fila 1: 2 elementos
triangulo[2] = new int[3];    // fila 2: 3 elementos
triangulo[3] = new int[4];    // fila 3: 4 elementos
```

<p>También se pueden inicializar directamente con llaves anidadas: <code>int[][] m = { {1, 2}, {3, 4, 5} };</code>.</p>

### Cada fila tiene su propia longitud

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

## 6. La clase `java.util.Arrays`

Esta clase reúne operaciones habituales. Añade `import java.util.Arrays;` al principio del archivo, antes de la clase. Los siguientes fragmentos usan esa importación.

### Mostrar y rellenar

```java
int[] puntos = { 10, 25, 15 };
System.out.println(Arrays.toString(puntos)); // [10, 25, 15]
Arrays.fill(puntos, 0);
System.out.println(Arrays.toString(puntos)); // [0, 0, 0]
int[][] tabla = { { 1, 2 }, { 3, 4 } };
System.out.println(Arrays.deepToString(tabla)); // [[1, 2], [3, 4]]
```

`System.out.println(puntos)` no muestra sus elementos: imprime una representación de la referencia, como `[I@...`. Usa `toString` para una dimensión y `deepToString` para ver el contenido de arrays anidados.

### Ordenar y buscar en un array ordenado

```java
int[] puntos = { 30, 10, 20 };
Arrays.sort(puntos);
System.out.println(Arrays.toString(puntos)); // [10, 20, 30]
System.out.println(Arrays.binarySearch(puntos, 20)); // 1
System.out.println(Arrays.binarySearch(puntos, 25)); // -3
```

`sort` cambia el orden del propio array. Si las posiciones representaban partidas concretas, ya no podrás identificar cada partida por su índice original.

**`binarySearch` requiere datos ordenados**. Devuelve un índice si encuentra el valor; si no, un número negativo que codifica dónde se insertaría. No siempre devuelve `-1`: comprueba `resultado >= 0`. Si hay duplicados, no garantiza la primera coincidencia. Para mantener el orden original, ordena una copia.

### Copiar y comparar el contenido

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

## 7. Referencias y arrays en métodos

### Asignar no es copiar

La variable guarda una referencia al array. Si la asignas a otra variable, ambas permiten acceder **al mismo conjunto de casillas**:

```java
int[] original = { 10, 25, 15 };
int[] compartido = original;
compartido[0] = 99;
System.out.println(original[0]);           // 99
System.out.println(original == compartido); // true
```

### Consultar, modificar y devolver arrays

En una declaración como `static int sumar(int[] datos)`, `datos` es el parámetro que recibe el array e `int` es el tipo del resultado. `return` devuelve ese resultado. El método se llama escribiendo su nombre y el argumento, por ejemplo `sumar(puntos)`.

**Java pasa los argumentos por valor**. Con un array, lo que se copia es la referencia: el método puede modificar sus elementos, pero reasignar el parámetro no sustituye la variable de quien lo llamó. Compruébalo con este programa completo, guardado en `ArraysEnMetodos.java`:

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

`cambiarPrimero` modifica el array compartido; `reasignar` cambia solo su parámetro local; `crearDobles` devuelve un array independiente. Estos métodos esperan un argumento distinto de `null`. El tipo `String[] args` de `main` es otro ejemplo: contiene los argumentos de texto recibidos al ejecutar el programa.

## 8. Declaración alternativa de arrays

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

## 9. Practica paso a paso

Intenta resolver cada actividad antes de abrir la solución. Ejecuta tus programas y cambia los datos para comprobar que funcionan en más de un caso.

### 1. Predice la salida

Sin ejecutar este fragmento, escribe las dos líneas que mostrará y explica por qué:

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
<summary>Ver solución</summary>

```text
9
3
```

`a` y `b` apuntan al mismo array. Cambiar `b[1]` cambia la segunda casilla de `a`. El `for-each` solo modifica una variable local, y el tamaño sigue siendo tres.

</details>

### 2. Invierte el contenido

Transforma `{ 10, 25, 15, 30, 20 }` en `{ 20, 30, 15, 25, 10 }` **dentro del mismo array**, sin crear otro. Pista: intercambia el primero con el último, el segundo con el penúltimo y detente en la mitad. Guarda tu solución en `InvertirArray.java`.

<details>
<summary>Ver solución</summary>

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

La variable `temporal` evita perder un dato durante el intercambio. Solo recorremos la mitad para no deshacer los intercambios. Funciona también con arrays vacíos, de un elemento y de longitud par.

</details>

### 3. Selecciona las puntuaciones destacadas

Crea un nuevo array con las puntuaciones mayores o iguales que `20`, manteniendo el orden. Para `{ 10, 25, 15, 30, 20 }` debe contener `{ 25, 30, 20 }` y tener longitud `3`. Pista: primero cuenta cuántas necesitas guardar y después rellena el nuevo array. Utiliza `import java.util.Arrays;` para mostrarlo.

<details>
<summary>Ver solución</summary>

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

`cantidad` es la longitud necesaria; `siguiente` es el índice de escritura. Si ninguna puntuación cumple la condición, el resultado es un array vacío.

</details>

### 4. Suma cada fila de una tabla irregular

Cada fila contiene las ventas de una tienda en los días que abrió. Para `{ { 2, 5, 3 }, { 4, 1 }, { 6, 2, 1, 3 } }`, muestra los totales `10`, `5` y `12`. No supongas que todas las filas tienen la misma longitud.

<details>
<summary>Ver solución</summary>

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

El acumulador se inicializa dentro del bucle exterior para empezar de cero en cada fila. El límite interior es `ventas[f].length`.

</details>

### Comprueba también los casos pequeños

Prueba tus algoritmos con un array vacío, uno de un solo elemento, valores repetidos y números negativos. Para una búsqueda, comprueba un valor que esté al principio, al final y que no exista. Estos casos revelan errores que los ejemplos grandes pueden ocultar.

## 10. Errores típicos y cómo depurarlos

| Síntoma o error | Causa habitual | Cómo corregirlo |
| --- | --- | --- |
| `ArrayIndexOutOfBoundsException` | Índice negativo o mayor o igual que `length` | Revisa `0 <= i && i < datos.length`; en un `for`, usa `<`, no `<=`. |
| `NullPointerException` | Array o fila sin crear; elemento de texto `null` | Localiza qué referencia es `null` antes de usarla. |
| Error de compilación con `length()` | Confundir array y texto | En arrays, `length` no lleva paréntesis. |
| Salida como `[I@...` | Imprimir directamente un array | Usa `Arrays.toString` o `Arrays.deepToString`. |
| Una «copia» cambia el original | Has utilizado `copia = original` | Crea una copia independiente; en matrices, copia también las filas. |
| Un `for-each` no cambia los enteros | Modificas la variable del bucle | Escribe en `datos[i]` con un bucle con índice. |
| El máximo sale `0` con datos negativos | Inicializarlo a cero | Parte del primer elemento y comprueba antes que el array no esté vacío. |
| Búsqueda binaria incorrecta | Array sin ordenar o mal uso del resultado | Ordena primero y comprueba si el resultado es negativo. |

Para depurar un bucle, anota en cada vuelta **el índice, el valor de la casilla y el acumulador o contador**. Si ocurre una excepción, lee la línea indicada y compara el índice utilizado con la longitud real. En una matriz, comprueba la fila y después la columna de esa fila.

## Chuleta de repaso

| Operación | Recuerda |
| --- | --- |
| Crear | `int[] a = new int[5];` o `int[] a = { 1, 2, 3 };` |
| Consultar tamaño | `a.length`; el último índice es `a.length - 1` si no está vacío. |
| Recorrer | `for (int i = 0; i < a.length; i++)` o `for (int dato : a)` |
| Matriz | Filas: `m.length`; columnas de la fila `f`: `m[f].length`. |
| Mostrar | `Arrays.toString(a)`; para matrices, `Arrays.deepToString(m)`. |
| Copiar | `Arrays.copyOf(a, a.length)`; asignar otra variable no copia. |
| Comparar | `Arrays.equals(a, b)` compara elementos; `==` compara referencias. |
| Ordenar | `Arrays.sort(a)` modifica el array. |
| Buscar | Secuencial sin ordenar; `Arrays.binarySearch` exige ordenación previa. |
| Rellenar | `Arrays.fill(a, valor)` cambia todas las casillas. |
| Métodos | Se copia la referencia; modificar elementos se observa fuera. |

## Para ampliar

- [Arrays en la documentación de Java](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/arrays.html).
- [Referencia de `java.util.Arrays`](https://docs.oracle.com/en/java/javase/25/docs/api/java.base/java/util/Arrays.html).
- [Unidad de arrays de Sergarb1](https://sergarb1.github.io/ApuntesProgramacion/06-arrays/), referencia para ampliar los temas de práctica y repaso.
