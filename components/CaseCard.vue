<template>
  <div class="case-card">
    <img class="background" :src="background.image" />
    <h6 class="hover-animation title">{{ title }}</h6>
    <p class="hover-animation description">{{ description }}</p>
    <div class="hover-animation icons">
      <img
        class="responsive-img"
        v-for="(item, index) in icons"
        :key="index"
        :src="item.image"
        :alt="item.alt"
      />
    </div>
  </div>
</template>
<script>
export default {
  props: {
    title: String,
    description: String,
    icons: Array,
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
.case-card {
  position: relative;
  z-index: 2;
  overflow: hidden;

  padding: 5.8rem 5rem 3.6rem;

  display: grid;
  gap: 2.6rem 3.8rem;
  grid-template-columns: minmax(auto, 22rem) minmax(auto, 2.4rem);
  justify-content: center;
  // gap: 2.6rem 3.6rem;
  // grid-template-columns: 78% 8.9%;

  color: var(--color-font-primary);
  background-size: cover;

  transition: box-shadow ease-in 0.3s;

  font-size: 1.4rem;
  font-weight: 600;
  line-height: 1.2em;

  &::after {
    $width: 1.6rem;
    content: "";
    position: absolute;
    top: 0;
    left: 15%;

    width: $width;
    height: calc(#{$width} * 2);
    background-color: var(--color-font-accent);
  }
  // &::before,
  &::after {
    opacity: 0;
    transition: opacity ease-in 0.3s;
  }

  &:hover {
    box-shadow: 0px 0px 4px 2px hsla(0, 0%, 0%, 0.4),
      inset 0px 0px 1px 1px hsla(0, 0%, 100%, 0.2);
    &::after {
      opacity: 1;
    }
    .hover-animation {
      opacity: 1;
      transform: translateY(0);
    }
    .background {
      filter: blur(3px) brightness(0.3);
    }
  }
}
.hover-animation {
  opacity: 0;
  transform: translateY(-1rem);
  transition: opacity ease-in 0.3s, transform ease-in 0.3s;
}
.title {
  font-size: 2.4rem;
}
.title,
.description {
  grid-column: 1/2;
}
.icons {
  height: 100%;
  display: grid;
  row-gap: 1.1rem;
}
.background {
  position: absolute;
  z-index: -2;
  top: 0;
  left: 0;
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: filter 0.3s;
}
</style>

