<template>
  <div class="tab">
    <div>
      <h4 class="title">{{ title }}</h4>
      <p class="description">{{ description }}</p>
      <div class="list">
        <div class="list__item" v-for="(item, index) in icons" :key="index">
          <img class="g-img-contain" :src="item.image" :alt="item.alt" />
          <span>{{ item.label }}</span>
        </div>
      </div>
      <NuxtLink to="\" class="link">Read more</NuxtLink>
    </div>
    <div>
      <img class="g-img-cover image" :src="image.link" :alt="image.alt" />
    </div>
  </div>
</template>
<script>
export default {
  props: {
    title: String,
    description: String,
    icons: Array,
    image: Object,
  },
};
</script>
<style lang="scss" scoped>
.tab {
  @media (min-width: 768px) {
    display: grid;
    column-gap: 6rem;
    grid-template-columns: 1fr 1fr;
  }
  @media (min-width: 992px) {
    column-gap: 13rem;
    grid-template-columns: 40% 1fr;
  }
}
.title {
  font-size: 3.6rem;
  font-weight: 700;
}
.description {
  margin-top: 3rem;
  font-size: 14px;
  color: var(--color-font-secondary);
  @media (min-width: 992px) {
    font-size: 1.4rem;
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

  font-size: 14px;
  @media (min-width: 992px) {
    font-size: 1.4rem;
  }
}
.image {
  margin-top: 3rem;
  @media (min-width: 768px) {
    margin-top: 0rem;
  }
}
.link {
  margin-top: 4rem;
  width: fit-content;
  padding: 0.8rem 1.6rem;
  display: flex;
  border: 0.1rem solid var(--color-bg-primary);
  border-radius: 1.5rem;

  color: black;
  font-size: 12px;
  line-height: 1em;
  text-decoration: unset;
  @media (min-width: 992px) {
    font-size: 1.2rem;
  }
}
</style>