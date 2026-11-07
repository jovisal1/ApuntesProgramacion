---
title: "Métodos de aserción"
description: "Métodos de aserción."
sidebar:
  order: 6
---

Las aserciones son métodos estáticos de `org.junit.jupiter.api.Assertions`. No todas comprueban lo mismo: elegimos la que expresa la promesa del método que probamos. Las anotaciones como `@Test` y `@DisplayName` marcan o describen una prueba; las aserciones deciden si sus comprobaciones pasan.

Si una aserción falla, el resto de instrucciones de ese método de test no se ejecuta normalmente. JUnit registra el fallo y continúa con las otras pruebas; el fallo de una comprobación no significa que se hayan ejecutado las comprobaciones posteriores de ese mismo test.


Los fragmentos de esta página se añaden dentro de `OperacionesTest`, que hemos creado en [la primera prueba](/ApuntesProgramacion/guides/testing-con-junit/primera-prueba/), y utilizan los métodos de `Operaciones`.

Añade los imports que necesites al principio del archivo, antes de la clase:

```java
import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertArrayEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertNull;
```


## assertEquals: el valor debe coincidir con el esperado

Utiliza `assertEquals(esperado, obtenido)` cuando conoces el resultado concreto que debe producir el método. En una suma no basta con que el resultado sea positivo: esperamos exactamente `5`. El primer argumento es nuestra referencia, calculada a partir del problema; el segundo es el resultado del programa.

```java
int obtenido = Operaciones.sumar(2, 3);
assertEquals(5, obtenido, "La suma de 2 y 3 debe ser 5");
```

Este fragmento va dentro de un método anotado con `@Test`. El tercer argumento es un mensaje opcional que ayuda a entender el fallo. Si `obtenido` vale `-1`, el test falla y el informe muestra lo esperado y lo obtenido. Con enteros comparamos el valor; con cadenas, el contenido; con arrays necesitamos una aserción específica.

La misma idea de mensaje opcional se aplica a las otras aserciones, como `assertTrue(condicion, "explicación")`. El mensaje describe qué debía cumplirse; no es una instrucción para modificar el resultado.

## assertTrue: comprobar que una condición es cierta

`assertTrue(condicion)` expresa que una condición debe ser cierta. Para un número par, esperamos que `esPar` devuelva `true`. Si devuelve `false`, la comprobación falla. No se imprime una opinión sobre el resultado: se evalúa una condición booleana.


```java
@Test
void esParReconoceUnNumeroPar() {
    assertTrue(Operaciones.esPar(8));
}
```

## assertFalse: comprobar que una condición es falsa

`assertFalse(condicion)` espera justo lo contrario: `false`. Sirve para comprobar un rechazo o una propiedad que no debe cumplirse. Con `7`, `esPar` debe devolver `false`; si devolviera `true`, este test fallaría. Un resultado `false` no es necesariamente un error del programa: puede ser la respuesta correcta a la pregunta.

```java
@Test
void esParRechazaUnNumeroImpar() {
    assertFalse(Operaciones.esPar(7));
}
```



Para `esNotaValida`, conviene distinguir cuatro casos: los dos extremos permitidos y dos valores fuera del rango. De este modo un error en un límite no queda oculto por un caso situado lejos de él.

## assertEquals con cadenas: comparar el contenido

`assertEquals` también compara el contenido de cadenas. No hace falta usar `==`, que no expresa aquí la comparación de contenido:

```java
@Test
void prepararSaludoIncluyeElNombre() {
    assertEquals("Hola, Ana", Operaciones.prepararSaludo("Ana"));
}
```


Los espacios y signos forman parte del resultado: `"Hola,Ana"` y `"Hola, Ana"` no son el mismo texto.

## assertArrayEquals: comparar casillas y comprobar efectos

Utiliza `assertArrayEquals(esperado, obtenido)` para comprobar que dos arrays tienen la misma longitud y los mismos valores en el mismo orden. `[3, 6]` no coincide con `[6, 3]` ni con `[3]`. Si una casilla difiere, el informe ayuda a localizar su índice. `assertEquals` aplicado directamente a arrays no compara el contenido de sus casillas. En este ejemplo comprobamos tanto los valores nuevos como que el método no modifique el original:

