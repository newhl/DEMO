<template>
  <div>
    <!-- <vue-video/> -->
    <!-- <calculator/> -->
	<dowmLoadImage/>
	<!-- <test/> -->
	<!-- <vviemer/> -->
	<!-- <html2Canvas/> -->
	<!-- <quillEditor/> -->
	<!-- <bpmn/> -->
	<!-- <input-name/> -->
	<!-- <treeTransfer></treeTransfer> -->
	<!-- <slip-delete></slip-delete> -->
  </div>
</template>

<script>
  // Similarly, you can also introduce the plugin resource pack you want to use within the component
  // import 'some-videojs-plugin'
  // import VueVideo from './components/vue-video'
  // import Calculator from './components/calculator'
  // import test from './components/test.vue'
  import dowmLoadImage from './components/downImage.vue'
  // import Vviemer from './components/v-viewer.vue'
  // import html2Canvas from './components/html2Canvas.vue'
  // import quillEditor from './components/vue-Quill-Editor.vue'
  // import bpmn from './components/bpmn.vue'
  // import InputName from './components/input_input.vue'
  // import treeTransfer from './components/el-tree-transfer.vue'
  // import slipDelete from './components/slip-delete.vue'
  export default {
    components:{
      // VueVideo
      // Calculator
	  // test
	  dowmLoadImage
	  // Vviemer
	  // html2Canvas
	  // quillEditor
	  // bpmn
	  // InputName
	  // treeTransfer
	  // slipDelete
    },
	
    data() {
      return {
        msg:'哈哈'
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