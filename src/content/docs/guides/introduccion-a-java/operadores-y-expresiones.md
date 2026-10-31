---
title: Operadores y expresiones
description: Calcular resultados y construir comparaciones y condiciones.
sidebar:
  order: 4
tableOfContents:
  minHeadingLevel: 2
  maxHeadingLevel: 2
---

Un operador actúa sobre valores o variables, sus **operandos**. Empieza por los cálculos, continúa con las comparaciones y combina después condiciones.

### Operadores aritméticos

<p>Son los de toda la vida, los que usas en un problema de matemáticas:</p>

<div class="java-document-table">
<table>
<tr>
<th scope="col"><p><strong>Operador</strong></p></th>
<th scope="col"><p><strong>Nombre</strong></p></th>
<th scope="col"><p><strong>Ejemplo</strong></p></th>
<th scope="col"><p><strong>Resultado</strong></p></th>
</tr>
<tr>
<td><p><code>+</code></p></td>
<td><p>Suma</p></td>
<td><p><code>7 + 2</code></p></td>
<td><p>9</p></td>
</tr>
<tr>
<td><p><code>-</code></p></td>
<td><p>Resta</p></td>
<td><p><code>7 - 2</code></p></td>
<td><p>5</p></td>
</tr>
<tr>
<td><p><code>*</code></p></td>
<td><p>Multiplicación</p></td>
<td><p><code>7 * 2</code></p></td>
<td><p>14</p></td>
</tr>
<tr>
<td><p><code>/</code></p></td>
<td><p>División</p></td>
<td><p><code>7 / 2</code></p></td>
<td><p>3  (¡enteros!)</p></td>
</tr>
<tr>
<td><p><code>/</code></p></td>
<td><p>División</p></td>
<td><p><code>7 / 2.0</code></p></td>
<td><p>3.5</p></td>
</tr>
<tr>
<td><p><code>%</code></p></td>
<td><p>Resto (módulo)</p></td>
<td><p><code>7 % 2</code></p></td>
<td><p>1</p></td>
</tr>
<tr>
<td><p><code>-</code></p></td>
<td><p>Cambio de signo (unario)</p></td>
<td><p><code>-x</code></p></td>
<td><p>El opuesto de x</p></td>
</tr>
</table>
</div>

<aside class="java-document-note">
<p><strong>OJO CON ESTO</strong></p>
<p><strong>División entera:</strong> si dividimos dos enteros, el resultado también es entero y <strong>se descartan los decimales</strong>: <code>7 / 2</code> da 3, no 3,5. Para obtener decimales, al menos uno de los operandos debe ser decimal (<code>7 / 2.0</code>). Además, dividir un entero entre 0 lanza un error (<code>ArithmeticException</code>), mientras que con decimales el resultado es <code>Infinity</code>.</p>
<p><strong>TRUCO</strong></p>
<p>El operador <code>%</code> es más útil de lo que parece: <code>n % 2 == 0</code> te dice si un número es par, y <code>n % 10</code> te da su última cifra.</p>
</aside>

<p>Veamos un ejemplo completo. Fíjate en cómo cambian los resultados entre enteros y decimales al hacer exactamente las mismas operaciones:</p>

```java
class OperadoresAritmeticos {
    public static void main(String[] args) {
        System.out.println("Aritméticos enteros");
        int a = 1 + 1;
        int b = a * 3;
        int c = b / 4;      // 6 / 4 = 1 (división entera)
        int d = c - a;
        int e = -d;
        System.out.println("a = " + a);
        System.out.println("b = " + b);
        System.out.println("c = " + c);
        System.out.println("d = " + d);
        System.out.println("e = " + e);

        System.out.println("\nAritméticos de coma flotante");
        double da = 1 + 1;
        double db = da * 3;
        double dc = db / 4; // 6.0 / 4 = 1.5
        double dd = dc - a;
        double de = -dd;
        System.out.println("da = " + da);
        System.out.println("db = " + db);
        System.out.println("dc = " + dc);
        System.out.println("dd = " + dd);
        System.out.println("de = " + de);
    }
}
```

<p><strong>SALIDA POR CONSOLA</strong></p>

```text
Aritméticos enteros
a = 2
b = 6
c = 1
d = -1
e = 1

Aritméticos de coma flotante
da = 2.0
db = 6.0
dc = 1.5
dd = -0.5
de = 0.5
```

### Aumentar o reducir una unidad

En instrucciones separadas, `++` suma una unidad y `--` resta una. Deja los incrementos dentro de expresiones para la ampliación.

```java
int puntos = 3;
puntos++;
System.out.println(puntos); // 4
```

### Operadores aritméticos combinados

<p>Combinan una operación aritmética con la asignación, y sirven para escribir menos. <code>a += 5</code> es una forma abreviada de <code>a = a + 5</code>. Como en los aritméticos normales, los operandos pueden ser enteros o reales y el tipo del resultado depende de ellos.</p>

