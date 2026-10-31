# Reorganización de fundamentos de Java

Plan confirmado por el profesor el 26 de octubre de 2026.

El tema «Tipos de datos, variables y más» se divide en tres páginas independientes: tipos de datos, variables y constantes; operadores y expresiones; cadenas de texto y conversiones. Se conserva el contenido, con clases envoltorio, operadores de bits y StringBuilder como ampliaciones opcionales. También se separan rangos, desbordamiento, valores por defecto, incrementos dentro de expresiones, cortocircuito y ternario.

Cada página tiene objetivos y conocimientos previos, ejemplos y actividades con soluciones desplegables, repaso y errores frecuentes. Se mantienen castellano y valenciano. Las diapositivas se integran con Astro, HTML, CSS y JavaScript, sin dependencias nuevas; incluyen predicciones y retroalimentación. Se guardan las convenciones verificadas en una skill versionada.

Decisiones de implementación: conservar la ruta antigua para la primera página; crear `operadores-y-expresiones` y `cadenas-de-texto-y-conversiones`; presentar las ampliaciones al final; usar cuatro diapositivas por bloque, con retorno a los apuntes. Se adapta el ejemplo inicial de alcance a bloques sin condicionales para evitar ese requisito previo.

No se ha acordado una versión docente de Java. Las comprobaciones de compatibilidad de esta intervención utilizan Java 21, disponible en el entorno; esto no fija la versión del curso.

## Actualización confirmada

El profesor sustituye las diapositivas integradas por presentaciones externas, sin interactividad, guardadas en `../Diapositivas/`. Las páginas deben empezar con el texto introductorio; se eliminan el encabezado de recorrido, los pasos, los enlaces cruzados iniciales, «Antes de empezar» y el enlace inicial a las diapositivas. Los objetivos orientan la redacción sin añadir ese bloque al contenido.

Las skills se guardan en `../Skills/`, fuera del repositorio, por indicación posterior del profesor.

Entrega final: tres presentaciones de seis diapositivas en cada idioma, en PowerPoint editable y sin interactividad. La web conserva las tres páginas de apuntes en ambos idiomas; no contiene componentes ni rutas de diapositivas.

No se añaden bloques finales «Continúa el recorrido»: se utiliza la navegación anterior/siguiente de Starlight, por indicación del profesor.

## Formato HTML confirmado

El profesor prefiere HTML, CSS y JavaScript para las diapositivas externas, con ejemplos interactivos cuando ayuden a explicar. Esta decisión sustituye el formato PowerPoint y la indicación anterior de no interactividad. Se generan seis presentaciones de seis diapositivas, con un índice bilingüe y recursos comunes, en `../Diapositivas/`. Se conservan los PowerPoint anteriores.

## Uso en clase e índice

Las diapositivas apoyan la explicación del profesor; el desarrollo más completo está en los apuntes. Se amplían con explicaciones breves de los ejemplos y esquemas didácticos. El índice es solo castellano, con un acceso por tema y sin botones separados por idioma; se mantienen las versiones valencianas dentro de las presentaciones. El procedimiento reutilizable se guarda en `../Skills/crear-diapositivas-java/SKILL.md`.
