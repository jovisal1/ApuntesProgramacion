---
title: Tipos de datos, variables y más
description: Tipos primitivos, variables, constantes, operadores, expresiones, cadenas y parse.
sidebar:
  order: 3
---

## 1. Introducción

<p><em>Imagina una cocina profesional donde cada recipiente lleva una etiqueta: «sal», «azúcar», «harina». Si alguien intenta echar azúcar en el bote de la sal, el sistema salta una alarma antes de que el plato llegue a la mesa. Java funciona exactamente así con los datos.</em></p>

<p>En esta unidad vamos a estudiar los cimientos de Java: los <strong>tipos de datos</strong>, las <strong>variables</strong>, los <strong>operadores</strong>, las <strong>expresiones</strong> y las <strong>cadenas de texto</strong>. Con estas piezas podrás construir programas de verdad, así que merece la pena dominarlas bien.</p>

<p>Empecemos por lo más importante: Java es un lenguaje <strong>fuertemente tipado</strong>. Esto significa tres cosas:</p>

<ul>
<li><strong>Toda variable tiene un tipo</strong> (número entero, decimal, texto, verdadero/falso…).</li>
<li><strong>Toda expresión tiene un tipo</strong>: el resultado de cualquier cálculo también es de un tipo concreto.</li>
<li><strong>Cada tipo está estrictamente definido</strong>: sabemos exactamente qué valores admite y cuánta memoria ocupa.</li>
</ul>

<p>Además, Java comprueba la compatibilidad de tipos en <strong>todas las asignaciones</strong> y también cuando pasamos parámetros a un método. Si algo no encaja, el compilador se niega a generar el programa hasta que lo corrijas.</p>

```java
int edad = 20;
edad = "veinte";   // ERROR de compilación:
                   // incompatible types: String cannot be converted to int
```

<aside class="java-document-note">
<p><strong>IDEA CLAVE</strong></p>
<p>Que Java sea estricto no es un capricho: <strong>los errores se detectan al compilar, no cuando el usuario ya está usando tu programa</strong>. Es como corregir un examen antes de entregarlo, en lugar de descubrir los fallos cuando ya te han puesto la nota.</p>
<p><strong>CURIOSIDAD</strong></p>
<p>En lenguajes como Python o JavaScript el tipo se comprueba mientras el programa se ejecuta (tipado dinámico). Es más cómodo para scripts pequeños, pero en aplicaciones grandes puede esconder errores durante meses. Por eso Java es tan popular en el mundo empresarial y en Android.</p>
</aside>

## 2. Tipos primitivos

<p><em>Un tipo primitivo es como el tamaño de un recipiente: un chupito, un vaso, una jarra… Todos sirven para guardar líquido, pero elegir el tamaño adecuado evita derrames (errores) y desperdicio (memoria).</em></p>

<p>Java define <strong>8 tipos de datos primitivos</strong> (también llamados tipos simples o elementales): <code>byte</code>, <code>short</code>, <code>int</code>, <code>long</code>, <code>char</code>, <code>float</code>, <code>double</code> y <code>boolean</code>. No son objetos, sino valores «en crudo» guardados directamente en memoria, lo que los hace muy rápidos. Se agrupan en cuatro familias:</p>

<div class="java-document-table">
<table>
<tr>
<th scope="col"><p><strong>Familia</strong></p></th>
<th scope="col"><p><strong>Tipos</strong></p></th>
<th scope="col"><p><strong>Sirven para guardar…</strong></p></th>
</tr>
<tr>
<td><p><strong>Enteros</strong></p></td>
<td><p><code>byte</code>, <code>short</code>, <code>int</code>, <code>long</code></p></td>
<td><p>Números sin decimales, positivos o negativos</p></td>
</tr>
<tr>
<td><p><strong>Coma flotante</strong></p></td>
<td><p><code>float</code>, <code>double</code></p></td>
<td><p>Números con parte fraccionaria</p></td>
</tr>
<tr>
<td><p><strong>Caracteres</strong></p></td>
<td><p><code>char</code></p></td>
<td><p>Un único símbolo: una letra, un dígito, un signo…</p></td>
</tr>
<tr>
<td><p><strong>Booleanos</strong></p></td>
<td><p><code>boolean</code></p></td>
<td><p>Un valor lógico: verdadero o falso</p></td>
</tr>
</table>
</div>

<p>Este cuadro resume el tamaño y el rango de cada uno. No hace falta aprendérselo de memoria, pero sí tenerlo a mano:</p>

<div class="java-document-table">
<table>
<tr>
<th scope="col"><p><strong>Tipo</strong></p></th>
<th scope="col"><p><strong>Tamaño</strong></p></th>
<th scope="col"><p><strong>Rango de valores</strong></p></th>
<th scope="col"><p><strong>Ejemplo</strong></p></th>
</tr>
<tr>
<td><p><code>byte</code></p></td>
<td><p>8 bits</p></td>
<td><p>-128 a 127</p></td>
<td><p><code>byte b = 100;</code></p></td>
</tr>
<tr>
<td><p><code>short</code></p></td>
<td><p>16 bits</p></td>
<td><p>-32.768 a 32.767</p></td>
<td><p><code>short s = 1500;</code></p></td>
</tr>
<tr>
<td><p><code>int</code></p></td>
<td><p>32 bits</p></td>
<td><p>-2.147.483.648 a 2.147.483.647</p></td>
<td><p><code>int i = 70000;</code></p></td>
</tr>
<tr>
<td><p><code>long</code></p></td>
<td><p>64 bits</p></td>
<td><p>Aprox. ±9,2 × 10¹⁸</p></td>
<td><p><code>long l = 5000000000L;</code></p></td>
</tr>
<tr>
<td><p><code>float</code></p></td>
<td><p>32 bits</p></td>
<td><p>Unas 7 cifras de precisión</p></td>
<td><p><code>float f = 3.14F;</code></p></td>
</tr>
<tr>
<td><p><code>double</code></p></td>
<td><p>64 bits</p></td>
<td><p>Unas 15-16 cifras de precisión</p></td>
<td><p><code>double d = 3.14159;</code></p></td>
</tr>
<tr>
<td><p><code>char</code></p></td>
<td><p>16 bits</p></td>
<td><p>0 a 65.535 (Unicode)</p></td>
<td><p><code>char c = 'A';</code></p></td>
</tr>
<tr>
<td><p><code>boolean</code></p></td>
<td><p>1 bit lógico</p></td>
<td><p>true o false</p></td>
<td><p><code>boolean ok = true;</code></p></td>
</tr>
</table>
</div>

### 2.1 Enteros

<p>Los enteros de Java son <strong>con signo</strong>: admiten valores positivos y negativos. Cuantos más bits ocupan, mayor es su rango, pero más memoria consumen. Hay cuatro:</p>

