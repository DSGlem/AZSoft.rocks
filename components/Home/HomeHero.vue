<template>
  <section class="g-container g-section section">
    <div class="logo">
      <img
        class="g-img-contain"
        src="~/assets/images/icons/logo.svg"
        alt="AZSoft logo"
      />
    </div>

    <VueSlickCarousel class="slider" v-bind="settings">
      <NuxtLink class="slider__item g-link" to="/about">About us</NuxtLink>
      <span class="slider__item dropdown g-link">
        <NuxtLink class="dropdown-label" to="/services">Services</NuxtLink>
        <span class="dropdown-body">
          <NuxtLink class="dropdown-body__item g-link" to="/back-end"
            >Backend development</NuxtLink
          >
          <NuxtLink class="dropdown-body__item g-link" to="/back-end"
            >Frontend development</NuxtLink
          >
          <NuxtLink class="dropdown-body__item g-link" to="/back-end"
            >Design</NuxtLink
          >
          <NuxtLink class="dropdown-body__item g-link" to="/back-end"
            >App’s development</NuxtLink
          >
        </span>
      </span>
      <NuxtLink class="slider__item g-link" to="/stories"
        >Success stories</NuxtLink
      >
      <NuxtLink class="slider__item g-link" to="/blog">Blog</NuxtLink>
      <NuxtLink class="slider__item g-link" to="/contact">Contact us</NuxtLink>
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

    <h1 class="g-title-primary title">Software Development</h1>
    <p class="g-description-primary description">
      Custom software products and services are our specialty, and we will
      ensure that your project receives the highest level of attention and
      customer care. Our job isn't done until you're satisfied with your online
      presence. For more details, don't wait!
    </p>
    <div class="link">
      <a href="#contact" class="btn btn--accent g-text-uppercase">
        CONTACT US
      </a>
    </div>
    <div class="scroll-icon">
      <img
        class="g-img-contain"
        src="~/assets/images/icons/mouse.svg"
        alt="scroll icon"
      />
    </div>
  </section>
</template>
<script>
import "vue-slick-carousel/dist/vue-slick-carousel.css";
// import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";

export default {
  data() {
    return {
      settings: {
        // arrows: false,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1,
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
    };
  },
};
</script>

<style lang="scss" scoped>
.section {
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;

  text-align: center;
  color: var(--color-font-primary);

  background-image: url("~assets/images/home/bg-hero.jpg");
  background-size: cover;
  background-position: center center;
}
.slider {
  margin-top: 10rem;
  position: relative;
  width: 70%;
  max-width: 68.2rem;
}
.slider__item {
  font-size: 18px;
  font-weight: 400;
  @media (min-width: 992px) {
    font-size: 1.8rem;
  }
}
.dropdown {
  position: relative;

  &:hover {
    .dropdown-body {
      opacity: 1;
      transform: translateY(0%);
    }
    .dropdown-label {
      &:after {
        transform: translate(300%, -50%) rotate(-135deg);
      }
    }
  }
}
.dropdown-label {
  position: relative;
  text-decoration: unset;
  color: inherit;
  &:after {
    content: "";
    position: absolute;
    top: 50%;
    right: 0;
    display: block;
    width: 5px;
    height: 5px;

    color: inherit;

    border-right: 1px solid currentColor;
    border-bottom: 1px solid currentColor;
    transform: translate(300%, -100%) rotate(45deg);

    transition: transform ease-in-out 0.3s;

    @media (min-width: 992px) {
      width: 0.5rem;
      height: 0.5rem;
      border-width: 0.1rem;
    }
  }
}
.dropdown-body {
  display: grid;
  margin-top: 1rem;
  row-gap: 0.5rem;

  opacity: 0;
  transform: translateY(-20%);
  transition: opacity ease-in 0.3s, transform ease-in 0.3s;
}
.dropdown-body__item {
  display: block;
  font-size: 0.7em;
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

.logo {
  width: 17.2rem;
}

.title {
  margin-top: 12.4rem;
}
.description {
  max-width: 78rem;
  margin-top: 4rem;
}
.link {
  margin-top: 7rem;
  font-size: 1.8em;
  font-weight: 700;
  line-height: 1em;
  letter-spacing: 0.05em;
}
.scroll-icon {
  margin-top: 10rem;
  width: 2.2rem;
  height: 4.2rem;
}
</style>