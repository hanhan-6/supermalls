<template>
  <div id="app">
    <tab-bar>
      <tab-bar-item>
        <img slot="item-icon" src="./assets/images/tabbar/home.svg" alt="" />
        <img slot="item-icon-active" src="./assets/images/tabbar/home_active.svg" alt="" />
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item>
        <img slot="item-icon" src="./assets/images/tabbar/category.svg" alt="" />
        <img slot="item-icon-active" src="./assets/images/tabbar/category_active.svg" alt="" />
        
        <div slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item>
        <img slot="item-icon" src="./assets/images/tabbar/shopcart.svg" alt="" />
        <img slot="item-icon-active" src="./assets/images/tabbar/shopcart_active.svg" alt="" />
        
        <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item>
        <img slot="item-icon" src="./assets/images/tabbar/profile.svg" alt="" />
        <img slot="item-icon-active" src="./assets/images/tabbar/profile_active.svg" alt="" />
       
        <div slot="item-text">我的</div>
      </tab-bar-item>
    </tab-bar>
    <router-view></router-view>
  </div>
</template>

<script>
import TabBar from "./views/TabBar.vue";
import TabBarItem from "./views/TabBarItem.vue";

export default {
  name: "App",
  components: {
    TabBar,
    TabBarItem,
  },
};
</script>

<style>
</style>
