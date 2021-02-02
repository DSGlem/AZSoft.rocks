<template>
  <div class="card">
    <div class="image">
      <img class="g-img-cover" :src="image.link" :alt="image.alt" />
    </div>
    <p class="link">{{ title }}</p>
    <p class="description">{{ description }}</p>
  </div>
</template>
<script>
export default {
  props: {
    image: Object,
    title: String,
    description: String,
  },
};
</script> 
<style lang="scss" scoped>
.link {
  margin-top: 2.8rem;
  display: block;
  color: inherit;
  font-weight: 600;
  font-size: 1.8rem;
  line-height: 1em;
  text-decoration: none;

  transition: color ease-in-out 0.3s;
}

.description {
  margin-top: 2rem;
  color: var(--color-font-secondary);
  font-size: 14px;
  line-height: 1.14em;

  @media (min-width: 992px) {
    font-size: 1.4rem;
  }
}
</style>