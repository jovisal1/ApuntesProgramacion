---
title: Cadenas de texto y conversiones
description: Unir y comparar textos y convertir números a texto y texto a números.
sidebar:
  order: 5
tableOfContents:
  minHeadingLevel: 2
  maxHeadingLevel: 2
---

Una cadena (`String`) guarda texto. Es **inmutable**: las operaciones crean un texto nuevo; podemos asignar ese resultado a la variable. Ahora aprenderemos a unir cadenas, consultarlas y comparar su contenido.

### Operador de concatenación de cadenas

<p>El símbolo <code>+</code> tiene doble función: con números <strong>suma</strong> y con textos <strong>concatena</strong> (une), devolviendo un <code>String</code> nuevo. Si solo uno de los operandos es texto, Java convierte el otro a texto automáticamente. Cuidado, porque el orden importa:</p>

<div class="java-document-table">
<table>
<tr>
<th scope="col"><p><strong>Expresión</strong></p></th>
<th scope="col"><p><strong>Resultado</strong></p></th>
<th scope="col"><p><strong>Por qué</strong></p></th>
</tr>
<tr>
<td><p><code>"Hola " + "mundo"</code></p></td>
<td><p><code>Hola mundo</code></p></td>
<td><p>Une dos textos</p></td>
</tr>
<tr>
<td><p><code>"Edad: " + 20</code></p></td>
<td><p><code>Edad: 20</code></p></td>
<td><p>El 20 se convierte en texto</p></td>
</tr>
<tr>
<td><p><code>1 + 2 + "3"</code></p></td>
<td><p><code>33</code></p></td>
<td><p>Primero suma 1 + 2 = 3 y luego concatena con "3"</p></td>
</tr>
<tr>
<td><p><code>"1" + 2 + 3</code></p></td>
<td><p><code>123</code></p></td>
<td><p>Ya hay texto desde el principio: todo se concatena</p></td>
</tr>
<tr>
<td><p><code>"1" + (2 + 3)</code></p></td>
<td><p><code>15</code></p></td>
<td><p>Los paréntesis obligan a sumar primero</p></td>
</tr>
</table>
</div>

### String

<p>Podemos <strong>concatenar</strong> cadenas (unir dos para formar una nueva) con el signo <code>+</code>, igual que sumamos números. Y hay dos formas de declarar un <code>String</code>:</p>

```java
String nombre = "cadena";                      // la forma habitual: un literal
String otro = new String("cadena");    // con constructor (menos habitual)
```

<aside class="java-document-note">
<p><strong>OJO CON ESTO</strong></p>
<p><strong>Los `String` no se comparan con `==`.</strong> Ese operador comprueba si son el *mismo objeto*, no si tienen el mismo texto. Para comparar contenido hay que usar <code>equals()</code>:</p>
</aside>

```java
String a = "hola";
String b = new String("hola");
System.out.println(a == b);        // compara si son el mismo objeto
System.out.println(a.equals(b));   // compara el contenido
```

<p><strong>SALIDA POR CONSOLA</strong></p>

```text
false
true
```

<p>Estos son los métodos más importantes de la clase <code>String</code>. En los ejemplos suponemos que <code>texto</code> vale <code>"Java es genial"</code>:</p>