<ul>
<li><strong>`byte`</strong>: el más pequeño. Es muy útil cuando trabajamos con flujos de datos (leer ficheros o recibir información por la red). Ejemplo: <code>byte b = 2;</code></li>
<li><strong>`short`</strong>: quizá el menos usado de todos. Ejemplo: <code>short s1 = 11;</code></li>
<li><strong>`int`</strong>: el rey de los enteros. Lo usarás constantemente: en contadores, bucles e índices de arrays. Ejemplo: <code>int i1 = 12;</code></li>
<li><strong>`long`</strong>: para cuando un <code>int</code> se queda pequeño. Al escribir el valor hay que añadir una <strong>L</strong> al final para avisar al compilador. Ejemplo: <code>long l1 = 9223372036854775807L;</code></li>
</ul>

<aside class="java-document-note">
<p><strong>IDEA CLAVE</strong></p>
<p><strong>Por qué casi siempre usamos `int`:</strong> aunque un valor sea pequeño y «quepa» en un <code>byte</code> o un <code>short</code>, Java realiza internamente las operaciones con <code>int</code>. Usar tipos más pequeños rara vez ahorra memoria y a menudo te obliga a hacer conversiones.</p>
</aside>

```java
byte a = 10, b = 20;
byte c = a + b;          // ERROR: a + b se calcula como int
byte d = (byte)(a + b);  // OK, con conversión explícita (cast)
int  e = a + b;          // OK y sin complicaciones
```

<aside class="java-document-note">
<p><strong>OJO CON ESTO</strong></p>
<p><strong>Cuidado con los ceros a la izquierda.</strong> En Java, un número que empieza por 0 se interpreta en <strong>octal</strong> (base 8). Por eso <code>int i = 010;</code> vale 8, no 10, y <code>int i = 09;</code> da error porque el dígito 9 no existe en octal.</p>
<p><strong>TRUCO</strong></p>
<p>Para leer mejor los números grandes puedes usar guiones bajos: <code>int millon = 1_000_000;</code>. Java los ignora. También puedes escribir en binario (<code>0b1010</code>) o en hexadecimal (<code>0xFF</code>).</p>
</aside>

#### Desbordamiento: cuando el contador da la vuelta

<p>Cada tipo tiene un límite. Si te pasas, Java <strong>no avisa</strong>: el valor «da la vuelta», igual que un cuentakilómetros que vuelve a cero.</p>

```java
int max = Integer.MAX_VALUE;   // 2147483647
System.out.println(max + 1);
```

<p><strong>SALIDA POR CONSOLA</strong></p>

```text
-2147483648
```

<p>Sumar 1 al mayor <code>int</code> posible nos deja en el menor. Si tus datos pueden crecer mucho (por ejemplo, un factorial), usa <code>long</code>.</p>

### 2.2 Números en coma flotante

<p>Sirven para números con decimales. Java ofrece dos: <code>float</code> (32 bits) y <code>double</code> (64 bits, mucho más preciso). Y aquí va una regla importante: <strong>los literales decimales son `double` por defecto</strong>. Si quieres un <code>float</code>, tienes que añadir una <strong>F</strong> al final (igual que la L de <code>long</code>).</p>

```java
double pi = 3.14159;
float f1 = 3.14159F;
float f2 = 3.14;      // ERROR: 3.14 es un double y no cabe en un float
```

<aside class="java-document-note">
<p><strong>OJO CON ESTO</strong></p>
<p><strong>Los decimales no siempre son exactos.</strong> Los ordenadores guardan los decimales en binario y algunos números (como 0,1) no tienen representación exacta:</p>
</aside>

```java
System.out.println(0.1 + 0.2);
```

<p><strong>SALIDA POR CONSOLA</strong></p>

```text
0.30000000000000004
```

<p>No es un fallo de Java, ocurre en todos los lenguajes. Por eso <strong>no se recomienda usar `double` para cantidades de dinero</strong> (más adelante conocerás <code>BigDecimal</code>). En la mayoría de casos usa <code>double</code> y olvídate de <code>float</code>.</p>

### 2.3 Booleanos

<p>El tipo <code>boolean</code> solo admite dos valores: <code>true</code> y <code>false</code>. Es el tipo de las decisiones: el resultado de cualquier comparación es un booleano. A diferencia de otros lenguajes, en Java <strong>`true` no es 1 ni `false` es 0</strong>: son valores lógicos puros y no se convierten a números.</p>

```java
boolean isOk = true;
boolean isNotOk = false;

int edad = 20;
boolean esMayorDeEdad = edad >= 18;   // true
```

<aside class="java-document-note">
<p><strong>OJO CON ESTO</strong></p>
<p>En Java no puedes escribir <code>if (1)</code> ni <code>while (0)</code> como en C. La condición debe ser siempre un <code>boolean</code>.</p>
</aside>

### 2.4 Caracteres

<p>El tipo <code>char</code> guarda <strong>un único carácter</strong> y se escribe entre <strong>comillas simples</strong>. Java usa el estándar <strong>Unicode</strong> (puedes consultarlo en unicodelookup.com), que con 16 bits (2 bytes) permite representar 65.536 símbolos distintos: letras y signos de muchos idiomas del mundo.</p>

```java
char letra = 'a';
char codigo = 65;    // equivale a 'A', porque el código Unicode de A es 65
```

<p>Esto ocurre porque, en el fondo, un <code>char</code> es un número: el código de su símbolo. Por eso podemos hacer cosas como incrementarlo:</p>

```java
class EjemploChar {
    public static void main(String[] args) {
        char ch1, ch2;
        ch1 = 88;              // código Unicode de 'X'
        ch2 = 'Y';
        System.out.print("ch1 y ch2: ");
        System.out.println(ch1 + " " + ch2);
        ch1++;                 // pasamos de 'X' a 'Y'
        System.out.println("ch1 ahora es " + ch1);
    }
}
```

<p><strong>SALIDA POR CONSOLA</strong></p>

```text
ch1 y ch2: X Y
ch1 ahora es Y
```

<aside class="java-document-note">
<p><strong>OJO CON ESTO</strong></p>
<p><code>'a'</code> (comillas simples) es un <strong>char</strong>; <code>"a"</code> (comillas dobles) es un <strong>String</strong>. Parecen lo mismo, pero son tipos distintos y no se pueden mezclar libremente.</p>
<p><strong>TRUCO</strong></p>
<p>Tres códigos que conviene recordar: <code>'0'</code> vale 48, <code>'A'</code> vale 65 y <code>'a'</code> vale 97. Fíjate en que entre una mayúscula y su minúscula hay siempre 32 de diferencia.</p>
</aside>

### 2.5 Valores por defecto

<p>Los tipos primitivos tienen un valor inicial por defecto, pero <strong>solo cuando la variable es un atributo de una clase o un elemento de un array</strong> (lo verás con detalle cuando estudiemos clases). Estos son los valores:</p>

