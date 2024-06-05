import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  locales: {
    "/": {
      lang: "en-US",
      title: "mio's blog",
    },
    "/zh/": {
      lang: "zh-CN",
      title: "mio's blog",
    },
  },

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
