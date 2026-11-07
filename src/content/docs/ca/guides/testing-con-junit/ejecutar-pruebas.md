---
title: "Executar les proves"
description: "Executar les proves."
sidebar:
  order: 4
---

Una vegada creats els fitxers de l’exemple, podem executar les proves des de VS Code o des de la terminal. Cal comprovar tant el resultat com el nombre de tests descoberts.

## Des de VS Code

1. Guarda els fitxers i espera que acabe la càrrega de Java.
2. Obri la vista **Testing** de l’editor. Ha d’aparéixer `OperacionesTest` amb el seu test.
3. Executa la classe des d’eixa vista o amb **Run Test** damunt del mètode. El nom visible pot estar traduït segons l’idioma de l’editor.
4. Revisa el resultat i el nombre de tests executats. Amb el primer fitxer ha d’executar-se **1 test**. Quan afiges més mètodes anotats amb `@Test`, el recompte augmentarà.

Un test correcte apareix com a superat. Un de fallit permet consultar el resultat esperat, l’obtingut i la línia de l’asserció. **Una llista buida o zero tests no demostra que el codi funcione**: pot indicar que les proves no s’han descobert.

## Des de la terminal

Amb `lib` i `bin` creades, obri una terminal en la carpeta `testing-junit`, on estan `src` i `test`, i executa estes dos ordres:

```sh
javac -encoding UTF-8 -cp lib/junit-platform-console-standalone-1.13.4.jar -d bin src/Operaciones.java test/OperacionesTest.java
java -jar lib/junit-platform-console-standalone-1.13.4.jar execute --class-path bin --scan-class-path --fail-if-no-tests --disable-ansi-colors
```


Esta primera ordre compila `OperacionesTest`. [La secció de cicle de vida](/ApuntesProgramacion/ca/guides/testing-con-junit/ciclo-de-vida/) afig l’ordre amb `CicloDeVidaTest.java` per a executar també eixa classe de proves.

La primera compila l’aplicació i els tests, indicant on està JUnit amb `-cp` i on deixar els `.class` amb `-d`. `-encoding UTF-8` fixa la codificació dels fonts. La segona executa el JAR de JUnit i busca classes de prova dins de `bin`. `--fail-if-no-tests` fa que l’absència de proves es considere un problema.

Les ordres funcionen en Bash i PowerShell tal com apareixen: cada opció conté una única ruta, de manera que no necessitem combinar rutes amb `:` o `;`. Després de canviar un `.java`, **torna a compilar abans d’executar JUnit** per a no provar una versió antiga del `.class`.

Amb el test inicial, el resum ha d’indicar un test executat, un de correcte i cap de fallit. El total posterior dependrà dels tests que hages incorporat al projecte. La duració i els comptadors de contenidors poden variar; un contenidor agrupa proves i no equival a un test.