<div class="java-document-table">
<table>
<tr>
<th scope="col"><p><strong>Operador</strong></p></th>
<th scope="col"><p><strong>Ejemplo</strong></p></th>
<th scope="col"><p><strong>Equivale a</strong></p></th>
</tr>
<tr>
<td><p><code>+=</code></p></td>
<td><p><code>a += 5</code></p></td>
<td><p><code>a = a + 5</code></p></td>
</tr>
<tr>
<td><p><code>-=</code></p></td>
<td><p><code>a -= 5</code></p></td>
<td><p><code>a = a - 5</code></p></td>
</tr>
<tr>
<td><p><code>*=</code></p></td>
<td><p><code>a *= 5</code></p></td>
<td><p><code>a = a * 5</code></p></td>
</tr>
<tr>
<td><p><code>/=</code></p></td>
<td><p><code>a /= 5</code></p></td>
<td><p><code>a = a / 5</code></p></td>
</tr>
<tr>
<td><p><code>%=</code></p></td>
<td><p><code>a %= 5</code></p></td>
<td><p><code>a = a % 5</code></p></td>
</tr>
</table>
</div>

```java
class OperadoresAritmeticosCombinados {
    public static void main(String[] args) {
        int a = 1;
        int b = 2;
        int c = 3;
        a += 5;        // a = 1 + 5      -> 6
        b *= 4;        // b = 2 * 4      -> 8
        c += a * b;    // c = 3 + (6*8)  -> 51
        c %= 6;        // c = 51 % 6     -> 3
        System.out.println("a = " + a);
        System.out.println("b = " + b);
        System.out.println("c = " + c);
    }
}
```

<p><strong>SALIDA POR CONSOLA</strong></p>

```text
a = 6
b = 8
c = 3
```

### Operadores de relación

<p>Comparan dos valores y siempre devuelven un <strong>boolean</strong> (<code>true</code> o <code>false</code>). Se pueden usar con datos numéricos, caracteres y booleanos, pero los booleanos solo admiten los operadores de igualdad y desigualdad.</p>

<div class="java-document-table">
<table>
<tr>
<th scope="col"><p><strong>Operador</strong></p></th>
<th scope="col"><p><strong>Significado</strong></p></th>
<th scope="col"><p><strong>Ejemplo</strong></p></th>
<th scope="col"><p><strong>Resultado</strong></p></th>
</tr>
<tr>
<td><p><code>==</code></p></td>
<td><p>Igual a</p></td>
<td><p><code>5 == 5</code></p></td>
<td><p>true</p></td>
</tr>
<tr>
<td><p><code>!=</code></p></td>
<td><p>Distinto de</p></td>
<td><p><code>5 != 3</code></p></td>
<td><p>true</p></td>
</tr>
<tr>
<td><p><code>&lt;</code></p></td>
<td><p>Menor que</p></td>
<td><p><code>3 &lt; 2</code></p></td>
<td><p>false</p></td>
</tr>
<tr>
<td><p><code>&gt;</code></p></td>
<td><p>Mayor que</p></td>
<td><p><code>3 &gt; 2</code></p></td>
<td><p>true</p></td>
</tr>
<tr>
<td><p><code>&lt;=</code></p></td>
<td><p>Menor o igual que</p></td>
<td><p><code>4 &lt;= 4</code></p></td>
<td><p>true</p></td>
</tr>
<tr>
<td><p><code>&gt;=</code></p></td>
<td><p>Mayor o igual que</p></td>
<td><p><code>2 &gt;= 3</code></p></td>
<td><p>false</p></td>
</tr>
</table>
</div>

<aside class="java-document-note">
<p><strong>OJO CON ESTO</strong></p>
<p><strong>No confundas `=` con `==`.</strong> El primero <strong>asigna</strong> un valor (<code>edad = 18</code> guarda un 18); el segundo <strong>compara</strong> (<code>edad == 18</code> pregunta si vale 18). Es uno de los errores más comunes de quien empieza.</p>
<p>Y una advertencia para más adelante: con textos (<code>String</code>) no se compara con <code>==</code> sino con <code>equals()</code>. Lo verás en el capítulo 8.</p>
</aside>

### Condiciones con booleanos

Una comparación produce `true` o `false`. Para combinar condiciones utilizamos `&&` (las dos deben ser ciertas), `||` (al menos una es cierta) y `!` (niega el valor).

```java
int edad = 20;
boolean tieneEntrada = true;
boolean puedeEntrar = edad >= 18 && tieneEntrada;
System.out.println(puedeEntrar); // true
System.out.println(!tieneEntrada); // false
```

Con `&&`, si la primera condición es falsa, no se evalúa la segunda; con `||`, no se evalúa si la primera es cierta. Tienes un ejemplo de seguridad en la ampliación de cortocircuito.

## Expresiones

<p><em>Una expresión es como una frase de matemáticas: junta números, símbolos y paréntesis, y al leerla completa obtienes un único resultado. La pregunta es: ¿qué parte se lee primero?</em></p>

