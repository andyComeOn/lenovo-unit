import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import Home from '@/components/Home';
// import Headers from '@/components/header/Headers';

// 问答组件
import Q from '@/components/question/Q';
import Ask from '@/components/question/Ask';

// 单元设置
import UnitSet from '@/components/unitset/UnitSet';


// 训练测试
import TryTest1 from '@/components/trytest/TryTest1';
import TryTest2 from '@/components/trytest/TryTest2';

Vue.use(Router);

export default new Router({
	routes: [
		{
			path: '/',
			component: Home,
			name: '导航一',
			iconCls: 'el-icon-message',  //图标样式class
			children: [
				{ path: '/q', component: Q, name: '问题' },
				{ path: '/ask', component: Ask, name: '回答' }

			]
		},
		{
			path: '/',
			component: Home,
			name: '导航二',
			iconCls: 'el-icon-menu',  //图标样式class
			leaf: true,  //只有一个节点
			children: [
				{ path: '/unitset', component: UnitSet, name: '单元设置' },
				

			]
		},
		{
			path: '/',
			component: Home,
			name: '导航三',
			iconCls: 'el-icon-setting',  //图标样式class
			children: [
				{ path: '/trytest1', component: TryTest1, name: '训练测试一' },
				{ path: '/trytest2', component: TryTest2, name: '训练测试二' }

			]
		},

	]
})
