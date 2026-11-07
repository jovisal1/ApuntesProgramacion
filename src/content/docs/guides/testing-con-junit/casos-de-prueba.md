---
title: "Elegir casos de prueba"
description: "Elegir casos de prueba."
sidebar:
  order: 5
---

Que `sumar(2, 3)` funcione no nos dice qué ocurre al sumar cero o un negativo. Cada **caso de prueba** define entradas concretas y un comportamiento esperado. Elegimos casos distintos porque pueden descubrir errores distintos.

| Caso | Ejemplo | Resultado esperado |
| --- | --- | --- |
| Normal | `sumar(2, 3)` | `5`. |
| Con un negativo | `sumar(-4, 7)` | `3`. |
| Con cero | `sumar(8, 0)` | `8`. |
| Límite inferior de una nota | `esNotaValida(0)` | `true`. |
| Límite superior de una nota | `esNotaValida(10)` | `true`. |
| Fuera del rango admitido como nota | `esNotaValida(-0.1)` y `esNotaValida(10.1)` | `false` en ambos casos. |
| Array vacío permitido | `crearIncrementado(new int[0])` | Un array vacío. |

Una nota negativa es inválida **como nota**, pero es una entrada que `esNotaValida` debe saber rechazar devolviendo `false`. En cambio, `crearIncrementado` supone un array no nulo: pasar `null` no forma parte de su contrato actual. Probar entradas incorrectas exige decidir primero qué debe hacer el método con ellas; no se inventa una respuesta durante el test.

Continúa con la clase creada en [la primera prueba](/ApuntesProgramacion/guides/testing-con-junit/primera-prueba/). Puedes añadir estos métodos **dentro de `OperacionesTest`, antes de su última llave**:

```java
@Test
void sumarUnNegativoYUnPositivo() {
    assertEquals(3, Operaciones.sumar(-4, 7));
}

@Test
void sumarCeroConservaElNumero() {
    assertEquals(8, Operaciones.sumar(8, 0));
}
```


En estos casos cortos se escriben las tres partes en una línea: el dato está en los argumentos, la ejecución es la llamada y la comprobación es `assertEquals`. No es obligatorio crear variables para cada valor si el test sigue siendo fácil de leer.

El resultado esperado debe calcularse de forma independiente. Escribir `assertEquals(Operaciones.sumar(2, 3), Operaciones.sumar(2, 3))` no comprueba que sumar esté bien: compara dos resultados de la misma operación, aunque ambos sean incorrectos.
