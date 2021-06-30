<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <tab-control
      ref="tabcontrol1"
      :titles="['流行', '新款', '精选']"
      @tabclick="tabclick"
      class="tabcontry"
      v-show="istabfixed"
    ></tab-control>
    <scroll
      class="content"
      ref="scroll"
      :propetype="3"
      @scroll="contentscroll"
      :pull-up-load="true"
      @pullingUp="loadMore"
    >
      <home-swiper
        :banners="banners"
        @swipperimageload="swipperimageload"
      ></home-swiper>
      <home-recommerd-view :recommends="recommends"></home-recommerd-view>
      <feature-view />
      <tab-control
        ref="tabcontrol2"
        :titles="['流行', '新款', '精选']"
        @tabclick="tabclick"
      ></tab-control>
      <goods-list :goods="showgoods"></goods-list>
    </scroll>

    <back-top @click.native="backclick" v-show="isshowbacktop" />
  </div>
</template>

<script>
// 公共组件头部购物车
import NavBar from "components/common/navbar/NavBar.vue";
// 公共组件本项目四个选项下面的图片的标签点击
import TabControl from "components/contents/tabcontrol/TabControl.vue";
//公共组件本项目,四个选项下面的图片的标签点击下面的图片
import GoodsList from "components/contents/goods/GoodsList.vue";
// 滚动插件
import Scroll from "components/common/scroll/Scroll.vue";
//点击回到头部组件
import BackTop from "components/contents/backtop/BackTop.vue";

//轮播图
import HomeSwiper from "./childComps/HomeSwiper.vue";
// 轮播图下面的四个选项
import HomeRecommerdView from "./childComps/HomeRecommerdView.vue";
// 四个选项下面的图片，FeatureView由于是一张图片，写img标签，封装一个组件
import FeatureView from "./childComps/FeatureView.vue";

// home页面网络请求数据
import { getHomeMultiData, getHomeGoods } from "network/home";
//防抖函数
import { debounce } from "components/common/debounce/debounce";

export default {
  name: "Home",
  components: {
    NavBar,
    TabControl,
    HomeSwiper,
    HomeRecommerdView,
    FeatureView,
    GoodsList,
    TabControl,
    Scroll,
    BackTop,
  },
  data() {
    return {
      // result: null,
      banners: null,
      recommends: null,
      currentType: "pop",
      isshowbacktop: false,
      taboffsettop: 0,
      istabfixed: false,
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
    };
  },
  created() {
    // 1.请求多个数据
    this.getHomeMultiData();
    // 2.请求商品数据
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },
  mounted() {
    // 3.监听item中图片是否加载完成
    const refresh = debounce(this.$refs.scroll.refresh, 50);
    this.$bus.$on("itemimgeLoad", () => {
      refresh();
    });
  },
  methods: {
    // 防抖函数
    // debounce(func,delay){
    //   let timer=null

    //   return function(...args){
    //     if(timer) clearTimeout(timer)

    //     timer=setTimeout(()=>{
    //       func.apply(this,args)
    //     },delay)
    //   }

    // },
    swipperimageload() {
      // 获取tabcontry距离顶部的距离
      // console.log(11);
      this.taboffsettop = this.$refs.tabcontrol2.$el.offsetTop;
      // console.log(this.$refs.tabcontrol.$el.offsetTop);
    },

    //下拉加载更多
    loadMore() {
      // console.log(2222);
      this.getHomeGoods(this.currentType);
      // this.$refs.scroll.scroll.refresh()
    },

    //动态显示向上按钮
    contentscroll(position) {
      //显示向上按钮是否显示
      this.isshowbacktop = -position.y > 1000;
      // 决定tabcontry是否吸顶
      // console.log(this.taboffsettop);
      // console.log(-position);
      this.istabfixed = -position.y > this.taboffsettop;
    },

    //动态判断请求那些图片
    tabclick(index) {
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
          break;
      }
      this.$refs.tabcontrol1.currentIndex = index;
      this.$refs.tabcontrol2.currentIndex = index;
    },
    backclick() {
      this.$refs.scroll.scrollTo(0, 0, 500);
    },

    //网络请求的相关方法
    getHomeMultiData() {
      getHomeMultiData().then((res) => {
        // this.result = res;
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    },
    getHomeGoods(type) {
      let page = this.goods[type].page + 1;
      getHomeGoods(type, page).then((res) => {
        // console.log(res.data.list);
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;

        this.$refs.scroll.finishPullUp();
      });
    },
  },
  computed: {
    showgoods() {
      return this.goods[this.currentType].list;
    },
  },
};
</script>

<style scoped>
#home {
  /* padding-top: 44px; */
  height: 100vh;
  position: relative;
}

.home-nav {
  background-color: var(--color-tint);
  color: #fff;

  /* position: fixed;
  left: 0;
  right: 0;
  top: 0px;
  z-index: 9; */
}
/* .tab-control {
  position: sticky;
  top: 44px;
  z-index: 9;
} */
.content {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 44px;
  overflow: hidden;
}
.tabcontry {
  position: relative;
  z-index: 9;
}
</style>