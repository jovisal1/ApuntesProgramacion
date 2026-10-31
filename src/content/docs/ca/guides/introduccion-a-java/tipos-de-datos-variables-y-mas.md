---
title: Tipus de dades, variables i constants
description: Triar un tipus, declarar i inicialitzar variables i distingir-les de les constants.
sidebar:
  order: 3
tableOfContents:
  minHeadingLevel: 2
  maxHeadingLevel: 2
---

<p><em>Imagina una cuina professional on cada recipient porta una etiqueta: «sal», «sucre», «farina». Si algú intenta posar sucre en el pot de la sal, el sistema activa una alarma abans que el plat arribe a taula. Java funciona exactament així amb les dades.</em></p>

<p>Començarem guardant informació amb tipus, variables i constants. Les operacions i el treball amb text tenen les seues pròpies pàgines.</p>

<p>Comencem pel més important: Java és un llenguatge <strong>fortament tipat</strong>. Això significa tres coses:</p>

<ul>
<li><strong>Tota variable té un tipus</strong> (nombre enter, decimal, text, verdader/fals…).</li>
<li><strong>Tota expressió té un tipus</strong>: el resultat de qualsevol càlcul també és d'un tipus concret.</li>
<li><strong>Cada tipus està estrictament definit</strong>: sabem quins valors admet i quines operacions permet.</li>
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

## Tipus primitius

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



### Enters

<p>Els enters de Java són <strong>amb signe</strong>: admeten valors positius i negatius. Com més bits ocupen, més gran és el seu rang, però més memòria consumixen. N'hi ha quatre:</p>

<ul>
<li><strong><code>byte</code></strong>: el més xicotet. És molt útil quan treballem amb fluxos de dades (llegir fitxers o rebre informació per la xarxa). Exemple: <code>byte b = 2;</code></li>
<li><strong><code>short</code></strong>: potser el menys utilitzat de tots. Exemple: <code>short s1 = 11;</code></li>
<li><strong><code>int</code></strong>: el rei dels enters. L'utilitzaràs constantment: en comptadors, bucles i índexs d'arrays. Exemple: <code>int i1 = 12;</code></li>
<li><strong><code>long</code></strong>: per a quan un <code>int</code> es queda xicotet. Quan escrius el valor cal afegir una <strong>L</strong> al final per a avisar el compilador. Exemple: <code>long l1 = 9223372036854775807L;</code></li>
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



### Nombres en coma flotant

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

### Booleans

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

### Caràcters

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

### Una primera cadena de text

`String` guarda text entre cometes dobles. No és un tipus primitiu; de moment l’utilitzarem per a noms i missatges.

```java
String nombre = "Alex";
System.out.println(nombre); // Alex
```

## Variables

<p><em>Una variable és com una caixa etiquetada en un magatzem. L'etiqueta és el nom, el tipus de caixa indica què pot guardar (una caixa de sabates no servix per a guardar aigua) i dins està el contingut, que pot canviar quan vulguem.</em></p>

<p>La variable és la <strong>unitat bàsica d'emmagatzematge</strong> d'un programa Java. Tota variable es definix mitjançant la combinació de tres elements: un <strong>identificador</strong> (el seu nom), un <strong>tipus</strong> i un <strong>valor inicial</strong> (opcional). A més, cada variable té un <strong>abast</strong>, que definix on es pot utilitzar, i un <strong>temps de vida</strong>.</p>

### Declarar una variable

<p>En Java <strong>tota variable ha de declarar-se abans d'utilitzar-la</strong>. La forma bàsica és:</p>

```text
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

### Abast i visibilitat d'una variable

<p>Java permet declarar variables dins de qualsevol <strong>bloc</strong> de codi. Un bloc comença amb una clau d'obertura <code>{</code> i acaba amb una clau de tancament <code>}</code>, i <strong>cada bloc crea un nou abast</strong> (en anglés, *scope*). L’abast determina en quines parts del codi es pot utilitzar la variable.</p>

<aside class="java-document-note">
<p><strong>IDEA CLAU</strong></p>
<p>Una variable <strong>naix</strong> quan es declara i <strong>mor</strong> quan acaba el bloc en què va ser declarada. Fora d'eixe bloc és com si mai haguera existit.</p>
</aside>

```java
class ScopeVariables {
    public static void main(String[] args) {
        int x;                 // x existix en tot el mètode main
        x = 10;
        {         // bloc interior: un nou abast
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
{
    int x = 2;   // ERROR: variable x is already defined
}
```

<aside class="java-document-note">
<p><strong>MINIREPTE</strong></p>
<p>Per què este codi no compila?</p>
</aside>

```java
{
    int y = 5;
}
System.out.println(y);
```

<details>
<summary>Veure la solució</summary>

<p><strong>Solució:</strong> <code>y</code> es va declarar dins del bloc interior i desapareix en tancar la clau <code>}</code>. En intentar utilitzar-la fora, Java no la troba.</p>

</details>

<aside class="java-document-note">
<p><strong>EN RESUM</strong></p>
<ul>
<li>Tota variable es <strong>declara abans d'utilitzar-la</strong>: tipus + nom (+ valor opcional).</li>
<li>Els noms seguixen unes regles i una convenció (*camelCase*).</li>
<li>Una variable només existix dins del <strong>bloc `{ }`</strong> on es declara.</li>
</ul>
</aside>

## Constants

<p><em>El nombre de dies de la setmana, el valor de π, el percentatge d'IVA… Si una dada no ha de canviar mai, dis-li-ho a Java i ell s'encarregarà de protegir-la.</em></p>

<p>Una constant és un valor fix al qual posem nom. En Java es creen afegint la paraula clau <strong><code>final</code></strong> a la declaració:</p>

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

El fragment següent pressuposa una variable `double precio`, per exemple `double precio = 10.0;`.

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

## Practica abans de continuar

Declara el nom d’un producte, el seu preu i les seues unitats. Guarda l’IVA en una constant. Quin tipus triaries per a cada dada?

<details>
<summary>Veure una solució</summary>

```java
String producto = "Cuaderno";
double precio = 2.5;
int unidades = 3;
final double IVA = 0.21;
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
<td><p>Escriure <code>float f = 3.14;</code> o <code>long l = 5000000000;</code></p></td>
<td><p>Afig el sufix: <code>3.14F</code>, <code>5000000000L</code>.</p></td>
</tr>
<tr>
<td><p>Utilitzar una variable fora del bloc on es va declarar</p></td>
<td><p>Declara-la en un bloc exterior si la necessites fora.</p></td>
</tr>
<tr>
<td><p>Utilitzar una variable local sense inicialitzar-la</p></td>
<td><p>Dona-li sempre un valor inicial.</p></td>
</tr>
</table>
</div>

## Ampliacions opcionals

No necessites dominar estos detalls per a continuar amb el pas següent. Obri només el que vulgues aprofundir.

<details class="java-extension">
<summary>Rangs i desbordament</summary>

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
<p><strong>Desbordament: quan el comptador fa la volta</strong></p>

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


</details>

<details class="java-extension">
<summary>Valors per defecte</summary>

<p><strong>Valors per defecte</strong></p>

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


</details>

<details class="java-extension">
<summary>Classes embolcall</summary>

<p><strong>Classes embolcall</strong></p>

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


</details>
