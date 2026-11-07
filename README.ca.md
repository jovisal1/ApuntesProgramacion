# Apunts de Programació · 1r DAW i DAM

[Leer este README en castellano](README.md).

Material didàctic de programació en **castellà i valencià**, amb explicacions, exemples, diagrames i exercicis. El lloc web està construït amb Astro, Starlight i el tema Nova.

- [Consultar los apuntes en castellano](https://jovisal1.github.io/ApuntesProgramacion/)
- [Consultar els apunts en valencià](https://jovisal1.github.io/ApuntesProgramacion/ca/)

## Continguts

| Unitat | Apartats |
| --- | --- |
| Introducció a la programació | Conceptes inicials, algoritmes i programes, i pràctica amb PSeInt. |
| Introducció a Java | Història i característiques, tipus de dades, variables, constants, operadors, estructures de control, arrays, cadenes i entrada/eixida. |
| Funcions en Java | Mètodes, declaració i crida, flux d’execució, àmbit de les variables, pas d’arguments, sobrecàrrega, `varargs` i recursió. Inclou esquemes i aclariments destacats amb comparacions quotidianes. |
| [Testing amb JUnit](src/content/docs/ca/guides/testing-con-junit.md) | Unitat independent: preparació sense gestor, primera prova, execució, casos de prova, assercions, cicle de vida i interpretació d’errors. |


L’apartat de testing utilitza VS Code sense Maven ni Gradle, amb JUnit Jupiter 5.13.4 i Console Standalone 1.13.4. Els [exemples editables](ejemplos/testing-junit/ca/README.md) contenen 18 tests. El JAR de JUnit es descarrega per separat, seguint la guia. El material explica assercions de valor, booleans, arrays, referències nul·les, missatges i `@DisplayName`, i inclou les quatre anotacions del cicle de vida amb dades independents per prova. Els fonts de cada idioma estan en `ejemplos/testing-junit/`; després de modificar-los, comprova que els 18 tests continuen passant.

## Diapositives

Les presentacions HTML, CSS i JavaScript residixen en `public/diapositivas/`, amb un índex `index.html` i versions en castellà i valencià. Es publiquen com a fitxers estàtics: `/ApuntesProgramacion/diapositivas/index.html`. Cada tema té la seua URL directa, per exemple `/ApuntesProgramacion/diapositivas/funciones-en-java-ca.html` i `/ApuntesProgramacion/diapositivas/testing-con-junit-ca.html`. El professor compartirà els enllaços en Aules; no s’afigen enllaços des dels apunts, entrades de menú ni visors integrats.

Funcions té 29 diapositives i Testing en té 30 en cada idioma. Inclouen exemples desenvolupats, programes complets, esquemes de crides i tasques, raonaments desplegables i errors deliberats identificats. Testing desglossa les assercions, els seus resultats d’encert i error, els límits i el cicle de vida en VS Code sense gestor. Per a actualitzar les presentacions, editar directament esta carpeta i comprovar recursos, interaccions i compilació del lloc; no hi ha còpies externes per a sincronitzar.

## Treballar en local

### Requisits

- Node.js **22.12.0 o superior**, segons la versió d’Astro instal·lada.
- npm **9.6.5 o superior**.
- Git per a clonar el repositori.

### Instal·lació

```bash
git clone https://github.com/jovisal1/ApuntesProgramacion.git
cd ApuntesProgramacion
npm ci
```

`npm ci` instal·la les dependències fixades en `package-lock.json`.

### Desenvolupament

Des de l’arrel del projecte, inicia el servidor en segon pla, com indica [AGENTS.md](AGENTS.md):

```bash
npm run dev -- --background
```

Obri l’adreça que indique el servidor, amb el prefix `/ApuntesProgramacion/`.

| Ordre | Funció |
| --- | --- |
| `npm run astro -- dev status` | Consultar l’estat del servidor. |
| `npm run astro -- dev logs` | Consultar els seus registres. |
| `npm run astro -- dev stop` | Detindre’l. |
| `npm run build` | Generar el web estàtic en `dist/`. |
| `npm run preview` | Revisar localment l’última compilació. |

Per a revisar el resultat de producció:

```bash
npm run build
npm run preview
```

## Estructura del projecte

```text
src/
├── assets/                    # Imatges i diagrames dels apunts
├── content/
│   └── docs/
│       ├── index.mdx          # Portada en castellà
│       ├── guides/            # Unitats en castellà
│       └── ca/
│           ├── index.mdx      # Portada en valencià
│           └── guides/        # Les mateixes unitats traduïdes
├── content.config.ts          # Col·lecció de continguts de Starlight
└── styles/custom.css          # Estils compartits, inclosos els requadres
public/                        # Fitxers estàtics servits sense transformar
astro.config.mjs               # Idiomes, navegació, tema i URL del lloc
.github/workflows/deploy.yml   # Compilació i publicació en GitHub Pages
```

`dist/`, `.astro/` i `node_modules/` són directoris generats i estan exclosos de Git.

## Editar o afegir apunts

Les pàgines s’escriuen en Markdown (`.md`) o MDX (`.mdx`). Utilitza MDX quan necessites components. Cada pàgina comença amb les seues metadades:

```yaml
---
title: Títol de l’apartat
description: Breu descripció del seu contingut.
sidebar:
  order: 1
---
```

1. Crea o modifica la pàgina dins de `src/content/docs/guides/`.
2. Afig o actualitza la seua traducció en `src/content/docs/ca/guides/`.
3. Si és un apartat nou, incorpora’l a `sidebar` en `astro.config.mjs`, amb el seu `slug` i l’etiqueta valenciana en `translations.ca`. La navegació d’este projecte es definix manualment.
4. Guarda les imatges en `src/assets/` i enllaça-les amb una ruta relativa des de la pàgina. Conserva les atribucions dels recursos que les requerisquen.
5. Executa `npm run build` i revisa les dos versions amb `npm run preview`.
6. Sempre que actualitzes el contingut dels apunts, actualitza també este README i [la seua versió castellana](README.md) amb els canvis rellevants en continguts, organització, recursos o convencions.

### Castellà i valencià

El castellà és l’idioma predeterminat; el valencià utilitza el codi `ca`. Les traduccions han de compartir la mateixa ruta i nom base, per exemple:

```text
guides/introduccion-a-java/tipos-de-datos-variables-y-mas.md
ca/guides/introduccion-a-java/tipos-de-datos-variables-y-mas.md
```

Mantín el mateix contingut i ordre en els dos idiomes: apartats, taules, exemples, exercicis, solucions i diagrames. Si traduïxes les cadenes d’un programa, revisa també la seua eixida i els resultats que depenguen del text, com ara la seua longitud.

Els enllaços interns escrits manualment han d’incloure el prefix del lloc:

- Castellà: `/ApuntesProgramacion/guides/.../`.
- Valencià: `/ApuntesProgramacion/ca/guides/.../`.

Les rutes relatives a imatges necessiten un nivell addicional de `../` des de la traducció valenciana, a causa del directori `ca/`.

### Requadres de notes, consells i exercicis

Utilitza el mateix format HTML en totes les unitats, amb la classe `java-document-note`:

```html
<aside class="java-document-note">
<p><strong>IDEA CLAU</strong></p>
<p><strong>Declara abans d’usar:</strong> tota variable ha de tindre un tipus i un nom. Per exemple, <code>int edad = 20;</code>.</p>
</aside>
```

Conserva un títol descriptiu en cada requadre i traduïx-lo en la pàgina castellana, per exemple, `IDEA CLAVE`. Usa `<strong>` per a les negretes i `<code>` per al codi en línia dins de l’HTML. Per a llistes, utilitza `<ul>` i `<li>`.

Inclou de tant en tant definicions i aclariments senzills amb comparacions quotidianes, destacats amb `DEFINICIÓ` o `EN PARAULES SENZILLES` (`DEFINICIÓN` o `EN PALABRAS SENCILLAS` en castellà). Mantín el terme tècnic i explica com es correspon amb la comparació.

No utilitzes les directives `:::tip`, `:::note` o `:::caution`: els requadres compartixen l’estil definit en `src/styles/custom.css` mitjançant `java-document-note`.

## Publicació

El flux [deploy.yml](.github/workflows/deploy.yml) compila i publica el lloc en GitHub Pages cada vegada que s’envien canvis a la branca `main`. També permet iniciar-lo manualment des d’**Actions → Deploy to GitHub Pages → Run workflow**.

En la configuració del repositori, **Settings → Pages → Source** ha d’estar en **GitHub Actions**. El flux genera i publica els fitxers; no cal pujar `dist/` al repositori.

L’adreça pública depén d’estos valors d’`astro.config.mjs`:

```js
site: "https://jovisal1.github.io",
base: "/ApuntesProgramacion",
```

Si canvies el domini o el nom del repositori, revisa estos valors i els enllaços interns amb el prefix escrit manualment.

## Documentació de referència

- [Astro](https://docs.astro.build/)
- [Starlight](https://starlight.astro.build/)
- [Instruccions de treball del repositori](AGENTS.md)
