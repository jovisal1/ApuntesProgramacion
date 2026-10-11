---
title: Entrada y salida de datos
description: Salida con print, println y printf, entrada con Scanner, lectura por líneas, validación y una ampliación con JOptionPane.
sidebar:
  order: 5
---

## 1. Introducción

<p><em>Imagina una conversación con tu programa: te pregunta el nombre, escucha la respuesta y te muestra un mensaje. La entrada y la salida de datos son las herramientas que hacen posible ese diálogo.</em></p>

Los programas necesitan recibir información y comunicar resultados. Empezaremos por la **consola**, que permite concentrarnos en los datos y en el algoritmo. Al final veremos una pequeña ampliación con ventanas.

Para los ejemplos básicos necesitas conocer variables, tipos y conversiones. El problema integrador utiliza además condiciones y bucles, explicados en [Estructuras de control](/ApuntesProgramacion/guides/introduccion-a-java/estructuras-de-control/).

<aside class="java-document-note">
<p><strong>CÓMO PROBAR LOS EJEMPLOS</strong></p>
<p>Los fragmentos sin clase completa se escriben dentro de <code>main</code>, cada uno por separado. Si aparece un <code>import</code>, colócalo antes de la declaración de la clase. Guarda los programas completos con el nombre de su clase pública y extensión <code>.java</code>.</p>
</aside>

### Del dato al resultado

Imagina una calculadora que pide dos números y muestra su suma. El programa necesita tres pasos:

<div class="java-document-table">
<table>
<tr>
<th scope="col"><p><strong>Paso</strong></p></th>
<th scope="col"><p><strong>Qué hace el programa</strong></p></th>
<th scope="col"><p><strong>Ejemplo</strong></p></th>
</tr>
<tr>
<td><p><strong>Entrada</strong></p></td>
<td><p>Recibe y guarda los datos.</p></td>
<td><p>La persona escribe <code>12</code> y <code>8</code>.</p></td>
</tr>
<tr>
<td><p><strong>Proceso</strong></p></td>
<td><p>Realiza un cálculo o toma una decisión.</p></td>
<td><p>Calcula <code>12 + 8</code>.</p></td>
</tr>
<tr>
<td><p><strong>Salida</strong></p></td>
<td><p>Comunica el resultado.</p></td>
<td><p>Muestra <code>La suma es 20</code>.</p></td>
</tr>
</table>
</div>

Escribir un mensaje como «Introduce un número» **no lee ningún dato**. Para leer necesitas una instrucción de entrada; para conservar lo leído, debes asignarlo a una variable. En una consola interactiva, el programa normalmente espera a que escribas la respuesta y pulses Intro.

Aprenderás a pedir texto y números, presentar resultados, elegir entre lectura por tokens o por líneas y repetir una petición cuando la respuesta no sea válida. Empezaremos con entradas correctas y después añadiremos validación. No necesitas arrays para estos ejemplos.

## 2. Salida por consola

`System.out` representa la salida estándar, normalmente conectada a la terminal.

<div class="java-document-table">
<table>
<tr>
<th scope="col"><p><strong>Método</strong></p></th>
<th scope="col"><p><strong>Comportamiento</strong></p></th>
</tr>
<tr>
<td><p><code>System.out.print(...)</code></p></td>
<td><p>Escribe sin añadir un salto de línea.</p></td>
</tr>
<tr>
<td><p><code>System.out.println(...)</code></p></td>
<td><p>Escribe y añade un salto de línea. Sin argumentos, escribe una línea en blanco.</p></td>
</tr>
<tr>
<td><p><code>System.out.printf(...)</code></p></td>
<td><p>Escribe utilizando una plantilla de formato. No añade un salto automáticamente.</p></td>
</tr>
</table>
</div>

```java
System.out.print("Hola, ");
System.out.println("Ana");
System.out.println("Bienvenida a Java");
```

<p><strong>SALIDA POR CONSOLA</strong></p>

```text
Hola, Ana
Bienvenida a Java
```

### Combinar texto y cálculos

El operador `+` suma números, pero concatena cuando interviene una cadena. Los paréntesis permiten realizar primero el cálculo:

```java
System.out.println("Suma: " + 2 + 3);
System.out.println("Suma: " + (2 + 3));
```

<p><strong>SALIDA POR CONSOLA</strong></p>

```text
Suma: 23
Suma: 5
```

La primera instrucción une `"Suma: "`, `2` y `3` como texto. La segunda calcula `2 + 3` antes de unirlo al mensaje.

### Comillas, barras y saltos de línea

