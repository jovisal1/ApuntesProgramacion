---
title: Entrada amb Scanner
description: Entrada amb Scanner en Java.
sidebar:
  order: 3
---

Fins ara hem escrit les dades directament en el codi, per exemple `String nom = "Anna";`. Eixe programa sempre treballa amb el mateix nom. **Com aconseguim que salude la persona que l'està executant, sense canviar el codi cada vegada?** Necessitem llegir la seua resposta des de la consola.

Pensa en el programa com una conversa: primer mostra «Com et diuen?», després espera la resposta i, finalment, la guarda per a poder utilitzar-la. Ja sabem mostrar la pregunta amb `System.out.print`. Ara ens falta la ferramenta que permet **llegir el que escriu la persona**.

## Què és `Scanner` i per a què servix

Java inclou una biblioteca de ferramentes preparades per a utilitzar. Una d'elles és **`Scanner`**, una classe que permet crear un lector de dades. Eixe lector pot llegir text o interpretar una resposta com un número, segons l'operació que li demanem. No has d'instal·lar res addicional: forma part de Java.

Per a llegir des de la consola, connectem el lector a **`System.in`**, l'entrada estàndard del programa, que en una execució interactiva normalment rep el que escrivim en el teclat. Així distingim els dos sentits de la comunicació:

- **`System.out`**: el programa envia missatges a la consola.
- **`System.in`**: el programa rep dades d'entrada.
- **`Scanner`**: ens proporciona operacions per a llegir i interpretar eixes dades.

## Preparar el lector

Abans de demanar una resposta, hem de disposar d'un lector. En els exemples utilitzarem estes dos instruccions, cadascuna en el seu lloc:

<div class="java-document-table">
<table>
<tr>
<th scope="col"><p><strong>Instrucció</strong></p></th>
<th scope="col"><p><strong>Què fa i on va</strong></p></th>
</tr>
<tr>
<td><p><code>import java.util.Scanner;</code></p></td>
<td><p>S’escriu al principi del fitxer, abans de la classe. Permet utilitzar el nom curt Scanner, que pertany al paquet java.util.</p></td>
</tr>
<tr>
<td><p><code>Scanner entrada = new Scanner(System.in);</code></p></td>
<td><p>S’escriu dins de main. Crea un lector connectat a l’entrada estàndard i guarda la seua referència en una variable anomenada entrada.</p></td>
</tr>
</table>
</div>

En la segona instrucció, `Scanner` és el **tipus** de la variable; `entrada` és el **nom que triem** per al nostre lector, i `new Scanner(System.in)` el crea. Podríem anomenar-lo `teclado` o `lector`, però hauríem d'utilitzar eixe mateix nom després. No necessites conéixer encara tots els detalls de les classes i els objectes per a utilitzar esta ferramenta.

<aside class="java-document-note">
<p><strong>IDEA CLAU</strong></p>
<p><strong>Crear el lector no demana ni llig una resposta.</strong> Eixa preparació es fa una vegada. Després utilitzem el lector cada vegada que necessitem rebre una dada.</p>
</aside>

## El nostre primer diàleg complet

Guarda el programa següent en **`Salutacio.java`**:

```java
import java.util.Scanner;

public class Salutacio {
    public static void main(String[] args) {
        Scanner entrada = new Scanner(System.in);
        System.out.print("Com et diuen? ");
        String nom = entrada.nextLine();
        System.out.println("Hola, " + nom);
    }
}
```

Executa el programa i escriu `Anna Maria` quan aparega la pregunta. Prem Intro per a enviar la resposta. En la consola veuràs una sessió com esta:

<p><strong>SESSIÓ D’EXEMPLE</strong></p>

```text
Com et diuen? Anna Maria
Hola, Anna Maria
```

`Anna Maria` en la primera línia és el que has escrit tu; la pregunta i la salutació les escriu el programa. Si tornes a executar-lo i escrius un altre nom, la salutació canvia **sense modificar el codi**.

## Què passa pas a pas

1. `new Scanner(System.in)` prepara el lector i el deixa disponible com a `entrada`.
2. `System.out.print("Com et diuen? ");` mostra la pregunta. Encara no hem llegit res.
3. `entrada.nextLine()` llig una línia. Si encara no has enviat la resposta, en una consola interactiva el programa espera que l'escrigues i premes Intro.
4. L'assignació guarda el text llegit en `nom`. Amb la resposta de l'exemple, eixa variable conté `"Anna Maria"`.
5. `System.out.println("Hola, " + nom);` utilitza la dada guardada per a construir la salutació.

Fixa't especialment en **`String nom = entrada.nextLine();`**: primer s'executa la part dreta i s'obté el text; després es guarda en la variable de l'esquerra. `String` indica que guardem text. El punt en `entrada.nextLine()` significa que demanem a **eixe lector** que execute la seua operació `nextLine()`.

`nextLine()` retorna la resta de la línia actual sense incloure el separador de final de línia. En este primer exemple, com que no hem fet cap lectura anterior, arreplega la resposta completa, **inclosos els espais entre paraules**. Per això podem llegir `Anna Maria`. Més avant veurem què passa quan mesclem lectura de números i lectura de línies.

<aside class="java-document-note">
<p><strong>PROVA-HO</strong></p>
<p>Executa el programa amb el teu nom complet. Després canvia només el missatge de la pregunta i comprova que el lector continua funcionant. Observa també què passa si prems Intro sense escriure res: es guarda un text buit i la salutació queda sense nom. Llegir una resposta i comprovar que siga vàlida són dos tasques diferents.</p>
</aside>

## Primer càlcul amb dades de l'usuari

Guarda este programa en **`SumaConsola.java`**. Suposa que introduïxes dos enters vàlids i menuts. Pots escriure'ls en dos línies o separats per espais: `nextInt()` llig tokens en els dos casos.

