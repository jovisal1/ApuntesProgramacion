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
                  label: "Tipos de datos, variables y más",
                  translations: { ca: "Tipus de dades, variables i més" },
                  slug: "guides/introduccion-a-java/tipos-de-datos-variables-y-mas",
                },
                {
                  label: "Estructuras de control",
                  translations: { ca: "Estructures de control" },
                  slug: "guides/introduccion-a-java/estructuras-de-control",
                },
                {
                  label: "Entrada y salida de datos",
                  translations: { ca: "Entrada i eixida de dades" },
                  slug: "guides/introduccion-a-java/entrada-y-salida-de-datos",
                },
                {
                  label: "Arrays",
                  slug: "guides/introduccion-a-java/arrays",
                },
              ],
            },
          ],
        },
      ],
    }),
  ],
});
