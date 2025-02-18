import { definePerson } from "nuxt-schema-org/schema";

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

  app: {
    head: {
      titleTemplate: "%s",
    },
  },

  css: ["~/assets/css/main.css"],

  colorMode: {
    preference: "dark",
  },

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
    // We seem to need this for TailwindCSS v4
    // https://github.com/nuxt/fonts/issues/468
    experimental: {
      processCSSVariables: true,
    },
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
    "@vueuse/motion/nuxt",
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
    identity: definePerson({
      name: "Yusuf Mansur Özer",
      // TODO
      description: "Software Developer",
      image: "/profile.png",
      url: "https://ymo.dev",
      email: "hi@ymo.dev",
      sameAs: [
        "https://www.linkedin.com/in/ymansurozer/",
        "https://github.com/ymansurozer",
        "https://bsky.app/profile/ymansurozer.bsky.social",
        "https://x.com/ymansurozer",
      ],
    }),
  },

  site: {
    url: "https://ymo.dev",
  },

  ui: {
    theme: {
      colors: ["primary", "neutral"],
    },
  },
});
