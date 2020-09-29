<template>
	<div>
	    <viewer :images="signImages">
	        <img v-for="src in signImages" :src="src" :key="src" width="50">
	    </viewer>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				signImages : [
				    'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=85690711,3884201894&fm=27&gp=0.jpg',
				    'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3564877025,796183547&fm=27&gp=0.jpg'
				]
			}
		}
	}
</script>

<style>
</style>
