import axios from 'axios';

// let base = 'http://me.lenovouat.com';

let base = '';

export const requestLogin = params => { return axios.post(`/login`, params).then(res => res.data); };

export const getUserList = params => { return axios.get(`/user/list`, { params: params }); };

//获取问题
export const getQu = params => { return axios.get('/qa/questions.do', { params: params }); };

//获取问题详情
export const getQuDetail = params => { return axios.get('/qa/detail.do', { params: params }); };

//添加问题
export const getSaveQu = params => { return axios.get('/qa/saveQuestion.do', { params: params }); };

//添加答案
export const getSaveAns = params => { return axios.get('/qa/saveAnswer.do', { params: params }); };

// http://my.lenovouat.com/qa/detail.do?questionId=2

