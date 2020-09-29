<template>
	<div style="background-color: aliceblue;">
		<el-button @click='handleImage'>按钮</el-button>
		 <el-image 
		    style="width: 100px; height: 100px"
		    :src="'data:image/png;base64,' + srcTwo" >
		  </el-image>
	</div>
</template>

<script>
	import JSZip from "jszip";
	import FileSaver from "file-saver";
	export default {
		
		data() {
			return {
			src:'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
			srcTwo:''
			}
		},
		methods: {
			async handleImage() {
				let res = await this.urlToBase64(this.src)
				let file = res; // 把整个base64给file
				var type = "image/png"; // 定义图片类型（canvas转的图片一般都是png，也可以指定其他类型）
				let conversions = this.base64ToBlobOne(file,type)
				let url = window.URL.createObjectURL(conversions)
				console.log('url',url)
			},
			urlToBase64(url) {
			   return new Promise ( (resolve,reject) => {
				   let image = new Image();
				   image.onload = function() {
				               let canvas = document.createElement('canvas');
				               canvas.width = this.naturalWidth;
				               canvas.height = this.naturalHeight;
				               // 将图片插入画布并开始绘制
				               canvas.getContext('2d').drawImage(image, 0, 0);
				               // result
				               let result = canvas.toDataURL('image/png')
				               resolve(result);
				    };
				    // CORS 策略，会存在跨域问题https://stackoverflow.com/questions/20424279/canvas-todataurl-securityerror
				    image.setAttribute("crossOrigin",'Anonymous');
				    image.src = url;
				    image.onerror = () => {
				       reject(new Error('图片流异常'));
				    };
			   })
			 },
			 base64ToBlob ({b64data = '', contentType = '', sliceSize = 512} = {}) {
			       return new Promise((resolve, reject) => {
			         // 使用 atob() 方法将数据解码
			         let byteCharacters = atob(b64data);
			         let byteArrays = [];
			         for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
			           let slice = byteCharacters.slice(offset, offset + sliceSize);
			           let byteNumbers = [];
			           for (let i = 0; i < slice.length; i++) {
			               byteNumbers.push(slice.charCodeAt(i));
			           }
			           // 8 位无符号整数值的类型化数组。内容将初始化为 0。
			           // 如果无法分配请求数目的字节，则将引发异常。
			           byteArrays.push(new Uint8Array(byteNumbers));
			         }
			         let result = new Blob(byteArrays, {
			           type: contentType
			         })
			         result = Object.assign(result,{
			           // jartto: 这里一定要处理一下 URL.createObjectURL
			           preview: URL.createObjectURL(result),
			           name: `图片示例.png`
			         });
			         resolve(result)
			       })
			  },
			 
			 getObjectURL(file) {
			      var url = null;
			      if (window.createObjectURL !== undefined) { // basic
			          url = window.createObjectURL(file);
			      } else if (window.URL !== undefined) { // mozilla(firefox)
			          url = window.URL.createObjectURL(file);
			      } else if (window.webkitURL !== undefined) { // webkit or chrome
			          url = window.webkitURL.createObjectURL(file);
			      }
			      return url;
			  },
			  base64ToBlobOne(urlData, type) {
			      let arr = urlData.split(',');
				  console.log('arr[0]',arr[0])
			      let mime = arr[0].match(/:(.*?);/)[1] || type;
				  console.log('mime',mime)
			      // 去掉url的头，并转化为byte
			      let bytes = window.atob(arr[1]);
			      // 处理异常,将ascii码小于0的转换为大于0
			      let ab = new ArrayBuffer(bytes.length);
			      // 生成视图（直接针对内存）：8位无符号整数，长度1个字节
			      let ia = new Uint8Array(ab);
			      for (let i = 0; i < bytes.length; i++) {
			          ia[i] = bytes.charCodeAt(i);
			      }
			      return new Blob([ab], {
			          type: mime
			      });
			}
		}
	}
</script>

<style>

</style>