Algunos caracteres necesitan una secuencia de escape dentro de una cadena:

<div class="java-document-table">
<table>
<tr>
<th scope="col"><p><strong>Secuencia en el código</strong></p></th>
<th scope="col"><p><strong>Qué representa</strong></p></th>
</tr>
<tr>
<td><p><code>\&quot;</code></p></td>
<td><p>Comillas dobles dentro del texto.</p></td>
</tr>
<tr>
<td><p><code>\\</code></p></td>
<td><p>Una barra invertida.</p></td>
</tr>
<tr>
<td><p><code>\n</code></p></td>
<td><p>Salto de línea.</p></td>
</tr>
<tr>
<td><p><code>\t</code></p></td>
<td><p>Tabulación; su anchura visual depende de la terminal.</p></td>
</tr>
</table>
</div>

```java
System.out.println("Java dice: \"Hola\"");
System.out.println("C:\\curso\\notas.txt");
System.out.print("Uno\nDos\n");
```

<p><strong>SALIDA POR CONSOLA</strong></p>

```text
Java dice: "Hola"
C:\curso\notas.txt
Uno
Dos
```

### Salida con formato

`printf` utiliza marcadores que se sustituyen por los argumentos siguientes, en el mismo orden:

<div class="java-document-table">
<table>
<tr>
<th scope="col"><p><strong>Marcador</strong></p></th>
<th scope="col"><p><strong>Uso</strong></p></th>
</tr>
<tr>
<td><p><code>%s</code></p></td>
<td><p>Texto.</p></td>
</tr>
<tr>
<td><p><code>%d</code></p></td>
<td><p>Entero decimal.</p></td>
</tr>
<tr>
<td><p><code>%f</code></p></td>
<td><p>Número en coma flotante.</p></td>
</tr>
<tr>
<td><p><code>%.2f</code></p></td>
<td><p>Número en coma flotante mostrado con dos decimales.</p></td>
</tr>
<tr>
<td><p><code>%c</code></p></td>
<td><p>Carácter.</p></td>
</tr>
<tr>
<td><p><code>%b</code></p></td>
<td><p>Representación booleana; en estos ejemplos, argumentos <code>boolean</code>.</p></td>
</tr>
<tr>
<td><p><code>%n</code></p></td>
<td><p>Salto de línea de la plataforma. No consume un argumento.</p></td>
</tr>
<tr>
<td><p><code>%%</code></p></td>
<td><p>Símbolo de porcentaje. No consume un argumento.</p></td>
</tr>
</table>
</div>

```java
String nombre = "Ana";
int ejercicios = 8;
double media = 7.256;
System.out.printf(java.util.Locale.ROOT,
        "%s: %d ejercicios, media %.2f%n", nombre, ejercicios, media);
```

Con `Locale.ROOT`, la salida usa punto decimal:

<p><strong>SALIDA POR CONSOLA</strong></p>

```text
Ana: 8 ejercicios, media 7.26
```

Formatear a dos decimales **no modifica** el valor almacenado en `media`. El tipo del argumento debe ser compatible con el marcador: usar `%d` con un `double` produce un error de formato en ejecución.

Sin un `Locale` explícito, `printf` utiliza la configuración regional predeterminada para formato. Puedes usar `java.util.Locale.forLanguageTag("es-ES")` para presentar decimales con coma. La configuración de salida y la de lectura se eligen por separado.

### Alinear resultados como un pequeño informe

La anchura permite reservar espacio para cada dato. `%8.2f` reserva al menos ocho caracteres y muestra dos decimales; `%-12s` reserva doce caracteres y alinea el texto a la izquierda. Si un valor necesita más espacio, se muestra completo: no se recorta.

```java
System.out.printf(java.util.Locale.ROOT, "%-12s %8s%n", "Producto", "Precio");
System.out.printf(java.util.Locale.ROOT, "%-12s %8.2f%n", "Cuaderno", 2.5);
System.out.printf(java.util.Locale.ROOT, "%-12s %8.2f%n", "Mochila", 18.95);
System.out.printf("Descuento: %d%%%n", 10);
```

<p><strong>SALIDA POR CONSOLA</strong></p>

```text
Producto       Precio
Cuaderno         2.50
Mochila         18.95
Descuento: 10%
```

`%d` consume el valor `10`; `%%` escribe el signo de porcentaje y `%n` termina la línea. Para tablas, las anchuras de `printf` dan más control que las tabulaciones.

## 3. Entrada por consola con `Scanner`

