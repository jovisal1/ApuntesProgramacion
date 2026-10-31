---
title: Introducció a l’entrada i eixida de dades
description: Introducció a l’entrada i eixida de dades en Java.
sidebar:
  order: 1
---

<p><em>Imagina una conversa amb el teu programa: et pregunta el nom, escolta la resposta i et mostra un missatge. L’entrada i l’eixida de dades són les ferramentes que fan possible eixe diàleg.</em></p>

Els programes necessiten rebre informació i comunicar resultats. Començarem per la **consola**, que permet concentrar-nos en les dades i en l'algoritme. Al final veurem una xicoteta ampliació amb finestres.

Per als exemples bàsics necessites conéixer variables, tipus i conversions. El problema integrador utilitza també condicions i bucles, explicats en [Estructures de control](/ApuntesProgramacion/ca/guides/introduccion-a-java/estructuras-de-control/).

<aside class="java-document-note">
<p><strong>COM PROVAR ELS EXEMPLES</strong></p>
<p>Els fragments sense classe completa s&#x27;escriuen dins de <code>main</code>, cadascun per separat. Si apareix un <code>import</code>, col·loca&#x27;l abans de la declaració de la classe. Guarda els programes complets amb el nom de la seua classe pública i extensió <code>.java</code>.</p>
</aside>

## De la dada al resultat

Imagina una calculadora que demana dos nombres i mostra la seua suma. El programa necessita tres passos:

<div class="java-document-table">
<table>
<tr>
<th scope="col"><p><strong>Pas</strong></p></th>
<th scope="col"><p><strong>Què fa el programa</strong></p></th>
<th scope="col"><p><strong>Exemple</strong></p></th>
</tr>
<tr>
<td><p><strong>Entrada</strong></p></td>
<td><p>Rep i guarda les dades.</p></td>
<td><p>La persona escriu <code>12</code> i <code>8</code>.</p></td>
</tr>
<tr>
<td><p><strong>Procés</strong></p></td>
<td><p>Fa un càlcul o pren una decisió.</p></td>
<td><p>Calcula <code>12 + 8</code>.</p></td>
</tr>
<tr>
<td><p><strong>Eixida</strong></p></td>
<td><p>Comunica el resultat.</p></td>
<td><p>Mostra <code>La suma és 20</code>.</p></td>
</tr>
</table>
</div>

Escriure un missatge com «Introduïx un número» **no llig cap dada**. Per a llegir necessites una instrucció d'entrada; per a conservar el que has llegit, has d'assignar-ho a una variable. En una consola interactiva, el programa normalment espera que escrigues la resposta i premes Intro.

Aprendràs a demanar text i números, presentar resultats, triar entre lectura per tokens o per línies i repetir una petició quan la resposta no siga vàlida. Començarem amb entrades correctes i després afegirem validació. No necessites arrays per a estos exemples.