<div class="java-document-table">
<table>
<tr>
<th scope="col"><p><strong>Tipo</strong></p></th>
<th scope="col"><p><strong>Valor por defecto</strong></p></th>
</tr>
<tr>
<td><p><code>byte, short, int, long</code></p></td>
<td><p><code>0</code></p></td>
</tr>
<tr>
<td><p><code>float, double</code></p></td>
<td><p><code>0.0</code></p></td>
</tr>
<tr>
<td><p><code>char</code></p></td>
<td><p><code>\u0000  (el carácter «nulo»)</code></p></td>
</tr>
<tr>
<td><p><code>boolean</code></p></td>
<td><p><code>false</code></p></td>
</tr>
<tr>
<td><p><code>Objetos (String, arrays…)</code></p></td>
<td><p><code>null  (no apunta a nada)</code></p></td>
</tr>
</table>
</div>

<aside class="java-document-note">
<p><strong>OJO CON ESTO</strong></p>
<p><strong>Las variables locales NO tienen valor por defecto.</strong> Una variable declarada dentro de un método debe inicializarse antes de usarla; si no, el compilador te lo impide.</p>
</aside>

```java
public class ValoresPorDefecto {
    static int contador;      // atributo: vale 0
    static boolean activo;    // atributo: vale false
    static String nombre;     // atributo: vale null

    public static void main(String[] args) {
        System.out.println(contador);
        System.out.println(activo);
        System.out.println(nombre);

        int local;
        // System.out.println(local);
        // ^ ERROR: variable might not have been initialized
    }
}
```

<p><strong>SALIDA POR CONSOLA</strong></p>

```text
0
false
null
```

### 2.6 Clases envoltorio

<p>Los tipos primitivos son rápidos, pero tienen una limitación: <strong>no son objetos</strong>. Y hay situaciones (como las colecciones que verás más adelante) en las que Java necesita objetos. Para eso existen las <strong>clases envoltorio</strong> (*wrapper classes*): cada primitivo tiene la suya, que «envuelve» su valor dentro de un objeto y le regala métodos muy útiles.</p>

<div class="java-document-table">
<table>
<tr>
<th scope="col"><p><strong>Tipo primitivo</strong></p></th>
<th scope="col"><p><strong>Clase envoltorio</strong></p></th>
</tr>
<tr>
<td><p><code>boolean</code></p></td>
<td><p><code>Boolean</code></p></td>
</tr>
<tr>
<td><p><code>byte</code></p></td>
<td><p><code>Byte</code></p></td>
</tr>
<tr>
<td><p><code>char</code></p></td>
<td><p><code>Character</code></p></td>
</tr>
<tr>
<td><p><code>short</code></p></td>
<td><p><code>Short</code></p></td>
</tr>
<tr>
<td><p><code>int</code></p></td>
<td><p><code>Integer</code></p></td>
</tr>
<tr>
<td><p><code>long</code></p></td>
<td><p><code>Long</code></p></td>
</tr>
<tr>
<td><p><code>float</code></p></td>
<td><p><code>Float</code></p></td>
</tr>
<tr>
<td><p><code>double</code></p></td>
<td><p><code>Double</code></p></td>
</tr>
</table>
</div>

<p>Java convierte automáticamente entre un primitivo y su envoltorio cuando hace falta. Estas conversiones se llaman <strong>autoboxing</strong> (empaquetar) y <strong>unboxing</strong> (desempaquetar):</p>

```java
Integer a = 150;                       // autoboxing: int -> Integer
int b = a;                             // unboxing:   Integer -> int
Integer c = Integer.valueOf("150");    // crear un Integer desde un texto

System.out.println(Integer.toBinaryString(10));   // 1010
System.out.println(Integer.toHexString(255));     // ff
System.out.println(Integer.toOctalString(8));     // 10
System.out.println(Integer.MAX_VALUE);            // 2147483647
```

<p>Estas son las familias de métodos más útiles de las clases envoltorio:</p>

<div class="java-document-table">
<table>
<tr>
<th scope="col"><p><strong>Para qué sirven</strong></p></th>
<th scope="col"><p><strong>Métodos</strong></p></th>
<th scope="col"><p><strong>Ejemplo</strong></p></th>
</tr>
<tr>
<td><p>De envoltorio a primitivo</p></td>
<td><p><code>byteValue()</code>, <code>shortValue()</code>, <code>intValue()</code>, <code>longValue()</code>, <code>floatValue()</code>, <code>doubleValue()</code></p></td>
<td><p><code>c.intValue()</code></p></td>
</tr>
<tr>
<td><p>De texto a primitivo</p></td>
<td><p><code>parseByte()</code>, <code>parseShort()</code>, <code>parseInt()</code>, <code>parseLong()</code>, <code>parseFloat()</code>, <code>parseDouble()</code></p></td>
<td><p><code>Integer.parseInt("42")</code></p></td>
</tr>
<tr>
<td><p>Cambiar de base (Integer y Long)</p></td>
<td><p><code>toBinaryString()</code>, <code>toOctalString()</code>, <code>toHexString()</code></p></td>
<td><p><code>Integer.toHexString(255)</code></p></td>
</tr>
<tr>
<td><p>Crear un objeto desde texto</p></td>
<td><p><code>valueOf()</code> (método estático)</p></td>
<td><p><code>Integer.valueOf("150")</code></p></td>
</tr>
</table>
</div>

<aside class="java-document-note">
<p><strong>MINI-RETO</strong></p>
<p>¿Qué imprimen estas dos líneas?</p>
<ul>
<li><code>System.out.println('a' + 1);</code></li>
<li><code>System.out.println((char)('a' + 1));</code></li>
</ul>
<details>
<summary>Ver solución</summary>

<p><strong>Solución:</strong> la primera imprime <code>98</code> (el <code>char</code> se convierte en número, 97, y se le suma 1). La segunda imprime <code>b</code> (convertimos ese 98 otra vez en carácter).</p>

</details>
</aside>

<aside class="java-document-note">
<p><strong>EN RESUMEN</strong></p>
<ul>
<li>Java tiene <strong>8 tipos primitivos</strong>: 4 enteros, 2 decimales, <code>char</code> y <code>boolean</code>.</li>
<li>Usa <code>int</code> para enteros y <code>double</code> para decimales salvo que tengas una buena razón.</li>
<li><code>long</code> necesita sufijo <strong>L</strong>, <code>float</code> necesita sufijo <strong>F</strong>.</li>
<li>Las variables locales <strong>no</strong> se inicializan solas.</li>
<li>Cada primitivo tiene su <strong>clase envoltorio</strong> con métodos útiles.</li>
</ul>
</aside>

## 3. Variables