Hasta ahora hemos escrito los datos directamente en el código, por ejemplo `String nombre = "Ana";`. Ese programa siempre trabaja con el mismo nombre. **¿Cómo conseguimos que salude a la persona que lo está ejecutando, sin cambiar el código cada vez?** Necesitamos leer su respuesta desde la consola.

Piensa en el programa como una conversación: primero muestra «¿Cómo te llamas?», después espera la respuesta y, por último, la guarda para poder utilizarla. Ya sabemos mostrar la pregunta con `System.out.print`. Ahora nos falta la herramienta que permite **leer lo que escribe la persona**.

### Qué es `Scanner` y para qué sirve

Java incluye una biblioteca de herramientas listas para usar. Una de ellas es **`Scanner`**, una clase que permite crear un lector de datos. Ese lector puede leer texto o interpretar una respuesta como un número, según la operación que le pidamos. No tienes que instalar nada adicional: forma parte de Java.

Para leer desde la consola, conectamos el lector a **`System.in`**, la entrada estándar del programa, que en una ejecución interactiva normalmente recibe lo que escribimos en el teclado. Así distinguimos los dos sentidos de la comunicación:

- **`System.out`**: el programa envía mensajes a la consola.
- **`System.in`**: el programa recibe datos de entrada.
- **`Scanner`**: nos proporciona operaciones para leer e interpretar esos datos.

### Preparar el lector

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

### Nuestro primer diálogo completo

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

### Qué ocurre paso a paso

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

### Primer cálculo con datos del usuario

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

Fíjate en las tres acciones: `print` pregunta, `nextInt` lee y la asignación guarda el dato. Después calculamos y mostramos. Si escribes `doce`, este programa falla: todavía no hemos añadido la validación que veremos más adelante.

### Métodos de lectura

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

### Leer una opción de un carácter

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

## 4. Tokens y líneas: entender el salto pendiente

Los métodos como `nextInt()` leen un **token**. `nextLine()` lee el **resto de una línea**. Mezclarlos sin pensar en esa diferencia puede producir resultados inesperados.

Imagina que escribes `18` y pulsas Intro:

```java
Scanner entrada = new Scanner(System.in);
System.out.print("Edad: ");
int edad = entrada.nextInt();
System.out.print("Nombre: ");
String nombre = entrada.nextLine();
System.out.println("Edad: " + edad + ", nombre: [" + nombre + "]");
```

Añade `import java.util.Scanner;` antes de la clase para probarlo. ¿Por qué el nombre queda vacío?

<div class="java-document-table">
<table>
<tr>
<th scope="col"><p><strong>Momento</strong></p></th>
<th scope="col"><p><strong>Qué ocurre</strong></p></th>
</tr>
<tr>
<td><p>Escribes <code>18</code> y pulsas Intro</p></td>
<td><p>La entrada contiene el número y un separador de fin de línea.</p></td>
</tr>
<tr>
<td><p><code>nextInt()</code></p></td>
<td><p>Consume el número, pero deja pendiente el resto de esa línea.</p></td>
</tr>
<tr>
<td><p><code>nextLine()</code></p></td>
<td><p>Lee ese resto, que en este caso está vacío, y avanza a la línea siguiente.</p></td>
</tr>
</table>
</div>

### Opción 1: consumir el resto de la línea de forma intencionada

Si el formato esperado es **un número en una línea y el nombre en la siguiente**, podemos hacer esto:

```java
Scanner entrada = new Scanner(System.in);
System.out.print("Edad: ");
int edad = entrada.nextInt();
entrada.nextLine(); // Descartamos lo que queda de la línea de la edad.
System.out.print("Nombre completo: ");
String nombre = entrada.nextLine();
System.out.println(nombre + " tiene " + edad + " años.");
```

No es una regla de «limpiar siempre el buffer». Si en la primera línea hubiera más texto, esa llamada lo descartaría también. Si después de `nextInt()` se llama a otro método de tokens, como `nextDouble()`, normalmente no hace falta este paso: el método omite los delimitadores iniciales.

### Opción 2: leer siempre líneas y convertir

Una alternativa cómoda cuando cada respuesta ocupa una línea:

```java
Scanner entrada = new Scanner(System.in);
System.out.print("Edad: ");
int edad = Integer.parseInt(entrada.nextLine().strip());
System.out.print("Nombre completo: ");
String nombre = entrada.nextLine();
System.out.println(nombre + " tiene " + edad + " años.");
```

Así no mezclamos las dos formas de lectura. Este fragmento supone que la edad tiene un formato válido; en el problema integrador aprenderemos a recuperarnos si no es así.

