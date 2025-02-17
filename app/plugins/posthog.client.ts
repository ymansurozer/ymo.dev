import { defineNuxtPlugin } from "#app";
import posthog from "posthog-js";

export default defineNuxtPlugin({
  name: "posthog",
  parallel: true,
  setup() {
    const { posthogPublicKey } = useRuntimeConfig().public;
    const posthogClient = posthog.init(posthogPublicKey, {
      api_host: "https://eu.i.posthog.com",
      capture_pageview: false, // we add manual pageview capturing below
    });

    // Make sure that pageviews are captured with each route change
    // Credit: Daryl's comment: https://posthog.com/questions/pageleave-event-1
    const router = useRouter();
    router.afterEach((to, from) => {
      void nextTick(() => {
        if (from.fullPath !== to.fullPath) {
          posthog.capture("$pageleave", {
            current_url: from.fullPath,
          });
        }

        posthog.capture("$pageview", {
          current_url: to.fullPath,
        });
      });
    });

    return {
      provide: {
        posthog: posthogClient,
      },
    };
  },
});
