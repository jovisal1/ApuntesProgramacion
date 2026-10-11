---
title: Entrada i eixida de dades
description: Eixida amb print, println i printf, entrada amb Scanner, lectura per línies, validació i una ampliació amb JOptionPane.
sidebar:
  order: 5
---

## 1. Introducció

<p><em>Imagina una conversa amb el teu programa: et pregunta el nom, escolta la resposta i et mostra un missatge. L’entrada i l’eixida de dades són les ferramentes que fan possible eixe diàleg.</em></p>

Els programes necessiten rebre informació i comunicar resultats. Començarem per la **consola**, que permet concentrar-nos en les dades i en l'algoritme. Al final veurem una xicoteta ampliació amb finestres.

Per als exemples bàsics necessites conéixer variables, tipus i conversions. El problema integrador utilitza també condicions i bucles, explicats en [Estructures de control](/ApuntesProgramacion/ca/guides/introduccion-a-java/estructuras-de-control/).

<aside class="java-document-note">
<p><strong>COM PROVAR ELS EXEMPLES</strong></p>
<p>Els fragments sense classe completa s&#x27;escriuen dins de <code>main</code>, cadascun per separat. Si apareix un <code>import</code>, col·loca&#x27;l abans de la declaració de la classe. Guarda els programes complets amb el nom de la seua classe pública i extensió <code>.java</code>.</p>
</aside>

### De la dada al resultat

Imagina una calculadora que demana dos nombres i mostra la seua suma. El programa necessita tres passos:

<div class="java-document-table">
<table>
<tr>
<th scope="col"><p><strong>Pas</strong></p></th>
<th scope="col"><p><strong>Què fa el programa</strong></p></th>
<th scope="col"><p><strong>Exemple</strong></p></th>
</tr>
<tr>
<td><p><strong>Entrada</strong></p></td>
<td><p>Rep i guarda les dades.</p></td>
<td><p>La persona escriu <code>12</code> i <code>8</code>.</p></td>
</tr>
<tr>
<td><p><strong>Procés</strong></p></td>
<td><p>Fa un càlcul o pren una decisió.</p></td>
<td><p>Calcula <code>12 + 8</code>.</p></td>
</tr>
<tr>
<td><p><strong>Eixida</strong></p></td>
<td><p>Comunica el resultat.</p></td>
<td><p>Mostra <code>La suma és 20</code>.</p></td>
</tr>
</table>
</div>

Escriure un missatge com «Introduïx un número» **no llig cap dada**. Per a llegir necessites una instrucció d'entrada; per a conservar el que has llegit, has d'assignar-ho a una variable. En una consola interactiva, el programa normalment espera que escrigues la resposta i premes Intro.

Aprendràs a demanar text i números, presentar resultats, triar entre lectura per tokens o per línies i repetir una petició quan la resposta no siga vàlida. Començarem amb entrades correctes i després afegirem validació. No necessites arrays per a estos exemples.

## 2. Eixida per consola

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

### Combinar text i càlculs

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

### Cometes, barres i salts de línia

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

### Eixida amb format

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

### Alinear resultats com un informe xicotet

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

## 3. Entrada per consola amb `Scanner`

Fins ara hem escrit les dades directament en el codi, per exemple `String nom = "Anna";`. Eixe programa sempre treballa amb el mateix nom. **Com aconseguim que salude la persona que l'està executant, sense canviar el codi cada vegada?** Necessitem llegir la seua resposta des de la consola.

Pensa en el programa com una conversa: primer mostra «Com et diuen?», després espera la resposta i, finalment, la guarda per a poder utilitzar-la. Ja sabem mostrar la pregunta amb `System.out.print`. Ara ens falta la ferramenta que permet **llegir el que escriu la persona**.

### Què és `Scanner` i per a què servix

Java inclou una biblioteca de ferramentes preparades per a utilitzar. Una d'elles és **`Scanner`**, una classe que permet crear un lector de dades. Eixe lector pot llegir text o interpretar una resposta com un número, segons l'operació que li demanem. No has d'instal·lar res addicional: forma part de Java.

