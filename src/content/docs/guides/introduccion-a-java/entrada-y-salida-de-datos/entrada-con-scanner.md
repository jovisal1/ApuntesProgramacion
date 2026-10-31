---
title: Entrada con Scanner
description: Entrada con Scanner en Java.
sidebar:
  order: 3
---

Hasta ahora hemos escrito los datos directamente en el código, por ejemplo `String nombre = "Ana";`. Ese programa siempre trabaja con el mismo nombre. **¿Cómo conseguimos que salude a la persona que lo está ejecutando, sin cambiar el código cada vez?** Necesitamos leer su respuesta desde la consola.

Piensa en el programa como una conversación: primero muestra «¿Cómo te llamas?», después espera la respuesta y, por último, la guarda para poder utilizarla. Ya sabemos mostrar la pregunta con `System.out.print`. Ahora nos falta la herramienta que permite **leer lo que escribe la persona**.

## Qué es `Scanner` y para qué sirve

Java incluye una biblioteca de herramientas listas para usar. Una de ellas es **`Scanner`**, una clase que permite crear un lector de datos. Ese lector puede leer texto o interpretar una respuesta como un número, según la operación que le pidamos. No tienes que instalar nada adicional: forma parte de Java.

Para leer desde la consola, conectamos el lector a **`System.in`**, la entrada estándar del programa, que en una ejecución interactiva normalmente recibe lo que escribimos en el teclado. Así distinguimos los dos sentidos de la comunicación:

- **`System.out`**: el programa envía mensajes a la consola.
- **`System.in`**: el programa recibe datos de entrada.
- **`Scanner`**: nos proporciona operaciones para leer e interpretar esos datos.

## Preparar el lector

Antes de pedir una respuesta, debemos disponer de un lector. En los ejemplos utilizaremos estas dos instrucciones, cada una en su lugar:

<div class="java-document-table">
<table>
<tr>
<th scope="col"><p><strong>Instrucción</strong></p></th>
<th scope="col"><p><strong>Qué hace y dónde va</strong></p></th>
</tr>
<tr>
<td><p><code>import java.util.Scanner;</code></p></td>
<td><p>Se escribe al principio del archivo, antes de la clase. Permite utilizar el nombre corto Scanner, que pertenece al paquete java.util.</p></td>
</tr>
<tr>
<td><p><code>Scanner entrada = new Scanner(System.in);</code></p></td>
<td><p>Se escribe dentro de main. Crea un lector conectado a la entrada estándar y guarda su referencia en una variable llamada entrada.</p></td>
</tr>
</table>
</div>

En la segunda instrucción, `Scanner` es el **tipo** de la variable; `entrada` es el **nombre que elegimos** para nuestro lector, y `new Scanner(System.in)` lo crea. Podríamos llamarlo `teclado` o `lector`, pero tendríamos que utilizar ese mismo nombre después. No necesitas conocer todavía todos los detalles de las clases y los objetos para usar esta herramienta.

<aside class="java-document-note">
<p><strong>IDEA CLAVE</strong></p>
<p><strong>Crear el lector no pide ni lee una respuesta.</strong> Esa preparación se hace una vez. Después utilizamos el lector cada vez que necesitamos recibir un dato.</p>
</aside>

## Nuestro primer diálogo completo

Guarda el siguiente programa en **`Saludo.java`**:

```java
import java.util.Scanner;

public class Saludo {
    public static void main(String[] args) {
        Scanner entrada = new Scanner(System.in);
        System.out.print("¿Cómo te llamas? ");
        String nombre = entrada.nextLine();
        System.out.println("Hola, " + nombre);
    }
}
```

Ejecuta el programa y escribe `Ana María` cuando aparezca la pregunta. Pulsa Intro para enviar la respuesta. En la consola verás una sesión como esta:

<p><strong>SESIÓN DE EJEMPLO</strong></p>

```text
¿Cómo te llamas? Ana María
Hola, Ana María
```

`Ana María` en la primera línea es lo que has escrito tú; la pregunta y el saludo los escribe el programa. Si vuelves a ejecutarlo y escribes otro nombre, el saludo cambia **sin modificar el código**.

