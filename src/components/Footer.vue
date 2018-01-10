<template>
  <div class="page-foot">
    <mt-tabbar v-model="selected">
      <mt-tab-item id="外卖">
        <img slot="icon" src="../assets/logo.png">
        <router-link to="/home/page1">首页</router-link>
      </mt-tab-item>
      <mt-tab-item id="订单">
        <img slot="icon" src="../assets/logo.png">
        <router-link to="/computingPower">算了</router-link>
      </mt-tab-item>
      <mt-tab-item id="我的">
        <img slot="icon" src="../assets/logo.png">
        <router-link to="/me">我的</router-link>
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
  import Vue from 'vue'
  import { Tabbar, TabItem } from 'mint-ui'

  Vue.component(Tabbar.name, Tabbar)
  Vue.component(TabItem.name, TabItem)
  export default {
    name:'Footer',
    data(){
      return{
        selected:true
      }
    },
    mounted(){
    }
  }
</script>

<style scoped lang="less">
  @import '../../static/css/base.less';
  .page-foot {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
  }
</style>
