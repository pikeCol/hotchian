<template>
  <div>
    <a class="card" v-for="item in list">
      <div class="img-wrap">
        <img  v-bind:src="item.img_url" alt="">
      </div>
      <div class="left-content">
        <h3>{{item.title}}</h3>
        <p>{{item.content}}</p>
      </div>
    </a>
  </div>
</template>

<script>
  import imgUrl from '../assets/logo.png'
  export default {
    name:'page1',
    data(){
      return{
        list:[{
          img_url:imgUrl,
          title:'爱上咖啡机',
          content:'圣诞节疯狂垃圾是的路口附近阿拉斯加的法律框架阿斯利康大姐夫减肥了卡世'
        }, {
          img_url:imgUrl,
          title:'爱上咖啡机',
          content:'圣诞节疯狂垃圾是的路口附近阿拉斯加的法律框架阿斯利康大姐夫减肥了卡世'
        }, {
          img_url:imgUrl,
          title:'爱上咖啡机',
          content:'圣诞节疯狂垃圾是的路口附近阿拉斯加的法律框架阿斯利康大姐夫减肥了卡世'
        }, {
          img_url:imgUrl,
          title:'爱上咖啡机',
          content:'圣诞节疯狂垃圾是的路口附近阿拉斯加的法律框架阿斯利康大姐夫减肥了卡世'
        }, {
          img_url:imgUrl,
          title:'爱上咖啡机',
          content:'圣诞节疯狂垃圾是的路口附近阿拉斯加的法律框架阿斯利康大姐夫减肥了卡世'
        }, {
          img_url:imgUrl,
          title:'爱上咖啡机',
          content:'圣诞节疯狂垃圾是的路口附近阿拉斯加的法律框架阿斯利康大姐夫减肥了卡世'
        }]
      }
    },
    methods:{
      
    },
    mounted(){
    }
  }
</script>

<style scoped lang="less">
  @import '../../static/css/base.less';
  .card {
    text-decoration: none;
    display: block;
    height: 2.133333rem;
    width: 100%;
    background: wheat;
    display: flex;
    box-sizing: border-box;
    padding:  0.1rem 0.4rem;
    align-items: center;
    margin-bottom: 0.266667rem;
    padding-top: 0.4rem;
    .img-wrap {
      margin-right: 0.266667rem;
      img {
        width: 1.6rem;
        height: 1.333333rem;
      }
    }
    .left-content {
      h3 {
        font-size: 20px;
      }
    }
  }
  


</style>