## 5. Decimales y configuración regional

El punto de un literal Java (`double nota = 7.5;`) pertenece a la sintaxis del lenguaje. El separador que escribe una persona en la consola depende de cómo configuremos el lector.

Este programa acepta coma decimal. Guárdalo en **`LecturaDecimal.java`**:

```java
import java.util.Locale;
import java.util.Scanner;

public class LecturaDecimal {
    public static void main(String[] args) {
        Scanner entrada = new Scanner(System.in);
        entrada.useLocale(Locale.forLanguageTag("es-ES"));
        System.out.print("Introduce una nota (por ejemplo, 7,5): ");
        if (entrada.hasNextDouble()) {
            double nota = entrada.nextDouble();
            if (Double.isFinite(nota) && nota >= 0 && nota <= 10) {
                System.out.printf(Locale.forLanguageTag("es-ES"),
                        "Nota: %.2f%n", nota);
            } else {
                System.out.println("La nota debe estar entre 0 y 10.");
            }
        } else {
            System.out.println("Formato no válido.");
        }
    }
}
```

Para trabajar con punto decimal mediante tokens, puedes configurar `entrada.useLocale(Locale.US)`. Si lees una línea y usas `Double.parseDouble`, la conversión usa **punto**, aunque el `Scanner` tenga otro `Locale`.

## 6. Validar la entrada y depurar

La validación tiene dos niveles:

1. **Formato:** ¿puede interpretarse el texto como el tipo esperado? `"ocho"` no es un entero.
2. **Dominio:** ¿es admisible para el problema? `-4` es un entero, pero no una cantidad válida de alumnos.

`Scanner.nextInt()` lanza `InputMismatchException` si el token no es un entero válido o queda fuera de rango. `Integer.parseInt()` lanza `NumberFormatException` si el texto no representa un `int`. Son operaciones distintas y no se recuperan del error de la misma manera.

Si empleas `hasNextInt()` dentro de un bucle y el token no es válido, debes consumir la entrada rechazada antes de repetir; de lo contrario, comprobarás indefinidamente el mismo token. Leer por líneas facilita definir cada intento como una respuesta completa.

<aside class="java-document-note">
<p><strong>COMPROBAR UN PROGRAMA</strong></p>
<p>Antes de ejecutar, anota entrada y salida esperadas. Prueba un caso normal, valores límite y datos incorrectos. Si el resultado no coincide, coloca un punto de interrupción antes de la lectura o del cálculo y observa las variables paso a paso. Un programa que compila todavía puede tener errores lógicos.</p>
</aside>

### Repetir una petición sin usar excepciones

Antes de leer un entero, `hasNextInt()` permite comprobar si el siguiente token es válido. En **`CantidadAlumnos.java`** pedimos un valor entre 1 y 30, con una respuesta por línea. Repetimos tanto si falla el formato como si el número queda fuera del intervalo:

```java
import java.util.Scanner;

public class CantidadAlumnos {
    public static void main(String[] args) {
        Scanner entrada = new Scanner(System.in);
        int cantidad = 0;
        boolean valida = false;
        while (!valida) {
            System.out.print("Cantidad de alumnos (1 a 30): ");
            if (!entrada.hasNext()) {
                System.out.println("Entrada finalizada.");
                return;
            }
            if (!entrada.hasNextInt()) {
                System.out.println("Escribe un número entero.");
                entrada.nextLine();
            } else {
                cantidad = entrada.nextInt();
                if (entrada.hasNextLine()) {
                    entrada.nextLine();
                }
                if (cantidad >= 1 && cantidad <= 30) {
                    valida = true;
                } else {
                    System.out.println("La cantidad debe estar entre 1 y 30.");
                }
            }
        }
        System.out.println("Grupo de " + cantidad + " alumnos.");
    }
}
```

<div class="java-document-table">
<table>
<tr>
<th scope="col"><p><strong>Respuesta</strong></p></th>
<th scope="col"><p><strong>Qué sucede</strong></p></th>
</tr>
<tr>
<td><p><code>hola</code></p></td>
<td><p>Rechaza el formato, descarta la línea y repite.</p></td>
</tr>
<tr>
<td><p><code>-2</code> o <code>31</code></p></td>
<td><p>Lee un entero, pero rechaza su valor y repite.</p></td>
</tr>
<tr>
<td><p><code>25</code></p></td>
<td><p>Acepta el dato y sale del bucle.</p></td>
</tr>
<tr>
<td><p>Fin de entrada</p></td>
<td><p>Termina con un mensaje.</p></td>
</tr>
</table>
</div>

