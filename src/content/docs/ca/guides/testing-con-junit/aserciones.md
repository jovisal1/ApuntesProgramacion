---
title: "Mètodes d’asserció"
description: "Mètodes d’asserció."
sidebar:
  order: 6
---

Les assercions són mètodes estàtics de `org.junit.jupiter.api.Assertions`. No totes comproven el mateix: triem la que expressa la promesa del mètode que provem. Les anotacions com `@Test` i `@DisplayName` marquen o descriuen una prova; les assercions decidixen si les seues comprovacions passen.

Si una asserció falla, la resta d’instruccions d’eixe mètode de test no s’executa normalment. JUnit registra l’error i continua amb les altres proves; l’error d’una comprovació no vol dir que s’hagen executat les comprovacions posteriors d’eixe mateix test.


Els fragments d’esta pàgina s’afigen dins d’`OperacionesTest`, que hem creat en [la primera prova](/ApuntesProgramacion/ca/guides/testing-con-junit/primera-prueba/), i utilitzen els mètodes d’`Operaciones`.

Afig els imports que necessites al principi del fitxer, abans de la classe:

```java
import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertArrayEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertNull;
```


## assertEquals: el valor ha de coincidir amb l’esperat

Utilitza `assertEquals(esperado, obtenido)` quan coneixes el resultat concret que ha de produir el mètode. En una suma no és suficient que el resultat siga positiu: esperem exactament `5`. El primer argument és la nostra referència, calculada a partir del problema; el segon és el resultat del programa.

```java
int obtenido = Operaciones.sumar(2, 3);
assertEquals(5, obtenido, "La suma de 2 i 3 ha de ser 5");
```

Este fragment va dins d’un mètode anotat amb `@Test`. El tercer argument és un missatge opcional que ajuda a entendre l’error. Si `obtenido` val `-1`, el test falla i l’informe mostra l’esperat i l’obtingut. Amb enters comparem el valor; amb cadenes, el contingut; amb arrays necessitem una asserció específica.

La mateixa idea de missatge opcional s’aplica a les altres assercions, com `assertTrue(condicion, "explicació")`. El missatge descriu què s’havia de complir; no és una instrucció per a modificar el resultat.

## assertTrue: comprovar que una condició és certa

`assertTrue(condicion)` expressa que una condició ha de ser certa. Per a un nombre par, esperem que `esPar` retorne `true`. Si retorna `false`, la comprovació falla. No s’imprimix una opinió sobre el resultat: s’avalua una condició booleana.


```java
@Test
void esParReconoceUnNumeroPar() {
    assertTrue(Operaciones.esPar(8));
}
```

## assertFalse: comprovar que una condició és falsa

`assertFalse(condicion)` espera just el contrari: `false`. Servix per a comprovar un rebuig o una propietat que no s’ha de complir. Amb `7`, `esPar` ha de retornar `false`; si retornara `true`, este test fallaria. Un resultat `false` no és necessàriament un error del programa: pot ser la resposta correcta a la pregunta.

```java
@Test
void esParRechazaUnNumeroImpar() {
    assertFalse(Operaciones.esPar(7));
}
```



Per a `esNotaValida`, convé distingir quatre casos: els dos extrems permesos i dos valors fora del rang. Així un error en un límit no queda ocult per un cas situat lluny d’ell.

## assertEquals amb cadenes: comparar el contingut

`assertEquals` també compara el contingut de cadenes. No cal usar `==`, que no expressa ací la comparació de contingut:

```java
@Test
void prepararSaludoIncluyeElNombre() {
    assertEquals("Hola, Ana", Operaciones.prepararSaludo("Ana"));
}
```


Els espais i signes formen part del resultat: `"Hola,Ana"` i `"Hola, Ana"` no són el mateix text.

## assertArrayEquals: comparar caselles i comprovar efectes

Utilitza `assertArrayEquals(esperado, obtenido)` per a comprovar que dos arrays tenen la mateixa longitud i els mateixos valors en el mateix ordre. `[3, 6]` no coincidix amb `[6, 3]` ni amb `[3]`. Si una casella diferix, l’informe ajuda a localitzar-ne l’índex. `assertEquals` aplicat directament a arrays no compara el contingut de les caselles. En este exemple comprovem tant els valors nous com que el mètode no modifique l’original:

