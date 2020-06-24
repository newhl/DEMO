<template>
  <div>
    <!-- <vue-video/> -->
    <calculator/>
  </div>
</template>

<script>
  // Similarly, you can also introduce the plugin resource pack you want to use within the component
  // import 'some-videojs-plugin'
  // import VueVideo from './components/vue-video'
  import Calculator from './components/calculator'
  export default {
    components:{
      // VueVideo
      Calculator
    },
    data() {
      return {
        
      }
    },
    mounted() {
      
    },
    computed: {
     
    },
    methods: {
      // onPlayerPlaying(player) {
      //   console.log(player)
      // },
      // onPlayerCanplaythrough(player) {
      //   console.log(player)
      // },
      // onPlayerCanplay(player) {
      //   console.log('onPlayerCanplay',player)
      // },
      // onPlayerLoadeddata(player) {
      //   console.log(player)
      // },
      // onPlayerTimeupdate(player) {
      //   console.log(player)
      // },
      // onPlayerWaiting(player) {
      //   console.log('player',player)
      // },
      // // listen event
      // onPlayerPlay(player) {
      //   console.log('player play!', player)
      // },
      // onPlayerPause(player) {
      //   console.log('player pause!', player)
      // },
      // // ...player event

      // // or listen state event
      // playerStateChanged(playerCurrentState) {
      //   console.log('player current update state', playerCurrentState)
      // },

      // // player is ready
      // playerReadied(player) {
      //   console.log('the player is readied', player)
      //   // you can use it to do something...
      //   // player.[methods]
      // }
    }
  }
</script>
<style scoped>

</style>