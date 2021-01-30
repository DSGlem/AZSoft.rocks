<template>
  <section class="g-container g-section section">
    <h3 class="title">Similar articles in our blog</h3>
    <CustomLink to="/" class="custom-link">Go to Blog</CustomLink>
    <div class="list">
      <BaseArticle
        class="c-article"
        v-for="(item, index) in articles"
        :key="index"
        v-bind="item"
      />
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      articles: [
        {
          image: {
            link: require("~/assets/images/articles/article-1.jpg"),
            alt: "article image",
          },
          article: {
            text:
              'The profession of "colorist": how to make the viewer believe the picture with the help of color',
            link: "/",
          },
        },
        {
          image: {
            link: require("~/assets/images/articles/article-2.jpg"),
            alt: "article image",
          },
          article: {
            text:
              'The profession of "colorist": how to make the viewer believe the picture with the help of color',
            link: "/",
          },
        },
        {
          image: {
            link: require("~/assets/images/articles/article-3.jpg"),
            alt: "article image",
          },
          article: {
            text:
              'The profession of "colorist": how to make the viewer believe the picture with the help of color',
            link: "/",
          },
        },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
.custom-link {
  margin-top: 1.5rem;
  column-gap: 3.5rem !important;
  grid-template-areas: "text icon" !important;
  grid-template-columns: auto 4rem !important;
  font-size: 1.8rem !important;
  @media (min-width: 992px) {
    margin-top: 0;
  }
}
.section {
  display: grid;

  grid-auto-flow: dense;

  color: var(--color-font-primary);
  background-color: black;

  @media (min-width: 992px) {
    gap: 5.6rem 8.8rem;
    grid-template: auto auto / auto 1fr;
  }
}
.title {
  font-size: 3.6rem;
  line-height: 1em;
  @media (min-width: 992px) {
    width: 21rem;
  }
}
.list {
  display: grid;
  gap: 3rem;
  //   grid-template-columns: repeat(3, 1fr);
  margin-top: 5rem;
  @media (min-width: 600px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (min-width: 992px) {
    margin-top: 0;
    grid-column: 2/3;
    grid-row: 1/3;
  }
}
</style>
<style lang="scss">
.c-article {
  .description {
    color: white;
  }
}
</style>