---
title: "Primera prueba"
description: "Primera prueba."
sidebar:
  order: 3
---

Vamos a reunir en `src/Operaciones.java` varias operaciones pequeñas. Algunas ya han aparecido en la unidad. **No necesitan `main` para que podamos probarlas.**

```java
public class Operaciones {
    public static int sumar(int a, int b) {
        return a + b;
    }

    public static boolean esPar(int numero) {
        return numero % 2 == 0;
    }

    public static boolean esNotaValida(double nota) {
        return nota >= 0 && nota <= 10;
    }

    public static String prepararSaludo(String nombre) {
        return "Hola, " + nombre;
    }

    public static int[] crearIncrementado(int[] datos) {
        int[] copia = new int[datos.length];
        for (int i = 0; i < datos.length; i++) {
            copia[i] = datos[i] + 1;
        }
        return copia;
    }

    public static double calcularMedia(double a, double b) {
        return (a + b) / 2;
    }

    public static String buscarNombre(String[] nombres, String buscado) {
        for (String nombre : nombres) {
            if (buscado.equals(nombre)) {
                return nombre;
            }
        }
        return null;
    }
}
```


Para centrarnos en testing, las sumas e incrementos usan enteros pequeños que no desbordan `int`; los nombres y arrays no son `null`, y las medias usan decimales pequeños. `esNotaValida` decide si una nota finita está entre `0` y `10`, incluidos ambos extremos. Más adelante ampliaremos la validación de otros tipos de entradas.

Crea ahora **`test/OperacionesTest.java`** con este primer test completo:

```java
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.DisplayName;
import static org.junit.jupiter.api.Assertions.assertEquals;

public class OperacionesTest {
    @Test
    @DisplayName("Sumar dos positivos devuelve cinco")
    void sumarDosPositivosDevuelveSuSuma() {
        // Preparar
        int primero = 2;
        int segundo = 3;

        // Ejecutar
        int obtenido = Operaciones.sumar(primero, segundo);

        // Comprobar
        assertEquals(5, obtenido);
    }
}
```


## Leer el test sin saltarse ninguna parte

- `import org.junit.jupiter.api.Test;` permite escribir `@Test`.
- **`@Test` es una anotación**: una marca que indica a JUnit que ese método es una prueba.
- `import static ...assertEquals;` permite llamar a un método estático de la clase `Assertions` sin escribir su nombre completo cada vez. No tiene relación con hacer estático el método de test.
- `sumarDosPositivosDevuelveSuSuma` describe el comportamiento que esperamos.
- `void` indica que el test no devuelve un resultado al llamador. **No escribimos `static`, `private` ni `main` en el método de test.** En estos ejemplos tampoco recibe parámetros.
- `Operaciones.sumar(primero, segundo)` es una llamada al método estático de la aplicación.
- `assertEquals(5, obtenido)` comprueba que el resultado esperado, `5`, coincide con el obtenido.

Los métodos de prueba aparecen sin `public`: JUnit Jupiter permite este acceso. El ejecutor se encarga de preparar y llamar a la clase de pruebas; todavía no necesitamos programar ese proceso de creación de objetos.

## Nombres legibles con @DisplayName

`@DisplayName` no comprueba ningún resultado: pone una etiqueta legible en el informe. En el ejemplo, el nombre Java sigue siendo `sumarDosPositivosDevuelveSuSuma`, pero podemos leer «Sumar dos positivos devuelve cinco» al ejecutarlo. También puede ponerse sobre la clase para identificar todo el grupo. No sustituye a `@Test`: sin esa marca, el método no es una prueba ordinaria de Jupiter.

## Preparar, ejecutar y comprobar

Las tres partes del ejemplo corresponden a tres preguntas:

| Parte | Pregunta | En el ejemplo |
| --- | --- | --- |
| Preparar | ¿Con qué datos voy a probar? | `2` y `3`. |
| Ejecutar | ¿Qué operación quiero comprobar? | `Operaciones.sumar(2, 3)`. |
| Comprobar | ¿Qué debería haber ocurrido? | El resultado debe ser `5`. |

Se suele llamar a esta organización **Arrange, Act, Assert**. No son instrucciones especiales de Java: son una forma de ordenar y leer el test. La **aserción** es la comprobación que expresa lo que esperamos.
