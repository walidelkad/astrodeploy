/*import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({});
*/

import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://walidelkad.github.io',
  base: '/astrodeploy/',
  /* base always needs to be name of repository in github same as link*/
});
