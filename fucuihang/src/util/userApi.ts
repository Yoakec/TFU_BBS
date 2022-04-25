
import http from './http'
// 
/**
 *   resquest 请求地址 例如：http://197.82.15.15:8088/request/...
 *   '/testIp'代表vue-cil中config，index.js中配置的代理
 */
let resquest = "/users"

// get请求
export  function getusers(params: any){
    return  http.get(`${resquest}`,params)
}
// post请求
export  function postusers(params: any){
    return  http.post(`${resquest}`,params)
}
// put 请求
export  function putusers(id:string,params: any){
    return  http.put(`${resquest}/${id}`,params)
}
// delete 请求
export  function deleteusers(id:string){
    return  http.delete(`${resquest}/${id}`)
}
