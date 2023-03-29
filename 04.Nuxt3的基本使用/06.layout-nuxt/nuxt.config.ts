// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  telemetry: false,
  routeRules: {
    "/": { ssr: true }, // ssr
    "/category": { ssr: false }, // spa
  },
});
