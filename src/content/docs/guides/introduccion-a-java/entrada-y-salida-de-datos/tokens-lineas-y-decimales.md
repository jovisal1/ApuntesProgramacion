---
title: Tokens, líneas y decimales
description: Tokens, líneas y decimales en Java.
sidebar:
  order: 4
---

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

## Opción 1: consumir el resto de la línea de forma intencionada

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

## Opción 2: leer siempre líneas y convertir

Una alternativa cómoda cuando cada respuesta ocupa una línea:

```java
Scanner entrada = new Scanner(System.in);
System.out.print("Edad: ");
int edad = Integer.parseInt(entrada.nextLine().strip());
System.out.print("Nombre completo: ");
String nombre = entrada.nextLine();
System.out.println(nombre + " tiene " + edad + " años.");
```

Así no mezclamos las dos formas de lectura. Este fragmento supone que la edad tiene un formato válido; en [el ejemplo completo de la media de notas](/ApuntesProgramacion/guides/introduccion-a-java/entrada-y-salida-de-datos/ejemplos-completos/) aprenderemos a recuperarnos si no es así.

## Decimales y configuración regional

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

## Repaso

<div class="java-document-table">
<table>
<tr>
<th scope="col"><p><strong>Necesitas…</strong></p></th>
<th scope="col"><p><strong>Utiliza…</strong></p></th>
</tr>
<tr>
<td><p>Leer un decimal por tokens</p></td>
<td><p><code>entrada.nextDouble()</code> con una configuración regional explícita.</p></td>
</tr>
<tr>
<td><p>Convertir una línea a entero</p></td>
<td><p><code>Integer.parseInt(entrada.nextLine().strip())</code> con gestión del error.</p></td>
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
<td><p>El nombre queda vacío</p></td>
<td><p>Un método de tokens dejó pendiente el final de línea.</p></td>
<td><p>Decide si consumir esa línea o leer siempre con <code>nextLine()</code>.</p></td>
</tr>
<tr>
<td><p>Un decimal con coma no se acepta</p></td>
<td><p>Entrada y lector usan convenciones distintas.</p></td>
<td><p>Explica el separador esperado y configura el <code>Locale</code>.</p></td>
</tr>
</table>
</div>
