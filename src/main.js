import Vue from 'vue'
import App from './App.vue'
import VideoPlayer from 'vue-video-player'
import 'video.js/dist/video-js.css'
import 'vue-video-player/src/custom-theme.css'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);
Vue.use(VideoPlayer)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