Aquí `nextLine()` descarta el resto de **esa respuesta**, también si escribes texto después del número. Es una decisión del formato del programa: solo esperamos un valor por línea. Los métodos de tokens omiten líneas vacías; si necesitas detectar una respuesta vacía, utiliza lectura por líneas.

### Qué significa `try` / `catch`

Cuando convertimos una línea con `parseInt` o `parseDouble`, podemos gestionar una conversión fallida con `try` / `catch`: dentro de `try` intentamos la operación; si se produce la excepción indicada, se ejecuta `catch`. El programa de notas siguiente usa esa estrategia. Una conversión correcta no garantiza que el número sea válido para el problema: también hay que comprobar su intervalo.

## 7. Problema integrador: media de tres notas

Pide el nombre y tres notas entre 0 y 10. Repite la petición si una nota no es válida. Muestra la media con dos decimales e indica si está aprobada (media mayor o igual que 5). En este ejercicio, el usuario escribe los decimales con **punto**.

Guarda el programa en **`MediaNotas.java`**:

```java
import java.util.Locale;
import java.util.Scanner;

public class MediaNotas {
    public static void main(String[] args) {
        Scanner entrada = new Scanner(System.in);
        System.out.print("Nombre: ");
        if (!entrada.hasNextLine()) {
            System.out.println("No hay datos de entrada.");
            return;
        }
        String nombre = entrada.nextLine().strip();
        if (nombre.isEmpty()) {
            System.out.println("El nombre no puede estar vacío.");
            return;
        }

        final int TOTAL_NOTAS = 3;
        double suma = 0;
        for (int i = 1; i <= TOTAL_NOTAS; i++) {
            boolean valida = false;
            while (!valida) {
                System.out.print("Nota " + i + " (0 a 10, con punto decimal): ");
                if (!entrada.hasNextLine()) {
                    System.out.println("Entrada finalizada antes de completar las notas.");
                    return;
                }
                String texto = entrada.nextLine().strip();
                try {
                    double nota = Double.parseDouble(texto);
                    if (!Double.isFinite(nota) || nota < 0 || nota > 10) {
                        System.out.println("Escribe un número finito entre 0 y 10.");
                    } else {
                        suma += nota;
                        valida = true;
                    }
                } catch (NumberFormatException error) {
                    System.out.println("Formato incorrecto. Ejemplo válido: 7.5");
                }
            }
        }

        double media = suma / TOTAL_NOTAS;
        String resultado = media >= 5 ? "Aprobado" : "Suspenso";
        System.out.printf(Locale.ROOT, "%s: media %.2f. %s.%n",
                nombre, media, resultado);
    }
}
```

### Casos de prueba

<div class="java-document-table">
<table>
<tr>
<th scope="col"><p><strong>Entrada tras el nombre <code>Ana</code></strong></p></th>
<th scope="col"><p><strong>Resultado esperado</strong></p></th>
</tr>
<tr>
<td><p><code>4</code>, <code>7</code>, <code>9</code></p></td>
<td><p><code>Ana: media 6.67. Aprobado.</code></p></td>
</tr>
<tr>
<td><p><code>0</code>, <code>0</code>, <code>0</code></p></td>
<td><p><code>Ana: media 0.00. Suspenso.</code></p></td>
</tr>
<tr>
<td><p><code>5</code>, <code>5</code>, <code>5</code></p></td>
<td><p><code>Ana: media 5.00. Aprobado.</code></p></td>
</tr>
<tr>
<td><p><code>10</code>, <code>10</code>, <code>10</code></p></td>
<td><p><code>Ana: media 10.00. Aprobado.</code></p></td>
</tr>
<tr>
<td><p><code>hola</code>, después <code>4</code>, <code>7</code>, <code>9</code></p></td>
<td><p>Rechaza <code>hola</code>, pide de nuevo la primera nota y obtiene <code>6.67</code>.</p></td>
</tr>
<tr>
<td><p><code>-1</code>, <code>11</code>, <code>NaN</code> o <code>Infinity</code></p></td>
<td><p>Rechaza cada valor y vuelve a pedir la misma nota.</p></td>
</tr>
<tr>
<td><p>Fin de entrada antes de tener tres notas</p></td>
<td><p>Termina con un mensaje, sin calcular una media incompleta.</p></td>
</tr>
</table>
</div>

