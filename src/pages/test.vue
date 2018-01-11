<template>
  <div >
    <p class="test">{{msg}}</p>
    <p>{{count}}</p>
    <p @click="add()">addd</p>
    <p @click="add()">toast</p>
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
    computed: {
      ...mapGetters({
        count: 'count'
      })
    },
    methods:{
      add(){
        this.$store.dispatch('add')
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



<template>
  <div class="">
    <mt-field label="邮箱" state="success" v-model="email"></mt-field>
    <mt-field label="手机号" placeholder="请输入手机号" type="tel" v-model="phone"></mt-field>
    <div class="cneter">
      <mt-button type="primary" @click.native="submit">primary</mt-button>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue'
  import { Field,Button } from 'mint-ui';
  Vue.component(Field.name, Field);
  Vue.component(Button.name, Button);
  export default {
    name:'page1',
    data(){
      return{
        email:'',
        phone:''
      }
    },
    methods:{
      submit:function(){
        console.log(this.email)
      }
    },
    mounted(){
    }
  }
</script>

<style scoped lang="less">
  @import '../../static/css/base.less';
  .cneter {
    text-align: center;
  }
  


</style>
