<template>
    <div class="askq">
        <!-- 问答集左 -->
        <el-col class="askq-lf" :span="10">
            <div class="lf-title">
                <span class="look-up-link">+ 新建问答对</span>
            </div>
            <ul class="lf-items">
                <li v-for="item in qLists" >
                    {{item}}
                    
                    <!-- <i class="el-icon-circle-close el-icon--right"></i> -->
                    <!-- <i class="el-icon-circle-close"></i> -->
                    <!-- <el-button size="medium" type="primary" ></el-button> -->
                    
                    
                    <el-button size="mini" round class="ay-mini-round" icon="el-icon-circle-close"></el-button>
                </li>
                
                
            </ul>
		</el-col>
        <!-- 问答集右 -->
        <el-col class="askq-rg" :span="14">
            <ul class="rg-items">
                <div class="rg-ask">
                    <span class="rg-tip">
                        问
                    </span>
                    <div class="rg-ask-items">
                        <li class="rg-ask-item same-item">我什么都可以问你对吧？</li>
                        <li class="rg-ask-item same-item">我什么都可以问你对吧？</li>
                        <li class="rg-ask-item same-item">我什么都可以问你对吧？</li>
                        
                        <li class="rg-ask-item same-item">我什么都可以问你对吧？</li>
                        <li class="rg-ask-item same-item">我什么都可以问你对吧？</li>
                    </div>
                </div>
                <div class="rg-answer">
                    <span class="rg-tip">
                        答
                    </span>
                    <div class="rg-answer-items">
                        <li class="rg-answer-item same-item">你说你智能吗？</li>
                        <li class="rg-answer-item same-item">你说你智能吗？</li>
                        <li class="rg-answer-item same-item">你说你智能吗？</li>
                        <li class="rg-answer-item same-item">你说你智能吗？</li>
                        <li class="rg-answer-item same-item">你说你智能吗？</li>
                    </div>
                </div>
                
            </ul>
		</el-col>
    </div>
</template>

<script>

export default {
    name:'AskQ',
    components:{

    },
    data(){
        return {
            qLists:[
                '在吗？',
                '我喜欢你',
                '今天天气如何？',
                '你什么星座？',
                '我什么都可以问你对吧？',
                '你说你智能吗？',
                'hfjshhfsjhfj ？',
                '你会唱歌吗？',
                '你多大了？',
                '在吗？',
                '在吗？',
                '我什么都可以问你对吧？',
                '你说你智能吗？',
                '你帅还是我帅？',
                '你会唱歌吗？',
                '你多大了？',
                '你多大了？',
                '在吗？',
                '在干吗？'
            ],
            collapsed:false,
            sysUserName: '',
            sysUserAvatar: '',
            isCollapse: true,
            form: {
                name: '',
                region: '',
                date1: '',
                date2: '',
                delivery: false,
                type: [],
                resource: '',
                desc: ''
            }
        }
    },
    methods:{

    },
    mounted(){

    }
}
</script>

<style scoped>
    .askq{
        width: 100%;
        height: 100%;
        border: 1px solid #eeeeee;
    }

    .askq-lf{
        background: #f6f7fb;
        height: 100%;
        padding-top: 55px;
    }
		
    .lf-title{
        margin-top:-55px; 
        height: 55px;
        line-height: 55px;
        border-bottom: 1px solid #eee;
        position: relative;
        padding: 0 15px 0;
    }
    
    .lf-items{
        height: 100%;
        overflow-x: hidden;
        overflow-y: scroll;
    }
    .lf-items li{
        width: 100%;
        color: #333;
        font-size: 12px;
        height: 36px;
        line-height: 36px;
        padding: 0 15px;
        border-bottom: 1px solid #eee;
        cursor: default;
        position: relative;
        overflow: hidden;
        white-space: nowrap; 
        text-overflow: ellipsis;
        
    }
    .lf-items li .ay-mini-round{
        visibility: hidden;
        position: absolute;
        right:15px;
        top: 9px;
         padding: 0;
    }
   
    
    .lf-items li i{
        font-size: 16px;
        
    }
    .lf-items li:hover {
        background: #D1DBE5;
    }
    .lf-items li:hover .ay-mini-round{
        visibility: visible;
        
    }
    .askq-rg{
        height: 100%;
    }
    .rg-items{
        min-height: 100%;
        padding: 20px 20px 0;
        height: 100%;
        overflow: auto;
    }
    .rg-item{
        
    }
    .rg-ask{
        padding-left: 32px;
        margin-bottom: 30px;
        position: relative;
    }
    .rg-answer{
        padding-left: 32px;
        position: relative;
    }
    .rg-tip{
        line-height: 25px;
        position: absolute;
        top: 0;
        left: 0;
        font-size: 14px;
    }
    .rg-items .same-item{
        line-height:25px;
        font-size: 12px;
        cursor: default;
        color: #333;
        margin-bottom: 10px;
    }
</style>