El redondeo solo afecta a la presentación. La decisión de aprobar usa la media calculada; no debe basarse en el texto redondeado. Cuando estudies [Arrays](/ApuntesProgramacion/guides/introduccion-a-java/arrays/), podrás ampliar este programa guardando las notas y mostrando también la mayor y la menor.

## 8. Un menú que se repite hasta elegir salir

La entrada también sirve para elegir qué debe hacer un programa. En **`MenuConsola.java`** combinamos lectura por líneas, `while` y `switch`. No necesitamos convertir la opción a entero: basta con comparar los textos `"1"`, `"2"` y `"0"`.

```java
import java.util.Scanner;

public class MenuConsola {
    public static void main(String[] args) {
        Scanner entrada = new Scanner(System.in);
        int puntos = 0;
        boolean salir = false;
        while (!salir) {
            System.out.println("1. Consultar puntos");
            System.out.println("2. Ganar 10 puntos");
            System.out.println("0. Salir");
            System.out.print("Opción: ");
            if (!entrada.hasNextLine()) {
                System.out.println("Entrada finalizada.");
                break;
            }
            String opcion = entrada.nextLine().strip();
            switch (opcion) {
                case "1":
                    System.out.println("Puntos: " + puntos);
                    break;
                case "2":
                    puntos += 10;
                    System.out.println("Has ganado 10 puntos.");
                    break;
                case "0":
                    salir = true;
                    System.out.println("Hasta pronto.");
                    break;
                default:
                    System.out.println("Opción no válida.");
            }
        }
    }
}
```

Prueba la secuencia `2`, `2`, `1`, `hola`, `0`: ganas puntos dos veces, consultas `20`, recibes un aviso por la opción incorrecta y sales. `break` dentro de un `case` termina el `switch`; la variable `salir` es la que evita la siguiente vuelta del `while`.

## 9. Ampliación: ventanas con `JOptionPane`

Swing incluye `JOptionPane`, útil para diálogos sencillos en un entorno de escritorio con interfaz gráfica. Es una ampliación: la consola sigue siendo nuestra vía principal para aprender.

<div class="java-document-table">
<table>
<tr>
<th scope="col"><p><strong>Método</strong></p></th>
<th scope="col"><p><strong>Utilidad</strong></p></th>
</tr>
<tr>
<td><p><code>showMessageDialog</code></p></td>
<td><p>Muestra un mensaje.</p></td>
</tr>
<tr>
<td><p><code>showInputDialog</code></p></td>
<td><p>Solicita un texto; devuelve <code>null</code> si se cancela.</p></td>
</tr>
<tr>
<td><p><code>showConfirmDialog</code></p></td>
<td><p>Devuelve un código de respuesta: sí, no, cancelar o cierre.</p></td>
</tr>
<tr>
<td><p><code>showOptionDialog</code></p></td>
<td><p>Permite definir opciones personalizadas.</p></td>
</tr>
</table>
</div>

Guarda este ejemplo en **`SaludoVentana.java`** y ejecútalo en un equipo con escritorio:

```java
import javax.swing.JOptionPane;
import javax.swing.SwingUtilities;

public class SaludoVentana {
    public static void main(String[] args) {
        SwingUtilities.invokeLater(() -> {
            String nombre = JOptionPane.showInputDialog(null, "¿Cómo te llamas?");
            if (nombre != null && !nombre.isBlank()) {
                JOptionPane.showMessageDialog(null,
                        "Hola, " + nombre.strip(),
                        "Saludo", JOptionPane.INFORMATION_MESSAGE);
            }
        });
    }
}
```

`SwingUtilities.invokeLater` programa la interacción en el hilo de eventos de Swing. La expresión `() -> { ... }` representa la tarea que se ejecutará; estudiaremos esa sintaxis más adelante.

El primer argumento `null` indica que no establecemos una ventana padre. En `showMessageDialog`, las constantes como `INFORMATION_MESSAGE`, `WARNING_MESSAGE`, `ERROR_MESSAGE`, `QUESTION_MESSAGE` y `PLAIN_MESSAGE` seleccionan el tipo de mensaje. `DEFAULT_OPTION` corresponde a opciones de diálogo, no es una constante de tipo de mensaje.

La entrada sigue siendo texto: si necesitas un número, comprueba primero si se ha cancelado y después convierte y valida. En confirmaciones compara con constantes como `JOptionPane.YES_OPTION`; no supongas que todas las respuestas significan «sí».

## 10. Practica con soluciones

Intenta resolver los ejercicios antes de abrir la solución. Guarda cada programa completo en su propio archivo y prueba tanto entradas correctas como incorrectas.

