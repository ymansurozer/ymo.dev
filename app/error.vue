<script setup lang="ts">
import type { NuxtError } from "#app";

defineProps<{
  error: NuxtError;
}>();

useHead({
  htmlAttrs: {
    lang: "en",
  },
});

useSeoMeta({
  title: "Page not found",
  description: "We are sorry but this page could not be found.",
});

const navigation = await useNavigation();

provide("navigation", navigation);
</script>

<template>
  <UApp>
    <AppHeader />

    <UError :error="error" />

    <AppFooter />
  </UApp>
</template>
