<template>
  <section class="g-container g-section section">
    <div class="content">
      <h2 class="g-title-secondary">Project Outcomes</h2>
      <p class="text">
        <span class="accent">90%</span> reduction in waiting times for trailers
        <br />
        <span class="accent">40%</span> savings in plant audit costs
      </p>
      <NuxtLink class="btn btn--accent g-text-uppercase btn" to="/"
        >see more cases</NuxtLink
      >
    </div>
    <BaseFeedback class="c-feedback" v-bind="feedback" />
  </section>
</template>
<script>
export default {
  data() {
    return {
      feedback: {
        title: "Customer feedback",
        description:
          "Australian beer company Blowfly has integrated customer feedback into its company’s decision-making process by asking customer “shareholders” to determine marketing plans, product names, street-team strategies and operational decisions usually made by executive committees. In many ways, Blowfly has turned ownership of the company over to customers. ",
      },
    };
  },
};
</script>
<style lang="scss" scoped>
.section {
  display: grid;
  gap: 6rem 13rem;
  @media (min-width: 768px) {
    grid-template-columns: 50% 1fr;
  }
}
.content {
  display: grid;
  gap: 3rem;
  @media (min-width: 768px) {
    gap: 6rem;
  }
}
.accent {
  font-weight: 700;
  color: var(--color-font-accent);
}
.text {
  font-size: 1.8rem;
  line-height: 2em;
  @media (min-width: 992px) {
    font-size: 2.4rem;
  }
}
.btn {
  color: var(--color-font-primary);
  font-size: 1.6rem;
  font-weight: 700;
  line-height: 1em;
  letter-spacing: 0.05em;
}
.c-feedback {
  @media (min-width: 768px) {
    align-self: start;
  }
}
</style>