<p><em>Una variable es como una caja etiquetada en un almacén. La etiqueta es el nombre, el tipo de caja indica qué puede guardar (una caja de zapatos no sirve para guardar agua) y dentro está el contenido, que puede cambiar cuando queramos.</em></p>

<p>La variable es la <strong>unidad básica de almacenamiento</strong> de un programa Java. Toda variable se define mediante la combinación de tres elementos: un <strong>identificador</strong> (su nombre), un <strong>tipo</strong> y un <strong>valor inicial</strong> (opcional). Además, cada variable tiene un <strong>alcance</strong>, que define dónde se puede usar, y un <strong>tiempo de vida</strong>.</p>

### 3.1 Declarar una variable

<p>En Java <strong>toda variable tiene que declararse antes de usarse</strong>. La forma básica es:</p>

```java
tipo identificador [= valor] [, identificador [= valor] ...];
```

<p>Ya hemos visto algunos ejemplos sueltos; aquí tienes otros más completos:</p>

```java
int a, b, c;             // declara 3 int: a, b y c (sin valor inicial)
int d = 3, e, f = 5;     // declara 3 int; inicializa d (3) y f (5)
byte z = 22;             // declara un byte z y lo inicializa a 22
double pi = 3.14159;     // declara un double con un valor aproximado de pi
char x = 'x';            // declara un char con el valor 'x'
```

#### Reglas para elegir el nombre

<div class="java-document-table">
<table>
<tr>
<th scope="col"><p><strong>Nombre</strong></p></th>
<th scope="col"><p><strong>¿Válido?</strong></p></th>
<th scope="col"><p><strong>Motivo</strong></p></th>
</tr>
<tr>
<td><p><code>nombre</code></p></td>
<td><p>Sí</p></td>
<td><p>Empieza por letra</p></td>
</tr>
<tr>
<td><p><code>_total</code></p></td>
<td><p>Sí</p></td>
<td><p>Puede empezar por guion bajo (o por $)</p></td>
</tr>
<tr>
<td><p><code>nota1</code></p></td>
<td><p>Sí</p></td>
<td><p>Puede llevar dígitos, pero no al principio</p></td>
</tr>
<tr>
<td><p><code>2pasos</code></p></td>
<td><p>No</p></td>
<td><p>No puede empezar por un número</p></td>
</tr>
<tr>
<td><p><code>mi variable</code></p></td>
<td><p>No</p></td>
<td><p>No admite espacios</p></td>
</tr>
<tr>
<td><p><code>class</code></p></td>
<td><p>No</p></td>
<td><p>Es una palabra reservada del lenguaje</p></td>
</tr>
<tr>
<td><p><code>edad y Edad</code></p></td>
<td><p>Sí</p></td>
<td><p>Son dos variables distintas: Java distingue mayúsculas de minúsculas</p></td>
</tr>
</table>
</div>

<aside class="java-document-note">
<p><strong>TRUCO</strong></p>
<p><strong>Convención de estilo:</strong> los programadores Java escriben las variables en *camelCase*: empiezan en minúscula y cada palabra nueva va en mayúscula (<code>edadAlumno</code>, <code>precioTotal</code>). Elige nombres que expliquen qué contiene la variable: <code>precioTotal</code> se entiende, <code>x1</code> no.</p>
</aside>

#### Declarar y asignar

<p>Declarar y asignar pueden hacerse en el mismo paso o en pasos separados:</p>

```java
int x;          // declaración
x = 10;         // asignación

int y = 20;     // declaración + asignación en un solo paso
```

#### Inicialización dinámica

<p>Al inicializar una variable no estamos limitados a valores fijos: Java permite usar <strong>cualquier expresión válida</strong> en el momento de la declaración. En este ejemplo calculamos la hipotenusa de un triángulo rectángulo a partir de sus catetos:</p>

```java
class InicializacionDinamica {
    public static void main(String[] args) {
        double a = 3.0, b = 4.0;
        // c se inicializa dinámicamente. Math.sqrt calcula la raíz cuadrada
        double c = Math.sqrt(a * a + b * b);
        System.out.println("La hipotenusa es " + c);
    }
}
```

<p><strong>SALIDA POR CONSOLA</strong></p>

```text
La hipotenusa es 5.0
```

<aside class="java-document-note">
<p><strong>CURIOSIDAD</strong></p>
<p>Desde Java 10 puedes dejar que el compilador deduzca el tipo con <code>var</code>: <code>var nombre = "Ana";</code>. Ojo: sigue siendo tipado fuerte, <code>nombre</code> seguirá siendo un <code>String</code> para siempre; simplemente nos ahorramos escribirlo.</p>
</aside>

### 3.2 Alcance y visibilidad de una variable

<p>Java permite declarar variables dentro de cualquier <strong>bloque</strong> de código. Un bloque empieza con una llave de apertura <code>{</code> y termina con una llave de cierre <code>}</code>, y <strong>cada bloque crea un nuevo alcance</strong> (en inglés, *scope*). El alcance determina dos cosas: qué partes del programa pueden ver la variable y cuánto tiempo vive.</p>

<aside class="java-document-note">
<p><strong>IDEA CLAVE</strong></p>
<p>Una variable <strong>nace</strong> cuando se declara y <strong>muere</strong> cuando termina el bloque en el que fue declarada. Fuera de ese bloque es como si nunca hubiera existido.</p>
</aside>

```java
class ScopeVariables {
    public static void main(String[] args) {
        int x;                 // x existe en todo el método main
        x = 10;
        if (x == 10) {         // empieza un nuevo bloque = nuevo alcance
            int y = 20;        // y solo existe dentro de este bloque
            System.out.println("x e y: " + x + " " + y);
            x = y * 2;
        }
        // y = 100;            // ERROR: y no existe fuera del bloque
        System.out.println("x vale " + x);   // x sí sigue existiendo
    }
}
```

<p><strong>SALIDA POR CONSOLA</strong></p>

```text
x e y: 10 20
x vale 40
```

<aside class="java-document-note">
<p><strong>OJO CON ESTO</strong></p>
<p>En Java <strong>no puedes declarar una variable con el mismo nombre que otra que ya sea visible</strong> en un bloque exterior. Este código no compila:</p>
</aside>

```java
int x = 1;
if (x == 1) {
    int x = 2;   // ERROR: variable x is already defined
}
```

<aside class="java-document-note">
<p><strong>MINI-RETO</strong></p>
<p>¿Por qué este código no compila?</p>
</aside>

```java
if (true) {
    int y = 5;
}
System.out.println(y);
```

<details>
<summary>Ver solución</summary>

<p><strong>Solución:</strong> <code>y</code> se declaró dentro del bloque del <code>if</code> y desaparece al cerrar la llave <code>}</code>. Al intentar usarla fuera, Java no la encuentra.</p>

</details>

