<template>
  <section class="g-container g-section section">
    <div>
      <h2 class="g-title-secondary title">
        Backend<br />
        Development<br />
        Services
      </h2>
      <h4 class="g-subtitle subtitle">
        Unlock Your Digital Core transformation
      </h4>
      <p class="g-description-secondary description">
        If frontend is the body of your application then backend is its brain.
        Backend is the nerve center of an application that controls what happens
        on the server (on-premise and in the cloud). It’s the binding force that
        constantly sends and receives inputs through the frontend and processes
        data on the web page while ensuring that everything is well-harmonized.
      </p>
      <p class="g-description-secondary description">
        Technically speaking, backend development involves writing, optimizing,
        and deploying the intricate server-side code. To do this you need a team
        of experts well versed in writing complex functional protocols, building
        intricate libraries, and developing other deep components, which are
        instrumental in providing architectural consistency and a defined
        operational structure focused on improving performance. If you’re
        looking to strengthen your application landscape with higher-quality
        backend solutions, trust Kellton Tech with your requirements. We provide
        a complete range of backend development services, from building custom
        backend layers to enabling cloud integration, in order to help
        enterprises lead in the digital age.
      </p>
    </div>
    <div class="illustration">
      <div>
        <img
          class="g-img-contain"
          src="~/assets/images/back-end/services.png"
          alt="image with gadgets"
        />
      </div>
      <div class="g-description-secondary list">
        <div class="list__item" v-for="(item, index) in icons" :key="index">
          <img class="g-img-contain" :src="item.image" :alt="item.alt" />
          <span>{{ item.label }}</span>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      icons: [
        {
          image: require("~/assets/images/icons/react.svg"),
          alt: "JS library - React",
          label: "React",
        },
        {
          image: require("~/assets/images/icons/java.svg"),
          alt: "programming language - Java",
          label: "Java",
        },
        {
          image: require("~/assets/images/icons/python.svg"),
          alt: "programming language - Python",
          label: "Python",
        },
        {
          image: require("~/assets/images/icons/jquery.svg"),
          alt: "JS library - jQuery",
          label: "jQuery",
        },
        {
          image: require("~/assets/images/icons/ruby.svg"),
          alt: "programming language - Ruby",
          label: "Ruby",
        },
        {
          image: require("~/assets/images/icons/scala.svg"),
          alt: "Scala",
          label: "Scala",
        },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
.section {
  display: grid;
  gap: 6rem 6rem;
  background-image: url("~assets/images/back-end/bg.jpg");
  background-size: cover;
  @media (min-width: 992px) {
    grid-template-columns: 1fr 40%;
    grid-auto-flow: dense;
  }
  @media (min-width: 1200px) {
    column-gap: 13rem;
  }
}
.subtitle {
  margin-top: 4rem;
  color: var(--color-font-disabled);
}
.description {
  margin-top: 4rem;
  color: var(--color-font-secondary);
}
.description + .description {
  margin-top: 2.6rem;
}
.illustration {
  @media (min-width: 992px) {
    grid-row: 1/2;
    grid-column: 1/2;
  }
}

.list {
  margin-top: 3rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-auto-rows: 3.2rem;
  row-gap: 4rem;
}
.list__item {
  display: grid;
  align-items: center;
  grid-template-columns: 3.2rem 1fr;
  column-gap: 0.8rem;
}
</style>