Per a llegir des de la consola, connectem el lector a **`System.in`**, l'entrada estàndard del programa, que en una execució interactiva normalment rep el que escrivim en el teclat. Així distingim els dos sentits de la comunicació:

- **`System.out`**: el programa envia missatges a la consola.
- **`System.in`**: el programa rep dades d'entrada.
- **`Scanner`**: ens proporciona operacions per a llegir i interpretar eixes dades.

### Preparar el lector

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

### El nostre primer diàleg complet

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

### Què passa pas a pas

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

### Primer càlcul amb dades de l'usuari

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

Fixa't en les tres accions: `print` pregunta, `nextInt` llig i l'assignació guarda la dada. Després calculem i mostrem. Si escrius `dotze`, este programa falla: encara no hem afegit la validació que veurem més avant.

### Mètodes de lectura

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

### Llegir una opció d'un caràcter

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

## 4. Tokens i línies: entendre el salt pendent

Els mètodes com `nextInt()` lligen un **token**. `nextLine()` llig la **resta d'una línia**. Mesclar-los sense pensar en eixa diferència pot produir resultats inesperats.

Imagina que escrius `18` i prems Intro:

```java
Scanner entrada = new Scanner(System.in);
System.out.print("Edat: ");
int edat = entrada.nextInt();
System.out.print("Nom: ");
String nom = entrada.nextLine();
System.out.println("Edat: " + edat + ", nom: [" + nom + "]");
```

Afig `import java.util.Scanner;` abans de la classe per a provar-ho. Per què el nom queda buit?

<div class="java-document-table">
<table>
<tr>
<th scope="col"><p><strong>Moment</strong></p></th>
<th scope="col"><p><strong>Què ocorre</strong></p></th>
</tr>
<tr>
<td><p>Escrius <code>18</code> i prems Intro</p></td>
<td><p>L&#x27;entrada conté el número i un separador de final de línia.</p></td>
</tr>
<tr>
<td><p><code>nextInt()</code></p></td>
<td><p>Consumix el número, però deixa pendent la resta d&#x27;eixa línia.</p></td>
</tr>
<tr>
<td><p><code>nextLine()</code></p></td>
<td><p>Llig eixa resta, que en este cas està buida, i avança a la línia següent.</p></td>
</tr>
</table>
</div>

### Opció 1: consumir la resta de la línia de manera intencionada

Si el format esperat és **un número en una línia i el nom en la següent**, podem fer això:

```java
Scanner entrada = new Scanner(System.in);
System.out.print("Edat: ");
int edat = entrada.nextInt();
entrada.nextLine(); // Descartem el que queda de la línia de l'edat.
System.out.print("Nom complet: ");
String nom = entrada.nextLine();
System.out.println(nom + " té " + edat + " anys.");
```

No és una regla de «netejar sempre el buffer». Si en la primera línia hi haguera més text, eixa crida el descartaria també. Si després de `nextInt()` es crida un altre mètode de tokens, com `nextDouble()`, normalment no cal este pas: el mètode omet els delimitadors inicials.

### Opció 2: llegir sempre línies i convertir

Una alternativa còmoda quan cada resposta ocupa una línia:

```java
Scanner entrada = new Scanner(System.in);
System.out.print("Edat: ");
int edat = Integer.parseInt(entrada.nextLine().strip());
System.out.print("Nom complet: ");
String nom = entrada.nextLine();
System.out.println(nom + " té " + edat + " anys.");
```

Així no mesclem les dos formes de lectura. Este fragment suposa que l'edat té un format vàlid; en el problema integrador aprendrem a recuperar-nos si no és així.

## 5. Decimals i configuració regional

El punt d'un literal Java (`double nota = 7.5;`) pertany a la sintaxi del llenguatge. El separador que escriu una persona en la consola depén de com configurem el lector.

Este programa accepta coma decimal. Guarda'l en **`LecturaDecimal.java`**:

