<template>
  <main>
    <BaseHero v-bind="hero"></BaseHero>
    <DevelopmentServices />
    <CaseCarousel></CaseCarousel>
    <BackEndTechnologies></BackEndTechnologies>
  </main>
</template>

<script>
export default {
  layout: "default",
  data() {
    return {
      hero: {
        title: "Backend Development",
        description:
          "Custom software products and services are our specialty, and we will ensure that your project receives the highest level of attention and customer care. Our job isn't done until you're satisfied with your online presence. For more details, don't wait!",
        link: { name: "See cases", to: "/" },
        image: {
          src: require("~/assets/images/back-end/hero.png"),
          alt: "notebook image",
        },
      },
    };
  },
};
</script>

<style>
</style>
