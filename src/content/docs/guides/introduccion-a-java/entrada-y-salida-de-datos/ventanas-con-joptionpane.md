---
title: Ventanas con JOptionPane
description: Ventanas con JOptionPane en Java.
sidebar:
  order: 7
---

Swing incluye `JOptionPane`, útil para diálogos sencillos en un entorno de escritorio con interfaz gráfica. Es una ampliación: la consola sigue siendo nuestra vía principal para aprender.

<div class="java-document-table">
<table>
<tr>
<th scope="col"><p><strong>Método</strong></p></th>
<th scope="col"><p><strong>Utilidad</strong></p></th>
</tr>
<tr>
<td><p><code>showMessageDialog</code></p></td>
<td><p>Muestra un mensaje.</p></td>
</tr>
<tr>
<td><p><code>showInputDialog</code></p></td>
<td><p>Solicita un texto; devuelve <code>null</code> si se cancela.</p></td>
</tr>
<tr>
<td><p><code>showConfirmDialog</code></p></td>
<td><p>Devuelve un código de respuesta: sí, no, cancelar o cierre.</p></td>
</tr>
<tr>
<td><p><code>showOptionDialog</code></p></td>
<td><p>Permite definir opciones personalizadas.</p></td>
</tr>
</table>
</div>

Guarda este ejemplo en **`SaludoVentana.java`** y ejecútalo en un equipo con escritorio:

```java
import javax.swing.JOptionPane;
import javax.swing.SwingUtilities;

public class SaludoVentana {
    public static void main(String[] args) {
        SwingUtilities.invokeLater(() -> {
            String nombre = JOptionPane.showInputDialog(null, "¿Cómo te llamas?");
            if (nombre != null && !nombre.isBlank()) {
                JOptionPane.showMessageDialog(null,
                        "Hola, " + nombre.strip(),
                        "Saludo", JOptionPane.INFORMATION_MESSAGE);
            }
        });
    }
}
```

`SwingUtilities.invokeLater` programa la interacción en el hilo de eventos de Swing. La expresión `() -> { ... }` representa la tarea que se ejecutará; estudiaremos esa sintaxis más adelante.

El primer argumento `null` indica que no establecemos una ventana padre. En `showMessageDialog`, las constantes como `INFORMATION_MESSAGE`, `WARNING_MESSAGE`, `ERROR_MESSAGE`, `QUESTION_MESSAGE` y `PLAIN_MESSAGE` seleccionan el tipo de mensaje. `DEFAULT_OPTION` corresponde a opciones de diálogo, no es una constante de tipo de mensaje.

La entrada sigue siendo texto: si necesitas un número, comprueba primero si se ha cancelado y después convierte y valida. En confirmaciones compara con constantes como `JOptionPane.YES_OPTION`; no supongas que todas las respuestas significan «sí».

## Referencias

- [JOptionPane: tipos de mensaje y respuestas](https://docs.oracle.com/en/java/javase/25/docs/api/java.desktop/javax/swing/JOptionPane.html).
