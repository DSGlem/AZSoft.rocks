<template>
  <main class="cyber">
    <CyberHero />
    <CyberContent />
    <CyberFooter />
  </main>
</template>
<script>
export default {
  head: {
    title: "Cyber page",
    meta: [
      {
        hid: "description",
        name: "description",
        content: "Cyber description",
      },
    ],
  },
};
</script>
<style lang="scss" scoped>
.cyber {
  background-color: #f6f6f6;
}
</style>
