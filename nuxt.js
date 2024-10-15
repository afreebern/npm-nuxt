import { join } from "pathe";
import { defineNuxtModules } from "@nuxt/kit";

export default defineNuxtModules({
  hooks: {
    "components:dirs"(dirs) {
      dirs.push({
        path: join(__dirname, "components"),
        prefix: "afreebern",
      });
    },
  },
});
