# Reorganització de fonaments de Java

Pla confirmat pel professor el 26 d’octubre de 2026.

El tema «Tipus de dades, variables i més» es dividix en tres pàgines independents: tipus de dades, variables i constants; operadors i expressions; cadenes de text i conversions. Es conserva el contingut, amb classes embolcall, operadors de bits i StringBuilder com a ampliacions opcionals. També se separen rangs, desbordament, valors per defecte, increments dins d’expressions, curtcircuit i ternari.

Cada pàgina té objectius i coneixements previs, exemples i activitats amb solucions desplegables, repàs i errors freqüents. Es mantenen castellà i valencià. Les diapositives s’integren amb Astro, HTML, CSS i JavaScript, sense dependències noves; inclouen prediccions i retroalimentació. Es guarden les convencions verificades en una skill versionada.

Decisions d’implementació: conservar la ruta antiga per a la primera pàgina; crear `operadores-y-expresiones` i `cadenas-de-texto-y-conversiones`; presentar les ampliacions al final; utilitzar quatre diapositives per bloc, amb retorn als apunts. S’adapta l’exemple inicial d’abast a blocs sense condicionals per a evitar eixe requisit previ.

No s’ha acordat una versió docent de Java. Les comprovacions de compatibilitat d’esta intervenció utilitzen Java 21, disponible en l’entorn; això no fixa la versió del curs.

## Actualització confirmada

El professor substituïx les diapositives integrades per presentacions externes, sense interactivitat, guardades en `../Diapositivas/`. Les pàgines han de començar amb el text introductori; s’eliminen la capçalera de recorregut, els passos, els enllaços creuats inicials, «Abans de començar» i l’enllaç inicial a les diapositives. Els objectius orienten la redacció sense afegir eixe bloc al contingut.

Les skills es guarden en `../Skills/`, fora del repositori, per indicació posterior del professor.

Lliurament final: tres presentacions de sis diapositives en cada idioma, en PowerPoint editable i sense interactivitat. La web conserva les tres pàgines d’apunts en els dos idiomes; no conté components ni rutes de diapositives.

No s’afegixen blocs finals «Continua el recorregut»: s’utilitza la navegació anterior/següent de Starlight, per indicació del professor.

## Format HTML confirmat

El professor preferix HTML, CSS i JavaScript per a les diapositives externes, amb exemples interactius quan ajuden a explicar. Esta decisió substituïx el format PowerPoint i la indicació anterior de no interactivitat. Es generen sis presentacions de sis diapositives, amb un índex bilingüe i recursos comuns, en `../Diapositivas/`. Es conserven els PowerPoint anteriors.

## Ús en classe i índex

Les diapositives donen suport a l’explicació del professor; el desenvolupament més complet està en els apunts. S’amplien amb explicacions breus dels exemples i esquemes didàctics. L’índex és només castellà, amb un accés per tema i sense botons separats per idioma; es mantenen les versions valencianes dins de les presentacions. El procediment reutilitzable es guarda en `../Skills/crear-diapositivas-java/SKILL.md`.