<aside class="java-document-note">
<p><strong>EN RESUMEN</strong></p>
<ul>
<li>Toda variable se <strong>declara antes de usarse</strong>: tipo + nombre (+ valor opcional).</li>
<li>Los nombres siguen unas reglas y una convención (*camelCase*).</li>
<li>Una variable solo existe dentro del <strong>bloque `{ }`</strong> donde se declara.</li>
</ul>
</aside>

## 4. Constantes

<p><em>El número de días de la semana, el valor de π, el porcentaje de IVA… Si un dato no debe cambiar jamás, díselo a Java y él se encargará de protegerlo.</em></p>

<p>Una constante es un valor fijo al que le ponemos nombre. En Java se crean añadiendo la palabra clave <strong>`final`</strong> a la declaración:</p>

```java
final double PI = 3.14159;
```

<p>El modificador <code>final</code> convierte a <code>PI</code> en un valor <strong>que no puede modificarse</strong>. Si lo intentas, el compilador te para en seco:</p>

```java
final double PI = 3.14159;
PI = 3;    // ERROR: cannot assign a value to final variable PI
```

<aside class="java-document-note">
<p><strong>TRUCO</strong></p>
<p><strong>Convención:</strong> los nombres de constantes se escriben en <strong>MAYÚSCULAS</strong> y separando palabras con guion bajo: <code>MAX_INTENTOS</code>, <code>IVA_GENERAL</code>, <code>DIAS_SEMANA</code>. Así se distinguen de un vistazo de las variables normales.</p>
</aside>

### ¿Por qué usar constantes?

<p>Imagina que ves en un programa la operación <code>precio * 1.21</code>. ¿Qué es 1.21? Un número suelto que aparece sin explicación se llama <strong>«número mágico»</strong> y es una fuente de errores: si el IVA cambia, tendrás que buscar ese 1.21 por todo el código. Con una constante, el código se explica solo y el valor se cambia en un único sitio:</p>

```java
final double IVA = 1.21;
double total = precio * IVA;    // se entiende solo
```

<aside class="java-document-note">
<p><strong>CURIOSIDAD</strong></p>
<p>No siempre tienes que definir π tú mismo: Java ya trae su propia constante, <code>Math.PI</code>, con toda la precisión de un <code>double</code>.</p>
</aside>

<aside class="java-document-note">
<p><strong>EN RESUMEN</strong></p>
<ul>
<li><code>final</code> hace que una variable no pueda cambiar después de asignarla.</li>
<li>Se nombran en <strong>MAYÚSCULAS_CON_GUION_BAJO</strong>.</li>
<li>Evitan los «números mágicos» y hacen el código más legible.</li>
</ul>
</aside>

## 5. Operadores

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

### 5.1 Operadores aritméticos

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

### 5.2 Operadores aritméticos incrementales

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

### 5.3 Operadores aritméticos combinados

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

### 5.4 Operadores de relación

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

### 5.5 Operadores lógicos o booleanos

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

#### Cortocircuito: dejar de evaluar cuando ya se sabe la respuesta

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

### 5.6 Operadores de bit

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

### 5.7 Operador de concatenación de cadenas

<p>El símbolo <code>+</code> tiene doble función: con números <strong>suma</strong> y con textos <strong>concatena</strong> (une), devolviendo un <code>String</code> nuevo. Si solo uno de los operandos es texto, Java convierte el otro a texto automáticamente. Cuidado, porque el orden importa:</p>

<div class="java-document-table">
<table>
<tr>
<th scope="col"><p><strong>Expresión</strong></p></th>
<th scope="col"><p><strong>Resultado</strong></p></th>
<th scope="col"><p><strong>Por qué</strong></p></th>
</tr>
<tr>
<td><p><code>"Hola " + "mundo"</code></p></td>
<td><p><code>Hola mundo</code></p></td>
<td><p>Une dos textos</p></td>
</tr>
<tr>
<td><p><code>"Edad: " + 20</code></p></td>
<td><p><code>Edad: 20</code></p></td>
<td><p>El 20 se convierte en texto</p></td>
</tr>
<tr>
<td><p><code>1 + 2 + "3"</code></p></td>
<td><p><code>33</code></p></td>
<td><p>Primero suma 1 + 2 = 3 y luego concatena con "3"</p></td>
</tr>
<tr>
<td><p><code>"1" + 2 + 3</code></p></td>
<td><p><code>123</code></p></td>
<td><p>Ya hay texto desde el principio: todo se concatena</p></td>
</tr>
<tr>
<td><p><code>"1" + (2 + 3)</code></p></td>
<td><p><code>15</code></p></td>
<td><p>Los paréntesis obligan a sumar primero</p></td>
</tr>
</table>
</div>

### 5.8 Operador ternario ( ? : )

<p>Java incluye un operador especial de <strong>tres operandos</strong> que sustituye a ciertos <code>if-else</code> sencillos. Puede parecer raro al principio, pero cuando lo dominas es muy cómodo. Su forma general es:</p>