### 1. Calcula el área de un triángulo

Adapta el programa que conoces de PSeInt: pide base y altura positivas y muestra el área con dos decimales. Utiliza punto decimal y valida que las medidas sean números finitos. Con base `5` y altura `8`, debe mostrar `Área: 20.00`.

<details>
<summary>Ver solución</summary>

Guarda el programa en `AreaTriangulo.java`. Esta solución avisa y termina si un dato no es válido; como ampliación, utiliza un bucle para repetir la petición.

```java
import java.util.Locale;
import java.util.Scanner;

public class AreaTriangulo {
    public static void main(String[] args) {
        Scanner entrada = new Scanner(System.in);
        entrada.useLocale(Locale.US);
        System.out.print("Base positiva (con punto decimal): ");
        if (!entrada.hasNextDouble()) {
            System.out.println("La base debe ser un número.");
            return;
        }
        double base = entrada.nextDouble();
        System.out.print("Altura positiva (con punto decimal): ");
        if (!entrada.hasNextDouble()) {
            System.out.println("La altura debe ser un número.");
            return;
        }
        double altura = entrada.nextDouble();
        if (!Double.isFinite(base) || !Double.isFinite(altura)
                || base <= 0 || altura <= 0) {
            System.out.println("Las medidas deben ser finitas y positivas.");
            return;
        }
        double area = base * altura / 2.0;
        if (!Double.isFinite(area)) {
            System.out.println("El cálculo excede el rango de double.");
            return;
        }
        System.out.printf(Locale.ROOT, "Área: %.2f%n", area);
    }
}
```

</details>

### 2. Imprime un ticket sin perder céntimos

Solicita unidades y precio por unidad en céntimos, ambos enteros no negativos. Calcula el total y muestra euros y céntimos. Por ejemplo, `3` unidades a `125` céntimos deben dar `Total: 3.75 euros`.

<details>
<summary>Ver solución</summary>

Guarda el programa en `TicketCompra.java`.

```java
import java.util.Scanner;

public class TicketCompra {
    public static void main(String[] args) {
        Scanner entrada = new Scanner(System.in);
        System.out.print("Unidades: ");
        if (!entrada.hasNextInt()) {
            System.out.println("Las unidades deben ser un entero.");
            return;
        }
        int unidades = entrada.nextInt();
        System.out.print("Precio por unidad en céntimos: ");
        if (!entrada.hasNextInt()) {
            System.out.println("El precio debe ser un entero.");
            return;
        }
        int precioCentimos = entrada.nextInt();
        if (unidades < 0 || precioCentimos < 0) {
            System.out.println("No se admiten cantidades negativas.");
            return;
        }
        long totalCentimos = (long) unidades * precioCentimos;
        System.out.printf(java.util.Locale.ROOT, "Total: %d.%02d euros%n",
                totalCentimos / 100, totalCentimos % 100);
    }
}
```

Trabajamos con céntimos enteros para evitar aproximaciones decimales. La conversión `(long)` se hace **antes de multiplicar**, de modo que el producto de dos `int` no negativos cabe en un `long`. La división entre `100` obtiene los euros y el resto obtiene los céntimos. `%02d` añade un cero inicial cuando hace falta: `5` céntimos se muestran como `05`.

Prueba `1` unidad a `105` céntimos (`1.05`) y `0` unidades (`0.00`).

</details>

### 3. Explica el nombre vacío

En el fragmento que mezcla `nextInt()` y `nextLine()`, introduce `18` y después `Ana María`. Explica por qué el nombre queda vacío y propón dos soluciones.

<details>
<summary>Ver solución</summary>

`nextInt()` consume el número, pero no el resto de su línea. El primer `nextLine()` devuelve ese resto vacío: todavía no ha leído `Ana María`. Puedes consumir intencionadamente la línea pendiente y después leer el nombre, o leer siempre líneas y convertir la edad con `Integer.parseInt`. Ambas alternativas están desarrolladas en el apartado de tokens y líneas.

</details>

### 4. Cuenta las notas aprobadas

Amplía `MediaNotas` para mostrar cuántas de las tres notas son mayores o iguales que `5`. No necesitas guardarlas en un array. Con las notas `4`, `7` y `9`, el contador debe terminar en `2`.

<details>
<summary>Ver solución</summary>

Declara `int aprobadas = 0;` antes del bucle de notas. Dentro de la rama que acepta una nota, junto a `suma += nota;`, añade:

```java
if (nota >= 5) {
    aprobadas++;
}
```

