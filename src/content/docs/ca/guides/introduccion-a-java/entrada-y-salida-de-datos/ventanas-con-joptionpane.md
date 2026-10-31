---
title: Finestres amb JOptionPane
description: Finestres amb JOptionPane en Java.
sidebar:
  order: 7
---

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

## Referències

- [JOptionPane: tipus de missatge i respostes](https://docs.oracle.com/en/java/javase/25/docs/api/java.desktop/javax/swing/JOptionPane.html).
