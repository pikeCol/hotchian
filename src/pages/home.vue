<template>
  <div class="header">
    <mt-swipe :auto="4000" class="swiper-wrap">
      <mt-swipe-item>1</mt-swipe-item>
      <mt-swipe-item>2</mt-swipe-item>
      <mt-swipe-item>3</mt-swipe-item>
    </mt-swipe>
    <div>
      <ul>
        <li><router-link to="/home/page1">测试1</router-link></li>
        <li><router-link to="/home/page2">测试2</router-link></li>
        <li><router-link to="/home/page3">测试3</router-link></li>
      </ul>
    </div>
    <div class="page-content">
      <router-view></router-view>
    </div>
    <Footer></Footer>  
  </div>
</template>

<script>
  import Vue from 'vue'
  import Footer from '../components/Footer'
  import { Swipe, SwipeItem } from 'mint-ui'
  Vue.component(Swipe.name, Swipe)
  Vue.component(SwipeItem.name, SwipeItem)

  export default {
    name:'Home',
    data(){
      return{
        
      }
    },
    methods:{
      
    },
    mounted(){
      console.log(this.$store)
    },
    components:{
      Footer
    }
  }
</script>

<style scoped lang="less">
  @import '../../static/css/base.less';
  .header {
    width: 100%;
    height: 3.125rem;
  }
  .swiper-wrap {
    width: 100%;
    text-align: center;

  }
  .page-content {
    max-width: 540px;
    margin: 0 auto;
  }
 


</style>
