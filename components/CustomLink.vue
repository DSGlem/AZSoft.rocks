<template>
  <NuxtLink :to="to" class="link">
    <svg
      class="icon"
      viewBox="0 0 41 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M40.3536 4.35355C40.5488 4.15829 40.5488 3.84171 40.3536 3.64645L37.1716 0.464466C36.9763 0.269204 36.6597 0.269204 36.4645 0.464466C36.2692 0.659728 36.2692 0.976311 36.4645 1.17157L39.2929 4L36.4645 6.82843C36.2692 7.02369 36.2692 7.34027 36.4645 7.53553C36.6597 7.7308 36.9763 7.7308 37.1716 7.53553L40.3536 4.35355ZM0 4.5H40V3.5H0V4.5Z"
        fill="#000"
      />
    </svg>
    <span class="text"><slot></slot></span>
  </NuxtLink>
</template>
<script>
export default {
  props: {
    to: String,
  },
};
</script>
<style lang="scss" scoped>
.link {
  width: fit-content;
  display: grid;
  grid-template-areas: "icon text";
  grid-template-columns: 2rem auto;
  column-gap: 1.4rem;
  grid-auto-flow: column;
  align-items: center;

  text-decoration: unset;
  font-size: 12px;
  color: #666;

  transition: color ease-in 0.3s;

  &:hover {
    color: var(--color-font-accent);
    .icon {
    }
  }
  @media (min-width: 992px) {
    font-size: 1.2rem;
  }
}
.text {
  grid-area: text;
}
.icon {
  grid-area: icon;
  width: 100%;
  height: 100%;
  object-fit: contain;
  path {
    fill: currentColor;
    transition: fill ease-in 0.3s;
  }
  //   @media (min-width: 992px) {
  //     width: 4rem;
  //     height: 1.8rem;
  //   }
}
</style>