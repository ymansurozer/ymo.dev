<script lang="ts" setup>
import { breakpointsTailwind } from "@vueuse/core";

const { active } = useBreakpoints(breakpointsTailwind);
const { width, height } = useWindowSize();
</script>

<template>
  <UBadge
    variant="solid"
    color="neutral"
    class="font-medium"
  >
    {{ width }} x {{ height }} | <span class="font-semibold">{{ active().value?.toUpperCase() || "XS" }}</span>
  </UBadge>
</template>
