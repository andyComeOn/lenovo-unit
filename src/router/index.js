import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import Home from '@/components/Home';
// import Headers from '@/components/header/Headers';

// 数据中心
import AskQ from '@/components/datacenter/AskQ';
import Dialog from '@/components/datacenter/Dialog';

// 单元配置
import UnitConfig from '@/components/unitconfig/UnitConfig';


// 训练与验证
import TryTest1 from '@/components/trytest/TryTest1';
import TryTest2 from '@/components/trytest/TryTest2';

Vue.use(Router);
export default new Router({
	routes: [
		{
			path: '/',
			component: Home,
			name: '数据中心',
			iconCls: 'el-icon-message',  //图标样式class
			children: [
				{ path: '/ask-q', component: AskQ, name: '问答集' },
				{ path: '/dialog', component: Dialog, name: '对话样本集' }

			]
		},
		{
			path: '/',
			component: Home,
			name: '单元配置',
			iconCls: 'el-icon-menu',  //图标样式class
			leaf: true,  //只有一个节点
			children: [
				{ path: '/unitconfig', component: UnitConfig, name: '单元配置一' }
			]
		},
		{
			path: '/',
			component: Home,
			name: '训练与验证',
			iconCls: 'el-icon-setting',  //图标样式class
			children: [
				{ path: '/trytest1', component: TryTest1, name: '训练与验证一' },
				{ path: '/trytest2', component: TryTest2, name: '训练与验证二' }
			]
		}
	]
})
