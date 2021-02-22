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
				this.downloadPDF(this.src,'pdf')
			},
			//下载PDF
			downloadPDF(url,fileName){
			    this.axios({
			        method: 'get',
			        responseType: 'arraybuffer',
			        url: url
			        }).then(function(res){
			        //调用下载方法，把后端传过来的流传给fileDownload方法
			        this.fileDownload(res.data, fileName);
			        }.bind(this))
					.catch(
					function(error) {
			        this.$Message.error("网络请求出错")
			        //调试阶段可以看看报的什么错
			        //console.log("error",error)
			        }.bind(this)
			    );
			},
			fileDownload:function (data, fileName) {
			            let blob = new Blob([data], {
							//type类型后端返回来的数据中会有，根据自己实际进行修改
			                type: "application/pdf"
			            });
			            let filename = fileName || "报表.xls";
			            if (typeof window.navigator.msSaveBlob !== "undefined") {
			                window.navigator.msSaveBlob(blob, filename);
			            } else {
			                var blobURL = window.URL.createObjectURL(blob);
			                // 创建隐藏<a>标签进行下载
			                var tempLink = document.createElement("a");
			                tempLink.style.display = "none";
			                tempLink.href = blobURL;
			                tempLink.setAttribute("download", filename);
			                if (typeof tempLink.download === "undefined") {
			                    tempLink.setAttribute("target", "_blank");
			                }
			                document.body.appendChild(tempLink);
			                tempLink.click();
			                document.body.removeChild(tempLink);
			                window.URL.revokeObjectURL(blobURL);
			            }
			 }
		
		
		
		}
	}
</script>

<style>

</style>
