<template>
  <div class="galery">
    <Flickity class="carousel" ref="flickity"
      v-images-loaded="imgsLoaded"
      :options="flickityOptions">
      <div class="cell" :key="item.id" v-for="item in items">
        <img :data-flickity-lazyload="item.url_img"/>
      </div>
    </Flickity>
  </div>
</template>

<script>
import imagesLoaded from 'vue-images-loaded';
import Flickity from 'vue-flickity';

export default {
  name: 'Galery',
  components: {
    Flickity,
  },
  directives: { imagesLoaded },
  props: {
    items: {
      type: Array,
      default: () => [],
    },
    flickityOptions: {
      type: Object,
      default: () => {},
    },
  },
  updated() {
    this.$refs.flickity.rerender();
  },
  methods: {
    imgsLoaded() {
      const flickityInstance = this.$refs.flickity;
      flickityInstance.reloadCells();
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .carousel {
    height: 80vh;
  }

  .cell {
    width: 100%;
    height: 100%;
    margin-right: 1em;
    background: $grey;

    img {
      width:100%;
      position: relative;
      display: block;
      margin: 0 auto;
      top: 50%;
      transform: translateY(-50%)
    }
  }
</style>
