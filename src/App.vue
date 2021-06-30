<template>
  <div id="app">
    <main-tab-bar></main-tab-bar>
    <keep-alive>
    <router-view></router-view>

    </keep-alive>
  </div>
</template>

<script>
// 公共组件本项目底部导航栏
import MainTabBar from "components/contents/maintabbar/MainTabBar.vue";

export default {
  name: "App",
  components: {
    MainTabBar,
  },
};
</script>

<style>
@import "assets/css/base.css";
</style>
