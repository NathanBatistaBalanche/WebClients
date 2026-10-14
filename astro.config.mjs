import { defineConfig } from "astro/config";
import node from "@astrojs/node";
import auth from "auth-astro";

export default defineConfig({
  output: "server",

  adapter: node({
    mode: "standalone",
  }),
  security: {
    allowedDomains: [
      {
        protocol: "https",
        hostname: "clients.nathan-batista-balanche.fr"
      }
    ]
  },
  integrations: [auth()],

  vite: {
    ssr: {
      noExternal: ["auth-astro"],
    },
  },
});

