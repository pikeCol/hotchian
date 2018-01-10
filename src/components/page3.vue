<template>
  <div>
    <mt-cell title="标题文字" value="说明文字"></mt-cell>
    <mt-cell title="标题文字" icon="more" value="带 icon"></mt-cell>
    <mt-cell title="标题文字" is-link>
      <span style="color: green">这里是元素</span>
    </mt-cell>
  </div>
</template>

<script>
  import Vue from 'vue'
  import { Cell } from 'mint-ui';
  Vue.component(Cell.name, Cell);
  export default {
    name:'Page1',
    data(){
      return{
        
      }
    },
    methods:{
      
    },
    mounted(){
      console.log(this.$store)
    }
  }
</script>

<style scoped lang="less">
  @import '../../static/css/base.less';
  .header {
    display: flex;
    width: 100%;
    height: 3.125rem;
    background: wheat
  }
  


</style>
