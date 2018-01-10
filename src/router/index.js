import Vue from 'vue'
import Router from 'vue-router'
// import Index from '@/pages/Index'

Vue.use(Router)

export default new Router({
	mode: 'history',
  routes: [
    {
      path: '/',
      component: function(resolve){
        require(['../pages/index.vue'],resolve)
      }
    },
    {
    	path: '/home/',
    	name:'home',
      component: function(resolve){
        require(['../pages/Home.vue'],resolve)
      },
      children:[
      	{ path: '', redirect: '/home/page1' },
				{
					path: 'page1',
    			name:'page1',
		      component: function(resolve){
		        require(['../components/page1.vue'],resolve)
		      }
				},
				{
					path: 'page2',
    			name:'page2',
		      component: function(resolve){
		        require(['../components/page2.vue'],resolve)
		      }
				},
				{
					path: 'page3',
    			name:'page3',
		      component: function(resolve){
		        require(['../components/page3.vue'],resolve)
		      }
				}
      ]
    },
    {
      path: '/computingPower/',
      name:'computingPower',
      component: function(resolve){
        require(['../pages/computingPower.vue'],resolve)
      }
    },
    {
      path: '/me/',
      name:'computingPower',
      component: function(resolve){
        require(['../pages/me.vue'],resolve)
      }
    }
  ]
})
