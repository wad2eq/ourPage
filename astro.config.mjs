import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from "@astrojs/tailwind";

import robots from 'astro-robots';

export default defineConfig({
  integrations: [react(), tailwind(), robots()]
});