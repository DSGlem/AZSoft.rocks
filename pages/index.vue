<template>
  <main>
    <HomeHero />
    <HomeServices />
    <CaseCarousel />
    <HomeBlog />
    <HomeAbout />
    <!-- <HomeTeam /> -->
    <BaseContact />
  </main>
</template>

<script>
export default {
  head: {
    title: "Home page",
    meta: [
      {
        hid: "description",
        name: "description",
        content: "Home page description",
      },
    ],
  },
  layout: "home",
};
</script>

<style>
</style>
