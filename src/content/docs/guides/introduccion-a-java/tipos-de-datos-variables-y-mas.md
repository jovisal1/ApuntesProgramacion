---
title: Tipos de datos, variables y constantes
description: Elegir un tipo, declarar e inicializar variables y distinguirlas de las constantes.
sidebar:
  order: 3
tableOfContents:
  minHeadingLevel: 2
  maxHeadingLevel: 2
---

<p><em>Imagina una cocina profesional donde cada recipiente lleva una etiqueta: «sal», «azúcar», «harina». Si alguien intenta echar azúcar en el bote de la sal, el sistema salta una alarma antes de que el plato llegue a la mesa. Java funciona exactamente así con los datos.</em></p>

<p>Empezaremos guardando información con tipos, variables y constantes. Las operaciones y el trabajo con texto tienen sus propias páginas.</p>

<p>Empecemos por lo más importante: Java es un lenguaje <strong>fuertemente tipado</strong>. Esto significa tres cosas:</p>

<ul>
<li><strong>Toda variable tiene un tipo</strong> (número entero, decimal, texto, verdadero/falso…).</li>
<li><strong>Toda expresión tiene un tipo</strong>: el resultado de cualquier cálculo también es de un tipo concreto.</li>
<li><strong>Cada tipo está estrictamente definido</strong>: sabemos qué valores admite y qué operaciones permite.</li>
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

## Tipos primitivos

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



### Enteros

<p>Los enteros de Java son <strong>con signo</strong>: admiten valores positivos y negativos. Cuantos más bits ocupan, mayor es su rango, pero más memoria consumen. Hay cuatro:</p>

<ul>
<li><strong><code>byte</code></strong>: el más pequeño. Es muy útil cuando trabajamos con flujos de datos (leer ficheros o recibir información por la red). Ejemplo: <code>byte b = 2;</code></li>
<li><strong><code>short</code></strong>: quizá el menos usado de todos. Ejemplo: <code>short s1 = 11;</code></li>
<li><strong><code>int</code></strong>: el rey de los enteros. Lo usarás constantemente: en contadores, bucles e índices de arrays. Ejemplo: <code>int i1 = 12;</code></li>
<li><strong><code>long</code></strong>: para cuando un <code>int</code> se queda pequeño. Al escribir el valor hay que añadir una <strong>L</strong> al final para avisar al compilador. Ejemplo: <code>long l1 = 9223372036854775807L;</code></li>
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



### Números en coma flotante

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

### Booleanos

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

### Caracteres

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
<p>Tres códigos que conviene recordar: <code>'0'</code> vale 48, <code>'A'</code> vale 65 y <code>'a'</code> vale 97. En estas letras latinas básicas, la diferencia entre mayúscula y minúscula es 32; no es una regla general de Unicode.</p>
</aside>

### Una primera cadena de texto

`String` guarda texto entre comillas dobles. No es un tipo primitivo; de momento lo utilizaremos para nombres y mensajes.

```java
String nombre = "Alex";
System.out.println(nombre); // Alex
```

## Variables

<p><em>Una variable es como una caja etiquetada en un almacén. La etiqueta es el nombre, el tipo de caja indica qué puede guardar (una caja de zapatos no sirve para guardar agua) y dentro está el contenido, que puede cambiar cuando queramos.</em></p>

<p>La variable es la <strong>unidad básica de almacenamiento</strong> de un programa Java. Toda variable se define mediante la combinación de tres elementos: un <strong>identificador</strong> (su nombre), un <strong>tipo</strong> y un <strong>valor inicial</strong> (opcional). Además, cada variable tiene un <strong>alcance</strong>, que define dónde se puede usar, y un <strong>tiempo de vida</strong>.</p>

### Declarar una variable

<p>En Java <strong>toda variable tiene que declararse antes de usarse</strong>. La forma básica es:</p>

```text
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

### Alcance y visibilidad de una variable

<p>Java permite declarar variables dentro de cualquier <strong>bloque</strong> de código. Un bloque empieza con una llave de apertura <code>{</code> y termina con una llave de cierre <code>}</code>, y <strong>cada bloque crea un nuevo alcance</strong> (en inglés, *scope*). El alcance determina en qué partes del código se puede utilizar la variable.</p>

<aside class="java-document-note">
<p><strong>IDEA CLAVE</strong></p>
<p>Una variable <strong>nace</strong> cuando se declara y <strong>muere</strong> cuando termina el bloque en el que fue declarada. Fuera de ese bloque es como si nunca hubiera existido.</p>
</aside>

```java
class ScopeVariables {
    public static void main(String[] args) {
        int x;                 // x existe en todo el método main
        x = 10;
        {         // bloque interior: un nuevo alcance
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
{
    int x = 2;   // ERROR: variable x is already defined
}
```

<aside class="java-document-note">
<p><strong>MINI-RETO</strong></p>
<p>¿Por qué este código no compila?</p>
</aside>

```java
{
    int y = 5;
}
System.out.println(y);
```

<details>
<summary>Ver solución</summary>

<p><strong>Solución:</strong> <code>y</code> se declaró dentro del bloque interior y desaparece al cerrar la llave <code>}</code>. Al intentar usarla fuera, Java no la encuentra.</p>

</details>

<aside class="java-document-note">
<p><strong>EN RESUMEN</strong></p>
<ul>
<li>Toda variable se <strong>declara antes de usarse</strong>: tipo + nombre (+ valor opcional).</li>
<li>Los nombres siguen unas reglas y una convención (*camelCase*).</li>
<li>Una variable solo existe dentro del <strong>bloque `{ }`</strong> donde se declara.</li>
</ul>
</aside>

## Constantes

<p><em>El número de días de la semana, el valor de π, el porcentaje de IVA… Si un dato no debe cambiar jamás, díselo a Java y él se encargará de protegerlo.</em></p>

<p>Una constante es un valor fijo al que le ponemos nombre. En Java se crean añadiendo la palabra clave <strong><code>final</code></strong> a la declaración:</p>

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

El siguiente fragmento presupone una variable `double precio`, por ejemplo `double precio = 10.0;`.

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

## Practica antes de continuar

Declara el nombre de un producto, su precio y sus unidades. Guarda el IVA en una constante. ¿Qué tipo elegirías para cada dato?

<details>
<summary>Ver una solución</summary>

```java
String producto = "Cuaderno";
double precio = 2.5;
int unidades = 3;
final double IVA = 0.21;
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
<td><p>Escribir <code>float f = 3.14;</code> o <code>long l = 5000000000;</code></p></td>
<td><p>Añade el sufijo: <code>3.14F</code>, <code>5000000000L</code>.</p></td>
</tr>
<tr>
<td><p>Usar una variable fuera del bloque donde se declaró</p></td>
<td><p>Declárala en un bloque exterior si la necesitas fuera.</p></td>
</tr>
<tr>
<td><p>Usar una variable local sin inicializarla</p></td>
<td><p>Dale siempre un valor inicial.</p></td>
</tr>
</table>
</div>

## Ampliaciones opcionales

No necesitas dominar estos detalles para continuar con el siguiente paso. Abre solo lo que quieras profundizar.

<details class="java-extension">
<summary>Rangos y desbordamiento</summary>

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
<p><strong>Desbordamiento: cuando el contador da la vuelta</strong></p>

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


</details>

<details class="java-extension">
<summary>Valores por defecto</summary>

<p><strong>Valores por defecto</strong></p>

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


</details>

<details class="java-extension">
<summary>Clases envoltorio</summary>

<p><strong>Clases envoltorio</strong></p>

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


</details>
