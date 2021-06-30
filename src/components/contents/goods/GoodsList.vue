<template>
 <div class="good-list">
     
     <goods-list-item v-for="item in goods"  :goods-item="item">

     </goods-list-item>
 </div>
</template>

<script>
import GoodsListItem from './GoodsListItem.vue'

export default {
  name: "GoodsList",
  props:{
      goods:{
          type:Array,
          default(){
              return []
          }
      }
  },
  components:{
      GoodsListItem
  }
};
</script>

<style>
.good-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    background-color: var(--color-background);

    padding: 2px;
  }

</style>