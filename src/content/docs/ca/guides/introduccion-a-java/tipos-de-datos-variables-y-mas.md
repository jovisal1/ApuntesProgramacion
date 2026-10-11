---
title: Tipus de dades, variables i més
description: Tipus primitius, variables, constants, operadors, expressions, cadenes i parse.
sidebar:
  order: 3
---

## 1. Introducció

<p><em>Imagina una cuina professional on cada recipient porta una etiqueta: «sal», «sucre», «farina». Si algú intenta posar sucre en el pot de la sal, el sistema activa una alarma abans que el plat arribe a taula. Java funciona exactament així amb les dades.</em></p>

<p>En esta unitat estudiarem els fonaments de Java: els <strong>tipus de dades</strong>, les <strong>variables</strong>, els <strong>operadors</strong>, les <strong>expressions</strong> i les <strong>cadenes de text</strong>. Amb estes peces podràs construir programes de veritat, així que val la pena dominar-les bé.</p>

<p>Comencem pel més important: Java és un llenguatge <strong>fortament tipat</strong>. Això significa tres coses:</p>

<ul>
<li><strong>Tota variable té un tipus</strong> (nombre enter, decimal, text, verdader/fals…).</li>
<li><strong>Tota expressió té un tipus</strong>: el resultat de qualsevol càlcul també és d'un tipus concret.</li>
<li><strong>Cada tipus està estrictament definit</strong>: sabem exactament quins valors admet i quanta memòria ocupa.</li>
</ul>

<p>A més, Java comprova la compatibilitat de tipus en <strong>totes les assignacions</strong> i també quan passem paràmetres a un mètode. Si alguna cosa no encaixa, el compilador es nega a generar el programa fins que ho corregisques.</p>

```java
int edad = 20;
edad = "vint";   // ERROR de compilació:
                   // incompatible types: String cannot be converted to int
```

<aside class="java-document-note">
<p><strong>IDEA CLAU</strong></p>
<p>Que Java siga estricte no és un capritx: <strong>els errors es detecten en compilar, no quan l'usuari ja està utilitzant el teu programa</strong>. És com corregir un examen abans d'entregar-lo, en lloc de descobrir les fallades quan ja t'han posat la nota.</p>
<p><strong>CURIOSITAT</strong></p>
<p>En llenguatges com Python o JavaScript el tipus es comprova mentre el programa s'executa (tipatge dinàmic). És més còmode per a scripts xicotets, però en aplicacions grans pot amagar errors durant mesos. Per això Java és tan popular en el món empresarial i en Android.</p>
</aside>

## 2. Tipus primitius

<p><em>Un tipus primitiu és com la grandària d'un recipient: un gotet, un got, una gerra… Tots servixen per a guardar líquid, però triar la grandària adequada evita vessaments (errors) i malbaratament (memòria).</em></p>

<p>Java definix <strong>8 tipus de dades primitius</strong> (també anomenats tipus simples o elementals): <code>byte</code>, <code>short</code>, <code>int</code>, <code>long</code>, <code>char</code>, <code>float</code>, <code>double</code> i <code>boolean</code>. No són objectes, sinó valors «en brut» guardats directament en memòria, cosa que els fa molt ràpids. S'agrupen en quatre famílies:</p>

<div class="java-document-table">
<table>
<tr>
<th scope="col"><p><strong>Família</strong></p></th>
<th scope="col"><p><strong>Tipus</strong></p></th>
<th scope="col"><p><strong>Servixen per a guardar…</strong></p></th>
</tr>
<tr>
<td><p><strong>Enters</strong></p></td>
<td><p><code>byte</code>, <code>short</code>, <code>int</code>, <code>long</code></p></td>
<td><p>Nombres sense decimals, positius o negatius</p></td>
</tr>
<tr>
<td><p><strong>Coma flotant</strong></p></td>
<td><p><code>float</code>, <code>double</code></p></td>
<td><p>Nombres amb part fraccionària</p></td>
</tr>
<tr>
<td><p><strong>Caràcters</strong></p></td>
<td><p><code>char</code></p></td>
<td><p>Un únic símbol: una lletra, un dígit, un signe…</p></td>
</tr>
<tr>
<td><p><strong>Booleans</strong></p></td>
<td><p><code>boolean</code></p></td>
<td><p>Un valor lògic: verdader o fals</p></td>
</tr>
</table>
</div>

<p>Este quadre resumix la grandària i el rang de cadascun. No cal aprendre-se'l de memòria, però sí tindre'l a mà:</p>

<div class="java-document-table">
<table>
<tr>
<th scope="col"><p><strong>Tipus</strong></p></th>
<th scope="col"><p><strong>Grandària</strong></p></th>
<th scope="col"><p><strong>Rang de valors</strong></p></th>
<th scope="col"><p><strong>Exemple</strong></p></th>
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
<td><p>Unes 7 xifres de precisió</p></td>
<td><p><code>float f = 3.14F;</code></p></td>
</tr>
<tr>
<td><p><code>double</code></p></td>
<td><p>64 bits</p></td>
<td><p>Unes 15-16 xifres de precisió</p></td>
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
<td><p>1 bit lògic</p></td>
<td><p>true o false</p></td>
<td><p><code>boolean ok = true;</code></p></td>
</tr>
</table>
</div>

### 2.1 Enters

<p>Els enters de Java són <strong>amb signe</strong>: admeten valors positius i negatius. Com més bits ocupen, més gran és el seu rang, però més memòria consumixen. N'hi ha quatre:</p>

<ul>
<li><strong>`byte`</strong>: el més xicotet. És molt útil quan treballem amb fluxos de dades (llegir fitxers o rebre informació per la xarxa). Exemple: <code>byte b = 2;</code></li>
<li><strong>`short`</strong>: potser el menys utilitzat de tots. Exemple: <code>short s1 = 11;</code></li>
<li><strong>`int`</strong>: el rei dels enters. L'utilitzaràs constantment: en comptadors, bucles i índexs d'arrays. Exemple: <code>int i1 = 12;</code></li>
<li><strong>`long`</strong>: per a quan un <code>int</code> es queda xicotet. Quan escrius el valor cal afegir una <strong>L</strong> al final per a avisar el compilador. Exemple: <code>long l1 = 9223372036854775807L;</code></li>
</ul>

