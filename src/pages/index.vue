<template>
  <div >
    <p class="test">{{msg}}</p>
  </div>
</template>

<script>
  import Vue from 'vue'
  import { WechatPlugin, AjaxPlugin } from 'vux'
  import { mapGetters } from 'vuex'
  Vue.use(WechatPlugin)
  Vue.use(AjaxPlugin)
  export default {
    name:'Index',
    data(){
      return{
        msg:'HelloWorld'
      }
    },
    mounted(){
      console.log(this.$store)
    }
  }
</script>

<style scoped lang="less">
  @import '../../static/css/base.less';

  .test {
    .font-size(20px)
  }


</style>
