<template>
  <div class="card">
    <NuxtLink to="/" class="image" aria-label="link to post">
      <img class="g-img-cover" :src="image.link" :alt="image.alt" />
    </NuxtLink>
    <NuxtLink class="link" :to="link.to">{{ link.text }}</NuxtLink>
    <p class="description">{{ description }}</p>
  </div>
</template>
<script>
export default {
  props: {
    image: Object,
    link: Object,
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

  &:hover {
    color: var(--color-font-accent);
  }
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

.image {
  display: block;
  cursor: pointer;
  filter: brightness(0.3);
  transition: filter ease-in 0.3s;
  &:hover {
    filter: brightness(1);
  }
}
</style>