<div class="java-document-table">
<table>
<tr>
<th scope="col"><p><strong>Método</strong></p></th>
<th scope="col"><p><strong>Qué hace</strong></p></th>
<th scope="col"><p><strong>Ejemplo → resultado</strong></p></th>
</tr>
<tr>
<td><p><code>length()</code></p></td>
<td><p>Longitud de la cadena</p></td>
<td><p>texto.length() → 14</p></td>
</tr>
<tr>
<td><p><code>charAt(n)</code></p></td>
<td><p>Carácter que hay en la posición n</p></td>
<td><p>texto.charAt(0) → 'J'</p></td>
</tr>
<tr>
<td><p><code>indexOf('c')</code></p></td>
<td><p>Posición de la primera aparición del carácter (o -1 si no está)</p></td>
<td><p>texto.indexOf('a') → 1</p></td>
</tr>
<tr>
<td><p><code>lastIndexOf('c')</code></p></td>
<td><p>Posición de la última aparición del carácter</p></td>
<td><p>texto.lastIndexOf('a') → 12</p></td>
</tr>
<tr>
<td><p><code>substring(n1, n2)</code></p></td>
<td><p>Subcadena desde n1 hasta n2 - 1</p></td>
<td><p>texto.substring(5, 7) → "es"</p></td>
</tr>
<tr>
<td><p><code>toUpperCase()</code></p></td>
<td><p>Convierte todo a mayúsculas</p></td>
<td><p>texto.toUpperCase() → "JAVA ES GENIAL"</p></td>
</tr>
<tr>
<td><p><code>toLowerCase()</code></p></td>
<td><p>Convierte todo a minúsculas</p></td>
<td><p>texto.toLowerCase() → "java es genial"</p></td>
</tr>
<tr>
<td><p><code>equals("cad")</code></p></td>
<td><p>true si el contenido es idéntico</p></td>
<td><p>texto.equals("java es genial") → false</p></td>
</tr>
<tr>
<td><p><code>equalsIgnoreCase("cad")</code></p></td>
<td><p>Como equals, sin distinguir mayúsculas</p></td>
<td><p>texto.equalsIgnoreCase("java es genial") → true</p></td>
</tr>
<tr>
<td><p><code>compareTo(otro)</code></p></td>
<td><p>0 si son iguales; negativo si va antes alfabéticamente; positivo si va después</p></td>
<td><p>"a".compareTo("b") → -1</p></td>
</tr>
<tr>
<td><p><code>trim()</code></p></td>
<td><p>Quita los espacios de los extremos (no los del medio)</p></td>
<td><p>"  hola  ".trim() → "hola"</p></td>
</tr>
<tr>
<td><p><code>valueOf(N)</code></p></td>
<td><p>Convierte el valor N (de cualquier tipo) a String</p></td>
<td><p>String.valueOf(42) → "42"</p></td>
</tr>
<tr>
<td><p><code>replace(viejo, nuevo)</code></p></td>
<td><p>Reemplaza todas las apariciones de un carácter</p></td>
<td><p>texto.replace('a', 'o') → "Jovo es geniol"</p></td>
</tr>
</table>
</div>

<aside class="java-document-note">
<p><strong>OJO CON ESTO</strong></p>
<p>Como <code>String</code> es inmutable, sus métodos <strong>no modifican la cadena original: devuelven una nueva</strong>. Si no guardas el resultado, se pierde:</p>
</aside>

```java
String texto = "hola";
texto.toUpperCase();              // no hace nada útil: el resultado se descarta
System.out.println(texto);        // hola

texto = texto.toUpperCase();      // ahora sí: guardamos la cadena nueva
System.out.println(texto);        // HOLA
```

<p>Veamos varios de estos métodos funcionando en un mismo programa:</p>

```java
public class Strings {
    public static void main(String[] args) {
        String texto1 = "Primera cadena de texto";           // literal
        String texto2 = new String("Segunda cadena de texto");  // constructor

        System.out.println("La primera cadena de texto es:");
        System.out.println(texto1);
        System.out.println("Concatenamos las dos: " + texto1 + " " + texto2);
        System.out.println("Varios: " + texto1 + " " + 10 + " " + 23.5);
        System.out.println("Longitud de la segunda: " + texto2.length());
        System.out.println("compareTo: " + texto1.compareTo(texto2));
        System.out.println("La segunda letra de texto2: " + texto2.charAt(1));
        System.out.println("texto2 en mayúsculas: " + texto2.toUpperCase());
        System.out.println("Posiciones 1 y 2: " + texto2.substring(1, 3));
    }
}
```

<p><strong>SALIDA POR CONSOLA</strong></p>

```text
La primera cadena de texto es:
Primera cadena de texto
Concatenamos las dos: Primera cadena de texto Segunda cadena de texto
Varios: Primera cadena de texto 10 23.5
Longitud de la segunda: 23
compareTo: -3
La segunda letra de texto2: e
texto2 en mayúsculas: SEGUNDA CADENA DE TEXTO
Posiciones 1 y 2: eg
```

<p>Fíjate en el <code>-3</code>: <code>compareTo</code> compara letra a letra y la primera diferencia está en la inicial. La <code>P</code> (código 80) va antes que la <code>S</code> (código 83), y la diferencia es 80 - 83 = -3.</p>

## Parse: de texto a número

<p><em>El usuario teclea un 2 en pantalla, pero para Java eso no es el número 2, sino el texto «2». Y con un texto no se puede multiplicar. Necesitamos un traductor: eso es lo que hace parse.</em></p>

<p>Casi todos los lenguajes de programación ofrecen la posibilidad de transformar un valor de tipo «cadena de texto» en uno numérico. Por ejemplo, convertir la cadena <code>"2"</code> en el valor entero <code>2</code>. Una vez convertido, podemos trabajar con él como con cualquier otro dato primitivo (<code>int</code>, <code>float</code>, etc.).</p>

