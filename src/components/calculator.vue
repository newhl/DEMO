<template>
	<div style="background-color: aliceblue;">
		<el-button @click='handle'>按钮</el-button>
		<div @click='openPdf'>
			<pdf :src="src" style="width: 560px;cursor:pointer"></pdf>
		</div>
		
	</div>
</template>

<script>
	import pdf from 'vue-pdf'
	import download from 'downloadjs'
	export default {
		components:{
			pdf
		},
		data() {
			return {
			src:'https://img.ciics.com/application/claim/filedata/sit/claim/invoice/file/748488273784995840/滴滴出行行程报销单20200723-李岩.pdf'
			}
		},
		methods: {
			handle() {
				download(encodeURI(this.src),'');
			},
			openPdf(){
				alert(11)
				console.log('src',src)
				window.open(src)
			},
			
		
		
		
		}
	}
</script>

<style>

</style>
