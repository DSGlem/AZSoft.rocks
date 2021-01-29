<template>
  <div>
    <section class="g-container g-section section">
      <div class="section__header">
        <h1 class="g-title-primary title">Blog</h1>
        <div class="list">
          <button
            class="option"
            :class="{ active: item.value === currentOption }"
            v-for="(item, index) in options"
            :key="index"
            @click="currentOption = item.value"
          >
            {{ item.title }}
          </button>
        </div>
      </div>

      <div class="post">
        <div class="post__image">
          <NuxtLink to="/blog-article">
            <img
              class="g-img-cover"
              src="~/assets/images/blog/hero.jpg"
              alt="Cyber Resilience & Security-by-Design"
            />
          </NuxtLink>
        </div>
        <p>
          <CustomLink to="/design">Design</CustomLink>
          <NuxtLink class="post__title" to="/blog-article">
            Cyber Resilience & Security-by-Design: The New Approach to
            Cybersecurity
          </NuxtLink>
          <span class="post__description">
            Cybersecurity has holistically been a well-funded and highly
            prioritized process at most organizations to protect enterprise
            systems against cyber threats. However, in recent years, the
            instance of cyber-attacks and their impact on businesses has
            increased significantly.
          </span>
        </p>
      </div>
    </section>
    <section class="g-container category">
      <div class="categories-list">
        <BaseArticle
          v-for="(item, index) in articles"
          :key="index"
          v-bind="item"
        ></BaseArticle>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  data() {
    return {
      currentOption: 1,
      options: [
        { title: "Latest publications", value: 1 },
        { title: "Popular publications", value: 2 },
        { title: "Collections", value: 3 },
      ],
      articles: [
        {
          category: {
            link: "/",
            title: "Backend technology",
          },
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
          category: {
            link: "/",
            title: "Frontend technology",
          },
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
          category: {
            link: "/",
            title: "Applications world",
          },
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
.section {
  position: relative;
  padding-top: 21.6rem;
  padding-bottom: 19rem;
  background-image: url("~assets/images/blog/bg-hero.jpg");
  background-size: cover;
}
.section__header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: column;
  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
  }
}
.list {
  margin-top: 3rem;
  display: grid;
  gap: 1rem 8.8rem;
  justify-items: left;

  @media (min-width: 768px) {
    grid-auto-flow: column;
  }
}
.title {
  color: var(--color-font-primary);
}
.option {
  color: var(--color-font-primary);
  font-size: 1.6rem;

  transition: color ease-in 0.3s;
  background-color: unset;
  border: none;
  cursor: pointer;

  &:focus {
    outline: none;
  }
}
.option.active {
  color: var(--color-font-accent);
}
.post {
  margin-top: 6rem;
  display: grid;
  gap: 3rem 5em;
  padding: 6rem 3rem;
  background-color: var(--color-bg-secondary);
  @media (min-width: 992px) {
    grid-template-columns: 50% 1fr;
    padding: 10.5rem;
  }
  //   color: var(--color-font-primary);
}
.post__title {
  display: block;
  margin-top: 1.4rem;

  color: #000;
  font-size: 3rem;
  font-weight: 700;
  line-height: 1.16em;
  text-decoration: unset;

  transition: color ease-in 0.3s;

  &:hover {
    color: var(--color-font-accent);
  }

  @media (min-width: 992px) {
    margin-top: 2.4rem;
  }
}
.post__description {
  display: block;
  margin-top: 2rem;
  color: var(--color-font-secondary);
  font-size: 1.6rem;
  line-height: 1.375em;
  @media (min-width: 992px) {
    margin-top: 4rem;
  }
}
.category {
  max-height: calc(100% - 5rem);
}
.categories-list {
  transform: translateY(-19rem);
  bottom: 0;
  padding: 6rem 3rem;
  display: grid;
  gap: 3rem;

  background-color: #f0f0f0;
  @media (min-width: 600px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (min-width: 992px) {
    padding: 7.6rem 10.5rem;
  }
}
</style>