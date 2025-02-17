export async function useNavigation() {
  const { data: navigation } = await useAsyncData("navigation", async () => {
    const nav = await queryCollectionNavigation("page")
      // Remove home page as we don't want to show it in the navigation
      .where("path", "<>", "/");

    // Add blog page
    nav.push({
      title: "Blog",
      path: "/blog",
    });

    return nav;
  });

  return navigation.value;
}
