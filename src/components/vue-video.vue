<template>
 <div>
    <video-player  class="video-player-box"
                 ref="videoPlayer"
                 :options="playerOptions"
                 :playsinline="true"
                 customEventName="customstatechangedeventname"
                 @play="onPlayerPlay($event)"
                 @pause="onPlayerPause($event)"
                 @ended="onPlayerEnded($event)"
                 @waiting="onPlayerWaiting($event)"
                 @playing="onPlayerPlaying($event)"
                 @loadeddata="onPlayerLoadeddata($event)"
                 @timeupdate="onPlayerTimeupdate($event)"
                 @canplay="onPlayerCanplay($event)"
                 @canplaythrough="onPlayerCanplaythrough($event)"
                 @statechanged="playerStateChanged($event)"
                 @ready="playerReadied">
  </video-player>
  <button @click="hh">按钮</button>
  <div class="pp" v-show="isShow"></div>
 </div>
</template>

<script>
  // Similarly, you can also introduce the plugin resource pack you want to use within the component
  // import 'some-videojs-plugin'
  export default {
    data() {
      return {
        isShow:false,
        playerOptions: {
          playbackRates: [0.5, 1.0, 1.5, 2.0], // 可选的播放速度
          autoplay: false, // 如果为true,浏览器准备好时开始回放。
          muted: false, // 默认情况下将会消除任何音频。
          loop: false, // 是否视频一结束就重新开始。
          preload: 'auto', // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
          language: 'zh-CN',
          aspectRatio: '16:9', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
          fluid: true,         // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
          sources: [{
            type: "video/mp4", // 类型
            src: 'https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm' // url地址
          }],
          poster: '', // 封面地址
          notSupportedMessage: '此视频暂无法播放，请稍后再试', // 允许覆盖Video.js无法播放媒体源时显示的默认信息。
          controlBar: {
            timeDivider: true, // 当前时间和持续时间的分隔符
            durationDisplay: true, // 显示持续时间
            remainingTimeDisplay: false, // 是否显示剩余时间功能
            fullscreenToggle: true // 是否显示全屏按钮
          }
          }
      }
    },
    mounted() {
      console.log('this is current player instance object', this.player)
    },
    computed: {
      player() {
        return this.$refs.videoPlayer.player
      }
    },
    methods: {
      hh() {
        this.isShow = !this.isShow
      },
      onPlayerPlaying(player) {
        console.log(player,1)
        
      },
      onPlayerCanplaythrough(player) {
        console.log(player,2)
      },
      onPlayerCanplay(player) {
        console.log('onPlayerCanplay',player,3)
      },
      onPlayerLoadeddata(player) {
        console.log(player,4)
      },
      onPlayerTimeupdate(player) {
        console.log(player,5)
      },
      onPlayerWaiting(player) {
        console.log('player',player,6)
      },
      // listen event
      onPlayerPlay(player) {
        console.log('player play!', player,7)
      },
      onPlayerPause(player) {
        console.log('player pause!', player,8)
      },
      // ...player event

      // or listen state event
      playerStateChanged(playerCurrentState) {
        console.log('player current update state', playerCurrentState,9)
      },

      // player is ready
      playerReadied(player) {
        console.log('the player is readied', player,10)
        // you can use it to do something...
        // player.[methods]
      }
    }
  }
</script>
<style lang='less' scoped>
.video-player-box {
  width: 30%;
  height: 30%;
    /deep/ .video-js .vjs-big-play-button {
    display: none!important;
    font-size: 3em;
    line-height: 1.5em;
    height: 1.5em;
    width: 3em;
    display: block;
    position: absolute;
    top: 50% !important;
    left: 50% !important;
    transform: translate(-50%, -50%) !important;
    padding: 0;
    cursor: pointer;
    opacity: 1;
    border: 0.06666em solid #fff;
    background-color: #2B333F;
    background-color: rgba(43, 51, 63, 0.7);
    border-radius: 0.3em;
    -webkit-transition: all 0.4s;
    transition: all 0.4s;
}
}

.pp {
  width: 400px;
  height: 400px;
  background-color: rebeccapurple;
}

</style>