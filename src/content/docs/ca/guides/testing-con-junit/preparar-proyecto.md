---
title: "Preparar el projecte"
description: "Preparar el projecte."
sidebar:
  order: 2
---

Prepararem un projecte Java independent per a treballar amb JUnit sense Maven ni Gradle.

Usarem **VS Code amb Extension Pack for Java**, que inclou **Test Runner for Java**. Obri la carpeta del projecte completa mitjançant **Fitxer → Obrir carpeta**, no només un fitxer `.java`. Espera que les extensions de Java carreguen el projecte.

En esta guia fixem **JUnit Jupiter 5.13.4** i l’executor **JUnit Platform Console Standalone 1.13.4**. Són els noms i versions concrets dels exemples, no una indicació que siguen les versions més recents. JUnit 5 pot executar-se amb Java 8 o superior; les extensions de l’editor poden necessitar un JDK més recent. Mantín el JDK que tingueu configurat per a les classes i comprova `java -version` i `javac -version` en la terminal.

## Carpetes i biblioteca

Crea esta estructura des de l’explorador de VS Code. `bin` és una carpeta per als fitxers compilats; inicialment pot estar buida:

```text
testing-junit/
├── .vscode/settings.json
├── src/Operaciones.java
├── test/OperacionesTest.java
├── lib/junit-platform-console-standalone-1.13.4.jar
└── bin/
```


- `src`: els mètodes de l’aplicació.
- `test`: les classes que comproven eixos mètodes.
- `lib`: les biblioteques externes, guardades com a fitxers `.jar`.
- `.vscode/settings.json`: la configuració local del projecte en VS Code.

Descarrega [l’executor autònom de JUnit 1.13.4](https://repo.maven.apache.org/maven2/org/junit/platform/junit-platform-console-standalone/1.13.4/junit-platform-console-standalone-1.13.4.jar) i guarda’l en `lib` amb el nom **`junit-platform-console-standalone-1.13.4.jar`**. Un **JAR** és un fitxer que agrupa classes Java i altres recursos. Este inclou el que necessitem per a escriure i executar els tests de la guia; no cal descarregar peces soltes.

Crea `.vscode/settings.json` amb este contingut. Si ja existix, incorpora estes propietats sense esborrar altres opcions del projecte:

```json
{
  "java.project.sourcePaths": [
    "src",
    "test"
  ],
  "java.project.outputPath": "bin",
  "java.project.referencedLibraries": [
    "lib/**/*.jar"
  ]
}
```


`sourcePaths` indica on buscar els fonts; `outputPath`, on guardar la compilació; `referencedLibraries` incorpora els JAR de `lib`. Així l’editor pot reconéixer `org.junit.jupiter.api.Test` i les comprovacions de JUnit. Usa una sola còpia d’esta biblioteca; no afiges a més una altra versió amb l’assistent de Testing.
