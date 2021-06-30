<template>
<div class="wrapper" ref="wrapper">
  <div class="content">
   <slot></slot>
  </div>
  </div>
</template>

<script>
import BScroll, { PullUpLoad } from 'better-scroll'
export default {
  name: "BackTop",
  data(){
      return {
          scroll:null
      }
  },
  props:{
      propetype:{
          type:Number,
          default:0
      },
        pullUpLoad:{
          type:Boolean,
          default:false
      }
  },
  mounted(){
      //1 常见scroll
      this.scroll=new BScroll(this.$refs.wrapper,{
        // scrollY: true,
        click: true,
        //自定义触发事件
        probeType:this.propetype,
        //自定义是否可以上拉加载更多
        pullUpLoad:this.pullUpLoad,
        
      })
      // 2监听滚动位置
      if(this.propetype==2||this.propetype==3){
         this.scroll.on('scroll',(position)=>{
        //   console.log(position);
          this.$emit('scroll',position)
      })
      }
     
      // 3下拉加载更多
      this.scroll.on('pullingUp',()=>{
          // console.log(111)
          // console.log(position);
          this.$emit('pullingUp')
      })
  },
  methods:{
      scrollTo(x,y,time=300){
          this.scroll&&this.scroll.scrollTo(x,y,time);
      },
      finishPullUp(){
          this.scroll&&this.scroll.finishPullUp()
      },
      refresh(){
        this.scroll&&this.scroll.refresh()
      // console.log(1111111111);

      }
  }
};
</script>

<style>

</style>