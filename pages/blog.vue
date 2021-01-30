<template>
  <main>
    <BlogHero />
    <BlogSection
      class="blog-section"
      v-for="(item, index) in sections"
      :key="index"
      :list="item.articles"
      :title="item.title"
      :link="item.link"
      :colors="item.colors"
    />
    <BaseContact />
  </main>
</template>
<script>
export default {
  data() {
    return {
      sections: [
        {
          title: "Backend technology",
          link: {
            to: "/",
            text: "See all publications",
          },
          colors: {
            color: "#000",
            background: "#fff",
          },
          articles: [
            {
              image: {
                link: require("~/assets/images/articles/article-1.jpg"),
                alt: "article image",
              },
              link: {
                to: "/",
                text: "Most Popular Backend Web Development Frameworks in 2020",
              },
              description:
                "The concept of digital transformation today touches every organization irrespective of their industry vertical or functional expertise. ",
            },
            {
              image: {
                link: require("~/assets/images/articles/article-1.jpg"),
                alt: "article image",
              },
              link: {
                to: "/",
                text: "Most Popular Backend Web Development Frameworks in 2020",
              },
              description:
                "The concept of digital transformation today touches every organization irrespective of their industry vertical or functional expertise. ",
            },
            {
              image: {
                link: require("~/assets/images/articles/article-1.jpg"),
                alt: "article image",
              },
              link: {
                to: "/",
                text: "Most Popular Backend Web Development Frameworks in 2020",
              },
              description:
                "The concept of digital transformation today touches every organization irrespective of their industry vertical or functional expertise. ",
            },
          ],
        },
        {
          title: "Frontend technology",
          link: {
            to: "/",
            text: "See all publications",
          },
          colors: {
            color: "#fff",
            background: "#000",
          },
          articles: [
            {
              image: {
                link: require("~/assets/images/articles/article-1.jpg"),
                alt: "article image",
              },
              link: {
                to: "/",
                text: "Most Popular Backend Web Development Frameworks in 2020",
              },
              description:
                "The concept of digital transformation today touches every organization irrespective of their industry vertical or functional expertise. ",
            },
            {
              image: {
                link: require("~/assets/images/articles/article-1.jpg"),
                alt: "article image",
              },
              link: {
                to: "/",
                text: "Most Popular Backend Web Development Frameworks in 2020",
              },
              description:
                "The concept of digital transformation today touches every organization irrespective of their industry vertical or functional expertise. ",
            },
            {
              image: {
                link: require("~/assets/images/articles/article-1.jpg"),
                alt: "article image",
              },
              link: {
                to: "/",
                text: "Most Popular Backend Web Development Frameworks in 2020",
              },
              description:
                "The concept of digital transformation today touches every organization irrespective of their industry vertical or functional expertise. ",
            },
          ],
        },
        {
          title: "Application world",
          link: {
            to: "/",
            text: "See all publications",
          },
          articles: [
            {
              image: {
                link: require("~/assets/images/articles/article-1.jpg"),
                alt: "article image",
              },
              link: {
                to: "/",
                text: "Most Popular Backend Web Development Frameworks in 2020",
              },
              description:
                "The concept of digital transformation today touches every organization irrespective of their industry vertical or functional expertise. ",
            },
            {
              image: {
                link: require("~/assets/images/articles/article-1.jpg"),
                alt: "article image",
              },
              link: {
                to: "/",
                text: "Most Popular Backend Web Development Frameworks in 2020",
              },
              description:
                "The concept of digital transformation today touches every organization irrespective of their industry vertical or functional expertise. ",
            },
            {
              image: {
                link: require("~/assets/images/articles/article-1.jpg"),
                alt: "article image",
              },
              link: {
                to: "/",
                text: "Most Popular Backend Web Development Frameworks in 2020",
              },
              description:
                "The concept of digital transformation today touches every organization irrespective of their industry vertical or functional expertise. ",
            },
          ],
        },
        {
          title: "Design",
          link: {
            to: "/",
            text: "See all publications",
          },
          colors: {
            color: "#fff",
            background: "#000",
          },
          articles: [
            {
              image: {
                link: require("~/assets/images/articles/article-1.jpg"),
                alt: "article image",
              },
              link: {
                to: "/",
                text: "Most Popular Backend Web Development Frameworks in 2020",
              },
              description:
                "The concept of digital transformation today touches every organization irrespective of their industry vertical or functional expertise. ",
            },
            {
              image: {
                link: require("~/assets/images/articles/article-1.jpg"),
                alt: "article image",
              },
              link: {
                to: "/",
                text: "Most Popular Backend Web Development Frameworks in 2020",
              },
              description:
                "The concept of digital transformation today touches every organization irrespective of their industry vertical or functional expertise. ",
            },
            {
              image: {
                link: require("~/assets/images/articles/article-1.jpg"),
                alt: "article image",
              },
              link: {
                to: "/",
                text: "Most Popular Backend Web Development Frameworks in 2020",
              },
              description:
                "The concept of digital transformation today touches every organization irrespective of their industry vertical or functional expertise. ",
            },
          ],
        },
      ],
    };
  },
};
</script>
<style lang="scss">
.blog-section {
  .card .list {
    color: inherit;
  }
  &:first-of-type {
    margin-top: -6rem;
    padding-top: 0;
  }
}
</style>