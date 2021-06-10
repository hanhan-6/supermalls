<template>
  <div id="home">
    <nav-bar>
      <div class="home-nav" slot="center">购物街</div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar.vue'
// import NavBar from '../../components/common/navbar/NavBar.vue'
import {getHomeMultiData} from 'network/home'
export default {
 name: 'Home',
 components:{
   NavBar
 },
 data(){
   return {
     result:null,
     banners:null,
     recommends:null
   }
 },
 created(){
   getHomeMultiData().then(res=>{
     this.result=res;
     console.log(res.data.banner.list);
     this.banners=res.data.banner.list;
    //  console.log(banners);
     this.recommends=res.data.recommend.list;
      // console.log(banners);
      //  console.log(recommends);
   })
 },
}
</script>

<style>
.home-nav{
  background-color: var(--color-tint);
}
</style>