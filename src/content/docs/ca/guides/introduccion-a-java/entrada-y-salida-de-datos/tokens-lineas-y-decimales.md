---
title: Tokens, línies i decimals
description: Tokens, línies i decimals en Java.
sidebar:
  order: 4
---

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

## Opció 1: consumir la resta de la línia de manera intencionada

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

## Opció 2: llegir sempre línies i convertir

Una alternativa còmoda quan cada resposta ocupa una línia:

```java
Scanner entrada = new Scanner(System.in);
System.out.print("Edat: ");
int edat = Integer.parseInt(entrada.nextLine().strip());
System.out.print("Nom complet: ");
String nom = entrada.nextLine();
System.out.println(nom + " té " + edat + " anys.");
```

Així no mesclem les dos formes de lectura. Este fragment suposa que l'edat té un format vàlid; en [l’exemple complet de la mitjana de notes](/ApuntesProgramacion/ca/guides/introduccion-a-java/entrada-y-salida-de-datos/ejemplos-completos/) aprendrem a recuperar-nos si no és així.

## Decimals i configuració regional

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

## Repàs

<div class="java-document-table">
<table>
<tr>
<th scope="col"><p><strong>Necessites…</strong></p></th>
<th scope="col"><p><strong>Utilitza…</strong></p></th>
</tr>
<tr>
<td><p>Llegir un decimal per tokens</p></td>
<td><p><code>entrada.nextDouble()</code> amb una configuració regional explícita.</p></td>
</tr>
<tr>
<td><p>Convertir una línia a enter</p></td>
<td><p><code>Integer.parseInt(entrada.nextLine().strip())</code> amb gestió de l&#x27;error.</p></td>
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
<td><p>El nom queda buit</p></td>
<td><p>Un mètode de tokens va deixar pendent el final de línia.</p></td>
<td><p>Decidix si consumir eixa línia o llegir sempre amb <code>nextLine()</code>.</p></td>
</tr>
<tr>
<td><p>Un decimal amb coma no s&#x27;accepta</p></td>
<td><p>Entrada i lector utilitzen convencions diferents.</p></td>
<td><p>Explica el separador esperat i configura el <code>Locale</code>.</p></td>
</tr>
</table>
</div>