<aside class="java-document-note">
<p><strong>IDEA CLAU</strong></p>
<p><strong>Per què quasi sempre utilitzem `int`:</strong> encara que un valor siga xicotet i «càpia» en un <code>byte</code> o un <code>short</code>, Java realitza internament les operacions amb <code>int</code>. Utilitzar tipus més xicotets poques vegades estalvia memòria i sovint t'obliga a fer conversions.</p>
</aside>

```java
byte a = 10, b = 20;
byte c = a + b;          // ERROR: a + b es calcula com a int
byte d = (byte)(a + b);  // OK, amb conversió explícita (cast)
int  e = a + b;          // OK i sense complicacions
```

<aside class="java-document-note">
<p><strong>COMPTE AMB AIXÒ</strong></p>
<p><strong>Compte amb els zeros a l'esquerra.</strong> En Java, un nombre que comença per 0 s'interpreta en <strong>octal</strong> (base 8). Per això <code>int i = 010;</code> val 8, no 10, i <code>int i = 09;</code> dona error perquè el dígit 9 no existix en octal.</p>
<p><strong>TRUC</strong></p>
<p>Per a llegir millor els nombres grans pots utilitzar guions baixos: <code>int millon = 1_000_000;</code>. Java els ignora. També pots escriure en binari (<code>0b1010</code>) o en hexadecimal (<code>0xFF</code>).</p>
</aside>

#### Desbordament: quan el comptador fa la volta

<p>Cada tipus té un límit. Si te'n passes, Java <strong>no avisa</strong>: el valor «fa la volta», igual que un comptaquilòmetres que torna a zero.</p>

```java
int max = Integer.MAX_VALUE;   // 2147483647
System.out.println(max + 1);
```

<p><strong>EIXIDA PER CONSOLA</strong></p>

```text
-2147483648
```

<p>Sumar 1 al <code>int</code> més gran possible ens deixa en el més menut. Si les teues dades poden créixer molt (per exemple, un factorial), utilitza <code>long</code>.</p>

### 2.2 Nombres en coma flotant

<p>Servixen per a nombres amb decimals. Java n'oferix dos: <code>float</code> (32 bits) i <code>double</code> (64 bits, molt més precís). I ací va una regla important: <strong>els literals decimals són `double` per defecte</strong>. Si vols un <code>float</code>, has d'afegir una <strong>F</strong> al final (igual que la L de <code>long</code>).</p>

```java
double pi = 3.14159;
float f1 = 3.14159F;
float f2 = 3.14;      // ERROR: 3.14 és un double i no cap en un float
```

<aside class="java-document-note">
<p><strong>COMPTE AMB AIXÒ</strong></p>
<p><strong>Els decimals no sempre són exactes.</strong> Els ordinadors guarden els decimals en binari i alguns nombres (com 0,1) no tenen representació exacta:</p>
</aside>

```java
System.out.println(0.1 + 0.2);
```

<p><strong>EIXIDA PER CONSOLA</strong></p>

```text
0.30000000000000004
```

<p>No és una fallada de Java, ocorre en tots els llenguatges. Per això <strong>no es recomana utilitzar `double` per a quantitats de diners</strong> (més avant coneixeràs <code>BigDecimal</code>). En la majoria de casos utilitza <code>double</code> i oblida't de <code>float</code>.</p>

### 2.3 Booleans

<p>El tipus <code>boolean</code> només admet dos valors: <code>true</code> i <code>false</code>. És el tipus de les decisions: el resultat de qualsevol comparació és un booleà. A diferència d'altres llenguatges, en Java <strong>`true` no és 1 ni `false` és 0</strong>: són valors lògics purs i no es convertixen a nombres.</p>

```java
boolean isOk = true;
boolean isNotOk = false;

int edad = 20;
boolean esMayorDeEdad = edad >= 18;   // true
```

<aside class="java-document-note">
<p><strong>COMPTE AMB AIXÒ</strong></p>
<p>En Java no pots escriure <code>if (1)</code> ni <code>while (0)</code> com en C. La condició ha de ser sempre un <code>boolean</code>.</p>
</aside>

### 2.4 Caràcters

<p>El tipus <code>char</code> guarda <strong>un únic caràcter</strong> i s'escriu entre <strong>cometes simples</strong>. Java utilitza l'estàndard <strong>Unicode</strong> (pots consultar-lo en unicodelookup.com), que amb 16 bits (2 bytes) permet representar 65.536 símbols diferents: lletres i signes de molts idiomes del món.</p>

```java
char letra = 'a';
char codigo = 65;    // equival a 'A', perquè el codi Unicode d'A és 65
```

<p>Això ocorre perquè, en el fons, un <code>char</code> és un nombre: el codi del seu símbol. Per això podem fer coses com incrementar-lo:</p>

```java
class EjemploChar {
    public static void main(String[] args) {
        char ch1, ch2;
        ch1 = 88;              // codi Unicode de 'X'
        ch2 = 'Y';
        System.out.print("ch1 i ch2: ");
        System.out.println(ch1 + " " + ch2);
        ch1++;                 // passem de 'X' a 'Y'
        System.out.println("ch1 ara és " + ch1);
    }
}
```

<p><strong>EIXIDA PER CONSOLA</strong></p>

```text
ch1 i ch2: X Y
ch1 ara és Y
```

<aside class="java-document-note">
<p><strong>COMPTE AMB AIXÒ</strong></p>
<p><code>'a'</code> (cometes simples) és un <strong>char</strong>; <code>"a"</code> (cometes dobles) és un <strong>String</strong>. Semblen el mateix, però són tipus diferents i no es poden mesclar lliurement.</p>
<p><strong>TRUC</strong></p>
<p>Tres codis que convé recordar: <code>'0'</code> val 48, <code>'A'</code> val 65 i <code>'a'</code> val 97. Fixa't que entre una majúscula i la seua minúscula hi ha sempre 32 de diferència.</p>
</aside>

### 2.5 Valors per defecte

<p>Els tipus primitius tenen un valor inicial per defecte, però <strong>només quan la variable és un atribut d'una classe o un element d'un array</strong> (ho veuràs amb detall quan estudiem classes). Estos són els valors:</p>

