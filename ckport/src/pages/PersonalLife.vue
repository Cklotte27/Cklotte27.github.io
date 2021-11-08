<template>
	<div id="app">
		<span style="color: white;">Personal Life</span>
	</div>
</template>

<script>
	export default {
		name: 'PersonalLife',
		components: {
		},
		created: function(){
			//console.log(this);
		}
	};
</script>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Aclonica&display=swap');
	
	html, body {
		margin: 0;
	}
	#app {
		font-family: Aclonica;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
		background-color: #192231;
		height: 100vh;
	}
</style>