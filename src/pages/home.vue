<template>
  <div class="home">
    <mt-swipe :auto="4000" class="swiper-wrap">
      <mt-swipe-item>1</mt-swipe-item>
      <mt-swipe-item>2</mt-swipe-item>
      <mt-swipe-item>3</mt-swipe-item>
    </mt-swipe>
    <ul class="tabbar">
      <li v-for="(item ,index) in pathList">
        <router-link :to="item.url" @click.native="change(item.url)" v-bind:class="[{select:path==item.url}]">{{item.name}}</router-link>
      </li>
    </ul>
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
        path:'',
        pathList:[{
          url:'/home/page1',
          name:'测试1'
        },{
          url:'/home/page2',
          name:'测试2'
        },{
          url:'/home/page3',
          name:'测试3'
        }]
      }
    },
    methods:{
      change(url){
        console.log(url)
        this.path = url
      }
    },
    mounted(){
      this.path = this.$route.path
    },
    components:{
      Footer
    }
  }
</script>

<style lang="less">
  @import '../../static/css/base.less';
  .home {
    width: 100%;
    background:#f2f2f2;
  }
  .swiper-wrap {
    width: 100%;
    text-align: center;
    height: 5.333333rem;
  }
  .page-content {
    max-width: 540px;
    margin: 0 auto;
    margin-bottom: 0.266667rem;
    padding: 0.733333rem 0 0.4rem;
    background: #b5a7a7;
  }
  .select {
    border-radius: 0.266667rem;
    background: #958fb7;
    color: #753636!important;
    display: inline-block;
    width: 86%;
  }
  .tabbar {
    display: flex;
    justify-content: center;
    height: 0.533333rem;
    line-height: 0.53333rem;
    margin: 0.266667rem 0px 0.133333rem;
    li {
      height: 0.4rem;
      width: 3.333rem;
      text-align: center;
      a {
        text-decoration: none;
        color: #000;
      }
    }
  }


</style>
