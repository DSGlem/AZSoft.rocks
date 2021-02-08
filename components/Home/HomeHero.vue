<template>
  <section class="g-container g-section section">
    <div class="logo">
      <img
        class="g-img-contain"
        src="~/assets/images/icons/logo.svg"
        alt="AZSoft logo"
      />
    </div>

    <client-only>
      <HomeNav v-if="isMobile" class="nav" />
      <HomeDesktopNav v-else class="nav" />
    </client-only>

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

export default {
  data() {
    return {
      window: {
        width: 0,
        height: 0,
      },
    };
  },
  computed: {
    isMobile() {
      if (process.client && this.window.width < 768) {
        return true;
      }
      return false;
    },
  },
  created() {
    if (process.client) {
      window.addEventListener("resize", this.handleResize);
      this.handleResize();
    }
  },
  destroyed() {
    if (process.client) {
      window.removeEventListener("resize", this.handleResize);
    }
  },
  methods: {
    handleResize() {
      if (process.client) {
        this.window.width = window.innerWidth;
        this.window.height = window.innerHeight;
      }
    },
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

.nav {
  margin-top: 10rem;
  position: relative;
  width: 70%;
  max-width: 68.2rem;
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