<template>
  <section class="g-container g-section section">
    <h3 class="g-title-secondary title">Services</h3>

    <div class="c-tab">
      <div>
        <img
          class="g-img-cover"
          src="~/assets/images/home/blog-image.jpg"
          alt="blog Image"
        />
      </div>
      <div>
        <client-only>
          <VueSlickCarousel class="slider" v-bind="settings">
            <div v-for="(tab, index) in tabs" :key="index">
              <div class="tab-wrapper">
                <BaseTabBtn
                  :component="tab.postId"
                  :currentTab="currentPost"
                  @change="updateCurrentPost"
                >
                  {{ tab.name }}
                </BaseTabBtn>
              </div>
            </div>
            <template #prevArrow>
              <div class="custom-arrow custom-arrow-prev">
                <svg
                  class="g-img-contain"
                  viewBox="0 0 41 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.646446 3.64644C0.451183 3.84171 0.451183 4.15829 0.646446 4.35355L3.82843 7.53553C4.02369 7.73079 4.34027 7.73079 4.53553 7.53553C4.7308 7.34027 4.7308 7.02369 4.53553 6.82842L1.70711 4L4.53553 1.17157C4.7308 0.976308 4.7308 0.659725 4.53553 0.464463C4.34027 0.269201 4.02369 0.269201 3.82843 0.464463L0.646446 3.64644ZM41 3.5L1 3.5L1 4.5L41 4.5L41 3.5Z"
                    fill="#666666"
                  />
                </svg>
              </div>
            </template>
            <template #nextArrow>
              <div class="custom-arrow custom-arrow-next">
                <svg
                  class="g-img-contain"
                  viewBox="0 0 41 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M40.3536 4.35355C40.5488 4.15829 40.5488 3.84171 40.3536 3.64645L37.1716 0.464466C36.9763 0.269204 36.6597 0.269204 36.4645 0.464466C36.2692 0.659728 36.2692 0.976311 36.4645 1.17157L39.2929 4L36.4645 6.82843C36.2692 7.02369 36.2692 7.34027 36.4645 7.53553C36.6597 7.7308 36.9763 7.7308 37.1716 7.53553L40.3536 4.35355ZM0 4.5H40V3.5H0V4.5Z"
                    fill="#FF4471"
                  />
                </svg>
              </div>
            </template>
          </VueSlickCarousel>
        </client-only>
        <CustomLink to="/design">Design</CustomLink>
        <h5 class="subtitle">How To Measure UI/UX Design Impact On Business</h5>
        <p class="description">
          One of the stages of post-production of films, clips and promotional
          videos is color correction. With the help of color, you can change
          both the image itself and the perception of the viewer, enhance his
          emotions.
        </p>
      </div>
    </div>
    <div class="c-list">
      <BaseArticle
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
      settings: {
        responsive: [
          {
            breakpoint: 99999,
            settings: "unslick",
          },
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
            },
          },
        ],
      },
      currentPost: "BackEnd",
      currentTab: "TabBackEnd",
      tabs: [
        {
          name: "Latest publications",
          postId: "BackEnd",
          component: "TabBackEnd",
        },
        {
          name: "Popular publications",
          postId: "FrontEnd",
          component: "TabBackEnd",
        },
        {
          name: "Collections",
          postId: "Design",
          component: "TabBackEnd",
        },
      ],
      articles: [
        {
          category: {
            title: "Backend technology",
            link: "/back-end",
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
            title: "Frontend technology",
            link: "/front-end",
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
            title: "Applications world",
            link: "/apps",
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
        {
          category: {
            title: "Design",
            link: "/design",
          },
          image: {
            link: require("~/assets/images/articles/article-4.jpg"),
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
  methods: {
    updateCurrentPost(value) {
      this.currentPost = value;
    },
  },
  computed: {
    currentTabComponent() {
      return this.currentTab;
    },
  },
};
</script>
<style lang="scss" scoped>
.section {
  background-image: url("~assets/images/back-end/bg.jpg");
  background-size: cover;
}
.title {
  text-align: center;
}
.subtitle {
  margin-top: 2rem;
  font-size: 2.6rem;
  line-height: 1.2em;
  font-weight: 700;
  @media (min-width: 375px) {
    font-size: 3rem;
  }
}
.description {
  margin-top: 4rem;
  font-size: 1.6rem;
  line-height: 1.375em;
  color: var(--color-font-secondary);
}
.slider {
  margin: 4rem auto 0;
  position: relative;
  width: 70%;
  @media (min-width: 992px) {
    margin: 0;
    width: unset;

    display: flex;
    justify-content: space-between;
    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      z-index: 0;
      display: block;
      width: 100%;
      height: 0.3rem;
      background-color: #f7f7f7;
      transform: translateY(
        -1.1rem
      ); //1.1rem is height of triangle on active tab
    }
  }
  //   max-width: 68.2rem;
}
.link {
  margin-top: 4rem;
}
.c-tab {
  margin-top: 6rem;
  padding-bottom: 6rem;
  border-bottom: 3px solid #f6f6f6;
  @media (min-width: 992px) {
    margin-top: 9rem;
    display: grid;
    grid-template-columns: 1fr 45%;
    column-gap: 9rem;
    border-width: 0.3rem;
  }
  @media (min-width: 1200px) {
    column-gap: 13rem;
    grid-template-columns: 1fr 40%;
  }
}
.c-list {
  margin-top: 6rem;
  display: grid;
  gap: 4rem 3rem;
  grid-template-columns: repeat(auto-fill, minmax(27rem, 1fr));
}
.custom-arrow {
  position: absolute;
  top: 0%;
  width: 4rem;
  height: 1rem;

  display: grid;
  grid-auto-flow: column;
  align-items: center;
  column-gap: 1.5rem;

  font-weight: 300;
  font-size: 1.8rem;
  line-height: 1em;
  cursor: pointer;
  svg {
    width: 4rem;
  }
  & path {
    fill: var(--color-font-accent);
  }
}
.custom-arrow.slick-disabled path {
  fill: #666;
}
.custom-arrow-prev {
  left: 0;
  transform: translate(-100%, 100%);
}
.custom-arrow-next {
  right: 0;
  transform: translate(100%, 100%);
}
.tab-wrapper {
  position: relative;
  z-index: 1;
  display: flex;
  justify-content: center;
}
</style>