<div class="java-document-table">
<table>
<tr>
<th scope="col"><p><strong>Tipus</strong></p></th>
<th scope="col"><p><strong>Valor per defecte</strong></p></th>
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
<td><p><code>\u0000  (el caràcter «nul»)</code></p></td>
</tr>
<tr>
<td><p><code>boolean</code></p></td>
<td><p><code>false</code></p></td>
</tr>
<tr>
<td><p><code>Objectes (String, arrays…)</code></p></td>
<td><p><code>null  (no apunta a res)</code></p></td>
</tr>
</table>
</div>

<aside class="java-document-note">
<p><strong>COMPTE AMB AIXÒ</strong></p>
<p><strong>Les variables locals NO tenen valor per defecte.</strong> Una variable declarada dins d'un mètode ha d'inicialitzar-se abans d'utilitzar-la; si no, el compilador t'ho impedix.</p>
</aside>

```java
public class ValoresPorDefecto {
    static int contador;      // atribut: val 0
    static boolean activo;    // atribut: val false
    static String nombre;     // atribut: val null

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

<p><strong>EIXIDA PER CONSOLA</strong></p>

```text
0
false
null
```

### 2.6 Classes embolcall

<p>Els tipus primitius són ràpids, però tenen una limitació: <strong>no són objectes</strong>. I hi ha situacions (com les col·leccions que veuràs més avant) en què Java necessita objectes. Per a això hi ha les <strong>classes embolcall</strong> (*wrapper classes*): cada primitiu té la seua, que «embolica» el seu valor dins d'un objecte i li regala mètodes molt útils.</p>

<div class="java-document-table">
<table>
<tr>
<th scope="col"><p><strong>Tipus primitiu</strong></p></th>
<th scope="col"><p><strong>Classe embolcall</strong></p></th>
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

<p>Java convertix automàticament entre un primitiu i el seu embolcall quan fa falta. Estes conversions s'anomenen <strong>autoboxing</strong> (empaquetar) i <strong>unboxing</strong> (desempaquetar):</p>

```java
Integer a = 150;                       // autoboxing: int -> Integer
int b = a;                             // unboxing:   Integer -> int
Integer c = Integer.valueOf("150");    // crear un Integer des d'un text

System.out.println(Integer.toBinaryString(10));   // 1010
System.out.println(Integer.toHexString(255));     // ff
System.out.println(Integer.toOctalString(8));     // 10
System.out.println(Integer.MAX_VALUE);            // 2147483647
```

<p>Estes són les famílies de mètodes més útils de les classes embolcall:</p>

<div class="java-document-table">
<table>
<tr>
<th scope="col"><p><strong>Per a què servixen</strong></p></th>
<th scope="col"><p><strong>Mètodes</strong></p></th>
<th scope="col"><p><strong>Exemple</strong></p></th>
</tr>
<tr>
<td><p>D'embolcall a primitiu</p></td>
<td><p><code>byteValue()</code>, <code>shortValue()</code>, <code>intValue()</code>, <code>longValue()</code>, <code>floatValue()</code>, <code>doubleValue()</code></p></td>
<td><p><code>c.intValue()</code></p></td>
</tr>
<tr>
<td><p>De text a primitiu</p></td>
<td><p><code>parseByte()</code>, <code>parseShort()</code>, <code>parseInt()</code>, <code>parseLong()</code>, <code>parseFloat()</code>, <code>parseDouble()</code></p></td>
<td><p><code>Integer.parseInt("42")</code></p></td>
</tr>
<tr>
<td><p>Canviar de base (Integer i Long)</p></td>
<td><p><code>toBinaryString()</code>, <code>toOctalString()</code>, <code>toHexString()</code></p></td>
<td><p><code>Integer.toHexString(255)</code></p></td>
</tr>
<tr>
<td><p>Crear un objecte des de text</p></td>
<td><p><code>valueOf()</code> (mètode estàtic)</p></td>
<td><p><code>Integer.valueOf("150")</code></p></td>
</tr>
</table>
</div>

<aside class="java-document-note">
<p><strong>MINIREPTE</strong></p>
<p>Què imprimixen estes dos línies?</p>
<ul>
<li><code>System.out.println('a' + 1);</code></li>
<li><code>System.out.println((char)('a' + 1));</code></li>
</ul>
<details>
<summary>Veure la solució</summary>

<p><strong>Solució:</strong> la primera imprimix <code>98</code> (el <code>char</code> es convertix en nombre, 97, i se li suma 1). La segona imprimix <code>b</code> (convertim eixe 98 una altra vegada en caràcter).</p>

</details>
</aside>

<aside class="java-document-note">
<p><strong>EN RESUM</strong></p>
<ul>
<li>Java té <strong>8 tipus primitius</strong>: 4 enters, 2 decimals, <code>char</code> i <code>boolean</code>.</li>
<li>Utilitza <code>int</code> per a enters i <code>double</code> per a decimals llevat que tingues una bona raó.</li>
<li><code>long</code> necessita el sufix <strong>L</strong>, <code>float</code> necessita el sufix <strong>F</strong>.</li>
<li>Les variables locals <strong>no</strong> s'inicialitzen a soles.</li>
<li>Cada primitiu té la seua <strong>classe embolcall</strong> amb mètodes útils.</li>
</ul>
</aside>

## 3. Variables

<p><em>Una variable és com una caixa etiquetada en un magatzem. L'etiqueta és el nom, el tipus de caixa indica què pot guardar (una caixa de sabates no servix per a guardar aigua) i dins està el contingut, que pot canviar quan vulguem.</em></p>

<p>La variable és la <strong>unitat bàsica d'emmagatzematge</strong> d'un programa Java. Tota variable es definix mitjançant la combinació de tres elements: un <strong>identificador</strong> (el seu nom), un <strong>tipus</strong> i un <strong>valor inicial</strong> (opcional). A més, cada variable té un <strong>abast</strong>, que definix on es pot utilitzar, i un <strong>temps de vida</strong>.</p>

### 3.1 Declarar una variable

<p>En Java <strong>tota variable ha de declarar-se abans d'utilitzar-la</strong>. La forma bàsica és:</p>

```java
tipo identificador [= valor] [, identificador [= valor] ...];
```

<p>Ja hem vist alguns exemples solts; ací en tens uns altres més complets:</p>

```java
int a, b, c;             // declara 3 int: a, b i c (sense valor inicial)
int d = 3, e, f = 5;     // declara 3 int; inicialitza d (3) i f (5)
byte z = 22;             // declara un byte z i l'inicialitza a 22
double pi = 3.14159;     // declara un double amb un valor aproximat de pi
char x = 'x';            // declara un char amb el valor 'x'
```

#### Regles per a triar el nom

<div class="java-document-table">
<table>
<tr>
<th scope="col"><p><strong>Nom</strong></p></th>
<th scope="col"><p><strong>Vàlid?</strong></p></th>
<th scope="col"><p><strong>Motiu</strong></p></th>
</tr>
<tr>
<td><p><code>nombre</code></p></td>
<td><p>Sí</p></td>
<td><p>Comença per lletra</p></td>
</tr>
<tr>
<td><p><code>_total</code></p></td>
<td><p>Sí</p></td>
<td><p>Pot començar per guió baix (o per $)</p></td>
</tr>
<tr>
<td><p><code>nota1</code></p></td>
<td><p>Sí</p></td>
<td><p>Pot portar dígits, però no al principi</p></td>
</tr>
<tr>
<td><p><code>2pasos</code></p></td>
<td><p>No</p></td>
<td><p>No pot començar per un nombre</p></td>
</tr>
<tr>
<td><p><code>mi variable</code></p></td>
<td><p>No</p></td>
<td><p>No admet espais</p></td>
</tr>
<tr>
<td><p><code>class</code></p></td>
<td><p>No</p></td>
<td><p>És una paraula reservada del llenguatge</p></td>
</tr>
<tr>
<td><p><code>edad i Edad</code></p></td>
<td><p>Sí</p></td>
<td><p>Són dos variables diferents: Java distingix majúscules de minúscules</p></td>
</tr>
</table>
</div>

<aside class="java-document-note">
<p><strong>TRUC</strong></p>
<p><strong>Convenció d'estil:</strong> els programadors Java escriuen les variables en *camelCase*: comencen en minúscula i cada paraula nova va en majúscula (<code>edadAlumno</code>, <code>precioTotal</code>). Tria noms que expliquen què conté la variable: <code>precioTotal</code> s'entén, <code>x1</code> no.</p>
</aside>

#### Declarar i assignar

<p>Declarar i assignar poden fer-se en el mateix pas o en passos separats:</p>

```java
int x;          // declaració
x = 10;         // assignació

