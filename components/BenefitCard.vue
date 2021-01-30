<template>
  <div class="g-description-primary benefit">{{ text }}</div>
</template>
<script>
export default {
  props: {
    text: String,
  },
};
</script>

<style lang="scss" scoped>
.benefit {
  padding: 4rem 4.4rem;
  border: 0.1rem solid rgba(255, 255, 255, 0.3);
  transition: background-color ease-in 0.3s, border-color ease-in 0.3s;
  &:hover {
    background-color: var(--color-font-accent);
    border-color: transparent;
  }
}
</style>