```java
import java.util.Locale;
import java.util.Scanner;

public class LecturaDecimal {
    public static void main(String[] args) {
        Scanner entrada = new Scanner(System.in);
        entrada.useLocale(Locale.forLanguageTag("es-ES"));
        System.out.print("Introduïx una nota (per exemple, 7,5): ");
        if (entrada.hasNextDouble()) {
            double nota = entrada.nextDouble();
            if (Double.isFinite(nota) && nota >= 0 && nota <= 10) {
                System.out.printf(Locale.forLanguageTag("es-ES"),
                        "Nota: %.2f%n", nota);
            } else {
                System.out.println("La nota ha d'estar entre 0 i 10.");
            }
        } else {
            System.out.println("Format no vàlid.");
        }
    }
}
```

Per a treballar amb punt decimal mitjançant tokens, pots configurar `entrada.useLocale(Locale.US)`. Si lliges una línia i uses `Double.parseDouble`, la conversió usa **punt**, encara que el `Scanner` tinga un altre `Locale`.

## 6. Validar l'entrada i depurar

La validació té dos nivells:

1. **Format:** es pot interpretar el text com el tipus esperat? `"huit"` no és un enter.
2. **Domini:** és admissible per al problema? `-4` és un enter, però no una quantitat vàlida d'alumnes.

`Scanner.nextInt()` llança `InputMismatchException` si el token no és un enter vàlid o queda fora de rang. `Integer.parseInt()` llança `NumberFormatException` si el text no representa un `int`. Són operacions diferents i no es recuperen de l'error de la mateixa manera.

Si uses `hasNextInt()` dins d'un bucle i el token no és vàlid, has de consumir l'entrada rebutjada abans de repetir; en cas contrari, comprovaràs indefinidament el mateix token. Llegir per línies facilita definir cada intent com una resposta completa.

<aside class="java-document-note">
<p><strong>COMPROVAR UN PROGRAMA</strong></p>
<p>Abans d&#x27;executar, anota entrada i eixida esperades. Prova un cas normal, valors límit i dades incorrectes. Si el resultat no coincidix, col·loca un punt d&#x27;interrupció abans de la lectura o del càlcul i observa les variables pas a pas. Un programa que compila encara pot tindre errors lògics.</p>
</aside>

### Repetir una petició sense utilitzar excepcions

Abans de llegir un enter, `hasNextInt()` permet comprovar si el token següent és vàlid. En **`CantidadAlumnos.java`** demanem un valor entre 1 i 30, amb una resposta per línia. Repetim tant si falla el format com si el número queda fora de l'interval:

```java
import java.util.Scanner;

public class CantidadAlumnos {
    public static void main(String[] args) {
        Scanner entrada = new Scanner(System.in);
        int cantidad = 0;
        boolean valida = false;
        while (!valida) {
            System.out.print("Quantitat d’alumnes (1 a 30): ");
            if (!entrada.hasNext()) {
                System.out.println("Entrada finalitzada.");
                return;
            }
            if (!entrada.hasNextInt()) {
                System.out.println("Escriu un número enter.");
                entrada.nextLine();
            } else {
                cantidad = entrada.nextInt();
                if (entrada.hasNextLine()) {
                    entrada.nextLine();
                }
                if (cantidad >= 1 && cantidad <= 30) {
                    valida = true;
                } else {
                    System.out.println("La quantitat ha d’estar entre 1 i 30.");
                }
            }
        }
        System.out.println("Grup de " + cantidad + " alumnes.");
    }
}
```

<div class="java-document-table">
<table>
<tr>
<th scope="col"><p><strong>Resposta</strong></p></th>
<th scope="col"><p><strong>Què passa</strong></p></th>
</tr>
<tr>
<td><p><code>hola</code></p></td>
<td><p>Rebutja el format, descarta la línia i repetix.</p></td>
</tr>
<tr>
<td><p><code>-2</code> o <code>31</code></p></td>
<td><p>Llig un enter, però rebutja el seu valor i repetix.</p></td>
</tr>
<tr>
<td><p><code>25</code></p></td>
<td><p>Accepta la dada i ix del bucle.</p></td>
</tr>
<tr>
<td><p>Final d&#x27;entrada</p></td>
<td><p>Acaba amb un missatge.</p></td>
</tr>
</table>
</div>

Ací `nextLine()` descarta la resta d'**eixa resposta**, també si escrius text després del número. És una decisió del format del programa: només esperem un valor per línia. Els mètodes de tokens ometen línies buides; si necessites detectar una resposta buida, utilitza lectura per línies.