```java
@Test
void crearIncrementadoConservaElOriginal() {
    int[] original = { 2, 5 };
    int[] obtenido = Operaciones.crearIncrementado(original);
    assertArrayEquals(new int[] { 3, 6 }, obtenido);
    assertArrayEquals(new int[] { 2, 5 }, original);
}
```


Les dos assercions corresponen al mateix comportament: produir els increments conservant l’entrada. Si la primera falla, JUnit deixa d’executar eixe mètode de test i passa a informar de l’error; per això també importen les comprovacions que no han arribat a executar-se.

<aside class="java-document-note">
<p><strong>EN PARAULES SENZILLES</strong></p>
<p>Comparar arrays és revisar el que hi ha en cada casella, no només mirar si tenim la mateixa caixa. A més, si prometem crear una caixa nova sense tocar l’anterior, el test ha de mirar les dos: el resultat i l’entrada que havia de conservar-se.</p>
</aside>

## assertNotNull: hi ha d’haver una referència

`assertNotNull(obtenido)` comprova que un resultat no siga `null`. És útil quan el contracte del mètode promet retornar un array o un text que puguem usar. No comprova que el contingut siga correcte ni que l’array tinga elements.

```java
@Test
void crearIncrementadoDevuelveUnArrayNoNulo() {
    int[] obtenido = Operaciones.crearIncrementado(new int[0]);
    assertNotNull(obtenido);
    assertArrayEquals(new int[0], obtenido);
}
```

La primera asserció falla si el mètode retorna `null`; la segona comprova que l’array siga buit. Separar les dos idees ajuda a llegir l’error. `assertArrayEquals` ja detectaria que un array esperat no nul no coincidix amb `null`, però el missatge de `assertNotNull` fa explícita la promesa que estem estudiant.

<aside class="java-document-note">
<p><strong>EN PARAULES SENZILLES</strong></p>
<p>Una caixa buida continua sent una caixa. Un array buit existix i té longitud zero; <code>null</code> indica que la variable no referencia cap array. Comprovar que «hi ha caixa» no demostra que dins hi haja el que esperàvem.</p>
</aside>

## assertNull: l’absència és el resultat esperat

`assertNull(obtenido)` passa quan el valor és `null`. No és l’oposat d’«el programa funciona»: a vegades l’absència és la resposta que hem acordat. En `buscarNombre`, afegit a `Operaciones`, retornem el nom si apareix i `null` si no hi ha coincidència. El contracte requerix un array i un text buscat no nuls.

```java
@Test
void buscarNombreAusenteDevuelveNull() {
    String[] nombres = { "Ana", "Luis" };
    String obtenido = Operaciones.buscarNombre(nombres, "Eva");
    assertNull(obtenido);
}
```

El test passa perquè «Eva» no apareix. Fallaria si el mètode retornara `""`, `"Eva"` o qualsevol altra cadena: una cadena buida no és `null`. També cal comprovar un nom present, per exemple amb `assertEquals("Ana", Operaciones.buscarNombre(nombres, "Ana"))`, perquè comprovar només l’absència no detectaria un mètode que retornara sempre `null`.

## assertEquals amb decimals: un marge raonat

Utilitza esta variant d’`assertEquals` quan treballes amb un resultat decimal aproximat. Les operacions amb `double` poden produir diferències menudes de representació. Per a esta mitjana, fixem una tolerància de `0.000001`:

```java
@Test
void calcularMediaAdmiteDecimales() {
    assertEquals(0.15, Operaciones.calcularMedia(0.1, 0.2), 0.000001);
}
```


El primer argument és el valor esperat, el segon l’obtingut i el tercer la diferència màxima que acceptem. La tolerància ha de ser adequada al problema: no s’ha d’ampliar per a amagar un càlcul incorrecte.

| Asserció | Què compara en estos exemples |
| --- | --- |
| `assertEquals(esperado, obtenido)` | Enters o contingut de cadenes. |
| `assertTrue(condicion)` | Que el resultat siga `true`. |
| `assertFalse(condicion)` | Que el resultat siga `false`. |
| `assertArrayEquals(esperado, obtenido)` | Longitud i caselles dels arrays, en el mateix ordre. |
| `assertNotNull(obtenido)` | Que hi haja una referència no nul·la. |
| `assertNull(obtenido)` | Que l’absència siga `null`, tal com s’ha acordat. |
| `assertEquals(esperado, obtenido, tolerancia)` | Decimals amb un marge explícit. |
