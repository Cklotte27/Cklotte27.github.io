<template>
	<div id="Home">
		<Header></Header>
		<span style="color: white;">Home</span>
	</div>
</template>

<script>
	import Header from '../components/header/Header.vue';
	export default {
		name: 'Home',
		components: {
			Header,
		},
		created: function(){
			console.log(this);
			console.log("Homes")
		}
	};
</script>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Aclonica&display=swap');
	
	html, body {
		margin: 0;
	}
	#Home {
		font-family: Aclonica;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
		background-color: #192231;
		height: 100vh;
	}
</style>