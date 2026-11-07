# Testing de mètodes amb JUnit

Exemple per a VS Code, sense Maven ni Gradle. JUnit Jupiter 5.13.4 amb Console Standalone 1.13.4; usa el JDK que tens configurat per a Java (JUnit 5 requerix Java 8 o superior). L’extensió de Java pot requerir un JDK més recent per al seu propi funcionament.

1. Obri esta carpeta en VS Code, no només un fitxer. Instal·la Extension Pack for Java, que inclou Test Runner for Java.
2. Crea les carpetes `lib` i `bin`.
3. Descarrega [junit-platform-console-standalone-1.13.4.jar](https://repo.maven.apache.org/maven2/org/junit/platform/junit-platform-console-standalone/1.13.4/junit-platform-console-standalone-1.13.4.jar) i guarda’l dins de `lib`. El JAR no està inclòs en este exemple. No afiges una altra còpia de JUnit amb l’assistent si ja has configurat esta.
4. Espera que Java carregue el projecte. Usa Testing per a executar `OperacionesTest`, o executa des d’esta carpeta:

```sh
javac -encoding UTF-8 -cp lib/junit-platform-console-standalone-1.13.4.jar -d bin src/Operaciones.java test/OperacionesTest.java test/CicloDeVidaTest.java
java -jar lib/junit-platform-console-standalone-1.13.4.jar execute --class-path bin --scan-class-path --fail-if-no-tests --disable-ansi-colors
```

El projecte conté 18 tests: el resultat correcte és 18 executats, 18 correctes i 0 fallits. Les ordres servixen en Bash i PowerShell; no requerixen separadors de classpath diferents perquè usen una única ruta per opció.

## Fitxers i condicions dels exemples

- `src/Operaciones.java`: mètodes que es volen comprovar. Treballem amb enters menuts, notes finites, noms no nuls i arrays no nuls amb increments que caben en int; la mitjana utilitza decimals menuts. buscarNombre requerix un array i un text buscat no nuls; retorna null quan no hi ha coincidència.
- `test/OperacionesTest.java`: 16 tests d’assercions, sense main ni mètodes de test static.
- `test/CicloDeVidaTest.java`: 2 tests amb preparació independent i les quatre anotacions del cicle de vida. BeforeAll i AfterAll sí que usen static en la configuració predeterminada.
- `.vscode/settings.json`: carpetes de codi, eixida i biblioteca.

Per a observar un error, en una còpia del projecte substituïx `return a + b;` per `return a - b;` en `sumar`. Recompila i executa: han de fallar les proves de suma que detecten l’error. Corregix el mètode i repetix tota la bateria. No canvies els resultats esperats per a ocultar l’error.

JUnit 5.13.4 és una versió fixada per a esta guia, no una afirmació sobre la versió més recent. No barreges estos imports de Jupiter amb `org.junit.Test` de JUnit 4.

[Apunts de testing](https://jovisal1.github.io/ApuntesProgramacion/ca/guides/testing-con-junit/). [Guia de JUnit](https://docs.junit.org/5.13.4/user-guide/index.html).