### Què significa `try` / `catch`

Quan convertim una línia amb `parseInt` o `parseDouble`, podem gestionar una conversió fallida amb `try` / `catch`: dins de `try` intentem l'operació; si es produïx l'excepció indicada, s'executa `catch`. El programa de notes següent usa eixa estratègia. Una conversió correcta no garantix que el número siga vàlid per al problema: també cal comprovar el seu interval.

## 7. Problema integrador: mitjana de tres notes

Demana el nom i tres notes entre 0 i 10. Repetix la petició si una nota no és vàlida. Mostra la mitjana amb dos decimals i indica si està aprovada (mitjana major o igual que 5). En este exercici, l'usuari escriu els decimals amb **punt**.

Guarda el programa en **`MitjanaNotes.java`**:

```java
import java.util.Locale;
import java.util.Scanner;

public class MitjanaNotes {
    public static void main(String[] args) {
        Scanner entrada = new Scanner(System.in);
        System.out.print("Nom: ");
        if (!entrada.hasNextLine()) {
            System.out.println("No hi ha dades d'entrada.");
            return;
        }
        String nom = entrada.nextLine().strip();
        if (nom.isEmpty()) {
            System.out.println("El nom no pot estar buit.");
            return;
        }

        final int TOTAL_NOTES = 3;
        double suma = 0;
        for (int i = 1; i <= TOTAL_NOTES; i++) {
            boolean valida = false;
            while (!valida) {
                System.out.print("Nota " + i + " (0 a 10, amb punt decimal): ");
                if (!entrada.hasNextLine()) {
                    System.out.println("Entrada finalitzada abans de completar les notes.");
                    return;
                }
                String text = entrada.nextLine().strip();
                try {
                    double nota = Double.parseDouble(text);
                    if (!Double.isFinite(nota) || nota < 0 || nota > 10) {
                        System.out.println("Escriu un número finit entre 0 i 10.");
                    } else {
                        suma += nota;
                        valida = true;
                    }
                } catch (NumberFormatException error) {
                    System.out.println("Format incorrecte. Exemple vàlid: 7.5");
                }
            }
        }

        double mitjana = suma / TOTAL_NOTES;
        String resultat = mitjana >= 5 ? "Aprovat" : "Suspés";
        System.out.printf(Locale.ROOT, "%s: mitjana %.2f. %s.%n",
                nom, mitjana, resultat);
    }
}
```

### Casos de prova

<div class="java-document-table">
<table>
<tr>
<th scope="col"><p><strong>Entrada després del nom <code>Anna</code></strong></p></th>
<th scope="col"><p><strong>Resultat esperat</strong></p></th>
</tr>
<tr>
<td><p><code>4</code>, <code>7</code>, <code>9</code></p></td>
<td><p><code>Anna: mitjana 6.67. Aprovat.</code></p></td>
</tr>
<tr>
<td><p><code>0</code>, <code>0</code>, <code>0</code></p></td>
<td><p><code>Anna: mitjana 0.00. Suspés.</code></p></td>
</tr>
<tr>
<td><p><code>5</code>, <code>5</code>, <code>5</code></p></td>
<td><p><code>Anna: mitjana 5.00. Aprovat.</code></p></td>
</tr>
<tr>
<td><p><code>10</code>, <code>10</code>, <code>10</code></p></td>
<td><p><code>Anna: mitjana 10.00. Aprovat.</code></p></td>
</tr>
<tr>
<td><p><code>hola</code>, després <code>4</code>, <code>7</code>, <code>9</code></p></td>
<td><p>Rebutja <code>hola</code>, demana de nou la primera nota i obté <code>6.67</code>.</p></td>
</tr>
<tr>
<td><p><code>-1</code>, <code>11</code>, <code>NaN</code> o <code>Infinity</code></p></td>
<td><p>Rebutja cada valor i torna a demanar la mateixa nota.</p></td>
</tr>
<tr>
<td><p>Final d&#x27;entrada abans de tindre tres notes</p></td>
<td><p>Acaba amb un missatge, sense calcular una mitjana incompleta.</p></td>
</tr>
</table>
</div>

