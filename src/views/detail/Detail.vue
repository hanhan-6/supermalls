<template>
  <div id="detail">
  <div>hah</div>
  </div>
</template>

<script>
// 公共组件本项目底部导航栏
// import MainTabBar from "components/contents/maintabbar/MainTabBar.vue";

export default {
  name: "Detail",
  components: {
  
  },
  data(){
      return {
          iid:null
      }
  },
  cretaed(){
      this.iid=this.$route.params.iid;
   
  },
  mounted(){
         console.log(this.iid);
  }
};
</script>

<style>

</style>
