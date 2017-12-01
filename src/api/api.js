import axios from 'axios';

let base = '';

export const requestLogin = params => { return axios.post(`${base}/login`, params).then(res => res.data); };

export const getUserList = params => { return axios.get(`${base}/user/list`, { params: params }); };

export const getAskQPage = params => { return axios.get('http://bird.ioliu.cn/v1/?url=http://rap2api.taobao.org/app/mock/1019/GET/getAskAnsList', { params: params }); };

// export const getAskQPage = params => { return axios.get('http://localhost:9998/data2.json', { params: params }) };


export const getAskQPageDetail = params => { return axios.get('http://localhost:9998/data3.json', { params: params }) };

export const removeUser = params => { return axios.get(`${base}/user/remove`, { params: params }); };

export const batchRemoveUser = params => { return axios.get(`${base}/user/batchremove`, { params: params }); };

export const editUser = params => { return axios.get(`${base}/user/edit`, { params: params }); };

export const addUser = params => { return axios.get(`${base}/user/add`, { params: params }); };