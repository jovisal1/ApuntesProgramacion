---
title: Eixida per consola
description: Eixida per consola en Java.
sidebar:
  order: 2
---

`System.out` representa l'eixida estàndard, normalment connectada a la terminal.

<div class="java-document-table">
<table>
<tr>
<th scope="col"><p><strong>Mètode</strong></p></th>
<th scope="col"><p><strong>Comportament</strong></p></th>
</tr>
<tr>
<td><p><code>System.out.print(...)</code></p></td>
<td><p>Escriu sense afegir un salt de línia.</p></td>
</tr>
<tr>
<td><p><code>System.out.println(...)</code></p></td>
<td><p>Escriu i afig un salt de línia. Sense arguments, escriu una línia en blanc.</p></td>
</tr>
<tr>
<td><p><code>System.out.printf(...)</code></p></td>
<td><p>Escriu utilitzant una plantilla de format. No afig un salt automàticament.</p></td>
</tr>
</table>
</div>

```java
System.out.print("Hola, ");
System.out.println("Anna");
System.out.println("Benvinguda a Java");
```

<p><strong>EIXIDA PER CONSOLA</strong></p>

```text
Hola, Anna
Benvinguda a Java
```

## Combinar text i càlculs

L'operador `+` suma nombres, però concatena quan intervé una cadena. Els parèntesis permeten fer primer el càlcul:

```java
System.out.println("Suma: " + 2 + 3);
System.out.println("Suma: " + (2 + 3));
```

<p><strong>EIXIDA PER CONSOLA</strong></p>

```text
Suma: 23
Suma: 5
```

La primera instrucció unix `"Suma: "`, `2` i `3` com a text. La segona calcula `2 + 3` abans d'unir-lo al missatge.

## Cometes, barres i salts de línia

Alguns caràcters necessiten una seqüència d'escapament dins d'una cadena:

<div class="java-document-table">
<table>
<tr>
<th scope="col"><p><strong>Seqüència en el codi</strong></p></th>
<th scope="col"><p><strong>Què representa</strong></p></th>
</tr>
<tr>
<td><p><code>\&quot;</code></p></td>
<td><p>Cometes dobles dins del text.</p></td>
</tr>
<tr>
<td><p><code>\\</code></p></td>
<td><p>Una barra invertida.</p></td>
</tr>
<tr>
<td><p><code>\n</code></p></td>
<td><p>Salt de línia.</p></td>
</tr>
<tr>
<td><p><code>\t</code></p></td>
<td><p>Tabulació; la seua amplària visual depén de la terminal.</p></td>
</tr>
</table>
</div>

```java
System.out.println("Java diu: \"Hola\"");
System.out.println("C:\\curso\\notas.txt");
System.out.print("Un\nDos\n");
```

<p><strong>EIXIDA PER CONSOLA</strong></p>

```text
Java diu: "Hola"
C:\curso\notas.txt
Un
Dos
```

## Eixida amb format

`printf` utilitza marcadors que se substituïxen pels arguments següents, en el mateix orde:

<div class="java-document-table">
<table>
<tr>
<th scope="col"><p><strong>Marcador</strong></p></th>
<th scope="col"><p><strong>Ús</strong></p></th>
</tr>
<tr>
<td><p><code>%s</code></p></td>
<td><p>Text.</p></td>
</tr>
<tr>
<td><p><code>%d</code></p></td>
<td><p>Enter decimal.</p></td>
</tr>
<tr>
<td><p><code>%f</code></p></td>
<td><p>Número en coma flotant.</p></td>
</tr>
<tr>
<td><p><code>%.2f</code></p></td>
<td><p>Número en coma flotant mostrat amb dos decimals.</p></td>
</tr>
<tr>
<td><p><code>%c</code></p></td>
<td><p>Caràcter.</p></td>
</tr>
<tr>
<td><p><code>%b</code></p></td>
<td><p>Representació booleana; en estos exemples, arguments <code>boolean</code>.</p></td>
</tr>
<tr>
<td><p><code>%n</code></p></td>
<td><p>Salt de línia de la plataforma. No consumix un argument.</p></td>
</tr>
<tr>
<td><p><code>%%</code></p></td>
<td><p>Símbol de percentatge. No consumix un argument.</p></td>
</tr>
</table>
</div>

