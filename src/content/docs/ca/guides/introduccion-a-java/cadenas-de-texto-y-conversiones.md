---
title: Cadenes de text i conversions
description: Unir i comparar textos i convertir nombres a text i text a nombres.
sidebar:
  order: 5
tableOfContents:
  minHeadingLevel: 2
  maxHeadingLevel: 2
---

Una cadena (`String`) guarda text. És **immutable**: les operacions creen un text nou; podem assignar eixe resultat a la variable. Ara aprendrem a unir cadenes, consultar-les i comparar-ne el contingut.

### Operador de concatenació de cadenes

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

## Parse: de text a nombre

<p><em>L'usuari tecleja un 2 en pantalla, però per a Java això no és el nombre 2, sinó el text «2». I amb un text no es pot multiplicar. Necessitem un traductor: això és el que fa parse.</em></p>

<p>Quasi tots els llenguatges de programació oferixen la possibilitat de transformar un valor de tipus «cadena de text» en un de numèric. Per exemple, convertir la cadena <code>"2"</code> en el valor enter <code>2</code>. Una vegada convertit, podem treballar amb ell com amb qualsevol altra dada primitiva (<code>int</code>, <code>float</code>, etc.).</p>

<p>En Java esta conversió es realitza amb les <strong>classes embolcall</strong> disponibles en Java. Cadascuna té un mètode que convertix un <code>String</code> al tipus primitiu corresponent. Com a norma general, el nom de l'embolcall coincidix amb el del primitiu, però començant per majúscula. Estes són totes les opcions:</p>

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

<p>L’exemple següent utilitza <code>Scanner</code> per a llegir una línia del teclat; l’estudiaràs en Entrada i eixida de dades. Pots practicar primer amb textos escrits directament en el codi.</p>

<p><code>Boolean.parseBoolean</code> no convertix a nombre: retorna <code>true</code> si el text és «true», sense distingir majúscules; per a altres textos retorna <code>false</code>, sense llançar <code>NumberFormatException</code>.</p>

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

Fragment per a main; necessita `import java.util.Scanner;` abans de la classe.

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

## Practica abans de continuar

Convertix "12" en un enter, suma-li 3 i torna a convertir el resultat en text. En què es diferencia de "12" + 3?

<details>
<summary>Veure una solució</summary>

```java
int numero = Integer.parseInt("12");
String resultado = String.valueOf(numero + 3);
System.out.println(resultado); // 15
System.out.println("12" + 3);   // 123
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
<td><p><strong>Cadenes</strong></p></td>
<td><p><code>String</code> immutable, es compara amb <code>equals()</code> · <code>StringBuilder</code> mutable (ampliació).</p></td>
</tr>
<tr>
<td><p><strong>Parse</strong></p></td>
<td><p><code>Integer.parseInt("42")</code>, <code>Double.parseDouble("3.5")</code>.</p></td>
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
<td><p>Comparar <code>String</code> amb <code>==</code></p></td>
<td><p>Utilitza sempre <code>equals()</code>.</p></td>
</tr>
<tr>
<td><p><code>Integer.parseInt</code> amb un text que no és un nombre</p></td>
<td><p>Comprova que el text representa un enter. La gestió amb <code>try-catch</code> es presenta en l’ampliació.</p></td>
</tr>
</table>
</div>

## Ampliacions opcionals

No necessites dominar estos detalls per a continuar amb el pas següent. Obri només el que vulgues aprofundir.

<details class="java-extension">
<summary>StringBuilder: text modificable</summary>

<p><strong>Cadenes de text</strong></p>

<p>Una cadena de text (en anglés, *string*) és un <strong>bloc de lletres</strong> que utilitzem per a guardar paraules i frases. En alguns llenguatges caldria utilitzar un array de <code>char</code>, però en Java no fa falta: el llenguatge incorpora un tipus específic per a això.</p>

<p>En realitat hi ha dos variants principals: la classe <strong><code>String</code></strong> i la classe <strong><code>StringBuilder</code></strong>. La diferència és essencial:</p>

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

<p><strong>StringBuilder</strong></p>

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


</details>

<details class="java-extension">
<summary>Gestió d’errors: avanç</summary>

<p>Més avant aprendràs a gestionar estos errors amb <code>try-catch</code>. Ací tens un avanç:</p>

Este fragment pressuposa `String texto = "12";`.

```java
try {
    int n = Integer.parseInt(texto);
    System.out.println("Nombre vàlid: " + n);
} catch (NumberFormatException e) {
    System.out.println("Això no és un nombre enter");
}
```
</details>