int y = 20;     // declaració + assignació en un sol pas
```

#### Inicialització dinàmica

<p>En inicialitzar una variable no estem limitats a valors fixos: Java permet utilitzar <strong>qualsevol expressió vàlida</strong> en el moment de la declaració. En este exemple calculem la hipotenusa d'un triangle rectangle a partir dels seus catets:</p>

```java
class InicializacionDinamica {
    public static void main(String[] args) {
        double a = 3.0, b = 4.0;
        // c s'inicialitza dinàmicament. Math.sqrt calcula l'arrel quadrada
        double c = Math.sqrt(a * a + b * b);
        System.out.println("La hipotenusa és " + c);
    }
}
```

<p><strong>EIXIDA PER CONSOLA</strong></p>

```text
La hipotenusa és 5.0
```

<aside class="java-document-note">
<p><strong>CURIOSITAT</strong></p>
<p>Des de Java 10 pots deixar que el compilador deduïsca el tipus amb <code>var</code>: <code>var nombre = "Ana";</code>. Compte: continua sent tipatge fort, <code>nombre</code> continuarà sent un <code>String</code> per sempre; simplement ens estalviem escriure'l.</p>
</aside>

### 3.2 Abast i visibilitat d'una variable

<p>Java permet declarar variables dins de qualsevol <strong>bloc</strong> de codi. Un bloc comença amb una clau d'obertura <code>{</code> i acaba amb una clau de tancament <code>}</code>, i <strong>cada bloc crea un nou abast</strong> (en anglés, *scope*). L'abast determina dos coses: quines parts del programa poden veure la variable i quant de temps viu.</p>

<aside class="java-document-note">
<p><strong>IDEA CLAU</strong></p>
<p>Una variable <strong>naix</strong> quan es declara i <strong>mor</strong> quan acaba el bloc en què va ser declarada. Fora d'eixe bloc és com si mai haguera existit.</p>
</aside>

```java
class ScopeVariables {
    public static void main(String[] args) {
        int x;                 // x existix en tot el mètode main
        x = 10;
        if (x == 10) {         // comença un nou bloc = nou abast
            int y = 20;        // y només existix dins d'este bloc
            System.out.println("x i y: " + x + " " + y);
            x = y * 2;
        }
        // y = 100;            // ERROR: y no existix fora del bloc
        System.out.println("x val " + x);   // x sí que continua existint
    }
}
```

<p><strong>EIXIDA PER CONSOLA</strong></p>

```text
x i y: 10 20
x val 40
```

<aside class="java-document-note">
<p><strong>COMPTE AMB AIXÒ</strong></p>
<p>En Java <strong>no pots declarar una variable amb el mateix nom que una altra que ja siga visible</strong> en un bloc exterior. Este codi no compila:</p>
</aside>

```java
int x = 1;
if (x == 1) {
    int x = 2;   // ERROR: variable x is already defined
}
```

<aside class="java-document-note">
<p><strong>MINIREPTE</strong></p>
<p>Per què este codi no compila?</p>
</aside>

```java
if (true) {
    int y = 5;
}
System.out.println(y);
```

<details>
<summary>Veure la solució</summary>

<p><strong>Solució:</strong> <code>y</code> es va declarar dins del bloc de l'<code>if</code> i desapareix en tancar la clau <code>}</code>. En intentar utilitzar-la fora, Java no la troba.</p>

</details>

<aside class="java-document-note">
<p><strong>EN RESUM</strong></p>
<ul>
<li>Tota variable es <strong>declara abans d'utilitzar-la</strong>: tipus + nom (+ valor opcional).</li>
<li>Els noms seguixen unes regles i una convenció (*camelCase*).</li>
<li>Una variable només existix dins del <strong>bloc `{ }`</strong> on es declara.</li>
</ul>
</aside>

## 4. Constants

<p><em>El nombre de dies de la setmana, el valor de π, el percentatge d'IVA… Si una dada no ha de canviar mai, dis-li-ho a Java i ell s'encarregarà de protegir-la.</em></p>

<p>Una constant és un valor fix al qual posem nom. En Java es creen afegint la paraula clau <strong>`final`</strong> a la declaració:</p>

```java
final double PI = 3.14159;
```

<p>El modificador <code>final</code> convertix <code>PI</code> en un valor <strong>que no pot modificar-se</strong>. Si ho intentes, el compilador et para en sec:</p>

```java
final double PI = 3.14159;
PI = 3;    // ERROR: cannot assign a value to final variable PI
```

<aside class="java-document-note">
<p><strong>TRUC</strong></p>
<p><strong>Convenció:</strong> els noms de constants s'escriuen en <strong>MAJÚSCULES</strong> i separant paraules amb guió baix: <code>MAX_INTENTOS</code>, <code>IVA_GENERAL</code>, <code>DIAS_SEMANA</code>. Així es distingixen d'una ullada de les variables normals.</p>
</aside>

### Per què utilitzar constants?

<p>Imagina que veus en un programa l'operació <code>precio * 1.21</code>. Què és 1.21? Un nombre solt que apareix sense explicació s'anomena <strong>«nombre màgic»</strong> i és una font d'errors: si l'IVA canvia, hauràs de buscar eixe 1.21 per tot el codi. Amb una constant, el codi s'explica a soles i el valor es canvia en un únic lloc:</p>

```java
final double IVA = 1.21;
double total = precio * IVA;    // s'entén a soles
```

<aside class="java-document-note">
<p><strong>CURIOSITAT</strong></p>
<p>No sempre has de definir π tu mateix: Java ja porta la seua pròpia constant, <code>Math.PI</code>, amb tota la precisió d'un <code>double</code>.</p>
</aside>

<aside class="java-document-note">
<p><strong>EN RESUM</strong></p>
<ul>
<li><code>final</code> fa que una variable no puga canviar després d'assignar-la.</li>
<li>S'anomenen en <strong>MAJÚSCULES_AMB_GUIÓ_BAIX</strong>.</li>
<li>Eviten els «nombres màgics» i fan el codi més llegible.</li>
</ul>
</aside>

## 5. Operadors

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

### 5.1 Operadors aritmètics

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

### 5.2 Operadors aritmètics incrementals

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

### 5.3 Operadors aritmètics combinats

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

### 5.4 Operadors de relació

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

### 5.5 Operadors lògics o booleans

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

#### Curtcircuit: deixar d'avaluar quan ja se sap la resposta

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

### 5.6 Operadors de bit

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

### 5.7 Operador de concatenació de cadenes

<p>El símbol <code>+</code> té doble funció: amb nombres <strong>suma</strong> i amb textos <strong>concatena</strong> (unix), retornant un <code>String</code> nou. Si només un dels operands és text, Java convertix l'altre a text automàticament. Compte, perquè l'orde importa:</p>

<div class="java-document-table">
<table>
<tr>
<th scope="col"><p><strong>Expressió</strong></p></th>
<th scope="col"><p><strong>Resultat</strong></p></th>
<th scope="col"><p><strong>Per què</strong></p></th>
</tr>
<tr>
<td><p><code>"Hola " + "món"</code></p></td>
<td><p><code>Hola món</code></p></td>
<td><p>Unix dos textos</p></td>
</tr>
<tr>
<td><p><code>"Edat: " + 20</code></p></td>
<td><p><code>Edat: 20</code></p></td>
<td><p>El 20 es convertix en text</p></td>
</tr>
<tr>
<td><p><code>1 + 2 + "3"</code></p></td>
<td><p><code>33</code></p></td>
<td><p>Primer suma 1 + 2 = 3 i després concatena amb "3"</p></td>
</tr>
<tr>
<td><p><code>"1" + 2 + 3</code></p></td>
<td><p><code>123</code></p></td>
<td><p>Ja hi ha text des del principi: tot es concatena</p></td>
</tr>
<tr>
<td><p><code>"1" + (2 + 3)</code></p></td>
<td><p><code>15</code></p></td>
<td><p>Els parèntesis obliguen a sumar primer</p></td>
</tr>
</table>
</div>

### 5.8 Operador ternari ( ? : )

<p>Java inclou un operador especial de <strong>tres operands</strong> que substituïx certs <code>if-else</code> senzills. Pot semblar estrany al principi, però quan el domines és molt còmode. La seua forma general és:</p>

```java
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

