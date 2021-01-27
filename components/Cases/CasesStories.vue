<template>
  <section class="g-container g-section section">
    <h1 class="g-title-primary title">Success Stories</h1>
    <div class="options">
      <button
        class="options__item"
        :class="{ active: item.value === currentFilter }"
        v-for="(item, index) in filterOptions"
        :key="index"
        @click="currentFilter = item.value"
      >
        {{ item.name }}
      </button>
    </div>
    <div class="list">
      <div v-for="(item, index) in filteredList" :key="index">
        <CaseCard v-bind="item"> </CaseCard>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      currentFilter: 0,
      filterOptions: [
        {
          name: "Backend development",
          value: 0,
        },
        {
          name: "Frontend development",
          value: 1,
        },
        {
          name: "Design",
          value: 2,
        },
        {
          name: "Application development",
          value: 3,
        },
      ],
    };
  },
  computed: {
    filteredList() {
      return this.$store.state.cases.list;
    },
  },
};
</script>
<style lang="scss" scoped>
.section {
  padding-top: 21.2rem;
  display: grid;
  row-gap: 6rem;

  color: var(--color-font-primary);
  background-image: url("~assets/images/cases/bg.jpg");
  background-size: cover;

  @media (min-width: 992px) {
    row-gap: 12rem;
  }
}
.options {
  display: grid;
  row-gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(27rem, 1fr));
}
.options__item {
  position: relative;
  padding: 0 4.8rem;

  color: var(--color-font-primary);
  font-size: 1.8rem;
  font-weight: 600;
  line-height: 1em;
  text-align: left;
  text-decoration: none;

  border: none;
  background-color: unset;
  cursor: pointer;

  transition: color ease-in 0.3s, border-width ease-in 0.3s;

  &:focus {
    outline: none;
  }
  &:after {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 0.3rem;
    height: 100%;
    background-color: currentColor;
    transition: width ease-in 0.3s;
  }
}
.options__item.active {
  color: var(--color-font-accent);
  &:after {
    width: 0.6rem;
  }
}

.list {
  display: grid;
  gap: 3rem;
  grid-template-columns: repeat(auto-fill, minmax(33rem, 1fr));
}
</style>