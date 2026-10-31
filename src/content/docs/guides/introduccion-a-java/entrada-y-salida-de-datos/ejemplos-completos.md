---
title: Ejemplos completos
description: Ejemplos completos en Java.
sidebar:
  order: 6
---

Estos dos programas combinan lectura, validación y presentación de resultados. Sigue cómo los datos pasan de la entrada al cálculo y cómo responde el programa si no son válidos.

## Media de tres notas

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

## Un menú que se repite hasta salir

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

## Repaso

<div class="java-document-table">
<table>
<tr>
<th scope="col"><p><strong>Necesitas…</strong></p></th>
<th scope="col"><p><strong>Utiliza…</strong></p></th>
</tr>
<tr>
<td><p>Repetir una pregunta</p></td>
<td><p>Bucle que consume cada respuesta y termina al aceptar un dato o finalizar la entrada.</p></td>
</tr>
</table>
</div>
