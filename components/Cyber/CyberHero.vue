   <template>
  <section class="g-container g-section section">
    <div class="section__header">
      <h2 class="g-title-primary subtitle">Blog</h2>
      <div class="list">
        <button
          class="option"
          :class="{ active: item.value === currentOption }"
          v-for="(item, index) in options"
          :key="index"
          @click="currentOption = item.value"
        >
          {{ item.title }}
        </button>
      </div>
    </div>
    <h1 class="g-title-primary title">
      Cyber Resilience & Security-by-Design: The New Approach to Cybersecurity
    </h1>
  </section>
</template>
<script>
export default {
  data() {
    return {
      currentOption: 1,
      options: [
        { title: "Latest publications", value: 1 },
        { title: "Popular publications", value: 2 },
        { title: "Collections", value: 3 },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
.section {
  position: relative;
  padding-top: 21.6rem;
  padding-bottom: 18rem;
  background-image: url("~assets/images/blog/bg-hero.jpg");
  background-size: cover;
  @media (min-width: 992px) {
    padding-bottom: 36rem;
  }
}
.section__header {
  padding-bottom: 6.4rem;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: column;
  border-bottom: 0.1rem solid rgba(255, 255, 255, 0.2);
  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
  }
}
.subtitle {
  font-size: 4.8rem;
  color: var(--color-font-primary);
}
.title {
  margin-top: 12rem;
  color: var(--color-font-primary);
  @media (max-width: 768px) {
    margin-top: 6rem;
    font-size: 3rem;
  }
}
.option {
  color: var(--color-font-primary);
  font-size: 1.6rem;

  transition: color ease-in 0.3s;
  background-color: unset;
  border: none;
  cursor: pointer;

  &:focus {
    outline: none;
  }
}
.option.active {
  color: var(--color-font-accent);
}
.list {
  margin-top: 3rem;
  display: grid;
  gap: 1.6rem 8.8rem;
  justify-items: left;

  @media (min-width: 768px) {
    grid-auto-flow: column;
  }
}
</style>
