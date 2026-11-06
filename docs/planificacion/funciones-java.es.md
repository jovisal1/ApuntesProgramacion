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
