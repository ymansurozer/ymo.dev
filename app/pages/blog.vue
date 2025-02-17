<script lang="ts" setup>
const { data: posts } = await useAsyncData("blog-all", () =>
  queryCollection("blog")
    .order("date", "DESC")
    .all());

const allTags = computed(() => [...new Set(posts.value?.flatMap(post => post.tags).filter(Boolean) || [])]);
const selectedTag = ref(useRoute().query.tag as string | undefined);

const filteredPosts = computed(() => {
  if (!selectedTag.value)
    return posts.value;

  return posts.value?.filter(post => post.tags?.includes(selectedTag.value!));
});

// TODO: Add meta tags

// TODO: Add schema

// TODO: Add og image
</script>

<template>
  <div>
    <UPageHeader title="Blog">
      <template #default>
        <div class="flex flex-wrap items-center gap-2 mt-4">
          <div
            v-for="t in allTags"
            :key="t"
            class="flex items-center"
          >
            <UButtonGroup>
              <UButton
                :label="t"
                :variant="selectedTag === t ? 'solid' : 'soft'"
                size="xs"
                @click.prevent="selectedTag = t"
              />
              <UButton
                v-if="selectedTag === t"
                icon="i-lucide-x"
                variant="subtle"
                size="xs"
                @click.prevent="selectedTag = undefined"
              />
            </UButtonGroup>
          </div>
        </div>
      </template>
    </UPageHeader>

    <UBlogPosts class="mt-8">
      <UBlogPost
        v-for="(post, index) in filteredPosts"
        :key="index"
        v-bind="post"
        :to="post.path"
        orientation="vertical"
        variant="subtle"
      >
        <template #badge>
          <UBadge
            v-for="t in post.tags"
            :key="t"
            variant="soft"
            :label="t"
          />
        </template>
      </UBlogPost>
    </UBlogPosts>
  </div>
</template>
