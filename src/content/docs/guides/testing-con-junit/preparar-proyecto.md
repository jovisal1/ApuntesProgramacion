---
title: "Preparar el proyecto"
description: "Preparar el proyecto."
sidebar:
  order: 2
---

Prepararemos un proyecto Java independiente para trabajar con JUnit sin Maven ni Gradle.

Usaremos **VS Code con Extension Pack for Java**, que incluye **Test Runner for Java**. Abre la carpeta del proyecto completa mediante **Archivo → Abrir carpeta**, no solo un archivo `.java`. Espera a que las extensiones de Java carguen el proyecto.

En esta guía fijamos **JUnit Jupiter 5.13.4** y el ejecutor **JUnit Platform Console Standalone 1.13.4**. Son los nombres y versiones concretos de los ejemplos, no una indicación de que sean las versiones más recientes. JUnit 5 puede ejecutarse con Java 8 o superior; las extensiones del editor pueden necesitar un JDK más reciente. Mantén el JDK que tengáis configurado para las clases y comprueba `java -version` y `javac -version` en la terminal.

## Carpetas y biblioteca

Crea esta estructura desde el explorador de VS Code. `bin` es una carpeta para los archivos compilados; inicialmente puede estar vacía:

```text
testing-junit/
├── .vscode/settings.json
├── src/Operaciones.java
├── test/OperacionesTest.java
├── lib/junit-platform-console-standalone-1.13.4.jar
└── bin/
```


- `src`: los métodos de la aplicación.
- `test`: las clases que comprueban esos métodos.
- `lib`: las bibliotecas externas, guardadas como archivos `.jar`.
- `.vscode/settings.json`: la configuración local del proyecto en VS Code.

Descarga [el ejecutor autónomo de JUnit 1.13.4](https://repo.maven.apache.org/maven2/org/junit/platform/junit-platform-console-standalone/1.13.4/junit-platform-console-standalone-1.13.4.jar) y guárdalo en `lib` con el nombre **`junit-platform-console-standalone-1.13.4.jar`**. Un **JAR** es un archivo que agrupa clases Java y otros recursos. Este incluye lo necesario para escribir y ejecutar los tests de la guía; no necesitas descargar piezas sueltas.

Crea `.vscode/settings.json` con este contenido. Si ya existe, incorpora estas propiedades sin borrar otras opciones del proyecto:

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


`sourcePaths` indica dónde buscar los fuentes; `outputPath`, dónde guardar la compilación; `referencedLibraries` incorpora los JAR de `lib`. Así el editor puede reconocer `org.junit.jupiter.api.Test` y las comprobaciones de JUnit. Usa una sola copia de esta biblioteca; no añadas además otra versión con el asistente de Testing.
