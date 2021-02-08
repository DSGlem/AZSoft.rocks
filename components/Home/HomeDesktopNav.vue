<template>
  <nav class="navigation">
    <NuxtLink class="navigation__item g-link" to="/about">About us</NuxtLink>
    <span class="navigation__item dropdown g-link">
      <span class="dropdown-label">Services</span>
      <span class="dropdown-body">
        <NuxtLink class="dropdown-body__item g-link" to="/back-end"
          >Backend development</NuxtLink
        >
        <NuxtLink class="dropdown-body__item g-link" to="/back-end"
          >Frontend development</NuxtLink
        >
        <NuxtLink class="dropdown-body__item g-link" to="/back-end"
          >Design</NuxtLink
        >
        <NuxtLink class="dropdown-body__item g-link" to="/back-end"
          >App’s development</NuxtLink
        >
      </span>
    </span>
    <NuxtLink class="navigation__item g-link" to="/stories"
      >Success stories</NuxtLink
    >
    <NuxtLink class="navigation__item g-link" to="/blog">Blog</NuxtLink>
    <NuxtLink class="navigation__item g-link" to="/contact"
      >Contact us</NuxtLink
    >
  </nav>
</template>

<style lang="scss" scoped>
.navigation {
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.navigation__item {
  font-size: 18px;
  font-weight: 400;
  @media (min-width: 992px) {
    font-size: 1.8rem;
  }
}
.dropdown {
  position: relative;

  &:hover {
    .dropdown-body {
      opacity: 1;
      transform: translate(-50%, 0%);
      pointer-events: all;
    }
    .dropdown-label {
      &:after {
        transform: rotate(-135deg);
      }
    }
  }
}
.dropdown-label {
  display: grid;
  grid-auto-flow: column;
  column-gap: 1rem;
  align-items: center;
  text-decoration: unset;
  color: inherit;
  &:after {
    content: "";
    display: block;
    width: 5px;
    height: 5px;

    color: inherit;

    border-right: 1px solid currentColor;
    border-bottom: 1px solid currentColor;
    transform: rotate(45deg);

    transition: transform ease-in-out 0.3s;

    @media (min-width: 992px) {
      width: 0.5rem;
      height: 0.5rem;
      border-width: 0.1rem;
    }
  }
}
.dropdown-body {
  position: absolute;
  top: 100%;
  left: 50%;

  width: max-content;
  display: grid;
  margin-top: 1rem;
  row-gap: 0.5rem;

  opacity: 0;
  transform: translate(-50%, -20%);
  transition: opacity ease-in 0.3s, transform ease-in 0.3s;

  pointer-events: none;
}
.dropdown-body__item {
  display: block;
  font-size: 0.7em;
}
</style>