### 5.9 Separadors

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

## 6. Expressions

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

<p>Quan en una mateixa operació es mesclen tipus diferents, Java <strong>promociona</strong> els operands al tipus «més gran» per a no perdre informació. Estes són les regles bàsiques:</p>

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

### 6.1 Prioritat entre operadors

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
<li>Mana la <strong>prioritat</strong>; a igual prioritat, d'esquerra a dreta; i els <strong>parèntesis</strong> manen més que ningú.</li>
</ul>
</aside>

## 7. Cadenes de text

<p>Una cadena de text (en anglés, *string*) és un <strong>bloc de lletres</strong> que utilitzem per a guardar paraules i frases. En alguns llenguatges caldria utilitzar un array de <code>char</code>, però en Java no fa falta: el llenguatge incorpora un tipus específic per a això.</p>

<p>En realitat hi ha dos variants principals: la classe <strong>`String`</strong> i la classe <strong>`StringBuilder`</strong>. La diferència és essencial:</p>

<div class="java-document-table">
<table>
<tr>
<th scope="col"></th>
<th scope="col"><p><strong>String</strong></p></th>
<th scope="col"><p><strong>StringBuilder</strong></p></th>
</tr>
<tr>
<td><p>Pot modificar-se?</p></td>
<td><p><strong>No</strong> (és *immutable*)</p></td>
<td><p><strong>Sí</strong> (és *mutable*)</p></td>
</tr>
<tr>
<td><p>Què passa en «modificar-la»</p></td>
<td><p>Java crea una cadena nova i l'original queda intacta</p></td>
<td><p>Es canvia la mateixa cadena, sense crear-ne una altra</p></td>
</tr>
<tr>
<td><p>Analogia</p></td>
<td><p>Tinta indeleble: per a canviar alguna cosa cal escriure-la de nou</p></td>
<td><p>Pissarra: esborres, inserixes i canvies sobre la mateixa</p></td>
</tr>
<tr>
<td><p>Quan utilitzar-la</p></td>
<td><p>Quasi sempre: textos que es lligen, comparen o mostren</p></td>
<td><p>Quan modificaràs el text moltes vegades (per exemple, dins d'un bucle)</p></td>
</tr>
</table>
</div>

### String

<p>Podem <strong>concatenar</strong> cadenes (unir-ne dos per a formar-ne una de nova) amb el signe <code>+</code>, igual que sumem nombres. I hi ha dos formes de declarar un <code>String</code>:</p>

```java
String nombre = "cadena";                      // la forma habitual: un literal
String otro = new String("cadena");    // amb constructor (menys habitual)
```

<aside class="java-document-note">
<p><strong>COMPTE AMB AIXÒ</strong></p>
<p><strong>Els `String` no es comparen amb `==`.</strong> Eixe operador comprova si són el *mateix objecte*, no si tenen el mateix text. Per a comparar contingut cal utilitzar <code>equals()</code>:</p>
</aside>

```java
String a = "hola";
String b = new String("hola");
System.out.println(a == b);        // compara si són el mateix objecte
System.out.println(a.equals(b));   // compara el contingut
```

<p><strong>EIXIDA PER CONSOLA</strong></p>

```text
false
true
```

<p>Estos són els mètodes més importants de la classe <code>String</code>. En els exemples suposem que <code>texto</code> val <code>"Java és genial"</code>:</p>

<div class="java-document-table">
<table>
<tr>
<th scope="col"><p><strong>Mètode</strong></p></th>
<th scope="col"><p><strong>Què fa</strong></p></th>
<th scope="col"><p><strong>Exemple → resultat</strong></p></th>
</tr>
<tr>
<td><p><code>length()</code></p></td>
<td><p>Longitud de la cadena</p></td>
<td><p>texto.length() → 14</p></td>
</tr>
<tr>
<td><p><code>charAt(n)</code></p></td>
<td><p>Caràcter que hi ha en la posició n</p></td>
<td><p>texto.charAt(0) → 'J'</p></td>
</tr>
<tr>
<td><p><code>indexOf('c')</code></p></td>
<td><p>Posició de la primera aparició del caràcter (o -1 si no hi és)</p></td>
<td><p>texto.indexOf('a') → 1</p></td>
</tr>
<tr>
<td><p><code>lastIndexOf('c')</code></p></td>
<td><p>Posició de l'última aparició del caràcter</p></td>
<td><p>texto.lastIndexOf('a') → 12</p></td>
</tr>
<tr>
<td><p><code>substring(n1, n2)</code></p></td>
<td><p>Subcadena des de n1 fins a n2 - 1</p></td>
<td><p>texto.substring(5, 7) → "és"</p></td>
</tr>
<tr>
<td><p><code>toUpperCase()</code></p></td>
<td><p>Convertix tot a majúscules</p></td>
<td><p>texto.toUpperCase() → "JAVA ÉS GENIAL"</p></td>
</tr>
<tr>
<td><p><code>toLowerCase()</code></p></td>
<td><p>Convertix tot a minúscules</p></td>
<td><p>texto.toLowerCase() → "java és genial"</p></td>
</tr>
<tr>
<td><p><code>equals("cad")</code></p></td>
<td><p>true si el contingut és idèntic</p></td>
<td><p>texto.equals("java és genial") → false</p></td>
</tr>
<tr>
<td><p><code>equalsIgnoreCase("cad")</code></p></td>
<td><p>Com equals, sense distingir majúscules</p></td>
<td><p>texto.equalsIgnoreCase("java és genial") → true</p></td>
</tr>
<tr>
<td><p><code>compareTo(otro)</code></p></td>
<td><p>0 si són iguals; negatiu si va abans alfabèticament; positiu si va després</p></td>
<td><p>"a".compareTo("b") → -1</p></td>
</tr>
<tr>
<td><p><code>trim()</code></p></td>
<td><p>Lleva els espais dels extrems (no els del mig)</p></td>
<td><p>"  hola  ".trim() → "hola"</p></td>
</tr>
<tr>
<td><p><code>valueOf(N)</code></p></td>
<td><p>Convertix el valor N (de qualsevol tipus) a String</p></td>
<td><p>String.valueOf(42) → "42"</p></td>
</tr>
<tr>
<td><p><code>replace(viejo, nuevo)</code></p></td>
<td><p>Substituïx totes les aparicions d'un caràcter</p></td>
<td><p>texto.replace('a', 'o') → "Jovo és geniol"</p></td>
</tr>
</table>
</div>

<aside class="java-document-note">
<p><strong>COMPTE AMB AIXÒ</strong></p>
<p>Com que <code>String</code> és immutable, els seus mètodes <strong>no modifiquen la cadena original: en retornen una de nova</strong>. Si no guardes el resultat, es perd:</p>
</aside>

```java
String texto = "hola";
texto.toUpperCase();              // no fa res útil: el resultat es descarta
System.out.println(texto);        // hola

texto = texto.toUpperCase();      // ara sí: guardem la cadena nova
System.out.println(texto);        // HOLA
```

<p>Vegem diversos d'estos mètodes funcionant en un mateix programa:</p>

```java
public class Strings {
    public static void main(String[] args) {
        String texto1 = "Primera cadena de text";           // literal
        String texto2 = new String("Segona cadena de text");  // constructor

        System.out.println("La primera cadena de text és:");
        System.out.println(texto1);
        System.out.println("Concatenem les dos: " + texto1 + " " + texto2);
        System.out.println("Diversos: " + texto1 + " " + 10 + " " + 23.5);
        System.out.println("Longitud de la segona: " + texto2.length());
        System.out.println("compareTo: " + texto1.compareTo(texto2));
        System.out.println("La segona lletra de texto2: " + texto2.charAt(1));
        System.out.println("texto2 en majúscules: " + texto2.toUpperCase());
        System.out.println("Posicions 1 i 2: " + texto2.substring(1, 3));
    }
}
```

<p><strong>EIXIDA PER CONSOLA</strong></p>

```text
La primera cadena de text és:
Primera cadena de text
Concatenem les dos: Primera cadena de text Segona cadena de text
Diversos: Primera cadena de text 10 23.5
Longitud de la segona: 21
compareTo: -3
La segona lletra de texto2: e
texto2 en majúscules: SEGONA CADENA DE TEXT
Posicions 1 i 2: eg
```

<p>Fixa't en el <code>-3</code>: <code>compareTo</code> compara lletra a lletra i la primera diferència està en la inicial. La <code>P</code> (codi 80) va abans que la <code>S</code> (codi 83), i la diferència és 80 - 83 = -3.</p>

### StringBuilder

<p>Si modificaràs un text moltes vegades, <code>StringBuilder</code> és la ferramenta adequada: permet <strong>inserir, esborrar o invertir</strong> sense crear una cadena nova cada vegada (a canvi de ser lleugerament menys eficient per a operacions simples). Els seus mètodes principals:</p>

<div class="java-document-table">
<table>
<tr>
<th scope="col"><p><strong>Mètode</strong></p></th>
<th scope="col"><p><strong>Què fa</strong></p></th>
</tr>
<tr>
<td><p><code>append(X)</code></p></td>
<td><p>Afig X al final de la cadena. X pot ser de qualsevol tipus</p></td>
</tr>
<tr>
<td><p><code>insert(posicion, X)</code></p></td>
<td><p>Inserix X en la posició indicada. X pot ser de qualsevol tipus</p></td>
</tr>
<tr>
<td><p><code>setCharAt(posicion, c)</code></p></td>
<td><p>Canvia el caràcter de la posició indicada pel caràcter c</p></td>
</tr>
<tr>
<td><p><code>charAt(posicion)</code></p></td>
<td><p>Retorna el caràcter que hi ha en la posició indicada</p></td>
</tr>
<tr>
<td><p><code>indexOf('c')</code></p></td>
<td><p>Posició de la primera aparició del caràcter (-1 si no el troba)</p></td>
</tr>
<tr>
<td><p><code>lastIndexOf('c')</code></p></td>
<td><p>Posició de l'última aparició del caràcter (-1 si no el troba)</p></td>
</tr>
<tr>
<td><p><code>substring(n1, n2)</code></p></td>
<td><p>Retorna un String entre les posicions n1 i n2 - 1. Sense n2, arriba fins al final</p></td>
</tr>
<tr>
<td><p><code>delete(inicio, fin)</code></p></td>
<td><p>Elimina els caràcters des d'inicio fins a fin - 1</p></td>
</tr>
<tr>
<td><p><code>reverse()</code></p></td>
<td><p>Invertix el contingut de la cadena</p></td>
</tr>
<tr>
<td><p><code>length()</code></p></td>
<td><p>Retorna el nombre de caràcters</p></td>
</tr>
<tr>
<td><p><code>toString()</code></p></td>
<td><p>Retorna el String equivalent</p></td>
</tr>
</table>
</div>

```java
public class EjemploStringBuilder {
    public static void main(String[] args) {
        StringBuilder texto = new StringBuilder("Una altra prova");
        texto.append(" més");     // modifica el MATEIX objecte, sense crear-ne un altre
        System.out.println("Després d'append:  " + texto);

        texto.insert(2, "1");     // inserix "1" en la posició 2
        System.out.println("Després d'insert:  " + texto);

        texto.reverse();          // li fa la volta al contingut
        System.out.println("Després de reverse: " + texto);

        System.out.println("En majúscules: " + texto.toString().toUpperCase());
    }
}
```

<p><strong>EIXIDA PER CONSOLA</strong></p>

```text
Després d'append:  Una altra prova més
Després d'insert:  Un1a altra prova més
Després de reverse: sém avorp artla a1nU
En majúscules: SÉM AVORP ARTLA A1NU
```

<aside class="java-document-note">
<p><strong>MINIREPTE</strong></p>
<p><strong>És un palíndrom?</strong> Un palíndrom és una paraula que es llig igual del dret i del revés («reconocer», «anilina»). Escriu un programa que diga si una paraula ho és. (Pista: <code>StringBuilder</code> té un mètode que et ve de perles, i recorda com es comparen els textos.)</p>
</aside>

<details>
<summary>Veure la solució</summary>

<p>Solució:</p>

```java
String palabra = "reconocer";
String invertida = new StringBuilder(palabra).reverse().toString();
System.out.println(palabra.equals(invertida));    // true
```

</details>

<aside class="java-document-note">
<p><strong>EN RESUM</strong></p>
<ul>
<li><code>String</code> és <strong>immutable</strong> i es compara amb <code>equals()</code>; <code>StringBuilder</code> és <strong>mutable</strong>.</li>
</ul>
</aside>

## 8. Parse: de text a nombre

<p><em>L'usuari tecleja un 2 en pantalla, però per a Java això no és el nombre 2, sinó el text «2». I amb un text no es pot multiplicar. Necessitem un traductor: això és el que fa parse.</em></p>

<p>Quasi tots els llenguatges de programació oferixen la possibilitat de transformar un valor de tipus «cadena de text» en un de numèric. Per exemple, convertir la cadena <code>"2"</code> en el valor enter <code>2</code>. Una vegada convertit, podem treballar amb ell com amb qualsevol altra dada primitiva (<code>int</code>, <code>float</code>, etc.).</p>

<p>En Java esta conversió es realitza amb les <strong>classes embolcall</strong> que vam veure en el capítol 2. Cadascuna té un mètode que convertix un <code>String</code> al tipus primitiu corresponent. Com a norma general, el nom de l'embolcall coincidix amb el del primitiu, però començant per majúscula. Estes són totes les opcions:</p>

<div class="java-document-table">
<table>
<tr>
<th scope="col"><p><strong>Tipus</strong></p></th>
<th scope="col"><p><strong>Classe embolcall</strong></p></th>
<th scope="col"><p><strong>Mètode de conversió</strong></p></th>
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

<p>Només has de cridar el mètode de la classe embolcall apropiada. En este programa demanem un nombre per teclat (que Java rep com a text), el convertim i l'utilitzem en un càlcul:</p>

```java
import java.util.Scanner;

public class ClasesEnvoltura {
    public static void main(String[] args) {
        Scanner entrada = new Scanner(System.in);
        System.out.print("Dona'm un nombre enter: ");
        String numeroEnTexto = entrada.nextLine();      // arriba com a text

        // Convertim el text a int amb la classe embolcall Integer
        int numero = Integer.parseInt(numeroEnTexto);
        System.out.println("El nombre enter resultant és: " + numero);

        // Ara és un nombre de veritat: podem operar amb ell
        System.out.println("El seu doble és: " + (numero * 2));
    }
}
```

<p><strong>EIXIDA PER CONSOLA</strong></p>

```text
Dona'm un nombre enter: 21
El nombre enter resultant és: 21
El seu doble és: 42
```

<aside class="java-document-note">
<p><strong>COMPTE AMB AIXÒ</strong></p>
<p><strong>Si el text no és un nombre vàlid, el programa falla</strong> amb una excepció anomenada <code>NumberFormatException</code>. Això ocorre amb <code>"abc"</code>, amb <code>"3.5"</code> si utilitzes <code>parseInt</code> (no és un enter) o amb <code>" 12"</code> amb espais davant (utilitza <code>trim()</code> per a llevar-los).</p>
</aside>

<p>Més avant aprendràs a gestionar estos errors amb <code>try-catch</code>. Ací tens un avanç:</p>

```java
try {
    int n = Integer.parseInt(texto);
    System.out.println("Nombre vàlid: " + n);
} catch (NumberFormatException e) {
    System.out.println("Això no és un nombre enter");
}
```

<aside class="java-document-note">
<p><strong>TRUC</strong></p>
<p><strong>El camí invers</strong> (de nombre a text) és encara més fàcil: <code>String.valueOf(42)</code> o simplement <code>"" + 42</code>. I per a un <code>char</code> no existix «parseChar»: s'obté amb <code>texto.charAt(0)</code>.</p>
</aside>

<aside class="java-document-note">
<p><strong>MINIREPTE</strong></p>
<p>Escriu un programa que demane dos nombres enters per teclat i mostre la seua suma.</p>
</aside>

<details>
<summary>Veure la solució</summary>

<p>Solució:</p>

```java
Scanner sc = new Scanner(System.in);
System.out.print("Primer nombre: ");
int a = Integer.parseInt(sc.nextLine());
System.out.print("Segon nombre: ");
int b = Integer.parseInt(sc.nextLine());
System.out.println("La suma és " + (a + b));
```

</details>

<aside class="java-document-note">
<p><strong>EN RESUM</strong></p>
<ul>
<li>El que l'usuari tecleja arriba com a <strong>text</strong>; per a operar cal convertir-lo.</li>
<li>S'utilitza <code>Integer.parseInt()</code>, <code>Double.parseDouble()</code>, etc.</li>
<li>Si el text no té format numèric, es llança <code>NumberFormatException</code>.</li>
</ul>
</aside>

<p><strong>PER A REPASSAR</strong></p>

## Full de repàs i errors típics

<p><em>Abans de tancar el llibre, dos ferramentes per a tindre sempre a mà: un resum de tot el que hem vist i la llista d'entropessons més habituals.</em></p>

### Full de repàs

<div class="java-document-table">
<table>
<tr>
<th scope="col"><p><strong>Tema</strong></p></th>
<th scope="col"><p><strong>El que has de recordar</strong></p></th>
</tr>
<tr>
<td><p><strong>Tipus primitius</strong></p></td>
<td><p><code>byte</code>, <code>short</code>, <code>int</code>, <code>long</code>, <code>float</code>, <code>double</code>, <code>char</code>, <code>boolean</code>. Per defecte: <code>int</code> per a enters i <code>double</code> per a decimals.</p></td>
</tr>
<tr>
<td><p><strong>Sufixos</strong></p></td>
<td><p><code>long</code> → <strong>L</strong> (<code>5L</code>); <code>float</code> → <strong>F</strong> (<code>3.14F</code>).</p></td>
</tr>
<tr>
<td><p><strong>Variables</strong></p></td>
<td><p>Es declaren abans d'utilitzar-se i només viuen dins del seu bloc <code>{ }</code>. Les locals no s'inicialitzen a soles.</p></td>
</tr>
<tr>
<td><p><strong>Constants</strong></p></td>
<td><p><code>final</code> + NOM_EN_MAJÚSCULES.</p></td>
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
<tr>
<td><p><strong>Cadenes</strong></p></td>
<td><p><code>String</code> immutable, es compara amb <code>equals()</code> · <code>StringBuilder</code> mutable.</p></td>
</tr>
<tr>
<td><p><strong>Parse</strong></p></td>
<td><p><code>Integer.parseInt("42")</code>, <code>Double.parseDouble("3.5")</code>.</p></td>
</tr>
</table>
</div>

### Errors típics

<div class="java-document-table">
<table>
<tr>
<th scope="col"><p><strong>#</strong></p></th>
<th scope="col"><p><strong>L'error</strong></p></th>
<th scope="col"><p><strong>Com evitar-lo</strong></p></th>
</tr>
<tr>
<td><p>1</p></td>
<td><p>Escriure <code>float f = 3.14;</code> o <code>long l = 5000000000;</code></p></td>
<td><p>Afig el sufix: <code>3.14F</code>, <code>5000000000L</code>.</p></td>
</tr>
<tr>
<td><p>2</p></td>
<td><p>Utilitzar <code>=</code> en lloc de <code>==</code> en una condició</p></td>
<td><p><code>=</code> assigna, <code>==</code> compara.</p></td>
</tr>
<tr>
<td><p>3</p></td>
<td><p>Comparar <code>String</code> amb <code>==</code></p></td>
<td><p>Utilitza sempre <code>equals()</code>.</p></td>
</tr>
<tr>
<td><p>4</p></td>
<td><p>Dividir enters esperant decimals (<code>7 / 2</code> dona 3)</p></td>
<td><p>Fes que un dels operands siga decimal: <code>7 / 2.0</code>.</p></td>
</tr>
<tr>
<td><p>5</p></td>
<td><p>Utilitzar una variable fora del bloc on es va declarar</p></td>
<td><p>Declara-la en un bloc exterior si la necessites fora.</p></td>
</tr>
<tr>
<td><p>6</p></td>
<td><p>Utilitzar una variable local sense inicialitzar-la</p></td>
<td><p>Dona-li sempre un valor inicial.</p></td>
</tr>
<tr>
<td><p>7</p></td>
<td><p><code>Integer.parseInt</code> amb un text que no és un nombre</p></td>
<td><p>Valida l'entrada o utilitza <code>try-catch</code>.</p></td>
</tr>
</table>
</div>

<aside class="java-document-note">
<p><strong>IDEA CLAU</strong></p>
<p><strong>A programar s'aprén programant.</strong> Copia els exemples d'este document, executa'ls, canvia'ls un valor i observa què passa. Trencar un programa a propòsit és una de les millors formes d'entendre per què funciona.</p>
</aside>
