---
title: Introducció a les estructures de control
description: Decidir, repetir i alterar el flux d’un programa Java.
sidebar:
  order: 1
---

<p><em>Sense estructures de control, un programa seria una recepta que s'executa línia a línia sense pensar. Amb elles, el teu programa decidix, repetix i salta: passa de ser una recepta a ser un GPS que recalcula la ruta segons el que troba.</em></p>

<p>Com vam veure en la unitat d'algoritmes, les estructures de control fan que el flux del programa <strong>no siga sempre seqüencial</strong>. Gràcies a elles el nostre algoritme pot executar uns blocs o uns altres segons unes condicions, o repetir instruccions automàticament. Java distingix tres tipus:</p>

<div class="java-document-table">
<table>
<tr>
<th scope="col"><p><strong>Tipus</strong></p></th>
<th scope="col"><p><strong>Estructures</strong></p></th>
<th scope="col"><p><strong>La pregunta que responen</strong></p></th>
</tr>
<tr>
<td><p><strong>Selecció</strong></p></td>
<td><p><code>if</code>, <code>if-else</code>, <code>if-else-if</code>, <code>switch</code></p></td>
<td><p>«Quin camí prenc?»</p></td>
</tr>
<tr>
<td><p><strong>Iteració</strong></p></td>
<td><p><code>while</code>, <code>do-while</code>, <code>for</code>, <code>for-each</code></p></td>
<td><p>«Quantes vegades ho repetisc?»</p></td>
</tr>
<tr>
<td><p><strong>Salt</strong></p></td>
<td><p><code>break</code>, <code>continue</code>, <code>return</code></p></td>
<td><p>«Isc ja o em bote esta volta?»</p></td>
</tr>
</table>
</div>

<p>I per descomptat, totes es poden <strong>posar unes dins d'altres</strong>: pots col·locar-ne una dins del bloc d'una altra tantes vegades com necessites.</p>

Pensa en un programa que gestiona les notes d’una classe: comprova si una nota és suficient per a aprovar (**selecció**), repetix un càlcul per a diverses notes (**iteració**) i pot interrompre una repetició quan ja ha trobat el que buscava (**salt**). La diferència està en com decidim quina instrucció s’executa després.

Per a seguir estos apartats necessites conéixer variables, expressions, comparacions i operadors lògics. Començarem decidint quin bloc executar, continuarem repetint instruccions i acabarem estudiant com alterar eixe recorregut amb `break`, `continue` i `return`.
