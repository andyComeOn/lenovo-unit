<template>
	<div class="home">
		<el-header class="header">
			<el-col :span="10" class="logo">
				Header
			</el-col>
			<HeaderMid></HeaderMid>
			<HeaderRg></HeaderRg>
		</el-header>

		<section class="section">
			<!-- 左侧的菜单 -->
			<aside class="aside">
				<!-- <AsideLf></AsideLf> -->
				<div>
					<el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
						<el-radio-button :label="false">展开</el-radio-button>
						<el-radio-button :label="true">收起</el-radio-button>
					</el-radio-group>
					<el-menu :default-active="$route.path" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
						<template v-for="(item,index) in $router.options.routes" v-if="!item.hidden">
							<el-submenu :index="index+''" v-if="!item.leaf">
								<template slot="title">
									<i :class="item.iconCls"></i>
									<span slot="title">{{item.name}}</span>
								</template>

								<el-menu-item v-for="child in item.children" :index="child.path" :key="child.path" v-if="!child.hidden">
									{{child.name}}
								</el-menu-item>
							</el-submenu>

							<el-menu-item v-if="item.leaf&&item.children.length>0" :index="item.children[0].path">
								<i :class="item.iconCls"></i>
								<span slot="title">{{item.children[0].name}}</span>
							</el-menu-item>
						</template> 
					</el-menu>
				</div>

			</aside>
			<!-- 右侧的内容 -->
			<main class="main">
				<!-- <Mains></Mains> -->
				<div class="grid-content bg-purple-light">
					<el-col :span="24" class="breadcrumb-container">
						<strong class="title">{{$route.name}} </strong>
						<el-breadcrumb separator="/" class="breadcrumb-inner">
							<el-breadcrumb-item v-for="(item,index) in $route.matched" :key="item.path">
								{{ item.name }}
							</el-breadcrumb-item>
						</el-breadcrumb>
					</el-col>
					<el-col :span="24" class="content-wrapper">
						<transition name="fade" mode="out-in">
							<router-view></router-view>
						</transition>
					</el-col>
    			</div>
			</main>  
		</section>

	</div>

	
</template>




<script>
	import HeaderMid from "./header/HeaderMid";
	import HeaderRg from "./header/HeaderRg";
	import AsideLf from "./aside/AsideLf";
	import Mains from "./main/Mains";
	
    export default{
        name: 'home',
		components:{
			HeaderMid,
			HeaderRg,
			AsideLf,
			Mains
			
		},
		data(){
			return {
				
			}
		},
		methods:{

		},
		mounted:{

		}
    }
    
</script>

<style scoped>

	
	.home{
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
	}
	/* 头部 */
	.header{
		line-height: 60px;
		background: #E2231A;
		color: #fff;
		font-size: 36px;
	}
	.logo{
		width: 200px;
		margin-left: -20px;
		padding-left: 20px;
	}

	/* 下部容器 */
	.section{
		position: absolute;
		top: 60px;
		left: 0;
		right: 0;
		bottom: 0;
		background: #cccccc;
		display: flex;
		flex-direction: row;
	}

	/* 左边aside */
	.aside{
		width: 200px;
		height: 100%;
		background-color:#fff;
	}

	.aside-ul{
		width:100%; 
		height:100%;
	}


	.main{
		flex: 1;
		height: 100%;
		background-color:#e2e5ec;
		padding: 0 20px;
	}

	
	
	
</style>


