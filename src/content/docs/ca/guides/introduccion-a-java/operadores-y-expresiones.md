---
title: Operadors i expressions
description: Calcular resultats i construir comparacions i condicions.
sidebar:
  order: 4
tableOfContents:
  minHeadingLevel: 2
  maxHeadingLevel: 2
---

Un operador actua sobre valors o variables, els seus **operands**. Comença pels càlculs, continua amb les comparacions i combina després condicions.

### Operadors aritmètics

<p>Són els de tota la vida, els que utilitzes en un problema de matemàtiques:</p>

<div class="java-document-table">
<table>
<tr>
<th scope="col"><p><strong>Operador</strong></p></th>
<th scope="col"><p><strong>Nom</strong></p></th>
<th scope="col"><p><strong>Exemple</strong></p></th>
<th scope="col"><p><strong>Resultat</strong></p></th>
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
<td><p>Multiplicació</p></td>
<td><p><code>7 * 2</code></p></td>
<td><p>14</p></td>
</tr>
<tr>
<td><p><code>/</code></p></td>
<td><p>Divisió</p></td>
<td><p><code>7 / 2</code></p></td>
<td><p>3  (enters!)</p></td>
</tr>
<tr>
<td><p><code>/</code></p></td>
<td><p>Divisió</p></td>
<td><p><code>7 / 2.0</code></p></td>
<td><p>3.5</p></td>
</tr>
<tr>
<td><p><code>%</code></p></td>
<td><p>Residu (mòdul)</p></td>
<td><p><code>7 % 2</code></p></td>
<td><p>1</p></td>
</tr>
<tr>
<td><p><code>-</code></p></td>
<td><p>Canvi de signe (unari)</p></td>
<td><p><code>-x</code></p></td>
<td><p>L'oposat de x</p></td>
</tr>
</table>
</div>

<aside class="java-document-note">
<p><strong>COMPTE AMB AIXÒ</strong></p>
<p><strong>Divisió entera:</strong> si dividim dos enters, el resultat també és enter i <strong>es descarten els decimals</strong>: <code>7 / 2</code> dona 3, no 3,5. Per a obtindre decimals, almenys un dels operands ha de ser decimal (<code>7 / 2.0</code>). A més, dividir un enter entre 0 llança un error (<code>ArithmeticException</code>), mentre que amb decimals el resultat és <code>Infinity</code>.</p>
<p><strong>TRUC</strong></p>
<p>L'operador <code>%</code> és més útil del que sembla: <code>n % 2 == 0</code> et diu si un nombre és parell, i <code>n % 10</code> et dona la seua última xifra.</p>
</aside>

<p>Vegem un exemple complet. Fixa't en com canvien els resultats entre enters i decimals quan fem exactament les mateixes operacions:</p>

```java
class OperadoresAritmeticos {
    public static void main(String[] args) {
        System.out.println("Aritmètics enters");
        int a = 1 + 1;
        int b = a * 3;
        int c = b / 4;      // 6 / 4 = 1 (divisió entera)
        int d = c - a;
        int e = -d;
        System.out.println("a = " + a);
        System.out.println("b = " + b);
        System.out.println("c = " + c);
        System.out.println("d = " + d);
        System.out.println("e = " + e);

        System.out.println("\nAritmètics de coma flotant");
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

<p><strong>EIXIDA PER CONSOLA</strong></p>

```text
Aritmètics enters
a = 2
b = 6
c = 1
d = -1
e = 1

