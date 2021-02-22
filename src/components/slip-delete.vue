<template>
	<div>
		<slip-del
		    v-for="(item, i) in list"
		    :key="i"
		    ref="slipDel"
		    del-text="删除商品"
		    @slip-open="slipOpen"
		    @del-click="del"
		  >
		    <div class="demo-item">
				dfjisajdiosjdio
			</div>
		    <div slot="del">删除icon可编辑</div>
		  </slip-del>
	</div>
</template>

<script>
	import SlipDel from 'vue-slip-delete'
	export default {
		components:{
			SlipDel
		},
		data() {
			return{
				list:[{
					
				}]
			}
		},
		methods:{
		slipOpen(vm) {
			      // 无需手动关闭
		},
		del() {
			      // 删除回调
		}
		}
	}
</script>

<style>
</style>
