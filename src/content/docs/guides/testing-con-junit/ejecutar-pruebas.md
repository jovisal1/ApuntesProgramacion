---
title: "Ejecutar las pruebas"
description: "Ejecutar las pruebas."
sidebar:
  order: 4
---

Una vez creados los archivos del ejemplo, podemos ejecutar las pruebas desde VS Code o desde la terminal. Hay que comprobar tanto el resultado como el número de tests descubiertos.

## Desde VS Code

1. Guarda los archivos y espera a que termine la carga de Java.
2. Abre la vista **Testing** del editor. Debe aparecer `OperacionesTest` con su test.
3. Ejecuta la clase desde esa vista o con **Run Test** sobre el método. El nombre visible puede estar traducido según el idioma del editor.
4. Revisa el resultado y el número de tests ejecutados. Con el primer archivo debe ejecutarse **1 test**. Cuando añadas más métodos anotados con `@Test`, el recuento aumentará.

Un test correcto aparece como superado. Uno fallido permite consultar el resultado esperado, el obtenido y la línea de la aserción. **Una lista vacía o cero tests no demuestra que el código funcione**: puede indicar que las pruebas no se han descubierto.

## Desde la terminal

Con `lib` y `bin` creadas, abre una terminal en la carpeta `testing-junit`, donde están `src` y `test`, y ejecuta estas dos órdenes:

```sh
javac -encoding UTF-8 -cp lib/junit-platform-console-standalone-1.13.4.jar -d bin src/Operaciones.java test/OperacionesTest.java
java -jar lib/junit-platform-console-standalone-1.13.4.jar execute --class-path bin --scan-class-path --fail-if-no-tests --disable-ansi-colors
```


Esta primera orden compila `OperacionesTest`. [La sección de ciclo de vida](/ApuntesProgramacion/guides/testing-con-junit/ciclo-de-vida/) añade la orden con `CicloDeVidaTest.java` para ejecutar también esa clase de pruebas.

La primera compila la aplicación y los tests, indicando dónde está JUnit con `-cp` y dónde dejar los `.class` con `-d`. `-encoding UTF-8` fija la codificación de los fuentes. La segunda ejecuta el JAR de JUnit y busca clases de prueba dentro de `bin`. `--fail-if-no-tests` hace que la ausencia de pruebas se considere un problema.

Las órdenes funcionan en Bash y PowerShell tal como aparecen: cada opción contiene una única ruta, así que no necesitamos combinar rutas con `:` o `;`. Después de cambiar un `.java`, **vuelve a compilar antes de ejecutar JUnit** para no probar una versión antigua del `.class`.

Con el test inicial, el resumen debe indicar un test ejecutado, uno correcto y ninguno fallido. El total posterior dependerá de los tests que hayas incorporado al proyecto. La duración y los contadores de contenedores pueden variar; un contenedor agrupa pruebas y no equivale a un test.