## Qué ocurre paso a paso

1. `new Scanner(System.in)` prepara el lector y lo deja disponible como `entrada`.
2. `System.out.print("¿Cómo te llamas? ");` muestra la pregunta. Todavía no hemos leído nada.
3. `entrada.nextLine()` lee una línea. Si todavía no has enviado la respuesta, en una consola interactiva el programa espera a que la escribas y pulses Intro.
4. La asignación guarda el texto leído en `nombre`. Con la respuesta del ejemplo, esa variable contiene `"Ana María"`.
5. `System.out.println("Hola, " + nombre);` utiliza el dato guardado para construir el saludo.

Fíjate especialmente en **`String nombre = entrada.nextLine();`**: primero se ejecuta la parte derecha y se obtiene el texto; después se guarda en la variable de la izquierda. `String` indica que guardamos texto. El punto en `entrada.nextLine()` significa que pedimos a **ese lector** que ejecute su operación `nextLine()`.

`nextLine()` devuelve el resto de la línea actual sin incluir el separador de fin de línea. En este primer ejemplo, como no hemos hecho ninguna lectura anterior, recoge la respuesta completa, **incluidos los espacios entre palabras**. Por eso podemos leer `Ana María`. Más adelante veremos qué ocurre cuando mezclamos lectura de números y lectura de líneas.

<aside class="java-document-note">
<p><strong>PRUÉBALO</strong></p>
<p>Ejecuta el programa con tu nombre completo. Después cambia solo el mensaje de la pregunta y comprueba que el lector sigue funcionando. Observa también qué ocurre si pulsas Intro sin escribir nada: se guarda un texto vacío y el saludo queda sin nombre. Leer una respuesta y comprobar que sea válida son dos tareas distintas.</p>
</aside>

## Primer cálculo con datos del usuario

Guarda este programa en **`SumaConsola.java`**. Supone que introduces dos enteros válidos y pequeños. Puedes escribirlos en dos líneas o separados por espacios: `nextInt()` lee tokens en ambos casos.

```java
import java.util.Scanner;

public class SumaConsola {
    public static void main(String[] args) {
        Scanner entrada = new Scanner(System.in);
        System.out.print("Primer número: ");
        int primero = entrada.nextInt();
        System.out.print("Segundo número: ");
        int segundo = entrada.nextInt();
        int suma = primero + segundo;
        System.out.println("La suma es " + suma);
    }
}
```

<p><strong>SESIÓN DE EJEMPLO</strong></p>

Los números tras las preguntas son las respuestas de la persona.

```text
Primer número: 12
Segundo número: 8
La suma es 20
```

Fíjate en las tres acciones: `print` pregunta, `nextInt` lee y la asignación guarda el dato. Después calculamos y mostramos. Si escribes `doce`, este programa falla: todavía no hemos añadido la [validación de entradas](/ApuntesProgramacion/guides/introduccion-a-java/entrada-y-salida-de-datos/validacion-de-entradas/).

## Métodos de lectura

<div class="java-document-table">
<table>
<tr>
<th scope="col"><p><strong>Método</strong></p></th>
<th scope="col"><p><strong>Qué lee</strong></p></th>
</tr>
<tr>
<td><p><code>nextLine()</code></p></td>
<td><p>El resto de la línea, que puede estar vacío.</p></td>
</tr>
<tr>
<td><p><code>next()</code></p></td>
<td><p>El siguiente token, delimitado por espacios en blanco por defecto.</p></td>
</tr>
<tr>
<td><p><code>nextInt()</code></p></td>
<td><p>Un token interpretable como <code>int</code>.</p></td>
</tr>
<tr>
<td><p><code>nextLong()</code></p></td>
<td><p>Un token interpretable como <code>long</code>.</p></td>
</tr>
<tr>
<td><p><code>nextDouble()</code></p></td>
<td><p>Un token interpretable como <code>double</code>, según el <code>Locale</code> del lector.</p></td>
</tr>
<tr>
<td><p><code>nextFloat()</code></p></td>
<td><p>Un token interpretable como <code>float</code>.</p></td>
</tr>
<tr>
<td><p><code>nextBoolean()</code></p></td>
<td><p>Un token <code>true</code> o <code>false</code>, sin distinguir mayúsculas.</p></td>
</tr>
<tr>
<td><p><code>hasNextInt()</code></p></td>
<td><p>Comprueba si el siguiente token es un <code>int</code> válido, sin consumirlo.</p></td>
</tr>
<tr>
<td><p><code>hasNextLine()</code></p></td>
<td><p>Comprueba si queda otra línea.</p></td>
</tr>
</table>
</div>

