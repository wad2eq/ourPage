import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

import robots from "astro-robots";
import jopSoftwarecookieconsent from "@jop-software/astro-cookieconsent";
import cookieconsent from "@jop-software/astro-cookieconsent";

import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site:'https://www.webdevagency.eu/',
  integrations: [react(), tailwind(), robots(), jopSoftwarecookieconsent({}), sitemap()],
});