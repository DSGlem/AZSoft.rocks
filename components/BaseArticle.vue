<template>
  <div class="article">
    <CustomLink v-if="category" class="custom" :to="category.link">
      {{ category.title }}
    </CustomLink>
    <NuxtLink class="article-link" :to="article.link">
      <img
        class="article-image"
        :src="image.link"
        :alt="image.alt"
        loading="lazy"
      />
      <span class="description">{{ article.text }}</span>
    </NuxtLink>
  </div>
</template>
<script>
export default {
  props: {
    category: Object,
    image: {
      type: Object,
      required: true,
    },
    article: {
      type: Object,
      required: true,
    },
  },
};
</script>
<style lang="scss" scoped>
.article {
  display: grid;
  row-gap: 1.4rem;

  font-size: 1.4rem;
  font-weight: 400;
  line-height: 1.14em;
}
.article-link {
  display: grid;
  row-gap: 1.6rem;

  text-decoration: unset;
}
.article-image {
  width: 100%;
  display: block;
  object-fit: cover;

  filter: brightness(0.3);
  transition: filter ease-in 0.3s;
  &:hover {
    filter: brightness(1);
  }
}
.description {
  color: #000;
  transition: color ease-in 0.3s;
  &:hover {
    color: var(--color-font-accent);
  }
}
</style>