```java
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

### 5.9 Separadores

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

## 6. Expresiones

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

<p>Cuando en una misma operación se mezclan tipos distintos, Java <strong>promociona</strong> los operandos al tipo «más grande» para no perder información. Estas son las reglas básicas:</p>

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

### 6.1 Prioridad entre operadores

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
<li>Manda la <strong>prioridad</strong>; a igual prioridad, de izquierda a derecha; y los <strong>paréntesis</strong> mandan más que nadie.</li>
</ul>
</aside>

## 7. Cadenas de texto

<p>Una cadena de texto (en inglés, *string*) es un <strong>bloque de letras</strong> que usamos para guardar palabras y frases. En algunos lenguajes habría que usar un array de <code>char</code>, pero en Java no hace falta: el lenguaje incorpora un tipo específico para ello.</p>

<p>En realidad hay dos variantes principales: la clase <strong>`String`</strong> y la clase <strong>`StringBuilder`</strong>. La diferencia es esencial:</p>

<div class="java-document-table">
<table>
<tr>
<th scope="col"></th>
<th scope="col"><p><strong>String</strong></p></th>
<th scope="col"><p><strong>StringBuilder</strong></p></th>
</tr>
<tr>
<td><p>¿Puede modificarse?</p></td>
<td><p><strong>No</strong> (es *inmutable*)</p></td>
<td><p><strong>Sí</strong> (es *mutable*)</p></td>
</tr>
<tr>
<td><p>Qué pasa al «modificarla»</p></td>
<td><p>Java crea una cadena nueva y la original queda intacta</p></td>
<td><p>Se cambia la misma cadena, sin crear otra</p></td>
</tr>
<tr>
<td><p>Analogía</p></td>
<td><p>Tinta indeleble: para cambiar algo hay que escribirlo de nuevo</p></td>
<td><p>Pizarra: borras, insertas y cambias sobre la misma</p></td>
</tr>
<tr>
<td><p>Cuándo usarla</p></td>
<td><p>Casi siempre: textos que se leen, comparan o muestran</p></td>
<td><p>Cuando vas a modificar el texto muchas veces (por ejemplo, dentro de un bucle)</p></td>
</tr>
</table>
</div>

### String

<p>Podemos <strong>concatenar</strong> cadenas (unir dos para formar una nueva) con el signo <code>+</code>, igual que sumamos números. Y hay dos formas de declarar un <code>String</code>:</p>

```java
String nombre = "cadena";                      // la forma habitual: un literal
String otro = new String("cadena");    // con constructor (menos habitual)
```

<aside class="java-document-note">
<p><strong>OJO CON ESTO</strong></p>
<p><strong>Los `String` no se comparan con `==`.</strong> Ese operador comprueba si son el *mismo objeto*, no si tienen el mismo texto. Para comparar contenido hay que usar <code>equals()</code>:</p>
</aside>

```java
String a = "hola";
String b = new String("hola");
System.out.println(a == b);        // compara si son el mismo objeto
System.out.println(a.equals(b));   // compara el contenido
```

<p><strong>SALIDA POR CONSOLA</strong></p>

```text
false
true
```

<p>Estos son los métodos más importantes de la clase <code>String</code>. En los ejemplos suponemos que <code>texto</code> vale <code>"Java es genial"</code>:</p>

<div class="java-document-table">
<table>
<tr>
<th scope="col"><p><strong>Método</strong></p></th>
<th scope="col"><p><strong>Qué hace</strong></p></th>
<th scope="col"><p><strong>Ejemplo → resultado</strong></p></th>
</tr>
<tr>
<td><p><code>length()</code></p></td>
<td><p>Longitud de la cadena</p></td>
<td><p>texto.length() → 14</p></td>
</tr>
<tr>
<td><p><code>charAt(n)</code></p></td>
<td><p>Carácter que hay en la posición n</p></td>
<td><p>texto.charAt(0) → 'J'</p></td>
</tr>
<tr>
<td><p><code>indexOf('c')</code></p></td>
<td><p>Posición de la primera aparición del carácter (o -1 si no está)</p></td>
<td><p>texto.indexOf('a') → 1</p></td>
</tr>
<tr>
<td><p><code>lastIndexOf('c')</code></p></td>
<td><p>Posición de la última aparición del carácter</p></td>
<td><p>texto.lastIndexOf('a') → 12</p></td>
</tr>
<tr>
<td><p><code>substring(n1, n2)</code></p></td>
<td><p>Subcadena desde n1 hasta n2 - 1</p></td>
<td><p>texto.substring(5, 7) → "es"</p></td>
</tr>
<tr>
<td><p><code>toUpperCase()</code></p></td>
<td><p>Convierte todo a mayúsculas</p></td>
<td><p>texto.toUpperCase() → "JAVA ES GENIAL"</p></td>
</tr>
<tr>
<td><p><code>toLowerCase()</code></p></td>
<td><p>Convierte todo a minúsculas</p></td>
<td><p>texto.toLowerCase() → "java es genial"</p></td>
</tr>
<tr>
<td><p><code>equals("cad")</code></p></td>
<td><p>true si el contenido es idéntico</p></td>
<td><p>texto.equals("java es genial") → false</p></td>
</tr>
<tr>
<td><p><code>equalsIgnoreCase("cad")</code></p></td>
<td><p>Como equals, sin distinguir mayúsculas</p></td>
<td><p>texto.equalsIgnoreCase("java es genial") → true</p></td>
</tr>
<tr>
<td><p><code>compareTo(otro)</code></p></td>
<td><p>0 si son iguales; negativo si va antes alfabéticamente; positivo si va después</p></td>
<td><p>"a".compareTo("b") → -1</p></td>
</tr>
<tr>
<td><p><code>trim()</code></p></td>
<td><p>Quita los espacios de los extremos (no los del medio)</p></td>
<td><p>"  hola  ".trim() → "hola"</p></td>
</tr>
<tr>
<td><p><code>valueOf(N)</code></p></td>
<td><p>Convierte el valor N (de cualquier tipo) a String</p></td>
<td><p>String.valueOf(42) → "42"</p></td>
</tr>
<tr>
<td><p><code>replace(viejo, nuevo)</code></p></td>
<td><p>Reemplaza todas las apariciones de un carácter</p></td>
<td><p>texto.replace('a', 'o') → "Jovo es geniol"</p></td>
</tr>
</table>
</div>

<aside class="java-document-note">
<p><strong>OJO CON ESTO</strong></p>
<p>Como <code>String</code> es inmutable, sus métodos <strong>no modifican la cadena original: devuelven una nueva</strong>. Si no guardas el resultado, se pierde:</p>
</aside>

```java
String texto = "hola";
texto.toUpperCase();              // no hace nada útil: el resultado se descarta
System.out.println(texto);        // hola

