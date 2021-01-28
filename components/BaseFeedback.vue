<template>
  <div class="feedback">
    <h6 class="title">{{ title }}</h6>
    <p class="description">
      {{ description }}
    </p>
  </div>
</template>
<script>
export default {
  props: {
    title: String,
    description: String,
  },
};
</script>

<style lang="scss" scoped>
.feedback {
  padding: 5rem;

  border: 0.1rem solid #e4e4e4;
}
.title {
  font-size: 1.8rem;
  font-weight: 700;
  line-height: 1em;
}
.description {
  margin-top: 3rem;
  color: var(--color-font-secondary);
  font-size: 14px;
  font-style: italic;
  line-height: 1.2em;
  @media (min-width: 992px) {
    font-size: 1.4rem;
  }
}
</style>