<p>En Java esta conversión se realiza con las <strong>clases envoltorio</strong> disponibles en Java. Cada una tiene un método que convierte un <code>String</code> al tipo primitivo correspondiente. Como norma general, el nombre de la envoltura coincide con el del primitivo, pero empezando por mayúscula. Estas son todas las opciones:</p>

<div class="java-document-table">
<table>
<tr>
<th scope="col"><p><strong>Tipo</strong></p></th>
<th scope="col"><p><strong>Clase envoltorio</strong></p></th>
<th scope="col"><p><strong>Método de conversión</strong></p></th>
</tr>
<tr>
<td><p><code>byte</code></p></td>
<td><p><code>Byte</code></p></td>
<td><p><code>Byte.parseByte(aString)</code></p></td>
</tr>
<tr>
<td><p><code>short</code></p></td>
<td><p><code>Short</code></p></td>
<td><p><code>Short.parseShort(aString)</code></p></td>
</tr>
<tr>
<td><p><code>int</code></p></td>
<td><p><code>Integer</code></p></td>
<td><p><code>Integer.parseInt(aString)</code></p></td>
</tr>
<tr>
<td><p><code>long</code></p></td>
<td><p><code>Long</code></p></td>
<td><p><code>Long.parseLong(aString)</code></p></td>
</tr>
<tr>
<td><p><code>float</code></p></td>
<td><p><code>Float</code></p></td>
<td><p><code>Float.parseFloat(aString)</code></p></td>
</tr>
<tr>
<td><p><code>double</code></p></td>
<td><p><code>Double</code></p></td>
<td><p><code>Double.parseDouble(aString)</code></p></td>
</tr>
<tr>
<td><p><code>boolean</code></p></td>
<td><p><code>Boolean</code></p></td>
<td><p><code>Boolean.parseBoolean(aString)</code></p></td>
</tr>
</table>
</div>

<p>El siguiente ejemplo usa <code>Scanner</code> para leer una línea del teclado; lo estudiarás en Entrada y salida de datos. Puedes practicar primero con textos escritos directamente en el código.</p>

<p><code>Boolean.parseBoolean</code> no convierte a número: devuelve <code>true</code> si el texto es «true», sin distinguir mayúsculas; para otros textos devuelve <code>false</code>, sin lanzar <code>NumberFormatException</code>.</p>

<p>Solo tienes que llamar al método de la clase envoltorio apropiada. En este programa pedimos un número por teclado (que Java recibe como texto), lo convertimos y lo usamos en un cálculo:</p>

```java
import java.util.Scanner;

public class ClasesEnvoltura {
    public static void main(String[] args) {
        Scanner entrada = new Scanner(System.in);
        System.out.print("Dame un número entero: ");
        String numeroEnTexto = entrada.nextLine();      // llega como texto

        // Convertimos el texto a int con la clase envoltorio Integer
        int numero = Integer.parseInt(numeroEnTexto);
        System.out.println("El número entero resultante es: " + numero);

        // Ahora es un número de verdad: podemos operar con él
        System.out.println("Su doble es: " + (numero * 2));
    }
}
```

<p><strong>SALIDA POR CONSOLA</strong></p>

```text
Dame un número entero: 21
El número entero resultante es: 21
Su doble es: 42
```

<aside class="java-document-note">
<p><strong>OJO CON ESTO</strong></p>
<p><strong>Si el texto no es un número válido, el programa falla</strong> con una excepción llamada <code>NumberFormatException</code>. Eso ocurre con <code>"abc"</code>, con <code>"3.5"</code> si usas <code>parseInt</code> (no es un entero) o con <code>" 12"</code> con espacios delante (usa <code>trim()</code> para quitarlos).</p>
</aside>



<aside class="java-document-note">
<p><strong>TRUCO</strong></p>
<p><strong>El camino inverso</strong> (de número a texto) es aún más fácil: <code>String.valueOf(42)</code> o simplemente <code>"" + 42</code>. Y para un <code>char</code> no existe «parseChar»: se obtiene con <code>texto.charAt(0)</code>.</p>
</aside>

<aside class="java-document-note">
<p><strong>MINI-RETO</strong></p>
<p>Escribe un programa que pida dos números enteros por teclado y muestre su suma.</p>
</aside>

<details>
<summary>Ver solución</summary>

<p>Solución:</p>

Fragmento para main; necesita `import java.util.Scanner;` antes de la clase.