texto = texto.toUpperCase();      // ahora sí: guardamos la cadena nueva
System.out.println(texto);        // HOLA
```

<p>Veamos varios de estos métodos funcionando en un mismo programa:</p>

```java
public class Strings {
    public static void main(String[] args) {
        String texto1 = "Primera cadena de texto";           // literal
        String texto2 = new String("Segunda cadena de texto");  // constructor

        System.out.println("La primera cadena de texto es:");
        System.out.println(texto1);
        System.out.println("Concatenamos las dos: " + texto1 + " " + texto2);
        System.out.println("Varios: " + texto1 + " " + 10 + " " + 23.5);
        System.out.println("Longitud de la segunda: " + texto2.length());
        System.out.println("compareTo: " + texto1.compareTo(texto2));
        System.out.println("La segunda letra de texto2: " + texto2.charAt(1));
        System.out.println("texto2 en mayúsculas: " + texto2.toUpperCase());
        System.out.println("Posiciones 1 y 2: " + texto2.substring(1, 3));
    }
}
```

<p><strong>SALIDA POR CONSOLA</strong></p>

```text
La primera cadena de texto es:
Primera cadena de texto
Concatenamos las dos: Primera cadena de texto Segunda cadena de texto
Varios: Primera cadena de texto 10 23.5
Longitud de la segunda: 23
compareTo: -3
La segunda letra de texto2: e
texto2 en mayúsculas: SEGUNDA CADENA DE TEXTO
Posiciones 1 y 2: eg
```

<p>Fíjate en el <code>-3</code>: <code>compareTo</code> compara letra a letra y la primera diferencia está en la inicial. La <code>P</code> (código 80) va antes que la <code>S</code> (código 83), y la diferencia es 80 - 83 = -3.</p>

### StringBuilder

<p>Si vas a modificar un texto muchas veces, <code>StringBuilder</code> es la herramienta adecuada: permite <strong>insertar, borrar o invertir</strong> sin crear una cadena nueva cada vez (a cambio de ser ligeramente menos eficiente para operaciones simples). Sus métodos principales:</p>

<div class="java-document-table">
<table>
<tr>
<th scope="col"><p><strong>Método</strong></p></th>
<th scope="col"><p><strong>Qué hace</strong></p></th>
</tr>
<tr>
<td><p><code>append(X)</code></p></td>
<td><p>Añade X al final de la cadena. X puede ser de cualquier tipo</p></td>
</tr>
<tr>
<td><p><code>insert(posicion, X)</code></p></td>
<td><p>Inserta X en la posición indicada. X puede ser de cualquier tipo</p></td>
</tr>
<tr>
<td><p><code>setCharAt(posicion, c)</code></p></td>
<td><p>Cambia el carácter de la posición indicada por el carácter c</p></td>
</tr>
<tr>
<td><p><code>charAt(posicion)</code></p></td>
<td><p>Devuelve el carácter que hay en la posición indicada</p></td>
</tr>
<tr>
<td><p><code>indexOf('c')</code></p></td>
<td><p>Posición de la primera aparición del carácter (-1 si no lo encuentra)</p></td>
</tr>
<tr>
<td><p><code>lastIndexOf('c')</code></p></td>
<td><p>Posición de la última aparición del carácter (-1 si no lo encuentra)</p></td>
</tr>
<tr>
<td><p><code>substring(n1, n2)</code></p></td>
<td><p>Devuelve un String entre las posiciones n1 y n2 - 1. Sin n2, llega hasta el final</p></td>
</tr>
<tr>
<td><p><code>delete(inicio, fin)</code></p></td>
<td><p>Elimina los caracteres desde inicio hasta fin - 1</p></td>
</tr>
<tr>
<td><p><code>reverse()</code></p></td>
<td><p>Invierte el contenido de la cadena</p></td>
</tr>
<tr>
<td><p><code>length()</code></p></td>
<td><p>Devuelve el número de caracteres</p></td>
</tr>
<tr>
<td><p><code>toString()</code></p></td>
<td><p>Devuelve el String equivalente</p></td>
</tr>
</table>
</div>

```java
public class EjemploStringBuilder {
    public static void main(String[] args) {
        StringBuilder texto = new StringBuilder("Otra prueba");
        texto.append(" mas");     // modifica el MISMO objeto, sin crear otro
        System.out.println("Tras append:  " + texto);

        texto.insert(2, "1");     // inserta "1" en la posición 2
        System.out.println("Tras insert:  " + texto);

        texto.reverse();          // le da la vuelta al contenido
        System.out.println("Tras reverse: " + texto);

        System.out.println("En mayúsculas: " + texto.toString().toUpperCase());
    }
}
```

<p><strong>SALIDA POR CONSOLA</strong></p>

```text
Tras append:  Otra prueba mas
Tras insert:  Ot1ra prueba mas
Tras reverse: sam abeurp ar1tO
En mayúsculas: SAM ABEURP AR1TO
```

<aside class="java-document-note">
<p><strong>MINI-RETO</strong></p>
<p><strong>¿Es un palíndromo?</strong> Un palíndromo es una palabra que se lee igual al derecho y al revés («reconocer», «anilina»). Escribe un programa que diga si una palabra lo es. (Pista: <code>StringBuilder</code> tiene un método que te viene de perlas, y recuerda cómo se comparan los textos.)</p>
</aside>

<details>
<summary>Ver solución</summary>

<p>Solución:</p>

```java
String palabra = "reconocer";
String invertida = new StringBuilder(palabra).reverse().toString();
System.out.println(palabra.equals(invertida));    // true
```

</details>

<aside class="java-document-note">
<p><strong>EN RESUMEN</strong></p>
<ul>
<li><code>String</code> es <strong>inmutable</strong> y se compara con <code>equals()</code>; <code>StringBuilder</code> es <strong>mutable</strong>.</li>
</ul>
</aside>

## 8. Parse: de texto a número

<p><em>El usuario teclea un 2 en pantalla, pero para Java eso no es el número 2, sino el texto «2». Y con un texto no se puede multiplicar. Necesitamos un traductor: eso es lo que hace parse.</em></p>

<p>Casi todos los lenguajes de programación ofrecen la posibilidad de transformar un valor de tipo «cadena de texto» en uno numérico. Por ejemplo, convertir la cadena <code>"2"</code> en el valor entero <code>2</code>. Una vez convertido, podemos trabajar con él como con cualquier otro dato primitivo (<code>int</code>, <code>float</code>, etc.).</p>

<p>En Java esta conversión se realiza con las <strong>clases envoltorio</strong> que vimos en el capítulo 2. Cada una tiene un método que convierte un <code>String</code> al tipo primitivo correspondiente. Como norma general, el nombre de la envoltura coincide con el del primitivo, pero empezando por mayúscula. Estas son todas las opciones:</p>

<div class="java-document-table">
<table>
<tr>
<th scope="col"><p><strong>Tipo</strong></p></th>
<th scope="col"><p><strong>Clase envoltorio</strong></p></th>
<th scope="col"><p><strong>Método de conversión</strong></p></th>
</tr>
<tr>
<td><p><code>byte</code></p></td>
<td><p><code>Byte</code></p></td>
<td><p><code>Byte.parseByte(aString)</code></p></td>
</tr>
<tr>
<td><p><code>short</code></p></td>
<td><p><code>Short</code></p></td>
<td><p><code>Short.parseShort(aString)</code></p></td>
</tr>
<tr>
<td><p><code>int</code></p></td>
<td><p><code>Integer</code></p></td>
<td><p><code>Integer.parseInt(aString)</code></p></td>
</tr>
<tr>
<td><p><code>long</code></p></td>
<td><p><code>Long</code></p></td>
<td><p><code>Long.parseLong(aString)</code></p></td>
</tr>
<tr>
<td><p><code>float</code></p></td>
<td><p><code>Float</code></p></td>
<td><p><code>Float.parseFloat(aString)</code></p></td>
</tr>
<tr>
<td><p><code>double</code></p></td>
<td><p><code>Double</code></p></td>
<td><p><code>Double.parseDouble(aString)</code></p></td>
</tr>
<tr>
<td><p><code>boolean</code></p></td>
<td><p><code>Boolean</code></p></td>
<td><p><code>Boolean.parseBoolean(aString)</code></p></td>
</tr>
</table>
</div>

<p>Solo tienes que llamar al método de la clase envoltorio apropiada. En este programa pedimos un número por teclado (que Java recibe como texto), lo convertimos y lo usamos en un cálculo:</p>

```java
import java.util.Scanner;

