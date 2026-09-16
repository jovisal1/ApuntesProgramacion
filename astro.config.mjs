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
                  label: "Estructuras de control",
                  translations: { ca: "Estructures de control" },
                  slug: "guides/introduccion-a-la-programacion/estructuras-de-control",
                },
                {
                  label: "PSeInt: de los algoritmos a la práctica",
                  translations: { ca: "PSeInt: dels algoritmes a la pràctica" },
                  slug: "guides/introduccion-a-la-programacion/pseint",
                },
              ],
            },
          ],
        },
      ],
    }),
  ],
});
