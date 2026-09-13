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
            // Each item here is one entry in the navigation menu.
            { slug: "guides/introduccion-a-la-programacion" },
          ],
        },
      ],
    }),
  ],
});