<p>Una <strong>expresión</strong> es una combinación de operadores y operandos que se evalúa produciendo <strong>un único resultado de un tipo determinado</strong>. Los operandos pueden ser valores, variables o incluso llamadas a métodos.</p>

<div class="java-document-table">
<table>
<tr>
<th scope="col"><p><strong>Expresión</strong></p></th>
<th scope="col"><p><strong>Resultado</strong></p></th>
<th scope="col"><p><strong>Tipo</strong></p></th>
</tr>
<tr>
<td><p><code>3 + 4</code></p></td>
<td><p>7</p></td>
<td><p><code>int</code></p></td>
</tr>
<tr>
<td><p><code>edad &gt;= 18</code></p></td>
<td><p>true o false</p></td>
<td><p><code>boolean</code></p></td>
</tr>
<tr>
<td><p><code>"Hola " + nombre</code></p></td>
<td><p>Un texto</p></td>
<td><p><code>String</code></p></td>
</tr>
<tr>
<td><p><code>Math.sqrt(16)</code></p></td>
<td><p>4.0</p></td>
<td><p><code>double</code></p></td>
</tr>
</table>
</div>

### El tipo del resultado

<p>Cuando en una misma operación se mezclan tipos distintos, Java <strong>promociona</strong> los operandos al tipo «más grande» según las reglas de promoción numérica; algunas conversiones pueden perder precisión. Estas son las reglas básicas:</p>

<div class="java-document-table">
<table>
<tr>
<th scope="col"><p><strong>Si en la operación hay…</strong></p></th>
<th scope="col"><p><strong>El resultado es…</strong></p></th>
<th scope="col"><p><strong>Ejemplo</strong></p></th>
</tr>
<tr>
<td><p><code>byte</code>, <code>short</code> o <code>char</code> (y nada mayor)</p></td>
<td><p><code>int</code></p></td>
<td><p><code>'a' + 1</code> → 98</p></td>
</tr>
<tr>
<td><p>Algún <code>long</code></p></td>
<td><p><code>long</code></p></td>
<td><p><code>5 + 10L</code> → 15L</p></td>
</tr>
<tr>
<td><p>Algún <code>float</code></p></td>
<td><p><code>float</code></p></td>
<td><p><code>5 + 2.0F</code> → 7.0F</p></td>
</tr>
<tr>
<td><p>Algún <code>double</code></p></td>
<td><p><code>double</code></p></td>
<td><p><code>5 / 2.0</code> → 2.5</p></td>
</tr>
</table>
</div>

### Prioridad y paréntesis

Primero se calculan las multiplicaciones, divisiones y restos de división; después, las sumas y restas. Las comparaciones van antes de `&&` y `||`. Utiliza paréntesis para expresar la intención.

```java
System.out.println(2 + 3 * 4);   // 14
System.out.println((2 + 3) * 4); // 20
```

## Practica antes de continuar

Predice el resultado de 7 / 2, 7 / 2.0 y 2 + 3 * 4. Compruébalo y explica la diferencia.

<details>
<summary>Ver una solución</summary>

```java
System.out.println(7 / 2);       // 3
System.out.println(7 / 2.0);     // 3.5
System.out.println(2 + 3 * 4);  // 14
```

</details>

## Repaso esencial

<div class="java-document-table">
<table>
<tr>
<th scope="col"><p><strong>Tema</strong></p></th>
<th scope="col"><p><strong>Lo que debes recordar</strong></p></th>
</tr>
<tr>
<td><p><strong>División</strong></p></td>
<td><p><code>7 / 2</code> = 3 (enteros) · <code>7 / 2.0</code> = 3.5 · <code>7 % 2</code> = 1.</p></td>
</tr>
<tr>
<td><p><strong>Incremento</strong></p></td>
<td><p><code>a++</code> usa y luego suma · <code>++a</code> suma y luego usa.</p></td>
</tr>
<tr>
<td><p><strong>Lógicos</strong></p></td>
<td><p>Usa <code>&amp;&amp;</code>, <code>||</code> y <code>!</code> (con cortocircuito).</p></td>
</tr>
<tr>
<td><p><strong>Prioridad</strong></p></td>
<td><p>Aritméticos &gt; relación &gt; lógicos &gt; asignación. Ante la duda, paréntesis.</p></td>
</tr>
</table>
</div>

## Errores frecuentes

<div class="java-document-table">
<table>
<tr>
<th scope="col"><p><strong>El error</strong></p></th>
<th scope="col"><p><strong>Cómo evitarlo</strong></p></th>
</tr>
<tr>
<td><p>Usar <code>=</code> en lugar de <code>==</code> en una condición</p></td>
<td><p><code>=</code> asigna, <code>==</code> compara.</p></td>
</tr>
<tr>
<td><p>Dividir enteros esperando decimales (<code>7 / 2</code> da 3)</p></td>
<td><p>Haz que uno de los operandos sea decimal: <code>7 / 2.0</code>.</p></td>
</tr>
</table>
</div>

