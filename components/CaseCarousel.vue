<template>
  <section class="g-container g-section section">
    <h3 class="g-title-secondary title">Our cases</h3>
    <client-only>
      <VueSlickCarousel class="case-list" v-bind="settings" ref="slider">
        <div v-for="(item, index) in slides" :key="index">
          <CaseCard class="card" v-bind="item"> </CaseCard>
        </div>
        <template #prevArrow="arrowOption">
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
            {{ getCurrentSlide(arrowOption.currentSlide) }}
          </div>
        </template>
        <template #nextArrow="arrowOption">
          <div class="custom-arrow custom-arrow-next">
            / {{ arrowOption.slideCount }}
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
  </section>
</template>
<script>
import "vue-slick-carousel/dist/vue-slick-carousel.css";
// import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
export default {
  data() {
    return {
      settings: {
        infinite: false,
        slidesToShow: 3,
        speed: 500,
        rows: 2,
        slidesPerRow: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              rows: 1,
              slidesToShow: 2,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 600,
            settings: {
              rows: 1,
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      },
      slides: [
        {
          title: "Project name",
          description:
            "A back end developer is a person who specializes in back end web development as it’s sometimes called.",
          background: {
            image: require("@/assets/images/cases/case-1.jpg"),
            color: "#000",
          },
          icons: [
            {
              image: require("@/assets/images/icons/js.svg"),
              alt: "JavaScript",
            },
            {
              image: require("@/assets/images/icons/angular.svg"),
              alt: "Angular",
            },
          ],
        },
        {
          title: "Project name",
          description:
            "A back end developer is a person who specializes in back end web development as it’s sometimes called.",
          background: {
            image: require("@/assets/images/cases/case-2.jpg"),
            color: "#000",
          },
          icons: [
            {
              image: require("@/assets/images/icons/js.svg"),
              alt: "JavaScript",
            },
            {
              image: require("@/assets/images/icons/angular.svg"),
              alt: "Angular",
            },
          ],
        },
        {
          title: "Project name",
          description:
            "A back end developer is a person who specializes in back end web development as it’s sometimes called.",
          background: {
            image: require("@/assets/images/cases/case-3.jpg"),
            color: "#000",
          },
          icons: [
            {
              image: require("@/assets/images/icons/js.svg"),
              alt: "JavaScript",
            },
            {
              image: require("@/assets/images/icons/angular.svg"),
              alt: "Angular",
            },
          ],
        },
        {
          title: "Project name",
          description:
            "A back end developer is a person who specializes in back end web development as it’s sometimes called.",
          background: {
            image: require("@/assets/images/cases/case-4.jpg"),
            color: "#000",
          },
          icons: [
            {
              image: require("@/assets/images/icons/js.svg"),
              alt: "JavaScript",
            },
            {
              image: require("@/assets/images/icons/angular.svg"),
              alt: "Angular",
            },
          ],
        },
        {
          title: "Project name",
          description:
            "A back end developer is a person who specializes in back end web development as it’s sometimes called.",
          background: {
            image: require("@/assets/images/cases/case-5.jpg"),
            color: "#000",
          },
          icons: [
            {
              image: require("@/assets/images/icons/js.svg"),
              alt: "JavaScript",
            },
            {
              image: require("@/assets/images/icons/angular.svg"),
              alt: "Angular",
            },
          ],
        },
        {
          title: "Project name",
          description:
            "A back end developer is a person who specializes in back end web development as it’s sometimes called.",
          background: {
            image: require("@/assets/images/cases/case-6.jpg"),
            color: "#000",
          },
          icons: [
            {
              image: require("@/assets/images/icons/js.svg"),
              alt: "JavaScript",
            },
            {
              image: require("@/assets/images/icons/angular.svg"),
              alt: "Angular",
            },
          ],
        },
        {
          title: "Project name",
          description:
            "A back end developer is a person who specializes in back end web development as it’s sometimes called.",
          background: {
            image: require("@/assets/images/cases/case-6.jpg"),
            color: "#000",
          },
          icons: [
            {
              image: require("@/assets/images/icons/js.svg"),
              alt: "JavaScript",
            },
            {
              image: require("@/assets/images/icons/angular.svg"),
              alt: "Angular",
            },
          ],
        },
        {
          title: "Project name",
          description:
            "A back end developer is a person who specializes in back end web development as it’s sometimes called.",
          background: {
            image: require("@/assets/images/cases/case-6.jpg"),
            color: "#000",
          },
          icons: [
            {
              image: require("@/assets/images/icons/js.svg"),
              alt: "JavaScript",
            },
            {
              image: require("@/assets/images/icons/angular.svg"),
              alt: "Angular",
            },
          ],
        },
      ],
    };
  },
  methods: {
    getCurrentSlide(value) {
      // this function needs for right CurrentSlide in different breakpoints
      let slidesToShow = 3;
      if (process.client) {
        if (window.innerWidth <= 600) {
          slidesToShow = 1;
        } else if (window.innerWidth <= 1024) {
          slidesToShow = 2;
        }
      }
      return value + slidesToShow;
    },
  },
};
</script>
<style lang="scss" scoped>
$margin: 1.5rem;
.section {
  color: var(--color-font-primary);
  background-image: url("~assets/images/cases/bg.jpg");
  background-size: cover;
}
.case-list {
  position: relative;
  padding-top: 6.6rem;
  margin-left: -$margin;
  width: calc(100% + #{$margin * 2});

  div:focus {
    outline: none;
  }
}
.card {
  margin: $margin;
}
.custom-arrow {
  position: absolute;
  top: 0;
  right: $margin;
  transform: translateY(-100%);

  display: grid;
  grid-auto-flow: column;
  align-items: center;
  column-gap: 1.5rem;

  font-weight: 300;
  font-size: 1.8rem;
  line-height: 1em;
  svg {
    width: 4rem;
    height: 2rem;
  }
  & path {
    fill: var(--color-font-accent);
  }
}
.custom-arrow.slick-disabled path {
  fill: #666;
}

.custom-arrow-prev {
  transform: translate(-125%, -100%);
}
</style>