L'arredoniment només afecta la presentació. La decisió d'aprovar usa la mitjana calculada; no s'ha de basar en el text arredonit. Quan estudies [Arrays](/ApuntesProgramacion/ca/guides/introduccion-a-java/arrays/), podràs ampliar este programa guardant les notes i mostrant també la major i la menor.

## 8. Un menú que es repetix fins a triar eixir

L'entrada també servix per a triar què ha de fer un programa. En **`MenuConsola.java`** combinem lectura per línies, `while` i `switch`. No necessitem convertir l'opció a enter: n'hi ha prou amb comparar els textos `"1"`, `"2"` i `"0"`.

```java
import java.util.Scanner;

public class MenuConsola {
    public static void main(String[] args) {
        Scanner entrada = new Scanner(System.in);
        int puntos = 0;
        boolean salir = false;
        while (!salir) {
            System.out.println("1. Consultar punts");
            System.out.println("2. Guanyar 10 punts");
            System.out.println("0. Eixir");
            System.out.print("Opció: ");
            if (!entrada.hasNextLine()) {
                System.out.println("Entrada finalitzada.");
                break;
            }
            String opcion = entrada.nextLine().strip();
            switch (opcion) {
                case "1":
                    System.out.println("Punts: " + puntos);
                    break;
                case "2":
                    puntos += 10;
                    System.out.println("Has guanyat 10 punts.");
                    break;
                case "0":
                    salir = true;
                    System.out.println("Fins prompte.");
                    break;
                default:
                    System.out.println("Opció no vàlida.");
            }
        }
    }
}
```

Prova la seqüència `2`, `2`, `1`, `hola`, `0`: guanyes punts dos vegades, consultes `20`, reps un avís per l'opció incorrecta i ixes. `break` dins d'un `case` acaba el `switch`; la variable `salir` és la que evita la volta següent del `while`.

## 9. Ampliació: finestres amb `JOptionPane`

Swing inclou `JOptionPane`, útil per a diàlegs senzills en un entorn d'escriptori amb interfície gràfica. És una ampliació: la consola continua sent la nostra via principal per a aprendre.

<div class="java-document-table">
<table>
<tr>
<th scope="col"><p><strong>Mètode</strong></p></th>
<th scope="col"><p><strong>Utilitat</strong></p></th>
</tr>
<tr>
<td><p><code>showMessageDialog</code></p></td>
<td><p>Mostra un missatge.</p></td>
</tr>
<tr>
<td><p><code>showInputDialog</code></p></td>
<td><p>Sol·licita un text; retorna <code>null</code> si es cancel·la.</p></td>
</tr>
<tr>
<td><p><code>showConfirmDialog</code></p></td>
<td><p>Retorna un codi de resposta: sí, no, cancel·lar o tancament.</p></td>
</tr>
<tr>
<td><p><code>showOptionDialog</code></p></td>
<td><p>Permet definir opcions personalitzades.</p></td>
</tr>
</table>
</div>

Guarda este exemple en **`SalutacioFinestra.java`** i executa'l en un equip amb escriptori:

```java
import javax.swing.JOptionPane;
import javax.swing.SwingUtilities;

public class SalutacioFinestra {
    public static void main(String[] args) {
        SwingUtilities.invokeLater(() -> {
            String nom = JOptionPane.showInputDialog(null, "Com et diuen?");
            if (nom != null && !nom.isBlank()) {
                JOptionPane.showMessageDialog(null,
                        "Hola, " + nom.strip(),
                        "Salutació", JOptionPane.INFORMATION_MESSAGE);
            }
        });
    }
}
```

`SwingUtilities.invokeLater` programa la interacció en el fil d'esdeveniments de Swing. L'expressió `() -> { ... }` representa la tasca que s'executarà; estudiarem eixa sintaxi més avant.

El primer argument `null` indica que no establim una finestra pare. En `showMessageDialog`, les constants com `INFORMATION_MESSAGE`, `WARNING_MESSAGE`, `ERROR_MESSAGE`, `QUESTION_MESSAGE` i `PLAIN_MESSAGE` seleccionen el tipus de missatge. `DEFAULT_OPTION` correspon a opcions de diàleg, no és una constant de tipus de missatge.

