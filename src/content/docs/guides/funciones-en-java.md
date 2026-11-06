---
title: "Funciones en Java"
description: "Funciones en Java."
sidebar:
  order: 1
---

Cuando un programa crece, escribir todas sus instrucciones dentro de `main` dificulta entenderlo y obliga a repetir operaciones. Podemos repartir el trabajo en **métodos**: bloques con nombre que realizan una tarea y que podemos utilizar tantas veces como necesitemos.

Esta unidad se centra en **RA2**, por las llamadas con parámetros, y en una parte de **RA4**, por la definición y el uso de métodos estáticos —criterio h— y el control básico del acceso. Todavía no se desarrolla todo el trabajo con clases y objetos del RA4.

También reforzamos **RA1** con la estructura y el ámbito de las variables, **RA3** con las condiciones, los bucles y la comprobación de los ejemplos, **RA5** con la lectura y la salida por consola de la suma y **RA6** con el paso y el retorno de arrays. Trabajar estos aspectos no equivale a completar todos los criterios de cada RA.

## Dividir un problema en tareas

Imagina un programa que calcula las puntuaciones de varias partidas. En cada partida hay que sumar los puntos obtenidos y una bonificación. Copiar la suma en muchos sitios funciona al principio, pero cada cambio obliga a revisar todas las copias. Si damos un nombre a esa operación, podemos escribirla una vez y llamarla con datos diferentes.

Un método es una pieza de un programa que puede **recibir datos**, **ejecutar instrucciones** y **devolver un resultado**. No todos los métodos necesitan entradas ni todos producen un valor de salida. Un método que muestra un saludo realiza una acción, aunque no devuelva ningún valor.

| Tarea | Datos de entrada | Resultado devuelto |
| --- | --- | --- |
| Sumar puntos | Dos enteros | Un entero |
| Comprobar si se aprueba | Una nota | Un `boolean` |
| Mostrar un menú | Ninguno | Ningún valor |
| Buscar una puntuación | Un array y un valor | Su posición o `-1` |

<aside class="java-document-note">
<p><strong>DEFINICIÓN</strong></p>
<p><strong>Método:</strong> bloque de instrucciones con un nombre que realiza una tarea. Piensa en una receta guardada: escribirla deja preparados los pasos; llamarla es pedir que se sigan. Puede necesitar datos para trabajar y puede devolver un resultado.</p>
</aside>

## Función y método

En estos apuntes usaremos el título **Funciones en Java**, pero el término habitual del lenguaje es **método**, porque estas operaciones se declaran como miembros de una clase. Ya has utilizado métodos: `System.out.println(...)`, `entrada.nextInt()` y `Arrays.sort(...)`. Ahora aprenderás a definir los tuyos.

Para centrarnos en la descomposición de problemas, declararemos nuestros métodos con `static`, junto a `main` y dentro de la misma clase. Más adelante estudiaremos los métodos que trabajan sobre objetos.

Guarda este primer ejemplo en **`PrimerMetodo.java`**:

```java
public class PrimerMetodo {
    public static void main(String[] args) {
        System.out.println(sumar(10, 5));
        System.out.println(sumar(20, 3));
    }

    public static int sumar(int puntos, int bonus) {
        return puntos + bonus;
    }
}
```

```text
15
23
```

En `sumar(10, 5)` pedimos que se ejecute el método con los valores `10` y `5`. Dentro de esa llamada, `puntos` vale `10` y `bonus` vale `5`. La instrucción `return` entrega `15` al lugar de la llamada, y `println` lo muestra. La segunda llamada realiza la misma operación con otros datos.

## Qué aprenderás a hacer

Aprenderás a elegir las entradas y la salida de cada método, declarar su cabecera y seguir el recorrido de las llamadas. Después explicarás por qué algunas modificaciones son visibles fuera del método y otras no; finalmente utilizarás sobrecarga, argumentos variables y recursión.

Necesitas manejar [variables y tipos](/ApuntesProgramacion/guides/introduccion-a-java/tipos-de-datos-variables-y-mas/), [condiciones y bucles](/ApuntesProgramacion/guides/introduccion-a-java/estructuras-de-control/), [entrada y salida](/ApuntesProgramacion/guides/introduccion-a-java/entrada-y-salida-de-datos/) y [arrays](/ApuntesProgramacion/guides/introduccion-a-java/arrays/). Los ejemplos completos indicarán su archivo; los fragmentos necesitarán el contexto que se indique.
