<template>
  <div >
    co
    <Footer></Footer>
  </div>
</template>

<script>
  import Vue from 'vue'
  import Footer from '../components/Footer'

  export default {
    name:'computingPower',
    data(){
      return{
        msg:''
      }
    },
    mounted(){
    },
    components:{
      Footer
    }
  }
</script>

<style scoped lang="less">
  @import '../../static/css/base.less';

</style>
