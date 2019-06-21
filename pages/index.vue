<template>
  <Scrollama @step-enter="stepEnterHandler">
    <div id="img-container" class="fixed h-screen w-screen">
      <ImageComponent :img-src="index" />
    </div>

    <div class="h-75" data-step="1"></div>
    <div class="h-75" data-step="2"></div>
    <div class="h-75" data-step="3"></div>
    <div class="h-75" data-step="4"></div>
    <div class="h-75" data-step="5"></div>
    <div class="h-75" data-step="6"></div>
    <div class="h-75" data-step="7"></div>
    <div class="h-75" data-step="8"></div>
    <div class="h-75" data-step="9"></div>
    <div class="h-75" data-step="10"></div>
    <div class="h-75" data-step="11"></div>
    <div class="h-75" data-step="12"></div>
    <div class="h-75" data-step="13"></div>
    <div class="h-75" data-step="14"></div>
    <div class="h-75" data-step="15"></div>
    <div class="h-75" data-step="16"></div>
  </Scrollama>
</template>

<script>
import 'intersection-observer'
import Scrollama from 'vue-scrollama'
import ImageComponent from '@/components/ImageComponent'

export default {
  components: {
    Scrollama,
    ImageComponent
  },
  data: () => {
    return {
      index: 1
    }
  },
  methods: {
    stepEnterHandler({ element, index, direction }) {
      this.index = index
    }
  }
}
</script>

<style src="vue-scrollama/dist/vue-scrollama.css"></style>
<style></style>
