// plugins/vuetify.ts
import { createVuetify } from "vuetify";
import { defineNuxtPlugin } from "#app";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

// Optional: add icon sets
import { aliases, mdi } from "vuetify/iconsets/mdi";

import "vuetify/styles";

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    components,
    directives,
    icons: {
      defaultSet: "mdi",
      aliases,
      sets: { mdi },
    },
    theme: {
      defaultTheme: "light",
      themes: {
        light: {
          colors: {
            primary: "#1e3c61",
            secondary: "#e46c0d",
            third: "#e76b09",
            fourth: "#ffa600",
            fifth: "#226498",
            gray: "#f7f7f7",
            text: "#212121",
            thead: "#f3f3f3",
            heading: "#1e3c61",
            navItem: "#d1e1e5",
            headerItem: "#ffffff",
            leftSidebar: "#f7f7f7",
            theading: "#f7f7f7",
            tborder: "#cccccc",
          },
        },
      },
    },
  });

  nuxtApp.vueApp.use(vuetify);
});
