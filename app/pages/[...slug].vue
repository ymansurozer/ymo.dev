<script lang="ts" setup>
import type { BlogCollectionItem } from "@nuxt/content";

const route = useRoute();
const isBlogPost = route.path.includes("/blog/");

const { data } = await useAsyncData(route.path, async () => {
  // wait 2 secs
  await new Promise(resolve => setTimeout(resolve, 2000));
  if (isBlogPost) {
    const [post, surround] = await Promise.all([
      queryCollection("blog")
        .path(route.path)
        .first(),
      queryCollectionItemSurroundings("blog", route.path, {
        fields: ["title", "description"],
      }),
    ]);
    return { content: post, surround };
  }

  const page = await queryCollection("page")
    .path(route.path)
    .first();
  return { content: page };
});

if (!data.value?.content) {
  throw createError({ statusCode: 404, statusMessage: "Page not found", fatal: true });
}

const page = computed(() => data.value?.content);
const surround = computed(() => isBlogPost ? data.value?.surround : undefined);

// TODO: Add meta tags

// TODO: Add schema

// TODO: Add og image
</script>

<template>
  <UPage v-if="page">
    <UPageHeader
      :title="page.title"
      :description="page.description"
      :ui="{ title: 'text-(--ui-primary)' }"
      :links="isBlogPost ? (page as BlogCollectionItem).tags?.map(tag => ({ label: tag, variant: 'soft', to: `/blog?tag=${tag}` })) : undefined"
    >
      <template #headline>
        <time
          v-if="isBlogPost && (page as BlogCollectionItem).date"
          class="text-(--ui-text-dimmed) font-normal"
        >
          {{ new Date((page as BlogCollectionItem).date).toLocaleDateString("en-GB", { year: "numeric", month: "short", day: "numeric" }) }}
        </time>
      </template>
    </UPageHeader>

    <UPageBody>
      <ContentRenderer
        v-if="page"
        :value="page"
      />

      <USeparator v-if="surround?.length" />

      <UContentSurround :surround="surround" />
    </UPageBody>

    <template
      v-if="page?.body?.toc?.links?.length && isBlogPost"
      #right
    >
      <UContentToc
        title="Table of Contents"
        :links="page.body?.toc?.links"
      />
    </template>
  </UPage>
</template>