Aritmètics de coma flotant
da = 2.0
db = 6.0
dc = 1.5
dd = -0.5
de = 0.5
```

### Augmentar o reduir una unitat

En instruccions separades, `++` suma una unitat i `--` en resta una. Deixa els increments dins d’expressions per a l’ampliació.

```java
int puntos = 3;
puntos++;
System.out.println(puntos); // 4
```

### Operadors aritmètics combinats

<p>Combinen una operació aritmètica amb l'assignació, i servixen per a escriure menys. <code>a += 5</code> és una forma abreujada de <code>a = a + 5</code>. Com en els aritmètics normals, els operands poden ser enters o reals i el tipus del resultat depén d'ells.</p>

<div class="java-document-table">
<table>
<tr>
<th scope="col"><p><strong>Operador</strong></p></th>
<th scope="col"><p><strong>Exemple</strong></p></th>
<th scope="col"><p><strong>Equival a</strong></p></th>
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

<p><strong>EIXIDA PER CONSOLA</strong></p>

```text
a = 6
b = 8
c = 3
```

### Operadors de relació

<p>Comparen dos valors i sempre retornen un <strong>boolean</strong> (<code>true</code> o <code>false</code>). Es poden utilitzar amb dades numèriques, caràcters i booleans, però els booleans només admeten els operadors d'igualtat i desigualtat.</p>

<div class="java-document-table">
<table>
<tr>
<th scope="col"><p><strong>Operador</strong></p></th>
<th scope="col"><p><strong>Significat</strong></p></th>
<th scope="col"><p><strong>Exemple</strong></p></th>
<th scope="col"><p><strong>Resultat</strong></p></th>
</tr>
<tr>
<td><p><code>==</code></p></td>
<td><p>Igual a</p></td>
<td><p><code>5 == 5</code></p></td>
<td><p>true</p></td>
</tr>
<tr>
<td><p><code>!=</code></p></td>
<td><p>Diferent de</p></td>
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
<td><p>Major que</p></td>
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
<td><p>Major o igual que</p></td>
<td><p><code>2 &gt;= 3</code></p></td>
<td><p>false</p></td>
</tr>
</table>
</div>

<aside class="java-document-note">
<p><strong>COMPTE AMB AIXÒ</strong></p>
<p><strong>No confongues `=` amb `==`.</strong> El primer <strong>assigna</strong> un valor (<code>edad = 18</code> guarda un 18); el segon <strong>compara</strong> (<code>edad == 18</code> pregunta si val 18). És un dels errors més comuns de qui comença.</p>
<p>I una advertència per a més avant: amb textos (<code>String</code>) no es compara amb <code>==</code> sinó amb <code>equals()</code>. Ho veuràs en el capítol 8.</p>
</aside>

### Condicions amb booleans

Una comparació produïx `true` o `false`. Per a combinar condicions utilitzem `&&` (les dos han de ser certes), `||` (almenys una és certa) i `!` (nega el valor).

```java
int edad = 20;
boolean tieneEntrada = true;
boolean puedeEntrar = edad >= 18 && tieneEntrada;
System.out.println(puedeEntrar); // true
System.out.println(!tieneEntrada); // false
```

Amb `&&`, si la primera condició és falsa, no s’avalua la segona; amb `||`, no s’avalua si la primera és certa. Tens un exemple de seguretat en l’ampliació de curtcircuit.

## Expressions

<p><em>Una expressió és com una frase de matemàtiques: ajunta nombres, símbols i parèntesis, i quan la lliges completa obtens un únic resultat. La pregunta és: quina part es llig primer?</em></p>

<p>Una <strong>expressió</strong> és una combinació d'operadors i operands que s'avalua produint <strong>un únic resultat d'un tipus determinat</strong>. Els operands poden ser valors, variables o fins i tot crides a mètodes.</p>

<div class="java-document-table">
<table>
<tr>
<th scope="col"><p><strong>Expressió</strong></p></th>
<th scope="col"><p><strong>Resultat</strong></p></th>
<th scope="col"><p><strong>Tipus</strong></p></th>
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
<td><p>Un text</p></td>
<td><p><code>String</code></p></td>
</tr>
<tr>
<td><p><code>Math.sqrt(16)</code></p></td>
<td><p>4.0</p></td>
<td><p><code>double</code></p></td>
</tr>
</table>
</div>

### El tipus del resultat

<p>Quan en una mateixa operació es mesclen tipus diferents, Java <strong>promociona</strong> els operands al tipus «més gran» segons les regles de promoció numèrica; algunes conversions poden perdre precisió. Estes són les regles bàsiques:</p>

<div class="java-document-table">
<table>
<tr>
<th scope="col"><p><strong>Si en l'operació hi ha…</strong></p></th>
<th scope="col"><p><strong>El resultat és…</strong></p></th>
<th scope="col"><p><strong>Exemple</strong></p></th>
</tr>
<tr>
<td><p><code>byte</code>, <code>short</code> o <code>char</code> (i res més gran)</p></td>
<td><p><code>int</code></p></td>
<td><p><code>'a' + 1</code> → 98</p></td>
</tr>
<tr>
<td><p>Algun <code>long</code></p></td>
<td><p><code>long</code></p></td>
<td><p><code>5 + 10L</code> → 15L</p></td>
</tr>
<tr>
<td><p>Algun <code>float</code></p></td>
<td><p><code>float</code></p></td>
<td><p><code>5 + 2.0F</code> → 7.0F</p></td>
</tr>
<tr>
<td><p>Algun <code>double</code></p></td>
<td><p><code>double</code></p></td>
<td><p><code>5 / 2.0</code> → 2.5</p></td>
</tr>
</table>
</div>

### Prioritat i parèntesis

Primer es calculen les multiplicacions, divisions i restes de divisió; després, les sumes i restes. Les comparacions van abans de `&&` i `||`. Utilitza parèntesis per a expressar la intenció.

```java
System.out.println(2 + 3 * 4);   // 14
System.out.println((2 + 3) * 4); // 20
```

## Practica abans de continuar

Prediu el resultat de 7 / 2, 7 / 2.0 i 2 + 3 * 4. Comprova-ho i explica la diferència.

<details>
<summary>Veure una solució</summary>

```java
System.out.println(7 / 2);       // 3
System.out.println(7 / 2.0);     // 3.5
System.out.println(2 + 3 * 4);  // 14
```

</details>

## Repàs essencial

<div class="java-document-table">
<table>
<tr>
<th scope="col"><p><strong>Tema</strong></p></th>
<th scope="col"><p><strong>El que has de recordar</strong></p></th>
</tr>
<tr>
<td><p><strong>Divisió</strong></p></td>
<td><p><code>7 / 2</code> = 3 (enters) · <code>7 / 2.0</code> = 3.5 · <code>7 % 2</code> = 1.</p></td>
</tr>
<tr>
<td><p><strong>Increment</strong></p></td>
<td><p><code>a++</code> utilitza i després suma · <code>++a</code> suma i després utilitza.</p></td>
</tr>
<tr>
<td><p><strong>Lògics</strong></p></td>
<td><p>Utilitza <code>&amp;&amp;</code>, <code>||</code> i <code>!</code> (amb curtcircuit).</p></td>
</tr>
<tr>
<td><p><strong>Prioritat</strong></p></td>
<td><p>Aritmètics &gt; relació &gt; lògics &gt; assignació. Davant del dubte, parèntesis.</p></td>
</tr>
</table>
</div>

## Errors freqüents

<div class="java-document-table">
<table>
<tr>
<th scope="col"><p><strong>L'error</strong></p></th>
<th scope="col"><p><strong>Com evitar-lo</strong></p></th>
</tr>
<tr>
<td><p>Utilitzar <code>=</code> en lloc de <code>==</code> en una condició</p></td>
<td><p><code>=</code> assigna, <code>==</code> compara.</p></td>
</tr>
<tr>
<td><p>Dividir enters esperant decimals (<code>7 / 2</code> dona 3)</p></td>
<td><p>Fes que un dels operands siga decimal: <code>7 / 2.0</code>.</p></td>
</tr>
</table>
</div>

## Ampliacions opcionals

No necessites dominar estos detalls per a continuar amb el pas següent. Obri només el que vulgues aprofundir.

<details class="java-extension">
<summary>Increments dins d’expressions</summary>

<p><strong>Operadors aritmètics incrementals</strong></p>

<p><code>++</code> suma 1 a una variable i <code>--</code> li resta 1. Són operadors <strong>unaris</strong> (tenen un sol operand) i l'operand pot ser numèric o de tipus <code>char</code>. La part interessant és que es poden col·locar <strong>abans</strong> o <strong>després</strong> de la variable, i el resultat canvia:</p>

<div class="java-document-table">
<table>
<tr>
<th scope="col"><p><strong>Forma</strong></p></th>
<th scope="col"><p><strong>Nom</strong></p></th>
<th scope="col"><p><strong>Què fa</strong></p></th>
</tr>
<tr>
<td><p><code>a++</code></p></td>
<td><p>Postfix</p></td>
<td><p>Primer <strong>utilitza</strong> el valor actual i <strong>després</strong> suma 1</p></td>
</tr>
<tr>
<td><p><code>++a</code></p></td>
<td><p>Prefix</p></td>
<td><p>Primer <strong>suma</strong> 1 i <strong>després</strong> utilitza el nou valor</p></td>
</tr>
<tr>
<td><p><code>a--</code> / <code>--a</code></p></td>
<td><p>Postfix / prefix</p></td>
<td><p>El mateix, però restant 1</p></td>
</tr>
</table>
</div>

<aside class="java-document-note">
<p><strong>IDEA CLAU</strong></p>
<p>Pensa-ho com en una cafeteria. <strong>Prefix (`++a`):</strong> «demana'm el café i cobra'm ja». <strong>Postfix (`a++`):</strong> «porta'm el café i cobra-me'l després». La variable acaba igual en els dos casos; la diferència està en <strong>quin valor s'utilitza en la mateixa línia</strong>.</p>
</aside>

```java
class OperadoresAritmeticosIncrementales {
    public static void main(String[] args) {
        int a = 1;
        int b = 2;
        int c;
        int d;
        c = ++b;    // b passa a 3 i ALESHORES es copia en c
        d = a++;    // es copia l'1 en d i DESPRÉS a passa a 2
        c++;        // c passa de 3 a 4
        System.out.println("a = " + a);
        System.out.println("b = " + b);
        System.out.println("c = " + c);
        System.out.println("d = " + d);
    }
}
```

<p><strong>EIXIDA PER CONSOLA</strong></p>

```text
a = 2
b = 3
c = 4
d = 1
```

<p>Seguint el programa pas a pas, els valors van canviant així:</p>

<div class="java-document-table">
<table>
<tr>
<th scope="col"><p><strong>Instrucció</strong></p></th>
<th scope="col"><p><strong>a</strong></p></th>
<th scope="col"><p><strong>b</strong></p></th>
<th scope="col"><p><strong>c</strong></p></th>
<th scope="col"><p><strong>d</strong></p></th>
</tr>
<tr>
<td><p>Valors inicials</p></td>
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
<summary>Curtcircuit</summary>

<p><strong>Curtcircuit: deixar d'avaluar quan ja se sap la resposta</strong></p>

<p>Amb <code>&amp;&amp;</code>, si el primer operand ja és fals, el resultat serà fals passe el que passe, així que Java <strong>ni tan sols avalua el segon</strong>. Amb <code>||</code> ocorre el mateix quan el primer és verdader. És com dir «si el primer semàfor ja està en roig, no cal mirar el segon». I a més és una ferramenta de seguretat:</p>

```java
int a = 10, b = 0;
if (b != 0 && a / b > 2) {          // com que b és 0, la divisió ni s'intenta
    System.out.println("El quocient és major que 2");
}
```

<aside class="java-document-note">
<p><strong>TRUC</strong></p>
<p>En la pràctica utilitza sempre <code>&amp;&amp;</code> i <code>||</code>. Els operadors <code>&amp;</code> i <code>|</code> sense curtcircuit es reserven per a casos molt concrets (o per a operar amb bits, com veuràs a continuació).</p>
</aside>


</details>

<details class="java-extension">
<summary>Operadors de bits</summary>

<p><strong>Operadors de bit</strong></p>

<p>Treballen <strong>bit a bit</strong>, és a dir, amb els zeros i uns de la representació binària d'un nombre enter (o <code>char</code>). Encara que al principi semblen exòtics, s'utilitzen en gràfics, criptografia, permisos de fitxers i programació de baix nivell. Tots són binaris excepte la negació <code>~</code>.</p>

<div class="java-document-table">
<table>
<tr>
<th scope="col"><p><strong>Operador</strong></p></th>
<th scope="col"><p><strong>Nom</strong></p></th>
<th scope="col"><p><strong>Què fa</strong></p></th>
</tr>
<tr>
<td><p><code>~</code></p></td>
<td><p>NOT bit a bit</p></td>
<td><p>Invertix tots els bits</p></td>
</tr>
<tr>
<td><p><code>&amp;</code></p></td>
<td><p>AND</p></td>
<td><p>1 només si els dos bits són 1</p></td>
</tr>
<tr>
<td><p><code>|</code></p></td>
<td><p>OR</p></td>
<td><p>1 si almenys un bit és 1</p></td>
</tr>
<tr>
<td><p><code>^</code></p></td>
<td><p>XOR</p></td>
<td><p>1 si els bits són diferents</p></td>
</tr>
<tr>
<td><p><code>&lt;&lt;</code></p></td>
<td><p>Desplaçament a l'esquerra</p></td>
<td><p>Mou els bits a l'esquerra (equival a multiplicar per 2 en cada posició)</p></td>
</tr>
<tr>
<td><p><code>&gt;&gt;</code></p></td>
<td><p>Desplaçament a la dreta</p></td>
<td><p>Mou els bits a la dreta conservant el signe (dividix entre 2)</p></td>
</tr>
<tr>
<td><p><code>&gt;&gt;&gt;</code></p></td>
<td><p>Desplaçament a la dreta sense signe</p></td>
<td><p>Com &gt;&gt;, però ompli amb zeros per l'esquerra</p></td>
</tr>
</table>
</div>

```java
int a = 5;   // 0101 en binari
int b = 3;   // 0011 en binari
System.out.println(a & b);    // 0001 -> 1
System.out.println(a | b);    // 0111 -> 7
System.out.println(a ^ b);    // 0110 -> 6
System.out.println(~a);       // invertix tots els bits -> -6
System.out.println(a << 1);   // 1010 -> 10  (5 * 2)
System.out.println(a >> 1);   // 0010 -> 2   (5 / 2)
```

<p><strong>EIXIDA PER CONSOLA</strong></p>

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
<summary>Operador ternari</summary>

<p><strong>Operador ternari ( ? : )</strong></p>

<p>Java inclou un operador especial de <strong>tres operands</strong> que substituïx certs <code>if-else</code> senzills. Pot semblar estrany al principi, però quan el domines és molt còmode. La seua forma general és:</p>

```text
condicion ? valorSiVerdadero : valorSiFalso
```

<p>S'avalua la condició (que ha de ser un <code>boolean</code>): si és verdadera, el resultat és la segona expressió; si és falsa, la tercera. Les dos han de retornar el mateix tipus (o tipus compatibles). Mira com calcula el valor absolut d'un nombre:</p>

```java
class OperadorTernario {
    public static void main(String[] args) {
        int i, k;
        i = 10;
        k = i < 0 ? -i : i;     // si i és negatiu, canvia el seu signe
        System.out.print("Valor absolut de ");
        System.out.println(i + " és " + k);

        i = -10;
        k = i < 0 ? -i : i;
        System.out.print("Valor absolut de ");
        System.out.println(i + " és " + k);
    }
}
```

<p><strong>EIXIDA PER CONSOLA</strong></p>

```text
Valor absolut de 10 és 10
Valor absolut de -10 és 10
```

<p>La línia <code>k = i &lt; 0 ? -i : i;</code> equival exactament a este <code>if-else</code>, però en una sola línia:</p>

Este fragment pressuposa `int i = -5;` i `int k;`, com en l’exemple anterior.

```java
if (i < 0) {
    k = -i;
} else {
    k = i;
}
```

<aside class="java-document-note">
<p><strong>COMPTE AMB AIXÒ</strong></p>
<p>Utilitza'l per a decisions <strong>senzilles</strong>. Si comences a posar ternaris dins d'altres ternaris, el codi es torna il·legible i és millor tornar a l'<code>if-else</code>.</p>
</aside>


</details>

<details class="java-extension">
<summary>Mapa complet, separadors i prioritat</summary>

<p><strong>Operadors</strong></p>

<p><em>Si les variables són els substantius d'un programa, els operadors són els verbs: sumen, comparen, decidixen. Sense ells, les dades es quedarien quietes en les seues caixes.</em></p>

<p>Com vam veure en la unitat d'algoritmes, els operadors són una peça essencial per a resoldre problemes. Java disposa d'un autèntic ecosistema d'operadors. Este és el mapa general:</p>

<div class="java-document-table">
<table>
<tr>
<th scope="col"><p><strong>Categoria</strong></p></th>
<th scope="col"><p><strong>Operadors</strong></p></th>
<th scope="col"><p><strong>El resultat és…</strong></p></th>
</tr>
<tr>
<td><p>Aritmètics</p></td>
<td><p><code>+  -  *  /  %</code></p></td>
<td><p>Un nombre</p></td>
</tr>
<tr>
<td><p>Incrementals</p></td>
<td><p><code>++  --</code></p></td>
<td><p>Un nombre</p></td>
</tr>
<tr>
<td><p>Combinats</p></td>
<td><p><code>+=  -=  *=  /=  %=</code></p></td>
<td><p>Un nombre (i s'assigna)</p></td>
</tr>
<tr>
<td><p>De relació</p></td>
<td><p><code>==  !=  &lt;  &gt;  &lt;=  &gt;=</code></p></td>
<td><p>Un boolean</p></td>
</tr>
<tr>
<td><p>Lògics</p></td>
<td><p><code>&amp;&amp;  ||  !  &amp;  |  ^</code></p></td>
<td><p>Un boolean</p></td>
</tr>
<tr>
<td><p>De bit</p></td>
<td><p><code>~  &amp;  |  ^  &lt;&lt;  &gt;&gt;  &gt;&gt;&gt;</code></p></td>
<td><p>Un enter</p></td>
</tr>
<tr>
<td><p>Concatenació</p></td>
<td><p><code>+</code></p></td>
<td><p>Un String</p></td>
</tr>
<tr>
<td><p>Ternari</p></td>
<td><p><code>? :</code></p></td>
<td><p>Depén dels operands</p></td>
</tr>
</table>
</div>

<p><strong>Separadors</strong></p>

<p>Alguns caràcters tenen un significat especial en Java: són els signes de puntuació del llenguatge, la «gramàtica» que permet al compilador entendre on comença i acaba cada cosa.</p>

<div class="java-document-table">
<table>
<tr>
<th scope="col"><p><strong>Símbol</strong></p></th>
<th scope="col"><p><strong>Nom</strong></p></th>
<th scope="col"><p><strong>Per a què s'utilitza</strong></p></th>
</tr>
<tr>
<td><p><code>( )</code></p></td>
<td><p>Parèntesis</p></td>
<td><p>Agrupar operacions, tancar condicions i llistes de paràmetres d'un mètode</p></td>
</tr>
<tr>
<td><p><code>{ }</code></p></td>
<td><p>Claus</p></td>
<td><p>Delimitar blocs de codi i donar valors inicials a un array</p></td>
</tr>
<tr>
<td><p><code>[ ]</code></p></td>
<td><p>Claudàtors</p></td>
<td><p>Declarar arrays i accedir als seus elements</p></td>
</tr>
<tr>
<td><p><code>;</code></p></td>
<td><p>Punt i coma</p></td>
<td><p>Acabar una sentència</p></td>
</tr>
<tr>
<td><p><code>,</code></p></td>
<td><p>Coma</p></td>
<td><p>Separar variables en una declaració o paràmetres en una crida</p></td>
</tr>
<tr>
<td><p><code>.</code></p></td>
<td><p>Punt</p></td>
<td><p>Accedir als membres d'un objecte o a un paquet (<code>System.out</code>)</p></td>
</tr>
</table>
</div>

<aside class="java-document-note">
<p><strong>MINIREPTE</strong></p>
<p>Sense executar el codi, quant valen <code>x</code> i <code>y</code> al final?</p>
</aside>

```java
int x = 5;
int y = x++ + ++x;
```

<details>
<summary>Veure la solució</summary>

<p><strong>Solució:</strong> <code>y = 12</code> i <code>x = 7</code>. Primer <code>x++</code> utilitza el 5 i deixa x en 6; després <code>++x</code> puja x a 7 i utilitza eixe 7. Per tant y = 5 + 7 = 12.</p>

</details>

<aside class="java-document-note">
<p><strong>EN RESUM</strong></p>
<ul>
<li>Els operadors <strong>aritmètics</strong> amb enters donen enters: <code>7 / 2</code> és 3.</li>
<li><code>a++</code> utilitza i després suma; <code>++a</code> suma i després utilitza.</li>
<li>Per a combinar condicions utilitza <code>&amp;&amp;</code>, <code>||</code> i <code>!</code>.</li>
<li>El <code>+</code> amb textos concatena, i l'orde dels operands importa.</li>
<li>El <strong>ternari</strong> <code>? :</code> és un <code>if-else</code> en miniatura.</li>
</ul>
</aside>

<p><strong>Prioritat entre operadors</strong></p>

<p>Quan apareixen diversos operadors en la mateixa expressió, l'orde en què s'avaluen pot canviar el resultat. És el que ocorre en matemàtiques: <code>2 + 3 * 4</code> és 14 i no 20, perquè la multiplicació té prioritat sobre la suma. Esta taula arreplega l'orde en Java, <strong>de major a menor prioritat</strong>:</p>

<div class="java-document-table">
<table>
<tr>
<th scope="col"><p><strong>Nivell</strong></p></th>
<th scope="col"><p><strong>Operadors</strong></p></th>
<th scope="col"><p><strong>Descripció</strong></p></th>
</tr>
<tr>
<td><p>1</p></td>
<td><p><code>expr++   expr--</code></p></td>
<td><p>Postfixos</p></td>
</tr>
<tr>
<td><p>2</p></td>
<td><p><code>++expr   --expr   +expr   -expr   ~   !</code></p></td>
<td><p>Unaris (de dreta a esquerra)</p></td>
</tr>
<tr>
<td><p>3</p></td>
<td><p><code>*   /   %</code></p></td>
<td><p>Multiplicatius</p></td>
</tr>
<tr>
<td><p>4</p></td>
<td><p><code>+   -</code></p></td>
<td><p>Additius (i concatenació)</p></td>
</tr>
<tr>
<td><p>5</p></td>
<td><p><code>&lt;&lt;   &gt;&gt;   &gt;&gt;&gt;</code></p></td>
<td><p>Desplaçament</p></td>
</tr>
<tr>
<td><p>6</p></td>
<td><p><code>&lt;   &gt;   &lt;=   &gt;=   instanceof</code></p></td>
<td><p>Relacionals</p></td>
</tr>
<tr>
<td><p>7</p></td>
<td><p><code>==   !=</code></p></td>
<td><p>Igualtat</p></td>
</tr>
<tr>
<td><p>8</p></td>
<td><p><code>&amp;</code></p></td>
<td><p>AND (bit / lògic)</p></td>
</tr>
<tr>
<td><p>9</p></td>
<td><p><code>^</code></p></td>
<td><p>XOR (bit / lògic)</p></td>
</tr>
<tr>
<td><p>10</p></td>
<td><p><code>|</code></p></td>
<td><p>OR (bit / lògic)</p></td>
</tr>
<tr>
<td><p>11</p></td>
<td><p><code>&amp;&amp;</code></p></td>
<td><p>AND lògic</p></td>
</tr>
<tr>
<td><p>12</p></td>
<td><p><code>||</code></p></td>
<td><p>OR lògic</p></td>
</tr>
<tr>
<td><p>13</p></td>
<td><p><code>? :</code></p></td>
<td><p>Ternari (de dreta a esquerra)</p></td>
</tr>
<tr>
<td><p>14</p></td>
<td><p><code>=   +=   -=   *=   /=   %=  …</code></p></td>
<td><p>Assignació (de dreta a esquerra)</p></td>
</tr>
</table>
</div>

<p>I dos regles més per a completar el quadre:</p>

<ul>
<li>Els operadors de <strong>la mateixa prioritat</strong> s'avaluen d'<strong>esquerra a dreta</strong> (<code>10 - 4 - 3</code> és <code>(10 - 4) - 3 = 3</code>). Les excepcions són els unaris, el ternari i l'assignació, que van de dreta a esquerra.</li>
<li>Els <strong>parèntesis</strong> sempre guanyen: el que va entre parèntesis s'avalua primer.</li>
</ul>

<div class="java-document-table">
<table>
<tr>
<th scope="col"><p><strong>Expressió</strong></p></th>
<th scope="col"><p><strong>Com s'avalua</strong></p></th>
<th scope="col"><p><strong>Resultat</strong></p></th>
</tr>
<tr>
<td><p><code>2 + 3 * 4</code></p></td>
<td><p>3 * 4 = 12; després 2 + 12</p></td>
<td><p><code>14</code></p></td>
</tr>
<tr>
<td><p><code>(2 + 3) * 4</code></p></td>
<td><p>2 + 3 = 5; després 5 * 4</p></td>
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
<p><strong>TRUC</strong></p>
<p>No cal memoritzar la taula de prioritats. Davant del dubte, <strong>utilitza parèntesis</strong>: a més d'evitar errors, el teu codi serà molt més fàcil de llegir per als altres (i per a tu d'ací a sis mesos).</p>
</aside>

<aside class="java-document-note">
<p><strong>MINIREPTE</strong></p>
<p>Quant val <code>7 + 8 / 2 * 3 - 1</code>?</p>
<details>
<summary>Veure la solució</summary>

<p><strong>Solució:</strong> 18. Primer <code>8 / 2 = 4</code>, després <code>4 * 3 = 12</code>, a continuació <code>7 + 12 = 19</code> i finalment <code>19 - 1 = 18</code>.</p>

</details>
</aside>

<aside class="java-document-note">
<p><strong>EN RESUM</strong></p>
<ul>
<li>Una expressió sempre produïx <strong>un valor d'un tipus concret</strong>.</li>
<li>En mesclar tipus, Java promociona al més «gran».</li>
<li>Mana la <strong>prioritat</strong>; a igual prioritat, segons la seua associativitat (per exemple, l’assignació s’agrupa de dreta a esquerra); i els <strong>parèntesis</strong> manen més que ningú.</li>
</ul>
</aside>


</details>

<details class="java-extension">
<summary>Altres operadors booleans: &amp;, | i ^</summary>

<p><strong>Operadors lògics o booleans</strong></p>

<p>Treballen amb valors booleans i retornen un valor booleà. Servixen per a <strong>combinar condicions</strong>: «si té més de 18 anys <strong>i</strong> té carnet».</p>

<div class="java-document-table">
<table>
<tr>
<th scope="col"><p><strong>Operador</strong></p></th>
<th scope="col"><p><strong>Nom</strong></p></th>
<th scope="col"><p><strong>Significat</strong></p></th>
</tr>
<tr>
<td><p><code>&amp;&amp;</code></p></td>
<td><p>AND (curtcircuit)</p></td>
<td><p>Verdader si <strong>els dos</strong> són verdaders</p></td>
</tr>
<tr>
<td><p><code>||</code></p></td>
<td><p>OR (curtcircuit)</p></td>
<td><p>Verdader si <strong>almenys un</strong> és verdader</p></td>
</tr>
<tr>
<td><p><code>!</code></p></td>
<td><p>NOT</p></td>
<td><p>Invertix el valor: el verdader passa a fals i viceversa</p></td>
</tr>
<tr>
<td><p><code>&amp;</code></p></td>
<td><p>AND (sense curtcircuit)</p></td>
<td><p>Com &amp;&amp;, però sempre avalua els dos costats</p></td>
</tr>
<tr>
<td><p><code>|</code></p></td>
<td><p>OR (sense curtcircuit)</p></td>
<td><p>Com ||, però sempre avalua els dos costats</p></td>
</tr>
<tr>
<td><p><code>^</code></p></td>
<td><p>XOR</p></td>
<td><p>Verdader si <strong>un i només un</strong> és verdader</p></td>
</tr>
</table>
</div>

<p>Esta és la seua <strong>taula de veritat</strong>, és a dir, el resultat per a cada combinació possible:</p>

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

<p><strong>EIXIDA PER CONSOLA</strong></p>

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
