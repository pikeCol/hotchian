<template>
  <ul
    v-infinite-scroll="loadMore"
    infinite-scroll-disabled="loading"
    infinite-scroll-distance="10">
    <li class="header" v-for="item in list">{{ item }}</li>
  </ul>
</template>

<script>
  import Vue from 'vue'
  import { InfiniteScroll } from 'mint-ui';
  Vue.component(InfiniteScroll)
  export default {
    name:'Page1',
    data(){
      return{
        list:[1,2,3,4,5,6,7,8,9,10]
      }
    },
    methods:{
      loadMore() {
        this.loading = true;
        setTimeout(() => {
          let last = this.list[this.list.length - 1];
          for (let i = 1; i <= 10; i++) {
            this.list.push(last + i);
          }
          this.loading = false;
        }, 2500);
      }
    },
    mounted(){
      console.log(this.$store)
    }
  }
</script>

<style scoped lang="less">
  @import '../../static/css/base.less';
  .header {
    height: 3.125rem;
  }
  


</style>
