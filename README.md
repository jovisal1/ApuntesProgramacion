# Apuntes de Programación · 1.º DAW y DAM

Material didáctico de programación en **castellano y valenciano**, con explicaciones, ejemplos, diagramas y ejercicios. El sitio está construido con Astro, Starlight y el tema Nova.

- [Consultar los apuntes en castellano](https://jovisal1.github.io/ApuntesProgramacion/)
- [Consultar els apunts en valencià](https://jovisal1.github.io/ApuntesProgramacion/ca/)

## Contenidos

| Unidad | Apartados |
| --- | --- |
| Introducción a la programación | Conceptos iniciales, algoritmos y programas, y práctica con PSeInt. |
| Introducción a Java | Historia y características, tipos de datos, variables, constantes, operadores, estructuras de control, arrays, cadenas y entrada/salida. |

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