```java
import java.util.Scanner;

public class SumaConsola {
    public static void main(String[] args) {
        Scanner entrada = new Scanner(System.in);
        System.out.print("Primer número: ");
        int primero = entrada.nextInt();
        System.out.print("Segon número: ");
        int segundo = entrada.nextInt();
        int suma = primero + segundo;
        System.out.println("La suma és " + suma);
    }
}
```

<p><strong>SESSIÓ D’EXEMPLE</strong></p>

Els nombres després de les preguntes són les respostes de la persona.

```text
Primer número: 12
Segon número: 8
La suma és 20
```

Fixa't en les tres accions: `print` pregunta, `nextInt` llig i l'assignació guarda la dada. Després calculem i mostrem. Si escrius `dotze`, este programa falla: encara no hem afegit la [validació d’entrades](/ApuntesProgramacion/ca/guides/introduccion-a-java/entrada-y-salida-de-datos/validacion-de-entradas/).

## Mètodes de lectura

<div class="java-document-table">
<table>
<tr>
<th scope="col"><p><strong>Mètode</strong></p></th>
<th scope="col"><p><strong>Què llig</strong></p></th>
</tr>
<tr>
<td><p><code>nextLine()</code></p></td>
<td><p>La resta de la línia, que pot estar buida.</p></td>
</tr>
<tr>
<td><p><code>next()</code></p></td>
<td><p>El token següent, delimitat per espais en blanc per defecte.</p></td>
</tr>
<tr>
<td><p><code>nextInt()</code></p></td>
<td><p>Un token interpretable com a <code>int</code>.</p></td>
</tr>
<tr>
<td><p><code>nextLong()</code></p></td>
<td><p>Un token interpretable com a <code>long</code>.</p></td>
</tr>
<tr>
<td><p><code>nextDouble()</code></p></td>
<td><p>Un token interpretable com a <code>double</code>, segons el <code>Locale</code> del lector.</p></td>
</tr>
<tr>
<td><p><code>nextFloat()</code></p></td>
<td><p>Un token interpretable com a <code>float</code>.</p></td>
</tr>
<tr>
<td><p><code>nextBoolean()</code></p></td>
<td><p>Un token <code>true</code> o <code>false</code>, sense distingir majúscules.</p></td>
</tr>
<tr>
<td><p><code>hasNextInt()</code></p></td>
<td><p>Comprova si el token següent és un <code>int</code> vàlid, sense consumir-lo.</p></td>
</tr>
<tr>
<td><p><code>hasNextLine()</code></p></td>
<td><p>Comprova si queda una altra línia.</p></td>
</tr>
</table>
</div>

`next()` només llegiria `Anna` d'una línia amb `Anna Maria`. `nextLine()` permet llegir el nom complet. `Scanner` no té `nextChar()`: pots llegir una cadena, validar-ne la longitud i usar `charAt(0)` si esperes un sol `char`.

<aside class="java-document-note">
<p><strong>UN LECTOR PER A L&#x27;ENTRADA ESTÀNDARD</strong></p>
<p>Mantín un únic <code>Scanner</code> sobre <code>System.in</code> i reutilitza&#x27;l. Tancar eixe <code>Scanner</code> també tanca <code>System.in</code>; no el tanques enmig d&#x27;una aplicació que encara necessita llegir. En estos programes de consola deixem l&#x27;entrada disponible fins que acaba el procés. Amb altres recursos, com fitxers, sí que planificarem el tancament explícit.</p>
</aside>

## Llegir una opció d'un caràcter

Per a una resposta senzilla com `s` o `n`, llig primer el text i comprova que conté exactament un caràcter. Així evites cridar `charAt(0)` sobre una cadena buida:

```java
Scanner entrada = new Scanner(System.in);
System.out.print("Vols continuar? (s/n): ");
String respuesta = entrada.nextLine().strip();
if (respuesta.length() == 1) {
    char opcion = Character.toLowerCase(respuesta.charAt(0));
    if (opcion == 's') {
        System.out.println("Continuem.");
    } else if (opcion == 'n') {
        System.out.println("Acabem.");
    } else {
        System.out.println("Escriu s o n.");
    }
} else {
    System.out.println("Escriu un sol caràcter.");
}
```

Afig `import java.util.Scanner;` abans de la classe. Este fragment suposa que existix una línia d'entrada. Accepta `S` i `N` gràcies a `Character.toLowerCase`. `nextBoolean()` no reconeix «sí» o «no»: espera `true` o `false`.

## Repàs

<div class="java-document-table">
<table>
<tr>
<th scope="col"><p><strong>Necessites…</strong></p></th>
<th scope="col"><p><strong>Utilitza…</strong></p></th>
</tr>
<tr>
<td><p>Llegir un text complet</p></td>
<td><p><code>entrada.nextLine()</code></p></td>
</tr>
<tr>
<td><p>Llegir un enter per tokens</p></td>
<td><p><code>entrada.nextInt()</code> després de comprovar el seu format.</p></td>
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
<td><p>El programa sembla parat</p></td>
<td><p>Està esperant una lectura.</p></td>
<td><p>Comprova la línia de <code>Scanner</code> i escriu la resposta en la consola d&#x27;execució.</p></td>
</tr>
<tr>
<td><p><code>NoSuchElementException</code></p></td>
<td><p>Has intentat llegir quan l&#x27;entrada ha acabat.</p></td>
<td><p>Comprova <code>hasNext()</code> o <code>hasNextLine()</code> segons l&#x27;estratègia.</p></td>
</tr>
</table>
</div>

## Referències

- [Scanner: tokens, línies i configuració regional](https://docs.oracle.com/en/java/javase/25/docs/api/java.base/java/util/Scanner.html).
