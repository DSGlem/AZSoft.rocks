<template>
  <section class="g-container g-section section">
    <h2 class="g-title-secondary">Snapshots</h2>
    <div class="list">
      <BaseCard
        v-for="(item, index) in snapshots"
        :key="index"
        v-bind="item"
      ></BaseCard>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      snapshots: [
        {
          image: {
            link: require("~/assets/images/backend-case/snapshot-1.jpg"),
            alt: "snapshot image",
          },
          link: {
            to: "/",
            text: "Challenge",
          },
          description:
            "Manual trailer check-in/out processes; traditional and error-prone audit functions; increased bottlenecks in achieving lean manufacturing",
        },
        {
          image: {
            link: require("~/assets/images/backend-case/snapshot-2.jpg"),
            alt: "snapshot image",
          },
          link: {
            to: "/",
            text: "Solutions",
          },
          description:
            "Built a fully integrated self-service kiosk application to streamline  check-in/out processes; developed asset and process audit automation apps to help employees deliver a higher-quality audit opinion",
        },
        {
          image: {
            link: require("~/assets/images/backend-case/snapshot-3.jpg"),
            alt: "snapshot image",
          },
          link: {
            to: "/",
            text: "Benefits",
          },
          description:
            "Digitized check-in/out operations; enabled smart audits; accelerated speed-to-service; improved productivity",
        },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
.section {
  background-image: url("~assets/images/back-end/bg.jpg");
  background-size: cover;
}
.list {
  margin-top: 6.5rem;

  display: grid;
  gap: 3rem;
  grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
}
</style>