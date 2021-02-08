<template>
  <nav class="menu" :class="{ show: isOpen }">
    <div class="menu-wrapper">
      <div class="nav-list">
        <NuxtLink class="link nav-list__link" to="/about">About</NuxtLink>
        <NuxtLink class="link nav-list__link" to="/cases"
          >Success stories</NuxtLink
        >
        <NuxtLink class="link nav-list__link" to="/blog">Blog</NuxtLink>
        <NuxtLink class="link nav-list__link" to="/contact"
          >Contact us</NuxtLink
        >
      </div>
      <hr class="separator" />
      <div class="list">
        <h6 class="list__header">Services</h6>

        <NuxtLink class="link list__link" to="/back-end"
          >Backend development</NuxtLink
        >
        <NuxtLink class="link list__link" to="/front-end"
          >Frontend development</NuxtLink
        >
        <NuxtLink class="link list__link" to="/design">Design</NuxtLink>
        <NuxtLink class="link list__link" to="/apps"
          >App’s development</NuxtLink
        >
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  props: {
    isOpen: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
.menu {
  position: fixed;
  z-index: -1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  display: grid;

  background: center / cover no-repeat url("~assets/images/bg-menu.jpg");

  opacity: 0;
  transition: opacity ease-in 0.3s;

  pointer-events: none;
}
.menu-wrapper {
  // offset for iPhone 5/SE
  position: relative;
  top: 4rem;

  display: grid;
  grid-auto-flow: row;
  justify-content: center;
  align-self: center;
  gap: 5rem 10rem;

  color: var(--color-font-primary);

  transform: translate(2.6rem, -2.6rem);

  transition: transform ease-in 0.3s;

  @media (min-width: 992px) {
    grid-auto-flow: column;
  }
}
.menu.show {
  pointer-events: unset;
  opacity: 1;
  .menu-wrapper {
    transform: translate(0, 0);
  }
}
.separator {
  width: 100%;
  height: 0.1em;

  border: none;
  background-color: var(--color-lines-secondary);

  @media (min-width: 992px) {
    width: 0.1rem;
    height: 100%;
  }
}
.link {
  text-decoration: unset;
  color: inherit;
}

.nav-list,
.list {
  display: grid;
  justify-items: left;
  // color: var(--color-font-primary);
}
.nav-list {
  row-gap: 2rem;
  font-size: 3.6rem;
  line-height: 1em;
  @media (min-width: 992px) {
    row-gap: 5rem;
  }
}
.nav-list__link {
  transition: border-color ease-in 0.3s, color ease-in 0.3s;
  border-bottom: 0.1rem solid transparent;
  &:hover {
    color: var(--color-font-accent);
    border-bottom: 0.1rem solid var(--color-font-accent);
  }
}

.list {
  row-gap: 2rem;
  font-size: 1.8rem;
  font-weight: 400;
  line-height: 1em;
  @media (min-width: 992px) {
    row-gap: 3rem;
  }
}
.list__header {
  font-size: 4.8rem;
  font-weight: 300;
  line-height: 1.2em;
}
.list__link {
  display: grid;
  align-items: center;
  grid-auto-flow: column;
  gap: 1rem;

  text-decoration: unset;
  color: inherit;

  transition: color ease-in 0.3s;
  &:hover {
    color: var(--color-font-accent);
  }

  &:before {
    content: "";
    display: inline-block;
    width: 1em;
    height: 0.1rem;
    background-color: currentColor;
  }
}
.list__link:first-of-type {
  margin-top: 3rem;
  @media (min-width: 992px) {
    margin-top: 5rem;
  }
}
</style>