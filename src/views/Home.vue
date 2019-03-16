<template>
  <div class="home">
    <Galery :items="items" :flickityOptions="flickityOptions"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Galery from '@/components/Galery.vue';
import { config } from '../config';

export default {
  name: 'home',
  components: {
    Galery,
  },
  data() {
    return {
      items: [],
      flickityOptions: {
        // any options from Flickity can be used
        pageDots: true,
        prevNextButtons: true,
        resize: true,
        adaptiveHeight: true,
        lazyLoad: 2,
      },
    };
  },
  mounted() {
    this.$http.get('list').then((res) => {
      // get only 10 random items from the picsum list photos
      const randomIndex = Array.from({ length: 10 }, () => Math.floor(Math.random() * 100));

      const receivedData = res.data;
      const selectedItems = [];

      for (let i = 0; i < res.data.length; i += 1) {
        if (randomIndex.includes(i)) {
          const item = receivedData[i];
          item.url_img = `${config.apiUrl + item.width / 5}/${item.height / 5}/?image=${item.id}`;
          selectedItems.push(item);
        }
      }

      this.items = selectedItems;
    });
  },
};
</script>
