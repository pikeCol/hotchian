<template>
  <div class="page-foot">
    <mt-tabbar v-model="selected" @click.native="tab(selected)">
      <mt-tab-item id="/home">
        <img slot="icon" src="../assets/logo.png">
        首页
      </mt-tab-item>
      <mt-tab-item id="/computingPower">
        <img slot="icon" src="../assets/logo.png">
        算了
      </mt-tab-item>
      <mt-tab-item id="/me">
        <img slot="icon" src="../assets/logo.png">
        我的
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
  import Vue from 'vue'
  import { Tabbar, TabItem } from 'mint-ui'
  import { mapGetters } from 'vuex'

  Vue.component(Tabbar.name, Tabbar)
  Vue.component(TabItem.name, TabItem)
  export default {
    name:'Footer',
    data(){
      return{
        
      }
    },
    computed: {
      selected:{
        get(){
          console.log(this.$store.state.home.selected)
          return this.$store.state.home.selected
        },
        set(val) {
          this.$store.commit('updateSelect',val)
        }
      }
    },
    methods:{
      tab:function(selected){
        this.$store.dispatch('tab',selected)
        this.$router.push({path:selected})
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