```java
@Test
void crearIncrementadoConservaElOriginal() {
    int[] original = { 2, 5 };
    int[] obtenido = Operaciones.crearIncrementado(original);
    assertArrayEquals(new int[] { 3, 6 }, obtenido);
    assertArrayEquals(new int[] { 2, 5 }, original);
}
```


Las dos aserciones corresponden al mismo comportamiento: producir los incrementos conservando la entrada. Si la primera falla, JUnit deja de ejecutar ese método de test y pasa a informar del fallo; por eso también importan las comprobaciones que no han llegado a ejecutarse.

<aside class="java-document-note">
<p><strong>EN PALABRAS SENCILLAS</strong></p>
<p>Comparar arrays es revisar lo que hay en cada casilla, no solo mirar si tenemos la misma caja. Además, si prometemos crear una caja nueva sin tocar la anterior, el test tiene que mirar las dos: el resultado y la entrada que debía conservarse.</p>
</aside>

## assertNotNull: debe haber una referencia

`assertNotNull(obtenido)` comprueba que un resultado no sea `null`. Es útil cuando el contrato del método promete devolver un array o un texto que podamos usar. No comprueba que su contenido sea correcto ni que el array tenga elementos.

```java
@Test
void crearIncrementadoDevuelveUnArrayNoNulo() {
    int[] obtenido = Operaciones.crearIncrementado(new int[0]);
    assertNotNull(obtenido);
    assertArrayEquals(new int[0], obtenido);
}
```

La primera aserción falla si el método devuelve `null`; la segunda comprueba que el array sea vacío. Separar ambas ideas ayuda a leer el fallo. `assertArrayEquals` ya detectaría que un array esperado no nulo no coincide con `null`, pero el mensaje de `assertNotNull` hace explícita la promesa que estamos estudiando.

<aside class="java-document-note">
<p><strong>EN PALABRAS SENCILLAS</strong></p>
<p>Una caja vacía sigue siendo una caja. Un array vacío existe y tiene longitud cero; <code>null</code> indica que la variable no referencia ningún array. Comprobar que «hay caja» no demuestra que dentro haya lo que esperábamos.</p>
</aside>

## assertNull: la ausencia es el resultado esperado

`assertNull(obtenido)` pasa cuando el valor es `null`. No es lo contrario de «el programa funciona»: a veces la ausencia es la respuesta que hemos acordado. En `buscarNombre`, añadido a `Operaciones`, devolvemos el nombre si aparece y `null` si no hay coincidencia. El contrato requiere un array y un texto buscado no nulos.

```java
@Test
void buscarNombreAusenteDevuelveNull() {
    String[] nombres = { "Ana", "Luis" };
    String obtenido = Operaciones.buscarNombre(nombres, "Eva");
    assertNull(obtenido);
}
```

El test pasa porque «Eva» no aparece. Fallaría si el método devolviera `""`, `"Eva"` o cualquier otra cadena: una cadena vacía no es `null`. También hay que comprobar un nombre presente, por ejemplo con `assertEquals("Ana", Operaciones.buscarNombre(nombres, "Ana"))`, porque comprobar solo la ausencia no detectaría un método que devolviera siempre `null`.

## assertEquals con decimales: un margen razonado

Utiliza esta variante de `assertEquals` cuando trabajas con un resultado decimal aproximado. Las operaciones con `double` pueden producir pequeñas diferencias de representación. Para esta media, fijamos una tolerancia de `0.000001`:

```java
@Test
void calcularMediaAdmiteDecimales() {
    assertEquals(0.15, Operaciones.calcularMedia(0.1, 0.2), 0.000001);
}
```


El primer argumento es el valor esperado, el segundo el obtenido y el tercero la diferencia máxima que aceptamos. La tolerancia debe ser adecuada al problema: no hay que ampliarla para esconder un cálculo incorrecto.

| Aserción | Qué compara en estos ejemplos |
| --- | --- |
| `assertEquals(esperado, obtenido)` | Enteros o contenido de cadenas. |
| `assertTrue(condicion)` | Que el resultado sea `true`. |
| `assertFalse(condicion)` | Que el resultado sea `false`. |
| `assertArrayEquals(esperado, obtenido)` | Longitud y casillas de los arrays, en el mismo orden. |
| `assertNotNull(obtenido)` | Que haya una referencia no nula. |
| `assertNull(obtenido)` | Que la ausencia sea `null`, tal como se ha acordado. |
| `assertEquals(esperado, obtenido, tolerancia)` | Decimales con un margen explícito. |
