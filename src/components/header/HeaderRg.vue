<template>
    <el-col :span="4" class="userinfo">
        <el-dropdown trigger="hover">
            <span class="el-dropdown-link userinfo-inner">
                <!-- <img :src="this.sysUserAvatar" /> {{sysUserName}} -->
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
    
</script>


<style scoped>
    .userinfo{
        height: 60px;
        float: right;
    }
</style>