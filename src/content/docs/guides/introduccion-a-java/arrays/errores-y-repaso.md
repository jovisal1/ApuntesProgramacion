---
title: Errores frecuentes y repaso
description: Errores frecuentes y repaso en Java.
sidebar:
  order: 6
---

Cuando un programa con arrays falla, comprueba los índices, la longitud y si se ha creado cada array o fila. Estos son los errores más habituales y las ideas principales para repasar.

| Síntoma o error | Causa habitual | Cómo corregirlo |
| --- | --- | --- |
| `ArrayIndexOutOfBoundsException` | Índice negativo o mayor o igual que `length` | Revisa `0 <= i && i < datos.length`; en un `for`, usa `<`, no `<=`. |
| `NullPointerException` | Array o fila sin crear; elemento de texto `null` | Localiza qué referencia es `null` antes de usarla. |
| Error de compilación con `length()` | Confundir array y texto | En arrays, `length` no lleva paréntesis. |
| Salida como `[I@...` | Imprimir directamente un array | Usa `Arrays.toString` o `Arrays.deepToString`. |
| Una «copia» cambia el original | Has utilizado `copia = original` | Crea una copia independiente; en matrices, copia también las filas. |
| Un `for-each` no cambia los enteros | Modificas la variable del bucle | Escribe en `datos[i]` con un bucle con índice. |
| El máximo sale `0` con datos negativos | Inicializarlo a cero | Parte del primer elemento y comprueba antes que el array no esté vacío. |
| Búsqueda binaria incorrecta | Array sin ordenar o mal uso del resultado | Ordena primero y comprueba si el resultado es negativo. |

Para depurar un bucle, anota en cada vuelta **el índice, el valor de la casilla y el acumulador o contador**. Si ocurre una excepción, lee la línea indicada y compara el índice utilizado con la longitud real. En una matriz, comprueba la fila y después la columna de esa fila.

## Chuleta de repaso

| Operación | Recuerda |
| --- | --- |
| Crear | `int[] a = new int[5];` o `int[] a = { 1, 2, 3 };` |
| Consultar tamaño | `a.length`; el último índice es `a.length - 1` si no está vacío. |
| Recorrer | `for (int i = 0; i < a.length; i++)` o `for (int dato : a)` |
| Matriz | Filas: `m.length`; columnas de la fila `f`: `m[f].length`. |
| Mostrar | `Arrays.toString(a)`; para matrices, `Arrays.deepToString(m)`. |
| Copiar | `Arrays.copyOf(a, a.length)`; asignar otra variable no copia. |
| Comparar | `Arrays.equals(a, b)` compara elementos; `==` compara referencias. |
| Ordenar | `Arrays.sort(a)` modifica el array. |
| Buscar | Secuencial sin ordenar; `Arrays.binarySearch` exige ordenación previa. |
| Rellenar | `Arrays.fill(a, valor)` cambia todas las casillas. |

## Para ampliar

- [Arrays en la documentación de Java](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/arrays.html).
- [Referencia de `java.util.Arrays`](https://docs.oracle.com/en/java/javase/25/docs/api/java.base/java/util/Arrays.html).
- [Unidad de arrays de Sergarb1](https://sergarb1.github.io/ApuntesProgramacion/06-arrays/), referencia para ampliar los temas de práctica y repaso.
