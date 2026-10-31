// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightThemeNova from "starlight-theme-nova";

// https://astro.build/config
export default defineConfig({
  site: "https://jovisal1.github.io",
  base: "/ApuntesProgramacion",
  integrations: [
    starlight({
      plugins: [starlightThemeNova()],
      customCss: ["./src/styles/custom.css"],
      title: {
        es: "Programación 1DAW-1DAM",
        ca: "Programació 1DAW-1DAM",
      },
      defaultLocale: "root",
      locales: {
        root: { label: "Castellano", lang: "es" },
        ca: { label: "Valencià", lang: "ca" },
      },
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/withastro/starlight",
        },
      ],
      sidebar: [
        {
          label: "Inicio",
          translations: { ca: "Inici" },
          slug: "",
        },
        {
          label: "Unidades",
          translations: { ca: "Unitats" },
          items: [
            {
              label: "Introducción a la programación",
              translations: { ca: "Introducció a la programació" },
              items: [
                {
                  label: "Introducción",
                  translations: { ca: "Introducció" },
                  slug: "guides/introduccion-a-la-programacion",
                },
                {
                  label: "Algoritmos y programas",
                  translations: { ca: "Algoritmes i programes" },
                  slug: "guides/introduccion-a-la-programacion/algoritmos-y-programas",
                },
                {
                  label: "PSeInt: de los algoritmos a la práctica",
                  translations: { ca: "PSeInt: dels algoritmes a la pràctica" },
                  slug: "guides/introduccion-a-la-programacion/pseint",
                },
              ],
            },
            {
              label: "Introducción a Java",
              translations: { ca: "Introducció a Java" },
              items: [
                {
                  label: "Introducción",
                  translations: { ca: "Introducció" },
                  slug: "guides/introduccion-a-java",
                },
                {
                  label: "Historia y características de Java",
                  translations: { ca: "Història i característiques de Java" },
                  slug: "guides/introduccion-a-java/historia-y-caracteristicas",
                },
                {
                  label: "Tipos de datos, variables y constantes",
                  translations: { ca: "Tipus de dades, variables i constants" },
                  slug: "guides/introduccion-a-java/tipos-de-datos-variables-y-mas",
                },
                {
                  label: "Operadores y expresiones",
                  translations: { ca: "Operadors i expressions" },
                  slug: "guides/introduccion-a-java/operadores-y-expresiones",
                },
                {
                  label: "Cadenas de texto y conversiones",
                  translations: { ca: "Cadenes de text i conversions" },
                  slug: "guides/introduccion-a-java/cadenas-de-texto-y-conversiones",
                },
                {
                  label: "Estructuras de control",
                  translations: { ca: "Estructures de control" },
                  collapsed: true,
                  items: [
                    {
                      label: "Introducción",
                      translations: { ca: "Introducció" },
                      slug: "guides/introduccion-a-java/estructuras-de-control",
                    },
                    {
                      label: "Estructuras de selección",
                      translations: { ca: "Estructures de selecció" },
                      slug: "guides/introduccion-a-java/estructuras-de-control/estructuras-de-seleccion",
                    },
                    {
                      label: "Estructuras de iteración",
                      translations: { ca: "Estructures d’iteració" },
                      slug: "guides/introduccion-a-java/estructuras-de-control/estructuras-de-iteracion",
                    },
                    {
                      label: "Estructuras de salto",
                      translations: { ca: "Estructures de salt" },
                      slug: "guides/introduccion-a-java/estructuras-de-control/estructuras-de-salto",
                    },
                  ],
                },
                {
                  label: "Entrada y salida de datos",
                  translations: { ca: "Entrada i eixida de dades" },
                  collapsed: true,
                  items: [
                    {
                      label: "Introducción",
                      translations: { ca: "Introducció" },
                      slug: "guides/introduccion-a-java/entrada-y-salida-de-datos",
                    },
                    {
                      label: "Salida por consola",
                      translations: { ca: "Eixida per consola" },
                      slug: "guides/introduccion-a-java/entrada-y-salida-de-datos/salida-por-consola",
                    },
                    {
                      label: "Entrada con Scanner",
                      translations: { ca: "Entrada amb Scanner" },
                      slug: "guides/introduccion-a-java/entrada-y-salida-de-datos/entrada-con-scanner",
                    },
                    {
                      label: "Tokens, líneas y decimales",
                      translations: { ca: "Tokens, línies i decimals" },
                      slug: "guides/introduccion-a-java/entrada-y-salida-de-datos/tokens-lineas-y-decimales",
                    },
                    {
                      label: "Validación de entradas",
                      translations: { ca: "Validació d’entrades" },
                      slug: "guides/introduccion-a-java/entrada-y-salida-de-datos/validacion-de-entradas",
                    },
                    {
                      label: "Ejemplos completos",
                      translations: { ca: "Exemples complets" },
                      slug: "guides/introduccion-a-java/entrada-y-salida-de-datos/ejemplos-completos",
                    },
                    {
                      label: "Ventanas con JOptionPane",
                      translations: { ca: "Finestres amb JOptionPane" },
                      slug: "guides/introduccion-a-java/entrada-y-salida-de-datos/ventanas-con-joptionpane",
                    },
                  ],
                },
                {
                  label: "Arrays",
                  collapsed: true,
                  items: [
                    {
                      label: "Introducción",
                      translations: { ca: "Introducció" },
                      slug: "guides/introduccion-a-java/arrays",
                    },
                    {
                      label: "Declarar, crear y recorrer arrays",
                      translations: { ca: "Declarar, crear i recórrer arrays" },
                      slug: "guides/introduccion-a-java/arrays/declarar-crear-y-recorrer",
                    },
                    {
                      label: "Resolver problemas con arrays",
                      translations: { ca: "Resoldre problemes amb arrays" },
                      slug: "guides/introduccion-a-java/arrays/resolver-problemas",
                    },
                    {
                      label: "Arrays multidimensionales",
                      translations: { ca: "Arrays multidimensionals" },
                      slug: "guides/introduccion-a-java/arrays/arrays-multidimensionales",
                    },
                    {
                      label: "La clase java.util.Arrays",
                      translations: { ca: "La classe java.util.Arrays" },
                      slug: "guides/introduccion-a-java/arrays/clase-arrays",
                    },
                    {
                      label: "Errores frecuentes y repaso",
                      translations: { ca: "Errors freqüents i repàs" },
                      slug: "guides/introduccion-a-java/arrays/errores-y-repaso",
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    }),
  ],
});
