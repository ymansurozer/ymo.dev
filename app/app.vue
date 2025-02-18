<script lang="ts" setup>
const navigation = await useNavigation();

useHead({
  htmlAttrs: {
    lang: "en",
  },
  meta: [
    { name: "viewport", content: "width=device-width, initial-scale=1" },
  ],
  link: [
    { rel: "icon", href: "/favicon.ico" },
  ],
});

provide("navigation", navigation);
</script>

<template>
  <UApp>
    <NuxtRouteAnnouncer />
    <NuxtLoadingIndicator color="var(--color-primary-400)" />

    <div v-motion-fade-visible-once>
      <AppHeader />

      <UMain>
        <NuxtLayout>
          <NuxtPage />
        </NuxtLayout>
      </UMain>

      <AppFooter />
    </div>

    <DevOnly>
      <DevTailwindSize class="bottom-4 left-4 fixed" />
    </DevOnly>
  </UApp>
</template>
