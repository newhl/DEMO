<template>
	<div style="background-color: aliceblue;">
		<el-button @click='handleImage'>按钮</el-button>
		  <el-image v-for="url in urls" :key="url" :src="url" lazy></el-image>
	</div>
</template>

<script>
	import JSZip from "jszip";
	import FileSaver from "file-saver";
	export default {
		
		data() {
			return {
			urls: [
			    'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
			    'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg',
			    'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg',
			    'https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg',
			    'https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg',
			    'https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg',
			    'https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg'
			],
			srcTwo:''
			}
		},
		created() {
			console.log(this.urlToBase64('https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg').then(res => {console.log(res)}))
		},
		methods: {
			handleImage() {
				let newArr = []
			    this.urls.forEach(async(item,index) => {
					// let res = await this.urlToBase64(item)
					let obj = {}
					obj.name = '图片' + index
					obj.baseImg = res.split(',')[1]
					newArr.push(obj)
				})
				setTimeout(() => {
					this.StoreDowQrcode(newArr);
				},600)
				
				// let file = res; // 把整个base64给file
				// var type = "image/png"; // 定义图片类型（canvas转的图片一般都是png，也可以指定其他类型）
				// let conversions = this.base64ToBlobOne(file,type)
				// let url = window.URL.createObjectURL(conversions)
			},
			
			// 将图片转成base64
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
			 
			 // 将Blol类型转为url
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
			  
			  //base64转Blol 类型
			  base64ToBlobOne(urlData, type) {
			      let arr = urlData.split(',');
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
			},
			
			// 压缩下载图片
			//批量下载门店二维码转化
			StoreDowQrcode(arr,blogTitle = "二维码") {
			  var zip = new JSZip();
			  var imgs = zip.folder(blogTitle);
			  var baseList = [];
			  var _this = this;
			  //var arr = ["/images/bg.png", "/images/bg1.png"];
			  for (var i = 0; i < arr.length; i++) {
			    //console.log(arr[i].name);
			    let name = arr[i].name; //图片名称
			    let image = new Image();
			    // 解决跨域 Canvas 污染问题
			    image.setAttribute("crossOrigin", "*");
			    image.onload = function() {
			      let canvas = document.createElement("canvas");
			      canvas.width = image.width;
			      canvas.height = image.height;
			      let context = canvas.getContext("2d");
			      context.drawImage(image, 0, 0, image.width, image.height);
			      let url = canvas.toDataURL(); // 得到图片的base64编码数据 let url =
			      canvas.toDataURL("image/png");
			      baseList.push({ name: name, img: url.substring(22) });
			      if (baseList.length === arr.length) {
			        if (baseList.length > 0) {
			          // _this.$notify({
			          //   title: "成功",
			          //   message: "即将下载",
			          //   type: "success"
			          // });
					  _this.$notify({message: "即将下载",type: "success"})
			          for (let k = 0; k < baseList.length; k++) {
			            imgs.file(baseList[k].name + ".png", baseList[k].img, {
			              base64: true
			            });
			          }
			          zip.generateAsync({ type: "blob" }).then(function(content) {
			            // see FileSaver.js
			            FileSaver.saveAs(content, blogTitle + ".zip");
			          });
			        } else {
			          _this.$notify.error({
			            title: "错误",
			            message: "暂无图片可下载"
			          });
			        }
			      }
			    };
			    image.src = arr[i].baseImg = `data:image/png;base64,${arr[i].baseImg}`;
			  }
			}
		}
	}
</script>

<style>

</style>
