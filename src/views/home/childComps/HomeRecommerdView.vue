<template>
<div class="recommerd">   
  <div v-for="(item,index) in recommends" :key="index"
  class="recommends-item" >
        <!-- :key="item" -->
      <a :href="item.link">
        <img :src="item.image" alt="" />
        <div>{{item.title}}</div>
      </a>
    </div>
</div>
</template>

<script>

export default {
  name: "HomeRecommerdView",
  props:{
      recommends:{
          type:Array,
          default(){
              return []
          }
      }
  }
};
</script>

<style>
.recommerd{
  display:flex;
  width: 100%;
  text-align: center;
  font-size: 12px;
  padding: 10px 0 20px;
}
.recommends-item{
  flex:1
}
.recommends-item img{
  width: 70px;
  height: 65px;
  margin-bottom: 10px;
}
</style>