Después del bucle, muestra `aprobadas` con `println`. No incrementes el contador antes de validar: una nota como `15` no debe contarse como aprobada.

</details>

## Errores frecuentes y cómo encontrarlos

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
<td><p>El nombre queda vacío</p></td>
<td><p>Un método de tokens dejó pendiente el final de línea.</p></td>
<td><p>Decide si consumir esa línea o leer siempre con <code>nextLine()</code>.</p></td>
</tr>
<tr>
<td><p><code>InputMismatchException</code></p></td>
<td><p>Token incompatible con el tipo o la configuración regional.</p></td>
<td><p>Comprueba con <code>hasNextInt()</code> / <code>hasNextDouble()</code> antes de leer.</p></td>
</tr>
<tr>
<td><p><code>NumberFormatException</code></p></td>
<td><p>La línea no se puede convertir al tipo esperado.</p></td>
<td><p>Revisa el texto y gestiona la conversión con <code>try</code> / <code>catch</code>.</p></td>
</tr>
<tr>
<td><p><code>NoSuchElementException</code></p></td>
<td><p>Has intentado leer cuando la entrada ha terminado.</p></td>
<td><p>Comprueba <code>hasNext()</code> o <code>hasNextLine()</code> según la estrategia.</p></td>
</tr>
<tr>
<td><p>La petición se repite sin avanzar</p></td>
<td><p>Compruebas otra vez el mismo token incorrecto.</p></td>
<td><p>Consume la respuesta rechazada antes de repetir.</p></td>
</tr>
<tr>
<td><p>Un cálculo se muestra como <code>23</code> en vez de <code>5</code></p></td>
<td><p>Concatenas antes de sumar.</p></td>
<td><p>Utiliza paréntesis o calcula primero en una variable.</p></td>
</tr>
<tr>
<td><p><code>IllegalFormatConversionException</code></p></td>
<td><p>Marcador incompatible con el dato.</p></td>
<td><p>Por ejemplo, usa <code>%f</code> para un <code>double</code> y <code>%d</code> para un entero.</p></td>
</tr>
<tr>
<td><p>Un decimal con coma no se acepta</p></td>
<td><p>Entrada y lector usan convenciones distintas.</p></td>
<td><p>Explica el separador esperado y configura el <code>Locale</code>.</p></td>
</tr>
</table>
</div>

## Chuleta de repaso

<div class="java-document-table">
<table>
<tr>
<th scope="col"><p><strong>Necesitas…</strong></p></th>
<th scope="col"><p><strong>Utiliza…</strong></p></th>
</tr>
<tr>
<td><p>Preguntar sin salto de línea</p></td>
<td><p><code>System.out.print(&quot;Edad: &quot;);</code></p></td>
</tr>
<tr>
<td><p>Mostrar un resultado</p></td>
<td><p><code>System.out.println(resultado);</code></p></td>
</tr>
<tr>
<td><p>Mostrar dos decimales</p></td>
<td><p><code>System.out.printf(java.util.Locale.ROOT, &quot;%.2f%n&quot;, valor);</code></p></td>
</tr>
<tr>
<td><p>Leer un texto completo</p></td>
<td><p><code>entrada.nextLine()</code></p></td>
</tr>
<tr>
<td><p>Leer un entero por tokens</p></td>
<td><p><code>entrada.nextInt()</code> tras comprobar su formato.</p></td>
</tr>
<tr>
<td><p>Leer un decimal por tokens</p></td>
<td><p><code>entrada.nextDouble()</code> con una configuración regional explícita.</p></td>
</tr>
<tr>
<td><p>Convertir una línea a entero</p></td>
<td><p><code>Integer.parseInt(entrada.nextLine().strip())</code> con gestión del error.</p></td>
</tr>
<tr>
<td><p>Validar</p></td>
<td><p>Comprueba primero el formato y después el intervalo permitido.</p></td>
</tr>
<tr>
<td><p>Repetir una pregunta</p></td>
<td><p>Bucle que consume cada respuesta y termina al aceptar un dato o finalizar la entrada.</p></td>
</tr>
</table>
</div>

## Referencias

- [Scanner: tokens, líneas y configuración regional](https://docs.oracle.com/en/java/javase/25/docs/api/java.base/java/util/Scanner.html).
- [Formatter: reglas de formato de printf](https://docs.oracle.com/en/java/javase/25/docs/api/java.base/java/util/Formatter.html).
- [JOptionPane: tipos de mensaje y respuestas](https://docs.oracle.com/en/java/javase/25/docs/api/java.desktop/javax/swing/JOptionPane.html).
