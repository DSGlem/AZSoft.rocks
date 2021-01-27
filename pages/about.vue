<template>
  <main>
    <BaseHero v-bind="hero"></BaseHero>
    <AboutTeam />
  </main>
</template>

<script>
export default {
  layout: "default",
  data() {
    return {
      hero: {
        title: "About us",
        description:
          "Though we’re experts with a proven track record and a great reputation for helping companies do business faster, better and smarter than before, we never let ourselves forget that we’re fortunate to have our clients and not the other way around.",
        link: null,
        image: {
          src: require("~/assets/images/about/hero.png"),
          alt: "notebook image",
        },
        background: {
          image: require("@/assets/images/about/hero-bg.jpg"),
          color: "#000",
        },
      },
    };
  },
};
</script>
