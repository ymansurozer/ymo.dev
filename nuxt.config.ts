// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  $production: {
    image: {
      format: ["avif", "webp"],
      domains: [],
      provider: "cloudflare",
      cloudflare: {
        baseURL: "https://ymo.dev",
      },
    },

    modules: ["nuxt-security"],
  },

  css: ["~/assets/css/main.css"],

  compatibilityDate: "2025-02-16",

  content: {
    database: {
      type: "d1",
      bindingName: "DB",
    },
    build: {
      markdown: {
        highlight: {
          preload: ["ts", "json", "vue", "html", "shell", "md"],
          theme: {
            default: "one-light",
            dark: "one-dark-pro",
          },
        },
      },
    },
  },

  devtools: { enabled: true },

  experimental: {
    asyncContext: true,
    clientFallback: true,
    typedPages: true,
  },

  fonts: {
    defaults: {
      weights: [400, 500, 600, 700],
      styles: ["normal", "italic"],
      subsets: ["latin", "latin-ext"],
    },
  },

  future: {
    compatibilityVersion: 4,
  },

  modules: [
    "nitro-cloudflare-dev",
    "@nuxtjs/seo",
    "@nuxt/ui-pro",
    "@nuxt/content",
    "@nuxt/image",
    "@vueuse/nuxt",
    "@nuxt/fonts",
  ],

  nitro: {
    preset: "cloudflare-module",
    prerender: {
      crawlLinks: true,
      routes: ["/", "/sitemap.xml"],
    },
  },

  runtimeConfig: {
    public: {
      posthogPublicKey: process.env.POSTHOG_PUBLIC_KEY,

      // TODO: Remember to set as appropriate
      site: {
        url: "https://ymo.dev",
        name: "Yusuf Mansur Özer",
        description: "Software Developer",
        indexable: false,
      },
    },
  },

  schemaOrg: {
    // TODO
  },

  site: {
    url: "https://ymo.dev",
  },

  sitemap: {
    // TODO
  },
});