## Ampliaciones opcionales

No necesitas dominar estos detalles para continuar con el siguiente paso. Abre solo lo que quieras profundizar.

<details class="java-extension">
<summary>Incrementos dentro de expresiones</summary>

<p><strong>Operadores aritméticos incrementales</strong></p>

<p><code>++</code> suma 1 a una variable y <code>--</code> le resta 1. Son operadores <strong>unarios</strong> (tienen un solo operando) y el operando puede ser numérico o de tipo <code>char</code>. Lo interesante es que se pueden colocar <strong>antes</strong> o <strong>después</strong> de la variable, y el resultado cambia:</p>

<div class="java-document-table">
<table>
<tr>
<th scope="col"><p><strong>Forma</strong></p></th>
<th scope="col"><p><strong>Nombre</strong></p></th>
<th scope="col"><p><strong>Qué hace</strong></p></th>
</tr>
<tr>
<td><p><code>a++</code></p></td>
<td><p>Postfijo</p></td>
<td><p>Primero <strong>usa</strong> el valor actual y <strong>después</strong> suma 1</p></td>
</tr>
<tr>
<td><p><code>++a</code></p></td>
<td><p>Prefijo</p></td>
<td><p>Primero <strong>suma</strong> 1 y <strong>después</strong> usa el nuevo valor</p></td>
</tr>
<tr>
<td><p><code>a--</code> / <code>--a</code></p></td>
<td><p>Postfijo / prefijo</p></td>
<td><p>Lo mismo, pero restando 1</p></td>
</tr>
</table>
</div>

<aside class="java-document-note">
<p><strong>IDEA CLAVE</strong></p>
<p>Piénsalo como en una cafetería. <strong>Prefijo (`++a`):</strong> «pídeme el café y cóbrame ya». <strong>Postfijo (`a++`):</strong> «tráeme el café y cóbramelo después». La variable acaba igual en ambos casos; la diferencia está en <strong>qué valor se usa en la propia línea</strong>.</p>
</aside>

```java
class OperadoresAritmeticosIncrementales {
    public static void main(String[] args) {
        int a = 1;
        int b = 2;
        int c;
        int d;
        c = ++b;    // b pasa a 3 y ENTONCES se copia en c
        d = a++;    // se copia el 1 en d y DESPUÉS a pasa a 2
        c++;        // c pasa de 3 a 4
        System.out.println("a = " + a);
        System.out.println("b = " + b);
        System.out.println("c = " + c);
        System.out.println("d = " + d);
    }
}
```

<p><strong>SALIDA POR CONSOLA</strong></p>

```text
a = 2
b = 3
c = 4
d = 1
```

<p>Siguiendo el programa paso a paso, los valores van cambiando así:</p>

<div class="java-document-table">
<table>
<tr>
<th scope="col"><p><strong>Instrucción</strong></p></th>
<th scope="col"><p><strong>a</strong></p></th>
<th scope="col"><p><strong>b</strong></p></th>
<th scope="col"><p><strong>c</strong></p></th>
<th scope="col"><p><strong>d</strong></p></th>
</tr>
<tr>
<td><p>Valores iniciales</p></td>
<td><p>1</p></td>
<td><p>2</p></td>
<td><p>—</p></td>
<td><p>—</p></td>
</tr>
<tr>
<td><p><code>c = ++b;</code></p></td>
<td><p>1</p></td>
<td><p>3</p></td>
<td><p>3</p></td>
<td><p>—</p></td>
</tr>
<tr>
<td><p><code>d = a++;</code></p></td>
<td><p>2</p></td>
<td><p>3</p></td>
<td><p>3</p></td>
<td><p>1</p></td>
</tr>
<tr>
<td><p><code>c++;</code></p></td>
<td><p>2</p></td>
<td><p>3</p></td>
<td><p>4</p></td>
<td><p>1</p></td>
</tr>
</table>
</div>


</details>

<details class="java-extension">
<summary>Cortocircuito</summary>

<p><strong>Cortocircuito: dejar de evaluar cuando ya se sabe la respuesta</strong></p>

<p>Con <code>&amp;&amp;</code>, si el primer operando ya es falso, el resultado será falso pase lo que pase, así que Java <strong>ni siquiera evalúa el segundo</strong>. Con <code>||</code> ocurre lo mismo cuando el primero es verdadero. Es como decir «si el primer semáforo ya está en rojo, no hace falta mirar el segundo». Y además es una herramienta de seguridad:</p>

```java
int a = 10, b = 0;
if (b != 0 && a / b > 2) {          // como b es 0, la división ni se intenta
    System.out.println("El cociente es mayor que 2");
}
```

<aside class="java-document-note">
<p><strong>TRUCO</strong></p>
<p>En la práctica usa siempre <code>&amp;&amp;</code> y <code>||</code>. Los operadores <code>&amp;</code> y <code>|</code> sin cortocircuito se reservan para casos muy concretos (o para operar con bits, como verás a continuación).</p>
</aside>