public class ClasesEnvoltura {
    public static void main(String[] args) {
        Scanner entrada = new Scanner(System.in);
        System.out.print("Dame un número entero: ");
        String numeroEnTexto = entrada.nextLine();      // llega como texto

        // Convertimos el texto a int con la clase envoltorio Integer
        int numero = Integer.parseInt(numeroEnTexto);
        System.out.println("El número entero resultante es: " + numero);

        // Ahora es un número de verdad: podemos operar con él
        System.out.println("Su doble es: " + (numero * 2));
    }
}
```

<p><strong>SALIDA POR CONSOLA</strong></p>

```text
Dame un número entero: 21
El número entero resultante es: 21
Su doble es: 42
```

<aside class="java-document-note">
<p><strong>OJO CON ESTO</strong></p>
<p><strong>Si el texto no es un número válido, el programa falla</strong> con una excepción llamada <code>NumberFormatException</code>. Eso ocurre con <code>"abc"</code>, con <code>"3.5"</code> si usas <code>parseInt</code> (no es un entero) o con <code>" 12"</code> con espacios delante (usa <code>trim()</code> para quitarlos).</p>
</aside>

<p>Más adelante aprenderás a gestionar estos errores con <code>try-catch</code>. Aquí tienes un adelanto:</p>

```java
try {
    int n = Integer.parseInt(texto);
    System.out.println("Número válido: " + n);
} catch (NumberFormatException e) {
    System.out.println("Eso no es un número entero");
}
```

<aside class="java-document-note">
<p><strong>TRUCO</strong></p>
<p><strong>El camino inverso</strong> (de número a texto) es aún más fácil: <code>String.valueOf(42)</code> o simplemente <code>"" + 42</code>. Y para un <code>char</code> no existe «parseChar»: se obtiene con <code>texto.charAt(0)</code>.</p>
</aside>

<aside class="java-document-note">
<p><strong>MINI-RETO</strong></p>
<p>Escribe un programa que pida dos números enteros por teclado y muestre su suma.</p>
</aside>

<details>
<summary>Ver solución</summary>

<p>Solución:</p>

```java
Scanner sc = new Scanner(System.in);
System.out.print("Primer número: ");
int a = Integer.parseInt(sc.nextLine());
System.out.print("Segundo número: ");
int b = Integer.parseInt(sc.nextLine());
System.out.println("La suma es " + (a + b));
```

</details>

<aside class="java-document-note">
<p><strong>EN RESUMEN</strong></p>
<ul>
<li>Lo que el usuario teclea llega como <strong>texto</strong>; para operar hay que convertirlo.</li>
<li>Se usa <code>Integer.parseInt()</code>, <code>Double.parseDouble()</code>, etc.</li>
<li>Si el texto no tiene formato numérico, se lanza <code>NumberFormatException</code>.</li>
</ul>
</aside>

<p><strong>PARA REPASAR</strong></p>

## Chuleta y errores típicos

<p><em>Antes de cerrar el libro, dos herramientas para tener siempre a mano: un resumen de todo lo visto y la lista de tropiezos más habituales.</em></p>

### Chuleta de repaso

<div class="java-document-table">
<table>
<tr>
<th scope="col"><p><strong>Tema</strong></p></th>
<th scope="col"><p><strong>Lo que debes recordar</strong></p></th>
</tr>
<tr>
<td><p><strong>Tipos primitivos</strong></p></td>
<td><p><code>byte</code>, <code>short</code>, <code>int</code>, <code>long</code>, <code>float</code>, <code>double</code>, <code>char</code>, <code>boolean</code>. Por defecto: <code>int</code> para enteros y <code>double</code> para decimales.</p></td>
</tr>
<tr>
<td><p><strong>Sufijos</strong></p></td>
<td><p><code>long</code> → <strong>L</strong> (<code>5L</code>); <code>float</code> → <strong>F</strong> (<code>3.14F</code>).</p></td>
</tr>
<tr>
<td><p><strong>Variables</strong></p></td>
<td><p>Se declaran antes de usarse y solo viven dentro de su bloque <code>{ }</code>. Las locales no se inicializan solas.</p></td>
</tr>
<tr>
<td><p><strong>Constantes</strong></p></td>
<td><p><code>final</code> + NOMBRE_EN_MAYÚSCULAS.</p></td>
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
<tr>
<td><p><strong>Cadenas</strong></p></td>
<td><p><code>String</code> inmutable, se compara con <code>equals()</code> · <code>StringBuilder</code> mutable.</p></td>
</tr>
<tr>
<td><p><strong>Parse</strong></p></td>
<td><p><code>Integer.parseInt("42")</code>, <code>Double.parseDouble("3.5")</code>.</p></td>
</tr>
</table>
</div>

### Errores típicos

<div class="java-document-table">
<table>
<tr>
<th scope="col"><p><strong>#</strong></p></th>
<th scope="col"><p><strong>El error</strong></p></th>
<th scope="col"><p><strong>Cómo evitarlo</strong></p></th>
</tr>
<tr>
<td><p>1</p></td>
<td><p>Escribir <code>float f = 3.14;</code> o <code>long l = 5000000000;</code></p></td>
<td><p>Añade el sufijo: <code>3.14F</code>, <code>5000000000L</code>.</p></td>
</tr>
<tr>
<td><p>2</p></td>
<td><p>Usar <code>=</code> en lugar de <code>==</code> en una condición</p></td>
<td><p><code>=</code> asigna, <code>==</code> compara.</p></td>
</tr>
<tr>
<td><p>3</p></td>
<td><p>Comparar <code>String</code> con <code>==</code></p></td>
<td><p>Usa siempre <code>equals()</code>.</p></td>
</tr>
<tr>
<td><p>4</p></td>
<td><p>Dividir enteros esperando decimales (<code>7 / 2</code> da 3)</p></td>
<td><p>Haz que uno de los operandos sea decimal: <code>7 / 2.0</code>.</p></td>
</tr>
<tr>
<td><p>5</p></td>
<td><p>Usar una variable fuera del bloque donde se declaró</p></td>
<td><p>Declárala en un bloque exterior si la necesitas fuera.</p></td>
</tr>
<tr>
<td><p>6</p></td>
<td><p>Usar una variable local sin inicializarla</p></td>
<td><p>Dale siempre un valor inicial.</p></td>
</tr>
<tr>
<td><p>7</p></td>
<td><p><code>Integer.parseInt</code> con un texto que no es un número</p></td>
<td><p>Valida la entrada o usa <code>try-catch</code>.</p></td>
</tr>
</table>
</div>

<aside class="java-document-note">
<p><strong>IDEA CLAVE</strong></p>
<p><strong>Programar se aprende programando.</strong> Copia los ejemplos de este documento, ejecútalos, cámbiales un valor y observa qué pasa. Romper un programa a propósito es una de las mejores formas de entender por qué funciona.</p>
</aside>