L'entrada continua sent text: si necessites un número, comprova primer si s'ha cancel·lat i després convertix i valida. En confirmacions compara amb constants com `JOptionPane.YES_OPTION`; no suposes que totes les respostes signifiquen «sí».

## 10. Practica amb solucions

Intenta resoldre els exercicis abans d'obrir la solució. Guarda cada programa complet en el seu fitxer i prova tant entrades correctes com incorrectes.

### 1. Calcula l'àrea d'un triangle

Adapta el programa que coneixes de PSeInt: demana base i altura positives i mostra l'àrea amb dos decimals. Utilitza punt decimal i valida que les mesures siguen nombres finits. Amb base `5` i altura `8`, ha de mostrar `Àrea: 20.00`.

<details>
<summary>Veure solució</summary>

Guarda el programa en `AreaTriangulo.java`. Esta solució avisa i acaba si una dada no és vàlida; com a ampliació, utilitza un bucle per a repetir la petició.

```java
import java.util.Locale;
import java.util.Scanner;

public class AreaTriangulo {
    public static void main(String[] args) {
        Scanner entrada = new Scanner(System.in);
        entrada.useLocale(Locale.US);
        System.out.print("Base positiva (amb punt decimal): ");
        if (!entrada.hasNextDouble()) {
            System.out.println("La base ha de ser un número.");
            return;
        }
        double base = entrada.nextDouble();
        System.out.print("Altura positiva (amb punt decimal): ");
        if (!entrada.hasNextDouble()) {
            System.out.println("L’altura ha de ser un número.");
            return;
        }
        double altura = entrada.nextDouble();
        if (!Double.isFinite(base) || !Double.isFinite(altura)
                || base <= 0 || altura <= 0) {
            System.out.println("Les mesures han de ser finites i positives.");
            return;
        }
        double area = base * altura / 2.0;
        if (!Double.isFinite(area)) {
            System.out.println("El càlcul excedix el rang de double.");
            return;
        }
        System.out.printf(Locale.ROOT, "Àrea: %.2f%n", area);
    }
}
```

</details>

### 2. Imprimix un tiquet sense perdre cèntims

Sol·licita unitats i preu per unitat en cèntims, els dos enters no negatius. Calcula el total i mostra euros i cèntims. Per exemple, `3` unitats a `125` cèntims han de donar `Total: 3.75 euros`.

<details>
<summary>Veure solució</summary>

Guarda el programa en `TicketCompra.java`.

```java
import java.util.Scanner;

public class TicketCompra {
    public static void main(String[] args) {
        Scanner entrada = new Scanner(System.in);
        System.out.print("Unitats: ");
        if (!entrada.hasNextInt()) {
            System.out.println("Les unitats han de ser un enter.");
            return;
        }
        int unidades = entrada.nextInt();
        System.out.print("Preu per unitat en cèntims: ");
        if (!entrada.hasNextInt()) {
            System.out.println("El preu ha de ser un enter.");
            return;
        }
        int precioCentimos = entrada.nextInt();
        if (unidades < 0 || precioCentimos < 0) {
            System.out.println("No s’admeten quantitats negatives.");
            return;
        }
        long totalCentimos = (long) unidades * precioCentimos;
        System.out.printf(java.util.Locale.ROOT, "Total: %d.%02d euros%n",
                totalCentimos / 100, totalCentimos % 100);
    }
}
```

Treballem amb cèntims enters per a evitar aproximacions decimals. La conversió `(long)` es fa **abans de multiplicar**, de manera que el producte de dos `int` no negatius cap en un `long`. La divisió entre `100` obté els euros i la resta obté els cèntims. `%02d` afig un zero inicial quan cal: `5` cèntims es mostren com `05`.

Prova `1` unitat a `105` cèntims (`1.05`) i `0` unitats (`0.00`).

</details>

### 3. Explica el nom buit

En el fragment que mescla `nextInt()` i `nextLine()`, introduïx `18` i després `Anna Maria`. Explica per què el nom queda buit i proposa dos solucions.

<details>
<summary>Veure solució</summary>

