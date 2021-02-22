<template>
	  <div>
	     <!-- 把需要生成截图的元素放在一个元素容器里,设置一个ref -->
	     <div ref="imageTofile">
	       <!-- 这里放需要截图的元素,自定义组件元素也可以 -->
	       <div>我是截取的内容</div>
	       <div>我是截取的内容</div>
	       <div>我是截取的内容</div>
	       <div>我是截取的内容</div>
	       <div>我是截取的内容</div>
	     </div>
	     <!-- 如果需要展示截取的图片,给一个img标签 -->
	     <img :src="htmlUrl" v-show="isShow" />
	     <button @click="toImage">截取</button>
	   </div>
</template>

<script>
	import html2canvas from 'html2canvas'
	export default {
		data() {
			return {
				htmlUrl: "",
				isShow: false,
			}
		},
		components:{
			html2canvas
		},
		methods:{
			toImage() {
			        html2canvas(this.$refs.imageTofile).then(canvas => {
			          let dataURL = canvas.toDataURL("image/png");
			          this.imgUrl = dataURL;
			          if (this.imgUrl !== "") {
			            this.dialogTableVisible = true;
			          }
			        });
			      }
		}
	}
</script>

<style>
	
</style>
