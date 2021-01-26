<template>
  <section class="g-container g-section section">
    <h3 class="g-title-secondary title">Services</h3>

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

    <keep-alive>
      <component
        class="c-tab"
        v-bind:is="currentTabComponent"
        v-bind="tabsData[currentPost]"
      ></component>
    </keep-alive>
  </section>
</template>
<script>
import posts from "~/assets/data/home/posts.js";
import Vue from "vue";
import TabBackEnd from "~/components/Home/TabBackEnd.vue";
Vue.component("TabBackEnd", TabBackEnd);

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
      tabsData: posts,
      tabs: [
        {
          name: "Back-End development",
          postId: "BackEnd",
          component: "TabBackEnd",
        },
        {
          name: "Front-End development",
          postId: "FrontEnd",
          component: "TabBackEnd",
        },
        {
          name: "Design",
          postId: "Design",
          component: "TabBackEnd",
        },
        {
          name: "App’s development",
          postId: "Apps",
          component: "TabBackEnd",
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
.slider {
  margin: 4rem auto 0;
  position: relative;
  width: 70%;
  @media (min-width: 992px) {
    margin: 9rem auto 0;
    width: unset;

    display: flex;
    justify-content: space-between;
  }
  //   max-width: 68.2rem;
}
.c-tab {
  margin-top: 6rem;
  @media (min-width: 992px) {
    margin-top: 12rem;
  }
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
  display: flex;
  justify-content: center;
}
</style>