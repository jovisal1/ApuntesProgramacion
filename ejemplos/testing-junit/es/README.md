# Testing de métodos con JUnit

Ejemplo para VS Code, sin Maven ni Gradle. JUnit Jupiter 5.13.4 con Console Standalone 1.13.4; usa el JDK que tienes configurado para Java (JUnit 5 requiere Java 8 o superior). La extensión de Java puede requerir un JDK más reciente para su propio funcionamiento.

1. Abre esta carpeta en VS Code, no solo un archivo. Instala Extension Pack for Java, que incluye Test Runner for Java.
2. Crea las carpetas `lib` y `bin`.
3. Descarga [junit-platform-console-standalone-1.13.4.jar](https://repo.maven.apache.org/maven2/org/junit/platform/junit-platform-console-standalone/1.13.4/junit-platform-console-standalone-1.13.4.jar) y guárdalo dentro de `lib`. El JAR no está incluido en este ejemplo. No añadas otra copia de JUnit con el asistente si ya has configurado esta.
4. Espera a que Java cargue el proyecto. Usa Testing para ejecutar `OperacionesTest`, o ejecuta desde esta carpeta:

```sh
javac -encoding UTF-8 -cp lib/junit-platform-console-standalone-1.13.4.jar -d bin src/Operaciones.java test/OperacionesTest.java test/CicloDeVidaTest.java
java -jar lib/junit-platform-console-standalone-1.13.4.jar execute --class-path bin --scan-class-path --fail-if-no-tests --disable-ansi-colors
```

El proyecto contiene 18 tests: el resultado correcto es 18 ejecutados, 18 correctos y 0 fallidos. Los comandos sirven en Bash y PowerShell; no requieren separadores de classpath distintos porque usan una única ruta por opción.

## Archivos y condiciones de los ejemplos

- `src/Operaciones.java`: métodos que se quieren comprobar. Trabajamos con enteros pequeños, notas finitas, nombres no nulos y arrays no nulos cuyos incrementos caben en int; la media utiliza decimales pequeños. buscarNombre requiere un array y un texto buscado no nulos; devuelve null cuando no hay coincidencia.
- `test/OperacionesTest.java`: 16 tests de aserciones, sin main ni métodos de test static.
- `test/CicloDeVidaTest.java`: 2 tests con preparación independiente y las cuatro anotaciones del ciclo de vida. BeforeAll y AfterAll sí usan static en la configuración predeterminada.
- `.vscode/settings.json`: carpetas de código, salida y biblioteca.

Para observar un fallo, en una copia del proyecto sustituye `return a + b;` por `return a - b;` en `sumar`. Recompila y ejecuta: deben fallar las pruebas de suma que detectan el error. Corrige el método y repite toda la batería. No cambies los resultados esperados para ocultar el fallo.

JUnit 5.13.4 es una versión fijada para esta guía, no una afirmación sobre la versión más reciente. No mezcles estos imports de Jupiter con `org.junit.Test` de JUnit 4.

[Apuntes de testing](https://jovisal1.github.io/ApuntesProgramacion/guides/testing-con-junit/). [Guía de JUnit](https://docs.junit.org/5.13.4/user-guide/index.html).
