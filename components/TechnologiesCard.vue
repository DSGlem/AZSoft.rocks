<template>
  <div class="card">
    <h6 class="title">{{ title }}</h6>
    <p class="description">{{ description }}</p>
    <div class="icon">
      <slot></slot>
    </div>
    <NuxtLink to="/" class="link hover-animation">Read more</NuxtLink>
  </div>
</template>
<script>
export default {
  props: {
    title: String,
    description: String,
  },
};
</script>

<style lang="scss" scoped>
.card {
  padding: 5.2rem 2rem 3rem;

  display: grid;
  gap: 2rem 4rem;
  grid-template-columns: minmax(auto, 7rem) minmax(auto, 32rem);
  justify-content: center;
  align-items: start;

  background-color: var(--color-bg-primary);

  border: 5px solid var(--color-bg-primary);

  color: var(--color-font-primary);
  font-size: 1.8rem;
  font-weight: 400;
  line-height: 1em;

  transition: background-color ease-in 0.3s, padding ease-in 0.3s;

  @media (min-width: 992px) {
    padding: 5.2rem 7rem 3rem;
  }

  &:hover {
    // padding: 6rem 7rem 10rem;
    padding-bottom: 5rem;
    color: unset;
    background-color: var(--color-bg-secondary);

    .hover-animation {
      opacity: 1;
    }
    .icon {
      path {
        fill: var(--color-bg-primary);
      }
    }
  }
}
.hover-animation {
  opacity: 0;
  transition: opacity ease-in 0.3s;
}
.title {
  font-size: 2.4rem;
}
.description {
  font-size: 1.8rem;
}
.title,
.description {
  transition: color ease-in 0.3s;
}

.link {
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
.icon {
  grid-column: 1/2;
  grid-row: 1/4;
  path {
    transition: fill ease-in 0.3s;
  }
}
</style>

