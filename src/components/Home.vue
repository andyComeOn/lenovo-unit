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
				<AsideLf></AsideLf>
			</aside>
			<!-- 右侧的内容 -->
			<main class="main">main</main>  
		</section>

	</div>

	


		
    
</template>




<script>
	import HeaderMid from "./header/HeaderMid";
	import HeaderRg from "./header/HeaderRg";
	import AsideLf from "./aside/AsideLf";
	
    export default{
        name: 'home',
		components:{
			HeaderMid,
			HeaderRg,
			AsideLf
			
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
		background-color:#f6f7fb;
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


