// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
require('./sass/reset.css')

Vue.config.productionTip = false

// 获取屏幕宽度(viewport)
let htmlWidth = document.documentElement.clientWidth || document.body.clientWidth
// 获取html的dom
let htmlDom = document.getElementsByTagName('html')[0]
// 设置html的font-size
htmlDom.style.fontSize = htmlWidth / 10 + 'px'
window.addEventListener('resize', () => {
  let htmlWidth = document.documentElement.clientWidth || document.body.clientWidth
  htmlDom.style.fontSize = htmlWidth / 10 + 'px'
  console.log(htmlWidth)
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
