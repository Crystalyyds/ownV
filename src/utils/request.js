import axios from 'axios'
import router from "@/router";
import ElementUI from "element-ui";

const request = axios.create({
    baseURL: '',
    timeout: 30000
})

// request 拦截器
// 可以自请求发送前对请求做一些处理
// 比如统一加token，对请求参数统一加密
request.interceptors.request.use(config => {
    config.headers['Content-Type'] = 'application/json;charset=utf-8';
    let token = localStorage.getItem("token") ? JSON.parse(localStorage.getItem("token")) : null
    if (token) {
        config.headers['token'] = token;  // 设置请求头
    }

    return config
}, error => {

    return Promise.reject(error)
});

// response 拦截器
// 可以在接口响应后统一处理结果
request.interceptors.response.use(
    response => {
        let res = response.data;
        // 如果是返回的文件
        if (response.config.responseType === 'blob') {
            return res
        }
        // 兼容服务端返回的字符串数据
        if (typeof res === 'string') {
            res = res ? JSON.parse(res) : res
            // console.log("ok")
        }

        return res;
    },
    async error => {
        console.log('err', error) // for debug
        const res = error.response
        if (res.status === 401) {
            ElementUI.Message({
                message: res?.data?.msg ?? '无token',
                type: 'error'
            })
            localStorage.removeItem("token")
            // router.push("/login")
            return
        }
        // console.log("Ok")
        return Promise.reject(error)
    }
)


export default request

