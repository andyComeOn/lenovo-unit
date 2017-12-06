<template>
    <el-col :span="4" class="userinfo">
        <el-dropdown trigger="hover">
            <span class="el-dropdown-link userinfo-inner">
                {{userITcode}},你好
            </span>
            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>我的消息</el-dropdown-item>
                <el-dropdown-item>设置</el-dropdown-item>
                <!-- <el-dropdown-item divided @click.native="logout">退出登录</el-dropdown-item> -->
            </el-dropdown-menu>
        </el-dropdown>
    </el-col>
</template> 

<script>
    export default{
        name:'HeaderRg',
        data(){
            return{
                sysName:'LENOVO',
				
				userITcode: 'lenovo28'
				
            }
        }
    }
</script>


<style scoped>
    .userinfo{
        height: 60px;
        float: right;
    }
    .el-dropdown{
        height: 60px;
        line-height: 60px;
        /* text-align: right; */
        float: right;
        color: #ffffff;
        cursor: pointer;
        font-size: 15px;
    }
</style>