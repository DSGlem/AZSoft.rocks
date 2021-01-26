<template>
  <button
    class="tab"
    :class="{ active: currentTab === component }"
    @click="$emit('change', component)"
  >
    <slot></slot>
  </button>
</template>
<script>
export default {
  props: {
    component: String,
    currentTab: String,
  },
};
</script>
<style lang="scss" scoped>
.tab {
  position: relative;
  padding: 0;
  font-size: 1.8rem;

  color: black;
  transition: color ease-in-out 0.3s;

  border: none;
  background-color: unset;

  &:focus {
    outline: none;
  }
  &:hover {
    color: var(--color-font-accent);
  }
  &:after,
  &:before {
    opacity: 0;
    transition: opacity ease-in 0.3s;
  }

  &:after {
    content: "";
    margin: 3rem auto 0 auto;

    width: 0;
    display: block;

    border-left: 0.8rem solid transparent;
    border-right: 0.8rem solid transparent;

    border-top: 1.1rem solid var(--color-font-accent);
  }
  &::before {
    content: "";
    position: absolute;
    bottom: 0;

    display: block;
    width: 100%;
    height: 0.5rem;
    background-color: var(--color-font-accent);

    transform: translateY(-1.1rem);
  }
}
.tab.active {
  &:after,
  &:before {
    opacity: 1;
  }
}
</style>