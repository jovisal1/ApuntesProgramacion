---
title: Validació d’entrades
description: Validació d’entrades en Java.
sidebar:
  order: 5
---

La validació té dos nivells:

1. **Format:** es pot interpretar el text com el tipus esperat? `"huit"` no és un enter.
2. **Domini:** és admissible per al problema? `-4` és un enter, però no una quantitat vàlida d'alumnes.

`Scanner.nextInt()` llança `InputMismatchException` si el token no és un enter vàlid o queda fora de rang. `Integer.parseInt()` llança `NumberFormatException` si el text no representa un `int`. Són operacions diferents i no es recuperen de l'error de la mateixa manera.

Si uses `hasNextInt()` dins d'un bucle i el token no és vàlid, has de consumir l'entrada rebutjada abans de repetir; en cas contrari, comprovaràs indefinidament el mateix token. Llegir per línies facilita definir cada intent com una resposta completa.

<aside class="java-document-note">
<p><strong>COMPROVAR UN PROGRAMA</strong></p>
<p>Abans d&#x27;executar, anota entrada i eixida esperades. Prova un cas normal, valors límit i dades incorrectes. Si el resultat no coincidix, col·loca un punt d&#x27;interrupció abans de la lectura o del càlcul i observa les variables pas a pas. Un programa que compila encara pot tindre errors lògics.</p>
</aside>

## Repetir una petició sense utilitzar excepcions

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

## Què significa `try` / `catch`

Quan convertim una línia amb `parseInt` o `parseDouble`, podem gestionar una conversió fallida amb `try` / `catch`: dins de `try` intentem l'operació; si es produïx l'excepció indicada, s'executa `catch`. [El programa de mitjana de notes](/ApuntesProgramacion/ca/guides/introduccion-a-java/entrada-y-salida-de-datos/ejemplos-completos/) usa eixa estratègia. Una conversió correcta no garantix que el número siga vàlid per al problema: també cal comprovar el seu interval.

## Repàs

<div class="java-document-table">
<table>
<tr>
<th scope="col"><p><strong>Necessites…</strong></p></th>
<th scope="col"><p><strong>Utilitza…</strong></p></th>
</tr>
<tr>
<td><p>Validar</p></td>
<td><p>Comprova primer el format i després l&#x27;interval permés.</p></td>
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
<td><p>La petició es repetix sense avançar</p></td>
<td><p>Comproves una altra vegada el mateix token incorrecte.</p></td>
<td><p>Consumix la resposta rebutjada abans de repetir.</p></td>
</tr>
</table>
</div>
