---
title: Estructures de salt
description: Estructures de salt en Java.
sidebar:
  order: 4
---

<p>Java disposa de tres instruccions que alteren el flux normal d'execució: <code>break</code>, <code>continue</code> i <code>return</code>.</p>

## break: eixir del bucle

<p>Amb <code>break</code> forcem la <strong>finalització immediata</strong> del bucle: se salta la comprovació de la condició i el codi restant, i el programa continua en la primera instrucció posterior al bucle.</p>

```java
class EjemploBreak {
    public static void main(String[] args) {
        for (int i = 0; i < 100; i++) {
            if (i == 10) break;          // acaba el bucle quan i val 10
            System.out.println("i: " + i);
        }
        System.out.println("Bucle completat.");
    }
}
```

<p><strong>EIXIDA PER CONSOLA</strong></p>

```text
i: 0
i: 1
i: 2
i: 3
i: 4
i: 5
i: 6
i: 7
i: 8
i: 9
Bucle completat.
```

<p>Si utilitzem <code>break</code> dins de <strong>bucles dins d'altres bucles</strong>, només acaba el bucle en què està escrit (el més intern), no tots:</p>

```java
class EjemploBreakAnidado {
    public static void main(String[] args) {
        for (int i = 0; i < 3; i++) {
            System.out.print("Pas " + i + ": ");
            for (int j = 0; j < 100; j++) {
                if (j == 10) break;      // només acaba el bucle de j
                System.out.print(j + " ");
            }
            System.out.println();
        }
        System.out.println("Bucles completats.");
    }
}
```

<p><strong>EIXIDA PER CONSOLA</strong></p>

```text
Pas 0: 0 1 2 3 4 5 6 7 8 9
Pas 1: 0 1 2 3 4 5 6 7 8 9
Pas 2: 0 1 2 3 4 5 6 7 8 9
Bucles completats.
```

<aside class="java-document-note">
<p><strong>CURIOSITAT</strong></p>
<p>Si vols eixir de <strong>diversos bucles alhora</strong>, Java permet posar una etiqueta al bucle exterior i utilitzar <code>break etiqueta;</code>:</p>
</aside>

```java
externo:
for (int i = 0; i < 3; i++) {
    for (int j = 0; j < 3; j++) {
        if (i * j == 2) break externo;   // ix dels DOS bucles
        System.out.println(i + "," + j);
    }
}
```

<p><strong>EIXIDA PER CONSOLA</strong></p>

```text
0,0
0,1
0,2
1,0
1,1
```

## continue: botar-se esta volta

<p>De vegades volem que el bucle continue, però que en una volta concreta <strong>no s'execute la resta del codi</strong>. Això és <code>continue</code>. A diferència de <code>break</code>, que acaba el bucle, <code>continue</code> només abandona la volta actual i <strong>passa a la següent</strong>.</p>

```java
class EjemploContinue {
    public static void main(String[] args) {
        for (int i = 0; i < 10; i++) {
            if (i % 2 == 0) continue;    // i parell: passa a la volta següent
            System.out.print(i + " ");
        }
    }
}
```

<p><strong>EIXIDA PER CONSOLA</strong></p>

```text
1 3 5 7 9
```

<aside class="java-document-note">
<p><strong>IDEA CLAU</strong></p>
<p><strong><code>break</code> = «me'n vaig del bucle». <code>continue</code> = «passe a la volta següent».</strong> Un bon truc per a no confondre'ls: el <code>break</code> trenca, el <code>continue</code> continua.</p>
</aside>

## return: tornar d'un mètode

<p><code>return</code> s'utilitza per a <strong>eixir d'un mètode</strong> (els estudiarem més avant en el curs): el control del programa torna al lloc des d'on es va cridar el mètode. En el mètode <code>main</code>, un <code>return</code> finalitza el programa.</p>

```java
class EjemploReturn {
    public static void main(String[] args) {
        boolean t = true;
        System.out.println("Abans del return.");
        if (t) return;                       // ací acaba el mètode main
        System.out.println("Esta línia no s'executarà");
    }
}
```

<p><strong>EIXIDA PER CONSOLA</strong></p>

```text
Abans del return.
```








## Repàs

<div class="java-document-table">
<table>
<tr>
<th scope="col"><p><strong>Tema</strong></p></th>
<th scope="col"><p><strong>El que has de recordar</strong></p></th>
</tr>
<tr>
<td><p><strong>Salt</strong></p></td>
<td><p><code>break</code> ix del bucle · <code>continue</code> salta a la volta següent · <code>return</code> ix del mètode.</p></td>
</tr>
</table>
</div>

## Errors freqüents

No confongues l’efecte de les tres instruccions: `break` abandona el bucle, `continue` passa a la volta següent i `return` ix de `main` en els exemples d’esta pàgina. En bucles niats, un `break` sense etiqueta només abandona el bucle més pròxim.
