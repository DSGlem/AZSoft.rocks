<template>
  <section class="section">
    <div class="g-container section-wrapper">
      <h2 class="title">Our team</h2>
      <div class="list">
        <VueSlickCarousel class="slider" v-bind="settings">
          <EmployeeCard
            v-for="(item, index) in employees"
            :key="index"
            v-bind="item"
          >
          </EmployeeCard>
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
      </div>
    </div>
  </section>
</template>
<script>
import data from "~/assets/data/home/employee.js";
export default {
  data() {
    return {
      employees: data["employees"],
      settings: {
        infinite: false,
        responsive: [
          {
            breakpoint: 99999,
            settings: "unslick",
          },
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 4,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 3,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 375,
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
  position: relative;
  height: 26.4rem;
}
.section-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  transform: translateY(-45%);
  width: 100%;
}
.title {
  color: var(--color-font-primary);
  font-size: 2.4rem;
  font-weight: 700;
  line-height: 1em;
}
.list {
  margin-top: 6rem;
}

.slider {
  margin: 0 auto;
  width: calc(100% - 8rem);
  @media (min-width: 992px) {
    display: grid;
    grid-auto-flow: column;
    justify-content: space-between;
  }
}
.custom-arrow {
  position: absolute;
  top: 50%;
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
  transform: translate(-100%, -100%);
}
.custom-arrow-next {
  right: 0;
  transform: translate(100%, -100%);
}
</style>