</details>

<details class="java-extension">
<summary>Operadores de bits</summary>

<p><strong>Operadores de bit</strong></p>

<p>Trabajan <strong>bit a bit</strong>, es decir, con los ceros y unos de la representación binaria de un número entero (o <code>char</code>). Aunque al principio parezcan exóticos, se usan en gráficos, criptografía, permisos de ficheros y programación de bajo nivel. Todos son binarios excepto la negación <code>~</code>.</p>

<div class="java-document-table">
<table>
<tr>
<th scope="col"><p><strong>Operador</strong></p></th>
<th scope="col"><p><strong>Nombre</strong></p></th>
<th scope="col"><p><strong>Qué hace</strong></p></th>
</tr>
<tr>
<td><p><code>~</code></p></td>
<td><p>NOT bit a bit</p></td>
<td><p>Invierte todos los bits</p></td>
</tr>
<tr>
<td><p><code>&amp;</code></p></td>
<td><p>AND</p></td>
<td><p>1 solo si ambos bits son 1</p></td>
</tr>
<tr>
<td><p><code>|</code></p></td>
<td><p>OR</p></td>
<td><p>1 si al menos un bit es 1</p></td>
</tr>
<tr>
<td><p><code>^</code></p></td>
<td><p>XOR</p></td>
<td><p>1 si los bits son distintos</p></td>
</tr>
<tr>
<td><p><code>&lt;&lt;</code></p></td>
<td><p>Desplazamiento a la izquierda</p></td>
<td><p>Mueve los bits a la izquierda (equivale a multiplicar por 2 en cada posición)</p></td>
</tr>
<tr>
<td><p><code>&gt;&gt;</code></p></td>
<td><p>Desplazamiento a la derecha</p></td>
<td><p>Mueve los bits a la derecha conservando el signo (divide entre 2)</p></td>
</tr>
<tr>
<td><p><code>&gt;&gt;&gt;</code></p></td>
<td><p>Desplazamiento a la derecha sin signo</p></td>
<td><p>Como &gt;&gt;, pero rellena con ceros por la izquierda</p></td>
</tr>
</table>
</div>

```java
int a = 5;   // 0101 en binario
int b = 3;   // 0011 en binario
System.out.println(a & b);    // 0001 -> 1
System.out.println(a | b);    // 0111 -> 7
System.out.println(a ^ b);    // 0110 -> 6
System.out.println(~a);       // invierte todos los bits -> -6
System.out.println(a << 1);   // 1010 -> 10  (5 * 2)
System.out.println(a >> 1);   // 0010 -> 2   (5 / 2)
```

<p><strong>SALIDA POR CONSOLA</strong></p>

```text
1
7
6
-6
10
2
```


</details>

<details class="java-extension">
<summary>Operador ternario</summary>

<p><strong>Operador ternario ( ? : )</strong></p>

<p>Java incluye un operador especial de <strong>tres operandos</strong> que sustituye a ciertos <code>if-else</code> sencillos. Puede parecer raro al principio, pero cuando lo dominas es muy cómodo. Su forma general es:</p>

```text
condicion ? valorSiVerdadero : valorSiFalso
```

<p>Se evalúa la condición (que debe ser un <code>boolean</code>): si es verdadera, el resultado es la segunda expresión; si es falsa, la tercera. Ambas deben devolver el mismo tipo (o tipos compatibles). Mira cómo calcula el valor absoluto de un número:</p>

```java
class OperadorTernario {
    public static void main(String[] args) {
        int i, k;
        i = 10;
        k = i < 0 ? -i : i;     // si i es negativo, cambia su signo
        System.out.print("Valor absoluto de ");
        System.out.println(i + " es " + k);

        i = -10;
        k = i < 0 ? -i : i;
        System.out.print("Valor absoluto de ");
        System.out.println(i + " es " + k);
    }
}
```

<p><strong>SALIDA POR CONSOLA</strong></p>

```text
Valor absoluto de 10 es 10
Valor absoluto de -10 es 10
```

<p>La línea <code>k = i &lt; 0 ? -i : i;</code> equivale exactamente a este <code>if-else</code>, pero en una sola línea:</p>

Este fragmento presupone `int i = -5;` e `int k;`, como en el ejemplo anterior.

```java
if (i < 0) {
    k = -i;
} else {
    k = i;
}
```

<aside class="java-document-note">
<p><strong>OJO CON ESTO</strong></p>
<p>Úsalo para decisiones <strong>sencillas</strong>. Si empiezas a anidar ternarios dentro de ternarios, el código se vuelve ilegible y es mejor volver al <code>if-else</code>.</p>
</aside>


</details>

<details class="java-extension">
<summary>Mapa completo, separadores y prioridad</summary>

<p><strong>Operadores</strong></p>

<p><em>Si las variables son los sustantivos de un programa, los operadores son los verbos: suman, comparan, deciden. Sin ellos, los datos se quedarían quietos en sus cajas.</em></p>

