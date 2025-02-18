<script lang="ts" setup>
import type { BlogCollectionItem } from "@nuxt/content";

const { name } = useRuntimeConfig().public.site;

const routePath = useRoute().path;
const isBlogPost = routePath.includes("/blog/");

const { data } = await useAsyncData(routePath, async () => {
  // wait 2 secs
  await new Promise(resolve => setTimeout(resolve, 2000));
  if (isBlogPost) {
    const [post, surround] = await Promise.all([
      queryCollection("blog")
        .path(routePath)
        .first(),
      queryCollectionItemSurroundings("blog", routePath, {
        fields: ["title", "description"],
      }),
    ]);
    return { content: post, surround };
  }

  const page = await queryCollection("page")
    .path(routePath)
    .first();
  return { content: page };
});

if (!data.value?.content) {
  throw createError({ statusCode: 404, statusMessage: "Page not found", fatal: true });
}

const page = computed(() => data.value?.content);
const surround = computed(() => isBlogPost ? data.value?.surround : undefined);

useSeoMeta({
  ...page.value?.seo,
  twitterCard: "summary_large_image",
  twitterSite: "@ymansurozer",
});

if (isBlogPost) {
  useSchemaOrg([
    defineArticle({
      "@type": ["Article", "BlogPosting"],
      "image": page.value?.image,
      "datePublished": page.value?.date ? new Date(page.value?.date).toISOString() : undefined,
    }),
  ]);
}

defineOgImageComponent("Custom", {
  headline: isBlogPost
    ? "Blog"
    : routePath !== "/" ? name : undefined,
  title: page.value?.title,
  description: page.value?.description,
  image: page.value?.image,
});
</script>

<template>
  <UPage v-if="page">
    <UPageHeader
      :title="page.title"
      :description="page.description"
    >
      <template #headline>
        <time
          v-if="isBlogPost && (page as BlogCollectionItem).date"
          class="font-normal text-(--ui-text-muted)"
        >
          {{ new Date((page as BlogCollectionItem).date).toLocaleDateString("en-GB", { year: "numeric", month: "short", day: "numeric" }) }}
        </time>
      </template>

      <div
        v-if="isBlogPost && (page as BlogCollectionItem).tags.length"
        class="flex flex-wrap gap-2 mt-4"
      >
        <UButton
          v-for="tag in (page as BlogCollectionItem).tags"
          :key="tag"
          variant="soft"
          class="font-medium"
          size="xs"
        >
          {{ tag }}
        </UButton>
      </div>
    </UPageHeader>

    <NuxtPicture
      v-if="isBlogPost && page.image"
      :src="page.image"
      :alt="page.title"
      width="657"
      height="345"
      sizes="400px xs:583px sm:657px"
      :img-attrs="{ class: 'rounded-b-lg w-full h-auto' }"
    />

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
