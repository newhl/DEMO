import Vue from 'vue'
import App from './App.vue'
// import VideoPlayer from 'vue-video-player'
// import Viewer from 'v-viewer'
import Vant from 'vant'
import 'vant/lib/index.css'
// import 'viewerjs/dist/viewer.css'
// import 'video.js/dist/video-js.css'
// import 'vue-video-player/src/custom-theme.css'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';



Vue.use(Vant)
// Viewer.setDefaults({
//   Options: { 'inline': true, 'button': true, 'navbar': true, 'title': true, 'toolbar': true, 'tooltip': true, 'movable': true, 'zoomable': true, 'rotatable': true, 'scalable': 			true, 'transition': true, 'fullscreen': true, 'keyboard': true, 'url': 'data-source' }
// })


// Vue.use(Viewer);
Vue.use(ElementUI);
// Vue.use(VideoPlayer)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