<p>Como vimos en la unidad de algoritmos, los operadores son una pieza esencial para resolver problemas. Java dispone de un auténtico ecosistema de ellos. Este es el mapa general:</p>

<div class="java-document-table">
<table>
<tr>
<th scope="col"><p><strong>Categoría</strong></p></th>
<th scope="col"><p><strong>Operadores</strong></p></th>
<th scope="col"><p><strong>El resultado es…</strong></p></th>
</tr>
<tr>
<td><p>Aritméticos</p></td>
<td><p><code>+  -  *  /  %</code></p></td>
<td><p>Un número</p></td>
</tr>
<tr>
<td><p>Incrementales</p></td>
<td><p><code>++  --</code></p></td>
<td><p>Un número</p></td>
</tr>
<tr>
<td><p>Combinados</p></td>
<td><p><code>+=  -=  *=  /=  %=</code></p></td>
<td><p>Un número (y se asigna)</p></td>
</tr>
<tr>
<td><p>De relación</p></td>
<td><p><code>==  !=  &lt;  &gt;  &lt;=  &gt;=</code></p></td>
<td><p>Un boolean</p></td>
</tr>
<tr>
<td><p>Lógicos</p></td>
<td><p><code>&amp;&amp;  ||  !  &amp;  |  ^</code></p></td>
<td><p>Un boolean</p></td>
</tr>
<tr>
<td><p>De bit</p></td>
<td><p><code>~  &amp;  |  ^  &lt;&lt;  &gt;&gt;  &gt;&gt;&gt;</code></p></td>
<td><p>Un entero</p></td>
</tr>
<tr>
<td><p>Concatenación</p></td>
<td><p><code>+</code></p></td>
<td><p>Un String</p></td>
</tr>
<tr>
<td><p>Ternario</p></td>
<td><p><code>? :</code></p></td>
<td><p>Depende de los operandos</p></td>
</tr>
</table>
</div>

<p><strong>Separadores</strong></p>

<p>Algunos caracteres tienen un significado especial en Java: son los signos de puntuación del lenguaje, la «gramática» que permite al compilador entender dónde empieza y acaba cada cosa.</p>

<div class="java-document-table">
<table>
<tr>
<th scope="col"><p><strong>Símbolo</strong></p></th>
<th scope="col"><p><strong>Nombre</strong></p></th>
<th scope="col"><p><strong>Para qué se usa</strong></p></th>
</tr>
<tr>
<td><p><code>( )</code></p></td>
<td><p>Paréntesis</p></td>
<td><p>Agrupar operaciones, encerrar condiciones y listas de parámetros de un método</p></td>
</tr>
<tr>
<td><p><code>{ }</code></p></td>
<td><p>Llaves</p></td>
<td><p>Delimitar bloques de código y dar valores iniciales a un array</p></td>
</tr>
<tr>
<td><p><code>[ ]</code></p></td>
<td><p>Corchetes</p></td>
<td><p>Declarar arrays y acceder a sus elementos</p></td>
</tr>
<tr>
<td><p><code>;</code></p></td>
<td><p>Punto y coma</p></td>
<td><p>Terminar una sentencia</p></td>
</tr>
<tr>
<td><p><code>,</code></p></td>
<td><p>Coma</p></td>
<td><p>Separar variables en una declaración o parámetros en una llamada</p></td>
</tr>
<tr>
<td><p><code>.</code></p></td>
<td><p>Punto</p></td>
<td><p>Acceder a los miembros de un objeto o a un paquete (<code>System.out</code>)</p></td>
</tr>
</table>
</div>

<aside class="java-document-note">
<p><strong>MINI-RETO</strong></p>
<p>Sin ejecutar el código, ¿cuánto valen <code>x</code> e <code>y</code> al final?</p>
</aside>

```java
int x = 5;
int y = x++ + ++x;
```

<details>
<summary>Ver solución</summary>

<p><strong>Solución:</strong> <code>y = 12</code> y <code>x = 7</code>. Primero <code>x++</code> usa el 5 y deja x en 6; luego <code>++x</code> sube x a 7 y usa ese 7. Por tanto y = 5 + 7 = 12.</p>

</details>

<aside class="java-document-note">
<p><strong>EN RESUMEN</strong></p>
<ul>
<li>Los operadores <strong>aritméticos</strong> con enteros dan enteros: <code>7 / 2</code> es 3.</li>
<li><code>a++</code> usa y luego suma; <code>++a</code> suma y luego usa.</li>
<li>Para combinar condiciones usa <code>&amp;&amp;</code>, <code>||</code> y <code>!</code>.</li>
<li>El <code>+</code> con textos concatena, y el orden de los operandos importa.</li>
<li>El <strong>ternario</strong> <code>? :</code> es un <code>if-else</code> en miniatura.</li>
</ul>
</aside>

<p><strong>Prioridad entre operadores</strong></p>

