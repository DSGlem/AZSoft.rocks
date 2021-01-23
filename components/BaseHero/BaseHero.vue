<template>
  <section
    class="container hero"
    :style="{
      backgroundImage: `url(${background.image})`,
      backgroundColor: `${background.color}`,
    }"
  >
    <div class="text-content">
      <h1 v-if="title" class="title-primary">{{ title }}</h1>
      <p v-if="description" class="description-primary description">
        {{ description }}
      </p>
      <div v-if="link" class="link">
        <NuxtLink :to="link.to" class="btn btn--accent text-uppercase">{{
          link.name
        }}</NuxtLink>
      </div>
    </div>
    <div class="image">
      <img
        v-if="image"
        class="responsive-img"
        :src="image.src"
        :alt="image.alt"
      />
    </div>
  </section>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "No title",
    },
    description: {
      type: String,
      default: "No description",
    },
    link: {
      type: Object,
      default: function () {
        return { name: "Home", to: "/" };
      },
    },
    image: {
      type: Object,
      default: function () {
        return { src: "", alt: "No image" };
      },
    },
    background: {
      type: Object,
      default: function () {
        return { image: require("@/assets/images/bg-wave.png"), color: "#000" };
      },
    },
  },
};
</script>
<style lang="scss" scoped>
.hero {
  // height: 100vh;
  // min-height: 100vh;

  padding-top: 22.4rem;
  padding-bottom: 16rem;

  display: grid;
  color: var(--color-font-primary);
  background-size: cover;
  @media (min-width: 768px) {
    grid-template-columns: 40% 50%;
    justify-content: space-between;
    align-items: center;
  }
  @media (min-height: 768px) {
    min-height: 100vh;
  }
}
// .title {
//   font-size: 7.2em;
//   font-weight: 700;
//   line-height: 1em;
// }
.description {
  margin-top: 4rem;
}
.link {
  margin-top: 6rem;
  font-size: 1.8em;
  font-weight: 700;
  line-height: 1em;
  letter-spacing: 0.05em;
}
</style>