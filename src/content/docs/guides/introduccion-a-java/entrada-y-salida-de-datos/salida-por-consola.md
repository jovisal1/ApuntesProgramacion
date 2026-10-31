---
title: Salida por consola
description: Salida por consola en Java.
sidebar:
  order: 2
---

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

## Combinar texto y cálculos

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

## Comillas, barras y saltos de línea

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

## Salida con formato

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

## Alinear resultados como un pequeño informe

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

## Repaso

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
<td><p>Un cálculo se muestra como <code>23</code> en vez de <code>5</code></p></td>
<td><p>Concatenas antes de sumar.</p></td>
<td><p>Utiliza paréntesis o calcula primero en una variable.</p></td>
</tr>
<tr>
<td><p><code>IllegalFormatConversionException</code></p></td>
<td><p>Marcador incompatible con el dato.</p></td>
<td><p>Por ejemplo, usa <code>%f</code> para un <code>double</code> y <code>%d</code> para un entero.</p></td>
</tr>
</table>
</div>

## Referencias

- [Formatter: reglas de formato de printf](https://docs.oracle.com/en/java/javase/25/docs/api/java.base/java/util/Formatter.html).