<p>Cuando aparecen varios operadores en la misma expresión, el orden en que se evalúan puede cambiar el resultado. Es lo que ocurre en matemáticas: <code>2 + 3 * 4</code> es 14 y no 20, porque la multiplicación tiene prioridad sobre la suma. Esta tabla recoge el orden en Java, <strong>de mayor a menor prioridad</strong>:</p>

<div class="java-document-table">
<table>
<tr>
<th scope="col"><p><strong>Nivel</strong></p></th>
<th scope="col"><p><strong>Operadores</strong></p></th>
<th scope="col"><p><strong>Descripción</strong></p></th>
</tr>
<tr>
<td><p>1</p></td>
<td><p><code>expr++   expr--</code></p></td>
<td><p>Postfijos</p></td>
</tr>
<tr>
<td><p>2</p></td>
<td><p><code>++expr   --expr   +expr   -expr   ~   !</code></p></td>
<td><p>Unarios (de derecha a izquierda)</p></td>
</tr>
<tr>
<td><p>3</p></td>
<td><p><code>*   /   %</code></p></td>
<td><p>Multiplicativos</p></td>
</tr>
<tr>
<td><p>4</p></td>
<td><p><code>+   -</code></p></td>
<td><p>Aditivos (y concatenación)</p></td>
</tr>
<tr>
<td><p>5</p></td>
<td><p><code>&lt;&lt;   &gt;&gt;   &gt;&gt;&gt;</code></p></td>
<td><p>Desplazamiento</p></td>
</tr>
<tr>
<td><p>6</p></td>
<td><p><code>&lt;   &gt;   &lt;=   &gt;=   instanceof</code></p></td>
<td><p>Relacionales</p></td>
</tr>
<tr>
<td><p>7</p></td>
<td><p><code>==   !=</code></p></td>
<td><p>Igualdad</p></td>
</tr>
<tr>
<td><p>8</p></td>
<td><p><code>&amp;</code></p></td>
<td><p>AND (bit / lógico)</p></td>
</tr>
<tr>
<td><p>9</p></td>
<td><p><code>^</code></p></td>
<td><p>XOR (bit / lógico)</p></td>
</tr>
<tr>
<td><p>10</p></td>
<td><p><code>|</code></p></td>
<td><p>OR (bit / lógico)</p></td>
</tr>
<tr>
<td><p>11</p></td>
<td><p><code>&amp;&amp;</code></p></td>
<td><p>AND lógico</p></td>
</tr>
<tr>
<td><p>12</p></td>
<td><p><code>||</code></p></td>
<td><p>OR lógico</p></td>
</tr>
<tr>
<td><p>13</p></td>
<td><p><code>? :</code></p></td>
<td><p>Ternario (de derecha a izquierda)</p></td>
</tr>
<tr>
<td><p>14</p></td>
<td><p><code>=   +=   -=   *=   /=   %=  …</code></p></td>
<td><p>Asignación (de derecha a izquierda)</p></td>
</tr>
</table>
</div>

<p>Y dos reglas más para completar el cuadro:</p>

<ul>
<li>Los operadores de <strong>la misma prioridad</strong> se evalúan de <strong>izquierda a derecha</strong> (<code>10 - 4 - 3</code> es <code>(10 - 4) - 3 = 3</code>). Las excepciones son los unarios, el ternario y la asignación, que van de derecha a izquierda.</li>
<li>Los <strong>paréntesis</strong> siempre ganan: lo que va entre paréntesis se evalúa primero.</li>
</ul>

<div class="java-document-table">
<table>
<tr>
<th scope="col"><p><strong>Expresión</strong></p></th>
<th scope="col"><p><strong>Cómo se evalúa</strong></p></th>
<th scope="col"><p><strong>Resultado</strong></p></th>
</tr>
<tr>
<td><p><code>2 + 3 * 4</code></p></td>
<td><p>3 * 4 = 12; luego 2 + 12</p></td>
<td><p><code>14</code></p></td>
</tr>
<tr>
<td><p><code>(2 + 3) * 4</code></p></td>
<td><p>2 + 3 = 5; luego 5 * 4</p></td>
<td><p><code>20</code></p></td>
</tr>
<tr>
<td><p><code>10 - 4 - 3</code></p></td>
<td><p>(10 - 4) - 3</p></td>
<td><p><code>3</code></p></td>
</tr>
<tr>
<td><p><code>8 / 2 * (2 + 2)</code></p></td>
<td><p>8 / 2 = 4; 4 * 4</p></td>
<td><p><code>16</code></p></td>
</tr>
</table>
</div>

<aside class="java-document-note">
<p><strong>TRUCO</strong></p>
<p>No hace falta memorizar la tabla de prioridades. Ante la duda, <strong>usa paréntesis</strong>: además de evitar errores, tu código será mucho más fácil de leer para los demás (y para ti dentro de seis meses).</p>
</aside>

<aside class="java-document-note">
<p><strong>MINI-RETO</strong></p>
<p>¿Cuánto vale <code>7 + 8 / 2 * 3 - 1</code>?</p>
<details>
<summary>Ver solución</summary>

