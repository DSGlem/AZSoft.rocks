<template>
  <section class="g-container g-section section">
    <h2 class="g-title-secondary">Business Benefits</h2>
    <div class="list">
      <BenefitCard
        v-for="(item, index) in list"
        :key="index"
        :text="item"
      ></BenefitCard>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      list: [
        "Increased ease and speed of check-in/out processes",
        "Streamlined and accelerated shop floor performance",
        "Enabled optimal experiences for trailer owners and drivers",
        "Transformed audit quality",
        "Improved employee efficiency",
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
.section {
  color: var(--color-font-primary);
  background-image: url("~assets/images/backend-case/bg-benefits.jpg");
  background-size: cover;
}
.list {
  margin-top: 9rem;
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-auto-rows: minmax(20rem, 1fr);
}
</style>