```java
Scanner sc = new Scanner(System.in);
System.out.print("Primer número: ");
int a = Integer.parseInt(sc.nextLine());
System.out.print("Segundo número: ");
int b = Integer.parseInt(sc.nextLine());
System.out.println("La suma es " + (a + b));
```

</details>

<aside class="java-document-note">
<p><strong>EN RESUMEN</strong></p>
<ul>
<li>Lo que el usuario teclea llega como <strong>texto</strong>; para operar hay que convertirlo.</li>
<li>Se usa <code>Integer.parseInt()</code>, <code>Double.parseDouble()</code>, etc.</li>
<li>Si el texto no tiene formato numérico, se lanza <code>NumberFormatException</code>.</li>
</ul>
</aside>

<p><strong>PARA REPASAR</strong></p>

## Practica antes de continuar

Convierte "12" en un entero, súmale 3 y vuelve a convertir el resultado en texto. ¿En qué se diferencia de "12" + 3?

<details>
<summary>Ver una solución</summary>

```java
int numero = Integer.parseInt("12");
String resultado = String.valueOf(numero + 3);
System.out.println(resultado); // 15
System.out.println("12" + 3);   // 123
```

</details>

## Repaso esencial

<div class="java-document-table">
<table>
<tr>
<th scope="col"><p><strong>Tema</strong></p></th>
<th scope="col"><p><strong>Lo que debes recordar</strong></p></th>
</tr>
<tr>
<td><p><strong>Cadenas</strong></p></td>
<td><p><code>String</code> inmutable, se compara con <code>equals()</code> · <code>StringBuilder</code> mutable (ampliación).</p></td>
</tr>
<tr>
<td><p><strong>Parse</strong></p></td>
<td><p><code>Integer.parseInt("42")</code>, <code>Double.parseDouble("3.5")</code>.</p></td>
</tr>
</table>
</div>

## Errores frecuentes

<div class="java-document-table">
<table>
<tr>
<th scope="col"><p><strong>El error</strong></p></th>
<th scope="col"><p><strong>Cómo evitarlo</strong></p></th>
</tr>
<tr>
<td><p>Comparar <code>String</code> con <code>==</code></p></td>
<td><p>Usa siempre <code>equals()</code>.</p></td>
</tr>
<tr>
<td><p><code>Integer.parseInt</code> con un texto que no es un número</p></td>
<td><p>Comprueba que el texto representa un entero. La gestión con <code>try-catch</code> se presenta en la ampliación.</p></td>
</tr>
</table>
</div>

## Ampliaciones opcionales

No necesitas dominar estos detalles para continuar con el siguiente paso. Abre solo lo que quieras profundizar.

<details class="java-extension">
<summary>StringBuilder: texto modificable</summary>

<p><strong>Cadenas de texto</strong></p>

<p>Una cadena de texto (en inglés, *string*) es un <strong>bloque de letras</strong> que usamos para guardar palabras y frases. En algunos lenguajes habría que usar un array de <code>char</code>, pero en Java no hace falta: el lenguaje incorpora un tipo específico para ello.</p>

<p>En realidad hay dos variantes principales: la clase <strong><code>String</code></strong> y la clase <strong><code>StringBuilder</code></strong>. La diferencia es esencial:</p>

<div class="java-document-table">
<table>
<tr>
<th scope="col"></th>
<th scope="col"><p><strong>String</strong></p></th>
<th scope="col"><p><strong>StringBuilder</strong></p></th>
</tr>
<tr>
<td><p>¿Puede modificarse?</p></td>
<td><p><strong>No</strong> (es *inmutable*)</p></td>
<td><p><strong>Sí</strong> (es *mutable*)</p></td>
</tr>
<tr>
<td><p>Qué pasa al «modificarla»</p></td>
<td><p>Java crea una cadena nueva y la original queda intacta</p></td>
<td><p>Se cambia la misma cadena, sin crear otra</p></td>
</tr>
<tr>
<td><p>Analogía</p></td>
<td><p>Tinta indeleble: para cambiar algo hay que escribirlo de nuevo</p></td>
<td><p>Pizarra: borras, insertas y cambias sobre la misma</p></td>
</tr>
<tr>
<td><p>Cuándo usarla</p></td>
<td><p>Casi siempre: textos que se leen, comparan o muestran</p></td>
<td><p>Cuando vas a modificar el texto muchas veces (por ejemplo, dentro de un bucle)</p></td>
</tr>
</table>
</div>

<p><strong>StringBuilder</strong></p>

