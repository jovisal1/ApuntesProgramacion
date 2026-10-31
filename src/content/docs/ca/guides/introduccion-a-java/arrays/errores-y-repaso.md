---
title: Errors freqüents i repàs
description: Errors freqüents i repàs en Java.
sidebar:
  order: 6
---

Quan un programa amb arrays falla, comprova els índexs, la longitud i si s’ha creat cada array o fila. Estos són els errors més habituals i les idees principals per a repassar.

| Símptoma o error | Causa habitual | Com corregir-lo |
| --- | --- | --- |
| `ArrayIndexOutOfBoundsException` | Índex negatiu o major o igual que `length` | Revisa `0 <= i && i < datos.length`; en un `for`, utilitza `<`, no `<=`. |
| `NullPointerException` | Array o fila sense crear; element de text `null` | Localitza quina referència és `null` abans d'utilitzar-la. |
| Error de compilació amb `length()` | Confondre array i text | En arrays, `length` no porta parèntesis. |
| Eixida com `[I@...` | Imprimir directament un array | Utilitza `Arrays.toString` o `Arrays.deepToString`. |
| Una «còpia» canvia l'original | Has utilitzat `copia = original` | Crea una còpia independent; en matrius, copia també les files. |
| Un `for-each` no canvia els enters | Modifiques la variable del bucle | Escriu en `datos[i]` amb un bucle amb índex. |
| El màxim ix `0` amb dades negatives | Inicialitzar-lo a zero | Partix del primer element i comprova abans que l'array no estiga buit. |
| Cerca binària incorrecta | Array sense ordenar o mal ús del resultat | Ordena primer i comprova si el resultat és negatiu. |

Per a depurar un bucle, anota en cada volta **l'índex, el valor de la casella i l'acumulador o comptador**. Si es produïx una excepció, llig la línia indicada i compara l'índex utilitzat amb la longitud real. En una matriu, comprova la fila i després la columna d'eixa fila.

## Full de repàs

| Operació | Recorda |
| --- | --- |
| Crear | `int[] a = new int[5];` o `int[] a = { 1, 2, 3 };` |
| Consultar grandària | `a.length`; l'últim índex és `a.length - 1` si no està buit. |
| Recórrer | `for (int i = 0; i < a.length; i++)` o `for (int dato : a)` |
| Matriu | Files: `m.length`; columnes de la fila `f`: `m[f].length`. |
| Mostrar | `Arrays.toString(a)`; per a matrius, `Arrays.deepToString(m)`. |
| Copiar | `Arrays.copyOf(a, a.length)`; assignar una altra variable no copia. |
| Comparar | `Arrays.equals(a, b)` compara elements; `==` compara referències. |
| Ordenar | `Arrays.sort(a)` modifica l'array. |
| Buscar | Seqüencial sense ordenar; `Arrays.binarySearch` exigix ordenació prèvia. |
| Omplir | `Arrays.fill(a, valor)` canvia totes les caselles. |

## Per a ampliar

- [Arrays en la documentació de Java](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/arrays.html).
- [Referència de `java.util.Arrays`](https://docs.oracle.com/en/java/javase/25/docs/api/java.base/java/util/Arrays.html).
- [Unitat d'arrays de Sergarb1](https://sergarb1.github.io/ApuntesProgramacion/06-arrays/), referència per a ampliar els temes de pràctica i repàs.
