<template>
  <footer class="container header">
    <div class="social-list">
      <NuxtLink v-for="(item, index) in social" :key="index" :to="item.link">
        <img class="responsive-img" :src="item.image" :alt="item.alt" />
      </NuxtLink>
    </div>
    <p class="copyright">© 2021. AZsoft.rock</p>
  </footer>
</template>
<script>
export default {
  data() {
    return {
      social: [
        {
          image: require("~/assets/images/icons/facebook.svg"),
          link: "",
          alt: "facebook icon",
        },
        {
          image: require("~/assets/images/icons/instagram.svg"),
          link: "",
          alt: "instagram icon",
        },
        {
          image: require("~/assets/images/icons/linkedin.svg"),
          link: "",
          alt: "linkedin icon",
        },
        {
          image: require("~/assets/images/icons/upwork.svg"),
          link: "",
          alt: "upwork icon",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.header {
  padding-top: 4.5rem;
  padding-bottom: 4.5rem;

  display: grid;
  grid-auto-flow: column;
  justify-content: space-between;
  align-items: center;

  font-size: 1.4em;

  background-color: var(--color-bg-primary);
}
.social-list {
  display: grid;
  grid-template: 3.6rem / repeat(4, 3.6rem);
  column-gap: 1.6rem;
}
.copyright {
  color: var(--color-font-secondary);
}
</style>