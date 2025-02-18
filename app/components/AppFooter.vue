<script lang="ts" setup>
const { socials } = useAppConfig();
</script>

<template>
  <USeparator />

  <UFooter>
    <div class="flex flex-col justify-center items-center gap-3">
      <p class="text-(--ui-text-muted) text-sm text-center">
        © 2025{{ new Date().getFullYear() !== 2025 ? `-${new Date().getFullYear()}` : '' }} Yusuf Mansur Özer
      </p>

      <div class="flex justify-center items-center">
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
