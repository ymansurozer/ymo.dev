<script setup lang="ts">
import type { ContentNavigationItem } from "@nuxt/content";

const { socials } = useAppConfig();

const navigation = inject<Ref<ContentNavigationItem[]>>("navigation");
</script>

<template>
  <UHeader :ui="{ right: 'gap-6' }">
    <template #left>
      <NuxtLink to="/">
        <AppLogo />
      </NuxtLink>
    </template>

    <template #right>
      <div class="hidden lg:flex items-center gap-3">
        <ULink
          v-for="item in navigation"
          :key="item.path"
          :to="item.path"
          class="font-medium text-sm"
        >
          {{ item.title }}
        </ULink>
      </div>

      <div class="flex items-center gap-0.5">
        <UButton
          v-for="social in socials"
          :key="social.url"
          :to="social.url"
          target="_blank"
          :icon="social.icon"
          :aria-label="social.label"
          color="neutral"
          variant="ghost"
        />
      </div>

      <UColorModeSwitch />
    </template>

    <template #body>
      <UNavigationMenu
        :items="navigation?.map(item => ({
          label: item.title,
          to: item.path,
        }))"
        orientation="vertical"
        class="-mx-2.5"
      />
    </template>
  </UHeader>
</template>
