<template>
  <div class="employee">
    <div class="image">
      <img :src="image.link" :alt="image.alt" class="g-img-cover" />
    </div>
    <h6 class="title">{{ fullName }}</h6>
    <p class="description">{{ position }}</p>
  </div>
</template>
<script>
export default {
  props: {
    image: Object,
    fullName: String,
    position: String,
  },
};
</script>
<style lang="scss" scoped>
.employee {
  //   display: grid;
  //   grid-template-columns: 17rem;
  //   grid-template-rows: 17rem auto auto;

  text-align: center;
}
.image {
  margin: 0 auto;
  $width: 17rem;
  width: $width;
  height: $width;
}

.title {
  margin-top: 3rem;

  font-size: 16px;
  font-weight: 600;
  line-height: 1em;
  @media (min-width: 992px) {
    font-size: 1.6rem;
  }
}
.description {
  margin-top: 1rem;

  font-size: 12px;
  line-height: 1.16em;
  color: #c4c4c4;

  @media (min-width: 992px) {
    font-size: 1.2rem;
  }
}
</style>