<p><strong>Solución:</strong> 18. Primero <code>8 / 2 = 4</code>, luego <code>4 * 3 = 12</code>, después <code>7 + 12 = 19</code> y por último <code>19 - 1 = 18</code>.</p>

</details>
</aside>

<aside class="java-document-note">
<p><strong>EN RESUMEN</strong></p>
<ul>
<li>Una expresión siempre produce <strong>un valor de un tipo concreto</strong>.</li>
<li>Al mezclar tipos, Java promociona al más «grande».</li>
<li>Manda la <strong>prioridad</strong>; a igual prioridad, según su asociatividad (por ejemplo, la asignación se agrupa de derecha a izquierda); y los <strong>paréntesis</strong> mandan más que nadie.</li>
</ul>
</aside>


</details>

<details class="java-extension">
<summary>Otros operadores booleanos: &amp;, | y ^</summary>

<p><strong>Operadores lógicos o booleanos</strong></p>

<p>Trabajan con valores booleanos y devuelven un valor booleano. Sirven para <strong>combinar condiciones</strong>: «si tiene más de 18 años <strong>y</strong> tiene carné».</p>

<div class="java-document-table">
<table>
<tr>
<th scope="col"><p><strong>Operador</strong></p></th>
<th scope="col"><p><strong>Nombre</strong></p></th>
<th scope="col"><p><strong>Significado</strong></p></th>
</tr>
<tr>
<td><p><code>&amp;&amp;</code></p></td>
<td><p>AND (cortocircuito)</p></td>
<td><p>Verdadero si <strong>ambos</strong> son verdaderos</p></td>
</tr>
<tr>
<td><p><code>||</code></p></td>
<td><p>OR (cortocircuito)</p></td>
<td><p>Verdadero si <strong>al menos uno</strong> es verdadero</p></td>
</tr>
<tr>
<td><p><code>!</code></p></td>
<td><p>NOT</p></td>
<td><p>Invierte el valor: lo verdadero pasa a falso y viceversa</p></td>
</tr>
<tr>
<td><p><code>&amp;</code></p></td>
<td><p>AND (sin cortocircuito)</p></td>
<td><p>Como &amp;&amp;, pero siempre evalúa los dos lados</p></td>
</tr>
<tr>
<td><p><code>|</code></p></td>
<td><p>OR (sin cortocircuito)</p></td>
<td><p>Como ||, pero siempre evalúa los dos lados</p></td>
</tr>
<tr>
<td><p><code>^</code></p></td>
<td><p>XOR</p></td>
<td><p>Verdadero si <strong>uno y solo uno</strong> es verdadero</p></td>
</tr>
</table>
</div>

<p>Esta es su <strong>tabla de verdad</strong>, es decir, el resultado para cada combinación posible:</p>

<div class="java-document-table">
<table>
<tr>
<th scope="col"><p><strong>a</strong></p></th>
<th scope="col"><p><strong>b</strong></p></th>
<th scope="col"><p><strong>a &amp;&amp; b</strong></p></th>
<th scope="col"><p><strong>a || b</strong></p></th>
<th scope="col"><p><strong>a ^ b</strong></p></th>
</tr>
<tr>
<td><p><code>true</code></p></td>
<td><p><code>true</code></p></td>
<td><p><code>true</code></p></td>
<td><p><code>true</code></p></td>
<td><p><code>false</code></p></td>
</tr>
<tr>
<td><p><code>true</code></p></td>
<td><p><code>false</code></p></td>
<td><p><code>false</code></p></td>
<td><p><code>true</code></p></td>
<td><p><code>true</code></p></td>
</tr>
<tr>
<td><p><code>false</code></p></td>
<td><p><code>true</code></p></td>
<td><p><code>false</code></p></td>
<td><p><code>true</code></p></td>
<td><p><code>true</code></p></td>
</tr>
<tr>
<td><p><code>false</code></p></td>
<td><p><code>false</code></p></td>
<td><p><code>false</code></p></td>
<td><p><code>false</code></p></td>
<td><p><code>false</code></p></td>
</tr>
</table>
</div>

```java
class OperadoresLogBol {
    public static void main(String[] args) {
        boolean a = true;
        boolean b = false;
        boolean c = a | b;
        boolean d = a & b;
        boolean e = a ^ b;
        boolean f = (!a & b) | (a & !b);
        boolean g = !a;
        System.out.println("  a = " + a);
        System.out.println("  b = " + b);
        System.out.println("  a|b = " + c);
        System.out.println("  a&b = " + d);
        System.out.println("  a^b = " + e);
        System.out.println("  !a&b|a&!b = " + f);
        System.out.println("  !a = " + g);
    }
}
```

<p><strong>SALIDA POR CONSOLA</strong></p>

```text
  a = true
  b = false
  a|b = true
  a&b = false
  a^b = true
  !a&b|a&!b = true
  !a = false
```


</details>
