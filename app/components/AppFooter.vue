<script lang="ts" setup>
const { socials } = useAppConfig();
</script>

<template>
  <USeparator />

  <UFooter>
    <div class="flex flex-col items-center justify-center gap-3">
      <p class="text-sm text-center text-(--ui-text-muted)">
        © 2025{{ new Date().getFullYear() !== 2025 ? `-${new Date().getFullYear()}` : '' }} Yusuf Mansur Özer
      </p>

      <div class="flex items-center justify-center">
        <UButton
          v-for="social in socials"
          :key="social.url"
          :to="social.url"
          target="_blank"
          :icon="social.icon"
          :aria-label="social.label"
          color="neutral"
          variant="ghost"
          size="sm"
        />
      </div>
    </div>
  </UFooter>
</template>
