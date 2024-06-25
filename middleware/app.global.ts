// 路由守卫白名单
export default defineNuxtRouteMiddleware((to,from)=>{
  const isLogin = false
  if(!isLogin && to.path === "/user"){
    return navigateTo("/")
  }
})