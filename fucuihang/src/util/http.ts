/****   request.js   ****/
// 导入axios
import axios, { type AxiosInstance } from 'axios'
// 使用element-ui Message做消息提醒
import { ElMessage } from 'element-plus'
//1. 创建新的axios实例，
const http:AxiosInstance = axios.create({
  // 公共接口--这里注意后面会讲
  baseURL: "http://localhost:3000/",
  // 超时时间 单位是ms，这里设置了3s的超时时间
  timeout: 3 * 1000
})
// // 2.请求拦截器
// service.interceptors.request.use(config => {})
// // 3.响应拦截器
// // 响应拦截器
// service.interceptors.response.use((response) => {}
// )

//4.导出文件
export default http
