const axios = require('axios')
const qs = require('qs')

// return
// 封装拦截器
const serve = axios.create({
    baseURL: 'https://www.mzz2020.com', // 默认地址
    timeout: 5000 // 请求超时时间
})

// 请求拦截
serve.interceptors.request.use(config => {
    config.method === 'post' ? config.data = qs.stringify({...config.data }) : config.params = {...config.params };
    config.headers['Content-Type'] = 'application/x-www-form-urlencoded';
    return config;
}, err => { // 处理错误请求
    Promise.reject(err)
})

// 响应拦截
serve.interceptors.response.use(response => {
    // 成功请求到数据
    // 根据后端提供的数据进行对应的处理//////////////////
    if (response.data.status === 200) {
        return response.data;
    } else {
        // 打印错误信息
        console.error(response.data.data.msg)
    }
}, err => { // 响应错误处理 
    console.error(err)
    console.error(JSON.stringify(err))
    let text = JSON.parse(JSON.stringify(err).response.status === 404 ? '404' : '网络异常，请稍后重试')
    alert(text)
    return Promise.reject(err)
})

module.exports = {
    serve
}