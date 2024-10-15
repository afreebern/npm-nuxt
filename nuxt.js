import { defineNuxtModules } from "@nuxt/kit";

export default defineNuxtModules({
  hooks: {
    "components:dirs"(dirs) {
      dirs.push({
        path: __dirname + "components",
        prefix: "afreebern",
      });
    },
  },
});
