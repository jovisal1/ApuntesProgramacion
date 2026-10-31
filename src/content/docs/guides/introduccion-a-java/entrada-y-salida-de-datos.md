---
title: Introducción a la entrada y salida de datos
description: Introducción a la entrada y salida de datos en Java.
sidebar:
  order: 1
---

<p><em>Imagina una conversación con tu programa: te pregunta el nombre, escucha la respuesta y te muestra un mensaje. La entrada y la salida de datos son las herramientas que hacen posible ese diálogo.</em></p>

Los programas necesitan recibir información y comunicar resultados. Empezaremos por la **consola**, que permite concentrarnos en los datos y en el algoritmo. Al final veremos una pequeña ampliación con ventanas.

Para los ejemplos básicos necesitas conocer variables, tipos y conversiones. El problema integrador utiliza además condiciones y bucles, explicados en [Estructuras de control](/ApuntesProgramacion/guides/introduccion-a-java/estructuras-de-control/).

<aside class="java-document-note">
<p><strong>CÓMO PROBAR LOS EJEMPLOS</strong></p>
<p>Los fragmentos sin clase completa se escriben dentro de <code>main</code>, cada uno por separado. Si aparece un <code>import</code>, colócalo antes de la declaración de la clase. Guarda los programas completos con el nombre de su clase pública y extensión <code>.java</code>.</p>
</aside>

## Del dato al resultado

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
