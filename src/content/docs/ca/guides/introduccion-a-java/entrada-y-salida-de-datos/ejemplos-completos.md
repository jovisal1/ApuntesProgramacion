---
title: Exemples complets
description: Exemples complets en Java.
sidebar:
  order: 6
---

Estos dos programes combinen lectura, validació i presentació de resultats. Seguix com les dades passen de l’entrada al càlcul i com respon el programa si no són vàlides.

## Mitjana de tres notes

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

## Un menú que es repetix fins a eixir

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

## Repàs

<div class="java-document-table">
<table>
<tr>
<th scope="col"><p><strong>Necessites…</strong></p></th>
<th scope="col"><p><strong>Utilitza…</strong></p></th>
</tr>
<tr>
<td><p>Repetir una pregunta</p></td>
<td><p>Bucle que consumix cada resposta i acaba en acceptar una dada o finalitzar l&#x27;entrada.</p></td>
</tr>
</table>
</div>
