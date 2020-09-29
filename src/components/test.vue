<template>
	<div class="pdf">
	    <div class="main">
	      <pdf ref="pdf"
				style="width: 500px; height: 400px;"
	           :src="pdfUrl"
	           :page="pageNum"
	           :rotate="pageRotate"
	           @password="password"
	           @progress="loadedRatio = $event"
	           @page-loaded="pageLoaded($event)"
	           @num-pages="pageTotalNum=$event"
	           @error="pdfError($event)"
	           @link-clicked="page = $event">
	      </pdf>
	    </div>
	    <div class="pdf-tab">
	      <!-- <div class="btn-def"
	           @click.stop="clock">顺时针</div>
	      <div class="btn-def"
	           @click.stop="counterClock">逆时针</div> -->
	    </div>
	    <button class="btn-def btn-pre"
	            @click.stop="prePage">上一页</button>
	    <button class="btn-def btn-next"
	            @click.stop="nextPage">下一页</button>
	    <div>{{pageNum}}/{{pageTotalNum}}</div>
	    <button :class="{select:idx==0}"
	            @touchstart="idx=0"
	            @touchend="idx=-1"
	            @click="scaleD">
	      放大
	    </button>
	    <button :class="{select:idx==1}"
	            @touchstart="idx=1"
	            @touchend="idx=-1"
	            @click="scaleX">
	      缩小
	    </button>
	    <button @click="fileDownload(pdfUrl,'pdf文件')">下载</button>
	    <!-- <div>进度：{{loadedRatio}}</div> -->
	    <!-- <div>页面加载成功: {{curPageNum}}</div> -->
	  </div>
</template>

<script>
	import pdf from 'vue-pdf'
  export default {
    components: {
          pdf
     },
    data () {
      return {
				pdfUrl: "https://img.ciics.com/application/claim/filedata/sit/claim/invoice/file/748488273784995840/滴滴出行行程报销单20200723-李岩.pdf",
                pageNum: 1,
                pageTotalNum: 1,
                pageRotate: 0,
                // 加载进度
                loadedRatio: 0,
                curPageNum: 0,
         
                scale: 100, //放大系数
                idx: -1,

      }
    },
   
    methods: {
     //下载PDF
           fileDownload (data, fileName) {
             let blob = new Blob([data], {
               //type类型后端返回来的数据中会有，根据自己实际进行修改
               type: "application/pdf;charset-UTF-8"
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
           },
           //放大
           scaleD() {
             this.scale += 5;
             this.$refs.pdf.$el.style.width = parseInt(this.scale) + "%";
           },
      
           //缩小
           scaleX() {
             if (this.scale == 100) {
               return;
             }
             this.scale += -5;
             this.$refs.pdf.$el.style.width = parseInt(this.scale) + "%";
           },
           prePage() {
             var p = this.pageNum
             p = p > 1 ? p - 1 : this.pageTotalNum
             this.pageNum = p
           },
           nextPage() {
             var p = this.pageNum
             p = p < this.pageTotalNum ? p + 1 : 1
             this.pageNum = p
           },
           clock() {
             this.pageRotate += 90
           },
           counterClock() {
             this.pageRotate -= 90
           },
           password(updatePassword, reason) {
             updatePassword(prompt('password is "123456"'))
             console.log('...reason...')
             console.log(reason)
             console.log('...reason...')
           },
           pageLoaded(e) {
             this.curPageNum = e
           },
           pdfError(error) {
             console.error(error)
           },
           pdfPrintAll() {
             this.$refs.pdf.print()
           },
           pdfPrint() {
             this.$refs.pdf.print(100, [1, 2])
           },
    }
  }
</script>

<style lang="less">
 
  
</style>