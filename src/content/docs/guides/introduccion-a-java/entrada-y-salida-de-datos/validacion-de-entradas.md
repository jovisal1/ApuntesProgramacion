---
title: Validación de entradas
description: Validación de entradas en Java.
sidebar:
  order: 5
---

La validación tiene dos niveles:

1. **Formato:** ¿puede interpretarse el texto como el tipo esperado? `"ocho"` no es un entero.
2. **Dominio:** ¿es admisible para el problema? `-4` es un entero, pero no una cantidad válida de alumnos.

`Scanner.nextInt()` lanza `InputMismatchException` si el token no es un entero válido o queda fuera de rango. `Integer.parseInt()` lanza `NumberFormatException` si el texto no representa un `int`. Son operaciones distintas y no se recuperan del error de la misma manera.

Si empleas `hasNextInt()` dentro de un bucle y el token no es válido, debes consumir la entrada rechazada antes de repetir; de lo contrario, comprobarás indefinidamente el mismo token. Leer por líneas facilita definir cada intento como una respuesta completa.

<aside class="java-document-note">
<p><strong>COMPROBAR UN PROGRAMA</strong></p>
<p>Antes de ejecutar, anota entrada y salida esperadas. Prueba un caso normal, valores límite y datos incorrectos. Si el resultado no coincide, coloca un punto de interrupción antes de la lectura o del cálculo y observa las variables paso a paso. Un programa que compila todavía puede tener errores lógicos.</p>
</aside>

## Repetir una petición sin usar excepciones

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

## Qué significa `try` / `catch`

Cuando convertimos una línea con `parseInt` o `parseDouble`, podemos gestionar una conversión fallida con `try` / `catch`: dentro de `try` intentamos la operación; si se produce la excepción indicada, se ejecuta `catch`. [El programa de media de notas](/ApuntesProgramacion/guides/introduccion-a-java/entrada-y-salida-de-datos/ejemplos-completos/) usa esa estrategia. Una conversión correcta no garantiza que el número sea válido para el problema: también hay que comprobar su intervalo.

## Repaso

<div class="java-document-table">
<table>
<tr>
<th scope="col"><p><strong>Necesitas…</strong></p></th>
<th scope="col"><p><strong>Utiliza…</strong></p></th>
</tr>
<tr>
<td><p>Validar</p></td>
<td><p>Comprueba primero el formato y después el intervalo permitido.</p></td>
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
<td><p>La petición se repite sin avanzar</p></td>
<td><p>Compruebas otra vez el mismo token incorrecto.</p></td>
<td><p>Consume la respuesta rechazada antes de repetir.</p></td>
</tr>
</table>
</div>
