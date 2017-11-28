import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import Home from '@/components/Home';
// import Headers from '@/components/header/Headers';
import Q from '@/components/question/Q';
import Ask from '@/components/question/Ask';

Vue.use(Router);

export default new Router({
  routes: [
    
    {
      path: '/',
      component: Home,
      //name: '导航一',
      iconCls: 'el-icon-message',//图标样式class
      children: [
          { path: '/q', component: Q, name: '问题' },
          { path: '/ask', component: Ask, name: '回答' },
         
      ]
    }
    
  ]
})