`next()` solo leería `Ana` de una línea con `Ana María`. `nextLine()` permite leer el nombre completo. `Scanner` no tiene `nextChar()`: puedes leer una cadena, validar su longitud y usar `charAt(0)` si esperas un solo `char`.

<aside class="java-document-note">
<p><strong>UN LECTOR PARA LA ENTRADA ESTÁNDAR</strong></p>
<p>Mantén un único <code>Scanner</code> sobre <code>System.in</code> y reutilízalo. Cerrar ese <code>Scanner</code> también cierra <code>System.in</code>; no lo cierres en mitad de una aplicación que aún necesita leer. En estos programas de consola dejamos la entrada disponible hasta que termina el proceso. Con otros recursos, como ficheros, sí planificaremos su cierre explícito.</p>
</aside>

## Leer una opción de un carácter

Para una respuesta sencilla como `s` o `n`, lee primero el texto y comprueba que contiene exactamente un carácter. Así evitas llamar a `charAt(0)` sobre una cadena vacía:

```java
Scanner entrada = new Scanner(System.in);
System.out.print("¿Quieres continuar? (s/n): ");
String respuesta = entrada.nextLine().strip();
if (respuesta.length() == 1) {
    char opcion = Character.toLowerCase(respuesta.charAt(0));
    if (opcion == 's') {
        System.out.println("Continuamos.");
    } else if (opcion == 'n') {
        System.out.println("Terminamos.");
    } else {
        System.out.println("Escribe s o n.");
    }
} else {
    System.out.println("Escribe un solo carácter.");
}
```

Añade `import java.util.Scanner;` antes de la clase. Este fragmento supone que existe una línea de entrada. Acepta `S` y `N` gracias a `Character.toLowerCase`. `nextBoolean()` no reconoce «sí» o «no»: espera `true` o `false`.

## Repaso

<div class="java-document-table">
<table>
<tr>
<th scope="col"><p><strong>Necesitas…</strong></p></th>
<th scope="col"><p><strong>Utiliza…</strong></p></th>
</tr>
<tr>
<td><p>Leer un texto completo</p></td>
<td><p><code>entrada.nextLine()</code></p></td>
</tr>
<tr>
<td><p>Leer un entero por tokens</p></td>
<td><p><code>entrada.nextInt()</code> tras comprobar su formato.</p></td>
</tr>
</table>
</div>

## Errores frecuentes

<div class="java-document-table">
<table>
<tr>
<th scope="col"><p><strong>Qué observas</strong></p></th>
<th scope="col"><p><strong>Causa probable</strong></p></th>
<th scope="col"><p><strong>Qué revisar</strong></p></th>
</tr>
<tr>
<td><p>El programa parece detenido</p></td>
<td><p>Está esperando una lectura.</p></td>
<td><p>Comprueba la línea de <code>Scanner</code> y escribe la respuesta en la consola de ejecución.</p></td>
</tr>
<tr>
<td><p><code>NoSuchElementException</code></p></td>
<td><p>Has intentado leer cuando la entrada ha terminado.</p></td>
<td><p>Comprueba <code>hasNext()</code> o <code>hasNextLine()</code> según la estrategia.</p></td>
</tr>
</table>
</div>

## Referencias

- [Scanner: tokens, líneas y configuración regional](https://docs.oracle.com/en/java/javase/25/docs/api/java.base/java/util/Scanner.html).
