---
title: Introducción a las estructuras de control
description: Decidir, repetir y alterar el flujo de un programa Java.
sidebar:
  order: 1
---

<p><em>Sin estructuras de control, un programa sería una receta que se ejecuta línea a línea sin pensar. Con ellas, tu programa decide, repite y salta: pasa de ser una receta a ser un GPS que recalcula la ruta según lo que encuentra.</em></p>

<p>Como vimos en la unidad de algoritmos, las estructuras de control hacen que el flujo del programa <strong>no sea siempre secuencial</strong>. Gracias a ellas nuestro algoritmo puede ejecutar unos bloques u otros según unas condiciones, o repetir instrucciones automáticamente. Java distingue tres tipos:</p>

<div class="java-document-table">
<table>
<tr>
<th scope="col"><p><strong>Tipo</strong></p></th>
<th scope="col"><p><strong>Estructuras</strong></p></th>
<th scope="col"><p><strong>La pregunta que responden</strong></p></th>
</tr>
<tr>
<td><p><strong>Selección</strong></p></td>
<td><p><code>if</code>, <code>if-else</code>, <code>if-else-if</code>, <code>switch</code></p></td>
<td><p>«¿Qué camino tomo?»</p></td>
</tr>
<tr>
<td><p><strong>Iteración</strong></p></td>
<td><p><code>while</code>, <code>do-while</code>, <code>for</code>, <code>for-each</code></p></td>
<td><p>«¿Cuántas veces lo repito?»</p></td>
</tr>
<tr>
<td><p><strong>Salto</strong></p></td>
<td><p><code>break</code>, <code>continue</code>, <code>return</code></p></td>
<td><p>«¿Salgo ya o me salto esta vuelta?»</p></td>
</tr>
</table>
</div>

<p>Y por supuesto, todas ellas se pueden <strong>anidar</strong>: puedes colocar una dentro del bloque de otra tantas veces como necesites.</p>

Piensa en un programa que gestiona las notas de una clase: comprueba si una nota es suficiente para aprobar (**selección**), repite un cálculo para varias notas (**iteración**) y puede interrumpir una repetición cuando ya ha encontrado lo que buscaba (**salto**). La diferencia está en cómo decidimos qué instrucción se ejecuta después.

Para seguir estos apartados necesitas conocer variables, expresiones, comparaciones y operadores lógicos. Empezaremos decidiendo qué bloque ejecutar, continuaremos repitiendo instrucciones y terminaremos estudiando cómo alterar ese recorrido con `break`, `continue` y `return`.
