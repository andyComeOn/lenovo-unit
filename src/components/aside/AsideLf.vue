<template>
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
</template>




<script>
    export default {
        data() {
            return {
                isCollapse: false
            };
        },
        methods: {
            handleOpen(key, keyPath) {
                //console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                //console.log(key, keyPath);
            }
        }
    }
</script>

<style scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
}
</style>


