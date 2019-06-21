<template>
  <div class="h-full flex items-center justify-center md:mx-8">
    <img :src="require(`@/assets/img/` + imgSrc + `.png`)" />
  </div>
</template>

<script>
export default {
  name: 'ImageComponent',
  props: {
    imgSrc: {
      default: 1,
      type: Number,
      required: true
    }
  }
}
</script>

<style scoped>
img {
  max-height: 500px;
  width: auto;
}
</style>
