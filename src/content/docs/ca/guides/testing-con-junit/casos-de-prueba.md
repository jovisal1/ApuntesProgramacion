---
title: "Triar casos de prova"
description: "Triar casos de prova."
sidebar:
  order: 5
---

Que `sumar(2, 3)` funcione no ens diu què ocorre en sumar zero o un negatiu. Cada **cas de prova** definix entrades concretes i un comportament esperat. Triem casos diferents perquè poden descobrir errors diferents.

| Cas | Exemple | Resultat esperat |
| --- | --- | --- |
| Normal | `sumar(2, 3)` | `5`. |
| Amb un negatiu | `sumar(-4, 7)` | `3`. |
| Amb zero | `sumar(8, 0)` | `8`. |
| Límit inferior d’una nota | `esNotaValida(0)` | `true`. |
| Límit superior d’una nota | `esNotaValida(10)` | `true`. |
| Fora del rang admés com a nota | `esNotaValida(-0.1)` i `esNotaValida(10.1)` | `false` en els dos casos. |
| Array buit permés | `crearIncrementado(new int[0])` | Un array buit. |

Una nota negativa és invàlida **com a nota**, però és una entrada que `esNotaValida` ha de saber rebutjar retornant `false`. En canvi, `crearIncrementado` suposa un array no nul: passar `null` no forma part del seu contracte actual. Provar entrades incorrectes exigix decidir primer què ha de fer el mètode amb elles; no s’inventa una resposta durant el test.

Continua amb la classe creada en [la primera prova](/ApuntesProgramacion/ca/guides/testing-con-junit/primera-prueba/). Pots afegir estos mètodes **dins d’`OperacionesTest`, abans de la seua última clau**:

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


En estos casos curts s’escriuen les tres parts en una línia: la dada està en els arguments, l’execució és la crida i la comprovació és `assertEquals`. No és obligatori crear variables per a cada valor si el test continua sent fàcil de llegir.

El resultat esperat s’ha de calcular de manera independent. Escriure `assertEquals(Operaciones.sumar(2, 3), Operaciones.sumar(2, 3))` no comprova que sumar estiga bé: compara dos resultats de la mateixa operació, encara que els dos siguen incorrectes.
