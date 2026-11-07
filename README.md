# Apuntes de Programación · 1.º DAW y DAM

[Llegir este README en valencià](README.ca.md).

Material didáctico de programación en **castellano y valenciano**, con explicaciones, ejemplos, diagramas y ejercicios. El sitio está construido con Astro, Starlight y el tema Nova.

- [Consultar los apuntes en castellano](https://jovisal1.github.io/ApuntesProgramacion/)
- [Consultar els apunts en valencià](https://jovisal1.github.io/ApuntesProgramacion/ca/)

## Contenidos

| Unidad | Apartados |
| --- | --- |
| Introducción a la programación | Conceptos iniciales, algoritmos y programas, y práctica con PSeInt. |
| Introducción a Java | Historia y características, tipos de datos, variables, constantes, operadores, estructuras de control, arrays, cadenas y entrada/salida. |
| Funciones en Java | Métodos, declaración y llamada, flujo de ejecución, ámbito de las variables, paso de argumentos, sobrecarga, `varargs` y recursión. Incluye esquemas y aclaraciones destacadas con comparaciones cotidianas. |
| [Testing con JUnit](src/content/docs/guides/testing-con-junit.md) | Unidad independiente: preparación sin gestor, primera prueba, ejecución, casos de prueba, aserciones, ciclo de vida e interpretación de fallos. |


El apartado de testing utiliza VS Code sin Maven ni Gradle, con JUnit Jupiter 5.13.4 y Console Standalone 1.13.4. Los [ejemplos editables](ejemplos/testing-junit/es/README.md) contienen 18 tests. El JAR de JUnit se descarga por separado, siguiendo la guía. El material explica aserciones de valor, booleanos, arrays, referencias nulas, mensajes y `@DisplayName`, e incluye las cuatro anotaciones del ciclo de vida con datos independientes por prueba. Los fuentes de cada idioma están en `ejemplos/testing-junit/`; después de modificarlos, comprueba que los 18 tests siguen pasando.

## Diapositivas

Las presentaciones HTML, CSS y JavaScript residen en `public/diapositivas/`, con un índice `index.html` y versiones en castellano y valenciano. Se publican como archivos estáticos: `/ApuntesProgramacion/diapositivas/index.html`. Cada tema tiene su URL directa, por ejemplo `/ApuntesProgramacion/diapositivas/funciones-en-java-es.html` y `/ApuntesProgramacion/diapositivas/testing-con-junit-es.html`. El profesor compartirá los enlaces en Aules; no se añaden enlaces desde los apuntes, entradas de menú ni visores integrados.

Funciones cuenta con 29 diapositivas y Testing con 30 en cada idioma. Incluyen ejemplos desarrollados, programas completos, esquemas de llamadas y tareas, razonamientos desplegables y errores deliberados identificados. Testing desglosa las aserciones, sus resultados de acierto y fallo, los límites y el ciclo de vida en VS Code sin gestor. Para actualizar las presentaciones, editar directamente esta carpeta y comprobar recursos, interacciones y compilación del sitio; no hay copias externas que sincronizar.

## Trabajar en local

### Requisitos

- Node.js **22.12.0 o superior**, según la versión de Astro instalada.
- npm **9.6.5 o superior**.
- Git para clonar el repositorio.

### Instalación

```bash
git clone https://github.com/jovisal1/ApuntesProgramacion.git
cd ApuntesProgramacion
npm ci
```

`npm ci` instala las dependencias fijadas en `package-lock.json`.

### Desarrollo

Desde la raíz del proyecto, inicia el servidor en segundo plano, como indica [AGENTS.md](AGENTS.md):

```bash
npm run dev -- --background
```

Abre la dirección que indique el servidor, con el prefijo `/ApuntesProgramacion/`.

| Comando | Función |
| --- | --- |
| `npm run astro -- dev status` | Consultar el estado del servidor. |
| `npm run astro -- dev logs` | Consultar sus registros. |
| `npm run astro -- dev stop` | Detenerlo. |
| `npm run build` | Generar la web estática en `dist/`. |
| `npm run preview` | Revisar localmente la última compilación. |

Para revisar el resultado de producción:

```bash
npm run build
npm run preview
```

## Estructura del proyecto

```text
src/
├── assets/                    # Imágenes y diagramas de los apuntes
├── content/
│   └── docs/
│       ├── index.mdx          # Portada en castellano
│       ├── guides/            # Unidades en castellano
│       └── ca/
│           ├── index.mdx      # Portada en valenciano
│           └── guides/        # Las mismas unidades traducidas
├── content.config.ts          # Colección de contenidos de Starlight
└── styles/custom.css          # Estilos compartidos, incluidas las cajas
public/                        # Archivos estáticos servidos sin transformar
astro.config.mjs               # Idiomas, navegación, tema y URL del sitio
.github/workflows/deploy.yml   # Compilación y publicación en GitHub Pages
```

`dist/`, `.astro/` y `node_modules/` son directorios generados y están excluidos de Git.

## Editar o añadir apuntes

Las páginas se escriben en Markdown (`.md`) o MDX (`.mdx`). Utiliza MDX cuando necesites componentes. Cada página empieza con sus metadatos:

```yaml
---
title: Título del apartado
description: Breve descripción de su contenido.
sidebar:
  order: 1
---
```

1. Crea o modifica la página dentro de `src/content/docs/guides/`.
2. Añade o actualiza su traducción en `src/content/docs/ca/guides/`.
3. Si es un apartado nuevo, incorpóralo a `sidebar` en `astro.config.mjs`, con su `slug` y la etiqueta valenciana en `translations.ca`. La navegación de este proyecto se define manualmente.
4. Guarda las imágenes en `src/assets/` y enlázalas con una ruta relativa desde la página. Conserva las atribuciones de los recursos que las requieran.
5. Ejecuta `npm run build` y revisa ambas versiones con `npm run preview`.
6. Siempre que actualices el contenido de los apuntes, actualiza también este README y [su versión valenciana](README.ca.md) con los cambios relevantes en contenidos, organización, recursos o convenciones.

### Castellano y valenciano

El castellano es el idioma predeterminado; el valenciano utiliza el código `ca`. Las traducciones deben compartir la misma ruta y nombre base, por ejemplo:

```text
guides/introduccion-a-java/tipos-de-datos-variables-y-mas.md
ca/guides/introduccion-a-java/tipos-de-datos-variables-y-mas.md
```

Mantén el mismo contenido y orden en ambos idiomas: apartados, tablas, ejemplos, ejercicios, soluciones y diagramas. Si traduces las cadenas de un programa, revisa también su salida y los resultados que dependan del texto, como su longitud.

Los enlaces internos escritos manualmente deben incluir el prefijo del sitio:

- Castellano: `/ApuntesProgramacion/guides/.../`.
- Valenciano: `/ApuntesProgramacion/ca/guides/.../`.

Las rutas relativas a imágenes necesitan un nivel adicional de `../` desde la traducción valenciana, debido al directorio `ca/`.

### Cajas de notas, consejos y ejercicios

Utiliza el mismo formato HTML en todas las unidades, con la clase `java-document-note`:

```html
<aside class="java-document-note">
<p><strong>IDEA CLAVE</strong></p>
<p><strong>Declara antes de usar:</strong> toda variable debe tener un tipo y un nombre. Por ejemplo, <code>int edad = 20;</code>.</p>
</aside>
```

Conserva un título descriptivo en cada caja y tradúcelo en la página valenciana, por ejemplo, `IDEA CLAU`. Usa `<strong>` para las negritas y `<code>` para el código en línea dentro del HTML. Para listas, utiliza `<ul>` y `<li>`.

Incluye de vez en cuando definiciones y aclaraciones sencillas con comparaciones cotidianas, destacadas con `DEFINICIÓN` o `EN PALABRAS SENCILLAS` (`DEFINICIÓ` o `EN PARAULES SENZILLES` en valenciano). Mantén el término técnico y explica cómo se corresponde con la comparación.

No utilices las directivas `:::tip`, `:::note` o `:::caution`: las cajas comparten el estilo definido en `src/styles/custom.css` mediante `java-document-note`.

## Publicación

El flujo [deploy.yml](.github/workflows/deploy.yml) compila y publica el sitio en GitHub Pages cada vez que se envían cambios a la rama `main`. También permite iniciarlo manualmente desde **Actions → Deploy to GitHub Pages → Run workflow**.

En la configuración del repositorio, **Settings → Pages → Source** debe estar en **GitHub Actions**. El flujo genera y publica los archivos; no es necesario subir `dist/` al repositorio.

La dirección pública depende de estos valores de `astro.config.mjs`:

```js
site: "https://jovisal1.github.io",
base: "/ApuntesProgramacion",
```

Si cambias el dominio o el nombre del repositorio, revisa estos valores y los enlaces internos con el prefijo escrito manualmente.

## Documentación de referencia

- [Astro](https://docs.astro.build/)
- [Starlight](https://starlight.astro.build/)
- [Instrucciones de trabajo del repositorio](AGENTS.md)
