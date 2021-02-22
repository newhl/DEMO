<template>
	<div>
		<el-button @click='stopF5Refresh'>获取父组件数据</el-button>
	    <el-card style="height: 610px;">
	      <quill-editor v-model="content" ref="myQuillEditor" style="height: 500px;" :options="editorOption">
			  <!-- 自定义toolar -->
			          <div id="toolbar" slot="toolbar">
			            <!-- Add a bold button -->
			            <button class="ql-bold" title="加粗">Bold</button>
			            <button class="ql-italic" title="斜体">Italic</button>
			            <button class="ql-underline" title="下划线">underline</button>
			            <button class="ql-strike" title="删除线">strike</button>
			            <button class="ql-blockquote" title="引用"></button>
			            <button class="ql-code-block" title="代码"></button>
			            <button class="ql-header" value="1" title="标题1"></button>
			            <button class="ql-header" value="2" title="标题2"></button>
			            <!--Add list -->
			            <button class="ql-list" value="ordered" title="有序列表"></button>
			            <button class="ql-list" value="bullet" title="无序列表"></button>
			            <!-- Add font size dropdown -->
			            <select class="ql-header" title="段落格式">
			              <option selected>段落</option>
			              <option value="1">标题1</option>
			              <option value="2">标题2</option>
			              <option value="3">标题3</option>
			              <option value="4">标题4</option>
			              <option value="5">标题5</option>
			              <option value="6">标题6</option>
			            </select>
			            <select class="ql-size" title="字体大小">
			              <option value="10px">10px</option>
			              <option value="12px">12px</option>
			              <option value="14px">14px</option>
			              <option value="16px" selected>16px</option>
			              <option value="18px">18px</option>
			              <option value="20px">20px</option>
			            </select>
			            <select class="ql-font" title="字体">
			              <option value="SimSun">宋体</option>
			              <option value="SimHei">黑体</option>
			              <option value="Microsoft-YaHei">微软雅黑</option>
			              <option value="KaiTi">楷体</option>
			              <option value="FangSong">仿宋</option>
			              <option value="Arial">Arial</option>
			            </select>
			            <!-- Add subscript and superscript buttons -->
			            <select class="ql-color" value="color" title="字体颜色"></select>
			            <select class="ql-background" value="background" title="背景颜色"></select>
			            <select class="ql-align" value="align" title="对齐"></select>
			            <button class="ql-clean" title="还原"></button>
			            <!-- You can also add your own -->
			          </div>
	      </quill-editor>
	    </el-card>
		<div><img src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg" alt="上海鲜花港 - 郁金香" /></div>
		<div class="block">
		    <span class="demonstration">默认</span>
		    <el-date-picker
		      v-model="value1"
			  :picker-options="pickerBeginDateBefore"
		      type="date"
		      placeholder="选择日期">
		    </el-date-picker>
		 </div>
		 <div class="block">
		     <span class="demonstration">默认</span>
		     <el-date-picker
		       v-model="value2"
			   :picker-options="pickerBeginDateAfter"
		       type="date"
		       placeholder="选择日期">
		     </el-date-picker>
		 </div>
		  
	  </div>
</template>

<script>
	import {
	    quillEditor
	  } from 'vue-quill-editor'
	  import 'quill/dist/quill.core.css'
	  import 'quill/dist/quill.snow.css'
	  import 'quill/dist/quill.bubble.css'
	  //引入font.css 
	 
	  
	  export default {
	      name: 'FuncFormsEdit',
	      components: {
	        quillEditor
	      },
	      data() {
	        return {
			  value1:"",
			  value2:"",
	          content: null,
	          editorOption: {
				  placeholder: "请输入",
				  theme: "snow", // or 'bubble' 
					modules: {
						toolbar: {
							container: '#toolbar'
						}
					},
			 },
			 pickerBeginDateBefore: {
			         disabledDate: (time) => {
			           // this.electricityStatisticsEndDate是结束时间date控件的v-model值
			           let beginDateVal = this.value2
			           if (beginDateVal) {
			             return time.getTime() < beginDateVal.getTime() - 30 * 24 * 60 * 60 * 1000 || time.getTime() > beginDateVal.getTime()
			           }
			         }
			       },
			   pickerBeginDateAfter: {
			         disabledDate: (time) => {
			           // this.electricityStatisticsStartDate是开始时间date控件的v-model值
			           let beginDateVal = this.value1
			           if (beginDateVal) {
			             return time.getTime() > beginDateVal.getTime() + 30 * 24 * 60 * 60 * 1000 || time.getTime() < beginDateVal.getTime()
			           }
			         }
			   }
	        }
	      },
		  methods:{
			  getParentData() {
				  console.log('this.$parent.msg',this.$parent.$parent)
			  },
			  stopF5Refresh() {
				  document.onkeydown = function (e) {
					  var evt = window.event || e;
					  var code = evt.keyCode || evt.which
					  if(code === 116) {
						if(evt.preventDefault) {
							evt.preventDefault()
						}else{
							evt.keyCode = 0;
							evt.returnValue = false
						}  
					  }
				  }
			  },
			  
		  },
		  created() {
		  	this.stopF5Refresh()
		  }
	    }
</script>

<style scoped>
	img{
		cursor:url('https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg'),auto;
	}
</style>