`nextInt()` consumix el número, però no la resta de la seua línia. El primer `nextLine()` retorna eixa resta buida: encara no ha llegit `Anna Maria`. Pots consumir intencionadament la línia pendent i després llegir el nom, o llegir sempre línies i convertir l'edat amb `Integer.parseInt`. Les dos alternatives estan desenvolupades en l'apartat de tokens i línies.

</details>

### 4. Compta les notes aprovades

Amplia `MitjanaNotes` per a mostrar quantes de les tres notes són majors o iguals que `5`. No necessites guardar-les en un array. Amb les notes `4`, `7` i `9`, el comptador ha d'acabar en `2`.

<details>
<summary>Veure solució</summary>

Declara `int aprovades = 0;` abans del bucle de notes. Dins de la branca que accepta una nota, al costat de `suma += nota;`, afig:

```java
if (nota >= 5) {
    aprovades++;
}
```

Després del bucle, mostra `aprovades` amb `println`. No incrementes el comptador abans de validar: una nota com `15` no s'ha de comptar com a aprovada.

</details>

## Errors freqüents i com trobar-los

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
<td><p>El nom queda buit</p></td>
<td><p>Un mètode de tokens va deixar pendent el final de línia.</p></td>
<td><p>Decidix si consumir eixa línia o llegir sempre amb <code>nextLine()</code>.</p></td>
</tr>
<tr>
<td><p><code>InputMismatchException</code></p></td>
<td><p>Token incompatible amb el tipus o la configuració regional.</p></td>
<td><p>Comprova amb <code>hasNextInt()</code> / <code>hasNextDouble()</code> abans de llegir.</p></td>
</tr>
<tr>
<td><p><code>NumberFormatException</code></p></td>
<td><p>La línia no es pot convertir al tipus esperat.</p></td>
<td><p>Revisa el text i gestiona la conversió amb <code>try</code> / <code>catch</code>.</p></td>
</tr>
<tr>
<td><p><code>NoSuchElementException</code></p></td>
<td><p>Has intentat llegir quan l&#x27;entrada ha acabat.</p></td>
<td><p>Comprova <code>hasNext()</code> o <code>hasNextLine()</code> segons l&#x27;estratègia.</p></td>
</tr>
<tr>
<td><p>La petició es repetix sense avançar</p></td>
<td><p>Comproves una altra vegada el mateix token incorrecte.</p></td>
<td><p>Consumix la resposta rebutjada abans de repetir.</p></td>
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
<tr>
<td><p>Un decimal amb coma no s&#x27;accepta</p></td>
<td><p>Entrada i lector utilitzen convencions diferents.</p></td>
<td><p>Explica el separador esperat i configura el <code>Locale</code>.</p></td>
</tr>
</table>
</div>

## Full de repàs

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
<tr>
<td><p>Llegir un text complet</p></td>
<td><p><code>entrada.nextLine()</code></p></td>
</tr>
<tr>
<td><p>Llegir un enter per tokens</p></td>
<td><p><code>entrada.nextInt()</code> després de comprovar el seu format.</p></td>
</tr>
<tr>
<td><p>Llegir un decimal per tokens</p></td>
<td><p><code>entrada.nextDouble()</code> amb una configuració regional explícita.</p></td>
</tr>
<tr>
<td><p>Convertir una línia a enter</p></td>
<td><p><code>Integer.parseInt(entrada.nextLine().strip())</code> amb gestió de l&#x27;error.</p></td>
</tr>
<tr>
<td><p>Validar</p></td>
<td><p>Comprova primer el format i després l&#x27;interval permés.</p></td>
</tr>
<tr>
<td><p>Repetir una pregunta</p></td>
<td><p>Bucle que consumix cada resposta i acaba en acceptar una dada o finalitzar l&#x27;entrada.</p></td>
</tr>
</table>
</div>

## Referències

- [Scanner: tokens, línies i configuració regional](https://docs.oracle.com/en/java/javase/25/docs/api/java.base/java/util/Scanner.html).
- [Formatter: regles de format de printf](https://docs.oracle.com/en/java/javase/25/docs/api/java.base/java/util/Formatter.html).
- [JOptionPane: tipus de missatge i respostes](https://docs.oracle.com/en/java/javase/25/docs/api/java.desktop/javax/swing/JOptionPane.html).
