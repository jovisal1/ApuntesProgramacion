---
title: Estructuras de salto
description: Estructuras de salto en Java.
sidebar:
  order: 4
---

<p>Java dispone de tres instrucciones que alteran el flujo normal de ejecución: <code>break</code>, <code>continue</code> y <code>return</code>.</p>

## break: salir del bucle

<p>Con <code>break</code> forzamos la <strong>terminación inmediata</strong> del bucle: se salta la comprobación de la condición y el código restante, y el programa continúa en la primera instrucción posterior al bucle.</p>

```java
class EjemploBreak {
    public static void main(String[] args) {
        for (int i = 0; i < 100; i++) {
            if (i == 10) break;          // termina el bucle cuando i vale 10
            System.out.println("i: " + i);
        }
        System.out.println("Bucle completado.");
    }
}
```

<p><strong>SALIDA POR CONSOLA</strong></p>

```text
i: 0
i: 1
i: 2
i: 3
i: 4
i: 5
i: 6
i: 7
i: 8
i: 9
Bucle completado.
```

<p>Si usamos <code>break</code> dentro de <strong>bucles anidados</strong>, solo termina el bucle en el que está escrito (el más interno), no todos:</p>

```java
class EjemploBreakAnidado {
    public static void main(String[] args) {
        for (int i = 0; i < 3; i++) {
            System.out.print("Paso " + i + ": ");
            for (int j = 0; j < 100; j++) {
                if (j == 10) break;      // solo termina el bucle de j
                System.out.print(j + " ");
            }
            System.out.println();
        }
        System.out.println("Bucles completados.");
    }
}
```

<p><strong>SALIDA POR CONSOLA</strong></p>

```text
Paso 0: 0 1 2 3 4 5 6 7 8 9
Paso 1: 0 1 2 3 4 5 6 7 8 9
Paso 2: 0 1 2 3 4 5 6 7 8 9
Bucles completados.
```

<aside class="java-document-note">
<p><strong>CURIOSIDAD</strong></p>
<p>Si quieres salir de <strong>varios bucles a la vez</strong>, Java permite ponerle una etiqueta al bucle exterior y usar <code>break etiqueta;</code>:</p>
</aside>

```java
externo:
for (int i = 0; i < 3; i++) {
    for (int j = 0; j < 3; j++) {
        if (i * j == 2) break externo;   // sale de AMBOS bucles
        System.out.println(i + "," + j);
    }
}
```

<p><strong>SALIDA POR CONSOLA</strong></p>

```text
0,0
0,1
0,2
1,0
1,1
```

## continue: saltarse esta vuelta

<p>A veces queremos que el bucle siga, pero que en una vuelta concreta <strong>no se ejecute el resto del código</strong>. Eso es <code>continue</code>. A diferencia de <code>break</code>, que termina el bucle, <code>continue</code> solo abandona la vuelta actual y <strong>pasa a la siguiente</strong>.</p>

```java
class EjemploContinue {
    public static void main(String[] args) {
        for (int i = 0; i < 10; i++) {
            if (i % 2 == 0) continue;    // i par: pasa a la siguiente vuelta
            System.out.print(i + " ");
        }
    }
}
```

<p><strong>SALIDA POR CONSOLA</strong></p>

```text
1 3 5 7 9
```

<aside class="java-document-note">
<p><strong>IDEA CLAVE</strong></p>
<p><strong><code>break</code> = «me voy del bucle». <code>continue</code> = «paso a la siguiente vuelta».</strong> Un buen truco para no confundirlos: el <code>break</code> rompe, el <code>continue</code> continúa.</p>
</aside>

## return: volver de un método

<p><code>return</code> se usa para <strong>salir de un método</strong> (los estudiaremos más adelante en el curso): el control del programa vuelve al lugar desde el que se llamó al método. En el método <code>main</code>, un <code>return</code> finaliza el programa.</p>

```java
class EjemploReturn {
    public static void main(String[] args) {
        boolean t = true;
        System.out.println("Antes del return.");
        if (t) return;                       // aquí termina el método main
        System.out.println("Esta línea no se ejecutará");
    }
}
```

<p><strong>SALIDA POR CONSOLA</strong></p>

```text
Antes del return.
```








## Repaso

<div class="java-document-table">
<table>
<tr>
<th scope="col"><p><strong>Tema</strong></p></th>
<th scope="col"><p><strong>Lo que debes recordar</strong></p></th>
</tr>
<tr>
<td><p><strong>Salto</strong></p></td>
<td><p><code>break</code> sale del bucle · <code>continue</code> salta a la siguiente vuelta · <code>return</code> sale del método.</p></td>
</tr>
</table>
</div>

## Errores frecuentes

No confundas el efecto de las tres instrucciones: `break` abandona el bucle, `continue` pasa a la siguiente vuelta y `return` sale de `main` en los ejemplos de esta página. En bucles anidados, un `break` sin etiqueta solo abandona el bucle más próximo.