```java
String nom = "Anna";
int exercicis = 8;
double mitjana = 7.256;
System.out.printf(java.util.Locale.ROOT,
        "%s: %d exercicis, mitjana %.2f%n", nom, exercicis, mitjana);
```

Amb `Locale.ROOT`, l'eixida usa punt decimal:

<p><strong>EIXIDA PER CONSOLA</strong></p>

```text
Anna: 8 exercicis, mitjana 7.26
```

Formatar a dos decimals **no modifica** el valor guardat en `mitjana`. El tipus de l'argument ha de ser compatible amb el marcador: usar `%d` amb un `double` produïx un error de format en execució.

Sense un `Locale` explícit, `printf` utilitza la configuració regional predeterminada per a format. Pots usar `java.util.Locale.forLanguageTag("es-ES")` per a presentar decimals amb coma. La configuració d'eixida i la de lectura es trien per separat.

## Alinear resultats com un informe xicotet

L'amplària permet reservar espai per a cada dada. `%8.2f` reserva almenys huit caràcters i mostra dos decimals; `%-12s` reserva dotze caràcters i alinea el text a l'esquerra. Si un valor necessita més espai, es mostra complet: no es retalla.

```java
System.out.printf(java.util.Locale.ROOT, "%-12s %8s%n", "Producte", "Preu");
System.out.printf(java.util.Locale.ROOT, "%-12s %8.2f%n", "Quadern", 2.5);
System.out.printf(java.util.Locale.ROOT, "%-12s %8.2f%n", "Motxilla", 18.95);
System.out.printf("Descompte: %d%%%n", 10);
```

<p><strong>EIXIDA PER CONSOLA</strong></p>

```text
Producte         Preu
Quadern          2.50
Motxilla        18.95
Descompte: 10%
```

`%d` consumix el valor `10`; `%%` escriu el signe de percentatge i `%n` acaba la línia. Per a taules, les amplàries de `printf` donen més control que les tabulacions.

## Repàs

<div class="java-document-table">
<table>
<tr>
<th scope="col"><p><strong>Necessites…</strong></p></th>
<th scope="col"><p><strong>Utilitza…</strong></p></th>
</tr>
<tr>
<td><p>Preguntar sense salt de línia</p></td>
<td><p><code>System.out.print(&quot;Edat: &quot;);</code></p></td>
</tr>
<tr>
<td><p>Mostrar un resultat</p></td>
<td><p><code>System.out.println(resultat);</code></p></td>
</tr>
<tr>
<td><p>Mostrar dos decimals</p></td>
<td><p><code>System.out.printf(java.util.Locale.ROOT, &quot;%.2f%n&quot;, valor);</code></p></td>
</tr>
</table>
</div>

## Errors freqüents

<div class="java-document-table">
<table>
<tr>
<th scope="col"><p><strong>Què observes</strong></p></th>
<th scope="col"><p><strong>Causa probable</strong></p></th>
<th scope="col"><p><strong>Què revisar</strong></p></th>
</tr>
<tr>
<td><p>Un càlcul es mostra com <code>23</code> en lloc de <code>5</code></p></td>
<td><p>Concatenes abans de sumar.</p></td>
<td><p>Utilitza parèntesis o calcula primer en una variable.</p></td>
</tr>
<tr>
<td><p><code>IllegalFormatConversionException</code></p></td>
<td><p>Marcador incompatible amb la dada.</p></td>
<td><p>Per exemple, utilitza <code>%f</code> per a un <code>double</code> i <code>%d</code> per a un enter.</p></td>
</tr>
</table>
</div>

## Referències

- [Formatter: regles de format de printf](https://docs.oracle.com/en/java/javase/25/docs/api/java.base/java/util/Formatter.html).
