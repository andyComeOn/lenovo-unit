<template>
    <div class="askq">
        <!-- 问答集左 -->
        <el-col class="askq-lf" :span="10">
            <div class="lf-title">
                <span class="look-up-link">+ 新建问答对！</span>
            </div>
            <ul class="lf-items">
                <li v-for="(item,index) in askQPairsList" :class="{'curr':index===isSelected}" @click="clickLi(index,item.questionId)">
                    {{item.questionContent}}
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
                        <li class="same-item ells" v-for="(item,index) in askQPairsListDetailQuestions">
                            <span>{{item.questionContent}}</span>
                        </li>
                        <li class="add-ask add-qa-same-color same-item">
                            <span @click="addQuesCtrl(askQPairsListDetailQuestions[0].questionId)">+添加问题</span>
                        </li>
                    </div>
                </div>
                <div class="rg-answer">
                    <span class="rg-tip">
                        答
                    </span>
                    <div class="rg-answer-items">
                        <li class="same-item ells" v-for="(item,index) in askQPairsListDetailAnswers">
                            <span>{{item.answerContent}}</span> 
                        </li>
                        <li class="add-answer add-qa-same-color same-item">
                            <span @click="addAnswerCtrl(1)">+添加答案</span>  
                        </li>
                    </div>
                </div>  
            </ul>
		</el-col>
        <!--添加问题-->
		<el-dialog title="添加问题" :visible.sync="addQuesDialogVisible">
            <el-form :model="formQues" ref="formQues"> 
                <el-form-item class="add-ques-el-form-item">
                    <el-input type="textarea" v-model="formQues.desc"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="addQuesDialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="addQuesSubmit" :loading="addQuesSubmitLoading">确 定</el-button>
            </div>
        </el-dialog>

        <!--添加答案-->
		<!-- <el-dialog title="添加答案" :visible.sync="addAnsDialogVisible">
            <el-form :model="formAns">
                <el-form-item class="add-ques-el-form-item">
                    <el-input type="textarea" v-model="formAns.desc"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="addAnsDialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="addAnsDialogVisible = false">确 定</el-button>
            </div>
        </el-dialog> -->
    </div>
</template>

<script>
import { getQuestion,getAskQPageDetail,getQaDetail,getSaveQuestion } from '@/api/api';
export default {
    name:'AskQ',
    components:{

    },
    data(){
        return {
            
            askQPairsList:[],//问答对
            isSelected:0,  //被选中
            
            askQPairsListDetailQuestions:[], //问题集
            askQPairsListDetailAnswers:[],   //答案集
            // questionId:0,


            addQuesDialogVisible: false, //添加问题dialog开关
            addQuesSubmitLoading:false,   //添加问题loading

            addAnsDialogVisible:false,   //添加答案dialog开关
            addAnsSubmitLoading:false,   //添加问题loading
            
           

            dialogFormVisible:false,
            formQues: {
                desc: ''
            },
            formAns: {
                name: '',
                region: '',
                date1: '',
                date2: '',
                delivery: false,
                type: [],
                resource: '',
                desc: ''
            },
            formLabelWidth: '120px'
        }
    },
    mounted(){
        this.askQPairs();
    },
    methods:{
        //获取问答对
        askQPairs:function(){
            let para = {};
            getQuestion(para).then((res) => {
                //console.log(res.data);
                this.askQPairsList = res.data;
                //console.log(res.data[0].id);
                this.askQPairsDetail(res.data[0].questionId);
            });
        },
        //获取问答对详情
        askQPairsDetail:function(qid){
            let para = {
                "questionId":qid
            };
            getQaDetail(para).then((res)=>{
                this.askQPairsListDetailQuestions = res.data.questions;
                this.askQPairsListDetailAnswers = res.data.answers;
            })
        },
        //问答对-列表点击
        clickLi:function(index,qid){
            console.log(index+'---'+qid);
            this.isSelected = index;
            this.askQPairsDetail(qid);
            //this.questionId = questionId;
        },
        //添加问题控制
        addQuesCtrl:function(qid){
            //console.log(qid);
            this.addQuesDialogVisible = true;
            this.addQuesSubmit(qid);
            //this.formQues = Object.assign({}, questionId);
            //console.log(Object.assign({}, questionId));
            
        },
        //添加问题提交
        addQuesSubmit:function(id){
            this.addQuesSubmitLoading = true;
            if(this.formQues.desc.trim()){
                let para = {
                    "questionContent":this.formQues.desc,
                    "questionId":id
                };
                console.log(para);
                getSaveQuestion(para).then((res)=>{
                    this.addQuesSubmitLoading = false;
                    console.log(res.data);
                    //this.askQPairsListDetailQuestions = this.askQPairsListDetailQuestions.concat(res.data.msg);

                })
            }else{
                alert(11); 
            }
                    
                    
                    
               
        },

        //添加答案控制
        addAnswerCtrl:function(questionId){
            this.addAnsDialogVisible = true;
        },
        //添加答案提交
        addAnswerSubmit:function(){

        },


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
    .lf-items li .ay-mini-round {
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
    .lf-items li.curr {
        background:#409EFF;
    }
    .lf-items li:hover .ay-mini-round{
        visibility: visible;
    }
    .askq-rg{
        height: 100%;
    }
    .rg-items{
        width: 100%;
        padding: 20px 20px 0;
        height: 100%;
        overflow: auto;
    }
    
    .rg-ask{
        width: 100%;
        padding-left: 32px;
        margin-bottom: 30px;
        position: relative;
    }
    .rg-answer{
        width: 100%;
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
        width: 100%;
        height:25px;
        font-size: 12px;
        cursor: default;
        color: #333;
        margin-bottom: 10px;
    }
    .rg-items .same-item span{
        display: inline-block;
        height:25px;
        line-height:25px;
        cursor: pointer;
    }
    
    

    /* 点击添加问题-字体 */
    .rg-items .add-qa-same-color{
        color:#409EFF;
    }
    
    /* 重置el-form-item下的mrt */
    .add-ques-el-form-item{
        margin-bottom: 5px;
    }
    
</style>



