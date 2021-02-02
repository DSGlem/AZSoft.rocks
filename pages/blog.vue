<template>
  <main>
    <BlogHero />
    <BlogSection v-for="(item, index) in sections" :key="index" v-bind="item" />
    <BaseContact />
  </main>
</template>
<script>
export default {
  head: {
    title: "Blog page",
    meta: [
      {
        hid: "description",
        name: "description",
        content: "Blog description",
      },
    ],
  },
  computed: {
    sections() {
      return this.$store.state.blog.sections;
    },
  },
};
</script>