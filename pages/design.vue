<template>
  <main>
    <BaseHero v-bind="hero"></BaseHero>
  </main>
</template>

<script>
export default {
  head: {
    title: "Design page",
    meta: [
      {
        hid: "description",
        name: "description",
        content: "Design description",
      },
    ],
  },
  layout: "default",
  data() {
    return {
      hero: {
        title: "Design",
        description:
          "Custom software products and services are our specialty, and we will ensure that your project receives the highest level of attention and customer care. Our job isn't done until you're satisfied with your online presence. For more details, don't wait!",
        link: { name: "See cases", to: "/" },
        image: {
          src: require("~/assets/images/design/hero.png"),
          alt: "notebook image",
        },
      },
    };
  },
};
</script>
