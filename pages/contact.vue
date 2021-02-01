<template>
  <main class="contact-section">
    <ContactHero />
  </main>
</template>
<script>
export default {
  head: {
    title: "Contact page",
    meta: [
      {
        hid: "description",
        name: "description",
        content: "Contact description",
      },
    ],
  },
};
</script>
<style lang="scss" scoped>
.contact-section {
  display: flex;
}
</style>