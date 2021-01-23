<template>
  <header class="container header">
    <div class="logo">
      <img src="@/assets/images/icons/logo.svg" alt="AZSOft.rocks logo" />
    </div>
    <BaseMenu :isOpen="isOpen"></BaseMenu>
    <div class="menu-icon menu-toggle" @click="isOpen = !isOpen">
      <template v-if="isOpen">
        <img
          class="responsive-img"
          src="@/assets/images/icons/close.svg"
          alt="menu's close icon"
        />
      </template>
      <template v-else-if="!isOpen">
        <img
          class="responsive-img"
          src="@/assets/images/icons/open.svg"
          alt="menu's open icon"
        />
      </template>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
    };
  },
};
</script>


<style lang="scss" scoped>
.header-container {
  position: relative;
}
.header {
  position: fixed;
  z-index: 1;
  top: 0;
  width: 100%;
  padding-top: 5.2rem;
  padding-bottom: 5.2rem;

  display: grid;
  grid-auto-flow: column;
  justify-content: space-between;
  align-items: center;
}
.menu-icon {
  width: 2.4rem;
  height: 2.4rem;

  display: grid;
  justify-items: center;
  align-items: center;
}
.logo {
  width: 6.8rem;
}
</style>