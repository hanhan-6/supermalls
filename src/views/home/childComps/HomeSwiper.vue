<template>
  <swiper>
    <swiper-item v-for="(item, index) in banners" :key="index">
      <!-- :key="item" -->
      <a :href="item.link">
        <img :src="item.image" alt="" @load="imageload" />
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
import { Swiper, SwiperItem } from "components/common/swiper";

export default {
  name: "HomeSwiper",
  components: {
    Swiper,
    SwiperItem,
  },
  data() {
    return {
      isload: false,
    };
  },
  props: {
    banners: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  methods: {
    imageload() {
      if (!this.isload) {
        this.$emit("swipperimageload");
        this.isload = true;
      }
    },
  },
};
</script>

<style>
</style>