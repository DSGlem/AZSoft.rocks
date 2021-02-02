<template>
  <section
    class="g-container g-section section"
    :style="{
      color: `${colors.color}`,
      backgroundColor: `${colors.background}`,
    }"
  >
    <div class="section__header">
      <h2 class="g-title-secondary">{{ title }}</h2>
      <CustomLink class="link" :to="link.to">{{ link.text }}</CustomLink>
    </div>
    <div class="list">
      <BaseCard
        v-for="(item, index) in articles"
        :key="index"
        v-bind="item"
      ></BaseCard>
    </div>
  </section>
</template>
<script>
export default {
  props: {
    colors: {
      type: Object,
      default: function () {
        return {
          color: "#000",
          background: "#fff",
        };
      },
    },
    title: String,
    link: Object,
    articles: Array,
  },
};
</script>
<style lang="scss" scoped>
.list {
  margin-top: 3rem;
  display: grid;
  gap: 3rem;
  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (min-width: 992px) {
    margin-top: 6.5rem;
  }
}
.section__header {
  display: grid;
  gap: 2rem;
  @media (min-width: 768px) {
    grid-auto-flow: column;
    justify-content: space-between;
  }
}
</style>