---
title: Introducción a Java
description: "Presentación de la unidad de Java: objetivos, contenidos y paso de los algoritmos a los programas."
sidebar:
  order: 1
---

## Introducción

Hasta ahora hemos aprendido a enfrentarnos a un problema, dividirlo en pasos y construir un algoritmo para resolverlo. Con el pseudocódigo y PSeInt hemos podido poner a prueba nuestras ideas: guardar datos, tomar decisiones, repetir operaciones y comprobar si obteníamos el resultado esperado. **Ahora toca dar el siguiente paso: convertir esas ideas en programas escritos en Java.**

<div class="java-logo">

![Logo java](../../../assets/introduccion_java/Java-Logo.jpg)

</div>

Entramos en el código puro y duro: archivos de código fuente, un compilador y programas que ejecutaremos desde nuestro entorno de trabajo. Vamos a escribir con la sintaxis de un lenguaje que se utiliza para desarrollar aplicaciones. Cada variable, cada condición y cada bucle que hemos trabajado hasta aquí tendrá su lugar en nuestros primeros programas.

**Todo lo aprendido viene con nosotros.** Cuando escribamos un `if`, reconoceremos el `Si` de nuestros algoritmos; cuando necesitemos repetir una tarea, volveremos a pensar en las condiciones y los contadores que ya conocemos. La lógica seguirá siendo nuestra herramienta principal. Java nos dará una nueva forma de expresarla, con reglas más precisas sobre los tipos de datos, las instrucciones y la organización del código.

Al principio aparecerán llaves, puntos y coma y mensajes del compilador que todavía no entenderemos. Habrá programas que no compilen a la primera y otros que se ejecuten, pero hagan algo distinto de lo que esperábamos. **Aprender a leer esos mensajes, seguir el valor de las variables y corregir nuestros errores también es aprender a programar.** Cada problema resuelto nos ayudará a entender mejor el código y a ganar autonomía.

Empezaremos con algo pequeño: conseguir que nuestro primer programa muestre un mensaje. Después le daremos datos, haremos cálculos, incorporaremos decisiones y conseguiremos que responda a lo que una persona escriba por teclado. Así iremos construyendo programas cuyo comportamiento podremos explicar, probar y mejorar.

Este recorrido se organiza en siete apartados:

1. [Historia y características de Java](/ApuntesProgramacion/guides/introduccion-a-java/historia-y-caracteristicas/): conoceremos el lenguaje y las herramientas que necesitamos, y viviremos el primer paso del proceso completo: escribir, compilar y ejecutar nuestro propio programa.
2. [Tipos de datos, variables y constantes](/ApuntesProgramacion/guides/introduccion-a-java/tipos-de-datos-variables-y-mas/): guardaremos datos con tipos, variables y constantes.
3. [Operadores y expresiones](/ApuntesProgramacion/guides/introduccion-a-java/operadores-y-expresiones/): calcularemos y construiremos condiciones.
4. [Cadenas de texto y conversiones](/ApuntesProgramacion/guides/introduccion-a-java/cadenas-de-texto-y-conversiones/): trabajaremos con texto y conversiones.
5. [Estructuras de control](/ApuntesProgramacion/guides/introduccion-a-java/estructuras-de-control/): tomaremos decisiones y repetiremos instrucciones con las estructuras de selección, iteración y salto.
6. [Entrada y salida de datos](/ApuntesProgramacion/guides/introduccion-a-java/entrada-y-salida-de-datos/): haremos que nuestros programas interactúen con el usuario, reciban información y comuniquen resultados de forma clara.
7. [Arrays](/ApuntesProgramacion/guides/introduccion-a-java/arrays/): guardaremos y recorreremos varios datos del mismo tipo, en una o varias dimensiones.

En esta unidad trabajaremos los siguientes resultados de aprendizaje (RA), con el alcance de los contenidos estudiados:

- **RA1:** estructura de los programas, tipos, variables, constantes, operadores y conversiones.
- **RA2, de forma inicial:** programas sencillos con clases predefinidas como `Scanner`, y uso de sus objetos y métodos; todavía no se desarrolla todo el modelo orientado a objetos.
- **RA3:** selección, repetición y saltos, con seguimiento, prueba y depuración del código.
- **RA5, parcialmente:** entrada y salida por consola, formatos y diálogos sencillos; los ficheros se trabajarán más adelante.
- **RA6, parcialmente:** arrays de una y varias dimensiones, recorridos y operaciones con `java.util.Arrays`; todavía no se incluyen colecciones ni tipos genéricos.

Esta relación se basa en el [módulo 0485 de las enseñanzas mínimas de DAM y DAW](https://www.boe.es/eli/es/rd/2023/05/29/405). Los RA se seguirán desarrollando en las siguientes unidades. El objetivo es que podamos plantear una solución sencilla, escribirla en Java y comprobar que funciona, entendiendo por qué.

<p style="text-align: center;">
  <strong>Es el momento de abrir el editor y escribir nuestro primer programa en Java.</strong>
</p>
