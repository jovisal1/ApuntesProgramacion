# Funciones en Java

Plan de contenido confirmado el 5 de noviembre de 2026 y ajustado durante la revisión del profesor.

Unidad independiente, al mismo nivel de navegación que Introducción a Java. Entrada `guides/funciones-en-java`; páginas hermanadas en castellano y valenciano con introducción, declaración y llamada, flujo de ejecución, ámbito, paso de argumentos, sobrecarga y varargs, y recursión.

Explicaciones detalladas para primero de DAM a partir de variables, control, entrada/salida y arrays. Se utilizan métodos estáticos dentro de una clase y main tradicional. La versión docente de Java sigue sin fijarse; la comprobación usa JDK 24 y compatibilidad de compilación Java 8 para estos ejemplos.

Material de origen: `Funciones en Java/Funciones.docx`, `Funciones y recursión en Java.pptx` y `Urls interesantes`, fuera del repositorio. Se revisaron texto e imágenes del Word y texto del PowerPoint. El enlace a sergarb1 no fue accesible mediante la herramienta web; el artículo de OpenWebinars se consultó como material aportado. Las referencias técnicas del temario se contrastaron con Oracle.

Se conservan la extracción del cálculo de una suma y factorial, desarrollados con contexto ejecutable, trazas y límites. Se corrige la descripción de arrays: Java copia por valor las referencias; se distingue modificar el objeto de reasignar el parámetro. Se sustituyen «variables globales» por campos de clase y «sobrescribir» por ocultar un campo. Herencia, concurrencia y excepciones no se desarrollan en profundidad.

Peticiones posteriores del profesor: incorporar más esquemas didácticos, retirar las pruebas de comprensión intercaladas, eliminar por completo Actividades y repaso y no mencionar diapositivas en los apuntes. El alcance final son siete páginas por idioma y siete esquemas SVG por idioma. No restituir las actividades eliminadas.

Las diapositivas HTML externas se mantienen en `../Diapositivas/funciones-en-java-{es,ca}.html`, con quince diapositivas, preguntas explicadas y trazas de arrays y factorial. Acceso desde `../Diapositivas/index.html`; no hay referencias a ellas en las páginas del temario.

Los RA se integran en el texto introductorio, sin apartado propio, por petición posterior del profesor. También se han precisado los RA en las introducciones de las otras dos unidades, conservando sus contenidos.

Validación: build de Astro correcto; 24 programas completos y 12 programas preparados con fragmentos y casos límite, compilados y ejecutados con JDK 24 y --release 8; 6 errores deliberados rechazados por el compilador. Se comprobaron 1147 enlaces y recursos locales en las 18 páginas compiladas afectadas y los 14 SVG. Sintaxis de ambos scripts de diapositivas y estructura de las dos presentaciones verificadas. Las skills superan su validador.

Revisión en navegador: navegación de la unidad independiente y páginas castellanas en escritorio; respuestas correctas e incorrectas y avance, límites y reinicio de las trazas en la presentación castellana. Página de paso de argumentos revisada a 390 px sin desbordamiento horizontal. La revisión completa de móvil, las interacciones valencianas y la apertura directa de HTML local quedan pendientes: el servidor se detuvo y el reinicio no se autorizó. El build muestra avisos de colección i18n vacía y página 404 sin entrada de contenido, ya observados antes de los últimos ajustes.

Revisión del 6 de noviembre de 2026: se retira la frase introductoria sobre la numeración del módulo 0485, conservando las referencias a los RA. Se añaden nueve recuadros por idioma con definiciones y aclaraciones sencillas mediante analogías cotidianas, reutilizando java-document-note. No se modifican ejemplos Java, esquemas ni diapositivas. La preferencia didáctica se guarda en la skill de edición.

## Ampliación confirmada: testing con JUnit

El profesor confirma el índice y concreta VS Code con proyectos Java sin Maven ni Gradle. Se añade una octava página al final de Funciones: `testing-con-junit`. Alcance: prueba unitaria, instalación con JAR autónomo, @Test, assertEquals, preparar/ejecutar/comprobar, casos normales y límites, booleanos/cadenas/arrays/decimales, interpretar fallos, corregir y repetir, y errores habituales. No se restituyen las actividades ni las pruebas de comprensión eliminadas. Las pruebas parametrizadas, mocks y excepciones quedan fuera.

Versiones fijadas para reproducir los ejemplos: JUnit Jupiter 5.13.4 con Platform Console Standalone 1.13.4; no se presentan como las últimas versiones ni fijan un nuevo JDK para el curso. Se consultan la guía oficial de JUnit 5.13.4 y la documentación de Java Testing de VS Code.

Entregables: apuntes en castellano y valenciano, dos esquemas por idioma, ejemplos editables en `ejemplos/testing-junit/{es,ca}` y ZIP publicados en `public/ejemplos/` sin incluir el JAR externo. README del proyecto y traducción actualizados; diapositivas externas ampliadas de 15 a 23. No se añaden referencias a diapositivas en los apuntes.

Validación real con JDK 24 y JUnit descargado: 13 tests correctos en cada ZIP; el error de restar en sumar produce 2 fallos y el informe expected 5 / was -1; excluir cero del rango de notas produce 1 fallo; modificar el array original produce 1 fallo. El test inicial y los 8 tests construidos con los fragmentos progresivos también compilan y pasan en ambos idiomas. Se restaura y ejecuta la batería completa tras las variantes. Astro compila 71 páginas. La revisión visual en navegador y la ejecución mediante los botones de VS Code quedan pendientes: no se autorizó iniciar el servidor. El CLI de JUnit sí está verificado.

El profesor solicita ampliar las explicaciones de los métodos principales tomando como referencia su documento de Google: https://docs.google.com/document/d/1bIacVwr0B5GcT4v-oJK4wsgz5SpAFWt8jbR_y47Wwlw/edit?usp=sharing . Se pudo leer mediante exportación de texto. Se desarrollan assertEquals, assertTrue, assertFalse, assertArrayEquals, assertNotNull y assertNull, con la variante decimal, mensajes opcionales y DisplayName. Se añaden las cuatro anotaciones de ciclo de vida, corrigiendo la posible confusión entre ejecución por clase y por test, un tercer esquema por idioma y cuatro diapositivas adicionales (27 en total). Se amplían los descargables a 18 tests: 16 de aserciones y 2 de ciclo de vida, con órdenes de compilación diferenciadas para el ejemplo inicial y el completo. No se incorporan mocks ni excepciones. README y traducciones se mantienen sincronizados.

Validación de la ampliación: 18 tests correctos por idioma; los dos tests de ciclo de vida funcionan por separado. Se verificaron los contadores de preparación y finalización y su ejecución tras una aserción fallida. Las variantes deliberadas de suma, límite de nota, modificación del original y devolución de cadena vacía en vez de null se detectan. El primer test y las 11 pruebas construidas con los fragmentos y mensajes pasan en ambos idiomas. Los ZIP coinciden con los fuentes y no contienen JAR ni clases compiladas. Se verifican 556 enlaces/recursos de seis páginas compiladas, seis SVG de testing, paridad de estructura entre idiomas, recursos de ambas presentaciones y sintaxis de sus scripts. Compilación de 71 páginas correcta con los avisos ya existentes de i18n y 404. La comprobación visual y la ejecución mediante los botones de VS Code siguen pendientes.

Decisión posterior: Testing es una unidad independiente de ocho páginas; Funciones vuelve a tener siete. Reorganización y retirada del bloque descargable documentadas en testing-junit.es.md.
