// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "nuxt-posthog"],
  app: {
    baseURL: process.env.BASE_URL || "",
  },
  posthog: {
    publicKey: "phc_uChaVzjjHzXz7zVu5LOKZKPwIXEa6ZDsmDmDJg1hks2",
    host: "https://eu.i.posthog.com",
  },
});
