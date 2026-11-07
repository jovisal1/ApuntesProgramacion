---
title: "Primera prova"
description: "Primera prova."
sidebar:
  order: 3
---

Reunirem en `src/Operaciones.java` diverses operacions menudes. Algunes ja han aparegut en la unitat. **No necessiten `main` perquè puguem provar-les.**

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


Per a centrar-nos en testing, les sumes i increments usen enters menuts que no desborden `int`; els noms i arrays no són `null`, i les mitjanes usen decimals menuts. `esNotaValida` decidix si una nota finita està entre `0` i `10`, inclosos els dos extrems. Més avant ampliarem la validació d’altres tipus d’entrades.

Crea ara **`test/OperacionesTest.java`** amb este primer test complet:

```java
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.DisplayName;
import static org.junit.jupiter.api.Assertions.assertEquals;

public class OperacionesTest {
    @Test
    @DisplayName("Sumar dos positius retorna cinc")
    void sumarDosPositivosDevuelveSuSuma() {
        // Preparar
        int primero = 2;
        int segundo = 3;

        // Executar
        int obtenido = Operaciones.sumar(primero, segundo);

        // Comprovar
        assertEquals(5, obtenido);
    }
}
```


## Llegir el test sense saltar-se cap part

- `import org.junit.jupiter.api.Test;` permet escriure `@Test`.
- **`@Test` és una anotació**: una marca que indica a JUnit que eixe mètode és una prova.
- `import static ...assertEquals;` permet cridar un mètode estàtic de la classe `Assertions` sense escriure el seu nom complet cada vegada. No té relació amb fer estàtic el mètode de test.
- `sumarDosPositivosDevuelveSuSuma` descriu el comportament que esperem.
- `void` indica que el test no retorna un resultat a qui l’ha cridat. **No escrivim `static`, `private` ni `main` en el mètode de test.** En estos exemples tampoc rep paràmetres.
- `Operaciones.sumar(primero, segundo)` és una crida al mètode estàtic de l’aplicació.
- `assertEquals(5, obtenido)` comprova que el resultat esperat, `5`, coincidix amb l’obtingut.

Els mètodes de prova apareixen sense `public`: JUnit Jupiter permet este accés. L’executor s’encarrega de preparar i cridar la classe de proves; encara no necessitem programar eixe procés de creació d’objectes.

## Noms llegibles amb @DisplayName

`@DisplayName` no comprova cap resultat: posa una etiqueta llegible en l’informe. En l’exemple, el nom Java continua sent `sumarDosPositivosDevuelveSuSuma`, però podem llegir «Sumar dos positius retorna cinc» en executar-lo. També es pot posar damunt de la classe per a identificar tot el grup. No substituïx `@Test`: sense eixa marca, el mètode no és una prova ordinària de Jupiter.

## Preparar, executar i comprovar

Les tres parts de l’exemple corresponen a tres preguntes:

| Part | Pregunta | En l’exemple |
| --- | --- | --- |
| Preparar | Amb quines dades provaré? | `2` i `3`. |
| Executar | Quina operació vull comprovar? | `Operaciones.sumar(2, 3)`. |
| Comprovar | Què hauria d’haver ocorregut? | El resultat ha de ser `5`. |

Esta organització se sol anomenar **Arrange, Act, Assert**. No són instruccions especials de Java: són una manera d’ordenar i llegir el test. L’**asserció** és la comprovació que expressa el que esperem.