<p>Si vas a modificar un texto muchas veces, <code>StringBuilder</code> es la herramienta adecuada: permite <strong>insertar, borrar o invertir</strong> sin crear una cadena nueva cada vez (a cambio de ser ligeramente menos eficiente para operaciones simples). Sus métodos principales:</p>

<div class="java-document-table">
<table>
<tr>
<th scope="col"><p><strong>Método</strong></p></th>
<th scope="col"><p><strong>Qué hace</strong></p></th>
</tr>
<tr>
<td><p><code>append(X)</code></p></td>
<td><p>Añade X al final de la cadena. X puede ser de cualquier tipo</p></td>
</tr>
<tr>
<td><p><code>insert(posicion, X)</code></p></td>
<td><p>Inserta X en la posición indicada. X puede ser de cualquier tipo</p></td>
</tr>
<tr>
<td><p><code>setCharAt(posicion, c)</code></p></td>
<td><p>Cambia el carácter de la posición indicada por el carácter c</p></td>
</tr>
<tr>
<td><p><code>charAt(posicion)</code></p></td>
<td><p>Devuelve el carácter que hay en la posición indicada</p></td>
</tr>
<tr>
<td><p><code>indexOf('c')</code></p></td>
<td><p>Posición de la primera aparición del carácter (-1 si no lo encuentra)</p></td>
</tr>
<tr>
<td><p><code>lastIndexOf('c')</code></p></td>
<td><p>Posición de la última aparición del carácter (-1 si no lo encuentra)</p></td>
</tr>
<tr>
<td><p><code>substring(n1, n2)</code></p></td>
<td><p>Devuelve un String entre las posiciones n1 y n2 - 1. Sin n2, llega hasta el final</p></td>
</tr>
<tr>
<td><p><code>delete(inicio, fin)</code></p></td>
<td><p>Elimina los caracteres desde inicio hasta fin - 1</p></td>
</tr>
<tr>
<td><p><code>reverse()</code></p></td>
<td><p>Invierte el contenido de la cadena</p></td>
</tr>
<tr>
<td><p><code>length()</code></p></td>
<td><p>Devuelve el número de caracteres</p></td>
</tr>
<tr>
<td><p><code>toString()</code></p></td>
<td><p>Devuelve el String equivalente</p></td>
</tr>
</table>
</div>

```java
public class EjemploStringBuilder {
    public static void main(String[] args) {
        StringBuilder texto = new StringBuilder("Otra prueba");
        texto.append(" mas");     // modifica el MISMO objeto, sin crear otro
        System.out.println("Tras append:  " + texto);

        texto.insert(2, "1");     // inserta "1" en la posición 2
        System.out.println("Tras insert:  " + texto);

        texto.reverse();          // le da la vuelta al contenido
        System.out.println("Tras reverse: " + texto);

        System.out.println("En mayúsculas: " + texto.toString().toUpperCase());
    }
}
```

<p><strong>SALIDA POR CONSOLA</strong></p>

```text
Tras append:  Otra prueba mas
Tras insert:  Ot1ra prueba mas
Tras reverse: sam abeurp ar1tO
En mayúsculas: SAM ABEURP AR1TO
```

<aside class="java-document-note">
<p><strong>MINI-RETO</strong></p>
<p><strong>¿Es un palíndromo?</strong> Un palíndromo es una palabra que se lee igual al derecho y al revés («reconocer», «anilina»). Escribe un programa que diga si una palabra lo es. (Pista: <code>StringBuilder</code> tiene un método que te viene de perlas, y recuerda cómo se comparan los textos.)</p>
</aside>

<details>
<summary>Ver solución</summary>

<p>Solución:</p>

```java
String palabra = "reconocer";
String invertida = new StringBuilder(palabra).reverse().toString();
System.out.println(palabra.equals(invertida));    // true
```

</details>

<aside class="java-document-note">
<p><strong>EN RESUMEN</strong></p>
<ul>
<li><code>String</code> es <strong>inmutable</strong> y se compara con <code>equals()</code>; <code>StringBuilder</code> es <strong>mutable</strong>.</li>
</ul>
</aside>


</details>

<details class="java-extension">
<summary>Gestión de errores: adelanto</summary>

<p>Más adelante aprenderás a gestionar estos errores con <code>try-catch</code>. Aquí tienes un adelanto:</p>

Este fragmento presupone `String texto = "12";`.

```java
try {
    int n = Integer.parseInt(texto);
    System.out.println("Número válido: " + n);
} catch (NumberFormatException e) {
    System.out.println("Eso no es un número entero");
}
```
</details>
